import { getBankByCode } from "./get_bank_by_code";

describe("getBankByCode", () => {
  it("should get bank", () => {
    expect(getBankByCode("001")?.code).toBe("001");
  });

  it("should returns null", () => {
    expect(getBankByCode("000")).toBeNull();
  });
});
