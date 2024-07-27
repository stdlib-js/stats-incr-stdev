// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(n){var i,m,d,l;if(d=0,l=0,arguments.length){if(!t(n))throw new TypeError(s("1Jr9X",n));return m=n,function(t){if(0===arguments.length)return 0===l?null:r(d/l);return r((d+=(i=t-m)*i)/(l+=1))}}return m=0,function(t){if(0===arguments.length)return 0===l?null:1===l?e(d)?NaN:0:r(d/(l-1));if(d+=(i=t-m)*(t-(m+=i/(l+=1))),l<2)return e(d)?NaN:0;return r(d/(l-1))}}export{n as default};
//# sourceMappingURL=index.mjs.map
