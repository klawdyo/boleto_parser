import { convertBarcodeToLine, convertLineToBarcode, parse } from ".";

describe("Index", () => {
  test("convertLineToBarcode", () => {
    expect(convertBarcodeToLine).toBeDefined();
  });

  test("convertLineToBarcode", () => {
    expect(convertLineToBarcode).toBeDefined();
  });

  test("parse", () => {
    expect(parse).toBeDefined();
  });
});
