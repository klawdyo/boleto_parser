import { BankLayout } from "../types/bank_layout.type";

export const BankOfAmerica: BankLayout = {
  code: "755",
  slug: "bankofamerica",
  name: "Bank of America",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bankofamerica.png",
  emitter: (bounds) => `${bounds.clientCode}`,
  bounds: {
    // amazon
    clientCode: [19, 31],
    ourNumber: [31, 41],
    type: [41, 43],
    end: [43, 44],
  },
};
