"use strict";(self.webpackChunkteam_challenge_frontend=self.webpackChunkteam_challenge_frontend||[]).push([[795],{5184:function(n,t,e){e.d(t,{tv:function(){return _e},jw:function(){return Se}});var i=e(3433),r=e(9439),o=e(5671),u=e(3144),s=e(136),a=e(3668),c=e(1413);function l(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var f=e(2791),d=["children","className"],p=["className","tag","hasTrack","children"],v=["children","className"];function h(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var g="(prefers-reduced-motion: reduce)",m={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function y(n){n.length=0}function b(n,t,e){return Array.prototype.slice.call(n,t,e)}function w(n){return n.bind.apply(n,[null].concat(b(arguments,1)))}var E=setTimeout,_=function(){};function S(n){return requestAnimationFrame(n)}function x(n,t){return typeof t===n}function k(n){return!O(n)&&x("object",n)}var P=Array.isArray,C=w(x,"function"),A=w(x,"string"),L=w(x,"undefined");function O(n){return null===n}function M(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function D(n){return P(n)?n:[n]}function N(n,t){D(n).forEach(t)}function z(n,t){return n.indexOf(t)>-1}function j(n,t){return n.push.apply(n,D(t)),n}function I(n,t,e){n&&N(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function R(n,t){I(n,A(t)?t.split(" "):t,!0)}function T(n,t){N(t,n.appendChild.bind(n))}function F(n,t){N(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function W(n,t){return M(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function X(n,t){var e=n?b(n.children):[];return t?e.filter((function(n){return W(n,t)})):e}function G(n,t){return t?X(n,t)[0]:n.firstElementChild}var U=Object.keys;function Z(n,t,e){return n&&(e?U(n).reverse():U(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function B(n){return b(arguments,1).forEach((function(t){Z(t,(function(e,i){n[i]=t[i]}))})),n}function H(n){return b(arguments,1).forEach((function(t){Z(t,(function(t,e){P(t)?n[e]=t.slice():k(t)?n[e]=H({},k(n[e])?n[e]:{},t):n[e]=t}))})),n}function Y(n,t){N(t||U(n),(function(t){delete n[t]}))}function q(n,t){N(n,(function(n){N(t,(function(t){n&&n.removeAttribute(t)}))}))}function K(n,t,e){k(t)?Z(t,(function(t,e){K(n,e,t)})):N(n,(function(n){O(e)||""===e?q(n,t):n.setAttribute(t,String(e))}))}function V(n,t,e){var i=document.createElement(n);return t&&(A(t)?R(i,t):K(i,t)),e&&T(e,i),i}function J(n,t,e){if(L(e))return getComputedStyle(n)[t];O(e)||(n.style[t]=""+e)}function Q(n,t){J(n,"display",t)}function $(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function nn(n,t){return n.getAttribute(t)}function tn(n,t){return n&&n.classList.contains(t)}function en(n){return n.getBoundingClientRect()}function rn(n){N(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function on(n){return G((new DOMParser).parseFromString(n,"text/html").body)}function un(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function sn(n,t){return n&&n.querySelector(t)}function an(n,t){return t?b(n.querySelectorAll(t)):[]}function cn(n,t){I(n,t,!1)}function ln(n){return n.timeStamp}function fn(n){return A(n)?n:n?n+"px":""}var dn="splide",pn="data-splide";function vn(n,t){if(!n)throw new Error("[splide] "+(t||""))}var hn=Math.min,gn=Math.max,mn=Math.floor,yn=Math.ceil,bn=Math.abs;function wn(n,t,e){return bn(n-t)<e}function En(n,t,e,i){var r=hn(t,e),o=gn(t,e);return i?r<n&&n<o:r<=n&&n<=o}function _n(n,t,e){var i=hn(t,e),r=gn(t,e);return hn(gn(i,n),r)}function Sn(n){return+(n>0)-+(n<0)}function xn(n,t){return N(t,(function(t){n=n.replace("%s",""+t)})),n}function kn(n){return n<10?"0"+n:""+n}var Pn={};function Cn(){var n=[];function t(n,t,e){N(n,(function(n){n&&N(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,s=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,s])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),y(n)}}}var An="mounted",Ln="ready",On="move",Mn="moved",Dn="click",Nn="active",zn="inactive",jn="visible",In="hidden",Rn="refresh",Tn="updated",Fn="resize",Wn="resized",Xn="drag",Gn="dragging",Un="dragged",Zn="scroll",Bn="scrolled",Hn="destroy",Yn="arrows:mounted",qn="arrows:updated",Kn="pagination:mounted",Vn="pagination:updated",Jn="navigation:mounted",Qn="autoplay:play",$n="autoplay:playing",nt="autoplay:pause",tt="lazyload:loaded",et="sk",it="sh",rt="ei";function ot(n){var t=n?n.event.bus:document.createDocumentFragment(),e=Cn();return n&&n.event.on(Hn,e.destroy),B(e,{bus:t,on:function(n,i){e.bind(t,D(n).join(" "),(function(n){i.apply(i,P(n.detail)?n.detail:[])}))},off:w(e.unbind,t),emit:function(n){e.dispatch(t,n,b(arguments,1))}})}function ut(n,t,e,i){var r,o,u=Date.now,s=0,a=!0,c=0;function l(){if(!a){if(s=n?hn((u()-r)/n,1):1,e&&e(s),s>=1&&(t(),r=u(),i&&++c>=i))return f();o=S(l)}}function f(){a=!0}function d(){o&&cancelAnimationFrame(o),s=0,o=0,a=!0}return{start:function(t){t||d(),r=u()-(t?s*n:0),a=!1,o=S(l)},rewind:function(){r=u(),s=0,e&&e(s)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return a}}}var st="ArrowLeft",at="ArrowRight",ct="ArrowUp",lt="ArrowDown",ft="ttb",dt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[ct,at],ArrowRight:[lt,st]};var pt="role",vt="tabindex",ht="aria-controls",gt="aria-current",mt="aria-selected",yt="aria-label",bt="aria-labelledby",wt="aria-hidden",Et="aria-orientation",_t="aria-roledescription",St="aria-live",xt="aria-busy",kt="aria-atomic",Pt=[pt,vt,"disabled",ht,gt,yt,bt,wt,Et,_t],Ct=dn,At="splide__track",Lt="splide__list",Ot="splide__slide",Mt=Ot+"--clone",Dt="splide__arrows",Nt="splide__arrow",zt=Nt+"--prev",jt=Nt+"--next",It="splide__pagination",Rt=It+"__page",Tt="splide__progress__bar",Ft="splide__toggle",Wt="is-active",Xt="is-prev",Gt="is-next",Ut="is-visible",Zt="is-loading",Bt="is-focus-in",Ht="is-overflow",Yt=[Wt,Ut,Xt,Gt,Zt,Bt,Ht],qt={slide:Ot,clone:Mt,arrows:Dt,arrow:Nt,prev:zt,next:jt,pagination:It,page:Rt,spinner:"splide__spinner"};var Kt="touchstart mousedown",Vt="touchmove mousemove",Jt="touchend touchcancel mouseup click";var Qt="slide",$t="loop",ne="fade";function te(n,t,e,i){var r,o=ot(n),u=o.on,s=o.emit,a=o.bind,c=n.Components,l=n.root,f=n.options,d=f.isNavigation,p=f.updateOnMove,v=f.i18n,h=f.pagination,g=f.slideFocus,m=c.Direction.resolve,y=nn(i,"style"),b=nn(i,yt),E=e>-1,_=G(i,".splide__slide__container");function S(){var r=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");K(i,yt,xn(v.slideX,(E?e:t)+1)),K(i,ht,r),K(i,pt,g?"button":""),g&&q(i,_t)}function x(){r||k()}function k(){if(!r){var e=n.index;!function(){var n=P();n!==tn(i,Wt)&&(I(i,Wt,n),K(i,gt,d&&n||""),s(n?Nn:zn,C))}(),function(){var t=function(){if(n.is(ne))return P();var t=en(c.Elements.track),e=en(i),r=m("left",!0),o=m("right",!0);return mn(t[r])<=yn(e[r])&&mn(e[o])<=yn(t[o])}(),e=!t&&(!P()||E);n.state.is([4,5])||K(i,wt,e||"");K(an(i,f.focusableNodes||""),vt,e?-1:""),g&&K(i,vt,e?-1:0);t!==tn(i,Ut)&&(I(i,Ut,t),s(t?jn:In,C));if(!t&&document.activeElement===i){var r=c.Slides.getAt(n.index);r&&$(r.slide)}}(),I(i,Xt,t===e-1),I(i,Gt,t===e+1)}}function P(){var i=n.index;return i===t||f.cloneStatus&&i===e}var C={index:t,slideIndex:e,slide:i,container:_,isClone:E,mount:function(){E||(i.id=l.id+"-slide"+kn(t+1),K(i,pt,h?"tabpanel":"group"),K(i,_t,v.slide),K(i,yt,b||xn(v.slideLabel,[t+1,n.length]))),a(i,"click",w(s,Dn,C)),a(i,"keydown",w(s,et,C)),u([Mn,it,Bn],k),u(Jn,S),p&&u(On,x)},destroy:function(){r=!0,o.destroy(),cn(i,Yt),q(i,Pt),K(i,"style",y),K(i,yt,b||"")},update:k,style:function(n,t,e){J(e&&_||i,n,t)},isWithin:function(e,i){var r=bn(e-t);return E||!f.rewind&&!n.is($t)||(r=hn(r,n.length-r)),r<=i}};return C}var ee={passive:!1,capture:!0};var ie={Spacebar:" ",Right:at,Left:st,Up:ct,Down:lt};function re(n){return n=A(n)?n:n.key,ie[n]||n}var oe="keydown";var ue="data-splide-lazy",se="data-splide-lazy-srcset",ae="[data-splide-lazy], [data-splide-lazy-srcset]";var ce=[" ","Enter"];var le=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,r=e.breakpoints||{},o=e.reducedMotion||{},u=Cn(),s=[];function a(n){n&&u.destroy()}function c(n,t){var e=matchMedia(t);u.bind(e,"change",l),s.push([n,e])}function l(){var t=i.is(7),r=e.direction,o=s.reduce((function(n,t){return H(n,t[1].matches?t[0]:{})}),{});Y(e),f(o),e.destroy?n.destroy("completely"===e.destroy):t?(a(!0),n.mount()):r!==e.direction&&n.refresh()}function f(t,r,o){H(e,t),r&&H(Object.getPrototypeOf(e),t),!o&&i.is(1)||n.emit(Tn,e)}return{setup:function(){var n="min"===e.mediaQuery;U(r).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){c(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),c(o,g),l()},destroy:a,reduce:function(n){matchMedia(g).matches&&(n?H(e,o):Y(e,U(o)))},set:f}},Direction:function(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===ft?0:-1:1;return dt[n]&&dt[n][r]||n.replace(/width|left|right/i,(function(n,t){var e=dt[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,r,o,u=ot(n),s=u.on,a=u.bind,c=n.root,l=e.i18n,f={},d=[],p=[],v=[];function h(){i=b("."+At),r=G(i,"."+Lt),vn(i&&r,"A track/list element is missing."),j(d,X(r,".splide__slide:not(."+Mt+")")),Z({arrows:Dt,pagination:It,prev:zt,next:jt,bar:Tt,toggle:Ft},(function(n,t){f[t]=b("."+n)})),B(f,{root:c,track:i,list:r,slides:d}),function(){var n=c.id||(o=dn,""+o+kn(Pn[o]=(Pn[o]||0)+1)),t=e.role;var o;c.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!nn(c,pt)&&"SECTION"!==c.tagName&&t&&K(c,pt,t);K(c,_t,l.carousel),K(r,pt,"presentation")}(),m()}function g(n){var t=Pt.concat("style");y(d),cn(c,p),cn(i,v),q([i,r],t),q(c,n?t:["style",_t])}function m(){cn(c,p),cn(i,v),p=w(Ct),v=w(At),R(c,p),R(i,v),K(c,yt,e.label),K(c,bt,e.labelledby)}function b(n){var t=sn(c,n);return t&&function(n,t){if(C(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!W(e,t);)e=e.parentElement;return e}(t,".splide")===c?t:void 0}function w(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===Ct&&Wt]}return B(f,{setup:h,mount:function(){s(Rn,g),s(Rn,h),s(Tn,m),a(document,"touchstart mousedown keydown",(function(n){o="keydown"===n.type}),{capture:!0}),a(c,"focusin",(function(){I(c,Bt,!!o)}))},destroy:g})},Slides:function(n,t,e){var i=ot(n),r=i.on,o=i.emit,u=i.bind,s=t.Elements,a=s.slides,c=s.list,l=[];function f(){a.forEach((function(n,t){p(n,t,-1)}))}function d(){h((function(n){n.destroy()})),y(l)}function p(t,e,i){var r=te(n,e,i,t);r.mount(),l.push(r),l.sort((function(n,t){return n.index-t.index}))}function v(n){return n?g((function(n){return!n.isClone})):l}function h(n,t){v(t).forEach(n)}function g(n){return l.filter(C(n)?n:function(t){return A(n)?W(t.slide,n):z(D(n),t.index)})}return{mount:function(){f(),r(Rn,d),r(Rn,f)},destroy:d,update:function(){h((function(n){n.update()}))},register:p,get:v,getIn:function(n){var i=t.Controller,r=i.toIndex(n),o=i.hasFocus()?1:e.perPage;return g((function(n){return En(n.index,r,r+o-1)}))},getAt:function(n){return g(n)[0]},add:function(n,t){N(n,(function(n){if(A(n)&&(n=on(n)),M(n)){var i=a[t];i?F(n,i):T(c,n),R(n,e.classes.slide),function(n,t){var e=an(n,"img"),i=e.length;i?e.forEach((function(n){u(n,"load error",(function(){--i||t()}))})):t()}(n,w(o,Fn))}})),o(Rn)},remove:function(n){rn(g(n).map((function(n){return n.slide}))),o(Rn)},forEach:h,filter:g,style:function(n,t,e){h((function(i){i.style(n,t,e)}))},getLength:function(n){return n?a.length:l.length},isEnough:function(){return l.length>e.perPage}}},Layout:function(n,t,e){var i,r,o,u=ot(n),s=u.on,a=u.bind,c=u.emit,l=t.Slides,f=t.Direction.resolve,d=t.Elements,p=d.root,v=d.track,h=d.list,g=l.getAt,m=l.style;function y(){i=e.direction===ft,J(p,"maxWidth",fn(e.width)),J(v,f("paddingLeft"),E(!1)),J(v,f("paddingRight"),E(!0)),b(!0)}function b(n){var t=en(p);(n||r.width!==t.width||r.height!==t.height)&&(J(v,"height",function(){var n="";i&&(vn(n=_(),"height or heightRatio is missing."),n="calc("+n+" - "+E(!1)+" - "+E(!0)+")");return n}()),m(f("marginRight"),fn(e.gap)),m("width",e.autoWidth?null:fn(e.fixedWidth)||(i?"":S())),m("height",fn(e.fixedHeight)||(i?e.autoHeight?null:S():_()),!0),r=t,c(Wn),o!==(o=O())&&(I(p,Ht,o),c("overflow",o)))}function E(n){var t=e.padding,i=f(n?"right":"left");return t&&fn(t[i]||(k(t)?0:t))||"0px"}function _(){return fn(e.height||en(h).width*e.heightRatio)}function S(){var n=fn(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function x(){return en(h)[f("width")]}function P(n,t){var e=g(n||0);return e?en(e.slide)[f("width")]+(t?0:L()):0}function C(n,t){var e=g(n);if(e){var i=en(e.slide)[f("right")],r=en(h)[f("left")];return bn(i-r)+(t?0:L())}return 0}function A(t){return C(n.length-1)-C(0)+P(0,t)}function L(){var n=g(0);return n&&parseFloat(J(n.slide,f("marginRight")))||0}function O(){return n.is(ne)||A(!0)>x()}return{mount:function(){y(),a(window,"resize load",function(n,t){var e=ut(t||0,n,null,1);return function(){e.isPaused()&&e.start()}}(w(c,Fn))),s([Tn,Rn],y),s(Fn,b)},resize:b,listSize:x,slideSize:P,sliderSize:A,totalSize:C,getPadding:function(n){return parseFloat(J(v,f("padding"+(n?"Right":"Left"))))||0},isOverflow:O}},Clones:function(n,t,e){var i,r=ot(n),o=r.on,u=t.Elements,s=t.Slides,a=t.Direction.resolve,c=[];function l(){o(Rn,f),o([Tn,Fn],p),(i=v())&&(!function(t){var i=s.get().slice(),r=i.length;if(r){for(;i.length<t;)j(i,i);j(i.slice(-t),i.slice(0,t)).forEach((function(o,a){var l=a<t,f=function(t,i){var r=t.cloneNode(!0);return R(r,e.classes.clone),r.id=n.root.id+"-clone"+kn(i+1),r}(o.slide,a);l?F(f,i[0].slide):T(u.list,f),j(c,f),s.register(f,a-t+(l?0:r),o.index)}))}}(i),t.Layout.resize(!0))}function f(){d(),l()}function d(){rn(c),y(c),r.destroy()}function p(){var n=v();i!==n&&(i<n||!n)&&r.emit(Rn)}function v(){var i=e.clones;if(n.is($t)){if(L(i)){var r=e[a("fixedWidth")]&&t.Layout.slideSize(0);i=r&&yn(en(u.track)[a("width")]/r)||e[a("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:l,destroy:d}},Move:function(n,t,e){var i,r=ot(n),o=r.on,u=r.emit,s=n.state.set,a=t.Layout,c=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,p=a.sliderSize,v=t.Direction,h=v.resolve,g=v.orient,m=t.Elements,y=m.list,b=m.track;function w(){t.Controller.isBusy()||(t.Scroll.cancel(),E(n.index),t.Slides.update())}function E(n){_(P(n,!0))}function _(e,i){if(!n.is(ne)){var r=i?e:function(e){if(n.is($t)){var i=k(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=S(e,r))}return e}(e);J(y,"transform","translate"+h("X")+"("+r+"px)"),e!==r&&u(it)}}function S(n,t){var e=n-A(t),i=p();return n-=g(i*(yn(bn(e)/i)||1))*(t?1:-1)}function x(){_(C(),!0),i.cancel()}function k(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,s=bn(P(u,!0)-n);if(!(s<=r))break;r=s,i=u}return i}function P(t,i){var r=g(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Qt)&&(t=_n(t,0,g(p(!0)-d())));return t}(r):r}function C(){var n=h("left");return en(y)[n]-en(b)[n]+g(l(!1))}function A(n){return P(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,o([An,Wn,Tn,Rn],w)},move:function(n,t,e,r){n!==t&&function(n){var t=g(S(C(),n));return n?t>=0:t<=y[h("scrollWidth")]-en(b)[h("width")]}(n>e)&&(x(),_(S(C(),n>e),!0)),s(4),u(On,t,e,n),i.start(t,(function(){s(3),u(Mn,t,e,n),r&&r()}))},jump:E,translate:_,shift:S,cancel:x,toIndex:k,toPosition:P,getPosition:C,getLimit:A,exceededLimit:function(n,t){t=L(t)?C():t;var e=!0!==n&&g(t)<g(A(!1)),i=!1!==n&&g(t)>g(A(!0));return e||i},reposition:w}},Controller:function(n,t,e){var i,r,o,u,s=ot(n),a=s.on,c=s.emit,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.toPosition,v=t.Slides,h=v.isEnough,g=v.getLength,m=e.omitEnd,y=n.is($t),b=n.is(Qt),E=w(C,!1),_=w(C,!0),S=e.start||0,x=S;function k(){r=g(!0),o=e.perMove,u=e.perPage,i=D();var n=_n(S,0,m?i:r-1);n!==S&&(S=n,l.reposition())}function P(){i!==D()&&c(rt)}function C(n,t){var e=o||(I()?1:u),r=O(S+e*(n?-1:1),S,!(o||I()));return-1===r&&b&&!wn(f(),d(!n),1)?n?0:i:t?r:M(r)}function O(t,s,a){if(h()||I()){var c=function(t){if(b&&"move"===e.trimSpace&&t!==S)for(var i=f();i===p(t,!0)&&En(t,0,n.length-1,!e.rewind);)t<S?--t:++t;return t}(t);c!==t&&(s=t,t=c,a=!1),t<0||t>i?t=o||!En(0,t,s,!0)&&!En(i,s,t,!0)?y?a?t<0?-(r%u||u):r:t:e.rewind?t<0?i:0:-1:N(z(t)):a&&t!==s&&(t=N(z(s)+(t<s?-1:1)))}else t=-1;return t}function M(n){return y?(n+r)%r||0:n}function D(){for(var n=r-(I()||y&&o?1:u);m&&n-- >0;)if(p(r-1,!0)!==p(n,!0)){n++;break}return _n(n,0,r-1)}function N(n){return _n(I()?n:u*n,0,i)}function z(n){return I()?hn(n,i):mn((n>=i?r-1:n)/u)}function j(n){n!==S&&(x=S,S=n)}function I(){return!L(e.focus)||e.isNavigation}function R(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){k(),a([Tn,Rn,rt],k),a(Wn,P)},go:function(n,t,e){if(!R()){var r=function(n){var t=S;if(A(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?t=O(S+ +(""+r+(+o||1)),S):">"===r?t=o?N(+o):E(!0):"<"===r&&(t=_(!0))}else t=y?n:_n(n,0,i);return t}(n),o=M(r);o>-1&&(t||o!==S)&&(j(o),l.move(r,o,x,e))}},scroll:function(n,e,r,o){t.Scroll.scroll(n,e,r,(function(){var n=M(l.toIndex(f()));j(m?hn(n,i):n),o&&o()}))},getNext:E,getPrev:_,getAdjacent:C,getEnd:D,setIndex:j,getIndex:function(n){return n?x:S},toIndex:N,toPage:z,toDest:function(n){var t=l.toIndex(n);return b?_n(t,0,i):t},hasFocus:I,isBusy:R}},Arrows:function(n,t,e){var i,r,o=ot(n),u=o.on,s=o.bind,a=o.emit,c=e.classes,l=e.i18n,f=t.Elements,d=t.Controller,p=f.arrows,v=f.track,h=p,g=f.prev,m=f.next,y={};function b(){!function(){var n=e.arrows;!n||g&&m||(h=p||V("div",c.arrows),g=x(!0),m=x(!1),i=!0,T(h,[g,m]),!p&&F(h,v));g&&m&&(B(y,{prev:g,next:m}),Q(h,n?"":"none"),R(h,r=Dt+"--"+e.direction),n&&(u([An,Mn,Rn,Bn,rt],k),s(m,"click",w(S,">")),s(g,"click",w(S,"<")),k(),K([g,m],ht,v.id),a(Yn,g,m)))}(),u(Tn,E)}function E(){_(),b()}function _(){o.destroy(),cn(h,r),i?(rn(p?[g,m]:h),g=m=null):q([g,m],Pt)}function S(n){d.go(n,!0)}function x(n){return on('<button class="'+c.arrow+" "+(n?c.prev:c.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function k(){if(g&&m){var t=n.index,e=d.getPrev(),i=d.getNext(),r=e>-1&&t<e?l.last:l.prev,o=i>-1&&t>i?l.first:l.next;g.disabled=e<0,m.disabled=i<0,K(g,yt,r),K(m,yt,o),a(qn,g,m,e,i)}}return{arrows:y,mount:b,destroy:_,update:k}},Autoplay:function(n,t,e){var i,r,o=ot(n),u=o.on,s=o.bind,a=o.emit,c=ut(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&J(t,"width",100*n+"%"),a($n,n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,h=e.autoplay,g="pause"===h;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,w(),a(Qn))}function y(n){void 0===n&&(n=!0),g=!!n,w(),l()||(c.pause(),a(nt))}function b(){g||(i||r?y(!1):m())}function w(){v&&(I(v,Wt,!g),K(v,yt,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+nn(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){h&&(!function(){e.pauseOnHover&&s(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&s(p,"focusin focusout",(function(n){r="focusin"===n.type,b()}));v&&s(v,"click",(function(){g?m():y(!0)}));u([On,Zn,Rn],c.rewind),u(On,E)}(),v&&K(v,ht,f.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=ot(n).on;function r(n){t.Slides.forEach((function(t){var e=G(t.container||t.slide,"img");e&&e.src&&o(n,e,t)}))}function o(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),Q(t,n?"none":"")}return{mount:function(){e.cover&&(i(tt,w(o,!0)),i([An,Tn,Rn],w(r,!0)))},destroy:w(r,!1)}},Scroll:function(n,t,e){var i,r,o=ot(n),u=o.on,s=o.emit,a=n.state.set,c=t.Move,l=c.getPosition,f=c.getLimit,d=c.exceededLimit,p=c.translate,v=n.is(Qt),h=1;function g(n,e,o,u,f){var p=l();if(b(),o&&(!v||!d())){var g=t.Layout.sliderSize(),E=Sn(n)*g*mn(bn(n)/g)||0;n=c.toPosition(t.Controller.toDest(n%g))+E}var _=wn(p,n,1);h=1,e=_?0:e||gn(bn(n-p)/1.5,800),r=u,i=ut(e,m,w(y,p,n,f),1),a(5),s(Zn),i.start()}function m(){a(3),r&&r(),s(Bn)}function y(n,t,i,o){var u=l(),s=(n+(t-n)*function(n){var t=e.easingFunc;return t?t(n):1-Math.pow(1-n,4)}(o)-u)*h;p(u+s),v&&!i&&d()&&(h*=.6,bn(s)<10&&g(f(d(!0)),600,!1,r,!0))}function b(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(b(),m())}return{mount:function(){u(On,b),u([Tn,Rn],E)},destroy:b,scroll:g,cancel:E}},Drag:function(n,t,e){var i,r,o,u,s,a,c,l,f=ot(n),d=f.on,p=f.emit,v=f.bind,h=f.unbind,g=n.state,m=t.Move,y=t.Scroll,b=t.Controller,w=t.Elements.track,E=t.Media.reduce,S=t.Direction,x=S.resolve,P=S.orient,C=m.getPosition,A=m.exceededLimit,L=!1;function O(){var n=e.drag;G(!n),u="free"===n}function M(n){if(a=!1,!c){var t=X(n);!function(n){var t=e.noDrag;return!W(n,".splide__pagination__page, ."+Nt)&&(!t||!W(n,t))}(n.target)||!t&&n.button||(b.isBusy()?un(n,!0):(l=t?w:window,s=g.is([4,5]),o=null,v(l,Vt,D,ee),v(l,Jt,N,ee),m.cancel(),y.cancel(),j(n)))}}function D(t){if(g.is(6)||(g.set(6),p(Xn)),t.cancelable)if(s){m.translate(i+I(t)/(L&&n.is(Qt)?5:1));var r=R(t)>200,o=L!==(L=A());(r||o)&&j(t),a=!0,p(Gn),un(t)}else(function(n){return bn(I(n))>bn(I(n,!0))})(t)&&(s=function(n){var t=e.dragMinThreshold,i=k(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return bn(I(n))>(X(n)?o:r)}(t),un(t))}function N(i){g.is(6)&&(g.set(3),p(Un)),s&&(!function(i){var r=function(t){if(n.is($t)||!L){var e=R(t);if(e&&e<200)return I(t)/e}return 0}(i),o=function(n){return C()+Sn(n)*hn(bn(n)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(r),s=e.rewind&&e.rewindByDrag;E(!1),u?b.scroll(o,0,e.snap):n.is(ne)?b.go(P(Sn(r))<0?s?"<":"-":s?">":"+"):n.is(Qt)&&L&&s?b.go(A(!0)?">":"<"):b.go(b.toDest(o),!0);E(!0)}(i),un(i)),h(l,Vt,D),h(l,Jt,N),s=!1}function z(n){!c&&a&&un(n,!0)}function j(n){o=r,r=n,i=C()}function I(n,t){return F(n,t)-F(T(n),t)}function R(n){return ln(n)-ln(T(n))}function T(n){return r===n&&o||r}function F(n,t){return(X(n)?n.changedTouches[0]:n)["page"+x(t?"Y":"X")]}function X(n){return"undefined"!==typeof TouchEvent&&n instanceof TouchEvent}function G(n){c=n}return{mount:function(){v(w,Vt,_,ee),v(w,Jt,_,ee),v(w,Kt,M,ee),v(w,"click",z,{capture:!0}),v(w,"dragstart",un),d([An,Tn],O)},disable:G,isDragging:function(){return s}}},Keyboard:function(n,t,e){var i,r,o=ot(n),u=o.on,s=o.bind,a=o.unbind,c=n.root,l=t.Direction.resolve;function f(){var n=e.keyboard;n&&(i="global"===n?window:c,s(i,oe,v))}function d(){a(i,oe)}function p(){var n=r;r=!0,E((function(){r=n}))}function v(t){if(!r){var e=re(t);e===l(st)?n.go("<"):e===l(at)&&n.go(">")}}return{mount:function(){f(),u(Tn,d),u(Tn,f),u(On,p)},destroy:d,disable:function(n){r=n}}},LazyLoad:function(n,t,e){var i=ot(n),r=i.on,o=i.off,u=i.bind,s=i.emit,a="sequential"===e.lazyLoad,c=[Mn,Bn],l=[];function f(){y(l),t.Slides.forEach((function(n){an(n.slide,ae).forEach((function(t){var i=nn(t,ue),r=nn(t,se);if(i!==t.src||r!==t.srcset){var o=e.classes.spinner,u=t.parentElement,s=G(u,"."+o)||V("span",o,u);l.push([t,n,s]),t.src||Q(t,"none")}}))})),a?h():(o(c),r(c,d),d())}function d(){(l=l.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||p(t)}))).length||o(c)}function p(n){var t=n[0];R(n[1].slide,Zt),u(t,"load error",w(v,n)),K(t,"src",nn(t,ue)),K(t,"srcset",nn(t,se)),q(t,ue),q(t,se)}function v(n,t){var e=n[0],i=n[1];cn(i.slide,Zt),"error"!==t.type&&(rn(n[2]),Q(e,""),s(tt,e,i),s(Fn)),a&&h()}function h(){l.length&&p(l.shift())}return{mount:function(){e.lazyLoad&&(f(),r(Rn,f))},destroy:w(y,l),check:d}},Pagination:function(n,t,e){var i,r,o=ot(n),u=o.on,s=o.emit,a=o.bind,c=t.Slides,l=t.Elements,f=t.Controller,d=f.hasFocus,p=f.getIndex,v=f.go,h=t.Direction.resolve,g=l.pagination,m=[];function E(){i&&(rn(g?b(i.children):i),cn(i,r),y(m),i=null),o.destroy()}function _(n){v(">"+n,!0)}function S(n,t){var e=m.length,i=re(t),r=x(),o=-1;i===h(at,!1,r)?o=++n%e:i===h(st,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=m[o];u&&($(u.button),v(">"+o),un(t,!0))}function x(){return e.paginationDirection||e.direction}function k(n){return m[f.toPage(n)]}function P(){var n=k(p(!0)),t=k(p());if(n){var e=n.button;cn(e,Wt),q(e,mt),K(e,vt,-1)}if(t){var r=t.button;R(r,Wt),K(r,mt,!0),K(r,vt,"")}s(Vn,{list:i,items:m},n,t)}return{items:m,mount:function t(){E(),u([Tn,Rn,rt],t);var o=e.pagination;g&&Q(g,o?"":"none"),o&&(u([On,Zn,Bn],P),function(){var t=n.length,o=e.classes,u=e.i18n,s=e.perPage,p=d()?f.getEnd()+1:yn(t/s);R(i=g||V("ul",o.pagination,l.track.parentElement),r=It+"--"+x()),K(i,pt,"tablist"),K(i,yt,u.select),K(i,Et,x()===ft?"vertical":"");for(var v=0;v<p;v++){var h=V("li",null,i),y=V("button",{class:o.page,type:"button"},h),b=c.getIn(v).map((function(n){return n.slide.id})),E=!d()&&s>1?u.pageX:u.slideX;a(y,"click",w(_,v)),e.paginationKeyboard&&a(y,"keydown",w(S,v)),K(h,pt,"presentation"),K(y,pt,"tab"),K(y,ht,b.join(" ")),K(y,yt,xn(E,v+1)),K(y,vt,-1),m.push({li:h,button:y,page:v})}}(),P(),s(Kn,{list:i,items:m},k(n.index)))},destroy:E,getAt:k,update:P}},Sync:function(n,t,e){var i=e.isNavigation,r=e.slideFocus,o=[];function u(){n.splides.forEach((function(t){t.isParent||(a(n,t.splide),a(t.splide,n))})),i&&function(){var t=ot(n),e=t.on;e(Dn,l),e(et,f),e([An,Tn],c),o.push(t),t.emit(Jn,n.splides)}()}function s(){o.forEach((function(n){n.destroy()})),y(o)}function a(n,t){var e=ot(n);e.on(On,(function(n,e,i){t.go(t.is($t)?i:n)})),o.push(e)}function c(){K(t.Elements.list,Et,e.direction===ft?"vertical":"")}function l(t){n.go(t.index)}function f(n,t){z(ce,re(t))&&(l(n),un(t))}return{setup:w(t.Media.set,{slideFocus:L(r)?i:r},!0),mount:u,destroy:s,remount:function(){s(),u()}}},Wheel:function(n,t,e){var i=ot(n).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,u=o<0,s=ln(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;bn(o)>a&&s-r>c&&(n.go(u?"<":">"),r=s),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&un(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",o,ee)}}},Live:function(n,t,e){var i=ot(n).on,r=t.Elements.track,o=e.live&&!e.isNavigation,u=V("span","splide__sr"),s=ut(90,w(a,!1));function a(n){K(r,xt,n),n?(T(r,u),s.start()):(rn(u),s.cancel())}function c(n){o&&K(r,St,n?"off":"polite")}return{mount:function(){o&&(c(!t.Autoplay.isPaused()),K(r,kt,!0),u.textContent="\u2026",i(Qn,w(c,!0)),i(nt,w(c,!1)),i([Mn,Bn],w(a,!0)))},disable:c,destroy:function(){q(r,[St,kt,xt]),rn(u)}}}}),fe={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:qt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function de(n,t,e){var i=t.Slides;function r(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){ot(n).on([An,Rn],r)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),E(t)},cancel:_}}function pe(n,t,e){var i,r=t.Move,o=t.Controller,u=t.Scroll,s=t.Elements.list,a=w(J,s,"transition");function c(){a(""),u.cancel()}return{mount:function(){ot(n).bind(s,"transitionend",(function(n){n.target===s&&i&&(c(),i())}))},start:function(t,s){var c=r.toPosition(t,!0),l=r.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Qt)&&i){var r=o.getIndex(!0),u=o.getEnd();if(0===r&&t>=u||r>=u&&0===t)return i}return e.speed}(t);bn(c-l)>=1&&f>=1?e.useScroll?u.scroll(c,f,!1,s):(a("transform "+f+"ms "+e.easing),r.translate(c,!0),i=s):(r.jump(t),s())},cancel:c}}var ve=function(){function n(t,e){this.event=ot(),this.Components={},this.state=function(n){var t=n;return{set:function(n){t=n},is:function(n){return z(D(n),t)}}}(1),this.splides=[],this._o={},this._E={};var i=A(t)?sn(document,t):t;vn(i,i+" is invalid."),this.root=i,e=H({label:nn(i,yt)||"",labelledby:nn(i,bt)||""},fe,n.defaults,e||{});try{H(e,JSON.parse(nn(i,pn)))}catch(r){vn(!1,"Invalid JSON")}this._o=Object.create(H({},e))}var t,e,i,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,r=this.Components;return vn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(ne)?de:pe),this._E=n||this._E,Z(B({},le,this._E,{Transition:this._T}),(function(n,t){var i=n(e,r,e._o);r[t]=i,i.setup&&i.setup()})),Z(r,(function(n){n.mount&&n.mount()})),this.emit(An),R(this.root,"is-initialized"),i.set(3),this.emit(Ln),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(b(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(Rn),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?ot(this).on(Ln,this.destroy.bind(this,n)):(Z(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Hn),t.destroy(),n&&y(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&h(t.prototype,e),i&&h(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}(),he=ve;he.defaults={},he.STATES=m;var ge=[[An,"onMounted"],[Ln,"onReady"],[On,"onMove"],[Mn,"onMoved"],[Dn,"onClick"],[Nn,"onActive"],[zn,"onInactive"],[jn,"onVisible"],[In,"onHidden"],[Rn,"onRefresh"],[Tn,"onUpdated"],[Fn,"onResize"],[Wn,"onResized"],[Xn,"onDrag"],[Gn,"onDragging"],[Un,"onDragged"],[Zn,"onScroll"],[Bn,"onScrolled"],[Hn,"onDestroy"],[Yn,"onArrowsMounted"],[qn,"onArrowsUpdated"],[Kn,"onPaginationMounted"],[Vn,"onPaginationUpdated"],[Jn,"onNavigationMounted"],[Qn,"onAutoplayPlay"],[$n,"onAutoplayPlaying"],[nt,"onAutoplayPause"],[tt,"onLazyLoadLoaded"]];function me(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")}function ye(n){return null!==n&&"object"===typeof n}function be(n,t){if(Array.isArray(n)&&Array.isArray(t))return n.length===t.length&&!n.some((function(n,e){return!be(n,t[e])}));if(ye(n)&&ye(t)){var e=Object.keys(n),i=Object.keys(t);return e.length===i.length&&!e.some((function(e){return!Object.prototype.hasOwnProperty.call(t,e)||!be(n[e],t[e])}))}return n===t}function we(n,t){var e=n;return function(n,t){if(n)for(var e=Object.keys(n),i=0;i<e.length;i++){var r=e[i];if("__proto__"!==r&&!1===t(n[r],r))break}}(t,(function(n,t){Array.isArray(n)?e[t]=n.slice():ye(n)?e[t]=we(ye(e[t])?e[t]:{},n):e[t]=n})),e}var Ee=function(n){var t=n.children,e=n.className,i=l(n,d);return f.createElement("div",(0,c.Z)({className:me("splide__track",e)},i),f.createElement("ul",{className:"splide__list"},t))},_e=function(n){(0,s.Z)(e,n);var t=(0,a.Z)(e);function e(){var n;return(0,o.Z)(this,e),(n=t.apply(this,arguments)).splideRef=f.createRef(),n.slides=[],n}return(0,u.Z)(e,[{key:"componentDidMount",value:function(){var n=this.props,t=n.options,e=n.extensions,i=n.transition,r=this.splideRef.current;r&&(this.splide=new he(r,t),this.bind(this.splide),this.splide.mount(e,i),this.options=we({},t||{}),this.slides=this.getSlides())}},{key:"componentWillUnmount",value:function(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}},{key:"componentDidUpdate",value:function(){if(this.splide){var n=this.props.options;n&&!be(this.options,n)&&(this.splide.options=n,this.options=we({},n));var t,e,i=this.getSlides();t=this.slides,e=i,(t.length!==e.length||t.some((function(n,t){return n!==e[t]})))&&(this.splide.refresh(),this.slides=i)}}},{key:"sync",value:function(n){var t;null==(t=this.splide)||t.sync(n)}},{key:"go",value:function(n){var t;null==(t=this.splide)||t.go(n)}},{key:"getSlides",value:function(){var n;if(this.splide){var t=null==(n=this.splide.Components.Elements)?void 0:n.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}},{key:"bind",value:function(n){var t=this;ge.forEach((function(e){var i=(0,r.Z)(e,2),o=i[0],u=i[1],s=t.props[u];"function"===typeof s&&n.on(o,(function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];s.apply(void 0,[n].concat(e))}))}))}},{key:"omit",value:function(n,t){return t.forEach((function(t){Object.prototype.hasOwnProperty.call(n,t)&&delete n[t]})),n}},{key:"render",value:function(){var n=this.props,t=n.className,e=n.tag,r=void 0===e?"div":e,o=n.hasTrack,u=void 0===o||o,s=n.children,a=l(n,p);return f.createElement(r,(0,c.Z)({className:me("splide",t),ref:this.splideRef},this.omit(a,["options"].concat((0,i.Z)(ge.map((function(n){return n[1]})))))),u?f.createElement(Ee,null,s):s)}}]),e}(f.Component),Se=function(n){var t=n.children,e=n.className,i=l(n,v);return f.createElement("li",(0,c.Z)({className:me("splide__slide",e)},i),t)}},1180:function(){}}]);
//# sourceMappingURL=795.22c09436.chunk.js.map