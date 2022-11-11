# boleto_parser

## Instalação

```sh

  npm install boleto_parser

  yarn add boleto_barser

```

## Uso

```js
import { parse } from "boleto_parser";

// ou

const { parse } = require("boleto_parser");
```

## Funções

### parse()

Extrai as informações a partir da linha digitável ou da numeração do código de barras do boleto

```js
import {parse} from 'boleto_parser';
parse('07790.00116 12064.449908 08159.365561 7 90020000015130');

// ->
{
    // Data de vencimento do boleto
    expires_at: 2022-05-31T00:00:00.000Z,
    // Valor convertido em número
    amount_number: 151.3,
    // Forma que o banco usa para exibir os dados do
    // emissor no boleto bancário
    emitter: '0001/0644499',
    // Logo
    logo: 'https://raw.githubusercontent.com/klawdyo/boleto_parser/main/banks/inter.png',
    //
    slug: 'inter',

    // Dados comuns a todos os boletos

    // Código do Banco
    bank: '077',
    // Moeda
    currency: '9',
    // Dígito verificador principal
    mainChecksum: '7',
    // Fator de vencimento: Número de dias passados desde 07/10/1997
    expirationFactor: '9002',
    // Valor em string com 10 caracteres
    amount: '0000015130',

    // Parte específica do banco.
    // Estes caracteres podem conter basicamente qualquer informação
    // que o banco ache relevante. Alguns bancos informam nosso número,
    // número de agência, número de conta, outros usam código de cliente etc.
    // Cada banco trabalha com um padrão diferente.
    variablePart: '0001112064449900815936556',

    // Agência
    agency: '0001',
    // Carteira
    type: '112',
    // Código do cliente
    clientCode: '0644499',
    // Nosso número: ID do boleto dentro do sistema do banco, específico para o cliente
    ourNumber: '0081593655',
    // Dígito verificador do nosso número
    dvOurNumber: '6'
  }

```

### isLine()

Verifica se o valor passado é uma linha digitável

```js

```
