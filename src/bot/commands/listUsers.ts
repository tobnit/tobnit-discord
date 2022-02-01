import { CommandInteractionOptionResolver, Interaction } from "discord.js";
import moment from "moment";

import Client from "#bot/client";
import { Command } from "#bot/interfaces";
import { MessageHelper } from "#bot/helpers";

import { UserRepository } from "#shared/repositories";

export const command: Command = {
  name: "listar-usuarios",
  description: "Lista todos os usuários do banco de dados",
  options: [],
  run: async (
    client: Client,
    interaction: Interaction,
    options: CommandInteractionOptionResolver
  ) => {
    const repository = new UserRepository();
    const messageHelper = new MessageHelper();

    const users = await repository.findAll();
    users.forEach(async user => {
      const updatedAtFormatted = moment(user.updatedAt).format(
        "DD/MM/YYYY HH:mm:ss"
      );

      const embed = messageHelper.createEmbedMessage({
        author: "Dados do Usuário",
        title: `Id: ${user.id}`,
        description: `**Nome:** ${user.name}\n**CPF:** ${user.cpf}\n**Numero da Conta:** ${user.accountNumber}\n**Assinatura eletrônica:** ${user.electronicSignature}\n**Senha de acesso:** ${user.accessPassword}\n**Ultima atualização:** ${updatedAtFormatted}`,
        color: "#0099FF",
      });

      await interaction.channel.send({ embeds: [embed] });
    });

    return { content: "Lista de usuários" };
  },
};
