import{S as g,i as y,s as m,e as p,b as k,g as I,t as u,A as q,d as A,f,h as _,E as v,k as D,l as F,m as G,n as H,F as b,G as w,H as S,I as J,J as K,K as L,v as N,w as O,x as P,y as T}from"../../chunks/index-cec27109.js";function V(o){const e=o-1;return e*e*e+1}function $(o,{delay:e=0,duration:a=400,easing:n=V,x:t=0,y:s=0,opacity:r=0}={}){const l=getComputedStyle(o),i=+l.opacity,c=l.transform==="none"?"":l.transform,C=i*(1-r);return{delay:e,duration:a,easing:n,css:(d,E)=>`
			transform: ${c} translate(${(1-d)*t}px, ${(1-d)*s}px);
			opacity: ${i-C*E}`}}function h(o){let e,a,n,t;const s=o[2].default,r=v(s,o,o[1],null);return{c(){e=D("div"),r&&r.c(),this.h()},l(l){e=F(l,"DIV",{class:!0});var i=G(e);r&&r.l(i),i.forEach(_),this.h()},h(){H(e,"class","h-full w-full")},m(l,i){k(l,e,i),r&&r.m(e,null),t=!0},p(l,i){r&&r.p&&(!t||i&2)&&b(r,s,l,l[1],t?S(s,l[1],i,null):w(l[1]),null)},i(l){t||(f(r,l),J(()=>{n&&n.end(1),a=K(e,$,{x:-5,duration:500,delay:500}),a.start()}),t=!0)},o(l){u(r,l),a&&a.invalidate(),n=L(e,$,{x:5,duration:500}),t=!1},d(l){l&&_(e),r&&r.d(l),l&&n&&n.end()}}}function j(o){let e=o[0],a,n,t=h(o);return{c(){t.c(),a=p()},l(s){t.l(s),a=p()},m(s,r){t.m(s,r),k(s,a,r),n=!0},p(s,[r]){r&1&&m(e,e=s[0])?(I(),u(t,1,1,q),A(),t=h(s),t.c(),f(t,1),t.m(a.parentNode,a)):t.p(s,r)},i(s){n||(f(t),n=!0)},o(s){u(t),n=!1},d(s){s&&_(a),t.d(s)}}}function z(o,e,a){let{$$slots:n={},$$scope:t}=e,{pathname:s=""}=e;return o.$$set=r=>{"pathname"in r&&a(0,s=r.pathname),"$$scope"in r&&a(1,t=r.$$scope)},[s,t,n]}class B extends g{constructor(e){super(),y(this,e,z,j,m,{pathname:0})}}function M(o){let e;const a=o[4].default,n=v(a,o,o[5],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,s){n&&n.m(t,s),e=!0},p(t,s){n&&n.p&&(!e||s&32)&&b(n,a,t,t[5],e?S(a,t[5],s,null):w(t[5]),null)},i(t){e||(f(n,t),e=!0)},o(t){u(n,t),e=!1},d(t){n&&n.d(t)}}}function Q(o){let e,a;return e=new B({props:{pathname:o[0].pathname,$$slots:{default:[M]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,t){P(e,n,t),a=!0},p(n,[t]){const s={};t&1&&(s.pathname=n[0].pathname),t&32&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){a||(f(e.$$.fragment,n),a=!0)},o(n){u(e.$$.fragment,n),a=!1},d(n){T(e,n)}}}function R(o,e,a){let{$$slots:n={},$$scope:t}=e;const s=!1,r=!1,l=!0;let{data:i}=e;return o.$$set=c=>{"data"in c&&a(0,i=c.data),"$$scope"in c&&a(5,t=c.$$scope)},[i,s,r,l,n,t]}class W extends g{constructor(e){super(),y(this,e,R,Q,m,{ssr:1,prerender:2,csr:3,data:0})}get ssr(){return this.$$.ctx[1]}get prerender(){return this.$$.ctx[2]}get csr(){return this.$$.ctx[3]}}export{W as default};