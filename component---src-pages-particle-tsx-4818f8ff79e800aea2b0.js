(self.webpackChunkrichen_portfolio=self.webpackChunkrichen_portfolio||[]).push([[191],{549:function(t,e,n){"use strict";var r=n(7294);const i=n(9).ZP.div.withConfig({displayName:"PageHeader__SPageHeaderContainer",componentId:"icr38y-0"})(["display:flex;padding:30px 40px;margin:0;background-color:",";width:100%;"],(t=>t.theme.palette.common.pageBackgroundAlt));e.Z=({children:t})=>r.createElement(i,null,t)},5898:function(t,e,n){"use strict";var r=n(7294),i=n(9),o=n(7082);const a=(0,i.ZP)(o.sM).withConfig({displayName:"PageMain__SPageMain",componentId:"sc-17094wq-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;height:100%;"]);e.Z=({children:t})=>r.createElement(a,null,t)},7180:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return yt}});var r=n(7294),i=n(9007),o=n(549),a=n(5167);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s="undefined"==typeof window?r.useEffect:r.useLayoutEffect,l={innerWidth:null,innerHeight:null,outerWidth:null,outerHeight:null};function f(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,outerWidth:window.outerWidth,outerHeight:window.outerHeight}}var h=function(){var t=c((0,r.useState)((function(){return"undefined"!=typeof window?f():l})),2),e=t[0],n=t[1];return s((function(){function t(){n(f())}return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),e},p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function d(t,e){function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function y(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function g(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(g(arguments[e]));return t}var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var w="Expected a function",_=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,F=/^0o[0-7]+$/i,P=parseInt,S="object"==typeof b&&b&&b.Object===Object&&b,O="object"==typeof self&&self&&self.Object===Object&&self,E=S||O||Function("return this")(),D=Object.prototype.toString,C=Math.max,M=Math.min,k=function(){return E.Date.now()};function A(t,e,n){var r,i,o,a,u,c,s=0,l=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(w);function p(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function d(t){return s=t,u=setTimeout(y,e),l?p(t):a}function v(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-s>=o}function y(){var t=k();if(v(t))return g(t);u=setTimeout(y,function(t){var n=e-(t-c);return f?M(n,o-(t-s)):n}(t))}function g(t){return u=void 0,h&&r?p(t):(r=i=void 0,a)}function m(){var t=k(),n=v(t);if(r=arguments,i=this,c=t,n){if(void 0===u)return d(c);if(f)return u=setTimeout(y,e),p(c)}return void 0===u&&(u=setTimeout(y,e)),a}return e=R(e)||0,T(n)&&(l=!!n.leading,o=(f="maxWait"in n)?C(R(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),m.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=c=i=u=void 0},m.flush=function(){return void 0===u?a:g(k())},m}function T(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function R(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==D.call(t)}(t))return NaN;if(T(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=T(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_,"");var n=j.test(t);return n||F.test(t)?P(t.slice(2),n?2:8):x.test(t)?NaN:+t}var I,W,H=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(w);return T(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),A(t,e,{leading:r,maxWait:e,trailing:i})},$=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},t.prototype.divideScalar=function(t){return this.x=this.x/t,this.y=this.y/t,this},t.prototype.multiplyScalar=function(t){return this.x=this.x*t,this.y=this.y*t,this},t.prototype.getMagnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.getAngle=function(){return Math.atan2(this.y,this.x)},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.toUnit=function(){var t=this.getMagnitude();return t?this.clone().divideScalar(t):this.clone()},t.from=function(e,n){return new t(n*Math.cos(e),n*Math.sin(e))},t.sum=function(e){var n=new t(0,0);return e.forEach((function(t){n.add(t)})),n},t}(),L=(function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",u="[object Date]",c="[object Error]",s="[object Function]",l="[object Map]",f="[object Number]",h="[object Object]",p="[object Promise]",d="[object RegExp]",v="[object Set]",y="[object String]",g="[object Symbol]",m="[object WeakMap]",w="[object ArrayBuffer]",_="[object DataView]",x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,j=/^\w*$/,F=/^\./,P=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,S=/\\(\\)?/g,O=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,D={};D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D[i]=D[o]=D[w]=D[a]=D[_]=D[u]=D[c]=D[s]=D[l]=D[f]=D[h]=D[d]=D[v]=D[y]=D[m]=!1;var C="object"==typeof b&&b&&b.Object===Object&&b,M="object"==typeof self&&self&&self.Object===Object&&self,k=C||M||Function("return this")(),A=e&&!e.nodeType&&e,T=A&&t&&!t.nodeType&&t,R=T&&T.exports===A&&C.process,I=function(){try{return R&&R.binding("util")}catch(t){}}(),W=I&&I.isTypedArray;function H(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function $(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function L(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function U(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function N(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function Z(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var B,z,X,Y=Array.prototype,Q=Function.prototype,q=Object.prototype,G=k["__core-js_shared__"],V=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",J=Q.toString,K=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=k.Symbol,rt=k.Uint8Array,it=q.propertyIsEnumerable,ot=Y.splice,at=nt?nt.isConcatSpreadable:void 0,ut=(z=Object.keys,X=Object,function(t){return z(X(t))}),ct=Bt(k,"DataView"),st=Bt(k,"Map"),lt=Bt(k,"Promise"),ft=Bt(k,"Set"),ht=Bt(k,"WeakMap"),pt=Bt(Object,"create"),dt=Kt(ct),vt=Kt(st),yt=Kt(lt),gt=Kt(ft),mt=Kt(ht),bt=nt?nt.prototype:void 0,wt=bt?bt.valueOf:void 0,_t=bt?bt.toString:void 0;function xt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function jt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ft(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pt(t){var e=-1,n=t?t.length:0;for(this.__data__=new Ft;++e<n;)this.add(t[e])}function St(t){this.__data__=new jt(t)}function Ot(t,e){var n=re(t)||ne(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var o in t)!e&&!K.call(t,o)||i&&("length"==o||Yt(o,r))||n.push(o);return n}function Et(t,e){for(var n=t.length;n--;)if(ee(t[n][0],e))return n;return-1}xt.prototype.clear=function(){this.__data__=pt?pt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(pt){var r=e[t];return r===n?void 0:r}return K.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return pt?void 0!==e[t]:K.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=pt&&void 0===e?n:e,this},jt.prototype.clear=function(){this.__data__=[]},jt.prototype.delete=function(t){var e=this.__data__,n=Et(e,t);return!(n<0||(n==e.length-1?e.pop():ot.call(e,n,1),0))},jt.prototype.get=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},jt.prototype.has=function(t){return Et(this.__data__,t)>-1},jt.prototype.set=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Ft.prototype.clear=function(){this.__data__={hash:new xt,map:new(st||jt),string:new xt}},Ft.prototype.delete=function(t){return Zt(this,t).delete(t)},Ft.prototype.get=function(t){return Zt(this,t).get(t)},Ft.prototype.has=function(t){return Zt(this,t).has(t)},Ft.prototype.set=function(t,e){return Zt(this,t).set(t,e),this},Pt.prototype.add=Pt.prototype.push=function(t){return this.__data__.set(t,n),this},Pt.prototype.has=function(t){return this.__data__.has(t)},St.prototype.clear=function(){this.__data__=new jt},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,e){var n=this.__data__;if(n instanceof jt){var r=n.__data__;if(!st||r.length<199)return r.push([t,e]),this;n=this.__data__=new Ft(r)}return n.set(t,e),this};var Dt,Ct,Mt=(Dt=function(t,e){return t&&At(t,e,fe)},function(t,e){if(null==t)return t;if(!ie(t))return Dt(t,e);for(var n=t.length,r=Ct?n:-1,i=Object(t);(Ct?r--:++r<n)&&!1!==e(i[r],r,i););return t});function kt(t,e,n,r,i){var o=-1,a=t.length;for(n||(n=Xt),i||(i=[]);++o<a;){var u=t[o];e>0&&n(u)?e>1?kt(u,e-1,n,r,i):$(i,u):r||(i[i.length]=u)}return i}var At=function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++i];if(!1===n(o[c],c,o))break}return e}}();function Tt(t,e){for(var n=0,r=(e=Qt(e,t)?[e]:Ut(e)).length;null!=t&&n<r;)t=t[Jt(e[n++])];return n&&n==r?t:void 0}function Rt(t,e){return null!=t&&e in Object(t)}function It(t,e,n,r,s){return t===e||(null==t||null==e||!ue(t)&&!ce(e)?t!=t&&e!=e:function(t,e,n,r,s,p){var m=re(t),b=re(e),x=o,j=o;m||(x=(x=zt(t))==i?h:x),b||(j=(j=zt(e))==i?h:j);var F=x==h&&!U(t),P=j==h&&!U(e),S=x==j;if(S&&!F)return p||(p=new St),m||le(t)?Nt(t,e,n,r,s,p):function(t,e,n,r,i,o,s){switch(n){case _:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case w:return!(t.byteLength!=e.byteLength||!r(new rt(t),new rt(e)));case a:case u:case f:return ee(+t,+e);case c:return t.name==e.name&&t.message==e.message;case d:case y:return t==e+"";case l:var h=N;case v:var p=2&o;if(h||(h=Z),t.size!=e.size&&!p)return!1;var m=s.get(t);if(m)return m==e;o|=1,s.set(t,e);var b=Nt(h(t),h(e),r,i,o,s);return s.delete(t),b;case g:if(wt)return wt.call(t)==wt.call(e)}return!1}(t,e,x,n,r,s,p);if(!(2&s)){var O=F&&K.call(t,"__wrapped__"),E=P&&K.call(e,"__wrapped__");if(O||E){var D=O?t.value():t,C=E?e.value():e;return p||(p=new St),n(D,C,r,s,p)}}return!!S&&(p||(p=new St),function(t,e,n,r,i,o){var a=2&i,u=fe(t),c=u.length,s=fe(e).length;if(c!=s&&!a)return!1;for(var l=c;l--;){var f=u[l];if(!(a?f in e:K.call(e,f)))return!1}var h=o.get(t);if(h&&o.get(e))return h==e;var p=!0;o.set(t,e),o.set(e,t);for(var d=a;++l<c;){var v=t[f=u[l]],y=e[f];if(r)var g=a?r(y,v,f,e,t,o):r(v,y,f,t,e,o);if(!(void 0===g?v===y||n(v,y,r,i,o):g)){p=!1;break}d||(d="constructor"==f)}if(p&&!d){var m=t.constructor,b=e.constructor;m==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof m&&m instanceof m&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p}(t,e,n,r,s,p))}(t,e,It,n,r,s))}function Wt(t){return!(!ue(t)||function(t){return!!V&&V in t}(t))&&(oe(t)||U(t)?et:O).test(Kt(t))}function Ht(t){return"function"==typeof t?t:null==t?he:"object"==typeof t?re(t)?function(t,e){return Qt(t)&&qt(e)?Gt(Jt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:Tt(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){e=Qt(e,t)?[e]:Ut(e);for(var r,i=-1,o=e.length;++i<o;){var a=Jt(e[i]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}return r||!!(o=t?t.length:0)&&ae(o)&&Yt(a,o)&&(re(t)||ne(t))}(t,e,Rt)}(n,t):It(e,r,void 0,3)}}(t[0],t[1]):1==(n=function(t){for(var e=fe(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,qt(i)]}return e}(e=t)).length&&n[0][2]?Gt(n[0][0],n[0][1]):function(t){return t===e||function(t,e,n,r){var i=n.length,o=i,a=!r;if(null==t)return!o;for(t=Object(t);i--;){var u=n[i];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++i<o;){var c=(u=n[i])[0],s=t[c],l=u[1];if(a&&u[2]){if(void 0===s&&!(c in t))return!1}else{var f=new St;if(r)var h=r(s,l,c,t,e,f);if(!(void 0===h?It(l,s,r,3,f):h))return!1}}return!0}(t,e,n)}:Qt(r=t)?(i=Jt(r),function(t){return null==t?void 0:t[i]}):function(t){return function(e){return Tt(e,t)}}(r);var e,n,r,i}function $t(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||q,e!==r)return ut(t);var e,n,r,i=[];for(var o in Object(t))K.call(t,o)&&"constructor"!=o&&i.push(o);return i}function Lt(t,e){var n=-1,r=ie(t)?Array(t.length):[];return Mt(t,(function(t,i,o){r[++n]=e(t,i,o)})),r}function Ut(t){return re(t)?t:Vt(t)}function Nt(t,e,n,r,i,o){var a=2&i,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var s=o.get(t);if(s&&o.get(e))return s==e;var l=-1,f=!0,h=1&i?new Pt:void 0;for(o.set(t,e),o.set(e,t);++l<u;){var p=t[l],d=e[l];if(r)var v=a?r(d,p,l,e,t,o):r(p,d,l,t,e,o);if(void 0!==v){if(v)continue;f=!1;break}if(h){if(!L(e,(function(t,e){if(!h.has(e)&&(p===t||n(p,t,r,i,o)))return h.add(e)}))){f=!1;break}}else if(p!==d&&!n(p,d,r,i,o)){f=!1;break}}return o.delete(t),o.delete(e),f}function Zt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Bt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Wt(n)?n:void 0}var zt=function(t){return tt.call(t)};function Xt(t){return re(t)||ne(t)||!!(at&&t&&t[at])}function Yt(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Qt(t,e){if(re(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!se(t))||j.test(t)||!x.test(t)||null!=e&&t in Object(e)}function qt(t){return t==t&&!ue(t)}function Gt(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}(ct&&zt(new ct(new ArrayBuffer(1)))!=_||st&&zt(new st)!=l||lt&&zt(lt.resolve())!=p||ft&&zt(new ft)!=v||ht&&zt(new ht)!=m)&&(zt=function(t){var e=tt.call(t),n=e==h?t.constructor:void 0,r=n?Kt(n):void 0;if(r)switch(r){case dt:return _;case vt:return l;case yt:return p;case gt:return v;case mt:return m}return e});var Vt=te((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(se(t))return _t?_t.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return F.test(t)&&n.push(""),t.replace(P,(function(t,e,r,i){n.push(r?i.replace(S,"$1"):e||t)})),n}));function Jt(t){if("string"==typeof t||se(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Kt(t){if(null!=t){try{return J.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function te(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a),a};return n.cache=new(te.Cache||Ft),n}function ee(t,e){return t===e||t!=t&&e!=e}function ne(t){return function(t){return ce(t)&&ie(t)}(t)&&K.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==i)}te.Cache=Ft;var re=Array.isArray;function ie(t){return null!=t&&ae(t.length)&&!oe(t)}function oe(t){var e=ue(t)?tt.call(t):"";return e==s||"[object GeneratorFunction]"==e}function ae(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}function ue(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ce(t){return!!t&&"object"==typeof t}function se(t){return"symbol"==typeof t||ce(t)&&tt.call(t)==g}var le=W?function(t){return function(e){return t(e)}}(W):function(t){return ce(t)&&ae(t.length)&&!!D[tt.call(t)]};function fe(t){return ie(t)?Ot(t):$t(t)}function he(t){return t}t.exports=function(t,e){return kt(function(t,e){return(re(t)?H:Lt)(t,Ht(e))}(t,e),1)}}(I={exports:{}},I.exports),I.exports),U=function(){function t(t,e){void 0===e&&(e={}),this.particles=[],this.particleForces=[],this.subverses=[],this.parent=t,this.options=e}return t.prototype.createSubverse=function(){var e=new t(this,this.options);return this.subverses.push(e),e},t.prototype.removeSubverse=function(t){this.subverses=this.subverses.filter((function(e){return e!==t}))},t.prototype.addParticle=function(t){this.particles.push(t)},t.prototype.removeParticle=function(t){this.particles=this.particles.filter((function(e){return e!==t}))},t.prototype.getParticles=function(){return this.particles.concat(L(this.subverses,(function(t){return t.getParticles()})))},t.prototype.addParticleForce=function(t){this.particleForces.push(t)},t.prototype.removeParticleForce=function(t){this.particleForces=this.particleForces.filter((function(e){return e!==t}))},t.prototype.getParticleForces=function(){return this.parent?this.parent.getParticleForces().concat(this.particleForces):this.particleForces},t.prototype.enforceBounds=function(t,e){t.position.x>e.right?(t.position.x=e.right,t.velocity.x*=-1):t.position.x<e.left&&(t.position.x=e.left,t.velocity.x*=-1),t.position.y>e.bottom?(t.position.y=e.bottom,t.velocity.y*=-1):t.position.y<e.top&&(t.position.y=e.top,t.velocity.y*=-1)},t.prototype.applyForces=function(t,e){var n=e.map((function(e){return e(t)})),r=$.sum(n).divideScalar(t.mass);t.position.add(t.velocity),t.velocity.add(r)},t.prototype.tick=function(){var t=this,e=this.getParticleForces();this.particles.forEach((function(n){t.applyForces(n,e),t.options.bounds&&t.enforceBounds(n,t.options.bounds)})),this.subverses.forEach((function(t){return t.tick()}))},t}(),N={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1}};!function(t){t.Creating="Creating",t.Created="Created",t.Dying="Dying",t.Dead="Dead"}(W||(W={}));var Z=function(t){function e(e){var n=void 0===e?{}:e,r=n.bounds,i=n.frameRate,o=void 0===i?30:i,a=n.creationDuration,u=void 0===a?500:a,c=n.deathDuration,s=void 0===c?500:c,l=n.creationTimingFn,f=void 0===l?N.easeInQuad:l,h=n.deathTimingFn,p=void 0===h?N.easeInQuad:h,d=n.onStateChange,v=t.call(this,null,{bounds:r})||this;return v.health=0,v.creationRate=1,v.deathRate=1,v.setFrameRate(o),v.setCreationDuration(u),v.setDeathDuration(s),v.creationTimingFn=f,v.deathTimingFn=p,v.onStateChange=d,v.setState(W.Creating),v}return d(e,t),e.prototype.setState=function(t){var e;this.state=t,null===(e=this.onStateChange)||void 0===e||e.call(this,t,this)},e.prototype.applyGrowth=function(t){t.perceivedRadius=t.radius*this.creationTimingFn(this.health)},e.prototype.applyDecay=function(t){t.perceivedRadius=t.radius*this.deathTimingFn(this.health)},e.prototype.setCreationDuration=function(t){this.creationDuration=t,this.creationRate=1e3/(this.creationDuration*this.frameRate)},e.prototype.setDeathDuration=function(t){this.deathDuration=t,this.deathRate=1e3/(this.deathDuration*this.frameRate)},e.prototype.setFrameRate=function(t){this.frameRate=t,this.creationRate=1e3/(this.creationDuration*this.frameRate),this.deathRate=1e3/(this.deathDuration*this.frameRate)},e.prototype.setOnStateChange=function(t){this.onStateChange=t},e.prototype.die=function(){var t=this;return this.setState(W.Dying),new Promise((function(e){t.resolveDeath=e}))},e.prototype.tick=function(){var e=this;this.state===W.Creating?(this.health=Math.min(this.health+this.creationRate,1),this.getParticles().forEach((function(t){e.applyGrowth(t)})),1===this.health&&this.setState(W.Created)):this.state===W.Dying&&(this.health=Math.max(this.health-this.deathRate,0),this.getParticles().forEach((function(t){e.applyDecay(t)})),0===this.health&&(this.setState(W.Dead),this.resolveDeath())),t.prototype.tick.call(this)},e}(U),B=function(t){var e=void 0===t?{}:t,n=e.radius,r=void 0===n?1:n,i=e.friction,o=void 0===i?10:i,a=e.mass,u=void 0===a?100:a,c=e.position,s=void 0===c?new $(0,0):c,l=e.velocity,f=void 0===l?new $(0,0):l,h=e.color,p=void 0===h?"black":h,d=e.growthRate,v=void 0===d?.05:d,y=e.decayRate,g=void 0===y?.05:y;this.perceivedRadius=0,this.radius=r,this.friction=o,this.mass=u,this.position=s,this.velocity=f,this.color=p,this.growthRate=v,this.decayRate=g},z=function(){};function X(t){var e=new Image;e.crossOrigin="Anonymous";var n=new Promise((function(t,n){e.onload=function(){var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var i=r.getContext("2d");if(!i)return n(new Error("Could not get canvas context"));i.drawImage(e,0,0,e.width,e.height,0,0,r.width,r.height);var o=i.getImageData(0,0,r.width,r.height).data;i.clearRect(0,0,r.width,r.height);for(var a=[],u=0;u<o.length-1;){var c=u/4%r.width,s=Math.floor(u/4/r.width);a[s]||(a[s]=[]),a[s][c]={r:o[u],g:o[u+1],b:o[u+2],a:o[u+3]},u+=4}t(new it(a))},e.onerror=n}));return e.src=t,n}var Y=2*Math.PI,Q=function(t){var e=t.target,n=e.getBoundingClientRect();return{x:(t.clientX-n.left)/(n.right-n.left)*e.width,y:(t.clientY-n.top)/(n.bottom-n.top)*e.height}},q=function(t,e){var n=this;void 0===e&&(e=30),this.setFps=function(t){n.delay=1e3/t,n.time=null,n.frame=-1},this.start=function(){n.rafId||(n.rafId=requestAnimationFrame(n.loop))},this.stop=function(){n.rafId&&(cancelAnimationFrame(n.rafId),n.rafId=null,n.time=null,n.frame=-1)},this.loop=function(t){null===n.time&&(n.time=t);var e=Math.floor((t-n.time)/n.delay);e>n.frame&&(n.frame=e,n.callback({time:t,frame:n.frame})),n.rafId=requestAnimationFrame(n.loop)},this.delay=1e3/e,this.time=null,this.frame=-1,this.callback=t},G=function(t){function e(e){var n=t.call(this)||this;return n.canvas=e,n}return d(e,t),e.prototype.context=function(){return this.canvas.getContext("2d")},e.prototype.height=function(){return this.canvas.height},e.prototype.width=function(){return this.canvas.width},e.prototype.clear=function(){var t;null===(t=this.context())||void 0===t||t.clearRect(0,0,this.width(),this.height())},e.prototype.drawParticles=function(t,e){var n=this.context();n&&(n.fillStyle=e,n.beginPath(),t.forEach((function(t){n.moveTo(t.position.x+t.radius,t.position.y),n.arc(t.position.x,t.position.y,t.perceivedRadius,0,Y)})),n.fill())},e.prototype.drawFrame=function(t){var e=this;this.clear();var n,r=t.getParticles(),i=(n=function(t){return t.color},r.reduce((function(t,e){var r=n(e);return t[r]||(t[r]=[]),t[r].push(e),t}),{}));Object.keys(i).forEach((function(t){e.drawParticles(i[t],t)}))},e}(z),V=function(){function t(t,e,n){var r=this;void 0===e&&(e=null);var i=(void 0===n?{}:n).frameRate,o=void 0===i?30:i;this.id=null,this.start=function(){r.animator.start()},this.stop=function(){r.animator.stop()},this.loop=function(){r.universe&&(r.renderer.drawFrame(r.universe),r.universe.tick())},this.universe=e,this.renderer=t,this.animator=new q(this.loop,o)}return t.prototype.setUniverse=function(t){this.universe=t},t}();function J(t,e,n){return void 0===n&&(n=1),function(r){return new $(t,e).subtract(r.position).multiplyScalar(n)}}function K(t){return function(){return new $(Math.random()-.5,Math.random()-.5).multiplyScalar(t)}}var tt,et=function(t){var e=Math.min(Math.max(t.friction,0),1);return 0===t.velocity.getMagnitude()?new $(0,0):t.velocity.clone().multiplyScalar(-e*t.mass)},nt=Object.freeze({blackHole:J,disturbance:function(t,e,n){return void 0===n&&(n=1),function(r){var i=new $(t,e);return i.subtract(r.position).multiplyScalar(-1),i.divideScalar((12^i.getMagnitude())/(n+.001)+.01),i}},entropy:K,friction:et}),rt=function(t){var e=this;this.setScale=function(t){e.scale=t},this.setCanvasWidth=function(t){e.canvasWidth=t},this.setCanvasHeight=function(t){e.canvasHeight=t},this.getParticleForce=function(){return function(t){var n=e.getPixelPosition();return J(n.x,n.y)(t)}},this.getPixelPosition=function(){var t=e.pixelX*e.scale+e.canvasWidth/2-e.imageWidth*e.scale/2,n=e.pixelY*e.scale+e.canvasHeight/2-e.imageHeight*e.scale/2;return new $(t,n)},this.pixelX=t.pixelX,this.pixelY=t.pixelY,this.scale=t.scale,this.imageWidth=t.imageWidth,this.imageHeight=t.imageHeight,this.canvasWidth=t.canvasWidth,this.canvasHeight=t.canvasHeight},it=function(){function t(t){this.array=t,this.updateWidth(),this.updateHeight()}return t.prototype.updateWidth=function(){this.width=Math.min.apply(Math,m(this.array.map((function(t){return t.length}))))},t.prototype.updateHeight=function(){this.height=this.array.length},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.get=function(t,e){return this.array[e][t]},t.prototype.set=function(t,e,n){this.array[e]||(this.array[e]=[]),this.array[e][t]=n,this.updateWidth(),this.updateHeight()},t.prototype.slice=function(e,n){var r=g(e,2),i=r[0],o=r[1],a=g(n,2),u=a[0],c=a[1];return new t(this.array.slice(u,c).map((function(t){return t.slice(i,o)})))},t.prototype.forEach=function(t){this.array.forEach((function(e,n){e.forEach((function(e,r){t(e,r,n)}))}))},t}(),ot=function(t){var e,n,r,i,o=t.url,a=t.maxParticles,u=t.particleOptions,c=t.scale,s=t.canvasDimensions,l=t.creationTimingFn,f=t.deathTimingFn,h=t.creationDuration,p=t.deathDuration,d=t.onUniverseStateChange;return e=void 0,n=void 0,i=function(){var t,e,n,r,i,v,g,b,w,_,x,j,F,P,S,O,E,D,C;return y(this,(function(y){switch(y.label){case 0:return[4,X(o)];case 1:for(t=y.sent(),e=t.getHeight(),n=t.getWidth(),r=e*n,i=function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(m(Array(r).keys())),v=0,g=new Z({creationTimingFn:l,deathTimingFn:f,creationDuration:h,deathDuration:p,onStateChange:d}),b=[],a=Math.min(r,a);v<a&&i.length;)w=i.pop()||0,_=w%n,x=Math.floor(w/n),u.filter({x:_,y:x,image:t})&&(j=g.createSubverse(),F=new rt({pixelX:_,pixelY:x,scale:c,imageHeight:t.getHeight(),imageWidth:t.getWidth(),canvasWidth:s.width,canvasHeight:s.height}),b.push(F),j.addParticleForce(F.getParticleForce()),P=u.color({x:_,y:x,image:t}),S=u.radius({x:_,y:x,image:t}),O=u.friction({x:_,y:x,image:t}),E=u.mass({x:_,y:x,image:t}),D=u.initialPosition({x:_,y:x,image:t,finalPosition:F.getPixelPosition(),canvasDimensions:s}),C=u.initialVelocity({x:_,y:x,image:t}),j.addParticle(new B({radius:S,mass:E,color:P,friction:O,position:D,velocity:C})),v+=1);return[2,{universe:g,pixelManagers:b}]}}))},new((r=void 0)||(r=Promise))((function(t,o){function a(t){try{c(i.next(t))}catch(e){o(e)}}function u(t){try{c(i.throw(t))}catch(e){o(e)}}function c(e){e.done?t(e.value):new r((function(t){t(e.value)})).then(a,u)}c((i=i.apply(e,n||[])).next())}))},at=function(t){var e=t.universe,n=t.duration,i=void 0===n?100:n,o=g((0,r.useState)(null),2),a=o[0],u=o[1];return(0,r.useEffect)((function(){return function(){u(null)}}),[e]),(0,r.useEffect)((function(){if(e&&a){e.addParticleForce(a);var t=window.setTimeout((function(){e.removeParticleForce(a),u(null)}),i);return function(){window.clearTimeout(t),e.removeParticleForce(a)}}}),[e,a,i]),[a,u]};!function(t){t.Loading="Loading",t.Loaded="Loaded",t.Error="Error"}(tt||(tt={}));var ut={filter:function(){return!0},radius:function(){return 1},mass:function(){return 50},color:function(){return"white"},friction:function(){return.15},initialPosition:function(t){return t.finalPosition},initialVelocity:function(){return new $(0,0)}},ct=function(t){var e=t.src,n=t.height,i=void 0===n?400:n,o=t.width,a=void 0===o?400:o,u=t.scale,c=void 0===u?1:u,s=t.maxParticles,l=void 0===s?5e3:s,f=t.entropy,h=void 0===f?20:f,p=t.backgroundColor,d=void 0===p?"#222":p,y=t.particleOptions,m=void 0===y?{}:y,b=t.mouseMoveForce,w=t.touchMoveForce,_=t.mouseDownForce,x=t.mouseMoveForceDuration,j=void 0===x?100:x,F=t.touchMoveForceDuration,P=void 0===F?100:F,S=t.mouseDownForceDuration,O=void 0===S?100:S,E=t.creationTimingFn,D=t.creationDuration,C=t.deathTimingFn,M=t.deathDuration,k=t.onUniverseStateChange,A=t.onImageStateChange,T=t.style,R=void 0===T?{}:T,I=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["src","height","width","scale","maxParticles","entropy","backgroundColor","particleOptions","mouseMoveForce","touchMoveForce","mouseDownForce","mouseMoveForceDuration","touchMoveForceDuration","mouseDownForceDuration","creationTimingFn","creationDuration","deathTimingFn","deathDuration","onUniverseStateChange","onImageStateChange","style"]),W=g((0,r.useState)(),2),$=W[0],L=W[1],U=g((0,r.useState)(),2),N=U[0],Z=U[1],B=(0,r.useRef)(),z=(0,r.useRef)(),X=g((0,r.useState)([]),2),Y=X[0],q=X[1],J=v(v({},ut),m);(0,r.useEffect)((function(){if($){var t=new G($),e=new V(t);return B.current=e,e.start(),function(){return e.stop()}}}),[$]),(0,r.useEffect)((function(){var t,n;if($){var r={width:$.width,height:$.height},i=null===(t=N)||void 0===t?void 0:t.die(),o=ot({url:e,maxParticles:l,particleOptions:J,scale:c,canvasDimensions:r,creationTimingFn:E,creationDuration:D,deathTimingFn:C,deathDuration:M,onUniverseStateChange:k});null===(n=A)||void 0===n||n(tt.Loading),o.then((function(){var t;null===(t=A)||void 0===t||t(tt.Loaded)})).catch((function(){var t;null===(t=A)||void 0===t||t(tt.Error)})),Promise.all([o,i]).then((function(t){var e,n=g(t,1)[0],r=n.universe,i=n.pixelManagers;q(i),r.addParticleForce(et),null===(e=B.current)||void 0===e||e.setUniverse(r),Z(r)})).catch((function(){}))}}),[$,e]),(0,r.useEffect)((function(){var t;null===(t=N)||void 0===t||t.setOnStateChange(k)}),[N,k]);var nt=(0,r.useCallback)(H((function(t){Y.forEach((function(e){e.setScale(t)}))}),50),[Y]),rt=(0,r.useCallback)(H((function(t){Y.forEach((function(e){e.setCanvasWidth(t)}))}),50),[Y]),it=(0,r.useCallback)(H((function(t){Y.forEach((function(e){e.setCanvasHeight(t)}))}),50),[Y]);(0,r.useEffect)((function(){nt(c)}),[c,nt]),(0,r.useEffect)((function(){rt(a)}),[a,rt]),(0,r.useEffect)((function(){it(i)}),[i,it]),(0,r.useEffect)((function(){var t,e=K(h);return null===(t=N)||void 0===t||t.addParticleForce(e),z.current=e,function(){var t;null===(t=N)||void 0===t||t.removeParticleForce(e)}}),[h,$,N]);var ct=g(at({universe:N,duration:j}),2),st=(ct[0],ct[1]),lt=g(at({universe:N,duration:P}),2),ft=(lt[0],lt[1]),ht=g(at({universe:N,duration:O}),2),pt=(ht[0],ht[1]);return r.createElement("canvas",v({},I,{onMouseMove:function(t){var e,n;if(b){var r=Q(t);st((function(){return b(r.x,r.y)}))}null===(n=(e=I).onMouseMove)||void 0===n||n.call(e,t)},onTouchMove:function(t){var e,n;if(w){var r=function(t){var e=t.target,n=e.getBoundingClientRect();return{x:(t.touches[0].clientX-n.left)/(n.right-n.left)*e.width,y:(t.touches[0].clientY-n.top)/(n.bottom-n.top)*e.height}}(t);ft((function(){return w(r.x,r.y)}))}null===(n=(e=I).onTouchMove)||void 0===n||n.call(e,t)},onMouseDown:function(t){var e,n;if(_){var r=Q(t);pt((function(){return _(r.x,r.y)}))}null===(n=(e=I).onMouseDown)||void 0===n||n.call(e,t)},height:i,width:a,style:v({backgroundColor:d,touchAction:"none"},R),ref:function(t){var e;(null===(e=t)||void 0===e?void 0:e.getContext("2d"))&&L(t)}}))},st=n(9003),lt=n(9);const ft=(t,e=20)=>Math.ceil(t/e)*e,ht=(t,e)=>nt.disturbance(t,e,7),pt=lt.ZP.div.withConfig({displayName:"Particle__SCenterContainer",componentId:"sc-1rvn8jk-0"})(["width:100%;display:flex;height:500px;justify-content:center;align-items:center;"]);(0,lt.ZP)(st.$v).withConfig({displayName:"Particle__SCycleButton",componentId:"sc-1rvn8jk-1"})(["margin-top:10px;max-width:126px;max-height:38px;width:126px;height:38px;"]);var dt=t=>{const{innerWidth:e,innerHeight:n}=h(),i={filter:({x:t,y:e,image:n})=>{const r=n.get(t,e);return(r.r+r.g+r.b)/3<200},color:({x:t,y:e,image:n})=>{const r=n.get(t,e);return`rgba(\n          ${ft(r.r,30)}, \n          ${ft(r.g,30)}, \n          ${ft(r.b,30)}, \n          ${ft(r.a,30)/255})`},radius:({x:t,y:e,image:n})=>{const r=n.get(t,e);return 3-(r.r+r.g+r.b)/3/255*1.5},mass:()=>40,friction:()=>.15,initialPosition:({canvasDimensions:t})=>new $(t.width/2,t.height/2)};return r.createElement(r.Fragment,null,r.createElement(pt,null,r.createElement(ct,{src:"/inc-banner.webp",width:Number(e)-500,height:Number(n)-400,scale:.4,entropy:3,maxParticles:5e3,particleOptions:i,mouseMoveForce:ht,touchMoveForce:ht,backgroundColor:"black"})))},vt=n(5898);var yt=t=>r.createElement(i.Z,null,r.createElement(a.Z,{title:"Particle"}),r.createElement(o.Z,null),r.createElement(vt.Z,null,r.createElement(dt,null)))}}]);
//# sourceMappingURL=component---src-pages-particle-tsx-4818f8ff79e800aea2b0.js.map