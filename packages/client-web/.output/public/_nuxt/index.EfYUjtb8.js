import{n as F,t as J,i as z}from"./index.QUFtbLO7.js";import{af as A,E as V,X as B,L as C,i as $,K as N,U as M,a0 as U,aj as j}from"./entry.s6_xT4rN.js";function L(e,t,i){let f;A(i)?f={evaluating:i}:f=i||{};const{lazy:c=!1,evaluating:o=void 0,shallow:d=!0,onError:s=F}=f,n=V(!c),l=d?B(t):V(t);let a=0;return C(async E=>{if(!n.value)return;a++;const g=a;let u=!1;o&&Promise.resolve().then(()=>{o.value=!0});try{const v=await e(m=>{E(()=>{o&&(o.value=!1),u||m()})});g===a&&(l.value=v)}catch(v){s(v)}finally{o&&g===a&&(o.value=!1),u=!0}}),c?$(()=>(n.value=!0,l.value)):l}function O(e){var t;const i=J(e);return(t=i==null?void 0:i.$el)!=null?t:i}function D(e){return JSON.parse(JSON.stringify(e))}const p=new Map;function P(e){const t=j();function i(s){var n;const l=p.get(e)||new Set;l.add(s),p.set(e,l);const a=()=>c(s);return(n=t==null?void 0:t.cleanups)==null||n.push(a),a}function f(s){function n(...l){c(n),s(...l)}return i(n)}function c(s){const n=p.get(e);n&&(n.delete(s),n.size||o())}function o(){p.delete(e)}function d(s,n){var l;(l=p.get(e))==null||l.forEach(a=>a(s,n))}return{on:i,once:f,off:c,emit:d,reset:o}}function T(e,t,i,f={}){var c,o,d;const{clone:s=!1,passive:n=!1,eventName:l,deep:a=!1,defaultValue:E,shouldEmit:g}=f,u=U(),v=i||(u==null?void 0:u.emit)||((c=u==null?void 0:u.$emit)==null?void 0:c.bind(u))||((d=(o=u==null?void 0:u.proxy)==null?void 0:o.$emit)==null?void 0:d.bind(u==null?void 0:u.proxy));let m=l;t||(t="modelValue"),m=m||`update:${t.toString()}`;const x=r=>s?typeof s=="function"?s(r):D(r):r,S=()=>z(e[t])?x(e[t]):E,b=r=>{g?g(r)&&v(m,r):v(m,r)};if(n){const r=S(),w=V(r);let h=!1;return N(()=>e[t],_=>{h||(h=!0,w.value=x(_),M(()=>h=!1))}),N(w,_=>{!h&&(_!==e[t]||a)&&b(_)},{deep:a}),w}else return $({get(){return S()},set(r){b(r)}})}export{P as a,O as b,L as c,T as u};
