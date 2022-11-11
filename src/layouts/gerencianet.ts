import { BankLayout } from "../types/bank_layout.type";

export const Gerencianet: BankLayout = {
  code: "364",
  slug: "gerencianet",
  name: "Gerencianet",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/gerencianet.png",

  emitter: (bounds) => `${bounds.clientCode}`,
  bounds: {
    unknown: [19, 24], // desconhecido
    clientCode: [24, 33],
    ourNumber: [33, 44],
  },
};
