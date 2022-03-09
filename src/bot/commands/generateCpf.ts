import { Command } from "#bot/interfaces";

import { generateCpf } from "#bot/helpers";

export const command: Command = {
  name: "gerar-cpf",
  description: "Gerar um cpf fake para realizar testes no Onboarding PF",
  options: [],
  run: async () => {
    const { data } = await generateCpf();

    return {
      content: `CPF Gerado com sucesso!\n${data}`,
    };
  },
};
