"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=s(function(b,f){
function x(r,e,n){var u,a,t,i;if(r<=0)return NaN;if(r===1||n===0)return e[0];for(n<0?a=(1-r)*n:a=0,u=0,t=0,i=0;i<r;i++)t+=1,u+=(e[a]-u)/t,a+=n;return u}f.exports=x
});var m=s(function(g,c){
function d(r,e,n,u){var a,t,i,v;if(r<=0)return NaN;if(r===1||n===0)return e[u];for(t=u,a=0,i=0,v=0;v<r;v++)i+=1,a+=(e[t]-a)/i,t+=n;return a}c.exports=d
});var w=s(function(h,q){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),l=m();y(p,"ndarray",l);q.exports=p
});var O=w();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
