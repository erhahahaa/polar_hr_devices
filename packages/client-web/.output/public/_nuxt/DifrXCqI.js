import{aa as xe,a9 as Le,a2 as tr,a5 as fe,P as $,q as I,a0 as ie,aM as rr,a7 as ye,F as Pt,h as ne,a1 as nr,a6 as At,aN as ft}from"./h3RA-D6g.js";let St=Symbol("headlessui.useid"),ar=0;function Tt(){return xe(St,()=>`${++ar}`)()}function Ln(e){Le(St,e)}function P(e){var t;if(e==null||e.value==null)return null;let r=(t=e.value.$el)!=null?t:e.value;return r instanceof Node?r:null}function ee(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ee),n}var or=Object.defineProperty,ir=(e,t,r)=>t in e?or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dt=(e,t,r)=>(ir(e,typeof t!="symbol"?t+"":t,r),r);let sr=class{constructor(){dt(this,"current",this.detect()),dt(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ge=new sr;function ke(e){if(Ge.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=P(e);if(t)return t.ownerDocument}return document}let Ue=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(R||{}),he=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(he||{}),lr=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(lr||{});function $t(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Ue)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var Dt=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Dt||{});function jt(e,t=0){var r;return e===((r=ke(e))==null?void 0:r.body)?!1:ee(t,{0(){return e.matches(Ue)},1(){let n=e;for(;n!==null;){if(n.matches(Ue))return!0;n=n.parentElement}return!1}})}function kn(e){let t=ke(e);tr(()=>{t&&!jt(t.activeElement,0)&&cr(e)})}var ur=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ur||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function cr(e){e==null||e.focus({preventScroll:!0})}let fr=["textarea","input"].join(",");function dr(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,fr))!=null?r:!1}function oe(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),a=t(n);if(o===null||a===null)return 0;let s=o.compareDocumentPosition(a);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Mn(e,t){return _($t(),t,{relativeTo:e})}function _(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:o=[]}={}){var a;let s=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,i=Array.isArray(e)?r?oe(e):e:$t(e);o.length>0&&i.length>1&&(i=i.filter(g=>!o.includes(g))),n=n??s.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(n))-1;if(t&4)return Math.max(0,i.indexOf(n))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},d=0,h=i.length,v;do{if(d>=h||d+h<=0)return 0;let g=f+d;if(t&16)g=(g+h)%h;else{if(g<0)return 3;if(g>=h)return 1}v=i[g],v==null||v.focus(u),d+=l}while(v!==s.activeElement);return t&6&&dr(v)&&v.select(),2}function pr(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function vr(){return/Android/gi.test(window.navigator.userAgent)}function mr(){return pr()||vr()}function je(e,t,r){Ge.isServer||fe(n=>{document.addEventListener(e,t,r),n(()=>document.removeEventListener(e,t,r))})}function hr(e,t,r){Ge.isServer||fe(n=>{window.addEventListener(e,t,r),n(()=>window.removeEventListener(e,t,r))})}function Cn(e,t,r=I(()=>!0)){function n(a,s){if(!r.value||a.defaultPrevented)return;let i=s(a);if(i===null||!i.getRootNode().contains(i))return;let l=function f(u){return typeof u=="function"?f(u()):Array.isArray(u)||u instanceof Set?u:[u]}(e);for(let f of l){if(f===null)continue;let u=f instanceof HTMLElement?f:P(f);if(u!=null&&u.contains(i)||a.composed&&a.composedPath().includes(u))return}return!jt(i,Dt.Loose)&&i.tabIndex!==-1&&a.preventDefault(),t(a,i)}let o=$(null);je("pointerdown",a=>{var s,i;r.value&&(o.value=((i=(s=a.composedPath)==null?void 0:s.call(a))==null?void 0:i[0])||a.target)},!0),je("mousedown",a=>{var s,i;r.value&&(o.value=((i=(s=a.composedPath)==null?void 0:s.call(a))==null?void 0:i[0])||a.target)},!0),je("click",a=>{mr()||o.value&&(n(a,()=>o.value),o.value=null)},!0),je("touchend",a=>n(a,()=>a.target instanceof HTMLElement?a.target:null),!0),hr("blur",a=>n(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function pt(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function gr(e,t){let r=$(pt(e.value.type,e.value.as));return ie(()=>{r.value=pt(e.value.type,e.value.as)}),fe(()=>{var n;r.value||P(t)&&P(t)instanceof HTMLButtonElement&&!((n=P(t))!=null&&n.hasAttribute("type"))&&(r.value="button")}),r}function vt(e){return[e.screenX,e.screenY]}function Bn(){let e=$([-1,-1]);return{wasMoved(t){let r=vt(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=vt(t)}}}function Rn({container:e,accept:t,walk:r,enabled:n}){fe(()=>{let o=e.value;if(!o||n!==void 0&&!n.value)return;let a=ke(e);if(!a)return;let s=Object.assign(l=>t(l),{acceptNode:t}),i=a.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,s,!1);for(;i.nextNode();)r(i.currentNode)})}var qe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(qe||{}),br=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(br||{});function de({visible:e=!0,features:t=0,ourProps:r,theirProps:n,...o}){var a;let s=Ft(n,r),i=Object.assign(o,{props:s});if(e||t&2&&s.static)return We(i);if(t&1){let l=(a=s.unmount)==null||a?0:1;return ee(l,{0(){return null},1(){return We({...o,props:{...s,hidden:!0,style:{display:"none"}}})}})}return We(i)}function We({props:e,attrs:t,slots:r,slot:n,name:o}){var a,s;let{as:i,...l}=Lt(e,["unmount","static"]),f=(a=r.default)==null?void 0:a.call(r,n),u={};if(n){let d=!1,h=[];for(let[v,g]of Object.entries(n))typeof g=="boolean"&&(d=!0),g===!0&&h.push(v);d&&(u["data-headlessui-state"]=h.join(" "))}if(i==="template"){if(f=It(f??[]),Object.keys(l).length>0||Object.keys(t).length>0){let[d,...h]=f??[];if(!yr(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(t)).map(c=>c.trim()).filter((c,p,b)=>b.indexOf(c)===p).sort((c,p)=>c.localeCompare(p)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let v=Ft((s=d.props)!=null?s:{},l,u),g=rr(d,v,!0);for(let c in v)c.startsWith("on")&&(g.props||(g.props={}),g.props[c]=v[c]);return g}return Array.isArray(f)&&f.length===1?f[0]:f}return ye(i,Object.assign({},l,u),{default:()=>f})}function It(e){return e.flatMap(t=>t.type===Pt?It(t.children):[t])}function Ft(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](o,...a){let s=r[n];for(let i of s){if(o instanceof Event&&o.defaultPrevented)return;i(o,...a)}}});return t}function Hn(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function Lt(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function yr(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var Nt=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Nt||{});let kt=ne({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{var n;let{features:o,...a}=e,s={"aria-hidden":(o&2)===2?!0:(n=a["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return de({ourProps:s,theirProps:a,slot:{},attrs:r,slots:t,name:"Hidden"})}}}),Mt=Symbol("Context");var wr=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(wr||{});function Wn(){return xr()!==null}function xr(){return xe(Mt,null)}function Un(e){Le(Mt,e)}var H=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(H||{});function Or(e){throw new Error("Unexpected object: "+e)}var Er=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Er||{});function qn(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),o=n??-1;switch(e.focus){case 0:{for(let a=0;a<r.length;++a)if(!t.resolveDisabled(r[a],a,r))return a;return n}case 1:{o===-1&&(o=r.length);for(let a=o-1;a>=0;--a)if(!t.resolveDisabled(r[a],a,r))return a;return n}case 2:{for(let a=o+1;a<r.length;++a)if(!t.resolveDisabled(r[a],a,r))return a;return n}case 3:{for(let a=r.length-1;a>=0;--a)if(!t.resolveDisabled(r[a],a,r))return a;return n}case 4:{for(let a=0;a<r.length;++a)if(t.resolveId(r[a],a,r)===e.id)return a;return n}case 5:return null;default:Or(e)}}function Pr(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let mt=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ht(e){var t,r;let n=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return n;let a=!1;for(let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),a=!0;let s=a?(r=o.innerText)!=null?r:"":n;return mt.test(s)&&(s=s.replace(mt,"")),s}function Ar(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let n=r.split(" ").map(o=>{let a=document.getElementById(o);if(a){let s=a.getAttribute("aria-label");return typeof s=="string"?s.trim():ht(a).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return ht(e).trim()}function Vn(e){let t=$(""),r=$("");return()=>{let n=P(e);if(!n)return"";let o=n.innerText;if(t.value===o)return r.value;let a=Ar(n).trim().toLowerCase();return t.value=o,r.value=a,a}}let Sr=ne({props:{onFocus:{type:Function,required:!0}},setup(e){let t=$(!0);return()=>t.value?ye(kt,{as:"button",type:"button",features:Nt.Focusable,onFocus(r){r.preventDefault();let n,o=50;function a(){var s;if(o--<=0){n&&cancelAnimationFrame(n);return}if((s=e.onFocus)!=null&&s.call(e)){t.value=!1,cancelAnimationFrame(n);return}n=requestAnimationFrame(a)}n=requestAnimationFrame(a)}}):null}});var Tr=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Tr||{}),$r=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))($r||{});let Ct=Symbol("TabsContext");function Oe(e){let t=xe(Ct,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Oe),r}return t}let Ye=Symbol("TabsSSRContext"),Xn=ne({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:r,emit:n}){var o;let a=$((o=e.selectedIndex)!=null?o:e.defaultIndex),s=$([]),i=$([]),l=I(()=>e.selectedIndex!==null),f=I(()=>l.value?e.selectedIndex:a.value);function u(c){var p;let b=oe(d.tabs.value,P),m=oe(d.panels.value,P),x=b.filter(y=>{var w;return!((w=P(y))!=null&&w.hasAttribute("disabled"))});if(c<0||c>b.length-1){let y=ee(a.value===null?0:Math.sign(c-a.value),{[-1]:()=>1,0:()=>ee(Math.sign(c),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),w=ee(y,{0:()=>b.indexOf(x[0]),1:()=>b.indexOf(x[x.length-1])});w!==-1&&(a.value=w),d.tabs.value=b,d.panels.value=m}else{let y=b.slice(0,c),w=[...b.slice(c),...y].find(E=>x.includes(E));if(!w)return;let O=(p=b.indexOf(w))!=null?p:d.selectedIndex.value;O===-1&&(O=d.selectedIndex.value),a.value=O,d.tabs.value=b,d.panels.value=m}}let d={selectedIndex:I(()=>{var c,p;return(p=(c=a.value)!=null?c:e.defaultIndex)!=null?p:null}),orientation:I(()=>e.vertical?"vertical":"horizontal"),activation:I(()=>e.manual?"manual":"auto"),tabs:s,panels:i,setSelectedIndex(c){f.value!==c&&n("change",c),l.value||u(c)},registerTab(c){var p;if(s.value.includes(c))return;let b=s.value[a.value];s.value.push(c),s.value=oe(s.value,P);let m=(p=s.value.indexOf(b))!=null?p:a.value;m!==-1&&(a.value=m)},unregisterTab(c){let p=s.value.indexOf(c);p!==-1&&s.value.splice(p,1)},registerPanel(c){i.value.includes(c)||(i.value.push(c),i.value=oe(i.value,P))},unregisterPanel(c){let p=i.value.indexOf(c);p!==-1&&i.value.splice(p,1)}};Le(Ct,d);let h=$({tabs:[],panels:[]}),v=$(!1);ie(()=>{v.value=!0}),Le(Ye,I(()=>v.value?null:h.value));let g=I(()=>e.selectedIndex);return ie(()=>{nr([g],()=>{var c;return u((c=e.selectedIndex)!=null?c:e.defaultIndex)},{immediate:!0})}),fe(()=>{if(!l.value||f.value==null||d.tabs.value.length<=0)return;let c=oe(d.tabs.value,P);c.some((p,b)=>P(d.tabs.value[b])!==P(p))&&d.setSelectedIndex(c.findIndex(p=>P(p)===P(d.tabs.value[f.value])))}),()=>{let c={selectedIndex:a.value};return ye(Pt,[s.value.length<=0&&ye(Sr,{onFocus:()=>{for(let p of s.value){let b=P(p);if((b==null?void 0:b.tabIndex)===0)return b.focus(),!0}return!1}}),de({theirProps:{...r,...Lt(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:c,slots:t,attrs:r,name:"TabGroup"})])}}}),Gn=ne({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:r}){let n=Oe("TabList");return()=>{let o={selectedIndex:n.selectedIndex.value},a={role:"tablist","aria-orientation":n.orientation.value};return de({ourProps:a,theirProps:e,slot:o,attrs:t,slots:r,name:"TabList"})}}}),Yn=ne({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:n}){var o;let a=(o=e.id)!=null?o:`headlessui-tabs-tab-${Tt()}`,s=Oe("Tab"),i=$(null);n({el:i,$el:i}),ie(()=>s.registerTab(i)),At(()=>s.unregisterTab(i));let l=xe(Ye),f=I(()=>{if(l.value){let m=l.value.tabs.indexOf(a);return m===-1?l.value.tabs.push(a)-1:m}return-1}),u=I(()=>{let m=s.tabs.value.indexOf(i);return m===-1?f.value:m}),d=I(()=>u.value===s.selectedIndex.value);function h(m){var x;let y=m();if(y===he.Success&&s.activation.value==="auto"){let w=(x=ke(i))==null?void 0:x.activeElement,O=s.tabs.value.findIndex(E=>P(E)===w);O!==-1&&s.setSelectedIndex(O)}return y}function v(m){let x=s.tabs.value.map(y=>P(y)).filter(Boolean);if(m.key===H.Space||m.key===H.Enter){m.preventDefault(),m.stopPropagation(),s.setSelectedIndex(u.value);return}switch(m.key){case H.Home:case H.PageUp:return m.preventDefault(),m.stopPropagation(),h(()=>_(x,R.First));case H.End:case H.PageDown:return m.preventDefault(),m.stopPropagation(),h(()=>_(x,R.Last))}if(h(()=>ee(s.orientation.value,{vertical(){return m.key===H.ArrowUp?_(x,R.Previous|R.WrapAround):m.key===H.ArrowDown?_(x,R.Next|R.WrapAround):he.Error},horizontal(){return m.key===H.ArrowLeft?_(x,R.Previous|R.WrapAround):m.key===H.ArrowRight?_(x,R.Next|R.WrapAround):he.Error}}))===he.Success)return m.preventDefault()}let g=$(!1);function c(){var m;g.value||(g.value=!0,!e.disabled&&((m=P(i))==null||m.focus({preventScroll:!0}),s.setSelectedIndex(u.value),Pr(()=>{g.value=!1})))}function p(m){m.preventDefault()}let b=gr(I(()=>({as:e.as,type:t.type})),i);return()=>{var m;let x={selected:d.value},{...y}=e,w={ref:i,onKeydown:v,onMousedown:p,onClick:c,id:a,role:"tab",type:b.value,"aria-controls":(m=P(s.panels.value[u.value]))==null?void 0:m.id,"aria-selected":d.value,tabIndex:d.value?0:-1,disabled:e.disabled?!0:void 0};return de({ourProps:w,theirProps:y,slot:x,attrs:t,slots:r,name:"Tab"})}}}),zn=ne({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:r}){let n=Oe("TabPanels");return()=>{let o={selectedIndex:n.selectedIndex.value};return de({theirProps:e,ourProps:{},slot:o,attrs:r,slots:t,name:"TabPanels"})}}}),Kn=ne({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:r,expose:n}){var o;let a=(o=e.id)!=null?o:`headlessui-tabs-panel-${Tt()}`,s=Oe("TabPanel"),i=$(null);n({el:i,$el:i}),ie(()=>s.registerPanel(i)),At(()=>s.unregisterPanel(i));let l=xe(Ye),f=I(()=>{if(l.value){let h=l.value.panels.indexOf(a);return h===-1?l.value.panels.push(a)-1:h}return-1}),u=I(()=>{let h=s.panels.value.indexOf(i);return h===-1?f.value:h}),d=I(()=>u.value===s.selectedIndex.value);return()=>{var h;let v={selected:d.value},{tabIndex:g,...c}=e,p={ref:i,id:a,role:"tabpanel","aria-labelledby":(h=P(s.tabs.value[u.value]))==null?void 0:h.id,tabIndex:d.value?g:-1};return!d.value&&e.unmount&&!e.static?ye(kt,{as:"span","aria-hidden":!0,...p}):de({ourProps:p,theirProps:c,slot:v,attrs:t,slots:r,features:qe.Static|qe.RenderStrategy,visible:d.value,name:"TabPanel"})}}});function k(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function re(e){var t=k(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=k(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ze(e){if(typeof ShadowRoot>"u")return!1;var t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var te=Math.max,Ne=Math.min,se=Math.round;function Ve(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Bt(){return!/^((?!chrome|android).)*safari/i.test(Ve())}function le(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&M(e)&&(o=e.offsetWidth>0&&se(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&se(n.height)/e.offsetHeight||1);var s=re(e)?k(e):window,i=s.visualViewport,l=!Bt()&&r,f=(n.left+(l&&i?i.offsetLeft:0))/o,u=(n.top+(l&&i?i.offsetTop:0))/a,d=n.width/o,h=n.height/a;return{width:d,height:h,top:u,right:f+d,bottom:u+h,left:f,x:f,y:u}}function Ke(e){var t=k(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Dr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jr(e){return e===k(e)||!M(e)?Ke(e):Dr(e)}function V(e){return e?(e.nodeName||"").toLowerCase():null}function Y(e){return((re(e)?e.ownerDocument:e.document)||window.document).documentElement}function Je(e){return le(Y(e)).left+Ke(e).scrollLeft}function X(e){return k(e).getComputedStyle(e)}function Qe(e){var t=X(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Ir(e){var t=e.getBoundingClientRect(),r=se(t.width)/e.offsetWidth||1,n=se(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Fr(e,t,r){r===void 0&&(r=!1);var n=M(t),o=M(t)&&Ir(t),a=Y(t),s=le(e,o,r),i={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||Qe(a))&&(i=jr(t)),M(t)?(l=le(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=Je(a))),{x:s.left+i.scrollLeft-l.x,y:s.top+i.scrollTop-l.y,width:s.width,height:s.height}}function Ze(e){var t=le(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Me(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(ze(e)?e.host:null)||Y(e)}function Rt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:M(e)&&Qe(e)?e:Rt(Me(e))}function ge(e,t){var r;t===void 0&&(t=[]);var n=Rt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=k(n),s=o?[a].concat(a.visualViewport||[],Qe(n)?n:[]):n,i=t.concat(s);return o?i:i.concat(ge(Me(s)))}function Lr(e){return["table","td","th"].indexOf(V(e))>=0}function gt(e){return!M(e)||X(e).position==="fixed"?null:e.offsetParent}function Nr(e){var t=/firefox/i.test(Ve()),r=/Trident/i.test(Ve());if(r&&M(e)){var n=X(e);if(n.position==="fixed")return null}var o=Me(e);for(ze(o)&&(o=o.host);M(o)&&["html","body"].indexOf(V(o))<0;){var a=X(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function Ee(e){for(var t=k(e),r=gt(e);r&&Lr(r)&&X(r).position==="static";)r=gt(r);return r&&(V(r)==="html"||V(r)==="body"&&X(r).position==="static")?t:r||Nr(e)||t}var L="top",W="bottom",U="right",N="left",_e="auto",Pe=[L,W,U,N],ue="start",we="end",kr="clippingParents",Ht="viewport",me="popper",Mr="reference",bt=Pe.reduce(function(e,t){return e.concat([t+"-"+ue,t+"-"+we])},[]),Wt=[].concat(Pe,[_e]).reduce(function(e,t){return e.concat([t,t+"-"+ue,t+"-"+we])},[]),Cr="beforeRead",Br="read",Rr="afterRead",Hr="beforeMain",Wr="main",Ur="afterMain",qr="beforeWrite",Vr="write",Xr="afterWrite",Gr=[Cr,Br,Rr,Hr,Wr,Ur,qr,Vr,Xr];function Yr(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(i){if(!r.has(i)){var l=t.get(i);l&&o(l)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function zr(e){var t=Yr(e);return Gr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Kr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Jr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}function Qr(e,t){var r=k(e),n=Y(e),o=r.visualViewport,a=n.clientWidth,s=n.clientHeight,i=0,l=0;if(o){a=o.width,s=o.height;var f=Bt();(f||!f&&t==="fixed")&&(i=o.offsetLeft,l=o.offsetTop)}return{width:a,height:s,x:i+Je(e),y:l}}function Zr(e){var t,r=Y(e),n=Ke(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=te(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=te(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+Je(e),l=-n.scrollTop;return X(o||r).direction==="rtl"&&(i+=te(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:i,y:l}}function Ut(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ze(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _r(e,t){var r=le(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function yt(e,t,r){return t===Ht?Xe(Qr(e,r)):re(t)?_r(t,r):Xe(Zr(Y(e)))}function en(e){var t=ge(Me(e)),r=["absolute","fixed"].indexOf(X(e).position)>=0,n=r&&M(e)?Ee(e):e;return re(n)?t.filter(function(o){return re(o)&&Ut(o,n)&&V(o)!=="body"}):[]}function tn(e,t,r,n){var o=t==="clippingParents"?en(e):[].concat(t),a=[].concat(o,[r]),s=a[0],i=a.reduce(function(l,f){var u=yt(e,f,n);return l.top=te(u.top,l.top),l.right=Ne(u.right,l.right),l.bottom=Ne(u.bottom,l.bottom),l.left=te(u.left,l.left),l},yt(e,s,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function q(e){return e.split("-")[0]}function ce(e){return e.split("-")[1]}function et(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function qt(e){var t=e.reference,r=e.element,n=e.placement,o=n?q(n):null,a=n?ce(n):null,s=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,l;switch(o){case L:l={x:s,y:t.y-r.height};break;case W:l={x:s,y:t.y+t.height};break;case U:l={x:t.x+t.width,y:i};break;case N:l={x:t.x-r.width,y:i};break;default:l={x:t.x,y:t.y}}var f=o?et(o):null;if(f!=null){var u=f==="y"?"height":"width";switch(a){case ue:l[f]=l[f]-(t[u]/2-r[u]/2);break;case we:l[f]=l[f]+(t[u]/2-r[u]/2);break}}return l}function Vt(){return{top:0,right:0,bottom:0,left:0}}function Xt(e){return Object.assign({},Vt(),e)}function Gt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function tt(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,s=a===void 0?e.strategy:a,i=r.boundary,l=i===void 0?kr:i,f=r.rootBoundary,u=f===void 0?Ht:f,d=r.elementContext,h=d===void 0?me:d,v=r.altBoundary,g=v===void 0?!1:v,c=r.padding,p=c===void 0?0:c,b=Xt(typeof p!="number"?p:Gt(p,Pe)),m=h===me?Mr:me,x=e.rects.popper,y=e.elements[g?m:h],w=tn(re(y)?y:y.contextElement||Y(e.elements.popper),l,u,s),O=le(e.elements.reference),E=qt({reference:O,element:x,strategy:"absolute",placement:o}),T=Xe(Object.assign({},x,E)),S=h===me?T:O,A={top:w.top-S.top+b.top,bottom:S.bottom-w.bottom+b.bottom,left:w.left-S.left+b.left,right:S.right-w.right+b.right},D=e.modifiersData.offset;if(h===me&&D){var C=D[o];Object.keys(A).forEach(function(j){var z=[U,W].indexOf(j)>=0?1:-1,K=[L,W].indexOf(j)>=0?"y":"x";A[j]+=C[K]*z})}return A}var wt={placement:"bottom",modifiers:[],strategy:"absolute"};function xt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function rn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?wt:o;return function(i,l,f){f===void 0&&(f=a);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},wt,a),modifiersData:{},elements:{reference:i,popper:l},attributes:{},styles:{}},d=[],h=!1,v={state:u,setOptions:function(b){var m=typeof b=="function"?b(u.options):b;c(),u.options=Object.assign({},a,u.options,m),u.scrollParents={reference:re(i)?ge(i):i.contextElement?ge(i.contextElement):[],popper:ge(l)};var x=zr(Jr([].concat(n,u.options.modifiers)));return u.orderedModifiers=x.filter(function(y){return y.enabled}),g(),v.update()},forceUpdate:function(){if(!h){var b=u.elements,m=b.reference,x=b.popper;if(xt(m,x)){u.rects={reference:Fr(m,Ee(x),u.options.strategy==="fixed"),popper:Ze(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(A){return u.modifiersData[A.name]=Object.assign({},A.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var w=u.orderedModifiers[y],O=w.fn,E=w.options,T=E===void 0?{}:E,S=w.name;typeof O=="function"&&(u=O({state:u,options:T,name:S,instance:v})||u)}}}},update:Kr(function(){return new Promise(function(p){v.forceUpdate(),p(u)})}),destroy:function(){c(),h=!0}};if(!xt(i,l))return v;v.setOptions(f).then(function(p){!h&&f.onFirstUpdate&&f.onFirstUpdate(p)});function g(){u.orderedModifiers.forEach(function(p){var b=p.name,m=p.options,x=m===void 0?{}:m,y=p.effect;if(typeof y=="function"){var w=y({state:u,name:b,instance:v,options:x}),O=function(){};d.push(w||O)}})}function c(){d.forEach(function(p){return p()}),d=[]}return v}}var Ie={passive:!0};function nn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,s=n.resize,i=s===void 0?!0:s,l=k(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(u){u.addEventListener("scroll",r.update,Ie)}),i&&l.addEventListener("resize",r.update,Ie),function(){a&&f.forEach(function(u){u.removeEventListener("scroll",r.update,Ie)}),i&&l.removeEventListener("resize",r.update,Ie)}}const Yt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:nn,data:{}};function an(e){var t=e.state,r=e.name;t.modifiersData[r]=qt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const on={name:"popperOffsets",enabled:!0,phase:"read",fn:an,data:{}};var sn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ln(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:se(r*o)/o||0,y:se(n*o)/o||0}}function Ot(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,i=e.position,l=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,d=e.isFixed,h=s.x,v=h===void 0?0:h,g=s.y,c=g===void 0?0:g,p=typeof u=="function"?u({x:v,y:c}):{x:v,y:c};v=p.x,c=p.y;var b=s.hasOwnProperty("x"),m=s.hasOwnProperty("y"),x=N,y=L,w=window;if(f){var O=Ee(r),E="clientHeight",T="clientWidth";if(O===k(r)&&(O=Y(r),X(O).position!=="static"&&i==="absolute"&&(E="scrollHeight",T="scrollWidth")),O=O,o===L||(o===N||o===U)&&a===we){y=W;var S=d&&O===w&&w.visualViewport?w.visualViewport.height:O[E];c-=S-n.height,c*=l?1:-1}if(o===N||(o===L||o===W)&&a===we){x=U;var A=d&&O===w&&w.visualViewport?w.visualViewport.width:O[T];v-=A-n.width,v*=l?1:-1}}var D=Object.assign({position:i},f&&sn),C=u===!0?ln({x:v,y:c},k(r)):{x:v,y:c};if(v=C.x,c=C.y,l){var j;return Object.assign({},D,(j={},j[y]=m?"0":"",j[x]=b?"0":"",j.transform=(w.devicePixelRatio||1)<=1?"translate("+v+"px, "+c+"px)":"translate3d("+v+"px, "+c+"px, 0)",j))}return Object.assign({},D,(t={},t[y]=m?c+"px":"",t[x]=b?v+"px":"",t.transform="",t))}function un(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,s=a===void 0?!0:a,i=r.roundOffsets,l=i===void 0?!0:i,f={placement:q(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ot(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ot(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:un,data:{}};function cn(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!M(a)||!V(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(s){var i=o[s];i===!1?a.removeAttribute(s):a.setAttribute(s,i===!0?"":i)}))})}function fn(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},s=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=s.reduce(function(l,f){return l[f]="",l},{});!M(o)||!V(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(l){o.removeAttribute(l)}))})}}const dn={name:"applyStyles",enabled:!0,phase:"write",fn:cn,effect:fn,requires:["computeStyles"]};var pn=[Yt,on,zt,dn],vn={left:"right",right:"left",bottom:"top",top:"bottom"};function Fe(e){return e.replace(/left|right|bottom|top/g,function(t){return vn[t]})}var mn={start:"end",end:"start"};function Et(e){return e.replace(/start|end/g,function(t){return mn[t]})}function hn(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,s=r.padding,i=r.flipVariations,l=r.allowedAutoPlacements,f=l===void 0?Wt:l,u=ce(n),d=u?i?bt:bt.filter(function(g){return ce(g)===u}):Pe,h=d.filter(function(g){return f.indexOf(g)>=0});h.length===0&&(h=d);var v=h.reduce(function(g,c){return g[c]=tt(e,{placement:c,boundary:o,rootBoundary:a,padding:s})[q(c)],g},{});return Object.keys(v).sort(function(g,c){return v[g]-v[c]})}function gn(e){if(q(e)===_e)return[];var t=Fe(e);return[Et(e),t,Et(t)]}function bn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,s=r.altAxis,i=s===void 0?!0:s,l=r.fallbackPlacements,f=r.padding,u=r.boundary,d=r.rootBoundary,h=r.altBoundary,v=r.flipVariations,g=v===void 0?!0:v,c=r.allowedAutoPlacements,p=t.options.placement,b=q(p),m=b===p,x=l||(m||!g?[Fe(p)]:gn(p)),y=[p].concat(x).reduce(function(ae,G){return ae.concat(q(G)===_e?hn(t,{placement:G,boundary:u,rootBoundary:d,padding:f,flipVariations:g,allowedAutoPlacements:c}):G)},[]),w=t.rects.reference,O=t.rects.popper,E=new Map,T=!0,S=y[0],A=0;A<y.length;A++){var D=y[A],C=q(D),j=ce(D)===ue,z=[L,W].indexOf(C)>=0,K=z?"width":"height",F=tt(t,{placement:D,boundary:u,rootBoundary:d,altBoundary:h,padding:f}),B=z?j?U:N:j?W:L;w[K]>O[K]&&(B=Fe(B));var Ae=Fe(B),J=[];if(a&&J.push(F[C]<=0),i&&J.push(F[B]<=0,F[Ae]<=0),J.every(function(ae){return ae})){S=D,T=!1;break}E.set(D,J)}if(T)for(var Se=g?3:1,Ce=function(G){var ve=y.find(function($e){var Q=E.get($e);if(Q)return Q.slice(0,G).every(function(Be){return Be})});if(ve)return S=ve,"break"},pe=Se;pe>0;pe--){var Te=Ce(pe);if(Te==="break")break}t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}}const yn={name:"flip",enabled:!0,phase:"main",fn:bn,requiresIfExists:["offset"],data:{_skip:!1}};function wn(e,t,r){var n=q(e),o=[N,L].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=a[0],i=a[1];return s=s||0,i=(i||0)*o,[N,U].indexOf(n)>=0?{x:i,y:s}:{x:s,y:i}}function xn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,s=Wt.reduce(function(u,d){return u[d]=wn(d,t.rects,a),u},{}),i=s[t.placement],l=i.x,f=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=s}const On={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xn};function En(e){return e==="x"?"y":"x"}function be(e,t,r){return te(e,Ne(t,r))}function Pn(e,t,r){var n=be(e,t,r);return n>r?r:n}function An(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,s=r.altAxis,i=s===void 0?!1:s,l=r.boundary,f=r.rootBoundary,u=r.altBoundary,d=r.padding,h=r.tether,v=h===void 0?!0:h,g=r.tetherOffset,c=g===void 0?0:g,p=tt(t,{boundary:l,rootBoundary:f,padding:d,altBoundary:u}),b=q(t.placement),m=ce(t.placement),x=!m,y=et(b),w=En(y),O=t.modifiersData.popperOffsets,E=t.rects.reference,T=t.rects.popper,S=typeof c=="function"?c(Object.assign({},t.rects,{placement:t.placement})):c,A=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(O){if(a){var j,z=y==="y"?L:N,K=y==="y"?W:U,F=y==="y"?"height":"width",B=O[y],Ae=B+p[z],J=B-p[K],Se=v?-T[F]/2:0,Ce=m===ue?E[F]:T[F],pe=m===ue?-T[F]:-E[F],Te=t.elements.arrow,ae=v&&Te?Ze(Te):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Vt(),ve=G[z],$e=G[K],Q=be(0,E[F],ae[F]),Be=x?E[F]/2-Se-Q-ve-A.mainAxis:Ce-Q-ve-A.mainAxis,Kt=x?-E[F]/2+Se+Q+$e+A.mainAxis:pe+Q+$e+A.mainAxis,Re=t.elements.arrow&&Ee(t.elements.arrow),Jt=Re?y==="y"?Re.clientTop||0:Re.clientLeft||0:0,rt=(j=D==null?void 0:D[y])!=null?j:0,Qt=B+Be-rt-Jt,Zt=B+Kt-rt,nt=be(v?Ne(Ae,Qt):Ae,B,v?te(J,Zt):J);O[y]=nt,C[y]=nt-B}if(i){var at,_t=y==="x"?L:N,er=y==="x"?W:U,Z=O[w],De=w==="y"?"height":"width",ot=Z+p[_t],it=Z-p[er],He=[L,N].indexOf(b)!==-1,st=(at=D==null?void 0:D[w])!=null?at:0,lt=He?ot:Z-E[De]-T[De]-st+A.altAxis,ut=He?Z+E[De]+T[De]-st-A.altAxis:it,ct=v&&He?Pn(lt,Z,ut):be(v?lt:ot,Z,v?ut:it);O[w]=ct,C[w]=ct-Z}t.modifiersData[n]=C}}const Sn={name:"preventOverflow",enabled:!0,phase:"main",fn:An,requiresIfExists:["offset"]};var Tn=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Xt(typeof t!="number"?t:Gt(t,Pe))};function $n(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,i=q(r.placement),l=et(i),f=[N,U].indexOf(i)>=0,u=f?"height":"width";if(!(!a||!s)){var d=Tn(o.padding,r),h=Ze(a),v=l==="y"?L:N,g=l==="y"?W:U,c=r.rects.reference[u]+r.rects.reference[l]-s[l]-r.rects.popper[u],p=s[l]-r.rects.reference[l],b=Ee(a),m=b?l==="y"?b.clientHeight||0:b.clientWidth||0:0,x=c/2-p/2,y=d[v],w=m-h[u]-d[g],O=m/2-h[u]/2+x,E=be(y,O,w),T=l;r.modifiersData[n]=(t={},t[T]=E,t.centerOffset=E-O,t)}}function Dn(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Ut(t.elements.popper,o)&&(t.elements.arrow=o))}const jn={name:"arrow",enabled:!0,phase:"main",fn:$n,effect:Dn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},In=rn({defaultModifiers:[...pn,On,yn,Sn,zt,Yt,jn]});function Jn({locked:e=!1,overflowPadding:t=8,offsetDistance:r=8,offsetSkid:n=0,gpuAcceleration:o=!0,adaptive:a=!0,scroll:s=!0,resize:i=!0,arrow:l=!1,placement:f,strategy:u},d){const h=$(null),v=$(null),g=$(null);return ie(()=>{fe(c=>{if(!v.value||!h.value&&!(d!=null&&d.value))return;const p=ft(v),b=(d==null?void 0:d.value)||ft(h);if(!(p instanceof HTMLElement)||!b)return;const m={modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[n,r]}},{name:"computeStyles",options:{adaptive:a,gpuAcceleration:o}},{name:"eventListeners",options:{scroll:s,resize:i}},{name:"arrow",enabled:l}]};f&&(m.placement=f),u&&(m.strategy=u),g.value=In(b,p,m),c(g.value.destroy)})}),[h,v,g]}export{de as A,gr as B,Rn as C,Vn as D,Bn as E,qn as F,Er as G,Mn as H,zn as I,Jn as J,Hn as K,mr as L,R as N,oe as O,_ as P,cr as S,he as T,kn as _,pr as a,Tt as b,Ge as c,wr as d,Cn as e,kt as f,qe as g,H as h,ke as i,Wn as j,br as k,xr as l,Gn as m,Un as n,P as o,Xn as p,Lt as q,Ln as r,Nt as s,Pr as t,ee as u,jt as v,hr as w,Yn as x,Kn as y,Dt as z};
