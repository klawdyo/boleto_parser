const layouts = {
  BB: {
    code: "001",
    slug: "bb",
    logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png",
    emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
    bounds: {
      // cora
      // Nosso número sem DV
      ourNumber: [19, 30],
      // Agência, sem DV
      agency: [30, 34],
      // Código do cedente, sem DV. No boleto este código pode
      // aparecer no campo "Nr. do Documento"
      clientCode: [34, 42],
      // Tipo de Modalidade Carteira
      type: [42, 44],
    },
  },

  Santander: {
    code: "033",
    slug: "santander",
    logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/santander.png",
    emitter: (bounds) => `${bounds.clientCode}`,
    bounds: {
      // galaxpay
      // A partir do caractere 19 (20, se contar do 1)
      // Fixo “9”
      fixNine: [19, 20],
      // Código do beneficiário padrão Santander
      clientCode: [20, 27],
      // Nosso Número com DV
      ourNumber: [27, 40],
      // Fixo “0”
      fixZero: [40, 41],
      // Tipo de Modalidade Carteira
      // 101-Cobrança Rápida COM Registro
      // 104-Cobrança Eletrônica COM Registro
      type: [41, 44],
    },
  },

  Bradesco: {
    code: "237",
    slug: "bradesco",
    logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bradesco.png",
    emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
    bounds: {
      agency: [19, 23],
      type: [23, 25],
      ourNumber: [25, 36],
      clientCode: [36, 43],
      fixedZero: [43, 44],
    },
  },

  Original: {
    code: "212",
    slug: "original",
    // logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png',
    emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
    bounds: {
      // picpay
      agency: [19, 23],
      clientCode: [23, 33],
      ourNumber: [33, 44],
    },
  },

  Caixa: {
    code: "104",
    slug: "caixa",
    logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/caixa.png",
    emitter: (bounds) => `${bounds.clientCode}`,
    bounds: {
      // casa
      ourNumber: [19, 28],
      clientCode: [28, 44],
    },
  },

  BankOfAmerica: {
    code: "755",
    slug: "bankofamerica",
    // logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png',
    emitter: (bounds) => `${bounds.clientCode}`,
    bounds: {
      // amazon
      clientCode: [19, 31],
      ourNumber: [31, 41],
      type: [41, 43],
      end: [43, 44],
    },
  },

  Juno: {
    code: "383",
    slug: "juno",
    // logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png',
    emitter: (bounds) => `${bounds.clientCode}`,
    bounds: {
      //ebanx, associação
      clientCode: [19, 28],
      ourNumber: [28, 43],
      type: [43, 44],
    },
  },

  Itau: {
    code: "341",
    slug: "itau",
    logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/itau.png",
    emitter: (bounds) =>
      `${bounds.agency}/${bounds.account}-${bounds.accountDV}`,
    bounds: {
      type: [19, 22],
      ourNumber: [22, 30],
      ourNumberDV: [30, 31],
      agency: [31, 35],
      account: [35, 40],
      accountDV: [40, 41],
      fixedZeros: [41, 44],
    },
  },

  BTGPactual: {
    code: "208",
    slug: "btg",
    // logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png',
    emitter: (bounds) => `${bounds.agency}/${bounds.unknown}`,
    bounds: {
      // Usado no aliexpress
      agency: [19, 23],
      type: [23, 25],
      ourNumber: [25, 36],
      unknown: [36, 44],
    },
  },

  Inter: {
    code: "077",
    slug: "inter",
    logo: "https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/inter.png",
    emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
    bounds: {
      agency: [19, 23],
      type: [23, 26], // carteira
      clientCode: [26, 33],
      ourNumber: [33, 43],
      dvOurNumber: [43, 44],
    },
  },

  Gerencianet: {
    code: "364",
    slug: "gerencianet",
    // logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png',

    emitter: (bounds) => `${bounds.clientCode}`,
    bounds: {
      unknown: [19, 24], // desconhecido
      clientCode: [24, 33],
      ourNumber: [33, 44],
    },
  },
  Sicoob: {
    code: "756",
    slug: "sicoob",
    // logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/bb.png',

    emitter: (bounds) => `${bounds.agency}/${bounds.clientCode}`,
    bounds: {
      type: [19, 20], // carteira
      agency: [20, 24], // agencia
      chargeMode: [24, 26], // modalidade de cobrança
      clientCode: [26, 33], // código do cedente
      ourNumber: [33, 41], // nosso numero incluindo o DV
      installment: [41, 44], // número da parcela
    },
  },
};

// Layout da parte do Código de barras
//   comum a todos os bancos
const defaultLayout = {
  // Código do banco
  bank: [0, 3],
  // Moeda = 9 (real)
  currency: [3, 4],
  // DV principal
  mainChecksum: [4, 5],
  // Fator de vencimento. Dias passados desde 07/10/1997
  expirationFactor: [5, 9],
  // Valor do boleto
  amount: [9, 19],
  // Parte variável do banco
  variablePart: [19, 44],
};

/**
 *
 */
