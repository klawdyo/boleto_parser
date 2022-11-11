import { Bound } from "../types/bound.type";

export const lineToBarcode: Bound[] = [
  [0, 4], // banco/moeda
  [32, 33], // dv geral
  [33, 37], // fator vencimento
  [37, 47], // valor
  [4, 9], // carteira-parte1
  // [9,10], // Ignore o  DV1 da linha digitável
  [10, 20], // nosso numero
  // [20,21] // Ignore o DV2 da linha digitável
  [21, 31], // conta corrent
  // [31, 32] // Ignore o  DV3 da linha digitável
];
