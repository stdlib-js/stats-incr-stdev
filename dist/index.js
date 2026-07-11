"use strict";var c=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var f=c(function(h,v){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/math-base-special-sqrt/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function q(n){var r,u,t,e;if(t=0,e=0,arguments.length){if(!m(n))throw new TypeError(g('1Jr9X',n));return u=n,o}return u=0,l;function l(i){return arguments.length===0?e===0?null:e===1?s(t)?NaN:0:a(t/(e-1)):(e+=1,r=i-u,u+=r/e,t+=r*(i-u),e<2?s(t)?NaN:0:a(t/(e-1)))}function o(i){return arguments.length===0?e===0?null:a(t/e):(e+=1,r=i-u,t+=r*r,a(t/e))}}v.exports=q
});var N=f();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
