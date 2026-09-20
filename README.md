[![npm](https://img.shields.io/npm/v/filtered-map.svg)](https://www.npmjs.com/package/filtered-map)
[![License](https://img.shields.io/badge/License-0BSD-blue.svg)](https://spdx.org/licenses/0BSD.html)
[![bundlejs](https://deno.bundlejs.com/?q=filtered-map\&badge=detailed)](https://bundlejs.com/?q=filtered-map)
[![downloads](http://img.shields.io/npm/dm/filtered-map.svg?style=flat-square)](https://npmjs.org/package/filtered-map)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/filtered-map.svg?style=flat-square)](https://github.com/arlac77/filtered-map/issues)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Farlac77%2Ffiltered-map%2Fbadge\&style=flat)](https://actions-badge.atrox.dev/arlac77/filtered-map/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/filtered-map/badge.svg)](https://snyk.io/test/github/arlac77/filtered-map)

# filtered-map

filtered Map view.


```js
import { FilteredMap } from "filtered-map";

const am = new FilteredMap([new Map([["m1",1]["m2",2]]), (item)=> item >= 2);

am.get('m1'); // -> undefined
am.get('m2'); // -> 2

```

# API

# install

With [npm](http://npmjs.org) do:

```shell
npm install filtered-map
```

# license

BSD-2-Clause
