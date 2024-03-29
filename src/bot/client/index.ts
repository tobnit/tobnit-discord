import { Client, Collection } from "discord.js";
import { connect } from "mongoose";
import path from "path";
import { readdirSync } from "fs";

import { Command, Config, Event } from "#bot/interfaces";
import { Schedule } from "#bot/core";

class ExtendedClient extends Client {
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();
  private schedule: Schedule = new Schedule();

  private config: Config = {
    environment: process.env.ENVIRONMENT || "development",
    botToken: process.env.BOT_TOKEN || "",
    dbHost: process.env.DB_HOST || "",
    dbUser: process.env.DB_USER || "",
    dbPass: process.env.DB_PASS || "",
  };

  public async init() {
    this.login(this.config.botToken);

    const mongURI = `mongodb+srv://${this.config.dbUser}:${this.config.dbPass}@${this.config.dbHost}/${this.config.environment}`;
    connect(mongURI);

    const commandPath = path.join(__dirname, "..", "commands");
    readdirSync(commandPath).forEach(file => {
      const { command } = require(`${commandPath}/${file}`);
      this.commands.set(command.name, command);
    });

    const eventPath = path.join(__dirname, "..", "events");
    readdirSync(eventPath).forEach(async file => {
      const { event } = await import(`${eventPath}/${file}`);
      this.events.set(event.name, event);
      this.on(event.name, event.run.bind(null, this));
    });

    const schedulePath = path.join(__dirname, "..", "schedules");
    readdirSync(schedulePath).forEach(async file => {
      const { schedule } = await import(`${schedulePath}/${file}`);
      this.schedule.add(
        schedule.name,
        schedule.timerRules,
        schedule.callback.bind(null, this)
      );
    });
  }
}

export default ExtendedClient;
