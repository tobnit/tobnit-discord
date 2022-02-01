import { CommandInteractionOptionResolver, Interaction } from "discord.js";

import Client from "@bot/client";
import { Command } from "@bot/interfaces";

export const command: Command = {
  name: "ping",
  description: "Verifica o tempo de resposta do servidor.",
  options: [],
  run: async (
    client: Client,
    interaction: Interaction,
    options: CommandInteractionOptionResolver
  ) => {
    return `**Pong!** \nO servidor respondeu em ${client.ws.ping}ms!`;
  },
};
