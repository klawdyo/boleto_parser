import { isLine } from "./is_line";

describe("isLine", () => {
  //
  // Banco do Brasil
  //

  it("BTG", () => {
    expect(
      isLine("20890.00802 10001.72445 87700.00080 0 1588990000014568")
    ).toBeTruthy();
  });

  //
  // Bank of america
  //
  it("Bank Of America", () => {
    expect(
      isLine("75590.00331 89850.764971 43344.109848 2 88960000027968")
    ).toBeTruthy();

    expect(
      isLine("75590.00331 89850.760466 93951.179741 5 88970000004790")
    ).toBeTruthy();

    expect(
      isLine("75590.00331 89850.768600 74160.139841 4 88970000008800")
    ).toBeTruthy();
  });

  //
  // Gerencianet
  //
  it("Gerencianet", () => {
    expect(
      isLine("36490.00076 00029.480100 00000.000018 1 00000000005990")
    ).toBeTruthy();

    expect(
      isLine("36490.00035 00029.480100 00000.000034 8 00000000005990")
    ).toBeTruthy();

    expect(
      isLine("36490.00019 00029.480100 00000.000059 5 00000000005990")
    ).toBeTruthy();
  });

  //
  // Inter
  //
  it("Inter", () => {
    expect(
      isLine("07790.00116 12064.929008 08202.473388 6 90020000015130")
    ).toBeTruthy();

    expect(
      isLine("07790.00116 12064.929008 08202.480391 5 90020000015030")
    ).toBeTruthy();

    expect(
      isLine("07790.00116 12064.929008 08202.492016 7 90020000015000")
    ).toBeTruthy();

    expect(
      isLine("07790.00116 12064.449908 08159.364242 7 90020000015030")
    ).toBeTruthy();

    expect(
      isLine("07790.00116 12064.449908 08159.355414 8 90020000015030")
    ).toBeTruthy();

    expect(
      isLine("07790.00116 12064.449908 08159.355588 2 90020000015030")
    ).toBeTruthy();

    expect(
      isLine("07790.00116 12064.449908 08159.365561 7 90020000015130")
    ).toBeTruthy();
  });

  //
  // Sicoob
  //
  it("Sicoob", () => {
    expect(
      isLine("75691.41943 01047.712508 31053.920018 1 89810000040500")
    ).toBeTruthy();
  });

  //
  // Sicred
  //
  it("Sicred", () => {
    expect(
      isLine("74893.11527 21893.422044 01096.281009 6 64140000024000")
    ).toBeTruthy();
  });
});
