import { Layouts } from "../layouts";
import { BankLayout } from "../types/bank_layout.type";

/**
 * Retorna os dados do layout a partir do código do banco
 *
 */
export function getBankByCode(bankCode: string): BankLayout | null {
  const bank = Object.values(Layouts).find((bank) => bank.code === bankCode);

  if (!bank) return null;

  return bank;
}
