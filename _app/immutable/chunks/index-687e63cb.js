function x(){}const J=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(K)}function R(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function Rt(t,e,n,i,r,l){if(r){const s=Q(e,n,i,l);t.p(s,r)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const W=typeof window<"u";let U=W?()=>window.performance.now():()=>Date.now(),T=W?t=>requestAnimationFrame(t):x;const g=new Set;function V(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&T(V)}function X(t){let e;return g.size===0&&T(V),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let P=!1;function dt(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:mt(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(s[c],f)}}function yt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=tt("style");return xt(Y(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function bt(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){P&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function It(){return F(" ")}function Lt(){return F("")}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){vt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function nt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Jt(t,e,n){return nt(t,e,n,tt)}function Kt(t,e,n){return nt(t,e,n,$t)}function Et(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Qt(t){return Et(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Vt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const j=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:gt(e),rules:{}};return j.set(t,n),n}function it(t,e,n,i,r,l,s,u=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const k=e+(n-e)*l(m);o+=m*100+`%{${s(k,1-k)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${u}`,_=Y(t),{stylesheet:d,rules:h}=j.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){T(()=>{M||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),j.clear())})}let E;function v(t){E=t}function rt(){if(!E)throw new Error("Function called outside component initialization");return E}function Xt(t){rt().$$.on_mount.push(t)}function Yt(t){rt().$$.after_update.push(t)}const w=[],L=[],S=[],G=[],st=Promise.resolve();let B=!1;function ct(){B||(B=!0,st.then(ot))}function Zt(){return ct(),st}function N(t){S.push(t)}const D=new Set;let A=0;function ot(){const t=E;do{for(;A<w.length;){const e=w[A];A++,v(e),Ct(e.$$)}for(v(null),w.length=0,A=0;L.length;)L.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];D.has(n)||(D.add(n),n())}S.length=0}while(w.length);for(;G.length;)G.pop()();B=!1,D.clear(),v(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let $;function lt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const C=new Set;let y;function te(){y={r:0,c:[],p:y}}function ee(){y.r||b(y.c),y=y.p}function jt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),y.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function ie(t,e,n){let i=e(t,n),r=!1,l,s,u=0;function c(){l&&z(t,l)}function o(){const{delay:a=0,duration:_=300,easing:d=J,tick:h=x,css:p}=i||ut;p&&(l=it(t,0,1,_,a,d,p,u++)),h(0,1);const m=U()+a,k=m+_;s&&s.abort(),r=!0,N(()=>O(t,!0,"start")),s=X(q=>{if(r){if(q>=k)return h(1,0),O(t,!0,"end"),c(),r=!1;if(q>=m){const H=d((q-m)/_);h(H,1-H)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),R(i)?(i=i(),lt().then(o)):o())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function re(t,e,n){let i=e(t,n),r=!0,l;const s=y;s.r+=1;function u(){const{delay:c=0,duration:o=300,easing:f=J,tick:a=x,css:_}=i||ut;_&&(l=it(t,1,0,o,c,f,_));const d=U()+c,h=d+o;N(()=>O(t,!1,"start")),X(p=>{if(r){if(p>=h)return a(0,1),O(t,!1,"end"),--s.r||b(s.c),!1;if(p>=d){const m=f((p-d)/o);a(1-m,m)}}return r})}return R(i)?lt().then(()=>{i=i(),u()}):u(),{end(c){c&&i.tick&&i.tick(1,0),r&&(l&&z(t,l),r=!1)}}}function se(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),i||N(()=>{const c=l.map(K).filter(R);s?s.push(...c):b(c),t.$$.on_mount=[]}),u.forEach(N)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,r,l,s,u=[-1]){const c=E;v(t);const o=t.$$={fragment:null,ctx:null,props:l,update:x,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Pt(t,a)),_}):[],o.update(),f=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){dt();const a=wt(e.target);o.fragment&&o.fragment.l(a),a.forEach(Z)}else o.fragment&&o.fragment.c();e.intro&&jt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ht(),ot()}v(c)}class le{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{x as A,_t as B,b as C,R as D,zt as E,Rt as F,Tt as G,Bt as H,N as I,ie as J,re as K,bt as L,Dt as M,$t as N,Kt as O,Ht as P,Vt as Q,le as S,It as a,Ft as b,Qt as c,ee as d,Lt as e,jt as f,te as g,Z as h,oe as i,Yt as j,tt as k,Jt as l,wt as m,Gt as n,Xt as o,Ut as p,F as q,Et as r,qt as s,ne as t,Wt as u,se as v,ce as w,Mt as x,Ot as y,Zt as z};
