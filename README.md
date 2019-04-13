# change-prop-case

> Changes all properties case.

## Installation

```sh
npm install -S change-prop-case
```

## Usage

```js
import { camelProps, snakeProps, changeProps } from "chage-prop-case";
// or
const { changeProps, snakeProps, camelProps } = require("change-prop-case");

snakeProps({ propA: { propX: [{ propY: 1 }] } });
// => { prop_a: { prop_x: [{ prop_y: 1 }] }}

camelProps({ prop_a: { prop_x: [{ prop_y: 1 }] } });
// => { propA: { propX: [{ propY: 1 }] }}

const changeCase = require("change-case");
changeProps({ propA: { propX: [{ propY: 1 }] } }, changeCase.paramCase);
// => { "prop-a": { "prop-x": [{ "prop-y": 1 }] }}
```
