(this["webpackJsonpposts-with-pagination"]=this["webpackJsonpposts-with-pagination"]||[]).push([[0],{10:function(t,n,e){},11:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var c=e(0),s=e(1),i=e.n(s),o=e(4),r=e.n(o),a=(e(10),e.p,e(11),e(3)),u=function(){var t=Object(s.useState)([]),n=Object(a.a)(t,2),e=n[0],i=n[1],o=Object(s.useState)(0),r=Object(a.a)(o,2),u=r[0],j=r[1],p=[];Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts?_start=".concat(u,"&_limit=5")).then((function(t){return t.json()})).then((function(t){console.log(t),i(t)}))}),[u]);for(var h=e.map((function(t){return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsxs)("h2",{children:[t.id,". ",t.title]}),Object(c.jsx)("p",{children:t.body})]},t.id)})),l=function(t){var n=Object(c.jsx)("span",{onClick:function(){return j(5*t)},children:t+1},t);p.push(n)},d=0;d<20;d++)l(d);return Object(c.jsxs)("div",{className:"posts-list",children:[h,p]})};var j=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(u,{})})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(n){var e=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),c(t),s(t),i(t),o(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),p()}},[[12,1,2]]]);
//# sourceMappingURL=main.38da43cf.chunk.js.map