(function(e){function t(t){for(var r,c,a=t[0],i=t[1],s=t[2],d=0,l=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return i.p+"static/SPA/js/"+({}[e]||e)+"."+{"chunk-02e36bf8":"4802ebdc","chunk-0e457670":"c91d1dbe","chunk-154ded68":"3a22397a","chunk-241bb3e4":"9e7fac29","chunk-2d0b3289":"261c01c1","chunk-2d0b99e7":"1a686a2e","chunk-4e333dec":"ffebdc15","chunk-6561bfef":"110ea45a","chunk-6c464114":"1c6cfce2","chunk-8db616e6":"99e83e83"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0e457670":1,"chunk-4e333dec":1,"chunk-6561bfef":1,"chunk-6c464114":1,"chunk-8db616e6":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="static/SPA/css/"+({}[e]||e)+"."+{"chunk-02e36bf8":"31d6cfe0","chunk-0e457670":"4b26c0b9","chunk-154ded68":"31d6cfe0","chunk-241bb3e4":"31d6cfe0","chunk-2d0b3289":"31d6cfe0","chunk-2d0b99e7":"31d6cfe0","chunk-4e333dec":"172ade25","chunk-6561bfef":"172ade25","chunk-6c464114":"4b26c0b9","chunk-8db616e6":"172ade25"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],f.parentNode.removeChild(f),n(u)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("091e"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u={class:"container h-full flex flex-col justify-center items-center"},a=Object(r["g"])("h2",{class:"text-2xl font-semibold mb-12"},"Welcome to Medihelp",-1),i={class:"flex flex-row justify-evenly"},s={class:"bg-blue-1000 hover:bg-gray-900 text-blue-50 font-semibold py-2 px-4 rounded-lg w-48 my-6 mx-6 cursor-pointer"},d=Object(r["f"])("Register"),l={class:"bg-blue-1000 hover:bg-gray-900 text-blue-50 font-semibold py-2 px-4 rounded-lg w-48 my-6 mx-6 cursor-pointer"},f=Object(r["f"])("Login");function h(e,t,n,c,o,h){var b=Object(r["z"])("router-link");return Object(r["r"])(),Object(r["d"])("div",u,[a,Object(r["g"])("div",i,[Object(r["g"])("button",s,[Object(r["g"])(b,{to:{name:"Register"}},{default:Object(r["I"])((function(){return[d]})),_:1})]),Object(r["g"])("button",l,[Object(r["g"])(b,{to:{name:"Login"}},{default:Object(r["I"])((function(){return[f]})),_:1})])])])}var b={created:function(){this.$store.state.isLoggedIn&&("Doctor"==this.$store.state.type?this.$router.push("./doctor"):"Receptionist"==this.$store.state.type?this.$router.push("./reception"):"Pharmacist"==this.$store.state.type?this.$router.push("./pharmacy"):"Student"==this.$store.state.type&&this.$router.push("./student"))}};b.render=h;var p=b,g=[{path:"/",name:"Home",component:p},{path:"/register",name:"Register",component:function(){return n.e("chunk-154ded68").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-241bb3e4").then(n.bind(null,"a55b"))}},{path:"/reception",name:"Reception",component:function(){return n.e("chunk-8db616e6").then(n.bind(null,"8fc3"))}},{path:"/pharmacy",name:"Pharmacy",component:function(){return n.e("chunk-4e333dec").then(n.bind(null,"23b2"))}},{path:"/doctor",name:"Doctor",component:function(){return n.e("chunk-2d0b99e7").then(n.bind(null,"345e"))}},{path:"/viewStudent/:id",name:"ViewStudent",component:function(){return n.e("chunk-02e36bf8").then(n.bind(null,"0e0d"))}},{path:"/appointment",name:"Appointment",component:function(){return n.e("chunk-6561bfef").then(n.bind(null,"cccc"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{path:"/student/appointment",name:"StudentAppointment",component:function(){return n.e("chunk-0e457670").then(n.bind(null,"b94d"))}},{path:"/student/profile",name:"StudentProfile",component:function(){return n.e("chunk-6c464114").then(n.bind(null,"5310"))}}],m=Object(o["a"])({history:Object(o["b"])(),routes:g}),v=m,O=(n("4de4"),n("5502")),j=Object(O["a"])({state:{isLoggedIn:!1,authenticationToken:"",role:"",user:{},prescriptions:[]},mutations:{authUser:function(e,t){e.authenticationToken=t.token,e.user=t.user},logoutUser:function(e){e.authenticationToken="",e.user={}},deleteDrug:function(e,t){e.prescriptions=e.prescriptions.filter((function(e){return e.id!==t}))},addDrugs:function(e,t){e.prescriptions=t}}}),k=j,y={class:"bg-blue-cool h-screen"},x={id:"main"};function w(e,t,n,c,o,u){var a=Object(r["z"])("the-heading"),i=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["d"])("div",y,[Object(r["g"])(a),Object(r["g"])("div",x,[Object(r["g"])(i)])])}var S=Object(r["L"])("data-v-4880a3e9");Object(r["u"])("data-v-4880a3e9");var L={id:"container",class:"h-12 bg-blue-50 px-6 py-2 text-blue-1000 text-center"},_={class:"nav"},P={class:"font-mono text-2xl font-bold"},A=Object(r["f"])(" Medihelp "),T={key:0,class:"right-nav font-semibold"},$=Object(r["f"])("Settings"),E={key:1,class:"right-nav font-semibold"},C=Object(r["f"])("Log In"),I=Object(r["f"])("Register");Object(r["s"])();var R=S((function(e,t,n,c,o,u){var a=Object(r["z"])("router-link");return Object(r["r"])(),Object(r["d"])("div",L,[Object(r["g"])("nav",_,[Object(r["g"])("div",P,[Object(r["g"])(a,{to:{name:"Home"}},{default:S((function(){return[A]})),_:1})]),e.isLoggedIn?(Object(r["r"])(),Object(r["d"])("div",T,[Object(r["g"])(a,{to:{name:"Settings"}},{default:S((function(){return[$]})),_:1}),Object(r["g"])("a",{onClick:t[1]||(t[1]=function(){return u.handleLogOut&&u.handleLogOut.apply(u,arguments)})},"Log Out")])):(Object(r["r"])(),Object(r["d"])("div",E,[Object(r["g"])(a,{to:{name:"Login"}},{default:S((function(){return[C]})),_:1}),Object(r["g"])(a,{to:{name:"Register"}},{default:S((function(){return[I]})),_:1})]))])])})),D={methods:{handleLogOut:function(){this.$router.push({name:"Home"})}}};n("7cd6");D.render=R,D.__scopeId="data-v-4880a3e9";var M=D,N={name:"App",components:{"the-heading":M}};n("a685");N.render=w;var z=N,H=(n("a766"),Object(r["c"])(z));H.use(v),H.use(k),H.use(c["a"],{url:"http://localhost:4000/graphql"}),H.mount("#app")},"7cd6":function(e,t,n){"use strict";n("a926")},8868:function(e,t,n){},a685:function(e,t,n){"use strict";n("8868")},a766:function(e,t,n){},a926:function(e,t,n){}});
//# sourceMappingURL=app.c5a21aa3.js.map