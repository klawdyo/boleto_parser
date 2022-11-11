import { BankLayout } from "../types/bank_layout.type";

import { BankOfAmerica } from "./bank-of-america";
import { BB } from "./bb";
import { Bradesco } from "./bradesco";
import { BTG } from "./btg";
import { Caixa } from "./caixa";
import { Gerencianet } from "./gerencianet";
import { Inter } from "./inter";
import { Itau } from "./itau";
import { Juno } from "./juno";
import { Original } from "./original";
import { Santander } from "./santander";
import { Sicoob } from "./sicoob";

export const Layouts: Record<string, BankLayout> = {
  bankOfAmerica: BankOfAmerica,
  bb: BB,
  bradesco: Bradesco,
  btg: BTG,
  caixa: Caixa,
  gerencianet: Gerencianet,
  inter: Inter,
  itau: Itau,
  juno: Juno,
  original: Original,
  santander: Santander,
  sicoob: Sicoob,
};
