import{_ as q,a as A}from"./BtBlSex1.js";import{_ as H,m as G,g as x,h as S,l as R,n as I,P as B,a5 as D,W as V,X as P,a7 as E,q as J,r as W,s as X,o as $,c as j,a as C,z as K,v as L,A as Q,a8 as Y,a9 as Z,b as i,w as m,H as c,k as ee}from"./DgOTyYLW.js";import{u as ae}from"./C1k5Q7Ml.js";import{_ as te}from"./DQ8urpUh.js";import{_ as oe}from"./DvIuU0oo.js";import"./C4BUHmKU.js";import"./T-o_TRtv.js";const s=G(x.ui.strategy,x.ui.textarea,Y),le=S({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...x.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t}){const{ui:o,attrs:r}=R("textarea",I(e,"ui"),s,I(e,"class")),{emitFormBlur:p,emitFormInput:f,inputId:l,color:_,size:v,name:y}=ae(e,s),n=B(D({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),u=B(null),h=()=>{var a;e.autofocus&&((a=u.value)==null||a.focus())},b=()=>{if(e.autoresize){if(!u.value)return;u.value.rows=e.rows;const a=window.getComputedStyle(u.value),d=parseInt(a.paddingTop),g=parseInt(a.paddingBottom),M=d+g,T=parseInt(a.lineHeight),{scrollHeight:F}=u.value,w=(F-M)/T;w>e.rows&&(u.value.rows=e.maxrows?Math.min(w,e.maxrows):w)}},z=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=Z(a)),t("update:modelValue",a),f()},U=a=>{b(),n.value.lazy||z(a.target.value)},k=a=>{const d=a.target.value;n.value.lazy&&z(d),n.value.trim&&(a.target.value=d.trim())},N=a=>{t("blur",a),p()};V(()=>{setTimeout(()=>{h()},e.autofocusDelay)}),P(()=>e.modelValue,()=>{E(b)}),V(()=>{setTimeout(()=>{h(),b()},100)});const O=J(()=>{var d,g;const a=((g=(d=o.value.color)==null?void 0:d[_.value])==null?void 0:g[e.variant])||o.value.variant[e.variant];return W(X(o.value.base,o.value.form,o.value.rounded,o.value.placeholder,o.value.size[v.value],e.padded?o.value.padding[v.value]:"p-0",a==null?void 0:a.replaceAll("{color}",_.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:o,attrs:r,name:y,inputId:l,textarea:u,textareaClass:O,onInput:U,onChange:k,onBlur:N}}}),ne=["id","value","name","rows","required","disabled","placeholder"];function se(e,t,o,r,p,f){return $(),j("div",{class:Q(e.ui.wrapper)},[C("textarea",K({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:t[1]||(t[1]=(...l)=>e.onBlur&&e.onBlur(...l)),onChange:t[2]||(t[2]=(...l)=>e.onChange&&e.onChange(...l))}),null,16,ne),L(e.$slots,"default")],2)}const re=H(le,[["render",se]]),ue={class:"flex flex-col gap-4"},de=C("h2",{class:"text-xl font-semibold"},"General",-1),ie={class:"flex justify-end"},ye=S({__name:"setting",setup(e){const t=B({name:"",address:""});return(o,r)=>{const p=q,f=A,l=re,_=te,v=ee,y=oe;return $(),j("div",ue,[i(y,null,{header:m(()=>[de]),footer:m(()=>[C("div",ie,[i(v,{variant:"solid",color:"primary",label:"Save"})])]),default:m(()=>[i(_,{state:c(t),class:"flex flex-col gap-4"},{default:m(()=>[i(f,{label:"Company Name"},{default:m(()=>[i(p,{modelValue:c(t).name,"onUpdate:modelValue":r[0]||(r[0]=n=>c(t).name=n)},null,8,["modelValue"])]),_:1}),i(f,{label:"Company Address"},{default:m(()=>[i(l,{modelValue:c(t).address,"onUpdate:modelValue":r[1]||(r[1]=n=>c(t).address=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["state"])]),_:1})])}}});export{ye as default};
