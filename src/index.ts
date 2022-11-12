import { isLine as _isLine } from "./lib/is_line";
import { isBarcode as _isBarcode } from "./lib/is_barcode";
import { getBankByCode as _getBankByCode } from "./lib/get_bank_by_code";
import { parse as _parse, parseBarcode as _parseBarcode } from "./lib/parse";
import { getFormattedLine as _getFormattedLine } from "./lib/get_formatted_line";
import { convertBarcodeToLine as _convertBarcodeToLine } from "./lib/convert_barcode_to_line";
import { convertLineToBarcode as _convertLineToBarcode } from "./lib/convert_line_to_barcode";

export const parse = _parse;
export const isLine = _isLine;
export const isBarcode = _isBarcode;
export const parseBarcode = _parseBarcode;
export const getBankByCode = _getBankByCode;
export const getFormattedLine = _getFormattedLine;
export const convertBarcodeToLine = _convertBarcodeToLine;
export const convertLineToBarcode = _convertLineToBarcode;

export default {
  parse,
  isLine,
  isBarcode,
  parseBarcode,
  getBankByCode,
  getFormattedLine,
  convertLineToBarcode,
  convertBarcodeToLine,
};