function parseBarcode(code, layout) {
  const parts = layout?.bounds || {};

  const output = {};
  const merged = { ...defaultLayout, ...parts };
  Object.keys(merged).forEach((key) => {
    const bounds = merged[key];
    // console.log(bounds)
    output[key] = code.substring(bounds[0], bounds[1] || bounds[0]);
  });
  //
  return {
    expires_at: expirationFactorToDate(output.expirationFactor),
    amount_number: Number(output.amount) / 100,
    emitter: layout.emitter(output),
    logo: layout.logo,
    slug: layout.slug,
    ...output,
  };

  // return output
}

/**
 * Retorna os dados do layout a partir do código do banco
 *
 */
function getBankByCode(bankCode) {
  return Object.values(layouts).find((bank) => bank.code === bankCode);
}

/**
 *
 */
function getFormattedLine(line) {
  let out = line.replace(/[^\d]+/g, "");

  out = insertAt(out, 5, ".");
  out = insertAt(out, 11, " ");
  out = insertAt(out, 17, ".");
  out = insertAt(out, 24, " ");
  out = insertAt(out, 30, ".");
  out = insertAt(out, 37, " ");
  out = insertAt(out, 39, " ");

  return out;
}

function parse(code) {
  if (isLine(code)) {
    code = convertLineToBarcode(code);
  }

  if (code) {
    return parseBarcode(code, getBankByCode(code.substr(0, 3)));
  }

  return null;
}
module.exports.parse = parse;

/**
 * Verifica se o código informado é uma linha digitável
 */
function isLine(code) {
  return String(code).replace(/[^0-9]+/g, "").length > 45;
}

/**
 * Verifica se o código informado é uma numeração de código de barras
 *
 */
function isBarcode(code) {
  return String(code).replace(/[^0-9]+/g, "").length < 45;
}

/**
 * Converte uma linha digitável para uma numeração de código de barras
 */
function convertLineToBarcode(line) {
  let output = line.replace(/[^\d]/g, "");

  const parts = [
    [0, 4], // banco/moeda
    [32, 33], // dv geral
    [33, 37], // fator vencimento
    [37, 47], // valor
    [4, 9], // carteira-parte1
    // [9,10], // Ignore o  DV1 da linha digitável
    [10, 20], // nosso numero
    // [20,21] // Ignore o DV2 da linha digitável
    [21, 31], // conta corrent
    // [31, 32] // Ignore o  DV3 da linha digitável
  ].reduce((accu, curr) => accu + output.substring(curr[0], curr[1]), "");

  return parts;
}

/**
 * Converte uma numeração de um código de barras para uma linha digitável
 */
function convertBarcodeToLine(barcode) {
  const splitLine = (barcode, parts, separator = "") => {
    return parts.reduce(
      (accu, curr) => accu + barcode.substring(curr[0], curr[1]) + separator,
      ""
    );
  };

  const positions = [
    // Parte 1
    [0, 4],
    [19, 20],
    [20, 24],
    // Parte 2
    [24, 29],
    [29, 34],
    // Parte 3
    [34, 39],
    [39, 44],
    // Dígito Verificador Geral
    [4, 5],
    // Parte 4
    [5, 19],
  ];

  let line = splitLine(barcode, positions);

  const parts = {
    line,
    part1: line.substring(0, 9),
    part2: line.substring(9, 19),
    part3: line.substring(19, 29),
    dv: line.substring(29, 30),
    part4: line.substring(30, 44),
  };

  line = insertAt(line, 9, mod10(parts.part1)); //  DV1
  line = insertAt(line, 20, mod10(parts.part2)); // DV2
  line = insertAt(line, 31, mod10(parts.part3)); // DV3

  return line;
}

// insere
function insertAt(original, position, insert) {
  const part1 = String(original).slice(0, position);
  const part2 = String(original).slice(position);
  // console.log('part:', part1, part2)
  return part1 + insert + part2;
}

/**
 * Calcula a data a partir de um fator de vencimento
 
 * @returns {Date} objeto de data
 */
function expirationFactorToDate(factor) {
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
function mod10(value) {
  // Gera os multiplicadores começando do 2 de acordo com o tamanho
  // data string originale depois inverte para que o último número
  // sempre seja o 2
  const getMultipliers = (value) =>
    [...Array(value.length)].map((_, i) => ((i + 1) % 2) + 1).reverse();

  const multipliers = getMultipliers(value);

  const sum = value
    .split("")
    .map((part, i) => {
      // Multiplicar o item pelo multiplicador correspondente
      const product = "" + part * multipliers[i];
      // Caso o produto seja maior que 10, seus algarismos devem ser somados.
      // Ex.: 14 = 1 + 4 = 5
      const output = +product >= 10 ? +product[0] + +product[1] : product;
      // console.log('i',i,'part', part, 'mult', multipliers[i], 'product', product, 'novoproduto:',output)
      // Retorna o produto calculado seguindo as regras acima
      return output;
    })
    // Faz a soma de trás para a frente
    .reduceRight((accu, curr) => accu + +curr, 0);
  // console.log('soma:', sum)

  // Pega o resto da divisão da soma por 10
  const rest = sum % 10;

  // Próximo múltiplo de 10
  const calcDV = (sum) => {
    return Math.ceil(sum / 10) * 10 - sum;
  };

  // Se o resto for diferente de 0, retorne 10-resto. Senão retorne o próprio resto
  const checksum = rest != 0 ? 10 - rest : rest;
  // console.log( { value, sum, rest, checksum, DV: calcDV(sum) } )

  return checksum;
}
