import { BankLayout } from "../types/bank_layout.type";

export const BTG: BankLayout = {
  code: "208",
  slug: "btg",
  name: "BTG",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/btg.png",
  emitter: (bounds) => `${bounds.agency}/${bounds.unknown}`,
  bounds: {
    // Usado no aliexpress
    agency: [19, 23],
    type: [23, 25],
    ourNumber: [25, 36],
    unknown: [36, 44],
  },
};
