(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=(a(15),a(6)),s=a(9),i=a(2),d=a(3),m=a(5),u=a(4),p=(a(16),function(e){var t=e.todoList,a=e.taskDone,n=t.length?t.map((function(e){var t=e.id,n=e.name,r=e.complete;return o.a.createElement("div",{className:" alert alert-info  rounded-pill",style:{backgroundColor:"#28B9B5",listStyle:"none",padding:"0px 0px"},key:t,onClick:function(){a(t)}},o.a.createElement("h3",{style:{textDecoration:r?"line-through":""}},n))})):o.a.createElement("p",{className:"container"},"Add first task");return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"d-flex flex-row justify-content-center",style:{marginTop:"110px"}},o.a.createElement("div",{className:"col-sm-8"},n)))}),f=a(1),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",complete:!1},e.handleChange=function(t){e.setState(Object(f.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addtask(e.state),e.setState({name:"",complete:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container "},o.a.createElement("div",{className:"d-flex flex-row justify-content-center"},o.a.createElement("div",{className:"col-sm-6 "},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group "},o.a.createElement("input",{id:"name",className:" form-control border border-primary rounded",type:"text",placeholder:"Add a Task ",value:this.state.name,onChange:this.handleChange}))))))}}]),a}(o.a.Component),v=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top ",style:{backgroundColor:"#2c3e50"}},o.a.createElement("div",{className:"container justify-content-center"},o.a.createElement("div",{className:"d-flex flex-row "},o.a.createElement("div",{className:"col-sm-12 text-white"},o.a.createElement("h1",null,"Todo-List")))))},E=function(e){var t=e.todoList;return o.a.createElement("div",{className:"container ",style:{marginTop:"20px",padding:"0px 0px"}},o.a.createElement("div",{className:"d-flex flex-row justify-content-end"},o.a.createElement("div",{className:"col-sm-3 "},o.a.createElement("div",{className:" alert alert-warning border border-danger"},o.a.createElement("h4",{className:"rounded-pill"},"Tasks to be done : ",t.filter((function(e){return!e.complete})).length)))))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todoList:[{id:1,name:"Broadband Recharge",complete:!1},{id:2,name:"Electricity Bill",complete:!1},{id:3,name:"Assignments",complete:!1}]},e.addtask=function(t){t.id=5+Math.floor(1e3*Math.random()),e.setState({todoList:[].concat(Object(s.a)(e.state.todoList),[t])})},e.taskDone=function(t){e.setState({todoList:e.state.todoList.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{complete:!e.complete}):e}))})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App "},o.a.createElement(v,null),o.a.createElement(p,{todoList:this.state.todoList,taskDone:this.taskDone}),o.a.createElement(E,{todoList:this.state.todoList}),o.a.createElement(h,{addtask:this.addtask}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ab4cd611.chunk.js.map