import { BankLayout } from "../types/bank_layout.type";

export const Juno: BankLayout = {
  code: "383",
  slug: "juno",
  name: "Juno",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/juno.png",
  emitter: (bounds) => `${bounds.clientCode}`,
  bounds: {
    //ebanx, associação
    clientCode: [19, 28],
    ourNumber: [28, 43],
    type: [43, 44],
  },
};
