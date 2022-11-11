import { Bound } from "../types/bound.type";
import { mod10, getMultipliers, mod11 } from "../utils/utils";
import { convertLineToBarcode } from "./convert_line_to_barcode";
import { isBarcodeValid } from "./is_barcode";

/**
 * - Verifica se o código informado é uma linha digitável
 * - Verifica se os dígitos verificadores estão corretos
 */
export function isLine(code: string) {
  const line = code.replace(/[^0-9]+/g, "");

  if (line.length !== 47) return false;

  return (
    isBarcodeValid(convertLineToBarcode(line)) &&
    checkSumValidate(line, [0, 9], [9, 10]) &&
    checkSumValidate(line, [10, 20], [20, 21]) &&
    checkSumValidate(line, [21, 31], [31, 32])
  );
}

/**
 * Valida os dígitos verificadores das 3 primeiras partes da linha digitável
 *
 * @param line Linha digitável
 * @param lineBounds Limites da parte da linha digitável que contém o trecho a validar o DV
 * @param checksumBounds Limites que contém o DV
 * @returns
 */
function checkSumValidate(
  line: string,
  lineBounds: Bound,
  checksumBounds: Bound
): boolean {
  const part = line.substring(lineBounds[0], lineBounds[1]);
  const checksum = line.substring(checksumBounds[0], checksumBounds[1]);

  return mod10(part) === +checksum;
}
