(this["webpackJsonppost-reader-7"]=this["webpackJsonppost-reader-7"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(13),n(14),n(4)),s=n(5),l=n(1),u=n(7),m=n(6),d=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={email:"",name:"",sl_token:"",posts:void 0,from_name:[]},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=new FormData(e.currentTarget);n.append("client_id","ju16a6m81mhid5ue1z3v2g0uh"),n.append("email",this.state.email),n.append("name",this.state.name);var a={method:"GET",redirect:"follow"};return fetch("https://api.supermetrics.com/assignment/register?",{method:"POST",body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return console.log("response",e),console.log("token",e.data.sl_token),t.setState({sl_token:e.data.sl_token}),fetch("https://api.supermetrics.com/assignment/posts?sl_token=".concat(t.state.sl_token),a)})).then((function(e){return e.json()})).then((function(e){t.setState({posts:e.data.posts,from_name:e.data.from_name})})).catch((function(e){return console.log("error",e)})),this.state.posts}},{key:"render",value:function(){var e=this,t=this.state,n=t.posts,a=t.email,r=t.name;if(n){var i=this.state.posts.map((function(e){return e.from_name})).sort().join(", ");console.log("Names sorted by alphabet: ".concat(i));var c=this.state.posts.map((function(e){return e.created_time})).sort().join(", ");return console.log("Dates sorted by creation time: ".concat(c.toLocaleString())),o.a.createElement(p,{posts:n})}return o.a.createElement("div",{id:"Container"},o.a.createElement(h,{title:"Login"}),o.a.createElement("div",{id:"loginFormContainer"},o.a.createElement("form",{id:"loginForm",onSubmit:this.handleSubmit},o.a.createElement(v,{type:"text",placeholder:"email",value:a,onChange:function(t){return e.setState({email:t.target.value})}}),o.a.createElement(v,{type:"text",placeholder:"name",value:r,onChange:function(t){return e.setState({name:t.target.value})}}),o.a.createElement(g,{title:"Send"}))))}}]),n}(o.a.Component)),p=function(e){var t=e.posts;return o.a.createElement("div",{className:"large-container"},o.a.createElement("div",{className:"posts"},t.map((function(e){return o.a.createElement(f,Object.assign({key:e.id},e))}))))},f=function(e){var t=e.from_id,n=e.created_time,a=e.message,r=e.from_name;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{key:t,className:"name_date_post"},o.a.createElement("div",{className:"name_date_post"},o.a.createElement("section",null,o.a.createElement("h4",{className:"names_id"},r))),o.a.createElement("div",{className:"post_instance"},o.a.createElement("h4",null,new Date(n).toLocaleString()),o.a.createElement("p",null,a))))},h=function(e){return o.a.createElement("div",{className:"loginHeader"},o.a.createElement("div",{id:"loginHeaderTitle"},e.title))},v=function(e){return o.a.createElement("div",{className:"LoginInput"},o.a.createElement("input",{type:e.type,placeholder:e.placeholder,onChange:e.onChange}))},g=function(e){return o.a.createElement("div",{className:"LoginButton"},o.a.createElement("button",{type:"submit"},e.title))},E=function(e){return o.a.createElement(d,null)};var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("main",null,o.a.createElement(E,null)))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/post-reader-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/post-reader-react","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.dcad46ee.chunk.js.map