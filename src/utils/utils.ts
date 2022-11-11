// insere
export function insertAt(
  original: string,
  position: number,
  insert: string | number
) {
  const part1 = String(original).slice(0, position);
  const part2 = String(original).slice(position);
  // console.log('part:', part1, part2)
  return part1 + insert + part2;
}

/**
 * Calcula a data a partir de um fator de vencimento
 
 * @returns {Date} objeto de data
 */
export function expirationFactorToDate(factor: string) {
  if (factor === "0000") {
    return null;
  }

  const msByDay = 1000 * 60 * 60 * 24;
  const days1 = new Date("1997-10-07").getTime() / msByDay;
  return new Date((+factor + days1) * msByDay);
}

/**
 * Calcula o mod10 dos números informados para determinar os dvs usados no banco
 */
export function mod10(value: string) {
  const multipliers = getMultipliers(value, [2, 1]);

  const sum: number = value
    .split("")
    .map((part, i) => {
      // Multiplicar o item pelo multiplicador correspondente
      const product = "" + +part * multipliers[i];
      // Caso o produto seja maior que 10, seus algarismos devem ser somados.
      // Ex.: 14 = 1 + 4 = 5
      const output = +product >= 10 ? +product[0] + +product[1] : product;
      // console.log('i',i,'part', part, 'mult', multipliers[i], 'product', product, 'novoproduto:',output)
      // Retorna o produto calculado seguindo as regras acima
      return output;
    })
    // Faz a soma de trás para a frente
    .reduceRight<number>((accu, curr) => +accu + +curr, 0);

  // Pega o resto da divisão da soma por 10
  const rest = +sum % 10;

  // Se o resto for diferente de 0, retorne 10-resto. Senão retorne o próprio resto
  const checksum = rest != 0 ? 10 - rest : rest;
  // console.log( { value, sum, rest, checksum, DV: calcDV(sum) } )

  return checksum;
}

/**
 * Calcula o módulo 11 de um valor usando os multiplicadores 2,3,4,5,6,7,8,9.
 *
 * @param {string} line: Linha digitável
 */
export function mod11(line: string) {
  const digits = line.split("");
  const multipliers = getMultipliers(line, [2, 3, 4, 5, 6, 7, 8, 9]);

  const sum = digits.reduce((accu: number, curr: string, idx: number) => {
    return accu + +curr * multipliers[idx];
  }, 0);

  const mod = sum % 11;

  return mod > 1 ? 11 - mod : 1;
}

export function calcDV(sum: number) {
  return Math.ceil(sum / 10) * 10 - sum;
}

// Gera os multiplicadores começando do 2 de acordo com o tamanho
// data string originale depois inverte para que o último número
// sempre seja o 2
// export function getMultipliers(v: string) {
//   return [...Array(v.length)].map((_, i) => ((i + 1) % 2) + 1).reverse();
// }

/**
 *
 * @param numberSequence  Sequência numérica do tamanho certo para calcular o
 *                        número exato de caracteres
 * @param multipliers     Sequência de multiplicadores. Os multiplicadores serão
 *                        usados da direita para a esquerda e o retorno será
 *                        exatamente do tamanho da sequência principal.
 * @returns
 */
export function getMultipliers(numberSequence: string, multipliers: number[]) {
  let index = 0;
  return [...Array(numberSequence.length)]
    .map(() => {
      const meupau = multipliers[index];

      if (index < multipliers.length - 1) index++;
      else index = 0;

      return meupau;
    })
    .reverse();
}
