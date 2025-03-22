"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=o(function(z,f){
function l(a,r,e,s){var u,t,n,i,v,c;if(u=r.data,t=r.accessors[0],a===1||e===0)return t(u,s);for(i=s,n=0,v=0,c=0;c<a;c++)v+=1,n+=(t(u,i)-n)/v,i+=e;return n}f.exports=l
});var q=o(function(A,d){
var w=require('@stdlib/array-base-arraylike2object/dist'),b=m();function g(a,r,e,s){var u,t,n,i,v;if(a<=0)return NaN;if(n=w(r),n.accessorProtocol)return b(a,n,e,s);if(a===1||e===0)return r[s];for(t=s,u=0,i=0,v=0;v<a;v++)i+=1,u+=(r[t]-u)/i,t+=e;return u}d.exports=g
});var p=o(function(B,y){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=q();function O(a,r,e){return k(a,r,e,j(a,e))}y.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),R=q();P(x,"ndarray",R);module.exports=x;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
