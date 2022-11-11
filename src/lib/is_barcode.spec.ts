import { isBarcode } from "./is_barcode";
import { isLine } from "./is_line";

describe("isBarcode", () => {
  it("should be a barcode", () => {
    expect(
      isBarcode("07797900200000151300001112064449900815936556")
    ).toBeTruthy();
  });

  it("should not be a barcode", () => {
    expect(
      isBarcode("07797900200000151300001112064449900815936556000")
    ).toBeFalsy();
  });
});
