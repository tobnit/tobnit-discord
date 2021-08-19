import MessageHelper from "../Helpers/MessageHelpers";
import { Command } from "../Interfaces";

export const command: Command = {
  name: "status",
  aliases: ["s"],
  description: "Define your status",
  run: async (client, message, args) => {
    const messageHelper = new MessageHelper();
    const embedMessage = messageHelper.createEmbedMessage({
      title: "Defina seu status",
      description: `Clique em algum dos emojis para definir seu status \n\n ✅ Disponível ⛔ Ocupado ☕ Café`,
      color: "WHITE",
    });

    const messageSent = await message.channel.send({ embeds: [embedMessage] });

    messageSent.react("✅");
    messageSent.react("⛔");
    messageSent.react("☕");
  },
};