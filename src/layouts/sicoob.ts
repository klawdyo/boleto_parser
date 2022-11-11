import { BankLayout } from "../types/bank_layout.type";

export const Sicoob: BankLayout = {
  code: "756",
  slug: "sicoob",
  name: "Sicoob",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/sicoob.png",

  emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
  bounds: {
    type: [19, 20], // carteira
    agency: [20, 24], // agencia
    chargeMode: [24, 26], // modalidade de cobrança
    clientCode: [26, 33], // código do cedente
    ourNumber: [33, 41], // nosso numero incluindo o DV
    installment: [41, 44], // número da parcela
  },
};
