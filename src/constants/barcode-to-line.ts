import { Bound } from "../types/bound.type";

export const barcodeToLineBounds: Bound[] = [
  // Parte 1
  [0, 4],
  [19, 20],
  [20, 24],
  // Parte 2
  [24, 29],
  [29, 34],
  // Parte 3
  [34, 39],
  [39, 44],
  // Dígito Verificador Geral
  [4, 5],
  // Parte 4
  [5, 19],
];
