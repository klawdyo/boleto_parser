import { mod11 } from "../utils/utils";

/**
 * Verifica se o código informado é uma numeração de código de barras
 *
 */
export function isBarcode(code: string) {
  return /[0-9]{44}/.test(code) && isBarcodeValid(code);
}

/**
 * Valida se o dígito verificador principal é válido
 *
 * @param line Linha digitável
 * @returns
 */
export function isBarcodeValid(barcode: string): boolean {
  const mainChecksum = barcode.substring(4, 5);
  barcode = barcode.substring(0, 4) + barcode.substring(5);

  return mod11(barcode) === +mainChecksum;
}
