// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e){var t,a,i,f;if(r<=0)return NaN;if(1===r||0===e)return n[0];for(a=e<0?(1-r)*e:0,t=0,i=0,f=0;f<r;f++)i+=1,t+=(n[a]-t)/i,a+=e;return t}r(n,"ndarray",(function(r,n,e,t){var a,i,f,o;if(r<=0)return NaN;if(1===r||0===e)return n[t];for(i=t,a=0,f=0,o=0;o<r;o++)f+=1,a+=(n[i]-a)/f,i+=e;return a}));const{ndarray:e}=n;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
