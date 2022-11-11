import { BankLayout } from "../types/bank_layout.type";

export const Bradesco: BankLayout = {
  code: "237",
  slug: "bradesco",
  name: "Bradesco",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bradesco.png",
  emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
  bounds: {
    agency: [19, 23],
    type: [23, 25],
    ourNumber: [25, 36],
    clientCode: [36, 43],
    fixedZero: [43, 44],
  },
};
