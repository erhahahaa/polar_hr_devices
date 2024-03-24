import{_ as rt,a as st}from"./DL2rAbZP.js";import{t as He,o as me,_ as it}from"./ClSvXhBD.js";import{_ as ut}from"./CsTeRMRI.js";import{a5 as H,P as m,h as O,q as v,a0 as D,a6 as N,a7 as C,F as dt,a1 as Q,a8 as ft,a9 as U,aa as V,ab as We,G as ct,ac as pt,a2 as vt,A as te,_ as mt,m as gt,g as Ne,l as ht,n as Ue,ad as de,o as ve,x as _e,w as c,b as f,z as Ee,a as S,y as yt,v as wt,ae as bt,L as Et,D as Tt,c as $t,H as E,af as _t,k as St}from"./D1FGlxrg.js";import{_ as Pt}from"./CdcI1zIb.js";import{u as Ct}from"./DVedmV7_.js";import{c as Ye,w as Ft,i as ae,f as Se,s as Pe,A as M,S as G,o as P,t as qe,u as z,P as pe,N as W,T as Lt,a as At,b as De,l as Ge,d as x,e as xt,g as Ce,h as Dt,j as Ot,k as Y,n as Bt,q as Vt,r as kt}from"./B3LHktJB.js";import{$ as Rt}from"./CTr9oW0p.js";import{A as Ht}from"./BQjOdfn3.js";import"./Bdef-wlX.js";import"./iUgZyjmk.js";const Nt={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function ze(e,t,l,n){Ye.isServer||H(a=>{e=e??window,e.addEventListener(t,l,n),a(()=>e.removeEventListener(t,l,n))})}var le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(le||{});function Ut(){let e=m(0);return Ft("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Je(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let n=P(l);n instanceof HTMLElement&&t.add(n)}return t}var Ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ke||{});let Z=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:n}){let a=m(null);n({el:a,$el:a});let o=v(()=>ae(a)),r=m(!1);D(()=>r.value=!0),N(()=>r.value=!1),jt({ownerDocument:o},v(()=>r.value&&!!(e.features&16)));let s=It({ownerDocument:o,container:a,initialFocus:v(()=>e.initialFocus)},v(()=>r.value&&!!(e.features&2)));Wt({ownerDocument:o,container:a,containers:e.containers,previousActiveElement:s},v(()=>r.value&&!!(e.features&8)));let u=Ut();function i(w){let y=P(a);y&&(T=>T())(()=>{z(u.value,{[le.Forwards]:()=>{pe(y,W.First,{skipElements:[w.relatedTarget]})},[le.Backwards]:()=>{pe(y,W.Last,{skipElements:[w.relatedTarget]})}})})}let d=m(!1);function g(w){w.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function h(w){if(!r.value)return;let y=Je(e.containers);P(a)instanceof HTMLElement&&y.add(P(a));let T=w.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(Qe(y,T)||(d.value?pe(P(a),z(u.value,{[le.Forwards]:()=>W.Next,[le.Backwards]:()=>W.Previous})|W.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&G(w.target)))}return()=>{let w={},y={ref:a,onKeydown:g,onFocusout:h},{features:T,initialFocus:$,containers:p,...F}=e;return C(dt,[!!(T&4)&&C(Se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:i,features:Pe.Focusable}),M({ourProps:y,theirProps:{...t,...F},slot:w,attrs:t,slots:l,name:"FocusTrap"}),!!(T&4)&&C(Se,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:i,features:Pe.Focusable})])}}}),{features:Ke});function Mt(e){let t=m(He.slice());return Q([e],([l],[n])=>{n===!0&&l===!1?qe(()=>{t.value.splice(0)}):n===!1&&l===!0&&(t.value=He.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(n=>n!=null&&n.isConnected))!=null?l:null}}function jt({ownerDocument:e},t){let l=Mt(t);D(()=>{H(()=>{var n,a;t.value||((n=e.value)==null?void 0:n.activeElement)===((a=e.value)==null?void 0:a.body)&&G(l())},{flush:"post"})}),N(()=>{t.value&&G(l())})}function It({ownerDocument:e,container:t,initialFocus:l},n){let a=m(null),o=m(!1);return D(()=>o.value=!0),N(()=>o.value=!1),D(()=>{Q([t,l,n],(r,s)=>{if(r.every((i,d)=>(s==null?void 0:s[d])===i)||!n.value)return;let u=P(t);u&&qe(()=>{var i,d;if(!o.value)return;let g=P(l),h=(i=e.value)==null?void 0:i.activeElement;if(g){if(g===h){a.value=h;return}}else if(u.contains(h)){a.value=h;return}g?G(g):pe(u,W.First|W.NoScroll)===Lt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function Wt({ownerDocument:e,container:t,containers:l,previousActiveElement:n},a){var o;ze((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!a.value)return;let s=Je(l);P(t)instanceof HTMLElement&&s.add(P(t));let u=n.value;if(!u)return;let i=r.target;i&&i instanceof HTMLElement?Qe(s,i)?(n.value=i,G(i)):(r.preventDefault(),r.stopPropagation(),G(u)):G(n.value)},!0)}function Qe(e,t){for(let l of e)if(l.contains(t))return!0;return!1}function Yt(e){let t=ft(e.getSnapshot());return N(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function qt(e,t){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(a){return n.add(a),()=>n.delete(a)},dispatch(a,...o){let r=t[a].call(l,...o);r&&(l=r,n.forEach(s=>s()))}}}function Gt(){let e;return{before({doc:t}){var l;let n=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:t,d:l}){let n=t.documentElement,a=n.clientWidth-n.offsetWidth,o=e-a;l.style(n,"paddingRight",`${o}px`)}}}function zt(){return At()?{before({doc:e,d:t,meta:l}){function n(a){return l.containers.flatMap(o=>o()).some(o=>o.contains(a))}t.microTask(()=>{var a;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let s=me();s.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>s.dispose()))}let o=(a=window.scrollY)!=null?a:window.pageYOffset,r=null;t.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let u=s.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),d=e.querySelector(i);d&&!n(d)&&(r=d)}catch{}},!0),t.addEventListener(e,"touchstart",s=>{if(s.target instanceof HTMLElement)if(n(s.target)){let u=s.target;for(;u.parentElement&&n(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(s.target,"touchAction","none")}),t.addEventListener(e,"touchmove",s=>{if(s.target instanceof HTMLElement)if(n(s.target)){let u=s.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&s.preventDefault()}else s.preventDefault()},{passive:!1}),t.add(()=>{var s;let u=(s=window.scrollY)!=null?s:window.pageYOffset;o!==u&&window.scrollTo(0,o),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})})}}:{}}function Jt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Kt(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let q=qt(()=>new Map,{PUSH(e,t){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:me(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let n={doc:e,d:t,meta:Kt(l)},a=[zt(),Gt(),Jt()];a.forEach(({before:o})=>o==null?void 0:o(n)),a.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=t.get(l.doc)==="hidden",a=l.count!==0;(a&&!n||!a&&n)&&q.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&q.dispatch("TEARDOWN",l)}});function Qt(e,t,l){let n=Yt(q),a=v(()=>{let o=e.value?n.value.get(e.value):void 0;return o?o.count>0:!1});return Q([e,t],([o,r],[s],u)=>{if(!o||!r)return;q.dispatch("PUSH",o,l);let i=!1;u(()=>{i||(q.dispatch("POP",s??o,l),i=!0)})},{immediate:!0}),a}let Te=new Map,ee=new Map;function Me(e,t=m(!0)){H(l=>{var n;if(!t.value)return;let a=P(e);if(!a)return;l(function(){var r;if(!a)return;let s=(r=ee.get(a))!=null?r:1;if(s===1?ee.delete(a):ee.set(a,s-1),s!==1)return;let u=Te.get(a);u&&(u["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",u["aria-hidden"]),a.inert=u.inert,Te.delete(a))});let o=(n=ee.get(a))!=null?n:0;ee.set(a,o+1),o===0&&(Te.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}function Xt({defaultContainers:e=[],portals:t,mainTreeNodeRef:l}={}){let n=m(null),a=ae(n);function o(){var r,s,u;let i=[];for(let d of e)d!==null&&(d instanceof HTMLElement?i.push(d):"value"in d&&d.value instanceof HTMLElement&&i.push(d.value));if(t!=null&&t.value)for(let d of t.value)i.push(d);for(let d of(r=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?r:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(P(n))||d.contains((u=(s=P(n))==null?void 0:s.getRootNode())==null?void 0:u.host)||i.some(g=>d.contains(g))||i.push(d));return i}return{resolveContainers:o,contains(r){return o().some(s=>s.contains(r))},mainTreeNodeRef:n,MainTreeNode(){return l!=null?null:C(Se,{features:Pe.Hidden,ref:n})}}}let Xe=Symbol("ForcePortalRootContext");function Zt(){return V(Xe,!1)}let je=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return U(Xe,e.force),()=>{let{force:n,...a}=e;return M({theirProps:a,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}}),Ze=Symbol("StackContext");var Fe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Fe||{});function el(){return V(Ze,()=>{})}function tl({type:e,enabled:t,element:l,onUpdate:n}){let a=el();function o(...r){n==null||n(...r),a(...r)}D(()=>{Q(t,(r,s)=>{r?o(0,e,l):s===!0&&o(1,e,l)},{immediate:!0,flush:"sync"})}),N(()=>{t.value&&o(1,e,l)}),U(Ze,o)}let ll=Symbol("DescriptionContext");function al({slot:e=m({}),name:t="Description",props:l={}}={}){let n=m([]);function a(o){return n.value.push(o),()=>{let r=n.value.indexOf(o);r!==-1&&n.value.splice(r,1)}}return U(ll,{register:a,slot:e,name:t,props:l}),v(()=>n.value.length>0?n.value.join(" "):void 0)}function nl(e){let t=ae(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}let ol=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let n=m(null),a=v(()=>ae(n)),o=Zt(),r=V(et,null),s=m(o===!0||r==null?nl(n.value):r.resolveTarget()),u=m(!1);D(()=>{u.value=!0}),H(()=>{o||r!=null&&(s.value=r.resolveTarget())});let i=V(Le,null),d=!1,g=pt();return Q(n,()=>{if(d||!i)return;let h=P(n);h&&(N(i.register(h),g),d=!0)}),N(()=>{var h,w;let y=(h=a.value)==null?void 0:h.getElementById("headlessui-portal-root");y&&s.value===y&&s.value.children.length<=0&&((w=s.value.parentElement)==null||w.removeChild(s.value))}),()=>{if(!u.value||s.value===null)return null;let h={ref:n,"data-headlessui-portal":""};return C(We,{to:s.value},M({ourProps:h,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),Le=Symbol("PortalParentContext");function rl(){let e=V(Le,null),t=m([]);function l(o){return t.value.push(o),e&&e.register(o),()=>n(o)}function n(o){let r=t.value.indexOf(o);r!==-1&&t.value.splice(r,1),e&&e.unregister(o)}let a={register:l,unregister:n,portals:t};return[t,O({name:"PortalWrapper",setup(o,{slots:r}){return U(Le,a),()=>{var s;return(s=r.default)==null?void 0:s.call(r)}}})]}let et=Symbol("PortalGroupContext"),sl=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let n=ct({resolveTarget(){return e.target}});return U(et,n),()=>{let{target:a,...o}=e;return M({theirProps:o,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}});var il=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(il||{});let Ae=Symbol("DialogContext");function tt(e){let t=V(Ae,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,tt),l}return t}let fe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ul=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:fe},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:a}){var o,r;let s=(o=e.id)!=null?o:`headlessui-dialog-${De()}`,u=m(!1);D(()=>{u.value=!0});let i=!1,d=v(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(i||(i=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),g=m(0),h=Ge(),w=v(()=>e.open===fe&&h!==null?(h.value&x.Open)===x.Open:e.open),y=m(null),T=v(()=>ae(y));if(a({el:y,$el:y}),!(e.open!==fe||h!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof w.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${w.value===fe?void 0:e.open}`);let $=v(()=>u.value&&w.value?0:1),p=v(()=>$.value===0),F=v(()=>g.value>1),j=V(Ae,null)!==null,[ne,oe]=rl(),{resolveContainers:J,mainTreeNodeRef:re,MainTreeNode:se}=Xt({portals:ne,defaultContainers:[v(()=>{var b;return(b=K.panelRef.value)!=null?b:y.value})]}),he=v(()=>F.value?"parent":"leaf"),ie=v(()=>h!==null?(h.value&x.Closing)===x.Closing:!1),ye=v(()=>j||ie.value?!1:p.value),we=v(()=>{var b,_,L;return(L=Array.from((_=(b=T.value)==null?void 0:b.querySelectorAll("body > *"))!=null?_:[]).find(A=>A.id==="headlessui-portal-root"?!1:A.contains(P(re))&&A instanceof HTMLElement))!=null?L:null});Me(we,ye);let B=v(()=>F.value?!0:p.value),X=v(()=>{var b,_,L;return(L=Array.from((_=(b=T.value)==null?void 0:b.querySelectorAll("[data-headlessui-portal]"))!=null?_:[]).find(A=>A.contains(P(re))&&A instanceof HTMLElement))!=null?L:null});Me(X,B),tl({type:"Dialog",enabled:v(()=>$.value===0),element:y,onUpdate:(b,_)=>{if(_==="Dialog")return z(b,{[Fe.Add]:()=>g.value+=1,[Fe.Remove]:()=>g.value-=1})}});let k=al({name:"DialogDescription",slot:v(()=>({open:w.value}))}),R=m(null),K={titleId:R,panelRef:m(null),dialogState:$,setTitleId(b){R.value!==b&&(R.value=b)},close(){t("close",!1)}};U(Ae,K);let Ve=v(()=>!(!p.value||F.value));xt(J,(b,_)=>{K.close(),vt(()=>_==null?void 0:_.focus())},Ve);let ke=v(()=>!(F.value||$.value!==0));ze((r=T.value)==null?void 0:r.defaultView,"keydown",b=>{ke.value&&(b.defaultPrevented||b.key===Dt.Escape&&(b.preventDefault(),b.stopPropagation(),K.close()))});let Re=v(()=>!(ie.value||$.value!==0||j));return Qt(T,Re,b=>{var _;return{containers:[...(_=b.containers)!=null?_:[],J]}}),H(b=>{if($.value!==0)return;let _=P(y);if(!_)return;let L=new ResizeObserver(A=>{for(let be of A){let ue=be.target.getBoundingClientRect();ue.x===0&&ue.y===0&&ue.width===0&&ue.height===0&&K.close()}});L.observe(_),b(()=>L.disconnect())}),()=>{let{open:b,initialFocus:_,...L}=e,A={...l,ref:y,id:s,role:d.value,"aria-modal":$.value===0?!0:void 0,"aria-labelledby":R.value,"aria-describedby":k.value},be={open:$.value===0};return C(je,{force:!0},()=>[C(ol,()=>C(sl,{target:y.value},()=>C(je,{force:!1},()=>C(Z,{initialFocus:_,containers:J,features:p.value?z(he.value,{parent:Z.features.RestoreFocus,leaf:Z.features.All&~Z.features.FocusLock}):Z.features.None},()=>C(oe,{},()=>M({ourProps:A,theirProps:{...L,...l},slot:be,attrs:l,slots:n,visible:$.value===0,features:Ce.RenderStrategy|Ce.Static,name:"Dialog"})))))),C(se)])}}}),dl=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:n}){var a;let o=(a=e.id)!=null?a:`headlessui-dialog-panel-${De()}`,r=tt("DialogPanel");n({el:r.panelRef,$el:r.panelRef});function s(u){u.stopPropagation()}return()=>{let{...u}=e,i={id:o,ref:r.panelRef,onClick:s};return M({ourProps:i,theirProps:u,slot:{open:r.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}});function fl(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function $e(e,...t){e&&t.length>0&&e.classList.add(...t)}function ce(e,...t){e&&t.length>0&&e.classList.remove(...t)}var xe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(xe||{});function cl(e,t){let l=me();if(!e)return l.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[o,r]=[n,a].map(s=>{let[u=0]=s.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,d)=>d-i);return u});return o!==0?l.setTimeout(()=>t("finished"),o+r):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Ie(e,t,l,n,a,o){let r=me(),s=o!==void 0?fl(o):()=>{};return ce(e,...a),$e(e,...t,...l),r.nextFrame(()=>{ce(e,...l),$e(e,...n),r.add(cl(e,u=>(ce(e,...n,...t),$e(e,...a),s(u))))}),r.add(()=>ce(e,...t,...l,...n,...a)),r.add(()=>s("cancelled")),r.dispose}function I(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Oe=Symbol("TransitionContext");var pl=(e=>(e.Visible="visible",e.Hidden="hidden",e))(pl||{});function vl(){return V(Oe,null)!==null}function ml(){let e=V(Oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function gl(){let e=V(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Be=Symbol("NestingContext");function ge(e){return"children"in e?ge(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function lt(e){let t=m([]),l=m(!1);D(()=>l.value=!0),N(()=>l.value=!1);function n(o,r=Y.Hidden){let s=t.value.findIndex(({id:u})=>u===o);s!==-1&&(z(r,{[Y.Unmount](){t.value.splice(s,1)},[Y.Hidden](){t.value[s].state="hidden"}}),!ge(t)&&l.value&&(e==null||e()))}function a(o){let r=t.value.find(({id:s})=>s===o);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:o,state:"visible"}),()=>n(o,Y.Unmount)}return{children:t,register:a,unregister:n}}let at=Ce.RenderStrategy,nt=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:a}){let o=m(0);function r(){o.value|=x.Opening,t("beforeEnter")}function s(){o.value&=~x.Opening,t("afterEnter")}function u(){o.value|=x.Closing,t("beforeLeave")}function i(){o.value&=~x.Closing,t("afterLeave")}if(!vl()&&Ot())return()=>C(ot,{...e,onBeforeEnter:r,onAfterEnter:s,onBeforeLeave:u,onAfterLeave:i},n);let d=m(null),g=v(()=>e.unmount?Y.Unmount:Y.Hidden);a({el:d,$el:d});let{show:h,appear:w}=ml(),{register:y,unregister:T}=gl(),$=m(h.value?"visible":"hidden"),p={value:!0},F=De(),j={value:!1},ne=lt(()=>{!j.value&&$.value!=="hidden"&&($.value="hidden",T(F),i())});D(()=>{let B=y(F);N(B)}),H(()=>{if(g.value===Y.Hidden&&F){if(h.value&&$.value!=="visible"){$.value="visible";return}z($.value,{hidden:()=>T(F),visible:()=>y(F)})}});let oe=I(e.enter),J=I(e.enterFrom),re=I(e.enterTo),se=I(e.entered),he=I(e.leave),ie=I(e.leaveFrom),ye=I(e.leaveTo);D(()=>{H(()=>{if($.value==="visible"){let B=P(d);if(B instanceof Comment&&B.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function we(B){let X=p.value&&!w.value,k=P(d);!k||!(k instanceof HTMLElement)||X||(j.value=!0,h.value&&r(),h.value||u(),B(h.value?Ie(k,oe,J,re,se,R=>{j.value=!1,R===xe.Finished&&s()}):Ie(k,he,ie,ye,se,R=>{j.value=!1,R===xe.Finished&&(ge(ne)||($.value="hidden",T(F),i()))})))}return D(()=>{Q([h],(B,X,k)=>{we(k),p.value=!1},{immediate:!0})}),U(Be,ne),Bt(v(()=>z($.value,{visible:x.Open,hidden:x.Closed})|o.value)),()=>{let{appear:B,show:X,enter:k,enterFrom:R,enterTo:K,entered:Ve,leave:ke,leaveFrom:Re,leaveTo:b,..._}=e,L={ref:d},A={..._,...w.value&&h.value&&Ye.isServer?{class:te([l.class,_.class,...oe,...J])}:{}};return M({theirProps:A,ourProps:L,slot:{},slots:n,attrs:l,features:at,visible:$.value==="visible",name:"TransitionChild"})}}}),hl=nt,ot=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n}){let a=Ge(),o=v(()=>e.show===null&&a!==null?(a.value&x.Open)===x.Open:e.show);H(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=m(o.value?"visible":"hidden"),s=lt(()=>{r.value="hidden"}),u=m(!0),i={show:o,appear:v(()=>e.appear||!u.value)};return D(()=>{H(()=>{u.value=!1,o.value?r.value="visible":ge(s)||(r.value="hidden")})}),U(Be,s),U(Oe,i),()=>{let d=Vt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),g={unmount:e.unmount};return M({ourProps:{...g,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[C(hl,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...g,...d},n.default)]},attrs:{},features:at,visible:r.value==="visible",name:"Transition"})}}});const yl=gt(Ne.ui.strategy,Ne.ui.modal,Nt),wl=O({components:{HDialog:ul,HDialogPanel:dl,TransitionRoot:ot,TransitionChild:nt},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:t}){const{ui:l,attrs:n}=ht("modal",Ue(e,"ui"),yl,Ue(e,"class")),a=v({get(){return e.modelValue},set(s){t("update:modelValue",s)}}),o=v(()=>e.transition?{...l.value.transition}:{});function r(s){if(e.preventClose){t("close-prevented");return}a.value=s,t("close")}return kt(()=>Ct("$HAJMhYDoe7")),{ui:l,attrs:n,isOpen:a,transitionClass:o,close:r}}});function bl(e,t,l,n,a,o){const r=de("TransitionChild"),s=de("HDialogPanel"),u=de("HDialog"),i=de("TransitionRoot");return ve(),_e(i,{appear:e.appear,show:e.isOpen,as:"template"},{default:c(()=>[f(u,Ee({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:c(()=>[e.overlay?(ve(),_e(r,Ee({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:c(()=>[S("div",{class:te([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):yt("",!0),S("div",{class:te(e.ui.inner)},[S("div",{class:te([e.ui.container,!e.fullscreen&&e.ui.padding])},[f(r,Ee({as:"template",appear:e.appear},e.transitionClass),{default:c(()=>[f(s,{class:te([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:c(()=>[wt(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const El=mt(wl,[["render",bl]]),Tl={class:"flex flex-col gap-4"},$l=S("h2",{class:"text-xl font-semibold"},"Profile",-1),_l={class:"flex gap-4 flex-1 w-full"},Sl={class:"flex gap-4 flex-1 w-full"},Pl={class:"flex gap-4 flex-1 w-full"},Cl={class:"flex justify-end"},Fl=S("h2",{class:"text-xl font-semibold"},"Change Email",-1),Ll={class:"flex justify-end"},Al=S("h2",{class:"text-xl font-semibold"},"Change Password",-1),xl={class:"flex justify-end"},Dl=S("h2",{class:"text-xl font-semibold"},"Delete Account",-1),Ol=S("p",{class:"text-sm"}," Deleting your account will permanently remove all your data. ",-1),Bl={class:"flex justify-end"},Vl=S("h2",{class:"text-xl font-semibold"},"Delete Account",-1),kl=S("p",{class:"text-sm"}," Are you sure you want to delete your account? This action cannot be undone. ",-1),Rl={class:"flex justify-end gap-2"},Jl=O({__name:"profile",setup(e){const t=bt(),l=Et(),n=Tt(),a=m({firstName:"John",lastName:"Doe",email:"john.doe@mail.com",dateOfBirth:"",weight:70,height:50,gender:"male"}),o=m({oldPassword:"",newPassword:"",confirmPassword:""}),r=m(!1),s=async()=>{r.value=!1,t.start();try{const u=await Rt(Ht.Auth.Delete.url(),{method:"DELETE"});console.log(u),l.add({title:"Account Deleted",description:"Your account has been deleted successfully, logging you out.",color:"green"}),setTimeout(()=>{n.signOut({callbackUrl:"/auth/login",redirect:!0})},2e3)}catch(u){console.error(u),l.add({title:"Error",description:"An error occurred while deleting your account, please try again later.",color:"red"})}t.finish()};return(u,i)=>{const d=rt,g=st,h=it,w=ut,y=St,T=Pt,$=El;return ve(),$t("div",Tl,[f(T,null,{header:c(()=>[$l]),footer:c(()=>[S("div",Cl,[f(y,{variant:"solid",color:"primary",label:"Save"})])]),default:c(()=>[f(w,{state:E(a),class:"flex flex-col gap-4"},{default:c(()=>[S("div",_l,[f(g,{label:"First Name",name:"firstName",class:"flex-1"},{default:c(()=>[f(d,{modelValue:E(a).firstName,"onUpdate:modelValue":i[0]||(i[0]=p=>E(a).firstName=p)},null,8,["modelValue"])]),_:1}),f(g,{label:"Last Name",name:"lastName",class:"flex-1"},{default:c(()=>[f(d,{modelValue:E(a).lastName,"onUpdate:modelValue":i[1]||(i[1]=p=>E(a).lastName=p)},null,8,["modelValue"])]),_:1})]),S("div",Sl,[f(g,{label:"Date of Birth",name:"dateOfBirth",class:"flex-1"},{default:c(()=>[f(d,{type:"date",modelValue:E(a).dateOfBirth,"onUpdate:modelValue":i[2]||(i[2]=p=>E(a).dateOfBirth=p)},null,8,["modelValue"])]),_:1}),f(g,{label:"Gender",name:"gender",class:"flex-1"},{default:c(()=>[f(h,{modelValue:E(a).gender,"onUpdate:modelValue":i[3]||(i[3]=p=>E(a).gender=p),options:["male","female"]},null,8,["modelValue"])]),_:1})]),S("div",Pl,[f(g,{label:"Weight",name:"weight",class:"flex-1"},{default:c(()=>[f(d,{type:"number",modelValue:E(a).weight,"onUpdate:modelValue":i[4]||(i[4]=p=>E(a).weight=p)},null,8,["modelValue"])]),_:1}),f(g,{label:"Height",name:"height",class:"flex-1"},{default:c(()=>[f(d,{type:"number",modelValue:E(a).height,"onUpdate:modelValue":i[5]||(i[5]=p=>E(a).height=p)},null,8,["modelValue"])]),_:1})])]),_:1},8,["state"])]),_:1}),f(T,{class:""},{header:c(()=>[Fl]),footer:c(()=>[S("div",Ll,[f(y,{variant:"solid",color:"primary",label:"Change Email"})])]),default:c(()=>[f(w,{state:E(a),class:"flex flex-col gap-4"},{default:c(()=>[f(g,{label:"Email",name:"email"},{default:c(()=>[f(d,{modelValue:E(a).email,"onUpdate:modelValue":i[6]||(i[6]=p=>E(a).email=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["state"])]),_:1}),f(T,{class:"flex-1"},{header:c(()=>[Al]),footer:c(()=>[S("div",xl,[f(y,{variant:"solid",color:"primary",label:"Change Password"})])]),default:c(()=>[f(w,{state:E(o),class:"flex flex-col gap-4"},{default:c(()=>[f(g,{label:"Old Password",name:"oldPassword"},{default:c(()=>[f(d,{type:"password",modelValue:E(o).oldPassword,"onUpdate:modelValue":i[7]||(i[7]=p=>E(o).oldPassword=p)},null,8,["modelValue"])]),_:1}),f(g,{label:"New Password",name:"newPassword"},{default:c(()=>[f(d,{type:"password",modelValue:E(o).newPassword,"onUpdate:modelValue":i[8]||(i[8]=p=>E(o).newPassword=p)},null,8,["modelValue"])]),_:1}),f(g,{label:"Confirm Password",name:"confirmPassword"},{default:c(()=>[f(d,{type:"password",modelValue:E(o).confirmPassword,"onUpdate:modelValue":i[9]||(i[9]=p=>E(o).confirmPassword=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["state"])]),_:1}),f(T,{class:"flex-1"},{header:c(()=>[Dl]),footer:c(()=>[S("div",Bl,[f(y,{variant:"solid",color:"primary",label:"Delete",onClick:i[10]||(i[10]=p=>r.value=!0)})])]),default:c(()=>[Ol]),_:1}),(ve(),_e(We,{to:"body"},[f($,{modelValue:E(r),"onUpdate:modelValue":i[12]||(i[12]=p=>_t(r)?r.value=p:null)},{default:c(()=>[f(T,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:c(()=>[Vl]),footer:c(()=>[S("div",Rl,[f(y,{variant:"solid",color:"primary",label:"Delete",onClick:s}),f(y,{variant:"outline",color:"gray",label:"Cancel",onClick:i[11]||(i[11]=p=>r.value=!1)})])]),default:c(()=>[kl]),_:1})]),_:1},8,["modelValue"])]))])}}});export{Jl as default};
