import{h as r,o as _,x as p,w as e,b as n,k as h}from"./D1FGlxrg.js";import{_ as d}from"./BOHU7smt.js";import{_ as b}from"./CBP5YPw-.js";import"./DVedmV7_.js";import"./iUgZyjmk.js";import"./B3LHktJB.js";import"./Bdef-wlX.js";const D=r({__name:"member",setup(u){const i=[{key:"no",label:"#"},{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"since",label:"Since"},{key:"actions"}],a=[{no:1,name:"Hannah",email:"hannah@gmail.com",since:"2021-10-01"},{no:2,name:"John",email:"john@gmail.com",since:"2021-10-01"}],c=o=>[[{label:"Edit",icon:"i-heroicons-pencil-square-20-solid",click:()=>console.log("Edit",o.id)},{label:"Duplicate",icon:"i-heroicons-document-duplicate-20-solid"}],[{label:"Archive",icon:"i-heroicons-archive-box-20-solid"},{label:"Move",icon:"i-heroicons-arrow-right-circle-20-solid"}],[{label:"Delete",icon:"i-heroicons-trash-20-solid"}]];return(o,k)=>{const t=h,l=d,s=b;return _(),p(s,{columns:i,rows:a},{"actions-data":e(({row:m})=>[n(l,{items:c(m)},{default:e(()=>[n(t,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})]),_:2},1032,["items"])]),_:1})}}});export{D as default};