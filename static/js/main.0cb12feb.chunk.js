(this.webpackJsonpcrud_react_docente=this.webpackJsonpcrud_react_docente||[]).push([[0],{160:function(e){e.exports=JSON.parse('[{"id":1,"name_gender":"Femenino"},{"id":2,"name_gender":"Masculino"}]')},469:function(e,t,a){},470:function(e,t,a){},553:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a.n(c),o=(a(469),a(4)),s=a(3),l=a(17),d=a(20),j=(a(470),a(8)),u=a(15),b=a(18),f=a(35),O=a(654),p=a(655),h=a(576),x=a(651),g=(a(552),a(13)),m=function(){return Object(g.jsx)(O.a,{position:"static",style:{background:"#FE0C19"},children:Object(g.jsx)(x.a,{maxWidth:"xl",children:Object(g.jsx)(p.a,{disableGutters:!0,children:Object(g.jsx)(h.a,{style:{marginLeft:"10px"},variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,display:{xs:"flex",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"#FFFFFF",textDecoration:"none"},children:"CRUD DOCENTES"})})})})},v=(a(7),a(632)),w=a(658),C=a(657),S=(a(656),a(418),a(160)),E=a(645),R=a(647),y=a(659),T=a(643),I=a(660),N=a(631),k=a(652),F=function(e){var t=n.useState(""),a=Object(b.a)(t,2),r=a[0],c=a[1],i=n.useState(""),o=Object(b.a)(i,2),s=o[0],l=o[1],d=n.useState(""),f=Object(b.a)(d,2),O=f[0],p=f[1],h=n.useState(""),x=Object(b.a)(h,2),m=x[0],v=x[1],w=n.useState({}),C=Object(b.a)(w,2),F=C[0],D=C[1],B=n.useState(!1),P=Object(b.a)(B,2),A=P[0],_=P[1],L=n.useState(!1),z=Object(b.a)(L,2),U=z[0],M=z[1],W=n.useState(!1),J=Object(b.a)(W,2),G=J[0],H=J[1],K=n.useState(!1),V=Object(b.a)(K,2),Y=V[0],q=V[1];n.useEffect((function(){e.flagEdit&&(c(e.dataEdit.nameTeacher),l(e.dataEdit.lastNameTeacher),p(e.dataEdit.dniTeacher),v(e.dataEdit.genderTeacher.id),D(X(parseInt(e.dataEdit.genderTeacher.id))))}),[]);var Q=function(){var t=Object(u.a)(Object(j.a)().mark((function t(){var a,n;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=0,""===r&&(_(!0),a++),""===s&&(M(!0),a++),""===O&&(H(!0),a++),"0"!==m&&""!==m||(q(!0),a++),0===a&&(_(!1),M(!1),H(!1),q(!1),n={nameTeacher:r,lastNameTeacher:s,dniTeacher:O,genderTeacher:F},e.postData(n),Z());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(e){for(var t={id:"",name_gender:""},a=0;a<S.length;a++)S[a].id===e&&(t.name_gender=S[a].name_gender,t.id=S[a].id.toString());return t},Z=function(){c(""),l(""),p(""),v(""),null!=e.handleClose&&e.handleClose()};return Object(g.jsxs)("div",{style:{paddingLeft:"15px",paddingRight:"15px"},children:[Object(g.jsx)("h1",{children:e.title}),Object(g.jsx)("p",{style:{marginBottom:5,paddingRight:10},children:"Nombre:"}),Object(g.jsx)(E.a,{placeholder:"Ingrese nombre",variant:"outlined",style:{width:"100%"},size:"small",error:A,helperText:A?"Ingrese nombre":"",value:r,onChange:function(e){c(e.target.value)}}),Object(g.jsx)("p",{style:{marginBottom:5,paddingRight:10},children:"Apellidos:"}),Object(g.jsx)(E.a,{placeholder:"Ingrese apellidos",variant:"outlined",style:{width:"100%"},size:"small",error:U,helperText:U?"Ingrese apellidos":"",value:s,onChange:function(e){l(e.target.value)}}),Object(g.jsx)("p",{style:{marginBottom:5,paddingRight:10},children:"DNI:"}),Object(g.jsx)(E.a,{placeholder:"Ingrese DNI",variant:"outlined",style:{width:"100%"},size:"small",error:G,helperText:G?"Ingrese DNI":"",value:O,onChange:function(e){p(e.target.value)}}),Object(g.jsx)("p",{style:{marginBottom:5,paddingRight:10},children:"Sexo:"}),Object(g.jsxs)(y.a,{style:{width:"100%",paddingTop:5},size:"small",children:[Object(g.jsxs)(T.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:m,onChange:function(e){v(e.target.value),D(X(e.target.value))},error:Y,children:[Object(g.jsx)(R.a,{className:"MuiButtonBase-root2",value:"0",children:Object(g.jsx)("em",{children:"Seleccione"})}),Object(g.jsx)("br",{}),S.map((function(e){return Object(g.jsx)(R.a,{className:"MuiButtonBase-root2",value:e.id,children:e.name_gender.toUpperCase()},e.id)}))]}),Y?Object(g.jsx)(I.a,{error:!0,children:"Seleccione sexo"}):null]}),Object(g.jsxs)(N.a,{spacing:2,direction:"row",justifyContent:"space-around",style:{marginTop:"15px"},children:[Object(g.jsx)(k.a,{variant:"outlined",color:"success",className:"btnSuccess",onClick:Q,children:e.flagEdit?"Editar":"Grabar"}),Object(g.jsx)(k.a,{variant:"outlined",color:"error",className:"btnCancel",onClick:Z,children:"Cancelar"})]})]})},D=function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)(C.a,{onClose:e.handleClose,open:e.open,maxWidth:"md",children:[Object(g.jsx)(v.a,{children:e.flagEdit?"Editar registro":"Registrar nuevo docente"}),Object(g.jsx)(w.a,{children:Object(g.jsx)("div",{className:"popUp",children:Object(g.jsx)(F,{handleClose:e.handleClose,getData:e.getData,postData:e.postData,flagEdit:e.flagEdit,dataEdit:e.dataEdit})})})]})})},B=a(419),P=(a(490),a(491),a(99)),A=B.a({apiKey:"AIzaSyCs_dygFTwz4lCUHeuYv5xTwIuhvvcu1Ic",authDomain:"crud-react-docente.firebaseapp.com",databaseURL:"https://crud-react-docente-default-rtdb.firebaseio.com",projectId:"crud-react-docente",storageBucket:"crud-react-docente.appspot.com",messagingSenderId:"342818337009",appId:"1:342818337009:web:dff9238fe66619976f3950"}),_=Object(P.f)(A),L=a(420),z=a.n(L),U=a(295),M=a.n(U),W=a(423),J=a.n(W),G=a(433),H=a.n(G),K=a(424),V=a.n(K),Y=a(431),q=a.n(Y),Q=a(308),X=a.n(Q),Z=a(307),$=a.n(Z),ee=a(425),te=a.n(ee),ae=a(426),ne=a.n(ae),re=a(428),ce=a.n(re),ie=a(429),oe=a.n(ie),se=a(430),le=a.n(se),de=a(434),je=a.n(de),ue=a(427),be=a.n(ue),fe=a(432),Oe=a.n(fe),pe=a(435),he=a.n(pe),xe=a(252),ge=a(306),me=a.n(ge),ve=a(398),we=a(650),Ce={Add:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return Object(g.jsx)($.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(te.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(ne.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(be.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(ce.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(oe.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(le.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(X.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return Object(g.jsx)($.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(Oe.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(je.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return Object(g.jsx)(he.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))},Se=function(){var e=r.a.useState(!1),t=Object(b.a)(e,2),a=t[0],n=t[1],c=r.a.useState([]),i=Object(b.a)(c,2),o=i[0],s=i[1],l=r.a.useState(!1),d=Object(b.a)(l,2),O=d[0],p=d[1],h=r.a.useState({}),x=Object(b.a)(h,2),v=x[0],w=x[1],C=r.a.useState(""),S=Object(b.a)(C,2),E=S[0],R=S[1];r.a.useEffect((function(){y()}),[]);var y=function(){var e=Object(u.a)(Object(j.a)().mark((function e(){var t,a,n,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(P.b)(_,"teacher"),e.next=3,Object(P.e)(t);case 3:return a=e.sent,n=[],r=a.docs.map((function(e){return n.push(Object(f.a)({id:e.id},e.data()))})),s(n),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==E){e.next=6;break}return e.next=3,Object(P.a)(Object(P.b)(_,"teacher"),t);case 3:e.sent,e.next=9;break;case 6:return a=Object(P.d)(_,"teacher",E),e.next=9,Object(P.g)(a,t);case 9:R(""),y();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)(Object(P.d)(_,"teacher",t));case 2:y();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(m,{}),Object(g.jsx)("br",{}),Object(g.jsx)(ve.a,{variant:"outlined",className:"btnSuccess",onClick:function(){n(!0)},children:"Agregar"}),Object(g.jsx)(we.a,{container:!0,spacing:2,direction:"row",justifyContent:"center",alignItems:"center",children:Object(g.jsx)(we.a,{item:!0,xs:12,md:8,children:Object(g.jsx)(M.a,{icons:Ce,style:{boxShadow:"unset",borderBottom:"unset"},title:"",columns:[{title:"Nombres",field:"nameTeacher"},{title:"Apellidos",field:"lastNameTeacher"},{title:"DNI",field:"dniTeacher"},{title:"Sexo",field:"genderTeacher.name_gender"}],data:o,actions:[function(e){return{icon:function(){return Object(g.jsx)(me.a,{path:xe.b,size:1})},tooltip:"Editar",onClick:function(e,t){var a;a=t,console.log("editar: ",a),p(!0),w(a),R(a.id),n(!0)}}},function(e){return{icon:function(){return Object(g.jsx)(me.a,{path:xe.a,size:1})},tooltip:"Eliminar",onClick:function(e,t){!function(e){console.log("Eliminar: ",e);var t=z.a.mixin({buttonsStyling:!0});t.fire({title:"CONFIRMAR ELIMINACI\xd3N",text:"\xbfEst\xe1 seguro de eliminar?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#FE0C19",cancelButtonColor:"#70A3C3",cancelButtonText:"No",confirmButtonText:"Si"}).then((function(a){a.isConfirmed&&(I(e),t.fire("Eliminado!","Haz eliminado un dato.","success"))}))}(t.id)}}}],options:{actionsColumnIndex:-1,selection:!1,search:!1,headerStyle:{backgroundColor:"#f8f8f8"}},localization:{header:{actions:""},pagination:{firstAriaLabel:"Primera p\xe1gina",firstTooltip:"Primera p\xe1gina",labelDisplayedRows:"{from}-{to} de {count}",labelRowsPerPage:"Filas por p\xe1gina:",labelRowsSelect:"filas",lastAriaLabel:"Ultima p\xe1gina",lastTooltip:"Ultima p\xe1gina",nextAriaLabel:"Pagina siguiente",nextTooltip:"Pagina siguiente",previousAriaLabel:"Pagina anterior",previousTooltip:"Pagina anterior"}}})})}),Object(g.jsx)(D,{open:a,handleClose:function(){p(!1),n(!1)},postData:T,flagEdit:O,dataEdit:v})]})},Ee=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(Se,{})})}}]),a}(n.Component),Re=Ee,ye=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,826)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Re,{})}),document.getElementById("root")),ye()}},[[553,1,2]]]);
//# sourceMappingURL=main.0cb12feb.chunk.js.map