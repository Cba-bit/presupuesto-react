(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{15:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),r=s(7),u=s.n(r),j=(s(15),s(9)),o=s(2),i=function(e){var t=e.mensaje;return Object(a.jsx)("p",{className:"alert alert-danger error",children:t})},l=function(e){var t=e.setPresupuesto,s=e.setRestante,n=e.setMostrarPregunta,r=Object(c.useState)(0),u=Object(o.a)(r,2),j=u[0],l=u[1],b=Object(c.useState)(!1),d=Object(o.a)(b,2),O=d[0],p=d[1];return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h2",{children:"Coloca tu presupuesto"}),O?Object(a.jsx)(i,{mensaje:"El Presupuesto es Incorrecto"}):null,Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j<1||isNaN(j)?p(!0):(p(!1),t(j),s(j),n(!1))},children:[Object(a.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu presupuesto",onChange:function(e){l(parseInt(e.target.value,10))}}),Object(a.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Definir presupuesto"})]})]})},b=s(8),d=s.n(b),O=function(e){var t=e.setGasto,s=e.setCrearGasto,n=Object(c.useState)(""),r=Object(o.a)(n,2),u=r[0],j=r[1],l=Object(c.useState)(0),b=Object(o.a)(l,2),O=b[0],p=b[1],h=Object(c.useState)(!1),m=Object(o.a)(h,2),x=m[0],f=m[1];return Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===u.trim())f(!0);else{f(!1);var a={nombre:u,cantidad:O,id:d.a.generate()};t(a),s(!0),j(""),p(0)}},children:[Object(a.jsx)("h2",{children:"Agrega tus gastos aqu\xed"}),x?Object(a.jsx)(i,{mensaje:"Ambos campos son oblgatorios o Presupuesto Incorrecto"}):null,Object(a.jsxs)("div",{className:"campo",children:[Object(a.jsx)("label",{children:"Nombre Gasto"}),Object(a.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Comida",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsxs)("div",{className:"campo",children:[Object(a.jsx)("label",{children:"Cantidad Gasto"}),Object(a.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:O,onChange:function(e){return p(parseInt(e.target.value,10))}})]}),Object(a.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Agregar Gasto"})]})},p=function(e){var t=e.gasto;return Object(a.jsx)("li",{className:"gastos",children:Object(a.jsxs)("p",{children:[t.nombre,Object(a.jsxs)("span",{className:"gasto",children:["$ ",t.cantidad]})]})})},h=function(e){var t=e.gastos;return Object(a.jsxs)("div",{className:"gastos-realizados",children:[Object(a.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(a.jsx)(p,{gasto:e},e.id)}))]})},m=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},x=function(e){var t=e.presupuesto,s=e.restante;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: $ ",t]}),Object(a.jsxs)("div",{className:m(t,s),children:["Restante: $ ",s]})]})};var f=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(0),u=Object(o.a)(r,2),i=u[0],b=u[1],d=Object(c.useState)(!0),p=Object(o.a)(d,2),m=p[0],f=p[1],g=Object(c.useState)([]),v=Object(o.a)(g,2),N=v[0],S=v[1],C=Object(c.useState)({}),w=Object(o.a)(C,2),y=w[0],P=w[1],G=Object(c.useState)(!1),F=Object(o.a)(G,2),I=F[0],E=F[1];return Object(c.useEffect)((function(){if(I){S([].concat(Object(j.a)(N),[y]));var e=i-y.cantidad;b(e),E(!1)}}),[y,I,N,i]),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Gasto Semanal"}),Object(a.jsx)("div",{className:"contenido-principal contenido",children:m?Object(a.jsx)(l,{setPresupuesto:n,setRestante:b,setMostrarPregunta:f}):Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"one-half column",children:Object(a.jsx)(O,{setGasto:P,setCrearGasto:E})}),Object(a.jsxs)("div",{className:"one-half column",children:[Object(a.jsx)(h,{gastos:N}),Object(a.jsx)(x,{presupuesto:s,restante:i})]})]})})]})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};u.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.ed5cf9fa.chunk.js.map