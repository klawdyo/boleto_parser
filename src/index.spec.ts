import {
  parse,
  isLine,
  isBarcode,
  getBankByCode,
  getFormattedLine,
  convertBarcodeToLine,
  convertLineToBarcode,
} from ".";

describe("Index", () => {
  test("parse", () => {
    expect(parse).toBeDefined();
  });

  test("isLine", () => {
    expect(isLine).toBeDefined();
  });

  test("isBarcode", () => {
    expect(isBarcode).toBeDefined();
  });

  test("getBankByCode", () => {
    expect(getBankByCode).toBeDefined();
  });

  test("getFormattedLine", () => {
    expect(getFormattedLine).toBeDefined();
  });

  test("convertBarcodeToLine", () => {
    expect(convertBarcodeToLine).toBeDefined();
  });

  test("convertLineToBarcode", () => {
    expect(convertLineToBarcode).toBeDefined();
  });
});
