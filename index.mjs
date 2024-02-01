// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){var i,m,d,l;if(d=0,l=0,arguments.length){if(!t(r))throw new TypeError(n("invalid argument. Must provide a number. Value: `%s`.",r));return m=r,o}return m=0,a;function a(t){return 0===arguments.length?0===l?null:1===l?e(d)?NaN:0:s(d/(l-1)):(d+=(i=t-m)*(t-(m+=i/(l+=1))),l<2?e(d)?NaN:0:s(d/(l-1)))}function o(t){return 0===arguments.length?0===l?null:s(d/l):s((d+=(i=t-m)*i)/(l+=1))}}export{r as default};
//# sourceMappingURL=index.mjs.map