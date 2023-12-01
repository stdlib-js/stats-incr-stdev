// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function n(n){var i,m,d,l;if(d=0,l=0,arguments.length){if(!t(n))throw new TypeError(e("1Jr9X,Hv",n));return m=n,h}return m=0,o;function o(t){return 0===arguments.length?0===l?null:1===l?r(d)?NaN:0:s(d/(l-1)):(d+=(i=t-m)*(t-(m+=i/(l+=1))),l<2?r(d)?NaN:0:s(d/(l-1)))}function h(t){return 0===arguments.length?0===l?null:s(d/l):s((d+=(i=t-m)*i)/(l+=1))}}export{n as default};
//# sourceMappingURL=index.mjs.map
