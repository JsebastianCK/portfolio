(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t(76)},52:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),c=t.n(i),o=(t(52),t(7)),l=t(8),s=t(10),m=t(9),d=t(11),u=t(81),b=t(80),h=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{bg:"none",expand:"lg",className:"fixed-top"},r.a.createElement(u.a.Brand,{href:"#home"},"SC"),r.a.createElement(u.a.Toggle,{className:"toggler-right","aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{bg:"primary",id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"ml-auto"},r.a.createElement(b.a.Link,{href:"#"},"About"),r.a.createElement(b.a.Link,{href:"#"},"Projects"))))}}]),a}(n.Component),p=t(46),f=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"bg-image"}),r.a.createElement("div",{className:"texto"},r.a.createElement("h1",{className:"nombre"},"Sebasti\xe1n Coronel"),r.a.createElement("hr",{style:{width:50}}),r.a.createElement(p.a,{className:"home-texto",springConfig:{stiffness:70,damping:31},adjustingSpeed:250,noWrap:!0},r.a.createElement("span",{style:{color:"red"}},"Web"),r.a.createElement("span",{style:{color:"red"}},"Mobile "))," Developer"),r.a.createElement("div",{className:"iconos"},r.a.createElement("a",{className:"fab fa-github",href:"https://github.com/JsebastianCK",target:"_blank"}),r.a.createElement("a",{className:"fab fa-linkedin",href:"https://www.linkedin.com/in/jsebastianck/",target:"_blank"})))}}]),a}(n.Component),E=t(77),g=t(78),j=t(18),v=t.n(j),O=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"renderTools",value:function(){return this.props.habilidad.herramientas.map(function(e){return r.a.createElement("span",{className:"badge badge-primary",style:{marginRight:"2px"}},e)})}},{key:"render",value:function(){return r.a.createElement(E.a,{xl:4,lg:4,md:4,sm:6,xs:12},r.a.createElement(v.a,{animateIn:"fadeIn",animateOnce:!0},r.a.createElement(g.a,{className:"habilidad",style:k.contenedor},r.a.createElement(v.a,{animateIn:"rubberBand",animateOnce:!0},r.a.createElement("i",{className:this.props.habilidad.icono})),r.a.createElement("h6",null,r.a.createElement("b",null,this.props.habilidad.titulo)),r.a.createElement("p",{className:"descripcion text-justify"},this.props.habilidad.descripcion),this.renderTools())))}}]),a}(n.Component),k={contenedor:{backgroundColor:"#ffeed",width:"75%",marginTop:"10%",borderRadius:10}},y=O,w=t(79),N=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={habilidades:[{id:0,titulo:"Front-end Development",descripcion:"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",herramientas:["HTML","CSS","JAVASCRIPT","REACTJS"],icono:"fas fa-code"},{id:1,titulo:"Back-end Development",descripcion:"Ability to manage abstract concepts and complex logic. Knowledge of frameworks, design patterns, databases and APIs",herramientas:["NODEJS","EXPRESSJS","PHP"],icono:"fas fa-code-branch"},{id:2,titulo:"Mobile Development",descripcion:"https://i.imgur.com/8vvQvtH.png",herramientas:["JAVA","REACT-NATIVE"],icono:"fas fa-mobile-alt"}]},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"renderSkills",value:function(){return this.state.habilidades.map(function(e){return r.a.createElement(y,{key:e.id,habilidad:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"about",style:{textAlign:""}},r.a.createElement(v.a,{animateIn:"flipInX",animateOnce:!0},r.a.createElement("h1",null,"About")),r.a.createElement(g.a,null,r.a.createElement(w.a,null,this.renderSkills())))}}]),a}(n.Component),C=(t(74),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(N,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(75);c.a.render(r.a.createElement(C,{basename:"/portfolio"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.ad96b289.chunk.js.map