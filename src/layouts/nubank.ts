import { BankLayout } from "../types/bank_layout.type";

export const Nubank: BankLayout = {
  code: "260",
  slug: "nubank",
  name: "Nubank",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/inter.png",
  emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
  bounds: {
    agency: [19, 23],
    type: [23, 26], // carteira
    clientCode: [26, 33],
    ourNumber: [33, 43],
    dvOurNumber: [43, 44],
  },
};
