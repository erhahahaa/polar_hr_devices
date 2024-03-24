import{ah as R,P as b,a8 as $,n as B,ai as F,a6 as O,a1 as U,aj as j,ak as T,H as z,ac as H,q as L,al as h,am as M,G as q,an as K,D as x}from"./D1FGlxrg.js";import{g as G}from"./BQjOdfn3.js";const k=s=>s==="defer"||s===!1;function N(...s){var v;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,o,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=j(),l=o,y=()=>null,g=()=>a.isHydrating?a.payload.data[t]:a.static.data[t];e.server=e.server??!0,e.default=e.default??y,e.getCachedData=e.getCachedData??g,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??R.deep,e.dedupe=e.dedupe??"cancel";const m=()=>e.getCachedData(t,a)!=null;if(!a._asyncData[t]||!e.immediate){(v=a.payload._errors)[t]??(v[t]=null);const c=e.deep?b:$;a._asyncData[t]={data:c(e.getCachedData(t,a)??e.default()),pending:b(!m()),error:B(a.payload._errors,t),status:b("idle")}}const r={...a._asyncData[t]};r.refresh=r.execute=(c={})=>{if(a._asyncDataPromises[t]){if(k(c.dedupe??e.dedupe))return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((c._initial||a.isHydrating&&c._initial!==!1)&&m())return Promise.resolve(e.getCachedData(t,a));r.pending.value=!0,r.status.value="pending";const f=new Promise((i,u)=>{try{i(l(a))}catch(_){u(_)}}).then(async i=>{if(f.cancelled)return a._asyncDataPromises[t];let u=i;e.transform&&(u=await e.transform(i)),e.pick&&(u=I(u,e.pick)),a.payload.data[t]=u,r.data.value=u,r.error.value=null,r.status.value="success"}).catch(i=>{if(f.cancelled)return a._asyncDataPromises[t];r.error.value=T(i),r.data.value=z(e.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=f,a._asyncDataPromises[t]},r.clear=()=>S(a,t);const p=()=>r.refresh({_initial:!0}),w=e.server!==!1&&a.payload.serverRendered;{const c=H();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const i=c._nuxtOnBeforeMountCbs;c&&(F(()=>{i.forEach(u=>{u()}),i.splice(0,i.length)}),O(()=>i.splice(0,i.length)))}w&&a.isHydrating&&(r.error.value||m())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?c._nuxtOnBeforeMountCbs.push(p):e.immediate&&p(),e.watch&&U(e.watch,()=>r.refresh());const f=a.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});c&&O(f)}const D=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(D,r),D}function S(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function I(s,n){const t={};for(const o of n)t[o]=s[o];return t}function V(s,n,t){const[o={},e]=typeof n=="string"?[{},n]:[n,t],a=L(()=>h(s)),l=o.key||M([e,typeof a.value=="string"?a.value:"",...W(o)]);if(!l||typeof l!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+l);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const y=l===e?"$f"+l:l;if(!o.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:g,lazy:m,default:r,transform:p,pick:w,watch:D,immediate:v,getCachedData:c,deep:f,dedupe:i,...u}=o,_=q({...K,...u,cache:typeof o.cache=="boolean"?void 0:o.cache}),E={server:g,lazy:m,default:r,transform:p,pick:w,immediate:v,getCachedData:c,deep:f,dedupe:i,watch:D===!1?[]:[_,a,...D||[]]};let d;return N(y,()=>{var C;(C=d==null?void 0:d.abort)==null||C.call(d),d=typeof AbortController<"u"?new AbortController:{};const P=h(o.timeout);return P&&setTimeout(()=>d.abort(),P),(o.$fetch||globalThis.$fetch)(a.value,{signal:d.signal,..._})},E)}function W(s){var t;const n=[((t=h(s.method))==null?void 0:t.toUpperCase())||"GET",h(s.baseURL)];for(const o of[s.params||s.query]){const e=h(o);if(!e)continue;const a={};for(const[l,y]of Object.entries(e))a[h(l)]=h(y);n.push(a)}return n}const Z=(s,n={})=>{var o,e;const t=x();return V(s,{baseURL:G(),headers:{Authorization:`Bearer ${((e=(o=t.data.value)==null?void 0:o.user)==null?void 0:e.token)||""}`},...n},"$k5DXA8K3Ga")};export{Z as u};
