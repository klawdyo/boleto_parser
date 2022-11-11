import { convertLineToBarcode } from "./convert_line_to_barcode";

describe("convertLineToBarcode", () => {
  test("convert line to barcode", () => {
    const textLine = "07790.00116 12064.449908 08159.365561 7 90020000015130";

    const barcode = convertLineToBarcode(textLine);

    expect(barcode).toBe("07797900200000151300001112064449900815936556");
    expect(barcode.length).toBe(44);
  });
});
