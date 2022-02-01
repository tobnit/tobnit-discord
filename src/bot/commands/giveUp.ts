import { CommandInteractionOptionResolver, Interaction } from "discord.js";

import Client from "#bot/client";
import { Command } from "#bot/interfaces";
import { TicTacToeService } from "#bot/services";

export const command: Command = {
  name: "desistir",
  description: "Comando para desistir do jogo atual.",
  options: [],
  run: async (
    client: Client,
    interaction: Interaction,
    options: CommandInteractionOptionResolver
  ) => {
    const playerId = interaction.user.id;

    const ticTacToeService = new TicTacToeService(interaction);
    await ticTacToeService.deleteGameByFirstPlayer(playerId);

    return `O jogador <#${playerId}> desistiu da partida.\nFicou com medinho foi? :clown:`;
  },
};
