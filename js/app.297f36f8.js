(function(){"use strict";var n={3888:function(n,e,t){var r=t(9963),o=t(8262),i=t(1421),u=t(9669),c=t.n(u),a=t(2346),f=t(6252);function d(n,e,t,r,o,i){const u=(0,f.up)("router-view");return(0,f.wg)(),(0,f.j4)(u)}var s={name:"App"},l=t(3744);const p=(0,l.Z)(s,[["render",d]]);var h=p,m=t(2119);const v=[{path:"/",name:"Home",component:()=>t.e(680).then(t.bind(t,2680)),children:[{path:"/",name:"home",component:()=>t.e(541).then(t.bind(t,2541))},{path:"product",name:"product",component:()=>t.e(469).then(t.bind(t,5469))},{path:"detail/:id",name:"product-detail",component:()=>t.e(52).then(t.bind(t,52))},{path:"login",name:"login",component:()=>t.e(979).then(t.bind(t,8979))}]},{path:"/admin",name:"Admin",component:()=>t.e(309).then(t.bind(t,9309)),children:[{path:"",name:"dashboard",component:()=>t.e(885).then(t.bind(t,1885))}]}],b=(0,m.p7)({history:(0,m.r5)(),routes:v});var g=b;const y=(0,r.ri)(h),w=(0,o.WB)();y.use(a.Z,c()),y.provide("axios",y.config.globalProperties.axios),y.use(w),y.use(g),y.use(i.Jt),y.mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,t),i.loaded=!0,i.exports}t.m=n,function(){t.amdO={}}(),function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(d=0;d<n.length;d++){r=n[d][0],o=n[d][1],i=n[d][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(d--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{52:"3078214f",309:"01944dac",469:"c8397f51",541:"38e07394",680:"7758399f",885:"81760131",979:"06c481db"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="vue-week6:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var c,a;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+i){c=s;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",e+i),c.src=r),n[r]=[o];var l=function(e,t){c.onerror=c.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){t.p="/vue_week6/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),c=new Error,a=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}};t.l(u,a,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],c=r[1],a=r[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(a)var d=a(t)}for(e&&e(r);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(d)},r=self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3888)}));r=t.O(r)})();
//# sourceMappingURL=app.297f36f8.js.map