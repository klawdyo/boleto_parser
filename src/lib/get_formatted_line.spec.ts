import { getFormattedLine } from "./get_formatted_line";

describe("getFormattedLine", () => {
  it("should get formatted line", () => {
    expect(
      getFormattedLine("07790001161206444990808159365561790020000015130")
    ).toBe("07790.00116 12064.449908 08159.365561 7 90020000015130");
  });
});
