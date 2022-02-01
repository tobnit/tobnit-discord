import {
  ApplicationCommandOption,
  CommandInteractionOptionResolver,
  Interaction,
  InteractionReplyOptions,
  MessagePayload,
} from "discord.js";

import Client from "#bot/client";

interface Run {
  (
    client: Client,
    interaction: Interaction,
    options: CommandInteractionOptionResolver
  ): Promise<string | MessagePayload | InteractionReplyOptions>;
}

export type CommandResponse = Promise<
  string | MessagePayload | InteractionReplyOptions
>;

export interface Command {
  name: string;
  description: string;
  options: ApplicationCommandOption[];
  run: Run;
}
