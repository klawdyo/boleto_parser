import { BankLayout } from "../types/bank_layout.type";

export const Original: BankLayout = {
  code: "212",
  slug: "original",
  name: "Original",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/original.png",
  emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
  bounds: {
    // picpay
    agency: [19, 23],
    clientCode: [23, 33],
    ourNumber: [33, 44],
  },
};
