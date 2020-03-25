(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{135:function(e,t,n){e.exports=n(226)},140:function(e,t,n){},141:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(140),n(19)),i=(n(141),n(30)),u=n(54),d=n(228),s=o.a.createContext(),m=function(e){var t=e.children,n=Object(d.a)((function(){return{todos:localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],showModal:!1,addTodo:function(e){n.todos.unshift(e),localStorage.setItem("todos",JSON.stringify(n.todos))},changeStatus:function(e){n.todos=n.todos.map((function(t){if(t.id===e){var n="undone"===t.status?"done":"undone",a=(new Date).getTime();return Object(u.a)({},t,{status:n,date:a})}return t})),localStorage.setItem("todos",JSON.stringify(n.todos))},editTodo:function(e,t){n.todos=n.todos.map((function(n){return n.id===e?Object(u.a)({},n,{},t):n})),localStorage.setItem("todos",JSON.stringify(n.todos))},deleteTodo:function(e){n.todos=n.todos.filter((function(t){return t.id!==e})),localStorage.setItem("todos",JSON.stringify(n.todos))}}}));return o.a.createElement(s.Provider,{value:n},t)},f=n(234),E=n(230),g=n(233),p=n(235),O=n(232),b=function(e){var t=e.isModalShow,n=e.onCancel,r=e.title,c=e.id,m={content:"",date:new Date,status:"undone",id:null},b=Object(a.useContext)(s),j=Object(a.useState)(m),y=Object(l.a)(j,2),T=y[0],h=y[1],S=function(e){var t={content:e.target.value,date:(new Date).getTime(),status:T.status||"undone",id:T.id||Object(f.a)()};h(t)},v=function(){c?b.editTodo(c,T):(b.addTodo(T),h(m)),n()};return Object(a.useEffect)((function(){if(c){var e=b.todos.find((function(e){return e.id===c}));h(Object(u.a)({},e))}}),[b.todos,c]),Object(d.b)((function(){return o.a.createElement(E.a,{visible:t,onCancel:n,onOk:v,title:r},o.a.createElement(g.a,{justify:"between",align:"center",gutter:"16"},o.a.createElement(p.a,{span:12},o.a.createElement(O.a,{placeholder:"todos...",value:T.content,onChange:S,onPressEnter:function(){return v()}})),o.a.createElement(p.a,{span:4},o.a.createElement(i.a,{style:{width:"100%"},onClick:v},"Add"))))}))};b.defaultProps={isModalShow:!1,title:"Add Todo"};var j=b,y=n(229),T=n(88),h=n(119),S=n.n(h),v=n(89),C=n(231);function w(){var e=Object(T.a)(["{\n  width: 48%;\n}"]);return w=function(){return e},e}function x(){var e=Object(T.a)(["{\n  display: flex;\n  align-items: center;\n}"]);return x=function(){return e},e}var D=Object(v.a)(p.a)(x()),k=Object(v.a)(i.a)(w()),I=function(e){var t=e.todo,n=t.content,r=t.date,c=t.status,i=t.id,u=e.onChange,d=e.deleteTodo,s=(e.editTodo,Object(a.useState)(!1)),m=Object(l.a)(s,2),f=m[0],E=m[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{gutter:"24",align:"center",style:{marginBottom:"10px"}},o.a.createElement(D,{span:2,style:{justifyContent:"center",alignItems:"center"}},o.a.createElement(C.a,{checked:"done"===c,onChange:function(){return u(i)}})),o.a.createElement(D,{align:"center",span:10,style:{justifyContent:"center"}},o.a.createElement(y.a.Text,{delete:"done"===c},n)),o.a.createElement(D,{span:6,style:{justifyContent:"center"}},o.a.createElement(y.a.Text,null,S()(r).format("YYYY-MM-DD HH:mm"))),o.a.createElement(D,{span:6,style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(k,{type:"primary",onClick:function(){return E(!0)}},"Edit"),o.a.createElement(k,{danger:!0,onClick:function(){return d(i)}},"Delete"))),o.a.createElement(j,{isModalShow:f,onCancel:function(){return E(!1)},id:i,title:"Edit Todo"}))};I.defaultProps={todo:{}};var M=I,J=function(){var e=Object(a.useContext)(s);return Object(d.b)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{gutter:"24",align:"center",style:{marginBottom:"16px"}},o.a.createElement(p.a,{span:2,align:"center"},o.a.createElement(y.a.Text,null,"Status")),o.a.createElement(p.a,{align:"center",span:10},o.a.createElement(y.a.Text,null,"Content")),o.a.createElement(p.a,{span:6},o.a.createElement(y.a.Text,null,"Last Modified")),o.a.createElement(p.a,{span:6},o.a.createElement(y.a.Text,null,"Action"))),e.todos.map((function(t){return o.a.createElement(M,{todo:t,key:t.id,onChange:e.changeStatus,deleteTodo:e.deleteTodo,editTodo:e.editTodo})})))}))};var N=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(m,null,o.a.createElement("main",{style:{width:"60%",margin:"0 auto"}},o.a.createElement("h1",null,"TODO LIST"),o.a.createElement(i.a,{onClick:function(){return r(!0)},size:"large",style:{marginBottom:"16px"}},"ADD TODO"),o.a.createElement(J,null),o.a.createElement(j,{isModalShow:n,onCancel:function(){return r(!1)}}))))};c.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.4f834fa5.chunk.js.map