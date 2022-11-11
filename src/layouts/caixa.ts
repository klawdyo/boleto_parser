import { BankLayout } from "../types/bank_layout.type";

export const Caixa: BankLayout = {
  code: "104",
  slug: "caixa",
  name: "Caixa",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/caixa.png",
  emitter: (bounds) => `${bounds.clientCode}`,
  bounds: {
    // casa
    ourNumber: [19, 28],
    clientCode: [28, 44],
  },
};
