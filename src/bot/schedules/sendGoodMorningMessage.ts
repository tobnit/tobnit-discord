import { Message } from "discord.js";

import Client from "#bot/client";
import { goodMorningMessages } from "#bot/data";
import { ScheduleHelper } from "#bot/helpers";
import { Schedule } from "#bot/interfaces";

export const schedule: Schedule = {
  name: "sendGoodMorningMessage",
  timerRules: ScheduleHelper.createTimerRule({ hour: 7, minute: 30 }),
  callback: async (client: Client) => {
    const messages = goodMorningMessages;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const sendMessage = (message: Message) => {
      message.channel.send(randomMessage);
    };

    client.once("messageCreate", sendMessage);

    const fourHoursInMilliseconds = 14400000;
    setTimeout(() => {
      client.off("messageCreate", sendMessage);
    }, fourHoursInMilliseconds);
  },
};
