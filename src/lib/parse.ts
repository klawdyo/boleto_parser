import { defaultLayout } from "../constants/default-layout";
import { BankLayout } from "../types/bank_layout.type";
import { BilletBounds } from "../types/billet_bounds.type";
import { expirationFactorToDate } from "../utils/utils";
import { convertLineToBarcode } from "./convert_line_to_barcode";
import { getBankByCode } from "./get_bank_by_code";
import { isLine } from "./is_line";

/**
 *
 * @param code
 * @returns
 */
export function parse(code: string) {
  if (isLine(code)) {
    code = convertLineToBarcode(code);
  }

  const bank = getBankByCode(code.substring(0, 3));

  if (code && bank) {
    return parseBarcode(code, bank);
  }

  return null;
}

/**
 * Efetua a análise do código de barras
 */
export function parseBarcode(code: string, layout: BankLayout) {
  const parts = layout.bounds;

  // Valor de saída
  const output: Record<string, string> = <Record<string, string>>{};

  // Bounds do layout padrão e o layout específico
  const merged: BilletBounds = { ...defaultLayout, ...parts };

  // Loop pelas chaves
  Object.keys(merged).forEach((key) => {
    const bounds = merged[key];
    output[key] = code.substring(bounds[0], bounds[1] || bounds[0]);
  });

  //
  return {
    expires_at: expirationFactorToDate(output.expirationFactor),
    amount_number: Number(output.amount) / 100,
    emitter: layout.emitter(output),
    logo: layout.logo,
    slug: layout.slug,
    ...output,
  };

  // return output
}
