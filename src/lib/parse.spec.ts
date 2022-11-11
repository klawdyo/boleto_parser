import { parse } from "./parse";

describe("parse", () => {
  it("should parse barcode", () => {
    const barcode = "07797900200000151300001112064449900815936556";

    const parsed = parse(barcode);
    console.log(parsed);

    expect(parsed).toMatchObject({
      expires_at: new Date("2022-05-31"),
      amount_number: 151.3,
      emitter: "0001/0644499",
      logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/inter.png",
      slug: "inter",
      bank: "077",
      currency: "9",
      mainChecksum: "7",
      expirationFactor: "9002",
      amount: "0000015130",
      variablePart: "0001112064449900815936556",
    });
  });

  it("should parse text line", () => {
    const barcode = "07790.00116 12064.449908 08159.365561 7 90020000015130";

    const parsed = parse(barcode);
    console.log(parsed);
  });
});
