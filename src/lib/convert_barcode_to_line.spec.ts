import { convertBarcodeToLine } from "./convert_barcode_to_line";

describe("Index", () => {
  test("convert barcode to line", () => {
    const barcode = "07797900200000151300001112064449900815936556";

    const textLine = convertBarcodeToLine(barcode);
    console.log(textLine);

    expect(textLine).toBe("07790001161206444990808159365561790020000015130");
    expect(textLine.length).toBe(47);
  });

  test("convert barcode to formatted line", () => {
    const barcode = "07797900200000151300001112064449900815936556";

    const formattedLine = convertBarcodeToLine(barcode, true);
    console.log(formattedLine);

    expect(formattedLine).toBe(
      "07790.00116 12064.449908 08159.365561 7 90020000015130"
    );
    expect(formattedLine.length).toBe(54);
  });
});
