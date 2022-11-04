// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,l=r.__defineSetter__,a=r.__lookupGetter__,u=r.__lookupSetter__;var i=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,i){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((f="value"in i)&&(a.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=i.value,t.__proto__=c):t[e]=i.value),p="get"in i,y="set"in i,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,i.get),y&&l&&l.call(t,e,i.set),t};function c(t,e,r){i(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var e,r,n,o,l;if(null==t)return b.call(t);r=t[v],l=v,e=null!=(o=t)&&_.call(o,l);try{t[v]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[v]=r:delete t[v],n}:function(t){return b.call(t)},m=Number,g=m.prototype.toString;var d=y();function h(t){return"object"==typeof t&&(t instanceof m||(d?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function j(t){return f(t)||h(t)}c(j,"isPrimitive",f),c(j,"isObject",h);var S=Math.sqrt;function w(t){return t!=t}function O(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function N(t){var e,r,n,o;if(n=0,o=0,arguments.length){if(!f(t))throw new TypeError(O("0epA8",t));return r=t,a}return r=0,l;function l(t){return 0===arguments.length?0===o?null:1===o?w(n)?NaN:0:S(n/(o-1)):(n+=(e=t-r)*(t-(r+=e/(o+=1))),o<2?w(n)?NaN:0:S(n/(o-1)))}function a(t){return 0===arguments.length?0===o?null:S(n/o):S((n+=(e=t-r)*e)/(o+=1))}}export{N as default};
//# sourceMappingURL=mod.js.map