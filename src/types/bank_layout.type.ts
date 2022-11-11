import { BilletBounds } from "./billet_bounds.type";

export type BankLayout = {
  /**
   * Código do banco com 3 caracteres
   */
  code: string;

  /**
   * Nome do banco em minúsculas, sem acentos e espaços.
   */
  slug: string;

  /**
   * Nome completo do banco
   */
  name: string;

  /**
   * URL da imagem do banco
   */
  logo: string;

  /**
   * Dados do emissor do boleto.
   * Alguns bancos usam código de cliente, numero de agência, número de conta etc.
   *
   */
  emitter: (bounds: Record<string, string | number>) => string;

  /**
   * Identificadores de início e final de cada uma das partes
   * do boleto
   */
  bounds: BilletBounds;
};
