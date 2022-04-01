// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n){var t,a,i,f;if(r<=0)return NaN;if(1===r||0===n)return e[0];for(a=n<0?(1-r)*n:0,t=0,i=0,f=0;f<r;f++)i+=1,t+=(e[a]-t)/i,a+=n;return t};r(e,"ndarray",(function(r,e,n,t){var a,i,f,u;if(r<=0)return NaN;if(1===r||0===n)return e[t];for(i=t,a=0,f=0,u=0;u<r;u++)f+=1,a+=(e[i]-a)/f,i+=n;return a}));var n=e;export{n as default};
//# sourceMappingURL=index.mjs.map
