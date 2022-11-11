import { BilletBounds } from "../types/billet_bounds.type";

//   comum a todos os bancos
export const defaultLayout: BilletBounds = {
  // Código do banco
  bank: [0, 3],
  // Moeda = 9 (real)
  currency: [3, 4],
  // DV principal
  mainChecksum: [4, 5],
  // Fator de vencimento. Dias passados desde 07/10/1997
  expirationFactor: [5, 9],
  // Valor do boleto
  amount: [9, 19],
  // Parte variável do banco
  variablePart: [19, 44],
};
