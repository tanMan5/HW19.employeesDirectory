(this["webpackJsonpemployees-directory"]=this["webpackJsonpemployees-directory"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(7),l=n.n(o),c=(n(55),n(56),n(57),n(58),n(59),n(19)),i=n.n(c),s=n(42),u=n(13),m=n(14),d=n(16),f=n(15),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"text text-center"}," Employee Directory"),r.a.createElement("p",{className:"text lead text-center"},"Search for Employee or filter through by clicking on heading")))}}]),n}(r.a.Component),h=n(43),y=n.n(h);function b(e){return y.a.get("https://randomuser.me/api/?results=100&nat=us")}var v=n(49),E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={employees:[],employeesInfo:[]},e.loadEmployees=function(){return[b().then((function(e){return e.data.results})).then((function(t){e.setState({employees:t})})).then(Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({employeesInfo:e.buildData(),isLoading:!1});case 1:case"end":return t.stop()}}),t)})))).catch((function(e){console.log(e)}))]},e.buildData=function(){return e.state.employees.map((function(e){return{employeePicture:r.a.createElement("img",{src:e.picture.medium,alt:"employee"}),first:e.name.first,last:e.name.last,phoneNumber:e.phone,email:e.email}}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){var e={columns:[{label:"Employee Picture",field:"employeePicture",width:150},{label:"First Name",field:"first",width:250},{label:"Last Name",field:"last",width:150},{label:"Phone Number",field:"phoneNumber",width:300},{label:"Email",field:"email",width:150}],rows:this.state.employeesInfo};return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("section",{className:"container"},r.a.createElement(v.c,{entries:10,hover:!0,data:e})))}}]),n}(r.a.Component);var w=function(){return r.a.createElement("div",null,r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,n){e.exports=n(100)},55:function(e,t,n){},59:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.b64d1beb.chunk.js.map