import { barcodeToLineBounds } from "../constants/barcode-to-line";
import { insertAt, mod10 } from "../utils/utils";
import { getFormattedLine } from "./get_formatted_line";

/**
 * Converte uma numeração de um código de barras para uma linha digitável
 */
export function convertBarcodeToLine(barcode: string, formatted = false) {
  let line = splitLine(barcode, barcodeToLineBounds);

  const parts = {
    line,
    part1: line.substring(0, 9),
    part2: line.substring(9, 19),
    part3: line.substring(19, 29),
    dv: line.substring(29, 30),
    part4: line.substring(30, 44),
  };

  line = insertAt(line, 9, mod10(parts.part1)); //  DV1
  line = insertAt(line, 20, mod10(parts.part2)); // DV2
  line = insertAt(line, 31, mod10(parts.part3)); // DV3

  if (formatted) {
    return getFormattedLine(line);
  }

  return line;
}

/**
 * Separa os dados do código de barras em partes de acordo com
 * as definições de cada banco
 *
 */
function splitLine(barcode: string, parts: any, separator = "") {
  return parts.reduce(
    (accu: string, part: [number, number]) =>
      accu + barcode.substring(part[0], part[1]) + separator,
    ""
  );
}
