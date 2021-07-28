(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02e36bf8"],{"0e0d":function(e,t,l){"use strict";l.r(t);l("b0c0");var n=l("7a23"),c=l("3a19"),d=l.n(c),b={key:0},a={key:0},u={key:1,class:"w-full h-full flex flex-row justify-evenly px-10 py-5"},i={class:"flex flex-col"},r={class:"h-48 w-48 rounded-lg mb-4"},s={class:"flex flex-col h-124 w-100 px-6 py-12 bg-blue-50 rounded-lg text-blue-1000 font-semibold"},o={key:0,class:"h-5/6 capitalize"},j={class:"mb-2"},O=Object(n["g"])("strong",null,"First Name: ",-1),g={class:"mb-2"},f=Object(n["g"])("strong",null,"Last Name: ",-1),m={class:"mb-2"},p=Object(n["g"])("strong",null,"Email: ",-1),h={class:"mb-2"},v=Object(n["g"])("strong",null,"Clinic ID: ",-1),x={key:1},y=Object(n["g"])("h2",{class:"text-center text-xl mb-4"},"Add Record",-1),w={class:"flex justify-between py-1 px-4"},k={class:"overflow-hidden"},D={class:"overflow-hidden"},A=Object(n["g"])("label",{for:"name"},"Name: ",-1),N=Object(n["f"])(),C=Object(n["g"])("br",null,null,-1),B=Object(n["g"])("label",{for:"details"},"More Information: ",-1),F=Object(n["g"])("br",null,null,-1),I=Object(n["g"])("button",{type:"submit",class:"bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold mt-4"},"Submit Field",-1),S={key:2},J=Object(n["g"])("h2",{class:"text-center text-xl mb-4"},"Prescribe Drugs",-1),E={class:"flex justify-between py-1 px-4"},P={class:"overflow-hidden"},R={class:"overflow-hidden"},U=Object(n["g"])("label",{for:"name"},"Name: ",-1),V=Object(n["f"])(),q=Object(n["g"])("br",null,null,-1),K=Object(n["g"])("label",{for:"details"},"Instructions: ",-1),L=Object(n["g"])("br",null,null,-1),$=Object(n["g"])("button",{type:"submit",class:"bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold mt-4"},"Prescribe drug",-1),z={key:3,class:"flex justify-evenly w-full"},M={key:4,class:"flex justify-evenly w-full"};function G(e,t,l,c,G,H){return c.fetching?(Object(n["r"])(),Object(n["d"])("div",b,[c.fetching?(Object(n["r"])(),Object(n["d"])("p",a," Loading...")):Object(n["e"])("",!0)])):(Object(n["r"])(),Object(n["d"])("div",u,[Object(n["f"])(Object(n["B"])(c.error)+" ",1),Object(n["g"])("div",i,[Object(n["g"])("div",r,[Object(n["g"])("img",{src:d.a,alt:c.data.student.firstName+" "+c.data.student.lastName},null,8,["alt"])])]),Object(n["g"])("div",null,[Object(n["g"])("div",s,["info"===G.page?(Object(n["r"])(),Object(n["d"])("div",o,[Object(n["g"])("p",j,[O,Object(n["f"])(" "+Object(n["B"])(c.data.student.firstName),1)]),Object(n["g"])("p",g,[f,Object(n["f"])(" "+Object(n["B"])(c.data.student.lastName),1)]),Object(n["g"])("p",m,[p,Object(n["f"])(" "+Object(n["B"])(c.data.student.email),1)]),Object(n["g"])("p",h,[v,Object(n["f"])(" "+Object(n["B"])(c.data.student.clinicID),1)])])):Object(n["e"])("",!0),"record"===G.page?(Object(n["r"])(),Object(n["d"])("div",x,[Object(n["g"])("span",{onClick:t[1]||(t[1]=function(e){return H.handleChange("info")}),class:"rounded-lg cursor-pointer text-sm"}," Back to info page "),y,(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.fields,(function(e){return Object(n["r"])(),Object(n["d"])("div",{key:e},[Object(n["g"])("div",w,[Object(n["g"])("div",k,[Object(n["g"])("p",null,Object(n["B"])(e.name),1)]),Object(n["g"])("div",D,[Object(n["g"])("p",null,Object(n["B"])(e.details),1)])])])})),128)),c.showAddField?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])("div",{key:0,class:"rounded-lg w-1/2 bg-blue-1000 text-blue-50 text-center py-2 mt-2 cursor-pointer",onClick:t[2]||(t[2]=function(e){return c.showAddField=!0})}," Add Field ")),c.showAddField?(Object(n["r"])(),Object(n["d"])("form",{key:1,onSubmit:t[5]||(t[5]=Object(n["K"])((function(){return c.handleAddField&&c.handleAddField.apply(c,arguments)}),["prevent"]))},[A,Object(n["J"])(Object(n["g"])("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.fieldName=e}),class:"rounded-lg text-blue-1000 mb-2"},null,512),[[n["E"],c.fieldName]]),N,C,B,Object(n["J"])(Object(n["g"])("input",{type:"text",name:"details",id:"details","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.fieldDetails=e}),class:"rounded-lg text-blue-1000 mb-2"},null,512),[[n["E"],c.fieldDetails]]),F,I],32)):Object(n["e"])("",!0)])):Object(n["e"])("",!0),"drugs"===G.page?(Object(n["r"])(),Object(n["d"])("div",S,[Object(n["g"])("span",{onClick:t[6]||(t[6]=function(e){return H.handleChange("info")}),class:"rounded-lg cursor-pointer text-sm"}," Back to info page "),J,(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.drugs,(function(e){return Object(n["r"])(),Object(n["d"])("div",{key:e},[Object(n["g"])("div",E,[Object(n["g"])("div",P,[Object(n["g"])("p",null,Object(n["B"])(e.name),1)]),Object(n["g"])("div",R,[Object(n["g"])("p",null,Object(n["B"])(e.details),1)])])])})),128)),c.showAddDrug?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])("div",{key:0,class:"rounded-lg w-1/2 bg-blue-1000 text-blue-50 text-center py-2 mt-2 cursor-pointer",onClick:t[7]||(t[7]=function(e){return c.showAddDrug=!0})}," Add Drug ")),c.showAddDrug?(Object(n["r"])(),Object(n["d"])("form",{key:1,onSubmit:t[10]||(t[10]=Object(n["K"])((function(){return c.handleAddDrug&&c.handleAddDrug.apply(c,arguments)}),["prevent"]))},[U,Object(n["J"])(Object(n["g"])("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.fieldName=e}),class:"rounded-lg text-blue-1000 mb-2"},null,512),[[n["E"],c.fieldName]]),V,q,K,Object(n["J"])(Object(n["g"])("input",{type:"text",name:"details",id:"details","onUpdate:modelValue":t[9]||(t[9]=function(e){return c.fieldDetails=e}),class:"rounded-lg text-blue-1000 mb-2"},null,512),[[n["E"],c.fieldDetails]]),L,$],32)):Object(n["e"])("",!0)])):Object(n["e"])("",!0),"info"===G.page?(Object(n["r"])(),Object(n["d"])("div",z,[Object(n["g"])("button",{class:"bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold",onClick:t[11]||(t[11]=function(e){return H.handleChange("record")})},"Add Record"),Object(n["g"])("button",{class:"bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold",onClick:t[12]||(t[12]=function(e){return H.handleChange("drugs")})},"Prescribe Drugs")])):Object(n["e"])("",!0),"drugs"===G.page&&c.fields.length>0?(Object(n["r"])(),Object(n["d"])("div",M,[Object(n["g"])("button",{class:"bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold",onClick:t[13]||(t[13]=function(t){return e.handleSubmitRecord("record")})},"Submit Record")])):Object(n["e"])("",!0)])])]))}var H=l("091e"),Q=l("6c02"),T={setup:function(){var e=Object(Q["c"])(),t=Object(n["w"])([]),l=Object(n["w"])([]),c=Object(n["w"])(""),d=Object(n["w"])(""),b=Object(n["w"])(""),a=Object(n["w"])(""),u=Object(n["w"])(!1),i=Object(n["w"])(!1),r=function(){t.value.push({name:c.value,details:d.value}),c.value="",d.value="",u.value=!1},s=function(){l.value.push({name:b.value,details:a.value}),b.value="",a.value="",i.value=!1},o=Object(H["c"])({query:"query Student($clinicID: String!){\n                student(clinicID: $clinicID) {\n                    firstName\n                    lastName\n                    clinicID\n                    email\n                    DOB {\n                        month\n                        day\n                        year\n                    }\n                }\n            }",variables:{clinicID:e.params.id},requestPolicy:"cache first"});return{fetching:o.fetching,data:o.data,error:o.error,fields:t,drugs:l,showAddField:u,showAddDrug:i,fieldName:c,fieldDetails:d,drugName:b,drugDetails:a,handleAddField:r,handleAddDrug:s}},data:function(){return{page:"info"}},methods:{handleChange:function(e){this.page=e}}};T.render=G;t["default"]=T},"3a19":function(e,t,l){e.exports=l.p+"static/SPA/img/profile.a0a5810b.jpg"},b0c0:function(e,t,l){var n=l("83ab"),c=l("9bf2").f,d=Function.prototype,b=d.toString,a=/^\s*function ([^ (]*)/,u="name";n&&!(u in d)&&c(d,u,{configurable:!0,get:function(){try{return b.call(this).match(a)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-02e36bf8.4802ebdc.js.map