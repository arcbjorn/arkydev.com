import{e as d,s as _,n as T,f as y,u as g,g as b,h as v,j as U}from"../chunks/B1fScJuQ.js";import{S as k,i as S,x as p,e as j,A as z,v as u,y as A,u as f,d as c,g as E,j as I,a as L,b as M,C as N,D as B,o as F,q as G,r as H,w as J}from"../chunks/DmwICLVl.js";const K=async({url:{pathname:r}})=>({pathname:r}),nt=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function Q(r){const e=r-1;return e*e*e+1}function $(r,{delay:e=0,duration:o=400,easing:n=Q,x:t=0,y:a=0,opacity:s=0}={}){const l=getComputedStyle(r),i=+l.opacity,w=l.transform==="none"?"":l.transform,C=i*(1-s),[O,V]=d(t),[q,D]=d(a);return{delay:e,duration:o,easing:n,css:(m,P)=>`
			transform: ${w} translate(${(1-m)*O}${V}, ${(1-m)*q}${D});
			opacity: ${i-C*P}`}}function h(r){let e,o,n,t;const a=r[2].default,s=y(a,r,r[1],null);return{c(){e=E("div"),s&&s.c(),this.h()},l(l){e=I(l,"DIV",{class:!0});var i=L(e);s&&s.l(i),i.forEach(c),this.h()},h(){M(e,"class","h-full w-full")},m(l,i){j(l,e,i),s&&s.m(e,null),t=!0},p(l,i){s&&s.p&&(!t||i&2)&&g(s,a,l,l[1],t?v(a,l[1],i,null):b(l[1]),null)},i(l){t||(f(s,l),l&&U(()=>{t&&(n&&n.end(1),o=N(e,$,{x:-5,duration:500,delay:500}),o.start())}),t=!0)},o(l){u(s,l),o&&o.invalidate(),l&&(n=B(e,$,{x:5,duration:500})),t=!1},d(l){l&&c(e),s&&s.d(l),l&&n&&n.end()}}}function R(r){let e=r[0],o,n,t=h(r);return{c(){t.c(),o=p()},l(a){t.l(a),o=p()},m(a,s){t.m(a,s),j(a,o,s),n=!0},p(a,[s]){s&1&&_(e,e=a[0])?(z(),u(t,1,1,T),A(),t=h(a),t.c(),f(t,1),t.m(o.parentNode,o)):t.p(a,s)},i(a){n||(f(t),n=!0)},o(a){u(t),n=!1},d(a){a&&c(o),t.d(a)}}}function W(r,e,o){let{$$slots:n={},$$scope:t}=e,{pathname:a=""}=e;return r.$$set=s=>{"pathname"in s&&o(0,a=s.pathname),"$$scope"in s&&o(1,t=s.$$scope)},[a,t,n]}class X extends k{constructor(e){super(),S(this,e,W,R,_,{pathname:0})}}function Y(r){let e;const o=r[1].default,n=y(o,r,r[2],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,a){n&&n.m(t,a),e=!0},p(t,a){n&&n.p&&(!e||a&4)&&g(n,o,t,t[2],e?v(o,t[2],a,null):b(t[2]),null)},i(t){e||(f(n,t),e=!0)},o(t){u(n,t),e=!1},d(t){n&&n.d(t)}}}function Z(r){let e,o;return e=new X({props:{pathname:r[0].pathname,$$slots:{default:[Y]},$$scope:{ctx:r}}}),{c(){F(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,t){H(e,n,t),o=!0},p(n,[t]){const a={};t&1&&(a.pathname=n[0].pathname),t&4&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i(n){o||(f(e.$$.fragment,n),o=!0)},o(n){u(e.$$.fragment,n),o=!1},d(n){J(e,n)}}}function x(r,e,o){let{$$slots:n={},$$scope:t}=e,{data:a}=e;return r.$$set=s=>{"data"in s&&o(0,a=s.data),"$$scope"in s&&o(2,t=s.$$scope)},[a,n,t]}class at extends k{constructor(e){super(),S(this,e,x,Z,_,{data:0})}}export{at as component,nt as universal};
