"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var f=c(function(h,v){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/math-base-special-sqrt/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function q(n){var e,u,t,r;if(t=0,r=0,arguments.length){if(!m(n))throw new TypeError(g('1Jr9X',n));return u=n,o}return u=0,l;function l(i){return arguments.length===0?r===0?null:r===1?s(t)?NaN:0:a(t/(r-1)):(r+=1,e=i-u,u+=e/r,t+=e*(i-u),r<2?s(t)?NaN:0:a(t/(r-1)))}function o(i){return arguments.length===0?r===0?null:a(t/r):(r+=1,e=i-u,t+=e*e,a(t/r))}}v.exports=q
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
