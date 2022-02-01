import { Interaction } from "discord.js";

import { Event, Command } from "@bot/interfaces";

export const event: Event = {
  name: "interactionCreate",
  run: async (client, interaction: Interaction) => {
    if (!interaction.isCommand() || !interaction.guildId) return;

    if (!interaction.commandName) return;

    const command = client.commands.get(interaction.commandName);

    try {
      if (command) {
        await interaction.deferReply();
        const response = await (command as Command).run(
          client,
          interaction,
          interaction.options
        );

        await interaction.editReply(response);
      }
    } catch (error) {
      console.log(error);
      await interaction.editReply({
        content: `Ocorreu um erro ao executar o comando. \`\`\`${error}\`\`\``,
      });
    }
  },
};
