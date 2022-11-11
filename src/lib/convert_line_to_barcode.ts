import { lineToBarcode } from "../constants/line-to-barcode";

/**
 * Converte uma linha digitável para uma numeração de código de barras
 */
export function convertLineToBarcode(line: string) {
  let output = line.replace(/[^\d]/g, "");

  const parts = lineToBarcode.reduce(
    (accu, curr) => accu + output.substring(curr[0], curr[1]),
    ""
  );

  return parts;
}
