import { BankLayout } from "../types/bank_layout.type";

export const BB: BankLayout = {
  code: "001",
  slug: "bb",
  name: "Banco do Brasil",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png",
  emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
  bounds: {
    // Nosso número sem DV
    ourNumber: [19, 30],
    // Agência, sem DV
    agency: [30, 34],
    // Código do cedente, sem DV. No boleto este código pode
    // aparecer no campo "Nr. do Documento"
    clientCode: [34, 42],
    // Tipo de Modalidade Carteira
    type: [42, 44],
  },
};
