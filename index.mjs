// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n){var t,i,f,u;if(r<=0)return NaN;if(1===r||0===n)return e[0];for(i=n<0?(1-r)*n:0,t=0,f=0,u=0;u<r;u++)f+=1,t+=(e[i]-t)/f,i+=n;return t}r(e,"ndarray",(function(r,e,n,t){var i,f,u,a;if(r<=0)return NaN;if(1===r||0===n)return e[t];for(f=t,i=0,u=0,a=0;a<r;a++)u+=1,i+=(e[f]-i)/u,f+=n;return i}));export{e as default};
//# sourceMappingURL=index.mjs.map
