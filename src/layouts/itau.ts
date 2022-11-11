import { BankLayout } from "../types/bank_layout.type";

export const Itau: BankLayout = {
  code: "341",
  slug: "itau",
  name: "Itau",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/itau.png",
  emitter: (bounds) => `${bounds.agency}/${bounds.account}-${bounds.accountDV}`,
  bounds: {
    type: [19, 22],
    ourNumber: [22, 30],
    ourNumberDV: [30, 31],
    agency: [31, 35],
    account: [35, 40],
    accountDV: [40, 41],
    fixedZeros: [41, 44],
  },
};
