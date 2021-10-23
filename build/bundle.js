var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function l(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t,e,n){return t.set(n),e}function a(e){return e&&l(e.destroy)?e.destroy:t}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&f(m)}function $(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=v("style");return function(t,e){$(t.head||t,e)}(h(t),e),e}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function k(){return w(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e){t.value=null==e?"":e}function A(t,e,n){t.classList[n?"add":"remove"](e)}function O(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const M=new Set;let S,D=0;function I(t,e,n,o,s,l,c,r=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*l(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=h(t);M.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=g(t).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${s}ms 1 both`,D+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),D-=s,D||f((()=>{D||(M.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),M.clear())})))}function N(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function V(){const t=P();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=O(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}const R=[],z=[],B=[],U=[],q=Promise.resolve();let F=!1;function J(){F||(F=!0,q.then(Q))}function W(t){B.push(t)}function H(t){U.push(t)}let G=!1;const K=new Set;function Q(){if(!G){G=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];N(e),X(e.$$)}for(N(null),R.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];K.has(e)||(K.add(e),e())}B.length=0}while(R.length);for(;U.length;)U.pop()();F=!1,G=!1,K.clear()}}function X(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let Y;function Z(t,e,n){t.dispatchEvent(O(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function ot(){et.r||s(et.c),et=et.p}function st(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function lt(t,e,n,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ct={duration:0};function rt(n,o,c,r){let i=o(n,c),a=r?0:1,u=null,$=null,h=null;function g(){h&&j(n,h)}function b(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:l=0,duration:c=300,easing:r=e,tick:y=t,css:v}=i||ct,_={start:d()+l,b:o};o||(_.group=et,et.r+=1),u||$?$=_:(v&&(g(),h=I(n,a,o,c,l,r,v)),o&&y(0,1),u=b(_,c),W((()=>Z(n,o,"start"))),function(t){let e;0===p.size&&f(m),new Promise((n=>{p.add(e={c:t,f:n})}))}((t=>{if($&&t>$.start&&(u=b($,c),$=null,Z(n,u.b,"start"),v&&(g(),h=I(n,a,u.b,u.duration,0,r,i.css))),u)if(t>=u.end)y(a=u.b,1-a),Z(n,u.b,"end"),$||(u.b?g():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*r(e/u.duration),y(a,1-a)}return!(!u&&!$)})))}return{run(t){l(i)?(Y||(Y=Promise.resolve(),Y.then((()=>{Y=null}))),Y).then((()=>{i=i(),y(t)})):y(t)},end(){g(),u=$=null}}}function it(t,e){lt(t,1,1,(()=>{e.delete(t.key)}))}function at(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function ut(t){t&&t.c()}function dt(t,e,o,c){const{fragment:r,on_mount:i,on_destroy:a,after_update:u}=t.$$;r&&r.m(e,o),c||W((()=>{const e=i.map(n).filter(l);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(W)}function ft(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(e,n,l,c,r,i,a,u=[-1]){const d=S;N(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let p=!1;if(f.ctx=l?l(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&function(t,e){-1===t.$$.dirty[0]&&(R.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&st(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),Q()}N(d)}class mt{$destroy(){ft(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $t(t){if(t&&"function"==typeof t.select){const e=e=>t.select();return t.addEventListener("focus",e),{destroy:()=>t.removeEventListener("focus",e)}}}function ht(e){let n,o,l,c,r,i,u,d,f,p;return{c(){n=v("form"),o=v("h2"),o.innerHTML='<label for="todo-0" class="label__lg">What needs to be done?</label>',l=k(),c=v("input"),r=k(),i=v("button"),u=w("Add"),C(o,"class","label-wrapper"),C(c,"type","text"),C(c,"id","todo-0"),C(c,"autocomplete","off"),C(c,"class","input input__lg"),C(i,"type","submit"),i.disabled=d=!e[0],C(i,"class","btn btn__primary btn__lg")},m(t,s){b(t,n,s),$(n,o),$(n,l),$(n,c),T(c,e[0]),e[6](c),$(n,r),$(n,i),$(i,u),f||(p=[x(c,"input",e[5]),a($t.call(null,c)),x(n,"submit",E(e[2])),x(n,"keydown",e[7])],f=!0)},p(t,[e]){1&e&&c.value!==t[0]&&T(c,t[0]),1&e&&d!==(d=!t[0])&&(i.disabled=d)},i:t,o:t,d(t){t&&y(n),e[6](null),f=!1,s(p)}}}function gt(t,e,n){const o=V();let s,{autofocus:l=!1}=e,c="";const r=()=>{n(0,c=""),s.focus()};var i;i=()=>l&&s.focus(),P().$$.on_mount.push(i);return t.$$set=t=>{"autofocus"in t&&n(4,l=t.autofocus)},[c,s,()=>{o("addTodo",c),n(0,c=""),s.focus()},r,l,function(){c=this.value,n(0,c)},function(t){z[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},t=>"Escape"===t.key&&r()]}class bt extends mt{constructor(t){super(),pt(this,t,gt,ht,c,{autofocus:4})}}var yt;function vt(e){let n,o,l,c,r,i,a,u,d,f,p,m,h,g,_,w,E,L,T,O,M,S,D,I,j,N;return{c(){n=v("div"),o=v("button"),l=v("span"),l.textContent="Show",c=k(),r=v("span"),r.textContent="All",i=k(),a=v("span"),a.textContent="tasks",d=k(),f=v("button"),p=v("span"),p.textContent="Show",m=k(),h=v("span"),h.textContent="Active",g=k(),_=v("span"),_.textContent="tasks",E=k(),L=v("button"),T=v("span"),T.textContent="Show",O=k(),M=v("span"),M.textContent="Completed",S=k(),D=v("span"),D.textContent="tasks",C(l,"class","visually-hidden"),C(a,"class","visually-hidden"),C(o,"class","btn toggle-btn"),C(o,"aria-pressed",u=e[0]===yt.ALL),A(o,"btn__primary",e[0]===yt.ALL),C(p,"class","visually-hidden"),C(_,"class","visually-hidden"),C(f,"class","btn toggle-btn"),C(f,"aria-pressed",w=e[0]===yt.ACTIVE),A(f,"btn__primary",e[0]===yt.ACTIVE),C(T,"class","visually-hidden"),C(D,"class","visually-hidden"),C(L,"class","btn toggle-btn"),C(L,"aria-pressed",I=e[0]===yt.COMPLETED),A(L,"btn__primary",e[0]===yt.COMPLETED),C(n,"class","filters btn-group stack-exception")},m(t,s){b(t,n,s),$(n,o),$(o,l),$(o,c),$(o,r),$(o,i),$(o,a),$(n,d),$(n,f),$(f,p),$(f,m),$(f,h),$(f,g),$(f,_),$(n,E),$(n,L),$(L,T),$(L,O),$(L,M),$(L,S),$(L,D),j||(N=[x(o,"click",e[1]),x(f,"click",e[2]),x(L,"click",e[3])],j=!0)},p(t,[e]){1&e&&u!==(u=t[0]===yt.ALL)&&C(o,"aria-pressed",u),1&e&&A(o,"btn__primary",t[0]===yt.ALL),1&e&&w!==(w=t[0]===yt.ACTIVE)&&C(f,"aria-pressed",w),1&e&&A(f,"btn__primary",t[0]===yt.ACTIVE),1&e&&I!==(I=t[0]===yt.COMPLETED)&&C(L,"aria-pressed",I),1&e&&A(L,"btn__primary",t[0]===yt.COMPLETED)},i:t,o:t,d(t){t&&y(n),j=!1,s(N)}}}function _t(t,e,n){let{filter:o=yt.ALL}=e;return t.$$set=t=>{"filter"in t&&n(0,o=t.filter)},[o,()=>n(0,o=yt.ALL),()=>n(0,o=yt.ACTIVE),()=>n(0,o=yt.COMPLETED)]}!function(t){t.ALL="all",t.ACTIVE="active",t.COMPLETED="completed"}(yt||(yt={}));class wt extends mt{constructor(t){super(),pt(this,t,_t,vt,c,{filter:0})}}function kt(e){let n,o,s,l,c;return{c(){n=v("h2"),o=w(e[1]),s=w(" out of "),l=w(e[2]),c=w(" items completed"),C(n,"id","list-heading"),C(n,"tabindex","-1")},m(t,r){b(t,n,r),$(n,o),$(n,s),$(n,l),$(n,c),e[5](n)},p(t,[e]){2&e&&L(o,t[1]),4&e&&L(l,t[2])},i:t,o:t,d(t){t&&y(n),e[5](null)}}}function xt(t,e,n){let o,s,l,{todos:c}=e;return t.$$set=t=>{"todos"in t&&n(3,c=t.todos)},t.$$.update=()=>{8&t.$$.dirty&&n(2,o=c.length),8&t.$$.dirty&&n(1,s=c.filter((t=>t.completed)).length)},[l,s,o,c,function(){l.focus()},function(t){z[t?"unshift":"push"]((()=>{l=t,n(0,l)}))}]}class Et extends mt{constructor(t){super(),pt(this,t,xt,kt,c,{todos:3,focus:4})}get focus(){return this.$$.ctx[4]}}function Ct(t){let e,n,o,l,c,r,i,u,d,f,p,m,h,g,_,E,T,A,O,M,S,D=t[0].name+"",I=t[0].name+"",j=t[0].name+"";return{c(){e=v("div"),n=v("input"),c=k(),r=v("label"),i=w(D),d=k(),f=v("div"),p=v("button"),m=w("Edit "),h=v("span"),g=w(I),_=k(),E=v("button"),T=w("Delete "),A=v("span"),O=w(j),C(n,"type","checkbox"),C(n,"id",o="todo-"+t[0].id),n.checked=l=t[0].completed,C(r,"for",u="todo-"+t[0].id),C(r,"class","todo-label"),C(e,"class","c-cb"),C(h,"class","visually-hidden"),C(p,"type","button"),C(p,"class","btn"),C(A,"class","visually-hidden"),C(E,"type","button"),C(E,"class","btn btn__danger"),C(f,"class","btn-group")},m(o,s){b(o,e,s),$(e,n),$(e,c),$(e,r),$(r,i),b(o,d,s),b(o,f,s),$(f,p),$(p,m),$(p,h),$(h,g),$(f,_),$(f,E),$(E,T),$(E,A),$(A,O),M||(S=[x(n,"click",t[9]),x(p,"click",t[7]),a(t[8].call(null,p)),x(E,"click",t[6])],M=!0)},p(t,e){1&e&&o!==(o="todo-"+t[0].id)&&C(n,"id",o),1&e&&l!==(l=t[0].completed)&&(n.checked=l),1&e&&D!==(D=t[0].name+"")&&L(i,D),1&e&&u!==(u="todo-"+t[0].id)&&C(r,"for",u),1&e&&I!==(I=t[0].name+"")&&L(g,I),1&e&&j!==(j=t[0].name+"")&&L(O,j)},d(t){t&&y(e),t&&y(d),t&&y(f),M=!1,s(S)}}}function Lt(t){let e,n,o,l,c,r,i,u,d,f,p,m,h,g,_,A,O,M,S,D,I,j,N,P,V,R,z=t[0].name+"",B=t[0].name+"",U=t[0].name+"";return{c(){e=v("form"),n=v("div"),o=v("label"),l=w("New name for '"),c=w(z),r=w("'"),u=k(),d=v("input"),p=k(),m=v("div"),h=v("button"),g=w("Cancel "),_=v("span"),A=w("renaming "),O=w(B),M=k(),S=v("button"),D=w("Save "),I=v("span"),j=w("new name for "),N=w(U),C(o,"for",i="todo-"+t[0].id),C(o,"class","todo-label"),C(d,"type","text"),C(d,"id",f="todo-"+t[0].id),C(d,"autocomplete","off"),C(d,"class","todo-text"),C(n,"class","form-group"),C(_,"class","visually-hidden"),C(h,"type","button"),C(h,"class","btn todo-cancel"),C(I,"class","visually-hidden"),C(S,"type","submit"),C(S,"class","btn btn__primary todo-edit"),S.disabled=P=!t[2],C(m,"class","btn-group"),C(e,"class","stack-small")},m(s,i){b(s,e,i),$(e,n),$(n,o),$(o,l),$(o,c),$(o,r),$(n,u),$(n,d),T(d,t[2]),t[11](d),$(e,p),$(e,m),$(m,h),$(h,g),$(h,_),$(_,A),$(_,O),$(m,M),$(m,S),$(S,D),$(S,I),$(I,j),$(I,N),V||(R=[x(d,"input",t[10]),a($t.call(null,d)),x(h,"click",t[4]),x(e,"submit",E(t[5])),x(e,"keydown",t[12])],V=!0)},p(t,e){1&e&&z!==(z=t[0].name+"")&&L(c,z),1&e&&i!==(i="todo-"+t[0].id)&&C(o,"for",i),1&e&&f!==(f="todo-"+t[0].id)&&C(d,"id",f),4&e&&d.value!==t[2]&&T(d,t[2]),1&e&&B!==(B=t[0].name+"")&&L(O,B),1&e&&U!==(U=t[0].name+"")&&L(N,U),4&e&&P!==(P=!t[2])&&(S.disabled=P)},d(n){n&&y(e),t[11](null),V=!1,s(R)}}}function Tt(e){let n;function o(t,e){return t[1]?Lt:Ct}let s=o(e),l=s(e);return{c(){n=v("div"),l.c(),C(n,"class","stack-small")},m(t,e){b(t,n,e),l.m(n,null)},p(t,[e]){s===(s=o(t))&&l?l.p(t,e):(l.d(1),l=s(t),l&&(l.c(),l.m(n,null)))},i:t,o:t,d(t){t&&y(n),l.d()}}}function At(t,e,n){const o=V();let s,{todo:l}=e,c=!1,r=l.name,i=!1;function a(t){n(0,l=Object.assign(Object.assign({},l),t)),o("update",l)}function u(){n(2,r=l.name),n(1,c=!1)}return t.$$set=t=>{"todo"in t&&n(0,l=t.todo)},[l,c,r,s,u,function(){a({name:r}),n(1,c=!1)},function(){o("remove",l)},async function(){i=!0,n(1,c=!0),await(J(),q),s.focus()},t=>i&&t.focus(),function(){a({completed:!l.completed})},function(){r=this.value,n(2,r)},function(t){z[t?"unshift":"push"]((()=>{s=t,n(3,s)}))},t=>"Escape"===t.key&&u()]}class Ot extends mt{constructor(t){super(),pt(this,t,At,Tt,c,{todo:0})}}function Mt(e){let n,o,l,c,r,i,a,u,d,f,p,m=e[1]?"Check":"Uncheck";return{c(){n=v("div"),o=v("button"),l=w(m),c=w(" all"),i=k(),a=v("button"),u=w("Remove completed"),C(o,"type","button"),C(o,"class","btn btn__primary"),o.disabled=r=0===e[0].length,C(a,"type","button"),C(a,"class","btn btn__primary"),a.disabled=d=0===e[2],C(n,"class","btn-group")},m(t,s){b(t,n,s),$(n,o),$(o,l),$(o,c),$(n,i),$(n,a),$(a,u),f||(p=[x(o,"click",e[3]),x(a,"click",e[4])],f=!0)},p(t,[e]){2&e&&m!==(m=t[1]?"Check":"Uncheck")&&L(l,m),1&e&&r!==(r=0===t[0].length)&&(o.disabled=r),4&e&&d!==(d=0===t[2])&&(a.disabled=d)},i:t,o:t,d(t){t&&y(n),f=!1,s(p)}}}function St(t,e,n){let o;const s=V();let{todos:l}=e,c=!0;return t.$$set=t=>{"todos"in t&&n(0,l=t.todos)},t.$$.update=()=>{1&t.$$.dirty&&n(2,o=l.filter((t=>t.completed)).length)},[l,c,o,()=>{s("checkAll",c),n(1,c=!c)},()=>s("removeCompleted")]}class Dt extends mt{constructor(t){super(),pt(this,t,St,Mt,c,{todos:0})}}const It=[];function jt(e,n=t){let o;const s=new Set;function l(t){if(c(e,t)&&(e=t,o)){const t=!It.length;for(const t of s)t[1](),It.push(t,e);if(t){for(let t=0;t<It.length;t+=2)It[t][0](It[t+1]);It.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(c,r=t){const i=[c,r];return s.add(i),1===s.size&&(o=n(l)||t),c(e),()=>{s.delete(i),0===s.size&&(o(),o=null)}}}}const Nt=jt("Welcome to the To-Do list app!"),Pt=((t,e)=>{const n=t=>JSON.stringify(t,null,2),o=JSON.parse;null===localStorage.getItem(t)&&localStorage.setItem(t,n(e));const s=o(localStorage.getItem(t)),{subscribe:l,set:c,update:r}=jt(s);return{subscribe:l,set:e=>(localStorage.setItem(t,n(e)),c(e)),update:r}})("mdn-svelte-todo",[{id:1,name:"Visit MDN web docs",completed:!0},{id:2,name:"Complete the Svelte Tutorial",completed:!1},{id:3,name:"Celebrate with a beer",completed:!1}]);function Vt(t,e,n){const o=t.slice();return o[17]=e[n],o}function Rt(t){let e;return{c(){e=v("li"),e.textContent="Nothing to do here!"},m(t,n){b(t,e,n)},d(t){t&&y(e)}}}function zt(t,e){let n,o,s,l;return o=new Ot({props:{todo:e[17]}}),o.$on("update",e[12]),o.$on("remove",e[13]),{key:t,first:null,c(){n=v("li"),ut(o.$$.fragment),s=k(),C(n,"class","todo"),this.first=n},m(t,e){b(t,n,e),dt(o,n,null),$(n,s),l=!0},p(t,n){e=t;const s={};3&n&&(s.todo=e[17]),o.$set(s)},i(t){l||(st(o.$$.fragment,t),l=!0)},o(t){lt(o.$$.fragment,t),l=!1},d(t){t&&y(n),ft(o)}}}function Bt(t){let e,n,o,s,l,c,r,i,a,u,d,f,p,m,h=[],g=new Map;function _(e){t[10](e)}n=new bt({props:{autofocus:!0}}),n.$on("addTodo",t[9]);let w={};void 0!==t[1]&&(w.filter=t[1]),s=new wt({props:w}),z.push((()=>at(s,"filter",_)));let x={todos:t[0]};r=new Et({props:x}),t[11](r);let E=t[6](t[1],t[0]);const L=t=>t[17].id;for(let e=0;e<E.length;e+=1){let n=Vt(t,E,e),o=L(n);g.set(o,h[e]=zt(o,n))}let T=null;return E.length||(T=Rt()),p=new Dt({props:{todos:t[0]}}),p.$on("checkAll",t[14]),p.$on("removeCompleted",t[8]),{c(){e=v("div"),ut(n.$$.fragment),o=k(),ut(s.$$.fragment),c=k(),ut(r.$$.fragment),i=k(),a=v("ul");for(let t=0;t<h.length;t+=1)h[t].c();T&&T.c(),u=k(),d=v("hr"),f=k(),ut(p.$$.fragment),C(a,"role","list"),C(a,"class","todo-list stack-large"),C(a,"aria-labelledby","list-heading"),C(e,"class","todoapp stack-large")},m(t,l){b(t,e,l),dt(n,e,null),$(e,o),dt(s,e,null),$(e,c),dt(r,e,null),$(e,i),$(e,a);for(let t=0;t<h.length;t+=1)h[t].m(a,null);T&&T.m(a,null),$(e,u),$(e,d),$(e,f),dt(p,e,null),m=!0},p(t,[e]){const n={};!l&&2&e&&(l=!0,n.filter=t[1],H((()=>l=!1))),s.$set(n);const o={};1&e&&(o.todos=t[0]),r.$set(o),115&e&&(E=t[6](t[1],t[0]),nt(),h=function(t,e,n,o,s,l,c,r,i,a,u,d){let f=t.length,p=l.length,m=f;const $={};for(;m--;)$[t[m].key]=m;const h=[],g=new Map,b=new Map;for(m=p;m--;){const t=d(s,l,m),r=n(t);let i=c.get(r);i?o&&i.p(t,e):(i=a(r,t),i.c()),g.set(r,h[m]=i),r in $&&b.set(r,Math.abs(m-$[r]))}const y=new Set,v=new Set;function _(t){st(t,1),t.m(r,u),c.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,p--):g.has(s)?!c.has(o)||y.has(o)?_(e):v.has(s)?f--:b.get(o)>b.get(s)?(v.add(o),_(e)):(y.add(s),f--):(i(n,c),f--)}for(;f--;){const e=t[f];g.has(e.key)||i(e,c)}for(;p;)_(h[p-1]);return h}(h,e,L,1,t,E,g,a,it,zt,null,Vt),ot(),E.length?T&&(T.d(1),T=null):T||(T=Rt(),T.c(),T.m(a,null)));const c={};1&e&&(c.todos=t[0]),p.$set(c)},i(t){if(!m){st(n.$$.fragment,t),st(s.$$.fragment,t),st(r.$$.fragment,t);for(let t=0;t<E.length;t+=1)st(h[t]);st(p.$$.fragment,t),m=!0}},o(t){lt(n.$$.fragment,t),lt(s.$$.fragment,t),lt(r.$$.fragment,t);for(let t=0;t<h.length;t+=1)lt(h[t]);lt(p.$$.fragment,t),m=!1},d(o){o&&y(e),ft(n),ft(s),t[11](null),ft(r);for(let t=0;t<h.length;t+=1)h[t].d();T&&T.d(),ft(p)}}}function Ut(t,e,n){let o,s;r(t,Nt,(t=>n(16,s=t)));let l,{todos:c=[]}=e;function a(t){n(0,c=[...c,{id:o,name:t,completed:!1}]),i(Nt,s=`Todo '${t}' has been added`,s)}function u(t){n(0,c=c.filter((e=>e.id!==t.id))),l.focus(),i(Nt,s=`Todo '${t.name}' has been deleted`,s)}function d(t){const e=c.findIndex((e=>e.id===t.id));c[e].name!==t.name&&i(Nt,s=`Todo '${c[e].name}' has been renamed to '${t.name}'`,s),c[e].completed!==t.completed&&i(Nt,s=`Todo '${c[e].name}' has been marked as '${t.completed?yt.COMPLETED:yt.ACTIVE}'`,s),n(0,c[e]=Object.assign(Object.assign({},c[e]),t),c)}let f=yt.ALL;const p=t=>{n(0,c=c.map((e=>Object.assign(Object.assign({},e),{completed:t})))),i(Nt,s=`${t?"Checked":"Unchecked"} ${c.length} todos`,s)};return t.$$set=t=>{"todos"in t&&n(0,c=t.todos)},t.$$.update=()=>{1&t.$$.dirty&&(o=c.length?Math.max(...c.map((t=>t.id)))+1:1),2&t.$$.dirty&&(f===yt.ALL&&i(Nt,s="Browsing all todos",s),f===yt.ACTIVE&&i(Nt,s="Browsing active todos",s),f===yt.COMPLETED&&i(Nt,s="Browsing completed todos",s))},[c,f,l,a,u,d,(t,e)=>t===yt.ACTIVE?e.filter((t=>!t.completed)):t===yt.COMPLETED?e.filter((t=>t.completed)):e,p,()=>{i(Nt,s=`Removed ${c.filter((t=>t.completed)).length} todos`,s),n(0,c=c.filter((t=>!t.completed)))},t=>a(t.detail),function(t){f=t,n(1,f)},function(t){z[t?"unshift":"push"]((()=>{l=t,n(2,l)}))},t=>d(t.detail),t=>u(t.detail),t=>p(t.detail)]}class qt extends mt{constructor(t){super(),pt(this,t,Ut,Bt,c,{todos:0})}}function Ft(t){const e=t-1;return e*e*e+1}function Jt(t,{delay:e=0,duration:n=400,easing:o=Ft,x:s=0,y:l=0,opacity:c=0}={}){const r=getComputedStyle(t),i=+r.opacity,a="none"===r.transform?"":r.transform,u=i*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*l}px);\n\t\t\topacity: ${i-u*e}`}}function Wt(t){let e,n,o,s,l,c,r,i,a,u;return{c(){e=v("div"),n=_("svg"),o=_("path"),s=k(),l=v("p"),c=w(t[0]),C(o,"d","M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"),C(n,"xmlns","http://www.w3.org/2000/svg"),C(n,"viewBox","0 0 20 20"),C(n,"class","svelte-10fwmbj"),C(l,"class","svelte-10fwmbj"),C(e,"role","alert"),C(e,"class","svelte-10fwmbj")},m(r,d){b(r,e,d),$(e,n),$(n,o),$(e,s),$(e,l),$(l,c),i=!0,a||(u=x(e,"click",t[3]),a=!0)},p(t,e){(!i||1&e)&&L(c,t[0])},i(t){i||(W((()=>{r||(r=rt(e,Jt,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1)})),i=!0)},o(t){r||(r=rt(e,Jt,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0),i=!1},d(t){t&&y(e),t&&r&&r.end(),a=!1,u()}}}function Ht(t){let e,n,o=t[1]&&Wt(t);return{c(){o&&o.c(),e=w("")},m(t,s){o&&o.m(t,s),b(t,e,s),n=!0},p(t,[n]){t[1]?o?(o.p(t,n),2&n&&st(o,1)):(o=Wt(t),o.c(),st(o,1),o.m(e.parentNode,e)):o&&(nt(),lt(o,1,1,(()=>{o=null})),ot())},i(t){n||(st(o),n=!0)},o(t){lt(o),n=!1},d(t){o&&o.d(t),t&&y(e)}}}function Gt(t,e,n){let o;r(t,Nt,(t=>n(0,o=t)));let s,l,{ms:c=3e3}=e;var i;i=()=>clearTimeout(l),P().$$.on_destroy.push(i);return t.$$set=t=>{"ms"in t&&n(2,c=t.ms)},t.$$.update=()=>{5&t.$$.dirty&&((t,e)=>{clearTimeout(l),t?(n(1,s=!0),e>0&&(l=setTimeout((()=>n(1,s=!1)),e))):n(1,s=!1)})(o,c)},[o,s,c,()=>n(1,s=!1)]}class Kt extends mt{constructor(t){super(),pt(this,t,Gt,Ht,c,{ms:2})}}function Qt(t){let e,n,o,s,l;function c(e){t[1](e)}e=new Kt({});let r={};return void 0!==t[0]&&(r.todos=t[0]),o=new qt({props:r}),z.push((()=>at(o,"todos",c))),{c(){ut(e.$$.fragment),n=k(),ut(o.$$.fragment)},m(t,s){dt(e,t,s),b(t,n,s),dt(o,t,s),l=!0},p(t,[e]){const n={};!s&&1&e&&(s=!0,n.todos=t[0],H((()=>s=!1))),o.$set(n)},i(t){l||(st(e.$$.fragment,t),st(o.$$.fragment,t),l=!0)},o(t){lt(e.$$.fragment,t),lt(o.$$.fragment,t),l=!1},d(t){ft(e,t),t&&y(n),ft(o,t)}}}function Xt(t,e,n){let o;return r(t,Pt,(t=>n(0,o=t))),[o,function(t){o=t,Pt.set(o)}]}return new class extends mt{constructor(t){super(),pt(this,t,Xt,Qt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
