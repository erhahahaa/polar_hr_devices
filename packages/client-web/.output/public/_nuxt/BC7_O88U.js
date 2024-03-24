import{_ as H}from"./D7lyB7cy.js";import{h as T,aS as A,P as B,a1 as C,D as V,o as d,c as u,a as t,b as e,w as o,H as n,t as l,v as $,d as m,af as I,at as N,e as j,k as z,j as F,ax as M}from"./Ci4uulSS.js";import{_ as O}from"./C9GmxFNb.js";import{_ as E}from"./CC2f_AQj.js";import{_ as R}from"./CfjAlpPo.js";import{_ as Y}from"./Bejey9X0.js";import{_ as q}from"./CWCwKA4o.js";import{u as G}from"./Blg4mHk6.js";const J={class:"flex flex-col min-h-screen w-full bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200"},K={class:"h-[68px] border-b border-main w-full sticky top-0 flex items-center z-30 bg-gray-50/75 dark:bg-gray-950/75 backdrop-filter backdrop-blur-lg"},Q={class:"h-[24px] relative overflow-hidden"},W=t("h1",{class:"text-2xl font-bold"},"HATOFIT",-1),X={class:"flex items-center gap-4 divide-x-2 divide-main"},Z={key:0,class:"flex gap-2"},tt={key:1,class:"flex flex-col items-center"},et={class:"flex items-center"},ot={class:"text-sm ml-3"},at={class:"pl-4"},nt={class:"flex-1 flex"},st={class:"w-full flex justify-between border-t border-main items-center"},it={class:"text-sm flex items-center"},lt={class:"flex items-center gap-1"},ct=t("div",{class:"h-6 w-0.5 bg-gray-500/50 mr-2"},null,-1),rt={class:"truncate"},_t={class:"truncate"},yt=T({__name:"DefaultPage",setup(dt){const s={title:"Hatofit - Be Fit and Healthy",description:"Hatofit is a platform that helps you to be fit and healthy, help you to track and monitoring your health.",image:"/images/logo/hatofit.png",url:N().public.baseUrl};G({title:s.title,description:s.description,ogTitle:s.title,ogDescription:s.description,ogImage:s.image,ogUrl:s.url});const v=A(),p=[{id:"id",name:"Indonesia",icon:"🇮🇩"},{id:"en",name:"English",icon:"🇬🇧"}],i=B(p[1]);C(i,r=>{console.log("Language Selected:",r),v(r.id)});const c=V();return(r,f)=>{const y=H,k=j,_=z,w=F,U=O,L=E,g=R,P=M,S=Y,D=q;return d(),u("div",J,[t("div",K,[e(g,{class:"flex-1 max-w-screen-lg mx-auto flex justify-between"},{default:o(()=>[e(k,{to:"/",class:"flex gap-2 items-center"},{default:o(()=>[t("div",Q,[e(y,{src:"/images/logo/hatofit.png",alt:"Hatofit Logo",style:{width:"auto",height:"100%"},loading:"lazy"})]),W]),_:1}),t("div",X,[n(c).status.value!="authenticated"?(d(),u("div",Z,[e(_,{to:"/auth/register",variant:"link",color:"primary",label:"Register",icon:"i-heroicons-ui:document-add"}),e(_,{to:"/auth/login",variant:"solid",color:"primary",label:"Login"})])):(d(),u("div",tt,[e(U,{items:[[{label:"Dashboard",icon:"i-heroicons-home",to:"/dashboard"},{label:"Profile",icon:"i-heroicons-user",to:"/dashboard/profile"}],[{label:"Logout",icon:"i-heroicons-arrow-left-start-on-rectangle-20-solid",click:()=>n(c).signOut({callbackUrl:"/auth/login",redirect:!0})}]]},{default:o(()=>{var a,h,x,b;return[t("div",et,[e(w,{src:(h=(a=n(c).data.value)==null?void 0:a.user)==null?void 0:h.avatar,alt:"User Avatar",size:"xs"},null,8,["src"]),t("span",ot,l((b=(x=n(c).data.value)==null?void 0:x.user)==null?void 0:b.name),1)])]}),_:1},8,["items"])])),t("div",at,[e(L)])])]),_:1})]),t("div",nt,[$(r.$slots,"default")]),t("footer",st,[e(g,{class:"py-2 flex-1 flex justify-between w-full items-center"},{default:o(()=>[t("div",it,[m(" © "+l(new Date().getFullYear())+" ",1),e(_,{to:"/",variant:"link",class:""},{default:o(()=>[m("HATOFIT TEAM")]),_:1})]),t("div",lt,[t("div",null,[e(P,{to:"/privacy-policies"},{default:o(()=>[e(_,{variant:"link",size:"xs"},{default:o(()=>[m(" Privacy Policies ")]),_:1})]),_:1})]),ct,e(D,null,{default:o(()=>[e(S,{modelValue:n(i),"onUpdate:modelValue":f[0]||(f[0]=a=>I(i)?i.value=a:null),options:p,"option-attribute":"name"},{label:o(()=>[t("span",null,l(n(i).icon),1),t("span",rt,l(n(i).name),1)]),option:o(({option:a})=>[t("span",null,l(a.icon),1),t("span",_t,l(a.name),1)]),_:1},8,["modelValue"])]),_:1})])]),_:1})])])}}});export{yt as _};
