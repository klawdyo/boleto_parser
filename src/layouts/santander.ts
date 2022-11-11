import { BankLayout } from "../types/bank_layout.type";

export const Santander: BankLayout = {
  code: "033",
  slug: "santander",
  name: "Santander",
  logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/santander.png",
  emitter: (bounds) => `${bounds.clientCode}`,
  bounds: {
    // galaxpay
    // A partir do caractere 19 (20, se contar do 1)
    // Fixo “9”
    fixNine: [19, 20],
    // Código do beneficiário padrão Santander
    clientCode: [20, 27],
    // Nosso Número com DV
    ourNumber: [27, 40],
    // Fixo “0”
    fixZero: [40, 41],
    // Tipo de Modalidade Carteira
    // 101-Cobrança Rápida COM Registro
    // 104-Cobrança Eletrônica COM Registro
    type: [41, 44],
  },
};
