const __vite__fileDeps=["assets/lobby-CNZ2UO1T.js","assets/my-collections-Bge3KN5b.js","assets/loading-CUEBrxO7.js","assets/deck-CUCn8pJl.js","assets/mana-BkQ1J12w.js","assets/heart-CCxernIS.js","assets/match-B4Djmto_.js","assets/deck-ZUSrWeRq.js","assets/deck-builder-Bbi9rw-c.js","assets/sword-Cnc4GbwN.js","assets/match-DNUDSr4b.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ud(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const nt={},Si=[],En=()=>{},M0=()=>!1,Uc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bd=t=>t.startsWith("onUpdate:"),xt=Object.assign,$d=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},L0=Object.prototype.hasOwnProperty,Ue=(t,e)=>L0.call(t,e),_e=Array.isArray,Pi=t=>Bc(t)==="[object Map]",fv=t=>Bc(t)==="[object Set]",Ie=t=>typeof t=="function",ft=t=>typeof t=="string",ei=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",pv=t=>(it(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),mv=Object.prototype.toString,Bc=t=>mv.call(t),V0=t=>Bc(t).slice(8,-1),gv=t=>Bc(t)==="[object Object]",jd=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Go=Ud(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$c=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},F0=/-(\w)/g,In=$c(t=>t.replace(F0,(e,n)=>n?n.toUpperCase():"")),U0=/\B([A-Z])/g,ti=$c(t=>t.replace(U0,"-$1").toLowerCase()),jc=$c(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ll=$c(t=>t?`on${jc(t)}`:""),hs=(t,e)=>!Object.is(t,e),Vl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_v=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Oh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qm;const yv=()=>Qm||(Qm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ft(r)?q0(r):ws(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ft(t)||it(t))return t}const B0=/;(?![^(]*\))/g,$0=/:([^]+)/,j0=/\/\*[^]*?\*\//g;function q0(t){const e={};return t.replace(j0,"").split(B0).forEach(n=>{if(n){const r=n.split($0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sn(t){let e="";if(ft(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=sn(t[n]);r&&(e+=r+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function vt(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ft(e)&&(t.class=sn(e)),n&&(t.style=ws(n)),t}const W0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",H0=Ud(W0);function vv(t){return!!t||t===""}const Mn=t=>ft(t)?t:t==null?"":_e(t)||it(t)&&(t.toString===mv||!Ie(t.toString))?JSON.stringify(t,wv,2):String(t),wv=(t,e)=>e&&e.__v_isRef?wv(t,e.value):Pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ku(r,i)+" =>"]=s,n),{})}:fv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ku(n))}:ei(e)?Ku(e):it(e)&&!_e(e)&&!gv(e)?String(e):e,Ku=(t,e="")=>{var n;return ei(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dn;class Ev{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dn;try{return dn=this,e()}finally{dn=n}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function qd(t){return new Ev(t)}function z0(t,e=dn){e&&e.active&&e.effects.push(t)}function Wd(){return dn}function bv(t){dn&&dn.cleanups.push(t)}let Us;class Hd{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,z0(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Es();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(G0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),bs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=is,n=Us;try{return is=!0,Us=this,this._runnings++,Ym(this),this.fn()}finally{Xm(this),this._runnings--,Us=n,is=e}}stop(){this.active&&(Ym(this),Xm(this),this.onStop&&this.onStop(),this.active=!1)}}function G0(t){return t.value}function Ym(t){t._trackId++,t._depsLength=0}function Xm(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Tv(t.deps[e],t);t.deps.length=t._depsLength}}function Tv(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let is=!0,Dh=0;const Iv=[];function Es(){Iv.push(is),is=!1}function bs(){const t=Iv.pop();is=t===void 0?!0:t}function zd(){Dh++}function Gd(){for(Dh--;!Dh&&Nh.length;)Nh.shift()()}function Av(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Tv(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Nh=[];function Cv(t,e,n){zd();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Nh.push(r.scheduler)))}Gd()}const Rv=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Jl=new WeakMap,Bs=Symbol(""),Mh=Symbol("");function ln(t,e,n){if(is&&Us){let r=Jl.get(t);r||Jl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Rv(()=>r.delete(n))),Av(Us,s)}}function Er(t,e,n,r,s,i){const o=Jl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&_e(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!ei(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":_e(t)?jd(n)&&a.push(o.get("length")):(a.push(o.get(Bs)),Pi(t)&&a.push(o.get(Mh)));break;case"delete":_e(t)||(a.push(o.get(Bs)),Pi(t)&&a.push(o.get(Mh)));break;case"set":Pi(t)&&a.push(o.get(Bs));break}zd();for(const l of a)l&&Cv(l,4);Gd()}function K0(t,e){const n=Jl.get(t);return n&&n.get(e)}const Q0=Ud("__proto__,__v_isRef,__isVue"),Sv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ei)),Jm=Y0();function Y0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=qe(this);for(let i=0,o=this.length;i<o;i++)ln(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(qe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Es(),zd();const r=qe(this)[e].apply(this,n);return Gd(),bs(),r}}),t}function X0(t){ei(t)||(t=String(t));const e=qe(this);return ln(e,"has",t),e.hasOwnProperty(t)}class Pv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Mv:Nv:i?Dv:Ov).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){if(o&&Ue(Jm,n))return Reflect.get(Jm,n,r);if(n==="hasOwnProperty")return X0}const a=Reflect.get(e,n,r);return(ei(n)?Sv.has(n):Q0(n))||(s||ln(e,"get",n),i)?a:kt(a)?o&&jd(n)?a:a.value:it(a)?s?Qd(a):ni(a):a}}class xv extends Pv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=da(i);if(!Zl(r)&&!da(r)&&(i=qe(i),r=qe(r)),!_e(e)&&kt(i)&&!kt(r))return l?!1:(i.value=r,!0)}const o=_e(e)&&jd(n)?Number(n)<e.length:Ue(e,n),a=Reflect.set(e,n,r,s);return e===qe(s)&&(o?hs(r,i)&&Er(e,"set",n,r):Er(e,"add",n,r)),a}deleteProperty(e,n){const r=Ue(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Er(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ei(n)||!Sv.has(n))&&ln(e,"has",n),r}ownKeys(e){return ln(e,"iterate",_e(e)?"length":Bs),Reflect.ownKeys(e)}}class kv extends Pv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const J0=new xv,Z0=new kv,eA=new xv(!0),tA=new kv(!0),Kd=t=>t,qc=t=>Reflect.getPrototypeOf(t);function pl(t,e,n=!1,r=!1){t=t.__v_raw;const s=qe(t),i=qe(e);n||(hs(e,i)&&ln(s,"get",e),ln(s,"get",i));const{has:o}=qc(s),a=r?Kd:n?Yd:fa;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ml(t,e=!1){const n=this.__v_raw,r=qe(n),s=qe(t);return e||(hs(t,s)&&ln(r,"has",t),ln(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function gl(t,e=!1){return t=t.__v_raw,!e&&ln(qe(t),"iterate",Bs),Reflect.get(t,"size",t)}function Zm(t){t=qe(t);const e=qe(this);return qc(e).has.call(e,t)||(e.add(t),Er(e,"add",t,t)),this}function eg(t,e){e=qe(e);const n=qe(this),{has:r,get:s}=qc(n);let i=r.call(n,t);i||(t=qe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?hs(e,o)&&Er(n,"set",t,e):Er(n,"add",t,e),this}function tg(t){const e=qe(this),{has:n,get:r}=qc(e);let s=n.call(e,t);s||(t=qe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Er(e,"delete",t,void 0),i}function ng(){const t=qe(this),e=t.size!==0,n=t.clear();return e&&Er(t,"clear",void 0,void 0),n}function _l(t,e){return function(r,s){const i=this,o=i.__v_raw,a=qe(o),l=e?Kd:t?Yd:fa;return!t&&ln(a,"iterate",Bs),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function yl(t,e,n){return function(...r){const s=this.__v_raw,i=qe(s),o=Pi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Kd:e?Yd:fa;return!e&&ln(i,"iterate",l?Mh:Bs),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Wr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nA(){const t={get(i){return pl(this,i)},get size(){return gl(this)},has:ml,add:Zm,set:eg,delete:tg,clear:ng,forEach:_l(!1,!1)},e={get(i){return pl(this,i,!1,!0)},get size(){return gl(this)},has:ml,add:Zm,set:eg,delete:tg,clear:ng,forEach:_l(!1,!0)},n={get(i){return pl(this,i,!0)},get size(){return gl(this,!0)},has(i){return ml.call(this,i,!0)},add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear"),forEach:_l(!0,!1)},r={get(i){return pl(this,i,!0,!0)},get size(){return gl(this,!0)},has(i){return ml.call(this,i,!0)},add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear"),forEach:_l(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yl(i,!1,!1),n[i]=yl(i,!0,!1),e[i]=yl(i,!1,!0),r[i]=yl(i,!0,!0)}),[t,n,e,r]}const[rA,sA,iA,oA]=nA();function Wc(t,e){const n=e?t?oA:iA:t?sA:rA;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ue(n,s)&&s in r?n:r,s,i)}const aA={get:Wc(!1,!1)},lA={get:Wc(!1,!0)},cA={get:Wc(!0,!1)},uA={get:Wc(!0,!0)},Ov=new WeakMap,Dv=new WeakMap,Nv=new WeakMap,Mv=new WeakMap;function hA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dA(t){return t.__v_skip||!Object.isExtensible(t)?0:hA(V0(t))}function ni(t){return da(t)?t:Hc(t,!1,J0,aA,Ov)}function Lv(t){return Hc(t,!1,eA,lA,Dv)}function Qd(t){return Hc(t,!0,Z0,cA,Nv)}function gi(t){return Hc(t,!0,tA,uA,Mv)}function Hc(t,e,n,r,s){if(!it(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=dA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ko(t){return da(t)?Ko(t.__v_raw):!!(t&&t.__v_isReactive)}function da(t){return!!(t&&t.__v_isReadonly)}function Zl(t){return!!(t&&t.__v_isShallow)}function Vv(t){return t?!!t.__v_raw:!1}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function fA(t){return Object.isExtensible(t)&&_v(t,"__v_skip",!0),t}const fa=t=>it(t)?ni(t):t,Yd=t=>it(t)?Qd(t):t;class Fv{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Hd(()=>e(this._value),()=>Qo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=qe(this);return(!e._cacheable||e.effect.dirty)&&hs(e._value,e._value=e.effect.run())&&Qo(e,4),Xd(e),e.effect._dirtyLevel>=2&&Qo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function pA(t,e,n=!1){let r,s;const i=Ie(t);return i?(r=t,s=En):(r=t.get,s=t.set),new Fv(r,s,i||!s,n)}function Xd(t){var e;is&&Us&&(t=qe(t),Av(Us,(e=t.dep)!=null?e:t.dep=Rv(()=>t.dep=void 0,t instanceof Fv?t:void 0)))}function Qo(t,e=4,n){t=qe(t);const r=t.dep;r&&Cv(r,e)}function kt(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return Uv(t,!1)}function Jd(t){return Uv(t,!0)}function Uv(t,e){return kt(t)?t:new mA(t,e)}class mA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:qe(e),this._value=n?e:fa(e)}get value(){return Xd(this),this._value}set value(e){const n=this.__v_isShallow||Zl(e)||da(e);e=n?e:qe(e),hs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fa(e),Qo(this,4))}}function P(t){return kt(t)?t.value:t}const gA={get:(t,e,n)=>P(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return kt(s)&&!kt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bv(t){return Ko(t)?t:new Proxy(t,gA)}class _A{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Xd(this),()=>Qo(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function yA(t){return new _A(t)}function ri(t){const e=_e(t)?new Array(t.length):{};for(const n in t)e[n]=$v(t,n);return e}class vA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return K0(qe(this._object),this._key)}}class wA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function EA(t,e,n){return kt(t)?t:Ie(t)?new wA(t):it(t)&&arguments.length>1?$v(t,e,n):fe(t)}function $v(t,e,n){const r=t[e];return kt(r)?r:new vA(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(t,e,n,r){try{return r?t(...r):t()}catch(s){zc(s,e,n)}}function Ln(t,e,n,r){if(Ie(t)){const s=os(t,e,n,r);return s&&pv(s)&&s.catch(i=>{zc(i,e,n)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ln(t[i],e,n,r));return s}}function zc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Es(),os(l,null,10,[t,o,a]),bs();return}}bA(t,n,s,r)}function bA(t,e,n,r=!0){console.error(t)}let pa=!1,Lh=!1;const Kt=[];let Kn=0;const xi=[];let Yr=null,Ds=0;const jv=Promise.resolve();let Zd=null;function Yt(t){const e=Zd||jv;return t?e.then(this?t.bind(this):t):e}function TA(t){let e=Kn+1,n=Kt.length;for(;e<n;){const r=e+n>>>1,s=Kt[r],i=ma(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ef(t){(!Kt.length||!Kt.includes(t,pa&&t.allowRecurse?Kn+1:Kn))&&(t.id==null?Kt.push(t):Kt.splice(TA(t.id),0,t),qv())}function qv(){!pa&&!Lh&&(Lh=!0,Zd=jv.then(Hv))}function IA(t){const e=Kt.indexOf(t);e>Kn&&Kt.splice(e,1)}function AA(t){_e(t)?xi.push(...t):(!Yr||!Yr.includes(t,t.allowRecurse?Ds+1:Ds))&&xi.push(t),qv()}function rg(t,e,n=pa?Kn+1:0){for(;n<Kt.length;n++){const r=Kt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Kt.splice(n,1),n--,r()}}}function Wv(t){if(xi.length){const e=[...new Set(xi)].sort((n,r)=>ma(n)-ma(r));if(xi.length=0,Yr){Yr.push(...e);return}for(Yr=e,Ds=0;Ds<Yr.length;Ds++)Yr[Ds]();Yr=null,Ds=0}}const ma=t=>t.id==null?1/0:t.id,CA=(t,e)=>{const n=ma(t)-ma(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hv(t){Lh=!1,pa=!0,Kt.sort(CA);try{for(Kn=0;Kn<Kt.length;Kn++){const e=Kt[Kn];e&&e.active!==!1&&os(e,null,14)}}finally{Kn=0,Kt.length=0,Wv(),pa=!1,Zd=null,(Kt.length||xi.length)&&Hv()}}function RA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||nt;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[h]||nt;p&&(s=n.map(g=>ft(g)?g.trim():g)),d&&(s=n.map(Oh))}let a,l=r[a=Ll(e)]||r[a=Ll(In(e))];!l&&i&&(l=r[a=Ll(ti(e))]),l&&Ln(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ln(u,t,6,s)}}function zv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Ie(t)){const l=u=>{const h=zv(u,e,!0);h&&(a=!0,xt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(it(t)&&r.set(t,null),null):(_e(i)?i.forEach(l=>o[l]=null):xt(o,i),it(t)&&r.set(t,o),o)}function Gc(t,e){return!t||!Uc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,ti(e))||Ue(t,e))}let bt=null,Gv=null;function ec(t){const e=bt;return bt=t,Gv=t&&t.type.__scopeId||null,e}function B(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mg(-1);const i=ec(e);let o;try{o=t(...s)}finally{ec(i),r._d&&mg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:_,inheritAttrs:E}=t,T=ec(t);let k,D;try{if(n.shapeFlag&4){const V=s||r,j=V;k=Gn(u.call(j,V,h,d,g,p,_)),D=a}else{const V=e;k=Gn(V.length>1?V(d,{attrs:a,slots:o,emit:l}):V(d,null)),D=e.props?a:SA(a)}}catch(V){ea.length=0,zc(V,t,1),k=ee(Ar)}let O=k;if(D&&E!==!1){const V=Object.keys(D),{shapeFlag:j}=O;V.length&&j&7&&(i&&V.some(Bd)&&(D=PA(D,i)),O=qs(O,D,!1,!0))}return n.dirs&&(O=qs(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),k=O,ec(T),k}const SA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Uc(n))&&((e||(e={}))[n]=t[n]);return e},PA=(t,e)=>{const n={};for(const r in t)(!Bd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sg(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==r[p]&&!Gc(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?sg(r,o,u):!0:!!o;return!1}function sg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gc(n,i))return!0}return!1}function kA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const OA="components";function we(t,e){return NA(OA,t,!0,e)||t}const DA=Symbol.for("v-ndc");function NA(t,e,n=!0,r=!1){const s=bt||Lt;if(s){const i=s.type;{const a=CC(i,!1);if(a&&(a===e||a===In(e)||a===jc(In(e))))return i}const o=ig(s[t]||i[t],e)||ig(s.appContext[t],e);return!o&&r?i:o}}function ig(t,e){return t&&(t[e]||t[In(e)]||t[jc(In(e))])}const MA=t=>t.__isSuspense;function LA(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):AA(t)}const VA=Symbol.for("v-scx"),FA=()=>Vn(VA);function An(t,e){return tf(t,null,e)}const vl={};function lt(t,e,n){return tf(t,e,n)}function tf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=nt){if(e&&i){const F=e;e=(...I)=>{F(...I),j()}}const l=Lt,u=F=>r===!0?F:Ns(F,r===!1?1:void 0);let h,d=!1,p=!1;if(kt(t)?(h=()=>t.value,d=Zl(t)):Ko(t)?(h=()=>u(t),d=!0):_e(t)?(p=!0,d=t.some(F=>Ko(F)||Zl(F)),h=()=>t.map(F=>{if(kt(F))return F.value;if(Ko(F))return u(F);if(Ie(F))return os(F,l,2)})):Ie(t)?e?h=()=>os(t,l,2):h=()=>(g&&g(),Ln(t,l,3,[_])):h=En,e&&r){const F=h;h=()=>Ns(F())}let g,_=F=>{g=O.onStop=()=>{os(F,l,4),g=O.onStop=void 0}},E;if(Yc)if(_=En,e?n&&Ln(e,l,3,[h(),p?[]:void 0,_]):h(),s==="sync"){const F=FA();E=F.__watcherHandles||(F.__watcherHandles=[])}else return En;let T=p?new Array(t.length).fill(vl):vl;const k=()=>{if(!(!O.active||!O.dirty))if(e){const F=O.run();(r||d||(p?F.some((I,w)=>hs(I,T[w])):hs(F,T)))&&(g&&g(),Ln(e,l,3,[F,T===vl?void 0:p&&T[0]===vl?[]:T,_]),T=F)}else O.run()};k.allowRecurse=!!e;let D;s==="sync"?D=k:s==="post"?D=()=>an(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),D=()=>ef(k));const O=new Hd(h,En,D),V=Wd(),j=()=>{O.stop(),V&&$d(V.effects,O)};return e?n?k():T=O.run():s==="post"?an(O.run.bind(O),l&&l.suspense):O.run(),E&&E.push(j),j}function UA(t,e,n){const r=this.proxy,s=ft(t)?t.includes(".")?Kv(r,t):()=>r[t]:t.bind(r,r);let i;Ie(e)?i=e:(i=e.handler,n=e);const o=Na(this),a=tf(s,i.bind(r),n);return o(),a}function Kv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ns(t,e=1/0,n){if(e<=0||!it(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))Ns(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)Ns(t[r],e,n);else if(fv(t)||Pi(t))t.forEach(r=>{Ns(r,e,n)});else if(gv(t))for(const r in t)Ns(t[r],e,n);return t}function BA(t,e){if(bt===null)return t;const n=Xc(bt)||bt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=nt]=e[s];i&&(Ie(i)&&(i={mounted:i,updated:i}),i.deep&&Ns(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ps(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Es(),Ln(l,n,8,[t.el,a,t,e]),bs())}}/*! #__NO_SIDE_EFFECTS__ */function he(t,e){return Ie(t)?xt({name:t.name},e,{setup:t}):t}const Yo=t=>!!t.type.__asyncLoader,Qv=t=>t.type.__isKeepAlive;function $A(t,e){Yv(t,"a",e)}function jA(t,e){Yv(t,"da",e)}function Yv(t,e,n=Lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qv(s.parent.vnode)&&qA(r,e,n,s),s=s.parent}}function qA(t,e,n,r){const s=Kc(e,t,r,!0);eo(()=>{$d(r[e],s)},n)}function Kc(t,e,n=Lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Es();const a=Na(n),l=Ln(e,n,t,o);return a(),bs(),l});return r?s.unshift(i):s.push(i),i}}const Dr=t=>(e,n=Lt)=>(!Yc||t==="sp")&&Kc(t,(...r)=>e(...r),n),WA=Dr("bm"),ar=Dr("m"),Xv=Dr("bu"),Jv=Dr("u"),Zv=Dr("bum"),eo=Dr("um"),HA=Dr("sp"),zA=Dr("rtg"),GA=Dr("rtc");function KA(t,e=Lt){Kc("ec",t,e)}function QA(t,e,n,r){let s;const i=n;if(_e(t)||ft(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(it(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function X(t,e,n={},r,s){if(bt.isCE||bt.parent&&Yo(bt.parent)&&bt.parent.isCE)return ee("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),W();const o=i&&ew(i(n)),a=Y(nn,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ew(t){return t.some(e=>nc(e)?!(e.type===Ar||e.type===nn&&!ew(e.children)):!0)?t:null}const Vh=t=>t?gw(t)?Xc(t)||t.proxy:Vh(t.parent):null,Xo=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vh(t.parent),$root:t=>Vh(t.root),$emit:t=>t.emit,$options:t=>nf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ef(t.update)}),$nextTick:t=>t.n||(t.n=Yt.bind(t.proxy)),$watch:t=>UA.bind(t)}),Yu=(t,e)=>t!==nt&&!t.__isScriptSetup&&Ue(t,e),YA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yu(r,e))return o[e]=1,r[e];if(s!==nt&&Ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ue(u,e))return o[e]=3,i[e];if(n!==nt&&Ue(n,e))return o[e]=4,n[e];Uh&&(o[e]=0)}}const h=Xo[e];let d,p;if(h)return e==="$attrs"&&ln(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==nt&&Ue(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ue(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yu(s,e)?(s[e]=n,!0):r!==nt&&Ue(r,e)?(r[e]=n,!0):Ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==nt&&Ue(t,o)||Yu(e,o)||(a=i[0])&&Ue(a,o)||Ue(r,o)||Ue(Xo,o)||Ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fh(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function tw(t,e){const n=Fh(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?_e(s)||Ie(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}let Uh=!0;function XA(t){const e=nf(t),n=t.proxy,r=t.ctx;Uh=!1,e.beforeCreate&&og(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:_,activated:E,deactivated:T,beforeDestroy:k,beforeUnmount:D,destroyed:O,unmounted:V,render:j,renderTracked:F,renderTriggered:I,errorCaptured:w,serverPrefetch:A,expose:v,inheritAttrs:R,components:S,directives:C,filters:ye}=e;if(u&&JA(u,r,null),o)for(const ve in o){const Ce=o[ve];Ie(Ce)&&(r[ve]=Ce.bind(n))}if(s){const ve=s.call(n,n);it(ve)&&(t.data=ni(ve))}if(Uh=!0,i)for(const ve in i){const Ce=i[ve],Et=Ie(Ce)?Ce.bind(n,n):Ie(Ce.get)?Ce.get.bind(n,n):En,on=!Ie(Ce)&&Ie(Ce.set)?Ce.set.bind(n):En,At=ue({get:Et,set:on});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>At.value,set:ze=>At.value=ze})}if(a)for(const ve in a)nw(a[ve],r,n,ve);if(l){const ve=Ie(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(Ce=>{ki(Ce,ve[Ce])})}h&&og(h,t,"c");function Re(ve,Ce){_e(Ce)?Ce.forEach(Et=>ve(Et.bind(n))):Ce&&ve(Ce.bind(n))}if(Re(WA,d),Re(ar,p),Re(Xv,g),Re(Jv,_),Re($A,E),Re(jA,T),Re(KA,w),Re(GA,F),Re(zA,I),Re(Zv,D),Re(eo,V),Re(HA,A),_e(v))if(v.length){const ve=t.exposed||(t.exposed={});v.forEach(Ce=>{Object.defineProperty(ve,Ce,{get:()=>n[Ce],set:Et=>n[Ce]=Et})})}else t.exposed||(t.exposed={});j&&t.render===En&&(t.render=j),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),C&&(t.directives=C)}function JA(t,e,n=En){_e(t)&&(t=Bh(t));for(const r in t){const s=t[r];let i;it(s)?"default"in s?i=Vn(s.from||r,s.default,!0):i=Vn(s.from||r):i=Vn(s),kt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function og(t,e,n){Ln(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nw(t,e,n,r){const s=r.includes(".")?Kv(n,r):()=>n[r];if(ft(t)){const i=e[t];Ie(i)&&lt(s,i)}else if(Ie(t))lt(s,t.bind(n));else if(it(t))if(_e(t))t.forEach(i=>nw(i,e,n,r));else{const i=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(i)&&lt(s,i,t)}}function nf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>tc(l,u,o,!0)),tc(l,e,o)),it(e)&&i.set(e,l),l}function tc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&tc(t,i,n,!0),s&&s.forEach(o=>tc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ZA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ZA={data:ag,props:lg,emits:lg,methods:$o,computed:$o,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:$o,directives:$o,watch:tC,provide:ag,inject:eC};function ag(t,e){return e?t?function(){return xt(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function eC(t,e){return $o(Bh(t),Bh(e))}function Bh(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function $o(t,e){return t?xt(Object.create(null),t,e):e}function lg(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:xt(Object.create(null),Fh(t),Fh(e??{})):e}function tC(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const r in e)n[r]=tn(t[r],e[r]);return n}function rw(){return{app:null,config:{isNativeTag:M0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nC=0;function rC(t,e){return function(r,s=null){Ie(r)||(r=xt({},r)),s!=null&&!it(s)&&(s=null);const i=rw(),o=new WeakSet;let a=!1;const l=i.app={_uid:nC++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:SC,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ie(u.install)?(o.add(u),u.install(l,...h)):Ie(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,d){if(!a){const p=ee(r,s);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),a=!0,l._container=u,u.__vue_app__=l,Xc(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=Jo;Jo=l;try{return u()}finally{Jo=h}}};return l}}let Jo=null;function ki(t,e){if(Lt){let n=Lt.provides;const r=Lt.parent&&Lt.parent.provides;r===n&&(n=Lt.provides=Object.create(r)),n[t]=e}}function Vn(t,e,n=!1){const r=Lt||bt;if(r||Jo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Jo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ie(e)?e.call(r&&r.proxy):e}}const sw={},iw=()=>Object.create(sw),ow=t=>Object.getPrototypeOf(t)===sw;function sC(t,e,n,r=!1){const s={},i=iw();t.propsDefaults=Object.create(null),aw(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iC(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=qe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(Gc(t.emitsOptions,p))continue;const g=e[p];if(l)if(Ue(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=In(p);s[_]=$h(l,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{aw(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ue(e,d)&&((h=ti(d))===d||!Ue(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=$h(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ue(e,d))&&(delete i[d],u=!0)}u&&Er(t.attrs,"set","")}function aw(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Go(l))continue;const u=e[l];let h;s&&Ue(s,h=In(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Gc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=qe(n),u=a||nt;for(let h=0;h<i.length;h++){const d=i[h];n[d]=$h(s,l,d,u[d],t,!Ue(u,d))}}return o}function $h(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ue(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Na(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ti(n))&&(r=!0))}return r}function lw(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Ie(t)){const h=d=>{l=!0;const[p,g]=lw(d,e,!0);xt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return it(t)&&r.set(t,Si),Si;if(_e(i))for(let h=0;h<i.length;h++){const d=In(i[h]);cg(d)&&(o[d]=nt)}else if(i)for(const h in i){const d=In(h);if(cg(d)){const p=i[h],g=o[d]=_e(p)||Ie(p)?{type:p}:xt({},p);if(g){const _=dg(Boolean,g.type),E=dg(String,g.type);g[0]=_>-1,g[1]=E<0||_<E,(_>-1||Ue(g,"default"))&&a.push(d)}}}const u=[o,a];return it(t)&&r.set(t,u),u}function cg(t){return t[0]!=="$"&&!Go(t)}function ug(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function hg(t,e){return ug(t)===ug(e)}function dg(t,e){return _e(e)?e.findIndex(n=>hg(n,t)):Ie(e)&&hg(e,t)?0:-1}const cw=t=>t[0]==="_"||t==="$stable",rf=t=>_e(t)?t.map(Gn):[Gn(t)],oC=(t,e,n)=>{if(e._n)return e;const r=B((...s)=>rf(e(...s)),n);return r._c=!1,r},uw=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cw(s))continue;const i=t[s];if(Ie(i))e[s]=oC(s,i,r);else if(i!=null){const o=rf(i);e[s]=()=>o}}},hw=(t,e)=>{const n=rf(e);t.slots.default=()=>n},aC=(t,e)=>{const n=t.slots=iw();if(t.vnode.shapeFlag&32){const r=e._;r?(xt(n,e),_v(n,"_",r,!0)):uw(e,n)}else e&&hw(t,e)},lC=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=nt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(xt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,uw(e,s)),o=e}else e&&(hw(t,e),o={default:1});if(i)for(const a in s)!cw(a)&&o[a]==null&&delete s[a]};function jh(t,e,n,r,s=!1){if(_e(t)){t.forEach((p,g)=>jh(p,e&&(_e(e)?e[g]:e),n,r,s));return}if(Yo(r)&&!s)return;const i=r.shapeFlag&4?Xc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===nt?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==l&&(ft(u)?(h[u]=null,Ue(d,u)&&(d[u]=null)):kt(u)&&(u.value=null)),Ie(l))os(l,a,12,[o,h]);else{const p=ft(l),g=kt(l);if(p||g){const _=()=>{if(t.f){const E=p?Ue(d,l)?d[l]:h[l]:l.value;s?_e(E)&&$d(E,i):_e(E)?E.includes(i)||E.push(i):p?(h[l]=[i],Ue(d,l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,Ue(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(_.id=-1,an(_,n)):_()}}}const an=LA;function cC(t){return uC(t)}function uC(t,e){const n=yv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=En,insertStaticContent:_}=t,E=(b,x,M,q=null,U=null,Q=null,te=void 0,K=null,J=!!x.dynamicChildren)=>{if(b===x)return;b&&!Oo(b,x)&&(q=$(b),ze(b,U,Q,!0),b=null),x.patchFlag===-2&&(J=!1,x.dynamicChildren=null);const{type:G,ref:se,shapeFlag:pe}=x;switch(G){case Qc:T(b,x,M,q);break;case Ar:k(b,x,M,q);break;case Ju:b==null&&D(x,M,q,te);break;case nn:S(b,x,M,q,U,Q,te,K,J);break;default:pe&1?j(b,x,M,q,U,Q,te,K,J):pe&6?C(b,x,M,q,U,Q,te,K,J):(pe&64||pe&128)&&G.process(b,x,M,q,U,Q,te,K,J,ae)}se!=null&&U&&jh(se,b&&b.ref,Q,x||b,!x)},T=(b,x,M,q)=>{if(b==null)r(x.el=a(x.children),M,q);else{const U=x.el=b.el;x.children!==b.children&&u(U,x.children)}},k=(b,x,M,q)=>{b==null?r(x.el=l(x.children||""),M,q):x.el=b.el},D=(b,x,M,q)=>{[b.el,b.anchor]=_(b.children,x,M,q,b.el,b.anchor)},O=({el:b,anchor:x},M,q)=>{let U;for(;b&&b!==x;)U=p(b),r(b,M,q),b=U;r(x,M,q)},V=({el:b,anchor:x})=>{let M;for(;b&&b!==x;)M=p(b),s(b),b=M;s(x)},j=(b,x,M,q,U,Q,te,K,J)=>{x.type==="svg"?te="svg":x.type==="math"&&(te="mathml"),b==null?F(x,M,q,U,Q,te,K,J):A(b,x,U,Q,te,K,J)},F=(b,x,M,q,U,Q,te,K)=>{let J,G;const{props:se,shapeFlag:pe,transition:de,dirs:ce}=b;if(J=b.el=o(b.type,Q,se&&se.is,se),pe&8?h(J,b.children):pe&16&&w(b.children,J,null,q,U,Xu(b,Q),te,K),ce&&Ps(b,null,q,"created"),I(J,b,b.scopeId,te,q),se){for(const Fe in se)Fe!=="value"&&!Go(Fe)&&i(J,Fe,null,se[Fe],Q,b.children,q,U,Ct);"value"in se&&i(J,"value",null,se.value,Q),(G=se.onVnodeBeforeMount)&&zn(G,q,b)}ce&&Ps(b,null,q,"beforeMount");const ge=hC(U,de);ge&&de.beforeEnter(J),r(J,x,M),((G=se&&se.onVnodeMounted)||ge||ce)&&an(()=>{G&&zn(G,q,b),ge&&de.enter(J),ce&&Ps(b,null,q,"mounted")},U)},I=(b,x,M,q,U)=>{if(M&&g(b,M),q)for(let Q=0;Q<q.length;Q++)g(b,q[Q]);if(U){let Q=U.subTree;if(x===Q){const te=U.vnode;I(b,te,te.scopeId,te.slotScopeIds,U.parent)}}},w=(b,x,M,q,U,Q,te,K,J=0)=>{for(let G=J;G<b.length;G++){const se=b[G]=K?Xr(b[G]):Gn(b[G]);E(null,se,x,M,q,U,Q,te,K)}},A=(b,x,M,q,U,Q,te)=>{const K=x.el=b.el;let{patchFlag:J,dynamicChildren:G,dirs:se}=x;J|=b.patchFlag&16;const pe=b.props||nt,de=x.props||nt;let ce;if(M&&xs(M,!1),(ce=de.onVnodeBeforeUpdate)&&zn(ce,M,x,b),se&&Ps(x,b,M,"beforeUpdate"),M&&xs(M,!0),G?v(b.dynamicChildren,G,K,M,q,Xu(x,U),Q):te||Ce(b,x,K,null,M,q,Xu(x,U),Q,!1),J>0){if(J&16)R(K,x,pe,de,M,q,U);else if(J&2&&pe.class!==de.class&&i(K,"class",null,de.class,U),J&4&&i(K,"style",pe.style,de.style,U),J&8){const ge=x.dynamicProps;for(let Fe=0;Fe<ge.length;Fe++){const Qe=ge[Fe],ht=pe[Qe],un=de[Qe];(un!==ht||Qe==="value")&&i(K,Qe,ht,un,U,b.children,M,q,Ct)}}J&1&&b.children!==x.children&&h(K,x.children)}else!te&&G==null&&R(K,x,pe,de,M,q,U);((ce=de.onVnodeUpdated)||se)&&an(()=>{ce&&zn(ce,M,x,b),se&&Ps(x,b,M,"updated")},q)},v=(b,x,M,q,U,Q,te)=>{for(let K=0;K<x.length;K++){const J=b[K],G=x[K],se=J.el&&(J.type===nn||!Oo(J,G)||J.shapeFlag&70)?d(J.el):M;E(J,G,se,null,q,U,Q,te,!0)}},R=(b,x,M,q,U,Q,te)=>{if(M!==q){if(M!==nt)for(const K in M)!Go(K)&&!(K in q)&&i(b,K,M[K],null,te,x.children,U,Q,Ct);for(const K in q){if(Go(K))continue;const J=q[K],G=M[K];J!==G&&K!=="value"&&i(b,K,G,J,te,x.children,U,Q,Ct)}"value"in q&&i(b,"value",M.value,q.value,te)}},S=(b,x,M,q,U,Q,te,K,J)=>{const G=x.el=b?b.el:a(""),se=x.anchor=b?b.anchor:a("");let{patchFlag:pe,dynamicChildren:de,slotScopeIds:ce}=x;ce&&(K=K?K.concat(ce):ce),b==null?(r(G,M,q),r(se,M,q),w(x.children||[],M,se,U,Q,te,K,J)):pe>0&&pe&64&&de&&b.dynamicChildren?(v(b.dynamicChildren,de,M,U,Q,te,K),(x.key!=null||U&&x===U.subTree)&&sf(b,x,!0)):Ce(b,x,M,se,U,Q,te,K,J)},C=(b,x,M,q,U,Q,te,K,J)=>{x.slotScopeIds=K,b==null?x.shapeFlag&512?U.ctx.activate(x,M,q,te,J):ye(x,M,q,U,Q,te,J):$e(b,x,J)},ye=(b,x,M,q,U,Q,te)=>{const K=b.component=EC(b,q,U);if(Qv(b)&&(K.ctx.renderer=ae),bC(K),K.asyncDep){if(U&&U.registerDep(K,Re),!b.el){const J=K.subTree=ee(Ar);k(null,J,x,M)}}else Re(K,b,x,M,U,Q,te)},$e=(b,x,M)=>{const q=x.component=b.component;if(xA(b,x,M))if(q.asyncDep&&!q.asyncResolved){ve(q,x,M);return}else q.next=x,IA(q.update),q.effect.dirty=!0,q.update();else x.el=b.el,q.vnode=x},Re=(b,x,M,q,U,Q,te)=>{const K=()=>{if(b.isMounted){let{next:se,bu:pe,u:de,parent:ce,vnode:ge}=b;{const yn=dw(b);if(yn){se&&(se.el=ge.el,ve(b,se,te)),yn.asyncDep.then(()=>{b.isUnmounted||K()});return}}let Fe=se,Qe;xs(b,!1),se?(se.el=ge.el,ve(b,se,te)):se=ge,pe&&Vl(pe),(Qe=se.props&&se.props.onVnodeBeforeUpdate)&&zn(Qe,ce,se,ge),xs(b,!0);const ht=Qu(b),un=b.subTree;b.subTree=ht,E(un,ht,d(un.el),$(un),b,U,Q),se.el=ht.el,Fe===null&&kA(b,ht.el),de&&an(de,U),(Qe=se.props&&se.props.onVnodeUpdated)&&an(()=>zn(Qe,ce,se,ge),U)}else{let se;const{el:pe,props:de}=x,{bm:ce,m:ge,parent:Fe}=b,Qe=Yo(x);if(xs(b,!1),ce&&Vl(ce),!Qe&&(se=de&&de.onVnodeBeforeMount)&&zn(se,Fe,x),xs(b,!0),pe&&Ke){const ht=()=>{b.subTree=Qu(b),Ke(pe,b.subTree,b,U,null)};Qe?x.type.__asyncLoader().then(()=>!b.isUnmounted&&ht()):ht()}else{const ht=b.subTree=Qu(b);E(null,ht,M,q,b,U,Q),x.el=ht.el}if(ge&&an(ge,U),!Qe&&(se=de&&de.onVnodeMounted)){const ht=x;an(()=>zn(se,Fe,ht),U)}(x.shapeFlag&256||Fe&&Yo(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&b.a&&an(b.a,U),b.isMounted=!0,x=M=q=null}},J=b.effect=new Hd(K,En,()=>ef(G),b.scope),G=b.update=()=>{J.dirty&&J.run()};G.id=b.uid,xs(b,!0),G()},ve=(b,x,M)=>{x.component=b;const q=b.vnode.props;b.vnode=x,b.next=null,iC(b,x.props,q,M),lC(b,x.children,M),Es(),rg(b),bs()},Ce=(b,x,M,q,U,Q,te,K,J=!1)=>{const G=b&&b.children,se=b?b.shapeFlag:0,pe=x.children,{patchFlag:de,shapeFlag:ce}=x;if(de>0){if(de&128){on(G,pe,M,q,U,Q,te,K,J);return}else if(de&256){Et(G,pe,M,q,U,Q,te,K,J);return}}ce&8?(se&16&&Ct(G,U,Q),pe!==G&&h(M,pe)):se&16?ce&16?on(G,pe,M,q,U,Q,te,K,J):Ct(G,U,Q,!0):(se&8&&h(M,""),ce&16&&w(pe,M,q,U,Q,te,K,J))},Et=(b,x,M,q,U,Q,te,K,J)=>{b=b||Si,x=x||Si;const G=b.length,se=x.length,pe=Math.min(G,se);let de;for(de=0;de<pe;de++){const ce=x[de]=J?Xr(x[de]):Gn(x[de]);E(b[de],ce,M,null,U,Q,te,K,J)}G>se?Ct(b,U,Q,!0,!1,pe):w(x,M,q,U,Q,te,K,J,pe)},on=(b,x,M,q,U,Q,te,K,J)=>{let G=0;const se=x.length;let pe=b.length-1,de=se-1;for(;G<=pe&&G<=de;){const ce=b[G],ge=x[G]=J?Xr(x[G]):Gn(x[G]);if(Oo(ce,ge))E(ce,ge,M,null,U,Q,te,K,J);else break;G++}for(;G<=pe&&G<=de;){const ce=b[pe],ge=x[de]=J?Xr(x[de]):Gn(x[de]);if(Oo(ce,ge))E(ce,ge,M,null,U,Q,te,K,J);else break;pe--,de--}if(G>pe){if(G<=de){const ce=de+1,ge=ce<se?x[ce].el:q;for(;G<=de;)E(null,x[G]=J?Xr(x[G]):Gn(x[G]),M,ge,U,Q,te,K,J),G++}}else if(G>de)for(;G<=pe;)ze(b[G],U,Q,!0),G++;else{const ce=G,ge=G,Fe=new Map;for(G=ge;G<=de;G++){const Zt=x[G]=J?Xr(x[G]):Gn(x[G]);Zt.key!=null&&Fe.set(Zt.key,G)}let Qe,ht=0;const un=de-ge+1;let yn=!1,yo=0;const Br=new Array(un);for(G=0;G<un;G++)Br[G]=0;for(G=ce;G<=pe;G++){const Zt=b[G];if(ht>=un){ze(Zt,U,Q,!0);continue}let vn;if(Zt.key!=null)vn=Fe.get(Zt.key);else for(Qe=ge;Qe<=de;Qe++)if(Br[Qe-ge]===0&&Oo(Zt,x[Qe])){vn=Qe;break}vn===void 0?ze(Zt,U,Q,!0):(Br[vn-ge]=G+1,vn>=yo?yo=vn:yn=!0,E(Zt,x[vn],M,null,U,Q,te,K,J),ht++)}const ui=yn?dC(Br):Si;for(Qe=ui.length-1,G=un-1;G>=0;G--){const Zt=ge+G,vn=x[Zt],hi=Zt+1<se?x[Zt+1].el:q;Br[G]===0?E(null,vn,M,hi,U,Q,te,K,J):yn&&(Qe<0||G!==ui[Qe]?At(vn,M,hi,2):Qe--)}}},At=(b,x,M,q,U=null)=>{const{el:Q,type:te,transition:K,children:J,shapeFlag:G}=b;if(G&6){At(b.component.subTree,x,M,q);return}if(G&128){b.suspense.move(x,M,q);return}if(G&64){te.move(b,x,M,ae);return}if(te===nn){r(Q,x,M);for(let pe=0;pe<J.length;pe++)At(J[pe],x,M,q);r(b.anchor,x,M);return}if(te===Ju){O(b,x,M);return}if(q!==2&&G&1&&K)if(q===0)K.beforeEnter(Q),r(Q,x,M),an(()=>K.enter(Q),U);else{const{leave:pe,delayLeave:de,afterLeave:ce}=K,ge=()=>r(Q,x,M),Fe=()=>{pe(Q,()=>{ge(),ce&&ce()})};de?de(Q,ge,Fe):Fe()}else r(Q,x,M)},ze=(b,x,M,q=!1,U=!1)=>{const{type:Q,props:te,ref:K,children:J,dynamicChildren:G,shapeFlag:se,patchFlag:pe,dirs:de}=b;if(K!=null&&jh(K,null,M,b,!0),se&256){x.ctx.deactivate(b);return}const ce=se&1&&de,ge=!Yo(b);let Fe;if(ge&&(Fe=te&&te.onVnodeBeforeUnmount)&&zn(Fe,x,b),se&6)Hn(b.component,M,q);else{if(se&128){b.suspense.unmount(M,q);return}ce&&Ps(b,null,x,"beforeUnmount"),se&64?b.type.remove(b,x,M,U,ae,q):G&&(Q!==nn||pe>0&&pe&64)?Ct(G,x,M,!1,!0):(Q===nn&&pe&384||!U&&se&16)&&Ct(J,x,M),q&&at(b)}(ge&&(Fe=te&&te.onVnodeUnmounted)||ce)&&an(()=>{Fe&&zn(Fe,x,b),ce&&Ps(b,null,x,"unmounted")},M)},at=b=>{const{type:x,el:M,anchor:q,transition:U}=b;if(x===nn){Ur(M,q);return}if(x===Ju){V(b);return}const Q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:te,delayLeave:K}=U,J=()=>te(M,Q);K?K(b.el,Q,J):J()}else Q()},Ur=(b,x)=>{let M;for(;b!==x;)M=p(b),s(b),b=M;s(x)},Hn=(b,x,M)=>{const{bum:q,scope:U,update:Q,subTree:te,um:K}=b;q&&Vl(q),U.stop(),Q&&(Q.active=!1,ze(te,b,x,M)),K&&an(K,x),an(()=>{b.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Ct=(b,x,M,q=!1,U=!1,Q=0)=>{for(let te=Q;te<b.length;te++)ze(b[te],x,M,q,U)},$=b=>b.shapeFlag&6?$(b.component.subTree):b.shapeFlag&128?b.suspense.next():p(b.anchor||b.el);let ie=!1;const re=(b,x,M)=>{b==null?x._vnode&&ze(x._vnode,null,null,!0):E(x._vnode||null,b,x,null,null,null,M),ie||(ie=!0,rg(),Wv(),ie=!1),x._vnode=b},ae={p:E,um:ze,m:At,r:at,mt:ye,mc:w,pc:Ce,pbc:v,n:$,o:t};let Ne,Ke;return{render:re,hydrate:Ne,createApp:rC(re,Ne)}}function Xu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hC(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sf(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Xr(s[i]),a.el=o.el),n||sf(o,a)),a.type===Qc&&(a.el=o.el)}}function dC(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dw(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dw(e)}const fC=t=>t.__isTeleport,Zo=t=>t&&(t.disabled||t.disabled===""),fg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,pg=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,qh=(t,e)=>{const n=t&&t.to;return ft(n)?e?e(n):null:n},pC={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:p,o:{insert:g,querySelector:_,createText:E,createComment:T}}=u,k=Zo(e.props);let{shapeFlag:D,children:O,dynamicChildren:V}=e;if(t==null){const j=e.el=E(""),F=e.anchor=E("");g(j,n,r),g(F,n,r);const I=e.target=qh(e.props,_),w=e.targetAnchor=E("");I&&(g(w,I),o==="svg"||fg(I)?o="svg":(o==="mathml"||pg(I))&&(o="mathml"));const A=(v,R)=>{D&16&&h(O,v,R,s,i,o,a,l)};k?A(n,F):I&&A(I,w)}else{e.el=t.el;const j=e.anchor=t.anchor,F=e.target=t.target,I=e.targetAnchor=t.targetAnchor,w=Zo(t.props),A=w?n:F,v=w?j:I;if(o==="svg"||fg(F)?o="svg":(o==="mathml"||pg(F))&&(o="mathml"),V?(p(t.dynamicChildren,V,A,s,i,o,a),sf(t,e,!0)):l||d(t,e,A,v,s,i,o,a,!1),k)w?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):wl(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=qh(e.props,_);R&&wl(e,R,null,u,0)}else w&&wl(e,F,I,u,1)}fw(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:h,target:d,props:p}=t;if(d&&i(h),o&&i(u),a&16){const g=o||!Zo(p);for(let _=0;_<l.length;_++){const E=l[_];s(E,e,n,g,!!E.dynamicChildren)}}},move:wl,hydrate:mC};function wl(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),(!d||Zo(h))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);d&&r(a,e,n)}function mC(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const h=e.target=qh(e.props,l);if(h){const d=h._lpa||h.firstChild;if(e.shapeFlag&16)if(Zo(e.props))e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=d;else{e.anchor=o(t);let p=d;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){e.targetAnchor=p,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(d,e,h,n,r,s,i)}fw(e)}return e.anchor&&o(e.anchor)}const gC=pC;function fw(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const nn=Symbol.for("v-fgt"),Qc=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),Ju=Symbol.for("v-stc"),ea=[];let kn=null;function W(t=!1){ea.push(kn=t?null:[])}function _C(){ea.pop(),kn=ea[ea.length-1]||null}let ga=1;function mg(t){ga+=t}function pw(t){return t.dynamicChildren=ga>0?kn||Si:null,_C(),ga>0&&kn&&kn.push(t),t}function Je(t,e,n,r,s,i){return pw(yt(t,e,n,r,s,i,!0))}function Y(t,e,n,r,s){return pw(ee(t,e,n,r,s,!0))}function nc(t){return t?t.__v_isVNode===!0:!1}function Oo(t,e){return t.type===e.type&&t.key===e.key}const mw=({key:t})=>t??null,Fl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||kt(t)||Ie(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function yt(t,e=null,n=null,r=0,s=null,i=t===nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mw(e),ref:e&&Fl(e),scopeId:Gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return a?(of(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ft(n)?8:16),ga>0&&!o&&kn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kn.push(l),l}const ee=yC;function yC(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===DA)&&(t=Ar),nc(t)){const a=qs(t,e,!0);return n&&of(a,n),ga>0&&!i&&kn&&(a.shapeFlag&6?kn[kn.indexOf(t)]=a:kn.push(a)),a.patchFlag|=-2,a}if(RC(t)&&(t=t.__vccOpts),e){e=It(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=sn(a)),it(l)&&(Vv(l)&&!_e(l)&&(l=xt({},l)),e.style=ws(l))}const o=ft(t)?1:MA(t)?128:fC(t)?64:it(t)?4:Ie(t)?2:0;return yt(t,e,n,r,s,o,i,!0)}function It(t){return t?Vv(t)||ow(t)?xt({},t):t:null}function qs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Pe(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&mw(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(Fl(e)):[i,Fl(e)]:Fl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qs(t.ssContent),ssFallback:t.ssFallback&&qs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(h.transition=l.clone(h)),h}function dt(t=" ",e=0){return ee(Qc,null,t,e)}function mn(t="",e=!1){return e?(W(),Y(Ar,null,t)):ee(Ar,null,t)}function Gn(t){return t==null||typeof t=="boolean"?ee(Ar):_e(t)?ee(nn,null,t.slice()):typeof t=="object"?Xr(t):ee(Qc,null,String(t))}function Xr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qs(t)}function of(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),of(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ow(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pe(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sn([e.class,r.class]));else if(s==="style")e.style=ws([e.style,r.style]);else if(Uc(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zn(t,e,n,r=null){Ln(t,e,7,[n,r])}const vC=rw();let wC=0;function EC(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vC,i={uid:wC++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ev(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lw(r,s),emitsOptions:zv(r,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:r.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=RA.bind(null,i),t.ce&&t.ce(i),i}let Lt=null;const Ts=()=>Lt||bt;let rc,Wh;{const t=yv(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};rc=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),Wh=e("__VUE_SSR_SETTERS__",n=>Yc=n)}const Na=t=>{const e=Lt;return rc(t),t.scope.on(),()=>{t.scope.off(),rc(e)}},gg=()=>{Lt&&Lt.scope.off(),rc(null)};function gw(t){return t.vnode.shapeFlag&4}let Yc=!1;function bC(t,e=!1){e&&Wh(e);const{props:n,children:r}=t.vnode,s=gw(t);sC(t,n,s,e),aC(t,r);const i=s?TC(t,e):void 0;return e&&Wh(!1),i}function TC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,YA);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?AC(t):null,i=Na(t);Es();const o=os(r,t,0,[t.props,s]);if(bs(),i(),pv(o)){if(o.then(gg,gg),e)return o.then(a=>{_g(t,a,e)}).catch(a=>{zc(a,t,0)});t.asyncDep=o}else _g(t,o,e)}else _w(t,e)}function _g(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:it(e)&&(t.setupState=Bv(e)),_w(t,n)}let yg;function _w(t,e,n){const r=t.type;if(!t.render){if(!e&&yg&&!r.render){const s=r.template||nf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=xt(xt({isCustomElement:i,delimiters:a},o),l);r.render=yg(s,u)}}t.render=r.render||En}{const s=Na(t);Es();try{XA(t)}finally{bs(),s()}}}const IC={get(t,e){return ln(t,"get",""),t[e]}};function AC(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,IC),slots:t.slots,emit:t.emit,expose:e}}function Xc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bv(fA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xo)return Xo[n](t)},has(e,n){return n in e||n in Xo}}))}function CC(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function RC(t){return Ie(t)&&"__vccOpts"in t}const ue=(t,e)=>pA(t,e,Yc);function br(t,e,n){const r=arguments.length;return r===2?it(e)&&!_e(e)?nc(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nc(n)&&(n=[n]),ee(t,e,n))}const SC="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const PC="http://www.w3.org/2000/svg",xC="http://www.w3.org/1998/Math/MathML",Jr=typeof document<"u"?document:null,vg=Jr&&Jr.createElement("template"),kC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Jr.createElementNS(PC,t):e==="mathml"?Jr.createElementNS(xC,t):Jr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jr.createTextNode(t),createComment:t=>Jr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vg.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=vg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},OC=Symbol("_vtc");function DC(t,e,n){const r=t[OC];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wg=Symbol("_vod"),NC=Symbol("_vsh"),MC=Symbol(""),LC=/(^|;)\s*display\s*:/;function VC(t,e,n){const r=t.style,s=ft(n);let i=!1;if(n&&!s){if(e)if(ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ul(r,a,"")}else for(const o in e)n[o]==null&&Ul(r,o,"");for(const o in n)o==="display"&&(i=!0),Ul(r,o,n[o])}else if(s){if(e!==n){const o=r[MC];o&&(n+=";"+o),r.cssText=n,i=LC.test(n)}}else e&&t.removeAttribute("style");wg in t&&(t[wg]=i?r.display:"",t[NC]&&(r.display="none"))}const Eg=/\s*!important$/;function Ul(t,e,n){if(_e(n))n.forEach(r=>Ul(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=FC(t,e);Eg.test(n)?t.setProperty(ti(r),n.replace(Eg,""),"important"):t[r]=n}}const bg=["Webkit","Moz","ms"],Zu={};function FC(t,e){const n=Zu[e];if(n)return n;let r=In(e);if(r!=="filter"&&r in t)return Zu[e]=r;r=jc(r);for(let s=0;s<bg.length;s++){const i=bg[s]+r;if(i in t)return Zu[e]=i}return e}const Tg="http://www.w3.org/1999/xlink";function UC(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Tg,e.slice(6,e.length)):t.setAttributeNS(Tg,e,n);else{const i=H0(e);n==null||i&&!vv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function BC(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?t.getAttribute("value")||"":t.value,h=n??"";(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=vv(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ei(t,e,n,r){t.addEventListener(e,n,r)}function $C(t,e,n,r){t.removeEventListener(e,n,r)}const Ig=Symbol("_vei");function jC(t,e,n,r,s=null){const i=t[Ig]||(t[Ig]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=qC(e);if(r){const u=i[e]=zC(r,s);Ei(t,a,u,l)}else o&&($C(t,a,o,l),i[e]=void 0)}}const Ag=/(?:Once|Passive|Capture)$/;function qC(t){let e;if(Ag.test(t)){e={};let r;for(;r=t.match(Ag);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ti(t.slice(2)),e]}let eh=0;const WC=Promise.resolve(),HC=()=>eh||(WC.then(()=>eh=0),eh=Date.now());function zC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ln(GC(r,n.value),e,5,[r])};return n.value=t,n.attached=HC(),n}function GC(t,e){if(_e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Cg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,KC=(t,e,n,r,s,i,o,a,l)=>{const u=s==="svg";e==="class"?DC(t,r,u):e==="style"?VC(t,n,r):Uc(e)?Bd(e)||jC(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):QC(t,e,r,u))?BC(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),UC(t,e,r,u))};function QC(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cg(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cg(e)&&ft(n)?!1:e in t}const Rg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>Vl(e,n):e};function YC(t){t.target.composing=!0}function Sg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const th=Symbol("_assign"),XC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[th]=Rg(s);const i=r||s.props&&s.props.type==="number";Ei(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Oh(a)),t[th](a)}),n&&Ei(t,"change",()=>{t.value=t.value.trim()}),e||(Ei(t,"compositionstart",YC),Ei(t,"compositionend",Sg),Ei(t,"change",Sg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[th]=Rg(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Oh(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},JC=["ctrl","shift","alt","meta"],ZC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JC.some(n=>t[`${n}Key`]&&!e.includes(n))},Hh=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=ZC[e[o]];if(a&&a(s,e))return}return t(s,...i)})},eR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tR=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ti(s.key);if(e.some(o=>o===i||eR[o]===i))return t(s)})},nR=xt({patchProp:KC},kC);let Pg;function rR(){return Pg||(Pg=cC(nR))}const sR=(...t)=>{const e=rR().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=oR(r);if(!s)return;const i=e._component;!Ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,iR(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function iR(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function oR(t){return ft(t)?document.querySelector(t):t}var xg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+yw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new lR;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=vw(t);return af.encodeByteArray(e,!0)},sc=function(t){return ww(t).replace(/\./g,"")},ic=function(t){try{return af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return Ew(void 0,t)}function Ew(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uR(n)||(t[n]=Ew(t[n],e[n]));return t}function uR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=()=>hR().__FIREBASE_DEFAULTS__,fR=()=>{if(typeof process>"u"||typeof xg>"u")return;const t=xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return dR()||fR()||pR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bw=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lf=t=>{const e=bw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tw=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function mR(){var t;const e=(t=Jc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Aw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _R(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cw(){return yw.NODE_ADMIN===!0}function yR(){return!mR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vR(){try{return typeof indexedDB=="object"}catch{return!1}}function wR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="FirebaseError";class lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ER,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new lr(s,a,r)}}function bR(t,e){return t.replace(TR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return JSON.parse(t)}function Vt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=_a(ic(i[0])||""),n=_a(ic(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},IR=function(t){const e=Rw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},AR=function(t){const e=Rw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kg(i)&&kg(o)){if(!ac(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function RR(t,e){const n=new SR(t,e);return n.subscribe.bind(n)}class SR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nh),s.error===void 0&&(s.error=nh),s.complete===void 0&&(s.complete=nh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nh(){}function xR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,ne(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DR(t){return t===ks?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const LR={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},VR=ke.INFO,FR={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},UR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=FR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=VR,this._logHandler=UR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const BR=(t,e)=>e.some(n=>t instanceof n);let Og,Dg;function $R(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jR(){return Dg||(Dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sw=new WeakMap,Gh=new WeakMap,Pw=new WeakMap,rh=new WeakMap,df=new WeakMap;function qR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(as(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sw.set(n,t)}).catch(()=>{}),df.set(e,t),e}function WR(t){if(Gh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gh.set(t,e)}let Kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return as(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HR(t){Kh=t(Kh)}function zR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return Pw.set(r,e.sort?e.sort():[e]),as(r)}:jR().includes(t)?function(...e){return t.apply(sh(this),e),as(Sw.get(this))}:function(...e){return as(t.apply(sh(this),e))}}function GR(t){return typeof t=="function"?zR(t):(t instanceof IDBTransaction&&WR(t),BR(t,$R())?new Proxy(t,Kh):t)}function as(t){if(t instanceof IDBRequest)return qR(t);if(rh.has(t))return rh.get(t);const e=GR(t);return e!==t&&(rh.set(t,e),df.set(e,t)),e}const sh=t=>df.get(t);function KR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=as(o);return r&&o.addEventListener("upgradeneeded",l=>{r(as(o.result),l.oldVersion,l.newVersion,as(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QR=["get","getKey","getAll","getAllKeys","count"],YR=["put","add","delete","clear"],ih=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||QR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return ih.set(e,i),i}HR(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Mg="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new eu("@firebase/app"),ZR="@firebase/app-compat",eS="@firebase/analytics-compat",tS="@firebase/analytics",nS="@firebase/app-check-compat",rS="@firebase/app-check",sS="@firebase/auth",iS="@firebase/auth-compat",oS="@firebase/database",aS="@firebase/database-compat",lS="@firebase/functions",cS="@firebase/functions-compat",uS="@firebase/installations",hS="@firebase/installations-compat",dS="@firebase/messaging",fS="@firebase/messaging-compat",pS="@firebase/performance",mS="@firebase/performance-compat",gS="@firebase/remote-config",_S="@firebase/remote-config-compat",yS="@firebase/storage",vS="@firebase/storage-compat",wS="@firebase/firestore",ES="@firebase/vertexai-preview",bS="@firebase/firestore-compat",TS="firebase",IS="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="[DEFAULT]",AS={[Qh]:"fire-core",[ZR]:"fire-core-compat",[tS]:"fire-analytics",[eS]:"fire-analytics-compat",[rS]:"fire-app-check",[nS]:"fire-app-check-compat",[sS]:"fire-auth",[iS]:"fire-auth-compat",[oS]:"fire-rtdb",[aS]:"fire-rtdb-compat",[lS]:"fire-fn",[cS]:"fire-fn-compat",[uS]:"fire-iid",[hS]:"fire-iid-compat",[dS]:"fire-fcm",[fS]:"fire-fcm-compat",[pS]:"fire-perf",[mS]:"fire-perf-compat",[gS]:"fire-rc",[_S]:"fire-rc-compat",[yS]:"fire-gcs",[vS]:"fire-gcs-compat",[wS]:"fire-fst",[bS]:"fire-fst-compat",[ES]:"fire-vertex","fire-js":"fire-js",[TS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,CS=new Map,Xh=new Map;function Lg(t,e){try{t.container.addComponent(e)}catch(n){Ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(Xh.has(e))return Ws.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,t);for(const n of lc.values())Lg(n,t);for(const n of CS.values())Lg(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new Ma("app","Firebase",RS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=IS;function xw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ls.create("bad-app-name",{appName:String(s)});if(n||(n=Tw()),!n)throw ls.create("no-options");const i=lc.get(s);if(i){if(ac(n,i.options)&&ac(r,i.config))return i;throw ls.create("duplicate-app",{appName:s})}const o=new MR(s);for(const l of Xh.values())o.addComponent(l);const a=new SS(n,r,o);return lc.set(s,a),a}function tu(t=Yh){const e=lc.get(t);if(!e&&t===Yh&&Tw())return xw();if(!e)throw ls.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=AS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ws.warn(a.join(" "));return}ds(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="firebase-heartbeat-database",xS=1,ya="firebase-heartbeat-store";let oh=null;function kw(){return oh||(oh=KR(PS,xS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw ls.create("idb-open",{originalErrorMessage:t.message})})),oh}async function kS(t){try{const n=(await kw()).transaction(ya),r=await n.objectStore(ya).get(Ow(t));return await n.done,r}catch(e){if(e instanceof lr)Ws.warn(e.message);else{const n=ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ws.warn(n.message)}}}async function Vg(t,e){try{const r=(await kw()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,Ow(t)),await r.done}catch(n){if(n instanceof lr)Ws.warn(n.message);else{const r=ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ws.warn(r.message)}}}function Ow(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=1024,DS=30*24*60*60*1e3;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fg(),{heartbeatsToSend:r,unsentEntries:s}=MS(this._heartbeatsCache.heartbeats),i=sc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fg(){return new Date().toISOString().substring(0,10)}function MS(t,e=OS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ug(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vR()?wR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ug(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t){ds(new Cr("platform-logger",e=>new XR(e),"PRIVATE")),ds(new Cr("heartbeat",e=>new NS(e),"PRIVATE")),Tn(Qh,Mg,t),Tn(Qh,Mg,"esm2017"),Tn("fire-js","")}VS("");function ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FS=Dw,Nw=new Ma("auth","Firebase",Dw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new eu("@firebase/auth");function US(t,...e){cc.logLevel<=ke.WARN&&cc.warn(`Auth (${Is}): ${t}`,...e)}function Bl(t,...e){cc.logLevel<=ke.ERROR&&cc.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,...e){throw mf(t,...e)}function Fn(t,...e){return mf(t,...e)}function pf(t,e,n){const r=Object.assign(Object.assign({},FS()),{[e]:n});return new Ma("auth","Firebase",r).create(e,{appName:t.name})}function $s(t){return pf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function BS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nr(t,"argument-error"),pf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function Ee(t,e,...n){if(!t)throw mf(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Rr(t,e){t||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $S(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($S()||gR()||"connection"in navigator)?navigator.onLine:!0}function qS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=hf()||Aw()}get(){return jS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Va(3e4,6e4);function _f(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ro(t,e,n,r,s={}){return Lw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=no(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mw.fetch()(Vw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WS),e);try{const s=new GS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw El(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pf(t,h,u);nr(t,h)}}catch(s){if(s instanceof lr)throw s;nr(t,"network-request-failed",{message:String(s)})}}async function zS(t,e,n,r,s={}){const i=await ro(t,e,n,r,s);return"mfaPendingCredential"in i&&nr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,s):`${t.config.apiScheme}://${s}`}class GS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),HS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e){return ro(t,"POST","/v1/accounts:delete",e)}async function Fw(t,e){return ro(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QS(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),s=yf(r);Ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ta(ah(s.auth_time)),issuedAtTime:ta(ah(s.iat)),expirationTime:ta(ah(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ah(t){return Number(t)*1e3}function yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ic(n);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $g(t){const e=yf(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lr&&YS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ta(this.lastLoginAt),this.creationTime=ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await va(t,Fw(n,{idToken:r}));Ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Uw(i.providerUserInfo):[],a=ZS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Zh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function JS(t){const e=Ot(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Uw(t){return t.map(e=>{var{providerId:n}=e,r=ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){const n=await Lw(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tP(t,e){return ro(t,"POST","/v2/accounts:revokeToken",_f(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=$g(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Oi;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await va(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QS(this,e)}reload(){return JS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject($s(this.auth));const e=await this.getIdToken();return await va(this,KS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:V,isAnonymous:j,providerData:F,stsTokenManager:I}=n;Ee(O&&I,e,"internal-error");const w=Oi.fromJSON(this.name,I);Ee(typeof O=="string",e,"internal-error"),Hr(d,e.name),Hr(p,e.name),Ee(typeof V=="boolean",e,"internal-error"),Ee(typeof j=="boolean",e,"internal-error"),Hr(g,e.name),Hr(_,e.name),Hr(E,e.name),Hr(T,e.name),Hr(k,e.name),Hr(D,e.name);const A=new yr({uid:O,auth:e,email:p,emailVerified:V,displayName:d,isAnonymous:j,photoURL:_,phoneNumber:g,tenantId:E,stsTokenManager:w,createdAt:k,lastLoginAt:D});return F&&Array.isArray(F)&&(A.providerData=F.map(v=>Object.assign({},v))),T&&(A._redirectEventId=T),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new Oi;s.updateFromServerResponse(n);const i=new yr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Uw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Oi;a.updateFromIdToken(r);const l=new yr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;function vr(t){Rr(t instanceof Function,"Expected a class definition");let e=jg.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bw.type="NONE";const qg=Bw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$l(this.userKey,s.apiKey,i),this.fullPersistenceKey=$l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(vr(qg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||vr(qg);const o=$l(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=yr._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Di(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Di(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(zw(e))return"Webos";if(vf(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=Bt()){return/firefox\//i.test(t)}function vf(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=Bt()){return/crios\//i.test(t)}function qw(t=Bt()){return/iemobile/i.test(t)}function Ww(t=Bt()){return/android/i.test(t)}function Hw(t=Bt()){return/blackberry/i.test(t)}function zw(t=Bt()){return/webos/i.test(t)}function nu(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nP(t=Bt()){var e;return nu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rP(){return _R()&&document.documentMode===10}function Gw(t=Bt()){return nu(t)||Ww(t)||zw(t)||Hw(t)||/windows phone/i.test(t)||qw(t)}function sP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e=[]){let n;switch(t){case"Browser":n=Wg(Bt());break;case"Worker":n=`${Wg(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e={}){return ro(t,"GET","/v2/passwordPolicy",_f(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=6;class lP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new iP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fw(this,{idToken:e}),r=await yr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject($s(this));const n=e?Ot(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject($s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject($s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oP(this),n=new lP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ma("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vr(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&US(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ru(t){return Ot(t)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=RR(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uP(t){wf=t}function hP(t){return wf.loadJS(t)}function dP(){return wf.gapiScript}function fP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ac(i,e??{}))return s;nr(s,"already-initialized")}return n.initialize({options:e})}function mP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gP(t,e,n){const r=ru(t);Ee(r._canInitEmulator,r,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qw(e),{host:o,port:a}=_P(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),yP()}function Qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _P(t){const e=Qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zg(o)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return zS(t,"POST","/v1/accounts:signInWithIdp",_f(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="http://localhost";class Hs extends Yw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ff(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:vP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Fa{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Fa{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Fa{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rs.credential(n,r)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yr._fromIdTokenResponse(e,r,s),o=Gg(r);return new $i({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gg(r);return new $i({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends lr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hc(e,n,r,s)}}function Xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,i,e,r):i})}async function wP(t,e,n=!1){const r=await va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e,n=!1){const{auth:r}=t;if(gr(r.app))return Promise.reject($s(r));const s="reauthenticate";try{const i=await va(t,Xw(r,s,e,t),n);Ee(i.idToken,r,"internal-error");const o=yf(i.idToken);Ee(o,r,"internal-error");const{sub:a}=o;return Ee(t.uid===a,r,"user-mismatch"),$i._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e,n=!1){if(gr(t.app))return Promise.reject($s(t));const r="signIn",s=await Xw(t,r,e),i=await $i._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function TP(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function IP(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function AP(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}function Jw(t){return Ot(t).signOut()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(){const t=Bt();return vf(t)||nu(t)}const RP=1e3,SP=10;class eE extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CP()&&sP(),this.fallbackToPolling=Gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const PP=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await xP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=bf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function OP(t){Jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function DP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MP(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebaseLocalStorageDb",LP=1,fc="firebaseLocalStorage",iE="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function VP(){const t=indexedDB.deleteDatabase(sE);return new Ua(t).toPromise()}function ed(){const t=indexedDB.open(sE,LP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:iE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await VP(),e(await ed()))})})}async function Kg(t,e,n){const r=iu(t,!0).put({[iE]:e,value:n});return new Ua(r).toPromise()}async function FP(t,e){const n=iu(t,!1).get(e),r=await new Ua(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=iu(t,!0).delete(e);return new Ua(n).toPromise()}const UP=800,BP=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(MP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DP(),!this.activeServiceWorker)return;this.sender=new kP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await Kg(e,dc,"1"),await Qg(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=iu(s,!1).getAll();return new Ua(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const $P=oE;new Va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){return e?vr(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends Yw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jP(t){return bP(t.auth,new Tf(t),t.bypassAuthState)}function qP(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),EP(n,new Tf(t),t.bypassAuthState)}async function WP(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),wP(n,new Tf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jP;case"linkViaPopup":case"linkViaRedirect":return WP;case"reauthViaPopup":case"reauthViaRedirect":return qP;default:nr(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Va(2e3,1e4);async function zP(t,e,n){if(gr(t.app))return Promise.reject(Fn(t,"operation-not-supported-in-this-environment"));const r=ru(t);BS(t,e,Ef);const s=aE(r,n);return new Ms(r,"signInViaPopup",e,s).executeNotNull()}class Ms extends lE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HP.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="pendingRedirect",jl=new Map;class KP extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await QP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QP(t,e){const n=JP(e),r=XP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YP(t,e){jl.set(t._key(),e)}function XP(t){return vr(t._redirectPersistence)}function JP(t){return $l(GP,t.config.apiKey,t.name)}async function ZP(t,e,n=!1){if(gr(t.app))return Promise.reject($s(t));const r=ru(t),s=aE(r,e),o=await new KP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=10*60*1e3;class tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ex&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t,e={}){return ro(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ix=/^https?/;async function ox(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rx(t);for(const n of e)try{if(ax(n))return}catch{}nr(t,"unauthorized-domain")}function ax(t){const e=Jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ix.test(n))return!1;if(sx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new Va(3e4,6e4);function Xg(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cx(t){return new Promise((e,n)=>{var r,s,i;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(Fn(t,"network-request-failed"))},timeout:lx.get()})}if(!((s=(r=Jn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jn().gapi)===null||i===void 0)&&i.load)o();else{const a=fP("iframefcb");return Jn()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},hP(`${dP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ql=null,e})}let ql=null;function ux(t){return ql=ql||cx(t),ql}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new Va(5e3,15e3),dx="__/auth/iframe",fx="emulator/auth/iframe",px={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gx(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,fx):`https://${t.config.authDomain}/${dx}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=mx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${no(r).slice(1)}`}async function _x(t){const e=await ux(t),n=Jn().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:gx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:px,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=Jn().setTimeout(()=>{i(o)},hx.get());function l(){Jn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vx=500,wx=600,Ex="_blank",bx="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tx(t,e,n,r=vx,s=wx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yx),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Bt().toLowerCase();n&&(a=jw(u)?Ex:n),$w(u)&&(e=e||bx,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(nP(u)&&a!=="_self")return Ix(e||"",a),new Jg(null);const d=window.open(e||"",a,h);Ee(d,t,"popup-blocked");try{d.focus()}catch{}return new Jg(d)}function Ix(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="__/auth/handler",Cx="emulator/auth/handler",Rx=encodeURIComponent("fac");async function Zg(t,e,n,r,s,i){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof Ef){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Fa){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${Rx}=${encodeURIComponent(l)}`:"";return`${Sx(t)}?${no(a).slice(1)}${u}`}function Sx({config:t}){return t.emulator?gf(t,Cx):`https://${t.authDomain}/${Ax}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="webStorageSupport";class Px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=ZP,this._overrideRedirectResult=YP}async _openPopup(e,n,r,s){var i;Rr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,Jh(),s);return Tx(e,o,bf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zg(e,n,r,Jh(),s);return OP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _x(e),r=new tx(e);return n.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lh,{type:lh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[lh];o!==void 0&&n(!!o),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ox(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gw()||vf()||nu()}}const xx=Px;var e_="@firebase/auth",t_="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dx(t){ds(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kw(t)},u=new cP(r,s,i,l);return mP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Cr("auth-internal",e=>{const n=ru(e.getProvider("auth").getImmediate());return(r=>new kx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(e_,t_,Ox(t)),Tn(e_,t_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=5*60,Mx=Iw("authIdTokenMaxAge")||Nx;let n_=null;const Lx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mx)return;const s=n==null?void 0:n.token;n_!==s&&(n_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vx(t=tu()){const e=La(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pP(t,{popupRedirectResolver:xx,persistence:[$P,PP,nE]}),r=Iw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lx(i.toString());IP(n,o,()=>o(n.currentUser)),TP(n,a=>o(a))}}const s=bw("auth");return s&&gP(n,`http://${s}`),n}function Fx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dx("Browser");var Ux="firebase",Bx="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(Ux,Bx,"app");var r_={};const s_="@firebase/database",i_="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uE="";function $x(t){uE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Vt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_a(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jx(e)}}catch{}return new qx},Ls=hE("localStorage"),Wx=hE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new eu("@firebase/database"),Hx=function(){let t=1;return function(){return t++}}(),dE=function(t){const e=kR(t),n=new CR;n.update(e);const r=n.digest();return af.encodeByteArray(r)},Ba=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ba.apply(null,r):typeof r=="object"?e+=Vt(r):e+=r,e+=" "}return e};let na=null,o_=!0;const zx=function(t,e){ne(!e,"Can't turn on custom loggers persistently."),Mi.logLevel=ke.VERBOSE,na=Mi.log.bind(Mi)},Ht=function(...t){if(o_===!0&&(o_=!1,na===null&&Wx.get("logging_enabled")===!0&&zx()),na){const e=Ba.apply(null,t);na(e)}},$a=function(t){return function(...e){Ht(t,...e)}},td=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ba(...t);Mi.error(e)},Sr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ba(...t)}`;throw Mi.error(e),new Error(e)},gn=function(...t){const e="FIREBASE WARNING: "+Ba(...t);Mi.warn(e)},Gx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Kx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ji="[MIN_NAME]",zs="[MAX_NAME]",so=function(t,e){if(t===e)return 0;if(t===ji||e===zs)return-1;if(e===ji||t===zs)return 1;{const n=a_(t),r=a_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Qx=function(t,e){return t===e?0:t<e?-1:1},Do=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Vt(e))},If=function(t){if(typeof t!="object"||t===null)return Vt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Vt(e[r]),n+=":",n+=If(t[e[r]]);return n+="}",n},pE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Cn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mE=function(t){ne(!fE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},Yx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Jx=new RegExp("^-?(0*)\\d{1,10}$"),Zx=-2147483648,ek=2147483647,a_=function(t){if(Jx.test(t)){const e=Number(t);if(e>=Zx&&e<=ek)return e}return null},ja=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gn("Exception was thrown by user callback.",n),e},Math.floor(0))}},tk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ra=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){gn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gn(e)}}class Wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="5",gE="v",_E="s",yE="r",vE="f",wE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,EE="ls",bE="p",nd="ac",TE="websocket",IE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function CE(t,e,n){ne(typeof e=="string","typeof type must == string"),ne(typeof n=="object","typeof params must == object");let r;if(e===TE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===IE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sk(t)&&(n.ns=t.namespace);const s=[];return Cn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.counters_={}}incrementCounter(e,n=1){Nr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={},uh={};function Cf(t){const e=t.toString();return ch[e]||(ch[e]=new ik),ch[e]}function ok(t,e){const n=t.toString();return uh[n]||(uh[n]=e()),uh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ja(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="start",lk="close",ck="pLPCommand",uk="pRTLPCB",RE="id",SE="pw",PE="ser",hk="cb",dk="seg",fk="ts",pk="d",mk="dframe",xE=1870,kE=30,gk=xE-kE,_k=25e3,yk=3e4;class Ci{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$a(e),this.stats_=Cf(n),this.urlFn=l=>(this.appCheckToken&&(l[nd]=this.appCheckToken),CE(n,IE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ak(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yk)),Kx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rf((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===l_)this.id=a,this.password=l;else if(o===lk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[l_]="t",r[PE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gE]=Af,this.transportSessionId&&(r[_E]=this.transportSessionId),this.lastSessionId&&(r[EE]=this.lastSessionId),this.applicationId&&(r[bE]=this.applicationId),this.appCheckToken&&(r[nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&wE.test(location.hostname)&&(r[yE]=vE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ci.forceAllow_=!0}static forceDisallow(){Ci.forceDisallow_=!0}static isAvailable(){return Ci.forceAllow_?!0:!Ci.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Yx()&&!Xx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Vt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ww(n),s=pE(r,gk);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mk]="t",r[RE]=e,r[SE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Vt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hx(),window[ck+this.uniqueCallbackIdentifier]=e,window[uk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ht("frame writing exception"),a.stack&&Ht(a.stack),Ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ht("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[RE]=this.myID,e[SE]=this.myPW,e[PE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kE+r.length<=xE;){const o=this.pendingSegs.shift();r=r+"&"+dk+s+"="+o.seg+"&"+fk+s+"="+o.ts+"&"+pk+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(_k)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=16384,wk=45e3;let pc=null;typeof MozWebSocket<"u"?pc=MozWebSocket:typeof WebSocket<"u"&&(pc=WebSocket);class xn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$a(this.connId),this.stats_=Cf(n),this.connURL=xn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[gE]=Af,typeof location<"u"&&location.hostname&&wE.test(location.hostname)&&(o[yE]=vE),n&&(o[_E]=n),r&&(o[EE]=r),s&&(o[nd]=s),i&&(o[bE]=i),CE(e,TE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let r;Cw(),this.mySock=new pc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pc!==null&&!xn.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_a(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Vt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pE(n,vk);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ci,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xn&&xn.isAvailable();let r=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||gn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xn];else{const s=this.transports_=[];for(const i of wa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=6e4,bk=5e3,Tk=10*1024,Ik=100*1024,hh="t",c_="d",Ak="s",u_="r",Ck="e",h_="o",d_="a",f_="n",p_="p",Rk="h";class Sk{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$a("c:"+this.id+":"),this.transportManager_=new wa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ra(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ik?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Tk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hh in e){const n=e[hh];n===d_?this.upgradeIfSecondaryHealthy_():n===u_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===h_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Do("t",e),r=Do("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:p_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:d_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:f_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Do("t",e),r=Do("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Do(hh,e);if(c_ in e){const r=e[c_];if(n===Rk){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===f_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ak?this.onConnectionShutdown_(r):n===u_?this.onReset_(r):n===Ck?td("Server Error: "+r):n===h_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):td("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Af!==r&&gn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ra(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ek))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ra(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:p_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends DE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mc}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=32,g_=768;class ot{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ge(){return new ot("")}function Le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fs(t){return t.pieces_.length-t.pieceNum_}function rt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ot(t.pieces_,e)}function NE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Pk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ME(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function LE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ot(e,0)}function Pt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ot)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ot(n,0)}function De(t){return t.pieceNum_>=t.pieces_.length}function bn(t,e){const n=Le(t),r=Le(e);if(n===null)return e;if(n===r)return bn(rt(t),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function VE(t,e){if(fs(t)!==fs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function On(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fs(t)>fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class xk{constructor(e,n){this.errorPrefix_=n,this.parts_=ME(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zc(this.parts_[r]);FE(this)}}function kk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zc(e),FE(t)}function Ok(t){const e=t.parts_.pop();t.byteLength_-=Zc(e),t.parts_.length>0&&(t.byteLength_-=1)}function FE(t){if(t.byteLength_>g_)throw new Error(t.errorPrefix_+"has a key path longer than "+g_+" bytes ("+t.byteLength_+").");if(t.parts_.length>m_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+m_+") or object contains a cycle "+Os(t))}function Os(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends DE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sf}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=1e3,Dk=60*5*1e3,__=30*1e3,Nk=1.3,Mk=3e4,Lk="server_kill",y_=3;class Tr extends OE{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Tr.nextPersistentConnectionId_++,this.log_=$a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=No,this.maxReconnectDelay_=Dk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Vt(i)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new cf,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Tr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nr(e,"w")){const r=Bi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();gn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||AR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=__)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=IR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Vt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):td("Unrecognized action received from server: "+Vt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=No,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=No,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Mk&&(this.reconnectDelay_=No),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Tr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){ne(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ht("getToken() completed but was canceled"):(Ht("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new Sk(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{gn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lk)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&gn(d),l())}}}interrupt(e){Ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zh(this.interruptReasons_)&&(this.reconnectDelay_=No,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>If(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ot(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=y_&&(this.reconnectDelay_=__,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=y_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uE.replace(/\./g,"-")]=1,hf()?e["framework.cordova"]=1:Aw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mc.getInstance().currentlyOnline();return zh(this.interruptReasons_)&&e}}Tr.nextPersistentConnectionId_=0;Tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ve(ji,e),s=new Ve(ji,n);return this.compare(r,s)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;class UE extends ou{static get __EMPTY_NODE(){return bl}static set __EMPTY_NODE(e){bl=e}compare(e,n){return so(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(zs,bl)}makePost(e,n){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,bl)}toString(){return".key"}}const Li=new UE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},fn=class jo{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??jo.RED,this.left=s??Qn.EMPTY_NODE,this.right=i??Qn.EMPTY_NODE}copy(e,n,r,s,i){return new jo(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Qn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,jo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,jo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};fn.RED=!0;fn.BLACK=!1;class Vk{copy(e,n,r,s,i){return this}insert(e,n,r){return new fn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Qn=class Hl{constructor(e,n=Hl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Hl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fn.BLACK,null,null))}remove(e){return new Hl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}};Qn.EMPTY_NODE=new Vk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e){return so(t.name,e.name)}function Pf(t,e){return so(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;function Uk(t){rd=t}const BE=function(t){return typeof t=="number"?"number:"+mE(t):"string:"+t},$E=function(t){if(t.isLeafNode()){const e=t.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nr(e,".sv"),"Priority must be a string or number.")}else ne(t===rd||t.isEmpty(),"priority of unexpected type.");ne(t===rd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v_;class Rt{constructor(e,n=Rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$E(this.priorityNode_)}static set __childrenNodeConstructor(e){v_=e}static get __childrenNodeConstructor(){return v_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Le(e)===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+BE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mE(this.value_):e+=this.value_,this.lazyHash_=dE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Rt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Rt.VALUE_TYPE_ORDER.indexOf(n),i=Rt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+n),ne(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jE,qE;function Bk(t){jE=t}function $k(t){qE=t}class jk extends ou{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?so(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(zs,new Rt("[PRIORITY-POST]",qE))}makePost(e,n){const r=jE(e);return new Ve(n,new Rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Qt=new jk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=Math.log(2);class Wk{constructor(e){const n=i=>parseInt(Math.log(i)/qk,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new fn(p,d.node,fn.BLACK,null,null);{const g=parseInt(h/2,10)+l,_=s(l,g),E=s(g+1,u);return d=t[g],p=n?n(d):d,new fn(p,d.node,fn.BLACK,_,E)}},i=function(l){let u=null,h=null,d=t.length;const p=function(_,E){const T=d-_,k=d;d-=_;const D=s(T+1,k),O=t[T],V=n?n(O):O;g(new fn(V,O.node,E,null,D))},g=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const E=l.nextBitIsOne(),T=Math.pow(2,l.count-(_+1));E?p(T,fn.BLACK):(p(T,fn.BLACK),p(T,fn.RED))}return h},o=new Wk(t.length),a=i(o);return new Qn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh;const _i={};class wr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ne(_i&&Qt,"ChildrenNode.ts has not been loaded"),dh=dh||new wr({".priority":_i},{".priority":Qt}),dh}get(e){const n=Bi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qn?n:null}hasIndex(e){return Nr(this.indexSet_,e.toString())}addIndex(e,n){ne(e!==Li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ve.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=gc(r,e.getCompare()):a=_i;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new wr(h,u)}addToIndexes(e,n){const r=oc(this.indexes_,(s,i)=>{const o=Bi(this.indexSet_,i);if(ne(o,"Missing index implementation for "+i),s===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),gc(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ve(e.name,a))),l.insert(e,e.node)}});return new wr(r,this.indexSet_)}removeFromIndexes(e,n){const r=oc(this.indexes_,s=>{if(s===_i)return s;{const i=n.get(e.name);return i?s.remove(new Ve(e.name,i)):s}});return new wr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;class We{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$E(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mo||(Mo=new We(new Qn(Pf),null,wr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mo}updatePriority(e){return this.children_.isEmpty()?this:new We(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mo:n}}getChild(e){const n=Le(e);return n===null?this:this.getImmediateChild(n).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ne(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ve(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Mo:this.priorityNode_;return new We(s,o,i)}}updateChild(e,n){const r=Le(e);if(r===null)return n;{ne(Le(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Qt,(o,a)=>{n[o]=a.val(e),r++,i&&We.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+BE(this.getPriority().val())+":"),this.forEachChild(Qt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":dE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ve(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ve(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ve.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qa?-1:0}withIndex(e){if(e===Li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new We(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Qt),s=n.getIterator(Qt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Li?null:this.indexMap_.get(e.toString())}}We.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hk extends We{constructor(){super(new Qn(Pf),We.EMPTY_NODE,wr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return We.EMPTY_NODE}isEmpty(){return!1}}const qa=new Hk;Object.defineProperties(Ve,{MIN:{value:new Ve(ji,We.EMPTY_NODE)},MAX:{value:new Ve(zs,qa)}});UE.__EMPTY_NODE=We.EMPTY_NODE;Rt.__childrenNodeConstructor=We;Uk(qa);$k(qa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=!0;function zt(t,e=null){if(t===null)return We.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Rt(n,zt(e))}if(!(t instanceof Array)&&zk){const n=[];let r=!1;if(Cn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=zt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ve(o,l)))}}),n.length===0)return We.EMPTY_NODE;const i=gc(n,Fk,o=>o.name,Pf);if(r){const o=gc(n,Qt.getCompare());return new We(i,zt(e),new wr({".priority":o},{".priority":Qt}))}else return new We(i,zt(e),wr.Default)}else{let n=We.EMPTY_NODE;return Cn(t,(r,s)=>{if(Nr(t,r)&&r.substring(0,1)!=="."){const i=zt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(zt(e))}}Bk(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk extends ou{constructor(e){super(),this.indexPath_=e,ne(!De(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?so(e.name,n.name):i}makePost(e,n){const r=zt(e),s=We.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ve(n,s)}maxPost(){const e=We.EMPTY_NODE.updateChild(this.indexPath_,qa);return new Ve(zs,e)}toString(){return ME(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk extends ou{compare(e,n){const r=e.node.compareTo(n.node);return r===0?so(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,n){const r=zt(e);return new Ve(n,r)}toString(){return".value"}}const Qk=new Kk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){return{type:"value",snapshotNode:t}}function Xk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function w_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Zk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ji}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qt}copy(){const e=new xf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function E_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Qt?n="$priority":t.index_===Qk?n="$value":t.index_===Li?n="$key":(ne(t.index_ instanceof Gk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Vt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Vt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Vt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Vt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Vt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function b_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Qt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends OE{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=$a("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_c.getListenId_(e,r),a={};this.listens_[o]=a;const l=E_(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Bi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=_c.getListenId_(e,n);delete this.listens_[r]}get(e){const n=E_(e._queryParams),r=e._path.toString(),s=new cf;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+no(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_a(a.responseText)}catch{gn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&gn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(){this.rootNode_=We.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return{value:null,children:new Map}}function WE(t,e,n){if(De(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Le(e);t.children.has(r)||t.children.set(r,yc());const s=t.children.get(r);e=rt(e),WE(s,e,n)}}function sd(t,e,n){t.value!==null?n(e,t.value):tO(t,(r,s)=>{const i=new ot(e.toString()+"/"+r);sd(s,i,n)})}function tO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Cn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=10*1e3,rO=30*1e3,sO=5*60*1e3;class iO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nO(e);const r=T_+(rO-T_)*Math.random();ra(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Cn(e,(s,i)=>{i>0&&Nr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ra(this.reportStats_.bind(this),Math.floor(Math.random()*2*sO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function HE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function GE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yn.ACK_USER_WRITE,this.source=HE()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ot(e));return new vc(Ge(),n,this.revert)}}else return ne(Le(this.path)===e,"operationForChild called for unrelated child."),new vc(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yn.OVERWRITE}operationForChild(e){return De(this.path)?new Gs(this.source,Ge(),this.snap.getImmediateChild(e)):new Gs(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yn.MERGE}operationForChild(e){if(De(this.path)){const n=this.children.subtree(new ot(e));return n.isEmpty()?null:n.value?new Gs(this.source,Ge(),n.value):new Ea(this.source,Ge(),n)}else return ne(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ea(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const n=Le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function oO(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Zk(o.childName,o.snapshotNode))}),Lo(t,s,"child_removed",e,r,n),Lo(t,s,"child_added",e,r,n),Lo(t,s,"child_moved",i,r,n),Lo(t,s,"child_changed",e,r,n),Lo(t,s,"value",e,r,n),s}function Lo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>lO(t,a,l)),o.forEach(a=>{const l=aO(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function aO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lO(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const r=new Ve(e.childName,e.snapshotNode),s=new Ve(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t,e){return{eventCache:t,serverCache:e}}function sa(t,e,n,r){return KE(new kf(e,n,r),t.serverCache)}function QE(t,e,n,r){return KE(t.eventCache,new kf(e,n,r))}function id(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;const cO=()=>(fh||(fh=new Qn(Qx)),fh);class tt{constructor(e,n=cO()){this.value=e,this.children=n}static fromObject(e){let n=new tt(null);return Cn(e,(r,s)=>{n=n.set(new ot(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ge(),value:this.value};if(De(e))return null;{const r=Le(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(rt(e),n);return i!=null?{path:Pt(new ot(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const n=Le(e),r=this.children.get(n);return r!==null?r.subtree(rt(e)):new tt(null)}}set(e,n){if(De(e))return new tt(n,this.children);{const r=Le(e),i=(this.children.get(r)||new tt(null)).set(rt(e),n),o=this.children.insert(r,i);return new tt(this.value,o)}}remove(e){if(De(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const n=Le(e),r=this.children.get(n);if(r){const s=r.remove(rt(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new tt(null):new tt(this.value,i)}else return this}}get(e){if(De(e))return this.value;{const n=Le(e),r=this.children.get(n);return r?r.get(rt(e)):null}}setTree(e,n){if(De(e))return n;{const r=Le(e),i=(this.children.get(r)||new tt(null)).setTree(rt(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new tt(this.value,o)}}fold(e){return this.fold_(Ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Pt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(De(e))return null;{const i=Le(e),o=this.children.get(i);return o?o.findOnPath_(rt(e),Pt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ge(),n)}foreachOnPath_(e,n,r){if(De(e))return this;{this.value&&r(n,this.value);const s=Le(e),i=this.children.get(s);return i?i.foreachOnPath_(rt(e),Pt(n,s),r):new tt(null)}}foreach(e){this.foreach_(Ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Pt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.writeTree_=e}static empty(){return new Un(new tt(null))}}function ia(t,e,n){if(De(e))return new Un(new tt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=bn(s,e);return i=i.updateChild(o,n),new Un(t.writeTree_.set(s,i))}else{const s=new tt(n),i=t.writeTree_.setTree(e,s);return new Un(i)}}}function I_(t,e,n){let r=t;return Cn(n,(s,i)=>{r=ia(r,Pt(e,s),i)}),r}function A_(t,e){if(De(e))return Un.empty();{const n=t.writeTree_.setTree(e,new tt(null));return new Un(n)}}function od(t,e){return si(t,e)!=null}function si(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bn(n.path,e)):null}function C_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Qt,(r,s)=>{e.push(new Ve(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ve(r,s.value))}),e}function cs(t,e){if(De(e))return t;{const n=si(t,e);return n!=null?new Un(new tt(n)):new Un(t.writeTree_.subtree(e))}}function ad(t){return t.writeTree_.isEmpty()}function qi(t,e){return YE(Ge(),t.writeTree_,e)}function YE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(ne(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=YE(Pt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e){return nb(e,t)}function uO(t,e,n,r,s){ne(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ia(t.visibleWrites,e,n)),t.lastWriteId=r}function hO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function dO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ne(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fO(a,r.path)?s=!1:On(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return pO(t),!0;if(r.snap)t.visibleWrites=A_(t.visibleWrites,r.path);else{const a=r.children;Cn(a,l=>{t.visibleWrites=A_(t.visibleWrites,Pt(r.path,l))})}return!0}else return!1}function fO(t,e){if(t.snap)return On(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&On(Pt(t.path,n),e))return!0;return!1}function pO(t){t.visibleWrites=JE(t.allWrites,mO,Ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mO(t){return t.visible}function JE(t,e,n){let r=Un.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)On(n,o)?(a=bn(n,o),r=ia(r,a,i.snap)):On(o,n)&&(a=bn(o,n),r=ia(r,Ge(),i.snap.getChild(a)));else if(i.children){if(On(n,o))a=bn(n,o),r=I_(r,a,i.children);else if(On(o,n))if(a=bn(o,n),De(a))r=I_(r,Ge(),i.children);else{const l=Bi(i.children,Le(a));if(l){const u=l.getChild(rt(a));r=ia(r,Ge(),u)}}}else throw to("WriteRecord should have .snap or .children")}}return r}function ZE(t,e,n,r,s){if(!r&&!s){const i=si(t.visibleWrites,e);if(i!=null)return i;{const o=cs(t.visibleWrites,e);if(ad(o))return n;if(n==null&&!od(o,Ge()))return null;{const a=n||We.EMPTY_NODE;return qi(o,a)}}}else{const i=cs(t.visibleWrites,e);if(!s&&ad(i))return n;if(!s&&n==null&&!od(i,Ge()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(On(u.path,e)||On(e,u.path))},a=JE(t.allWrites,o,e),l=n||We.EMPTY_NODE;return qi(a,l)}}}function gO(t,e,n){let r=We.EMPTY_NODE;const s=si(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Qt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=cs(t.visibleWrites,e);return n.forEachChild(Qt,(o,a)=>{const l=qi(cs(i,new ot(o)),a);r=r.updateImmediateChild(o,l)}),C_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=cs(t.visibleWrites,e);return C_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function _O(t,e,n,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Pt(e,n);if(od(t.visibleWrites,i))return null;{const o=cs(t.visibleWrites,i);return ad(o)?s.getChild(n):qi(o,s.getChild(n))}}function yO(t,e,n,r){const s=Pt(e,n),i=si(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=cs(t.visibleWrites,s);return qi(o,r.getNode().getImmediateChild(n))}else return null}function vO(t,e){return si(t.visibleWrites,e)}function wO(t,e,n,r,s,i,o){let a;const l=cs(t.visibleWrites,e),u=si(l,Ge());if(u!=null)a=u;else if(n!=null)a=qi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=p.getNext();for(;g&&h.length<s;)d(g,r)!==0&&h.push(g),g=p.getNext();return h}else return[]}function EO(){return{visibleWrites:Un.empty(),allWrites:[],lastWriteId:-1}}function ld(t,e,n,r){return ZE(t.writeTree,t.treePath,e,n,r)}function eb(t,e){return gO(t.writeTree,t.treePath,e)}function R_(t,e,n,r){return _O(t.writeTree,t.treePath,e,n,r)}function wc(t,e){return vO(t.writeTree,Pt(t.treePath,e))}function bO(t,e,n,r,s,i){return wO(t.writeTree,t.treePath,e,n,r,s,i)}function Of(t,e,n){return yO(t.writeTree,t.treePath,e,n)}function tb(t,e){return nb(Pt(t.treePath,e),t.writeTree)}function nb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ne(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,w_(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Jk(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Xk(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,w_(r,e.snapshotNode,s.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rb=new IO;class Df{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Of(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ks(this.viewCache_),i=bO(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function AO(t,e){ne(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CO(t,e,n,r,s){const i=new TO;let o,a;if(n.type===Yn.OVERWRITE){const u=n;u.source.fromUser?o=cd(t,e,u.path,u.snap,r,s,i):(ne(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!De(u.path),o=Ec(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Yn.MERGE){const u=n;u.source.fromUser?o=SO(t,e,u.path,u.children,r,s,i):(ne(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ud(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Yn.ACK_USER_WRITE){const u=n;u.revert?o=kO(t,e,u.path,r,s,i):o=PO(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Yn.LISTEN_COMPLETE)o=xO(t,e,n.path,r,i);else throw to("Unknown operation type: "+n.type);const l=i.getChanges();return RO(e,o,l),{viewCache:o,changes:l}}function RO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=id(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Yk(id(e)))}}function sb(t,e,n,r,s,i){const o=e.eventCache;if(wc(r,n)!=null)return e;{let a,l;if(De(n))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ks(e),h=u instanceof We?u:We.EMPTY_NODE,d=eb(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=ld(r,Ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Le(n);if(u===".priority"){ne(fs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=R_(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=rt(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=R_(r,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Of(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,s,i):a=o.getNode()}}return sa(e,a,o.isFullyInitialized()||De(n),t.filter.filtersNodes())}}function Ec(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(De(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),g,null)}else{const g=Le(n);if(!l.isCompleteForPath(n)&&fs(n)>1)return e;const _=rt(n),T=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=h.updatePriority(l.getNode(),T):u=h.updateChild(l.getNode(),g,T,_,rb,null)}const d=QE(e,u,l.isFullyInitialized()||De(n),h.filtersNodes()),p=new Df(s,d,i);return sb(t,d,n,s,p,a)}function cd(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new Df(s,e,i);if(De(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=sa(e,u,!0,t.filter.filtersNodes());else{const d=Le(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=sa(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=rt(n),g=a.getNode().getImmediateChild(d);let _;if(De(p))_=r;else{const E=h.getCompleteChild(d);E!=null?NE(p)===".priority"&&E.getChild(LE(p)).isEmpty()?_=E:_=E.updateChild(p,r):_=We.EMPTY_NODE}if(g.equals(_))l=e;else{const E=t.filter.updateChild(a.getNode(),d,_,p,h,o);l=sa(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function S_(t,e){return t.eventCache.isCompleteForChild(e)}function SO(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=Pt(n,l);S_(e,Le(h))&&(a=cd(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=Pt(n,l);S_(e,Le(h))||(a=cd(t,a,h,u,s,i,o))}),a}function P_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ud(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;De(n)?u=r:u=new tt(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=P_(t,g,p);l=Ec(t,l,new ot(d),_,s,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),E=P_(t,_,p);l=Ec(t,l,new ot(d),E,s,i,o,a)}}),l}function PO(t,e,n,r,s,i,o){if(wc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(De(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ec(t,e,n,l.getNode().getChild(n),s,i,a,o);if(De(n)){let u=new tt(null);return l.getNode().forEachChild(Li,(h,d)=>{u=u.set(new ot(h),d)}),ud(t,e,n,u,s,i,a,o)}else return e}else{let u=new tt(null);return r.foreach((h,d)=>{const p=Pt(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),ud(t,e,n,u,s,i,a,o)}}function xO(t,e,n,r,s){const i=e.serverCache,o=QE(e,i.getNode(),i.isFullyInitialized()||De(n),i.isFiltered());return sb(t,o,n,r,rb,s)}function kO(t,e,n,r,s,i){let o;if(wc(r,n)!=null)return e;{const a=new Df(r,e,s),l=e.eventCache.getNode();let u;if(De(n)||Le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ld(r,Ks(e));else{const d=e.serverCache.getNode();ne(d instanceof We,"serverChildren would be complete if leaf node"),h=eb(r,d)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=Le(n);let d=Of(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,rt(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,We.EMPTY_NODE,rt(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ld(r,Ks(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||wc(r,Ge())!=null,sa(e,u,o,t.filter.filtersNodes())}}function OO(t,e){const n=Ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!De(e)&&!n.getImmediateChild(Le(e)).isEmpty())?n.getChild(e):null}function x_(t,e,n,r){e.type===Yn.MERGE&&e.source.queryId!==null&&(ne(Ks(t.viewCache_),"We should always have a full cache before handling merges"),ne(id(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=CO(t.processor_,s,e,n,r);return AO(t.processor_,i.viewCache),ne(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,DO(t,i.changes,i.viewCache.eventCache.getNode())}function DO(t,e,n,r){const s=t.eventRegistrations_;return oO(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k_;function NO(t){ne(!k_,"__referenceConstructor has already been defined"),k_=t}function Nf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return ne(i!=null,"SyncTree gave us an op for an invalid query."),x_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(x_(o,e,n,r));return i}}function Mf(t,e){let n=null;for(const r of t.views.values())n=n||OO(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O_;function MO(t){ne(!O_,"__referenceConstructor has already been defined"),O_=t}class D_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=EO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LO(t,e,n,r,s){return uO(t.pendingWriteTree_,e,n,r,s),s?lu(t,new Gs(HE(),e,n)):[]}function Ri(t,e,n=!1){const r=hO(t.pendingWriteTree_,e);if(dO(t.pendingWriteTree_,e)){let i=new tt(null);return r.snap!=null?i=i.set(Ge(),!0):Cn(r.children,o=>{i=i.set(new ot(o),!0)}),lu(t,new vc(r.path,i,n))}else return[]}function au(t,e,n){return lu(t,new Gs(zE(),e,n))}function VO(t,e,n){const r=tt.fromObject(n);return lu(t,new Ea(zE(),e,r))}function FO(t,e,n,r){const s=lb(t,r);if(s!=null){const i=cb(s),o=i.path,a=i.queryId,l=bn(o,e),u=new Gs(GE(a),l,n);return ub(t,o,u)}else return[]}function UO(t,e,n,r){const s=lb(t,r);if(s){const i=cb(s),o=i.path,a=i.queryId,l=bn(o,e),u=tt.fromObject(n),h=new Ea(GE(a),l,u);return ub(t,o,h)}else return[]}function ib(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bn(o,e),u=Mf(a,l);if(u)return u});return ZE(s,e,i,n,!0)}function lu(t,e){return ob(e,t.syncPointTree_,null,XE(t.pendingWriteTree_,Ge()))}function ob(t,e,n,r){if(De(t.path))return ab(t,e,n,r);{const s=e.get(Ge());n==null&&s!=null&&(n=Mf(s,Ge()));let i=[];const o=Le(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=tb(r,o);i=i.concat(ob(a,l,u,h))}return s&&(i=i.concat(Nf(s,t,r,n))),i}}function ab(t,e,n,r){const s=e.get(Ge());n==null&&s!=null&&(n=Mf(s,Ge()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tb(r,o),h=t.operationForChild(o);h&&(i=i.concat(ab(h,a,l,u)))}),s&&(i=i.concat(Nf(s,t,r,n))),i}function lb(t,e){return t.tagToQueryMap.get(e)}function cb(t){const e=t.indexOf("$");return ne(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ot(t.substr(0,e))}}function ub(t,e,n){const r=t.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=XE(t.pendingWriteTree_,e);return Nf(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lf(n)}node(){return this.node_}}class Vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pt(this.path_,e);return new Vf(this.syncTree_,n)}node(){return ib(this.syncTree_,this.path_)}}const BO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},N_=function(t,e,n){if(!t||typeof t!="object")return t;if(ne(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $O(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jO(t[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$O=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ne(!1,"Unexpected server value: "+t)}},jO=function(t,e,n){t.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},qO=function(t,e,n,r){return Ff(e,new Vf(n,t),r)},WO=function(t,e,n){return Ff(t,new Lf(e),n)};function Ff(t,e,n){const r=t.getPriority().val(),s=N_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=N_(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Rt(a,zt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Rt(s))),o.forEachChild(Qt,(a,l)=>{const u=Ff(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Bf(t,e){let n=e instanceof ot?e:new ot(e),r=t,s=Le(n);for(;s!==null;){const i=Bi(r.node.children,s)||{children:{},childCount:0};r=new Uf(s,r,i),n=rt(n),s=Le(n)}return r}function io(t){return t.node.value}function hb(t,e){t.node.value=e,hd(t)}function db(t){return t.node.childCount>0}function HO(t){return io(t)===void 0&&!db(t)}function cu(t,e){Cn(t.node.children,(n,r)=>{e(new Uf(n,t,r))})}function fb(t,e,n,r){n&&!r&&e(t),cu(t,s=>{fb(s,e,!0,r)}),n&&r&&e(t)}function zO(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Wa(t){return new ot(t.parent===null?t.name:Wa(t.parent)+"/"+t.name)}function hd(t){t.parent!==null&&GO(t.parent,t.name,t)}function GO(t,e,n){const r=HO(n),s=Nr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,hd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,hd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=/[\[\].#$\/\u0000-\u001F\u007F]/,QO=/[\[\].#$\u0000-\u001F\u007F]/,ph=10*1024*1024,pb=function(t){return typeof t=="string"&&t.length!==0&&!KO.test(t)},YO=function(t){return typeof t=="string"&&t.length!==0&&!QO.test(t)},XO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),YO(t)},mb=function(t,e,n){const r=n instanceof ot?new xk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Os(r));if(typeof e=="function")throw new Error(t+"contains a function "+Os(r)+" with contents = "+e.toString());if(fE(e))throw new Error(t+"contains "+e.toString()+" "+Os(r));if(typeof e=="string"&&e.length>ph/3&&Zc(e)>ph)throw new Error(t+"contains a string greater than "+ph+" utf8 bytes "+Os(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Cn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!pb(o)))throw new Error(t+" contains an invalid key ("+o+") "+Os(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kk(r,o),mb(t,a,r),Ok(r)}),s&&i)throw new Error(t+' contains ".value" child '+Os(r)+" in addition to actual children.")}},JO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XO(n))throw new Error(xR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function e1(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!VE(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ii(t,e,n){e1(t,n),t1(t,r=>On(r,e)||On(e,r))}function t1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(n1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function n1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();na&&Ht("event: "+n.toString()),ja(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="repo_interrupt",s1=25;class i1{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yc(),this.transactionQueueTree_=new Uf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function o1(t,e,n){if(t.stats_=Cf(t.repoInfo_),t.forceRestClient_||tk())t.server_=new _c(t.repoInfo_,(r,s,i,o)=>{M_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>L_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Vt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tr(t.repoInfo_,e,(r,s,i,o)=>{M_(t,r,s,i,o)},r=>{L_(t,r)},r=>{l1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ok(t.repoInfo_,()=>new iO(t.stats_,t.server_)),t.infoData_=new eO,t.infoSyncTree_=new D_({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=au(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$f(t,"connected",!1),t.serverSyncTree_=new D_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);ii(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function a1(t){const n=t.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gb(t){return BO({timestamp:a1(t)})}function M_(t,e,n,r,s){t.dataUpdateCount++;const i=new ot(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=oc(n,u=>zt(u));o=UO(t.serverSyncTree_,i,l,s)}else{const l=zt(n);o=FO(t.serverSyncTree_,i,l,s)}else if(r){const l=oc(n,u=>zt(u));o=VO(t.serverSyncTree_,i,l)}else{const l=zt(n);o=au(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=qf(t,i)),ii(t.eventQueue_,a,o)}function L_(t,e){$f(t,"connected",e),e===!1&&u1(t)}function l1(t,e){Cn(e,(n,r)=>{$f(t,n,r)})}function $f(t,e,n){const r=new ot("/.info/"+e),s=zt(n);t.infoData_.updateSnapshot(r,s);const i=au(t.infoSyncTree_,r,s);ii(t.eventQueue_,r,i)}function c1(t){return t.nextWriteId_++}function u1(t){_b(t,"onDisconnectEvents");const e=gb(t),n=yc();sd(t.onDisconnect_,Ge(),(s,i)=>{const o=qO(s,i,t.serverSyncTree_,e);WE(n,s,o)});let r=[];sd(n,Ge(),(s,i)=>{r=r.concat(au(t.serverSyncTree_,s,i));const o=p1(t,s);qf(t,o)}),t.onDisconnect_=yc(),ii(t.eventQueue_,Ge(),r)}function h1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(r1)}function _b(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ht(n,...e)}function yb(t,e,n){return ib(t.serverSyncTree_,e,n)||We.EMPTY_NODE}function jf(t,e=t.transactionQueueTree_){if(e||uu(t,e),io(e)){const n=wb(t,e);ne(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&d1(t,Wa(e),n)}else db(e)&&cu(e,n=>{jf(t,n)})}function d1(t,e,n){const r=n.map(u=>u.currentWriteId),s=yb(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];ne(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=bn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{_b(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Ri(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();uu(t,Bf(t.transactionQueueTree_,e)),jf(t,t.transactionQueueTree_),ii(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)ja(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{gn("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}qf(t,e)}},o)}function qf(t,e){const n=vb(t,e),r=Wa(n),s=wb(t,n);return f1(t,s,r),r}function f1(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=bn(n,l.path);let h=!1,d;if(ne(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Ri(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=s1)h=!0,d="maxretry",s=s.concat(Ri(t.serverSyncTree_,l.currentWriteId,!0));else{const p=yb(t,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){mb("transaction failed: Data returned ",g,l.path);let _=zt(g);typeof g=="object"&&g!=null&&Nr(g,".priority")||(_=_.updatePriority(p.getPriority()));const T=l.currentWriteId,k=gb(t),D=WO(_,p,k);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=D,l.currentWriteId=c1(t),o.splice(o.indexOf(T),1),s=s.concat(LO(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),s=s.concat(Ri(t.serverSyncTree_,T,!0))}else h=!0,d="nodata",s=s.concat(Ri(t.serverSyncTree_,l.currentWriteId,!0))}ii(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}uu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ja(r[a]);jf(t,t.transactionQueueTree_)}function vb(t,e){let n,r=t.transactionQueueTree_;for(n=Le(e);n!==null&&io(r)===void 0;)r=Bf(r,n),e=rt(e),n=Le(e);return r}function wb(t,e){const n=[];return Eb(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Eb(t,e,n){const r=io(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);cu(e,s=>{Eb(t,s,n)})}function uu(t,e){const n=io(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,hb(e,n.length>0?n:void 0)}cu(e,r=>{uu(t,r)})}function p1(t,e){const n=Wa(vb(t,e)),r=Bf(t.transactionQueueTree_,e);return zO(r,s=>{mh(t,s)}),mh(t,r),fb(r,s=>{mh(t,s)}),n}function mh(t,e){const n=io(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ne(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(ne(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?hb(e,void 0):n.length=i+1,ii(t.eventQueue_,Wa(e),s);for(let o=0;o<r.length;o++)ja(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function g1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):gn(`Invalid query segment '${n}' in query '${t}'`)}return e}const V_=function(t,e){const n=_1(t),r=n.namespace;n.domain==="firebase.com"&&Sr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Gx();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new AE(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ot(n.pathString)}},_1=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=m1(t.substring(h,d)));const p=g1(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return De(this._path)?null:NE(this._path)}get ref(){return new oo(this._repo,this._path)}get _queryIdentifier(){const e=b_(this._queryParams),n=If(e);return n==="{}"?"default":n}get _queryObject(){return b_(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof Wf))return!1;const n=this._repo===e._repo,r=VE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Pk(this._path)}}class oo extends Wf{constructor(e,n){super(e,n,new xf,!1)}get parent(){const e=LE(this._path);return e===null?null:new oo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}NO(oo);MO(oo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="FIREBASE_DATABASE_EMULATOR_HOST",dd={};let v1=!1;function w1(t,e,n,r){t.repoInfo_=new AE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function E1(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ht("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=V_(i,s),a=o.repoInfo,l;typeof process<"u"&&r_&&(l=r_[y1]),l?(i=`http://${l}?ns=${a.namespace}`,o=V_(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new rk(t.name,t.options,e);JO("Invalid Firebase Database URL",o),De(o.path)||Sr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=T1(a,t,u,new nk(t.name,n));return new I1(h,t)}function b1(t,e){const n=dd[e];(!n||n[t.key]!==t)&&Sr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),h1(t),delete n[t.key]}function T1(t,e,n,r){let s=dd[e.name];s||(s={},dd[e.name]=s);let i=s[t.toURLString()];return i&&Sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new i1(t,v1,n,r),s[t.toURLString()]=i,i}class I1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(o1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new oo(this._repo,Ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(b1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sr("Cannot call "+e+" on a deleted database.")}}function A1(t=tu(),e){const n=La(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lf("database");r&&C1(n,...r)}return n}function C1(t,e,n,r={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Sr("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Sr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Wl(Wl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:uf(r.mockUserToken,t.app.options.projectId);i=new Wl(o)}w1(s,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){$x(Is),ds(new Cr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return E1(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Tn(s_,i_,t),Tn(s_,i_,"esm2017")}Tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};R1();var F_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var js,bb;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,w){function A(){}A.prototype=w.prototype,I.D=w.prototype,I.prototype=new A,I.prototype.constructor=I,I.C=function(v,R,S){for(var C=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)C[ye-2]=arguments[ye];return w.prototype[R].apply(v,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,w,A){A||(A=0);var v=Array(16);if(typeof w=="string")for(var R=0;16>R;++R)v[R]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(R=0;16>R;++R)v[R]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=I.g[0],A=I.g[1],R=I.g[2];var S=I.g[3],C=w+(S^A&(R^S))+v[0]+3614090360&4294967295;w=A+(C<<7&4294967295|C>>>25),C=S+(R^w&(A^R))+v[1]+3905402710&4294967295,S=w+(C<<12&4294967295|C>>>20),C=R+(A^S&(w^A))+v[2]+606105819&4294967295,R=S+(C<<17&4294967295|C>>>15),C=A+(w^R&(S^w))+v[3]+3250441966&4294967295,A=R+(C<<22&4294967295|C>>>10),C=w+(S^A&(R^S))+v[4]+4118548399&4294967295,w=A+(C<<7&4294967295|C>>>25),C=S+(R^w&(A^R))+v[5]+1200080426&4294967295,S=w+(C<<12&4294967295|C>>>20),C=R+(A^S&(w^A))+v[6]+2821735955&4294967295,R=S+(C<<17&4294967295|C>>>15),C=A+(w^R&(S^w))+v[7]+4249261313&4294967295,A=R+(C<<22&4294967295|C>>>10),C=w+(S^A&(R^S))+v[8]+1770035416&4294967295,w=A+(C<<7&4294967295|C>>>25),C=S+(R^w&(A^R))+v[9]+2336552879&4294967295,S=w+(C<<12&4294967295|C>>>20),C=R+(A^S&(w^A))+v[10]+4294925233&4294967295,R=S+(C<<17&4294967295|C>>>15),C=A+(w^R&(S^w))+v[11]+2304563134&4294967295,A=R+(C<<22&4294967295|C>>>10),C=w+(S^A&(R^S))+v[12]+1804603682&4294967295,w=A+(C<<7&4294967295|C>>>25),C=S+(R^w&(A^R))+v[13]+4254626195&4294967295,S=w+(C<<12&4294967295|C>>>20),C=R+(A^S&(w^A))+v[14]+2792965006&4294967295,R=S+(C<<17&4294967295|C>>>15),C=A+(w^R&(S^w))+v[15]+1236535329&4294967295,A=R+(C<<22&4294967295|C>>>10),C=w+(R^S&(A^R))+v[1]+4129170786&4294967295,w=A+(C<<5&4294967295|C>>>27),C=S+(A^R&(w^A))+v[6]+3225465664&4294967295,S=w+(C<<9&4294967295|C>>>23),C=R+(w^A&(S^w))+v[11]+643717713&4294967295,R=S+(C<<14&4294967295|C>>>18),C=A+(S^w&(R^S))+v[0]+3921069994&4294967295,A=R+(C<<20&4294967295|C>>>12),C=w+(R^S&(A^R))+v[5]+3593408605&4294967295,w=A+(C<<5&4294967295|C>>>27),C=S+(A^R&(w^A))+v[10]+38016083&4294967295,S=w+(C<<9&4294967295|C>>>23),C=R+(w^A&(S^w))+v[15]+3634488961&4294967295,R=S+(C<<14&4294967295|C>>>18),C=A+(S^w&(R^S))+v[4]+3889429448&4294967295,A=R+(C<<20&4294967295|C>>>12),C=w+(R^S&(A^R))+v[9]+568446438&4294967295,w=A+(C<<5&4294967295|C>>>27),C=S+(A^R&(w^A))+v[14]+3275163606&4294967295,S=w+(C<<9&4294967295|C>>>23),C=R+(w^A&(S^w))+v[3]+4107603335&4294967295,R=S+(C<<14&4294967295|C>>>18),C=A+(S^w&(R^S))+v[8]+1163531501&4294967295,A=R+(C<<20&4294967295|C>>>12),C=w+(R^S&(A^R))+v[13]+2850285829&4294967295,w=A+(C<<5&4294967295|C>>>27),C=S+(A^R&(w^A))+v[2]+4243563512&4294967295,S=w+(C<<9&4294967295|C>>>23),C=R+(w^A&(S^w))+v[7]+1735328473&4294967295,R=S+(C<<14&4294967295|C>>>18),C=A+(S^w&(R^S))+v[12]+2368359562&4294967295,A=R+(C<<20&4294967295|C>>>12),C=w+(A^R^S)+v[5]+4294588738&4294967295,w=A+(C<<4&4294967295|C>>>28),C=S+(w^A^R)+v[8]+2272392833&4294967295,S=w+(C<<11&4294967295|C>>>21),C=R+(S^w^A)+v[11]+1839030562&4294967295,R=S+(C<<16&4294967295|C>>>16),C=A+(R^S^w)+v[14]+4259657740&4294967295,A=R+(C<<23&4294967295|C>>>9),C=w+(A^R^S)+v[1]+2763975236&4294967295,w=A+(C<<4&4294967295|C>>>28),C=S+(w^A^R)+v[4]+1272893353&4294967295,S=w+(C<<11&4294967295|C>>>21),C=R+(S^w^A)+v[7]+4139469664&4294967295,R=S+(C<<16&4294967295|C>>>16),C=A+(R^S^w)+v[10]+3200236656&4294967295,A=R+(C<<23&4294967295|C>>>9),C=w+(A^R^S)+v[13]+681279174&4294967295,w=A+(C<<4&4294967295|C>>>28),C=S+(w^A^R)+v[0]+3936430074&4294967295,S=w+(C<<11&4294967295|C>>>21),C=R+(S^w^A)+v[3]+3572445317&4294967295,R=S+(C<<16&4294967295|C>>>16),C=A+(R^S^w)+v[6]+76029189&4294967295,A=R+(C<<23&4294967295|C>>>9),C=w+(A^R^S)+v[9]+3654602809&4294967295,w=A+(C<<4&4294967295|C>>>28),C=S+(w^A^R)+v[12]+3873151461&4294967295,S=w+(C<<11&4294967295|C>>>21),C=R+(S^w^A)+v[15]+530742520&4294967295,R=S+(C<<16&4294967295|C>>>16),C=A+(R^S^w)+v[2]+3299628645&4294967295,A=R+(C<<23&4294967295|C>>>9),C=w+(R^(A|~S))+v[0]+4096336452&4294967295,w=A+(C<<6&4294967295|C>>>26),C=S+(A^(w|~R))+v[7]+1126891415&4294967295,S=w+(C<<10&4294967295|C>>>22),C=R+(w^(S|~A))+v[14]+2878612391&4294967295,R=S+(C<<15&4294967295|C>>>17),C=A+(S^(R|~w))+v[5]+4237533241&4294967295,A=R+(C<<21&4294967295|C>>>11),C=w+(R^(A|~S))+v[12]+1700485571&4294967295,w=A+(C<<6&4294967295|C>>>26),C=S+(A^(w|~R))+v[3]+2399980690&4294967295,S=w+(C<<10&4294967295|C>>>22),C=R+(w^(S|~A))+v[10]+4293915773&4294967295,R=S+(C<<15&4294967295|C>>>17),C=A+(S^(R|~w))+v[1]+2240044497&4294967295,A=R+(C<<21&4294967295|C>>>11),C=w+(R^(A|~S))+v[8]+1873313359&4294967295,w=A+(C<<6&4294967295|C>>>26),C=S+(A^(w|~R))+v[15]+4264355552&4294967295,S=w+(C<<10&4294967295|C>>>22),C=R+(w^(S|~A))+v[6]+2734768916&4294967295,R=S+(C<<15&4294967295|C>>>17),C=A+(S^(R|~w))+v[13]+1309151649&4294967295,A=R+(C<<21&4294967295|C>>>11),C=w+(R^(A|~S))+v[4]+4149444226&4294967295,w=A+(C<<6&4294967295|C>>>26),C=S+(A^(w|~R))+v[11]+3174756917&4294967295,S=w+(C<<10&4294967295|C>>>22),C=R+(w^(S|~A))+v[2]+718787259&4294967295,R=S+(C<<15&4294967295|C>>>17),C=A+(S^(R|~w))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+w&4294967295,I.g[1]=I.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,w){w===void 0&&(w=I.length);for(var A=w-this.blockSize,v=this.B,R=this.h,S=0;S<w;){if(R==0)for(;S<=A;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<w;)if(v[R++]=I.charCodeAt(S++),R==this.blockSize){s(this,v),R=0;break}}else for(;S<w;)if(v[R++]=I[S++],R==this.blockSize){s(this,v),R=0;break}}this.h=R,this.o+=w},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var w=1;w<I.length-8;++w)I[w]=0;var A=8*this.o;for(w=I.length-8;w<I.length;++w)I[w]=A&255,A/=256;for(this.u(I),I=Array(16),w=A=0;4>w;++w)for(var v=0;32>v;v+=8)I[A++]=this.g[w]>>>v&255;return I};function i(I,w){var A=a;return Object.prototype.hasOwnProperty.call(A,I)?A[I]:A[I]=w(I)}function o(I,w){this.h=w;for(var A=[],v=!0,R=I.length-1;0<=R;R--){var S=I[R]|0;v&&S==w||(A[R]=S,v=!1)}this.g=A}var a={};function l(I){return-128<=I&&128>I?i(I,function(w){return new o([w|0],0>w?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return d;if(0>I)return T(u(-I));for(var w=[],A=1,v=0;I>=A;v++)w[v]=I/A|0,A*=4294967296;return new o(w,0)}function h(I,w){if(I.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I.charAt(0)=="-")return T(h(I.substring(1),w));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=u(Math.pow(w,8)),v=d,R=0;R<I.length;R+=8){var S=Math.min(8,I.length-R),C=parseInt(I.substring(R,R+S),w);8>S?(S=u(Math.pow(w,S)),v=v.j(S).add(u(C))):(v=v.j(A),v=v.add(u(C)))}return v}var d=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(E(this))return-T(this).m();for(var I=0,w=1,A=0;A<this.g.length;A++){var v=this.i(A);I+=(0<=v?v:4294967296+v)*w,w*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(E(this))return"-"+T(this).toString(I);for(var w=u(Math.pow(I,6)),A=this,v="";;){var R=V(A,w).g;A=k(A,R.j(w));var S=((0<A.g.length?A.g[0]:A.h)>>>0).toString(I);if(A=R,_(A))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var w=0;w<I.g.length;w++)if(I.g[w]!=0)return!1;return!0}function E(I){return I.h==-1}t.l=function(I){return I=k(this,I),E(I)?-1:_(I)?0:1};function T(I){for(var w=I.g.length,A=[],v=0;v<w;v++)A[v]=~I.g[v];return new o(A,~I.h).add(p)}t.abs=function(){return E(this)?T(this):this},t.add=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],v=0,R=0;R<=w;R++){var S=v+(this.i(R)&65535)+(I.i(R)&65535),C=(S>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);v=C>>>16,S&=65535,C&=65535,A[R]=C<<16|S}return new o(A,A[A.length-1]&-2147483648?-1:0)};function k(I,w){return I.add(T(w))}t.j=function(I){if(_(this)||_(I))return d;if(E(this))return E(I)?T(this).j(T(I)):T(T(this).j(I));if(E(I))return T(this.j(T(I)));if(0>this.l(g)&&0>I.l(g))return u(this.m()*I.m());for(var w=this.g.length+I.g.length,A=[],v=0;v<2*w;v++)A[v]=0;for(v=0;v<this.g.length;v++)for(var R=0;R<I.g.length;R++){var S=this.i(v)>>>16,C=this.i(v)&65535,ye=I.i(R)>>>16,$e=I.i(R)&65535;A[2*v+2*R]+=C*$e,D(A,2*v+2*R),A[2*v+2*R+1]+=S*$e,D(A,2*v+2*R+1),A[2*v+2*R+1]+=C*ye,D(A,2*v+2*R+1),A[2*v+2*R+2]+=S*ye,D(A,2*v+2*R+2)}for(v=0;v<w;v++)A[v]=A[2*v+1]<<16|A[2*v];for(v=w;v<2*w;v++)A[v]=0;return new o(A,0)};function D(I,w){for(;(I[w]&65535)!=I[w];)I[w+1]+=I[w]>>>16,I[w]&=65535,w++}function O(I,w){this.g=I,this.h=w}function V(I,w){if(_(w))throw Error("division by zero");if(_(I))return new O(d,d);if(E(I))return w=V(T(I),w),new O(T(w.g),T(w.h));if(E(w))return w=V(I,T(w)),new O(T(w.g),w.h);if(30<I.g.length){if(E(I)||E(w))throw Error("slowDivide_ only works with positive integers.");for(var A=p,v=w;0>=v.l(I);)A=j(A),v=j(v);var R=F(A,1),S=F(v,1);for(v=F(v,2),A=F(A,2);!_(v);){var C=S.add(v);0>=C.l(I)&&(R=R.add(A),S=C),v=F(v,1),A=F(A,1)}return w=k(I,R.j(w)),new O(R,w)}for(R=d;0<=I.l(w);){for(A=Math.max(1,Math.floor(I.m()/w.m())),v=Math.ceil(Math.log(A)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=u(A),C=S.j(w);E(C)||0<C.l(I);)A-=v,S=u(A),C=S.j(w);_(S)&&(S=p),R=R.add(S),I=k(I,C)}return new O(R,I)}t.A=function(I){return V(this,I).h},t.and=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],v=0;v<w;v++)A[v]=this.i(v)&I.i(v);return new o(A,this.h&I.h)},t.or=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],v=0;v<w;v++)A[v]=this.i(v)|I.i(v);return new o(A,this.h|I.h)},t.xor=function(I){for(var w=Math.max(this.g.length,I.g.length),A=[],v=0;v<w;v++)A[v]=this.i(v)^I.i(v);return new o(A,this.h^I.h)};function j(I){for(var w=I.g.length+1,A=[],v=0;v<w;v++)A[v]=I.i(v)<<1|I.i(v-1)>>>31;return new o(A,I.h)}function F(I,w){var A=w>>5;w%=32;for(var v=I.g.length-A,R=[],S=0;S<v;S++)R[S]=0<w?I.i(S+A)>>>w|I.i(S+A+1)<<32-w:I.i(S+A);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bb=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,js=o}).apply(typeof F_<"u"?F_:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tb,Ib,qo,Ab,zl,fd,Cb,Rb,Sb;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var m=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var N=c[y];if(!(N in m))break e;m=m[N]}c=c[c.length-1],y=m[c],f=f(y),f!=y&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,y=!1,N={next:function(){if(!y&&m<c.length){var L=m++;return{value:f(L,c[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,m){return c.call.apply(c.bind,arguments)}function d(c,f,m){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),c.apply(f,N)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function _(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(y,N,L){for(var Z=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)Z[Ye-2]=arguments[Ye];return f.prototype[N].apply(y,Z)}}function E(c){const f=c.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=c[y];return m}return[]}function T(c,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const N=c.length||0,L=y.length||0;c.length=N+L;for(let Z=0;Z<L;Z++)c[N+Z]=y[Z]}else c.push(y)}}class k{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function D(c){return/^[\s\xa0]*$/.test(c)}function O(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function V(c){return V[" "](c),c}V[" "]=function(){};var j=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function F(c,f,m){for(const y in c)f.call(m,c[y],y,c)}function I(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function w(c){const f={};for(const m in c)f[m]=c[m];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(c,f){let m,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(m in y)c[m]=y[m];for(let L=0;L<A.length;L++)m=A[L],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function R(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function C(){var c=Et;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class ye{constructor(){this.h=this.g=null}add(f,m){const y=$e.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var $e=new k(()=>new Re,c=>c.reset());class Re{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,Ce=!1,Et=new ye,on=()=>{const c=a.Promise.resolve(void 0);ve=()=>{c.then(At)}};var At=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(m){S(m)}var f=$e;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}Ce=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Ur=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function Hn(c,f){if(at.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(j){e:{try{V(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ct[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Hn.aa.h.call(this)}}_(Hn,at);var Ct={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ie=0;function re(c,f,m,y,N){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=N,this.key=++ie,this.da=this.fa=!1}function ae(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ne(c){this.src=c,this.g={},this.h=0}Ne.prototype.add=function(c,f,m,y,N){var L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);var Z=b(c,f,y,N);return-1<Z?(f=c[Z],m||(f.fa=!1)):(f=new re(f,this.src,L,!!y,N),f.fa=m,c.push(f)),f};function Ke(c,f){var m=f.type;if(m in c.g){var y=c.g[m],N=Array.prototype.indexOf.call(y,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(y,N,1),L&&(ae(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function b(c,f,m,y){for(var N=0;N<c.length;++N){var L=c[N];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==y)return N}return-1}var x="closure_lm_"+(1e6*Math.random()|0),M={};function q(c,f,m,y,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)q(c,f[L],m,y,N);return null}return m=de(m),c&&c[$]?c.K(f,m,u(y)?!!y.capture:!!y,N):U(c,f,m,!1,y,N)}function U(c,f,m,y,N,L){if(!f)throw Error("Invalid event type");var Z=u(N)?!!N.capture:!!N,Ye=se(c);if(Ye||(c[x]=Ye=new Ne(c)),m=Ye.add(f,m,y,Z,L),m.proxy)return m;if(y=Q(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)Ur||(N=Z),N===void 0&&(N=!1),c.addEventListener(f.toString(),y,N);else if(c.attachEvent)c.attachEvent(J(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Q(){function c(m){return f.call(c.src,c.listener,m)}const f=G;return c}function te(c,f,m,y,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)te(c,f[L],m,y,N);else y=u(y)?!!y.capture:!!y,m=de(m),c&&c[$]?(c=c.i,f=String(f).toString(),f in c.g&&(L=c.g[f],m=b(L,m,y,N),-1<m&&(ae(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete c.g[f],c.h--)))):c&&(c=se(c))&&(f=c.g[f.toString()],c=-1,f&&(c=b(f,m,y,N)),(m=-1<c?f[c]:null)&&K(m))}function K(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[$])Ke(f.i,c);else{var m=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(m,y,c.capture):f.detachEvent?f.detachEvent(J(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=se(f))?(Ke(m,c),m.h==0&&(m.src=null,f[x]=null)):ae(c)}}}function J(c){return c in M?M[c]:M[c]="on"+c}function G(c,f){if(c.da)c=!0;else{f=new Hn(f,this);var m=c.listener,y=c.ha||c.src;c.fa&&K(c),c=m.call(y,f)}return c}function se(c){return c=c[x],c instanceof Ne?c:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(c){return typeof c=="function"?c:(c[pe]||(c[pe]=function(f){return c.handleEvent(f)}),c[pe])}function ce(){ze.call(this),this.i=new Ne(this),this.M=this,this.F=null}_(ce,ze),ce.prototype[$]=!0,ce.prototype.removeEventListener=function(c,f,m,y){te(this,c,f,m,y)};function ge(c,f){var m,y=c.F;if(y)for(m=[];y;y=y.F)m.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new at(f,c);else if(f instanceof at)f.target=f.target||c;else{var N=f;f=new at(y,c),v(f,N)}if(N=!0,m)for(var L=m.length-1;0<=L;L--){var Z=f.g=m[L];N=Fe(Z,y,!0,f)&&N}if(Z=f.g=c,N=Fe(Z,y,!0,f)&&N,N=Fe(Z,y,!1,f)&&N,m)for(L=0;L<m.length;L++)Z=f.g=m[L],N=Fe(Z,y,!1,f)&&N}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],y=0;y<m.length;y++)ae(m[y]);delete c.g[f],c.h--}}this.F=null},ce.prototype.K=function(c,f,m,y){return this.i.add(String(c),f,!1,m,y)},ce.prototype.L=function(c,f,m,y){return this.i.add(String(c),f,!0,m,y)};function Fe(c,f,m,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var Z=f[L];if(Z&&!Z.da&&Z.capture==m){var Ye=Z.listener,Dt=Z.ha||Z.src;Z.fa&&Ke(c.i,Z),N=Ye.call(Dt,y)!==!1&&N}}return N&&!y.defaultPrevented}function Qe(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function ht(c){c.g=Qe(()=>{c.g=null,c.i&&(c.i=!1,ht(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class un extends ze{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(c){ze.call(this),this.h=c,this.g={}}_(yn,ze);var yo=[];function Br(c){F(c.g,function(f,m){this.g.hasOwnProperty(m)&&K(f)},c),c.g={}}yn.prototype.N=function(){yn.aa.N.call(this),Br(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ui=a.JSON.stringify,Zt=a.JSON.parse,vn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function hi(){}hi.prototype.h=null;function sm(c){return c.h||(c.h=c.i())}function im(){}var vo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nu(){at.call(this,"d")}_(Nu,at);function Mu(){at.call(this,"c")}_(Mu,at);var As={},om=null;function el(){return om=om||new ce}As.La="serverreachability";function am(c){at.call(this,As.La,c)}_(am,at);function wo(c){const f=el();ge(f,new am(f))}As.STAT_EVENT="statevent";function lm(c,f){at.call(this,As.STAT_EVENT,c),this.stat=f}_(lm,at);function en(c){const f=el();ge(f,new lm(f,c))}As.Ma="timingevent";function cm(c,f){at.call(this,As.Ma,c),this.size=f}_(cm,at);function Eo(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function bo(){this.g=!0}bo.prototype.xa=function(){this.g=!1};function d0(c,f,m,y,N,L){c.info(function(){if(c.g)if(L)for(var Z="",Ye=L.split("&"),Dt=0;Dt<Ye.length;Dt++){var Be=Ye[Dt].split("=");if(1<Be.length){var $t=Be[0];Be=Be[1];var jt=$t.split("_");Z=2<=jt.length&&jt[1]=="type"?Z+($t+"="+Be+"&"):Z+($t+"=redacted&")}}else Z=null;else Z=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+f+`
`+m+`
`+Z})}function f0(c,f,m,y,N,L,Z){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+f+`
`+m+`
`+L+" "+Z})}function di(c,f,m,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+m0(c,m)+(y?" "+y:"")})}function p0(c,f){c.info(function(){return"TIMEOUT: "+f})}bo.prototype.info=function(){};function m0(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var y=m[c];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var Z=1;Z<N.length;Z++)N[Z]=""}}}}return ui(m)}catch{return f}}var tl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},um={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lu;function nl(){}_(nl,hi),nl.prototype.g=function(){return new XMLHttpRequest},nl.prototype.i=function(){return{}},Lu=new nl;function $r(c,f,m,y){this.j=c,this.i=f,this.l=m,this.R=y||1,this.U=new yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hm}function hm(){this.i=null,this.g="",this.h=!1}var dm={},Vu={};function Fu(c,f,m){c.L=1,c.v=ol(hr(f)),c.m=m,c.P=!0,fm(c,null)}function fm(c,f){c.F=Date.now(),rl(c),c.A=hr(c.v);var m=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Rm(m.i,"t",y),c.C=0,m=c.j.J,c.h=new hm,c.g=Hm(c.j,m?f:null,!c.m),0<c.O&&(c.M=new un(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,y=c.ca;var N="readystatechange";Array.isArray(N)||(N&&(yo[0]=N.toString()),N=yo);for(var L=0;L<N.length;L++){var Z=q(m,N[L],y||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),wo(),d0(c.i,c.u,c.A,c.l,c.R,c.m)}$r.prototype.ca=function(c){c=c.target;const f=this.M;f&&dr(c)==3?f.j():this.Y(c)},$r.prototype.Y=function(c){try{if(c==this.g)e:{const jt=dr(this.g);var f=this.g.Ba();const mi=this.g.Z();if(!(3>jt)&&(jt!=3||this.g&&(this.h.h||this.g.oa()||Nm(this.g)))){this.J||jt!=4||f==7||(f==8||0>=mi?wo(3):wo(2)),Uu(this);var m=this.g.Z();this.X=m;t:if(pm(this)){var y=Nm(this.g);c="";var N=y.length,L=dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cs(this),To(this);var Z="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(L&&f==N-1)});y.length=0,this.h.g+=c,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=m==200,f0(this.i,this.u,this.A,this.l,this.R,jt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Dt=this.g;if((Ye=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Ye)){var Be=Ye;break t}}Be=null}if(m=Be)di(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bu(this,m);else{this.o=!1,this.s=3,en(12),Cs(this),To(this);break e}}if(this.P){m=!0;let Sn;for(;!this.J&&this.C<Z.length;)if(Sn=g0(this,Z),Sn==Vu){jt==4&&(this.s=4,en(14),m=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==dm){this.s=4,en(15),di(this.i,this.l,Z,"[Invalid Chunk]"),m=!1;break}else di(this.i,this.l,Sn,null),Bu(this,Sn);if(pm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||Z.length!=0||this.h.h||(this.s=1,en(16),m=!1),this.o=this.o&&m,!m)di(this.i,this.l,Z,"[Invalid Chunked Response]"),Cs(this),To(this);else if(0<Z.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),zu($t),$t.M=!0,en(11))}}else di(this.i,this.l,Z,null),Bu(this,Z);jt==4&&Cs(this),this.o&&!this.J&&(jt==4?$m(this.j,this):(this.o=!1,rl(this)))}else D0(this.g),m==400&&0<Z.indexOf("Unknown SID")?(this.s=3,en(12)):(this.s=0,en(13)),Cs(this),To(this)}}}catch{}finally{}};function pm(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function g0(c,f){var m=c.C,y=f.indexOf(`
`,m);return y==-1?Vu:(m=Number(f.substring(m,y)),isNaN(m)?dm:(y+=1,y+m>f.length?Vu:(f=f.slice(y,y+m),c.C=y+m,f)))}$r.prototype.cancel=function(){this.J=!0,Cs(this)};function rl(c){c.S=Date.now()+c.I,mm(c,c.I)}function mm(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Eo(p(c.ba,c),f)}function Uu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}$r.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(p0(this.i,this.A),this.L!=2&&(wo(),en(17)),Cs(this),this.s=2,To(this)):mm(this,this.S-c)};function To(c){c.j.G==0||c.J||$m(c.j,c)}function Cs(c){Uu(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,Br(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Bu(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||$u(m.h,c))){if(!c.K&&$u(m.h,c)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)hl(m),cl(m);else break e;Hu(m),en(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=Eo(p(m.Za,m),6e3));if(1>=ym(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ss(m,11)}else if((c.K||m.g==c)&&hl(m),!D(f))for(N=m.Da.g.parse(f),f=0;f<N.length;f++){let Be=N[f];if(m.T=Be[0],Be=Be[1],m.G==2)if(Be[0]=="c"){m.K=Be[1],m.ia=Be[2];const $t=Be[3];$t!=null&&(m.la=$t,m.j.info("VER="+m.la));const jt=Be[4];jt!=null&&(m.Aa=jt,m.j.info("SVER="+m.Aa));const mi=Be[5];mi!=null&&typeof mi=="number"&&0<mi&&(y=1.5*mi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Sn=c.g;if(Sn){const fl=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fl){var L=y.h;L.g||fl.indexOf("spdy")==-1&&fl.indexOf("quic")==-1&&fl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ju(L,L.h),L.h=null))}if(y.D){const Gu=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(y.ya=Gu,Ze(y.I,y.D,Gu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var Z=c;if(y.qa=Wm(y,y.J?y.ia:null,y.W),Z.K){vm(y.h,Z);var Ye=Z,Dt=y.L;Dt&&(Ye.I=Dt),Ye.B&&(Uu(Ye),rl(Ye)),y.g=Z}else Um(y);0<m.i.length&&ul(m)}else Be[0]!="stop"&&Be[0]!="close"||Ss(m,7);else m.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?Ss(m,7):Wu(m):Be[0]!="noop"&&m.l&&m.l.ta(Be),m.v=0)}}wo(4)}catch{}}var _0=class{constructor(c,f){this.g=c,this.map=f}};function gm(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _m(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ym(c){return c.h?1:c.g?c.g.size:0}function $u(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function ju(c,f){c.g?c.g.add(f):c.h=f}function vm(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}gm.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function wm(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return E(c.i)}function y0(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,y=0;y<m;y++)f.push(c[y]);return f}f=[],m=0;for(y in c)f[m++]=c[y];return f}function v0(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const y in c)f[m++]=y;return f}}}function Em(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=v0(c),y=y0(c),N=y.length,L=0;L<N;L++)f.call(void 0,y[L],m&&m[L],c)}var bm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w0(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var y=c[m].indexOf("="),N=null;if(0<=y){var L=c[m].substring(0,y);N=c[m].substring(y+1)}else L=c[m];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Rs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Rs){this.h=c.h,sl(this,c.j),this.o=c.o,this.g=c.g,il(this,c.s),this.l=c.l;var f=c.i,m=new Co;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Tm(this,m),this.m=c.m}else c&&(f=String(c).match(bm))?(this.h=!1,sl(this,f[1]||"",!0),this.o=Io(f[2]||""),this.g=Io(f[3]||"",!0),il(this,f[4]),this.l=Io(f[5]||"",!0),Tm(this,f[6]||"",!0),this.m=Io(f[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}Rs.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Ao(f,Im,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Ao(f,Im,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Ao(m,m.charAt(0)=="/"?T0:b0,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Ao(m,A0)),c.join("")};function hr(c){return new Rs(c)}function sl(c,f,m){c.j=m?Io(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function il(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Tm(c,f,m){f instanceof Co?(c.i=f,C0(c.i,c.h)):(m||(f=Ao(f,I0)),c.i=new Co(f,c.h))}function Ze(c,f,m){c.i.set(f,m)}function ol(c){return Ze(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Io(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ao(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,E0),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function E0(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Im=/[#\/\?@]/g,b0=/[#\?:]/g,T0=/[#\?]/g,I0=/[#\?@]/g,A0=/#/g;function Co(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function jr(c){c.g||(c.g=new Map,c.h=0,c.i&&w0(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Co.prototype,t.add=function(c,f){jr(this),this.i=null,c=fi(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Am(c,f){jr(c),f=fi(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Cm(c,f){return jr(c),f=fi(c,f),c.g.has(f)}t.forEach=function(c,f){jr(this),this.g.forEach(function(m,y){m.forEach(function(N){c.call(f,N,y,this)},this)},this)},t.na=function(){jr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const N=c[y];for(let L=0;L<N.length;L++)m.push(f[y])}return m},t.V=function(c){jr(this);let f=[];if(typeof c=="string")Cm(this,c)&&(f=f.concat(this.g.get(fi(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return jr(this),this.i=null,c=fi(this,c),Cm(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Rm(c,f,m){Am(c,f),0<m.length&&(c.i=null,c.g.set(fi(c,f),E(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const L=encodeURIComponent(String(y)),Z=this.V(y);for(y=0;y<Z.length;y++){var N=L;Z[y]!==""&&(N+="="+encodeURIComponent(String(Z[y]))),c.push(N)}}return this.i=c.join("&")};function fi(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function C0(c,f){f&&!c.j&&(jr(c),c.i=null,c.g.forEach(function(m,y){var N=y.toLowerCase();y!=N&&(Am(this,y),Rm(this,N,m))},c)),c.j=f}function R0(c,f){const m=new bo;if(a.Image){const y=new Image;y.onload=g(qr,m,"TestLoadImage: loaded",!0,f,y),y.onerror=g(qr,m,"TestLoadImage: error",!1,f,y),y.onabort=g(qr,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=g(qr,m,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function S0(c,f){const m=new bo,y=new AbortController,N=setTimeout(()=>{y.abort(),qr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?qr(m,"TestPingServer: ok",!0,f):qr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),qr(m,"TestPingServer: error",!1,f)})}function qr(c,f,m,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(m)}catch{}}function P0(){this.g=new vn}function x0(c,f,m){const y=m||"";try{Em(c,function(N,L){let Z=N;u(N)&&(Z=ui(N)),f.push(y+L+"="+encodeURIComponent(Z))})}catch(N){throw f.push(y+"type="+encodeURIComponent("_badmap")),N}}function Ro(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Ro,hi),Ro.prototype.g=function(){return new al(this.l,this.j)},Ro.prototype.i=function(c){return function(){return c}}({});function al(c,f){ce.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(al,ce),t=al.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Po(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?So(this):Po(this),this.readyState==3&&Sm(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,So(this))},t.Qa=function(c){this.g&&(this.response=c,So(this))},t.ga=function(){this.g&&So(this)};function So(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Po(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Po(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Pm(c){let f="";return F(c,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function qu(c,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Pm(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Ze(c,f,m))}function ut(c){ce.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(ut,ce);var k0=/^https?$/i,O0=["POST","PUT"];t=ut.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lu.g(),this.v=this.o?sm(this.o):sm(Lu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(L){xm(this,L);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)m.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(O0,f,void 0))||y||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Z]of m)this.g.setRequestHeader(L,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dm(this),this.u=!0,this.g.send(c),this.u=!1}catch(L){xm(this,L)}};function xm(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,km(c),ll(c)}function km(c){c.A||(c.A=!0,ge(c,"complete"),ge(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ge(this,"complete"),ge(this,"abort"),ll(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ll(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Om(this):this.bb())},t.bb=function(){Om(this)};function Om(c){if(c.h&&typeof o<"u"&&(!c.v[1]||dr(c)!=4||c.Z()!=2)){if(c.u&&dr(c)==4)Qe(c.Ea,0,c);else if(ge(c,"readystatechange"),dr(c)==4){c.h=!1;try{const Z=c.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=Z===0){var N=String(c.D).match(bm)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!k0.test(N?N.toLowerCase():"")}m=y}if(m)ge(c,"complete"),ge(c,"success");else{c.m=6;try{var L=2<dr(c)?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.Z()+"]",km(c)}}finally{ll(c)}}}}function ll(c,f){if(c.g){Dm(c);const m=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ge(c,"ready");try{m.onreadystatechange=y}catch{}}}function Dm(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function dr(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Zt(f)}};function Nm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function D0(c){const f={};c=(c.g&&2<=dr(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(D(c[y]))continue;var m=R(c[y]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[N]||[];f[N]=L,L.push(m)}I(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xo(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Mm(c){this.Aa=0,this.i=[],this.j=new bo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xo("baseRetryDelayMs",5e3,c),this.cb=xo("retryDelaySeedMs",1e4,c),this.Wa=xo("forwardChannelMaxRetries",2,c),this.wa=xo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new gm(c&&c.concurrentRequestLimit),this.Da=new P0,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Mm.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,y){en(0),this.W=c,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Wm(this,null,this.W),ul(this)};function Wu(c){if(Lm(c),c.G==3){var f=c.U++,m=hr(c.I);if(Ze(m,"SID",c.K),Ze(m,"RID",f),Ze(m,"TYPE","terminate"),ko(c,m),f=new $r(c,c.j,f),f.L=2,f.v=ol(hr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Hm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),rl(f)}qm(c)}function cl(c){c.g&&(zu(c),c.g.cancel(),c.g=null)}function Lm(c){cl(c),c.u&&(a.clearTimeout(c.u),c.u=null),hl(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ul(c){if(!_m(c.h)&&!c.s){c.s=!0;var f=c.Ga;ve||on(),Ce||(ve(),Ce=!0),Et.add(f,c),c.B=0}}function N0(c,f){return ym(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Eo(p(c.Ga,c,f),jm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const N=new $r(this,this.j,c);let L=this.o;if(this.S&&(L?(L=w(L),v(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Fm(this,N,f),m=hr(this.I),Ze(m,"RID",c),Ze(m,"CVER",22),this.D&&Ze(m,"X-HTTP-Session-Id",this.D),ko(this,m),L&&(this.O?f="headers="+encodeURIComponent(String(Pm(L)))+"&"+f:this.m&&qu(m,this.m,L)),ju(this.h,N),this.Ua&&Ze(m,"TYPE","init"),this.P?(Ze(m,"$req",f),Ze(m,"SID","null"),N.T=!0,Fu(N,m,null)):Fu(N,m,f),this.G=2}}else this.G==3&&(c?Vm(this,c):this.i.length==0||_m(this.h)||Vm(this))};function Vm(c,f){var m;f?m=f.l:m=c.U++;const y=hr(c.I);Ze(y,"SID",c.K),Ze(y,"RID",m),Ze(y,"AID",c.T),ko(c,y),c.m&&c.o&&qu(y,c.m,c.o),m=new $r(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=Fm(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ju(c.h,m),Fu(m,y,f)}function ko(c,f){c.H&&F(c.H,function(m,y){Ze(f,y,m)}),c.l&&Em({},function(m,y){Ze(f,y,m)})}function Fm(c,f,m){m=Math.min(c.i.length,m);var y=c.l?p(c.l.Na,c.l,c):null;e:{var N=c.i;let L=-1;for(;;){const Z=["count="+m];L==-1?0<m?(L=N[0].g,Z.push("ofs="+L)):L=0:Z.push("ofs="+L);let Ye=!0;for(let Dt=0;Dt<m;Dt++){let Be=N[Dt].g;const $t=N[Dt].map;if(Be-=L,0>Be)L=Math.max(0,N[Dt].g-100),Ye=!1;else try{x0($t,Z,"req"+Be+"_")}catch{y&&y($t)}}if(Ye){y=Z.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,y}function Um(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;ve||on(),Ce||(ve(),Ce=!0),Et.add(f,c),c.v=0}}function Hu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Eo(p(c.Fa,c),jm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Bm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Eo(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,en(10),cl(this),Bm(this))};function zu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Bm(c){c.g=new $r(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=hr(c.qa);Ze(f,"RID","rpc"),Ze(f,"SID",c.K),Ze(f,"AID",c.T),Ze(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ze(f,"TO",c.ja),Ze(f,"TYPE","xmlhttp"),ko(c,f),c.m&&c.o&&qu(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=ol(hr(f)),m.m=null,m.P=!0,fm(m,c)}t.Za=function(){this.C!=null&&(this.C=null,cl(this),Hu(this),en(19))};function hl(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function $m(c,f){var m=null;if(c.g==f){hl(c),zu(c),c.g=null;var y=2}else if($u(c.h,f))m=f.D,vm(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var N=c.B;y=el(),ge(y,new cm(y,m)),ul(c)}else Um(c);else if(N=f.s,N==3||N==0&&0<f.X||!(y==1&&N0(c,f)||y==2&&Hu(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),N){case 1:Ss(c,5);break;case 4:Ss(c,10);break;case 3:Ss(c,6);break;default:Ss(c,2)}}}function jm(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function Ss(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),y=c.Xa;const N=!y;y=new Rs(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||sl(y,"https"),ol(y),N?R0(y.toString(),m):S0(y.toString(),m)}else en(2);c.G=0,c.l&&c.l.sa(f),qm(c),Lm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function qm(c){if(c.G=0,c.ka=[],c.l){const f=wm(c.h);(f.length!=0||c.i.length!=0)&&(T(c.ka,f),T(c.ka,c.i),c.h.i.length=0,E(c.i),c.i.length=0),c.l.ra()}}function Wm(c,f,m){var y=m instanceof Rs?hr(m):new Rs(m);if(y.g!="")f&&(y.g=f+"."+y.g),il(y,y.s);else{var N=a.location;y=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new Rs(null);y&&sl(L,y),f&&(L.g=f),N&&il(L,N),m&&(L.l=m),y=L}return m=c.D,f=c.ya,m&&f&&Ze(y,m,f),Ze(y,"VER",c.la),ko(c,y),y}function Hm(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new ut(new Ro({eb:m})):new ut(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zm(){}t=zm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function dl(){}dl.prototype.g=function(c,f){return new hn(c,f)};function hn(c,f){ce.call(this),this.g=new Mm(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!D(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!D(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new pi(this)}_(hn,ce),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Wu(this.g)},hn.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=ui(c),c=m);f.i.push(new _0(f.Ya++,c)),f.G==3&&ul(f)},hn.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,hn.aa.N.call(this)};function Gm(c){Nu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}_(Gm,Nu);function Km(){Mu.call(this),this.status=1}_(Km,Mu);function pi(c){this.g=c}_(pi,zm),pi.prototype.ua=function(){ge(this.g,"a")},pi.prototype.ta=function(c){ge(this.g,new Gm(c))},pi.prototype.sa=function(c){ge(this.g,new Km)},pi.prototype.ra=function(){ge(this.g,"b")},dl.prototype.createWebChannel=dl.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,Sb=function(){return new dl},Rb=function(){return el()},Cb=As,fd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tl.NO_ERROR=0,tl.TIMEOUT=8,tl.HTTP_ERROR=6,zl=tl,um.COMPLETE="complete",Ab=um,im.EventType=vo,vo.OPEN="a",vo.CLOSE="b",vo.ERROR="c",vo.MESSAGE="d",ce.prototype.listen=ce.prototype.K,qo=im,Ib=Ro,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,Tb=ut}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const U_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new eu("@firebase/firestore");function Vo(){return Qs.logLevel}function le(t,...e){if(Qs.logLevel<=ke.DEBUG){const n=e.map(Hf);Qs.debug(`Firestore (${ao}): ${t}`,...n)}}function Pr(t,...e){if(Qs.logLevel<=ke.ERROR){const n=e.map(Hf);Qs.error(`Firestore (${ao}): ${t}`,...n)}}function Wi(t,...e){if(Qs.logLevel<=ke.WARN){const n=e.map(Hf);Qs.warn(`Firestore (${ao}): ${t}`,...n)}}function Hf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Xe(t,e){t||be()}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class P1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class x1{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string"),new Pb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Wt(e)}}class k1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class O1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new k1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,le("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string"),this.R=n.token,new D1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=M1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function je(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Tt(0,0))}static max(){return new Te(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r){n===void 0?n=0:n>e.length&&be(),r===void 0?r=e.length-n:r>e.length-n&&be(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ba?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends ba{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new st(n)}static emptyPath(){return new st([])}}const L1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends ba{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return L1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(st.fromString(e))}static fromName(e){return new me(st.fromString(e).popFirst(5))}static empty(){return new me(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new st(e.slice()))}}function V1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new ps(s,me.empty(),e)}function F1(t){return new ps(t.readTime,t.key,-1)}class ps{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ps(Te.min(),me.empty(),-1)}static max(){return new ps(Te.max(),me.empty(),-1)}}function U1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:je(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==B1)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function j1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function za(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zf.oe=-1;function hu(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function q1(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Mt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Al(this.root,e,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Al(this.root,e,this.comparator,!0)}}class Al{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $_(this.data.getIterator())}getIteratorFrom(e){return new $_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ut(this.comparator);return n.data=e,n}}class $_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new Dn([])}unionWith(e){let n=new Ut(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ob("Invalid base64 string: "+i):i}}(e);return new Xt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const W1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ms(t){if(Xe(!!t),typeof t=="string"){let e=0;const n=W1.exec(t);if(Xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(t.seconds),nanos:gt(t.nanos)}}function gt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kf(t){const e=t.mapValue.fields.__previous_value__;return Gf(e)?Kf(e):e}function Ta(t){const e=ms(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gf(t)?4:z1(t)?9007199254740991:10:be()}function rr(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ta(t).isEqual(Ta(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ms(s.timestampValue),a=ms(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ys(s.bytesValue).isEqual(Ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return gt(s.geoPointValue.latitude)===gt(i.geoPointValue.latitude)&&gt(s.geoPointValue.longitude)===gt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return gt(s.integerValue)===gt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=gt(s.doubleValue),a=gt(i.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(B_(o)!==B_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!rr(o[l],a[l])))return!1;return!0}(t,e);default:return be()}}function Aa(t,e){return(t.values||[]).find(n=>rr(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=Xs(t),r=Xs(e);if(n!==r)return je(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=gt(i.integerValue||i.doubleValue),l=gt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return j_(t.timestampValue,e.timestampValue);case 4:return j_(Ta(t),Ta(e));case 5:return je(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ys(i),l=Ys(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=je(a[u],l[u]);if(h!==0)return h}return je(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=je(gt(i.latitude),gt(o.latitude));return a!==0?a:je(gt(i.longitude),gt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=zi(a[u],l[u]);if(h)return h}return je(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Cl.mapValue&&o===Cl.mapValue)return 0;if(i===Cl.mapValue)return 1;if(o===Cl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=je(l[d],h[d]);if(p!==0)return p;const g=zi(a[l[d]],u[h[d]]);if(g!==0)return g}return je(l.length,h.length)}(t.mapValue,e.mapValue);default:throw be()}}function j_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return je(t,e);const n=ms(t),r=ms(e),s=je(n.seconds,r.seconds);return s!==0?s:je(n.nanos,r.nanos)}function Gi(t){return pd(t)}function pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ms(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return me.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pd(n.fields[o])}`;return s+"}"}(t.mapValue):be()}function q_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function md(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function W_(t){return!!t&&"nullValue"in t}function H_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gl(t){return!!t&&"mapValue"in t}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function z1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=Ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){lo(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wn(oa(this.value))}}function Db(t){const e=[];return lo(t.fields,(n,r)=>{const s=new Ft([n]);if(Gl(r)){const i=Db(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Gt(e,0,Te.min(),Te.min(),Te.min(),wn.empty(),0)}static newFoundDocument(e,n,r,s){return new Gt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new Gt(e,2,n,Te.min(),Te.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,Te.min(),Te.min(),wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function z_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function G_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function G1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{}class _t extends Nb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Q1(e,n,r):n==="array-contains"?new J1(e,r):n==="in"?new Z1(e,r):n==="not-in"?new eD(e,r):n==="array-contains-any"?new tD(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Y1(e,r):new X1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zi(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends Nb{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $n(e,n)}matches(e){return Mb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mb(t){return t.op==="and"}function Lb(t){return K1(t)&&Mb(t)}function K1(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function gd(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(Lb(t))return t.filters.map(e=>gd(e)).join(",");{const e=t.filters.map(n=>gd(n)).join(",");return`${t.op}(${e})`}}function Vb(t,e){return t instanceof _t?function(r,s){return s instanceof _t&&r.op===s.op&&r.field.isEqual(s.field)&&rr(r.value,s.value)}(t,e):t instanceof $n?function(r,s){return s instanceof $n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Vb(o,s.filters[a]),!0):!1}(t,e):void be()}function Fb(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(Fb).join(" ,")+"}"}(t):"Filter"}class Q1 extends _t{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class Y1 extends _t{constructor(e,n){super(e,"in",n),this.keys=Ub("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X1 extends _t{constructor(e,n){super(e,"not-in",n),this.keys=Ub("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ub(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>me.fromName(r.referenceValue))}class J1 extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&Aa(n.arrayValue,this.value)}}class Z1 extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class eD extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class tD extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function K_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new nD(t,e,n,r,s,i,o)}function Yf(t){const e=Ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gi(r)).join(",")),e.ue=n}return e.ue}function Xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!G1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Vb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!G_(t.startAt,e.startAt)&&G_(t.endAt,e.endAt)}function _d(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rD(t,e,n,r,s,i,o,a){return new co(t,e,n,r,s,i,o,a)}function du(t){return new co(t)}function Q_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bb(t){return t.collectionGroup!==null}function aa(t){const e=Ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ut(Ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ca(i,r))}),n.has(Ft.keyField().canonicalString())||e.ce.push(new Ca(Ft.keyField(),r))}return e.ce}function Zn(t){const e=Ae(t);return e.le||(e.le=sD(e,aa(t))),e.le}function sD(t,e){if(t.limitType==="F")return K_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ca(s.field,i)});const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return K_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yd(t,e){const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ic(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return Xf(Zn(t),Zn(e))&&t.limitType===e.limitType}function $b(t){return`${Yf(Zn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fb(s)).join(", ")}]`),hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Gi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Gi(s)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function pu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of aa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=z_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,aa(r),s)||r.endAt&&!function(o,a,l){const u=z_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,aa(r),s))}(t,e)}function iD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jb(t){return(e,n)=>{let r=!1;for(const s of aa(t)){const i=oD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oD(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?zi(l,u):be()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return be()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){lo(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=new ct(me.comparator);function xr(){return aD}const qb=new ct(me.comparator);function Wo(...t){let e=qb;for(const n of t)e=e.insert(n.key,n);return e}function Wb(t){let e=qb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vs(){return la()}function Hb(){return la()}function la(){return new uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const lD=new ct(me.comparator),cD=new Ut(me.comparator);function Oe(...t){let e=cD;for(const n of t)e=e.add(n);return e}const uD=new Ut(je);function hD(){return uD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function Gb(t){return{integerValue:""+t}}function dD(t,e){return q1(e)?Gb(e):zb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this._=void 0}}function fD(t,e,n){return t instanceof Ac?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gf(i)&&(i=Kf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ra?Qb(t,e):t instanceof Sa?Yb(t,e):function(s,i){const o=Kb(s,i),a=Y_(o)+Y_(s.Pe);return md(o)&&md(s.Pe)?Gb(a):zb(s.serializer,a)}(t,e)}function pD(t,e,n){return t instanceof Ra?Qb(t,e):t instanceof Sa?Yb(t,e):n}function Kb(t,e){return t instanceof Cc?function(r){return md(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ac extends mu{}class Ra extends mu{constructor(e){super(),this.elements=e}}function Qb(t,e){const n=Xb(e);for(const r of t.elements)n.some(s=>rr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends mu{constructor(e){super(),this.elements=e}}function Yb(t,e){let n=Xb(e);for(const r of t.elements)n=n.filter(s=>!rr(s,r));return{arrayValue:{values:n}}}class Cc extends mu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Y_(t){return gt(t.integerValue||t.doubleValue)}function Xb(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ra&&s instanceof Ra||r instanceof Sa&&s instanceof Sa?Hi(r.elements,s.elements,rr):r instanceof Cc&&s instanceof Cc?rr(r.Pe,s.Pe):r instanceof Ac&&s instanceof Ac}(t.transform,e.transform)}class gD{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gu{}function Jb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eT(t.key,er.none()):new Ga(t.key,t.data,er.none());{const n=t.data,r=wn.empty();let s=new Ut(Ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new oi(t.key,r,new Dn(s.toArray()),er.none())}}function _D(t,e,n){t instanceof Ga?function(s,i,o){const a=s.value.clone(),l=J_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof oi?function(s,i,o){if(!Kl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=J_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Zb(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ca(t,e,n,r){return t instanceof Ga?function(i,o,a,l){if(!Kl(i.precondition,o))return a;const u=i.value.clone(),h=Z_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof oi?function(i,o,a,l){if(!Kl(i.precondition,o))return a;const u=Z_(i.fieldTransforms,l,o),h=o.data;return h.setAll(Zb(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Kl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function yD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Kb(r.transform,s||null);i!=null&&(n===null&&(n=wn.empty()),n.set(r.field,i))}return n||null}function X_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hi(r,s,(i,o)=>mD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ga extends gu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oi extends gu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function J_(t,e,n){const r=new Map;Xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,pD(o,a,n[s]))}return r}function Z_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fD(i,o,e))}return r}class eT extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vD extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_D(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Hb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Jb(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Oe())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>X_(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>X_(n,r))}}class Jf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Xe(e.mutations.length===r.length);let s=function(){return lD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Me;function TD(t){switch(t){default:return be();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function tT(t){if(t===void 0)return Pr("GRPC error has no .code"),H.UNKNOWN;switch(t){case mt.OK:return H.OK;case mt.CANCELLED:return H.CANCELLED;case mt.UNKNOWN:return H.UNKNOWN;case mt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case mt.INTERNAL:return H.INTERNAL;case mt.UNAVAILABLE:return H.UNAVAILABLE;case mt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case mt.NOT_FOUND:return H.NOT_FOUND;case mt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case mt.ABORTED:return H.ABORTED;case mt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case mt.DATA_LOSS:return H.DATA_LOSS;default:return be()}}(Me=mt||(mt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new js([4294967295,4294967295],0);function ey(t){const e=ID().encode(t),n=new bb;return n.update(e),new Uint8Array(n.digest())}function ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new js([n,r],0),new js([s,i],0)]}class Zf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=js.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(js.fromNumber(r)));return s.compare(AD)===1&&(s=new js([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ey(e),[r,s]=ty(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=ey(e),[r,s]=ty(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(Te.min(),s,new ct(je),xr(),Oe())}}class Ka{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ka(r,n,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class nT{constructor(e,n){this.targetId=e,this.me=n}}class rT{constructor(e,n,r=Xt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ny{constructor(){this.fe=0,this.ge=sy(),this.pe=Xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Oe(),n=Oe(),r=Oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:be()}}),new Ka(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=sy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class CD{constructor(e){this.Le=e,this.Be=new Map,this.ke=xr(),this.qe=ry(),this.Qe=new ct(je)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:be()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(_d(i))if(r===0){const o=new me(i.path);this.Ue(n,o,Gt.newNoDocument(o,Te.min()))}else Xe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ys(r).toUint8Array()}catch(l){if(l instanceof Ob)return Wi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Zf(o,s,i)}catch(l){return Wi(l instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&_d(a.target)){const l=new me(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Gt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Oe();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _u(e,n,this.Qe,this.ke,r);return this.ke=xr(),this.qe=ry(),this.Qe=new ct(je),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ny,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ut(je),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ny),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ry(){return new ct(me.comparator)}function sy(){return new ct(me.comparator)}const RD={asc:"ASCENDING",desc:"DESCENDING"},SD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PD={and:"AND",or:"OR"};class xD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vd(t,e){return t.useProto3Json||hu(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kD(t,e){return Rc(t,e.toTimestamp())}function tr(t){return Xe(!!t),Te.fromTimestamp(function(n){const r=ms(n);return new Tt(r.seconds,r.nanos)}(t))}function ep(t,e){return wd(t,e).canonicalString()}function wd(t,e){const n=function(s){return new st(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iT(t){const e=st.fromString(t);return Xe(uT(e)),e}function Ed(t,e){return ep(t.databaseId,e.path)}function gh(t,e){const n=iT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(aT(n))}function oT(t,e){return ep(t.databaseId,e)}function OD(t){const e=iT(t);return e.length===4?st.emptyPath():aT(e)}function bd(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aT(t){return Xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iy(t,e,n){return{name:Ed(t,e),fields:n.value.mapValue.fields}}function DD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:be()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Xe(h===void 0||typeof h=="string"),Xt.fromBase64String(h||"")):(Xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:tT(u.code);return new oe(h,u.message||"")}(o);n=new rT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gh(t,r.document.name),i=tr(r.document.updateTime),o=r.document.createTime?tr(r.document.createTime):Te.min(),a=new wn({mapValue:{fields:r.document.fields}}),l=Gt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ql(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gh(t,r.document),i=r.readTime?tr(r.readTime):Te.min(),o=Gt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ql([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gh(t,r.document),i=r.removedTargetIds||[];n=new Ql([],i,s,null)}else{if(!("filter"in e))return be();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new bD(s,i),a=r.targetId;n=new nT(a,o)}}return n}function ND(t,e){let n;if(e instanceof Ga)n={update:iy(t,e.key,e.value)};else if(e instanceof eT)n={delete:Ed(t,e.key)};else if(e instanceof oi)n={update:iy(t,e.key,e.data),updateMask:qD(e.fieldMask)};else{if(!(e instanceof vD))return be();n={verify:Ed(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw be()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:be()}(t,e.precondition)),n}function MD(t,e){return t&&t.length>0?(Xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?tr(s.updateTime):tr(i);return o.isEqual(Te.min())&&(o=tr(i)),new gD(o,s.transformResults||[])}(n,e))):[]}function LD(t,e){return{documents:[oT(t,e.path)]}}function VD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oT(t,s);const i=function(u){if(u.length!==0)return cT($n.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ti(p.field),direction:BD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=vd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function FD(t){let e=OD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Xe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=lT(d);return p instanceof $n&&Lb(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(_){return new Ca(Ii(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,hu(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new Tc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new Tc(g,p)}(n.endAt)),rD(e,s,o,i,a,"F",l,u)}function UD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ii(n.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(n.unaryFilter.field);return _t.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});default:return be()}}(t):t.fieldFilter!==void 0?function(n){return _t.create(Ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return be()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(r=>lT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return be()}}(n.compositeFilter.op))}(t):be()}function BD(t){return RD[t]}function $D(t){return SD[t]}function jD(t){return PD[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return Ft.fromServerFormat(t.fieldPath)}function cT(t){return t instanceof _t?function(n){if(n.op==="=="){if(H_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(W_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(H_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(W_(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:$D(n.op),value:n.value}}}(t):t instanceof $n?function(n){const r=n.getFilters().map(s=>cT(s));return r.length===1?r[0]:{compositeFilter:{op:jD(n.op),filters:r}}}(t):be()}function qD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r,s,i=Te.min(),o=Te.min(),a=Xt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.ct=e}}function HD(t){const e=FD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(){this._n=new GD}addToCollectionParentIndex(e,n){return this._n.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(ps.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(ps.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class GD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ut(st.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ut(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ki(0)}static Ln(){return new Ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.changes=new uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ca(r.mutation,s,Dn.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Oe()){const s=Vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=xr();const o=la(),a=function(){return la()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof oi)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ca(h.mutation,u,h.mutation.getFieldMask(),Tt.now())):o.set(u.key,Dn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new QD(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=la();let s=new ct((o,a)=>o-a),i=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Dn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||Oe()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Hb();h.forEach(p=>{if(!i.has(p)){const g=Jb(n.get(p),r.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(Vs());let a=-1,l=i;return o.next(u=>z.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Oe())).next(h=>({batchId:a,changes:Wb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next(r=>{let s=Wo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Wo();return this.indexManager.getCollectionParents(e,i).next(a=>z.forEach(a,l=>{const u=function(d,p){return new co(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Gt.newInvalidDocument(h)))});let a=Wo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&ca(h.mutation,u,Dn.empty(),Tt.now()),pu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return z.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tr(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:HD(s.bundledQuery),readTime:tr(s.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.overlays=new ct(me.comparator),this.hr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vs();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=Vs(),i=n.length+1,o=new me(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ct((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Vs(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Vs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return z.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ED(n,r));let i=this.hr.get(n);i===void 0&&(i=Oe(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.Pr=new Ut(St.Ir),this.Tr=new Ut(St.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new St(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new St(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new me(new st([])),r=new St(n,e),s=new St(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new me(new st([])),r=new St(n,e),s=new St(n,e+1);let i=Oe();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new St(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class St{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return me.comparator(e.key,n.key)||je(e.pr,n.pr)}static Er(e,n){return je(e.pr,n.pr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ut(St.Ir)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new St(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new St(n,0),s=new St(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ut(je);return n.forEach(s=>{const i=new St(s,0),o=new St(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),z.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new St(new me(i),0);let a=new Ut(je);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.pr)),!0)},o),z.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return z.forEach(n.mutations,s=>{const i=new St(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new St(n,0),s=this.wr.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.vr=e,this.docs=function(){return new ct(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xr();const o=n.path,a=new me(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||U1(F1(h),r)<=0||(s.has(h.key)||pu(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){be()}Fr(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tN(this)}getSize(e){return z.resolve(this.size)}}class tN extends KD{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.persistence=e,this.Mr=new uo(n=>Yf(n),Xf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.Or=0,this.Nr=new tp,this.targetCount=0,this.Lr=Ki.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),z.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.qn(n),z.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n){this.Br={},this.overlays={},this.kr=new zf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nN(this),this.indexManager=new zD,this.remoteDocumentCache=function(s){return new eN(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new WD(n),this.$r=new XD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ZD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){le("MemoryPersistence","Starting transaction:",e);const s=new sN(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return z.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class sN extends $1{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.zr=new tp,this.jr=null}static Hr(e){return new np(e)}get Jr(){if(this.jr)return this.jr;throw be()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),z.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Jr,r=>{const s=me.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Te.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return z.or([()=>z.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Oe(),s=Oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return yR()?8:j1(Bt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new iN;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Vo()<=ke.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),z.resolve()):(Vo()<=ke.DEBUG&&le("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Vo()<=ke.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):z.resolve())}ji(e,n){if(Q_(n))return z.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ic(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Oe(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Ic(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return Q_(n)||s.isEqual(Te.min())?z.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?z.resolve(null):(Vo()<=ke.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bi(n)),this.es(e,o,n,V1(s,-1)).next(a=>a))})}Zi(e,n){let r=new Ut(jb(e));return n.forEach((s,i)=>{pu(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Vo()<=ke.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",bi(n)),this.zi.getDocumentsMatchingQuery(e,n,ps.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ct(je),this.rs=new uo(i=>Yf(i),Xf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YD(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function lN(t,e,n,r){return new aN(t,e,n,r)}async function hT(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Oe();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function cN(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let g=z.resolve();return p.forEach(_=>{g=g.next(()=>h.getEntry(l,_)).next(E=>{const T=u.docVersions.get(_);Xe(T!==null),E.version.compareTo(T)<0&&(d.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),h.addEntry(E)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Oe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dT(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function uN(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((h,d)=>{const p=s.get(d);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(E,T,k){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,g,h)&&a.push(n.Qr.updateTargetData(i,g))});let l=xr(),u=Oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(hN(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(Te.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(d=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return z.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function hN(t,e,n){let r=Oe(),s=Oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):le("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function dN(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fN(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new ss(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Td(t,e,n){const r=Ae(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!za(o))throw o;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function oy(t,e,n){const r=Ae(t);let s=Te.min(),i=Oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=Ae(l),p=d.rs.get(h);return p!==void 0?z.resolve(d.ns.get(p)):d.Qr.getTargetData(u,h)}(r,o,Zn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:Oe())).next(a=>(pN(r,iD(e),a),{documents:a,hs:i})))}function pN(t,e,n){let r=t.ss.get(e)||Te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class ay{constructor(){this.activeTargetIds=hD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mN{constructor(){this.no=new ay,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl=null;function _h(){return Rl===null?Rl=function(){return 268435456+Math.round(2147483648*Math.random())}():Rl++,"0x"+Rl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class vN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const a=_h(),l=this.vo(n,r.toUriEncodedString());le("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(le("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Wi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,a){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=_N[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=_h();return new Promise((o,a)=>{const l=new Tb;l.setWithCredentials(!0),l.listenOnce(Ab.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zl.NO_ERROR:const h=l.getResponseJson();le(qt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case zl.TIMEOUT:le(qt,`RPC '${e}' ${i} timed out`),a(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case zl.HTTP_ERROR:const d=l.getStatus();if(le(qt,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(T){const k=T.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(g.status);a(new oe(_,g.message))}else a(new oe(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new oe(H.UNAVAILABLE,"Connection failed."));break;default:be()}}finally{le(qt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);le(qt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=_h(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sb(),a=Rb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Ib({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");le(qt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const _=new yN({lo:T=>{g?le(qt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(p||(le(qt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),le(qt,`RPC '${e}' stream ${s} sending:`,T),d.send(T))},ho:()=>d.close()}),E=(T,k,D)=>{T.listen(k,O=>{try{D(O)}catch(V){setTimeout(()=>{throw V},0)}})};return E(d,qo.EventType.OPEN,()=>{g||(le(qt,`RPC '${e}' stream ${s} transport opened.`),_.mo())}),E(d,qo.EventType.CLOSE,()=>{g||(g=!0,le(qt,`RPC '${e}' stream ${s} transport closed`),_.po())}),E(d,qo.EventType.ERROR,T=>{g||(g=!0,Wi(qt,`RPC '${e}' stream ${s} transport errored:`,T),_.po(new oe(H.UNAVAILABLE,"The operation could not be completed")))}),E(d,qo.EventType.MESSAGE,T=>{var k;if(!g){const D=T.data[0];Xe(!!D);const O=D,V=O.error||((k=O[0])===null||k===void 0?void 0:k.error);if(V){le(qt,`RPC '${e}' stream ${s} received error:`,V);const j=V.status;let F=function(A){const v=mt[A];if(v!==void 0)return tT(v)}(j),I=V.message;F===void 0&&(F=H.INTERNAL,I="Unknown error status: "+j+" with message "+V.message),g=!0,_.po(new oe(F,I)),d.close()}else le(qt,`RPC '${e}' stream ${s} received:`,D),_.yo(D)}}),E(a,Cb.STAT_EVENT,T=>{T.stat===fd.PROXY?le(qt,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===fd.NOPROXY&&le(qt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function yh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t){return new xD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&le("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new fT(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new oe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wN extends pT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=DD(this.serializer,e),r=function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?tr(o.readTime):Te.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=bd(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=_d(l)?{documents:LD(i,l)}:{query:VD(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sT(i,o.resumeToken);const u=vd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){a.readTime=Rc(i,o.snapshotVersion.toTimestamp());const u=vd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=UD(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=bd(this.serializer),n.removeTarget=e,this.i_(n)}}class EN extends pT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=MD(e.writeResults,e.commitTime),r=tr(e.commitTime);return this.listener.A_(r,n)}return Xe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=bd(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ND(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,wd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(H.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,wd(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(H.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class TN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Pr(n),this.y_=!1):le("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{ai(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ae(l);u.M_.add(4),await Qa(u),u.N_.set("Unknown"),u.M_.delete(4),await vu(u)}(this))})}),this.N_=new TN(r,s)}}async function vu(t){if(ai(t))for(const e of t.x_)await e(!0)}async function Qa(t){for(const e of t.x_)await e(!1)}function mT(t,e){const n=Ae(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ap(n)?op(n):ho(n).Xo()&&ip(n,e))}function sp(t,e){const n=Ae(t),r=ho(n);n.F_.delete(e),r.Xo()&&gT(n,e),n.F_.size===0&&(r.Xo()?r.n_():ai(n)&&n.N_.set("Unknown"))}function ip(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).P_(e)}function gT(t,e){t.L_.xe(e),ho(t).I_(e)}function op(t){t.L_=new CD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.N_.w_()}function ap(t){return ai(t)&&!ho(t).Zo()&&t.F_.size>0}function ai(t){return Ae(t).M_.size===0}function _T(t){t.L_=void 0}async function AN(t){t.N_.set("Online")}async function CN(t){t.F_.forEach((e,n)=>{ip(t,e)})}async function RN(t,e){_T(t),ap(t)?(t.N_.D_(e),op(t)):t.N_.set("Unknown")}async function SN(t,e,n){if(t.N_.set("Online"),e instanceof rT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof Ql?t.L_.Ke(e):e instanceof nT?t.L_.He(e):t.L_.We(e),!n.isEqual(Te.min()))try{const r=await dT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(Xt.EMPTY_BYTE_STRING,h.snapshotVersion)),gT(i,l);const d=new ss(h.target,l,u,h.sequenceNumber);ip(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){le("RemoteStore","Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!za(e))throw e;t.M_.add(1),await Qa(t),t.N_.set("Offline"),n||(n=()=>dT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await vu(t)})}function yT(t,e){return e().catch(n=>Sc(t,n,e))}async function wu(t){const e=Ae(t),n=gs(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;PN(e);)try{const s=await dN(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,xN(e,s)}catch(s){await Sc(e,s)}vT(e)&&wT(e)}function PN(t){return ai(t)&&t.v_.length<10}function xN(t,e){t.v_.push(e);const n=gs(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function vT(t){return ai(t)&&!gs(t).Zo()&&t.v_.length>0}function wT(t){gs(t).start()}async function kN(t){gs(t).V_()}async function ON(t){const e=gs(t);for(const n of t.v_)e.d_(n.mutations)}async function DN(t,e,n){const r=t.v_.shift(),s=Jf.from(r,e,n);await yT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wu(t)}async function NN(t,e){e&&gs(t).E_&&await async function(r,s){if(function(o){return TD(o)&&o!==H.ABORTED}(s.code)){const i=r.v_.shift();gs(r).t_(),await yT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wu(r)}}(t,e),vT(t)&&wT(t)}async function cy(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.M_.add(3),await Qa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await vu(n)}async function MN(t,e){const n=Ae(t);e?(n.M_.delete(2),await vu(n)):e||(n.M_.add(2),await Qa(n),n.N_.set("Unknown"))}function ho(t){return t.B_||(t.B_=function(n,r,s){const i=Ae(n);return i.f_(),new wN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:AN.bind(null,t),To:CN.bind(null,t),Ao:RN.bind(null,t),h_:SN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),ap(t)?op(t):t.N_.set("Unknown")):(await t.B_.stop(),_T(t))})),t.B_}function gs(t){return t.k_||(t.k_=function(n,r,s){const i=Ae(n);return i.f_(),new EN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:kN.bind(null,t),Ao:NN.bind(null,t),R_:ON.bind(null,t),A_:DN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await wu(t)):(await t.k_.stop(),t.v_.length>0&&(le("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new lp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),za(t))return new oe(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=Wo(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.q_=new ct(me.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):be():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qi(e,n,Vi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class VN{constructor(){this.queries=new uo(e=>$b(e),fu),this.onlineState="Unknown",this.z_=new Set}}async function up(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new LN,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=cp(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&dp(n)}async function hp(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FN(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&dp(n)}function UN(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function dp(t){t.z_.forEach(e=>{e.next()})}var Id,hy;(hy=Id||(Id={})).J_="default",hy.Cache="cache";class fp{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Id.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.key=e}}class bT{constructor(e){this.key=e}}class BN{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Oe(),this.mutatedKeys=Oe(),this.Ia=jb(e),this.Ta=new Vi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new uy,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const p=s.get(h),g=pu(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;p&&g?p.data.isEqual(g.data)?_!==E&&(r.track({type:3,doc:g}),T=!0):this.Ra(p,g)||(r.track({type:2,doc:g}),T=!0,(l&&this.Ia(g,l)>0||u&&this.Ia(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),T=!0):p&&!g&&(r.track({type:1,doc:p}),T=!0,(l||u)&&(a=!0)),T&&(g?(o=o.add(g),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(g,_){const E=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be()}};return E(g)-E(_)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Qi(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new uy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new bT(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new ET(r))}),n}pa(e){this.la=e.hs,this.Pa=Oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Qi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class $N{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jN{constructor(e){this.key=e,this.wa=!1}}class qN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new uo(a=>$b(a),fu),this.Da=new Map,this.Ca=new Set,this.va=new ct(me.comparator),this.Fa=new Map,this.Ma=new tp,this.xa={},this.Oa=new Map,this.Na=Ki.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function WN(t,e,n=!0){const r=ST(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await TT(r,e,n,!0),s}async function HN(t,e){const n=ST(t);await TT(n,e,!0,!1)}async function TT(t,e,n,r){const s=await fN(t.localStore,Zn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await zN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&mT(t.remoteStore,s),a}async function zN(t,e,n,r,s){t.Ba=(d,p,g)=>async function(E,T,k,D){let O=T.view.da(k);O.Xi&&(O=await oy(E.localStore,T.query,!1).then(({documents:I})=>T.view.da(I,O)));const V=D&&D.targetChanges.get(T.targetId),j=D&&D.targetMismatches.get(T.targetId)!=null,F=T.view.applyChanges(O,E.isPrimaryClient,V,j);return fy(E,T.targetId,F.fa),F.snapshot}(t,d,p,g);const i=await oy(t.localStore,e,!0),o=new BN(e,i.hs),a=o.da(i.documents),l=Ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);fy(t,n,u.fa);const h=new $N(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function GN(t,e,n){const r=Ae(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!fu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Td(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sp(r.remoteStore,s.targetId),Ad(r,s.targetId)}).catch(Ha)):(Ad(r,s.targetId),await Td(r.localStore,s.targetId,!0))}async function KN(t,e){const n=Ae(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function QN(t,e,n){const r=nM(t);try{const s=await function(o,a){const l=Ae(o),u=Tt.now(),h=a.reduce((g,_)=>g.add(_.key),Oe());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=xr(),E=Oe();return l.os.getEntries(g,h).next(T=>{_=T,_.forEach((k,D)=>{D.isValidDocument()||(E=E.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(T=>{d=T;const k=[];for(const D of a){const O=yD(D,d.get(D.key).overlayedDocument);O!=null&&k.push(new oi(D.key,O,Db(O.value.mapValue),er.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,k,a)}).next(T=>{p=T;const k=T.applyToLocalDocumentSet(d,E);return l.documentOverlayCache.saveOverlays(g,T.batchId,k)})}).then(()=>({batchId:p.batchId,changes:Wb(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ct(je)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ya(r,s.changes),await wu(r.remoteStore)}catch(s){const i=cp(s,"Failed to persist write");n.reject(i)}}async function IT(t,e){const n=Ae(t);try{const r=await uN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Xe(o.wa):s.removedDocuments.size>0&&(Xe(o.wa),o.wa=!1))}),await Ya(n,r,e)}catch(r){await Ha(r)}}function dy(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Ae(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.U_)p.j_(a)&&(u=!0)}),u&&dp(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YN(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new ct(me.comparator);o=o.insert(i,Gt.newNoDocument(i,Te.min()));const a=Oe().add(i),l=new _u(Te.min(),new Map,new ct(je),o,a);await IT(r,l),r.va=r.va.remove(i),r.Fa.delete(e),pp(r)}else await Td(r.localStore,e,!1).then(()=>Ad(r,e,n)).catch(Ha)}async function XN(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await cN(n.localStore,e);CT(n,r,null),AT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ya(n,s)}catch(s){await Ha(s)}}async function JN(t,e,n){const r=Ae(t);try{const s=await function(o,a){const l=Ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Xe(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);CT(r,e,n),AT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ya(r,s)}catch(s){await Ha(s)}}function AT(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function CT(t,e,n){const r=Ae(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||RT(t,r)})}function RT(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(sp(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),pp(t))}function fy(t,e,n){for(const r of n)r instanceof ET?(t.Ma.addReference(r.key,e),ZN(t,r)):r instanceof bT?(le("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||RT(t,r.key)):be()}function ZN(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(le("SyncEngine","New document in limbo: "+n),t.Ca.add(r),pp(t))}function pp(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new me(st.fromString(e)),r=t.Na.next();t.Fa.set(r,new jN(n)),t.va=t.va.insert(n,r),mT(t.remoteStore,new ss(Zn(du(n.path)),r,"TargetPurposeLimboResolution",zf.oe))}}async function Ya(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const h=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=rp.Ki(l.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=Ae(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>z.forEach(u,p=>z.forEach(p.qi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>z.forEach(p.Qi,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!za(d))throw d;le("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.ns.get(p),_=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(_);h.ns=h.ns.insert(p,E)}}}(r.localStore,i))}async function eM(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const r=await hT(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new oe(H.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ya(n,r.us)}}function tM(t,e){const n=Ae(t),r=n.Fa.get(e);if(r&&r.wa)return Oe().add(r.key);{let s=Oe();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function ST(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YN.bind(null,e),e.Sa.h_=FN.bind(null,e.eventManager),e.Sa.ka=UN.bind(null,e.eventManager),e}function nM(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JN.bind(null,e),e}class py{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lN(this.persistence,new oN,e.initialUser,this.serializer)}createPersistence(e){return new rN(np.Hr,this.serializer)}createSharedClientState(e){return new mN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eM.bind(null,this.syncEngine),await MN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VN}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=function(i){return new vN(i)}(e.databaseInfo);return function(i,o,a,l){return new bN(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new IN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>dy(this.syncEngine,n,0),function(){return ly.D()?new ly:new gN}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new qN(s,i,o,a,l,u);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Ae(r);le("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Qa(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=xb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{le("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(le("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vh(t,e){t.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function my(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oM(t);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>cy(e.remoteStore,s)),t._onlineComponents=e}function iM(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function oM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!iM(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await vh(t,new py)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await vh(t,new py);return t._offlineComponents}async function PT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await my(t,t._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await my(t,new rM))),t._onlineComponents}function aM(t){return PT(t).then(e=>e.syncEngine)}async function Pc(t){const e=await PT(t),n=e.eventManager;return n.onListen=WN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KN.bind(null,e.syncEngine),n}function lM(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new mp({next:p=>{o.enqueueAndForget(()=>hp(i,d));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new oe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new oe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new fp(du(a.path),h,{includeMetadataChanges:!0,ra:!0});return up(i,d)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}function cM(t,e,n={}){const r=new Ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new mp({next:p=>{o.enqueueAndForget(()=>hp(i,d)),p.fromCache&&l.source==="server"?u.reject(new oe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new fp(a,h,{includeMetadataChanges:!0,ra:!0});return up(i,d)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e,n){if(!n)throw new oe(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uM(t,e,n,r){if(e===!0&&r===!0)throw new oe(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _y(t){if(!me.isDocumentKey(t))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yy(t){if(me.isDocumentKey(t))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be()}function Bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new S1;switch(r.type){case"firstParty":return new O1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gy.get(n);r&&(le("ComponentProvider","Removing Datastore"),gy.delete(n),r.terminate())}(this),Promise.resolve()}}function hM(t,e,n,r={}){var s;const i=(t=Bn(t,bu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Wt.MOCK_USER;else{a=uf(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Wt(u)}t._authCredentials=new P1(new Pb(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class rn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rn(this.firestore,e,this._key)}}class us extends Mr{constructor(e,n,r){super(e,n,du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rn(this.firestore,null,new me(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function gp(t,e,...n){if(t=Ot(t),kT("collection","path",e),t instanceof bu){const r=st.fromString(e,...n);return yy(r),new us(t,null,r)}{if(!(t instanceof rn||t instanceof us))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return yy(r),new us(t.firestore,null,r)}}function _p(t,e,...n){if(t=Ot(t),arguments.length===1&&(e=xb.newId()),kT("doc","path",e),t instanceof bu){const r=st.fromString(e,...n);return _y(r),new rn(t,null,new me(r))}{if(!(t instanceof rn||t instanceof us))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return _y(r),new rn(t.firestore,t instanceof us?t.converter:null,new me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new fT(this,"async_queue_retry"),this.hu=()=>{const n=yh();n&&le("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=yh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=yh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ir;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!za(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=lp.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&be()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function wy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Js extends bu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new dM}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OT(this),this._firestoreClient.terminate()}}function fM(t,e){const n=typeof t=="object"?t:tu(),r=typeof t=="string"?t:"(default)",s=La(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lf("firestore");i&&hM(s,...i)}return s}function Tu(t){return t._firestoreClient||OT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function OT(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new H1(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,xT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new sM(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yi(Xt.fromBase64String(e))}catch(n){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yi(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=/^__.*__$/;class mM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}function NT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class wp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new wp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return xc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(NT(this.fu)&&pM.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class gM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}Fu(e,n,r,s=!1){return new wp({fu:e,methodName:n,vu:r,path:Ft.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ep(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new gM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MT(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);FT("Data must be an object, but it was:",o,r);const a=LT(r,o);let l,u;if(i.merge)l=new Dn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=yM(e,d,n);if(!o.contains(p))throw new oe(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);wM(h,p)||h.push(p)}l=new Dn(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new mM(new wn(a),l,u)}function _M(t,e,n,r=!1){return bp(n,t.Fu(r?4:3,e))}function bp(t,e){if(VT(t=Ot(t)))return FT("Unsupported field value:",e,t),LT(t,e);if(t instanceof DT)return function(r,s){if(!NT(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=bp(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Tt.fromDate(r);return{timestampValue:Rc(s.serializer,i)}}if(r instanceof Tt){const i=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rc(s.serializer,i)}}if(r instanceof vp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yi)return{bytesValue:sT(s.serializer,r._byteString)};if(r instanceof rn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ep(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Eu(r)}`)}(t,e)}function LT(t,e){const n={};return kb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lo(t,(r,s)=>{const i=bp(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function VT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof vp||t instanceof Yi||t instanceof rn||t instanceof DT)}function FT(t,e,n){if(!VT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Eu(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function yM(t,e,n){if((e=Ot(e))instanceof yp)return e._internalPath;if(typeof e=="string")return UT(t,e);throw xc("Field path arguments must be of type string or ",t,!1,void 0,n)}const vM=new RegExp("[~\\*/\\[\\]]");function UT(t,e,n){if(e.search(vM)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yp(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new oe(H.INVALID_ARGUMENT,a+t+l)}function wM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EM extends BT{data(){return super.data()}}function Iu(t,e){return typeof e=="string"?UT(t,e):e instanceof yp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class Ip extends Tp{}function jT(t,e,...n){let r=[];e instanceof Tp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ap).length,a=i.filter(l=>l instanceof Au).length;if(o>1||o>0&&a>0)throw new oe(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Au extends Ip{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Au(e,n,r)}_apply(e){const n=this._parse(e);return qT(e._query,n),new Mr(e.firestore,e.converter,yd(e._query,n))}_parse(e){const n=Ep(e.firestore);return function(i,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new oe(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){by(d,h);const g=[];for(const _ of d)g.push(Ey(l,i,_));p={arrayValue:{values:g}}}else p=Ey(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||by(d,h),p=_M(a,o,d,h==="in"||h==="not-in");return _t.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kc(t,e,n){const r=e,s=Iu("where",t);return Au._create(s,r,n)}class Ap extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ap(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)qT(o,l),o=yd(o,l)}(e._query,n),new Mr(e.firestore,e.converter,yd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends Ip{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ca(i,o)}(e._query,this._field,this._direction);return new Mr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new co(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function D4(t,e="asc"){const n=e,r=Iu("orderBy",t);return Cp._create(r,n)}class Rp extends Ip{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Rp(e,n,r)}_apply(e){return new Mr(e.firestore,e.converter,Ic(e._query,this._limit,this._limitType))}}function N4(t){return Rp._create("limit",t,"F")}function Ey(t,e,n){if(typeof(n=Ot(n))=="string"){if(n==="")throw new oe(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bb(e)&&n.indexOf("/")!==-1)throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!me.isDocumentKey(r))throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return q_(t,new me(r))}if(n instanceof rn)return q_(t,n._key);throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eu(n)}.`)}function by(t,e){if(!Array.isArray(t)||t.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qT(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class bM{convertValue(e,n="none"){switch(Xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw be()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return lo(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new vp(gt(e.latitude),gt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ta(e));default:return null}}convertTimestamp(e){const n=ms(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);Xe(uT(r));const s=new Ia(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HT extends BT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yl extends HT{data(e={}){return super.data(e)}}class zT{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yl(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Yl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Yl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:TM(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t){t=Bn(t,rn);const e=Bn(t.firestore,Js);return lM(Tu(e),t._key).then(n=>QT(e,t,n))}class Sp extends bM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function GT(t){t=Bn(t,Mr);const e=Bn(t.firestore,Js),n=Tu(e),r=new Sp(e);return $T(t._query),cM(n,t._query).then(s=>new zT(e,r,t,s))}function AM(t,e,n){t=Bn(t,rn);const r=Bn(t.firestore,Js),s=WT(t.converter,e);return KT(r,[MT(Ep(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,er.none())])}function CM(t,e){const n=Bn(t.firestore,Js),r=_p(t),s=WT(t.converter,e);return KT(n,[MT(Ep(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,er.exists(!1))]).then(()=>r)}function M4(t,...e){var n,r,s;t=Ot(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||wy(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(wy(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,h;if(t instanceof rn)u=Bn(t.firestore,Js),h=du(t._key.path),l={next:d=>{e[o]&&e[o](QT(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Bn(t,Mr);u=Bn(d.firestore,Js),h=d._query;const p=new Sp(u);l={next:g=>{e[o]&&e[o](new zT(u,p,d,g))},error:e[o+1],complete:e[o+2]},$T(t._query)}return function(p,g,_,E){const T=new mp(E),k=new fp(g,T,_);return p.asyncQueue.enqueueAndForget(async()=>up(await Pc(p),k)),()=>{T.$a(),p.asyncQueue.enqueueAndForget(async()=>hp(await Pc(p),k))}}(Tu(u),h,a,l)}function KT(t,e){return function(r,s){const i=new Ir;return r.asyncQueue.enqueueAndForget(async()=>QN(await aM(r),s,i)),i.promise}(Tu(t),e)}function QT(t,e,n){const r=n.docs.get(e._key),s=new Sp(t);return new HT(t,s,e._key,r,new zo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ao=s})(Is),ds(new Cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Js(new x1(r.getProvider("auth-internal")),new N1(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Tn(U_,"4.6.3",e),Tn(U_,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="firebasestorage.googleapis.com",RM="storageBucket",SM=2*60*1e3,PM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends lr{constructor(e,n,r=0){super(wh(e),`Firebase Storage: ${n} (${wh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,cr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function wh(t){return"storage/"+t}function xM(){const t="An unknown error occurred, please check the error payload for server response.";return new cr(sr.UNKNOWN,t)}function kM(){return new cr(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OM(){return new cr(sr.CANCELED,"User canceled the upload/download.")}function DM(t){return new cr(sr.INVALID_URL,"Invalid URL '"+t+"'.")}function NM(t){return new cr(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ty(t){return new cr(sr.INVALID_ARGUMENT,t)}function XT(){return new cr(sr.APP_DELETED,"The Firebase app was deleted.")}function MM(t){return new cr(sr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw NM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(V){V.path_=decodeURIComponent(V.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${p}`,"i"),_={bucket:1,path:3},E=n===YT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",k=new RegExp(`^https?://${E}/${s}/${T}`,"i"),O=[{regex:a,indices:l,postModify:i},{regex:g,indices:_,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let V=0;V<O.length;V++){const j=O[V],F=j.regex.exec(e);if(F){const I=F[j.indices.bucket];let w=F[j.indices.path];w||(w=""),r=new Nn(I,w),j.postModify(r);break}}if(r==null)throw DM(e);return r}}class LM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...T){u||(u=!0,e.apply(null,T))}function d(T){s=setTimeout(()=>{s=null,t(g,l())},T)}function p(){i&&clearTimeout(i)}function g(T,...k){if(u){p();return}if(T){p(),h.call(null,T,...k);return}if(l()||o){p(),h.call(null,T,...k);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,d(O)}let _=!1;function E(T){_||(_=!0,p(),!u&&(s!==null?(T||(a=2),clearTimeout(s),d(0)):T||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function FM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(t){return t!==void 0}function Iy(t,e,n,r){if(r<e)throw Ty(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ty(`Invalid value for '${t}'. Expected ${n} or less.`)}function BM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oc||(Oc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n,r,s,i,o,a,l,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Sl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Oc.NO_ERROR,l=i.getStatus();if(!a||$M(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Oc.ABORT;r(!1,new Sl(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Sl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());UM(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=xM();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?XT():OM();o(l)}else{const l=kM();o(l)}};this.canceled_?n(!1,new Sl(!1,null,!0)):this.backoffId_=VM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Sl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function qM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function WM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function GM(t,e,n,r,s,i,o=!0){const a=BM(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return HM(u,e),qM(u,n),WM(u,i),zM(u,r),new jM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dc(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QM(this._location.path)}get storage(){return this._service}get parent(){const e=KM(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new Dc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MM(e)}}function Ay(t,e){const n=e==null?void 0:e[RM];return n==null?null:Nn.makeFromBucketSpec(n,t)}function YM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:uf(s,t.app.options.projectId))}class XM{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=YT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SM,this._maxUploadRetryTime=PM,this._requests=new Set,s!=null?this._bucket=Nn.makeFromBucketSpec(s,this._host):this._bucket=Ay(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=Ay(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new LM(XT());{const o=GM(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Cy="@firebase/storage",Ry="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="storage";function JM(t=tu(),e){t=Ot(t);const r=La(t,JT).getImmediate({identifier:e}),s=lf("storage");return s&&ZM(r,...s),r}function ZM(t,e,n,r={}){YM(t,e,n,r)}function eL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new XM(n,r,s,e,Is)}function tL(){ds(new Cr(JT,eL,"PUBLIC").setMultipleInstances(!0)),Tn(Cy,Ry,""),Tn(Cy,Ry,"esm2017")}tL();const nL={apiKey:"AIzaSyDNCpeogaNrNCCyC47aE-H7Iq_aYjn89jg",authDomain:"card-game-a3a5b.firebaseapp.com",projectId:"card-game-a3a5b",storageBucket:"card-game-a3a5b.appspot.com",appId:"1:794791122536:web:55e763838cacd9cf2d8ddd",measurementId:"G-HPKZCT6QWZ"},Cu=xw(nL);A1(Cu);const Pp=Vx(Cu),Xa=fM(Cu);JM(Cu);function rL(){return ZT().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ZT(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const sL=typeof Proxy=="function",iL="devtools-plugin:setup",oL="plugin:settings:set";let yi,Cd;function aL(){var t;return yi!==void 0||(typeof window<"u"&&window.performance?(yi=!0,Cd=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(yi=!0,Cd=globalThis.perf_hooks.performance):yi=!1),yi}function lL(){return aL()?Cd.now():Date.now()}class cL{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return lL()}},n&&n.on(oL,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:a,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function uL(t,e){const n=t,r=ZT(),s=rL(),i=sL&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(iL,t,e);else{const o=i?new cL(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ai=typeof document<"u";function hL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const He=Object.assign;function Eh(t,e){const n={};for(const r in e){const s=e[r];n[r]=jn(s)?s.map(t):t(s)}return n}const ua=()=>{},jn=Array.isArray,eI=/#/g,dL=/&/g,fL=/\//g,pL=/=/g,mL=/\?/g,tI=/\+/g,gL=/%5B/g,_L=/%5D/g,nI=/%5E/g,yL=/%60/g,rI=/%7B/g,vL=/%7C/g,sI=/%7D/g,wL=/%20/g;function xp(t){return encodeURI(""+t).replace(vL,"|").replace(gL,"[").replace(_L,"]")}function EL(t){return xp(t).replace(rI,"{").replace(sI,"}").replace(nI,"^")}function Rd(t){return xp(t).replace(tI,"%2B").replace(wL,"+").replace(eI,"%23").replace(dL,"%26").replace(yL,"`").replace(rI,"{").replace(sI,"}").replace(nI,"^")}function bL(t){return Rd(t).replace(pL,"%3D")}function TL(t){return xp(t).replace(eI,"%23").replace(mL,"%3F")}function IL(t){return t==null?"":TL(t).replace(fL,"%2F")}function Pa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const AL=/\/$/,CL=t=>t.replace(AL,"");function bh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=xL(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Pa(o)}}function RL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SL(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xi(e.matched[r],n.matched[s])&&iI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function iI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PL(t[n],e[n]))return!1;return!0}function PL(t,e){return jn(t)?Py(t,e):jn(e)?Py(e,t):t===e}function Py(t,e){return jn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function xL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var xa;(function(t){t.pop="pop",t.push="push"})(xa||(xa={}));var ha;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ha||(ha={}));function kL(t){if(!t)if(Ai){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CL(t)}const OL=/^[^#]+#/;function DL(t,e){return t.replace(OL,"#")+e}function NL(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ru=()=>({left:window.scrollX,top:window.scrollY});function ML(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NL(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xy(t,e){return(history.state?history.state.position-e:-1)+t}const Sd=new Map;function LL(t,e){Sd.set(t,e)}function VL(t){const e=Sd.get(t);return Sd.delete(t),e}let FL=()=>location.protocol+"//"+location.host;function oI(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sy(l,"")}return Sy(n,t)+r+s}function UL(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=oI(t,location),_=n.value,E=e.value;let T=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}T=E?p.position-E.position:0}else r(g);s.forEach(k=>{k(n.value,_,{delta:T,type:xa.pop,direction:T?T>0?ha.forward:ha.back:ha.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(He({},p.state,{scroll:Ru()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function ky(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ru():null}}function BL(t){const{history:e,location:n}=window,r={value:oI(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:FL()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=He({},e.state,ky(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=He({},s.value,e.state,{forward:l,scroll:Ru()});i(h.current,h,!0);const d=He({},ky(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function $L(t){t=kL(t);const e=BL(t),n=UL(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=He({location:"",base:t,go:r,createHref:DL.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jL(t){return typeof t=="string"||t&&typeof t=="object"}function aI(t){return typeof t=="string"||typeof t=="symbol"}const zr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lI=Symbol("");var Oy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oy||(Oy={}));function Ji(t,e){return He(new Error,{type:t,[lI]:!0},e)}function fr(t,e){return t instanceof Error&&lI in t&&(e==null||!!(t.type&e))}const Dy="[^/]+?",qL={sensitive:!1,strict:!1,start:!0,end:!0},WL=/[.+*?^${}()[\]/\\]/g;function HL(t,e){const n=He({},qL,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(WL,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:E,optional:T,regexp:k}=p;i.push({name:_,repeatable:E,optional:T});const D=k||Dy;if(D!==Dy){g+=10;try{new RegExp(`(${D})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${_}" (${D}): `+V.message)}}let O=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(O=T&&u.length<2?`(?:/${O})`:"/"+O),T&&(O+="?"),s+=O,g+=20,T&&(g+=-8),E&&(g+=-20),D===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",_=i[p-1];d[_.name]=g&&_.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:_,repeatable:E,optional:T}=g,k=_ in u?u[_]:"";if(jn(k)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const D=jn(k)?k.join("/"):k;if(!D)if(T)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);h+=D}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function zL(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function GL(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=zL(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ny(r))return 1;if(Ny(s))return-1}return s.length-r.length}function Ny(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KL={type:0,value:""},QL=/[a-zA-Z0-9_]/;function YL(t){if(!t)return[[]];if(t==="/")return[[KL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:QL.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function XL(t,e,n){const r=HL(YL(t.path),n),s=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function JL(t,e){const n=[],r=new Map;e=Vy({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,d,p){const g=!p,_=ZL(h);_.aliasOf=p&&p.record;const E=Vy(e,h),T=[_];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const V of O)T.push(He({},_,{components:p?p.record.components:_.components,path:V,aliasOf:p?p.record:_}))}let k,D;for(const O of T){const{path:V}=O;if(d&&V[0]!=="/"){const j=d.record.path,F=j[j.length-1]==="/"?"":"/";O.path=d.record.path+(V&&F+V)}if(k=XL(O,d,E),p?p.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),g&&h.name&&!Ly(k)&&o(h.name)),_.children){const j=_.children;for(let F=0;F<j.length;F++)i(j[F],k,p&&p.children[F])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return D?()=>{o(D)}:ua}function o(h){if(aI(h)){const d=r.get(h);d&&(r.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let d=0;for(;d<n.length&&GL(h,n[d])>=0&&(h.record.path!==n[d].record.path||!cI(h,n[d]));)d++;n.splice(d,0,h),h.record.name&&!Ly(h)&&r.set(h.record.name,h)}function u(h,d){let p,g={},_,E;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw Ji(1,{location:h});E=p.record.name,g=He(My(d.params,p.keys.filter(D=>!D.optional).concat(p.parent?p.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),h.params&&My(h.params,p.keys.map(D=>D.name))),_=p.stringify(g)}else if(h.path!=null)_=h.path,p=n.find(D=>D.re.test(_)),p&&(g=p.parse(_),E=p.record.name);else{if(p=d.name?r.get(d.name):n.find(D=>D.re.test(d.path)),!p)throw Ji(1,{location:h,currentLocation:d});E=p.record.name,g=He({},d.params,h.params),_=p.stringify(g)}const T=[];let k=p;for(;k;)T.unshift(k.record),k=k.parent;return{name:E,path:_,params:g,matched:T,meta:tV(T)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function My(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ZL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:eV(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function eV(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ly(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tV(t){return t.reduce((e,n)=>He(e,n.meta),{})}function Vy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cI(t,e){return e.children.some(n=>n===t||cI(t,n))}function nV(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tI," "),o=i.indexOf("="),a=Pa(o<0?i:i.slice(0,o)),l=o<0?null:Pa(i.slice(o+1));if(a in e){let u=e[a];jn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Fy(t){let e="";for(let n in t){const r=t[n];if(n=bL(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jn(r)?r.map(i=>i&&Rd(i)):[r&&Rd(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rV(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sV=Symbol(""),Uy=Symbol(""),kp=Symbol(""),uI=Symbol(""),Pd=Symbol("");function Fo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ji(4,{from:n,to:e})):p instanceof Error?l(p):jL(p)?l(Ji(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function Th(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(iV(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Zr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const d=hL(h)?h.default:h;o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Zr(g,n,r,o,a,s)()}))}}return i}function iV(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function By(t){const e=Vn(kp),n=Vn(uI),r=ue(()=>{const l=P(t.to);return e.resolve(l)}),s=ue(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(Xi.bind(null,h));if(p>-1)return p;const g=$y(l[u-2]);return u>1&&$y(h)===g&&d[d.length-1].path!==g?d.findIndex(Xi.bind(null,l[u-2])):p}),i=ue(()=>s.value>-1&&cV(n.params,r.value.params)),o=ue(()=>s.value>-1&&s.value===n.matched.length-1&&iI(n.params,r.value.params));function a(l={}){return lV(l)?e[P(t.replace)?"replace":"push"](P(t.to)).catch(ua):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const oV=he({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:By,setup(t,{slots:e}){const n=ni(By(t)),{options:r}=Vn(kp),s=ue(()=>({[jy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:br("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),aV=oV;function lV(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cV(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!jn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $y(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jy=(t,e,n)=>t??e??n,uV=he({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vn(Pd),s=ue(()=>t.route||r.value),i=Vn(Uy,0),o=ue(()=>{let u=P(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=ue(()=>s.value.matched[o.value]);ki(Uy,ue(()=>o.value+1)),ki(sV,a),ki(Pd,s);const l=fe();return lt(()=>[l.value,a.value,t.name],([u,h,d],[p,g,_])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Xi(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return qy(n.default,{Component:p,route:u});const g=d.props[h],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,T=br(p,He({},_,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return qy(n.default,{Component:T,route:u})||T}}});function qy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hI=uV;function hV(t){const e=JL(t.routes,t),n=t.parseQuery||nV,r=t.stringifyQuery||Fy,s=t.history,i=Fo(),o=Fo(),a=Fo(),l=Jd(zr);let u=zr;Ai&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Eh.bind(null,$=>""+$),d=Eh.bind(null,IL),p=Eh.bind(null,Pa);function g($,ie){let re,ae;return aI($)?(re=e.getRecordMatcher($),ae=ie):ae=$,e.addRoute(ae,re)}function _($){const ie=e.getRecordMatcher($);ie&&e.removeRoute(ie)}function E(){return e.getRoutes().map($=>$.record)}function T($){return!!e.getRecordMatcher($)}function k($,ie){if(ie=He({},ie||l.value),typeof $=="string"){const x=bh(n,$,ie.path),M=e.resolve({path:x.path},ie),q=s.createHref(x.fullPath);return He(x,M,{params:p(M.params),hash:Pa(x.hash),redirectedFrom:void 0,href:q})}let re;if($.path!=null)re=He({},$,{path:bh(n,$.path,ie.path).path});else{const x=He({},$.params);for(const M in x)x[M]==null&&delete x[M];re=He({},$,{params:d(x)}),ie.params=d(ie.params)}const ae=e.resolve(re,ie),Ne=$.hash||"";ae.params=h(p(ae.params));const Ke=RL(r,He({},$,{hash:EL(Ne),path:ae.path})),b=s.createHref(Ke);return He({fullPath:Ke,hash:Ne,query:r===Fy?rV($.query):$.query||{}},ae,{redirectedFrom:void 0,href:b})}function D($){return typeof $=="string"?bh(n,$,l.value.path):He({},$)}function O($,ie){if(u!==$)return Ji(8,{from:ie,to:$})}function V($){return I($)}function j($){return V(He(D($),{replace:!0}))}function F($){const ie=$.matched[$.matched.length-1];if(ie&&ie.redirect){const{redirect:re}=ie;let ae=typeof re=="function"?re($):re;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=D(ae):{path:ae},ae.params={}),He({query:$.query,hash:$.hash,params:ae.path!=null?{}:$.params},ae)}}function I($,ie){const re=u=k($),ae=l.value,Ne=$.state,Ke=$.force,b=$.replace===!0,x=F(re);if(x)return I(He(D(x),{state:typeof x=="object"?He({},Ne,x.state):Ne,force:Ke,replace:b}),ie||re);const M=re;M.redirectedFrom=ie;let q;return!Ke&&SL(r,ae,re)&&(q=Ji(16,{to:M,from:ae}),At(ae,ae,!0,!1)),(q?Promise.resolve(q):v(M,ae)).catch(U=>fr(U)?fr(U,2)?U:on(U):Ce(U,M,ae)).then(U=>{if(U){if(fr(U,2))return I(He({replace:b},D(U.to),{state:typeof U.to=="object"?He({},Ne,U.to.state):Ne,force:Ke}),ie||M)}else U=S(M,ae,!0,b,Ne);return R(M,ae,U),U})}function w($,ie){const re=O($,ie);return re?Promise.reject(re):Promise.resolve()}function A($){const ie=Ur.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext($):$()}function v($,ie){let re;const[ae,Ne,Ke]=dV($,ie);re=Th(ae.reverse(),"beforeRouteLeave",$,ie);for(const x of ae)x.leaveGuards.forEach(M=>{re.push(Zr(M,$,ie))});const b=w.bind(null,$,ie);return re.push(b),Ct(re).then(()=>{re=[];for(const x of i.list())re.push(Zr(x,$,ie));return re.push(b),Ct(re)}).then(()=>{re=Th(Ne,"beforeRouteUpdate",$,ie);for(const x of Ne)x.updateGuards.forEach(M=>{re.push(Zr(M,$,ie))});return re.push(b),Ct(re)}).then(()=>{re=[];for(const x of Ke)if(x.beforeEnter)if(jn(x.beforeEnter))for(const M of x.beforeEnter)re.push(Zr(M,$,ie));else re.push(Zr(x.beforeEnter,$,ie));return re.push(b),Ct(re)}).then(()=>($.matched.forEach(x=>x.enterCallbacks={}),re=Th(Ke,"beforeRouteEnter",$,ie,A),re.push(b),Ct(re))).then(()=>{re=[];for(const x of o.list())re.push(Zr(x,$,ie));return re.push(b),Ct(re)}).catch(x=>fr(x,8)?x:Promise.reject(x))}function R($,ie,re){a.list().forEach(ae=>A(()=>ae($,ie,re)))}function S($,ie,re,ae,Ne){const Ke=O($,ie);if(Ke)return Ke;const b=ie===zr,x=Ai?history.state:{};re&&(ae||b?s.replace($.fullPath,He({scroll:b&&x&&x.scroll},Ne)):s.push($.fullPath,Ne)),l.value=$,At($,ie,re,b),on()}let C;function ye(){C||(C=s.listen(($,ie,re)=>{if(!Hn.listening)return;const ae=k($),Ne=F(ae);if(Ne){I(He(Ne,{replace:!0}),ae).catch(ua);return}u=ae;const Ke=l.value;Ai&&LL(xy(Ke.fullPath,re.delta),Ru()),v(ae,Ke).catch(b=>fr(b,12)?b:fr(b,2)?(I(b.to,ae).then(x=>{fr(x,20)&&!re.delta&&re.type===xa.pop&&s.go(-1,!1)}).catch(ua),Promise.reject()):(re.delta&&s.go(-re.delta,!1),Ce(b,ae,Ke))).then(b=>{b=b||S(ae,Ke,!1),b&&(re.delta&&!fr(b,8)?s.go(-re.delta,!1):re.type===xa.pop&&fr(b,20)&&s.go(-1,!1)),R(ae,Ke,b)}).catch(ua)}))}let $e=Fo(),Re=Fo(),ve;function Ce($,ie,re){on($);const ae=Re.list();return ae.length?ae.forEach(Ne=>Ne($,ie,re)):console.error($),Promise.reject($)}function Et(){return ve&&l.value!==zr?Promise.resolve():new Promise(($,ie)=>{$e.add([$,ie])})}function on($){return ve||(ve=!$,ye(),$e.list().forEach(([ie,re])=>$?re($):ie()),$e.reset()),$}function At($,ie,re,ae){const{scrollBehavior:Ne}=t;if(!Ai||!Ne)return Promise.resolve();const Ke=!re&&VL(xy($.fullPath,0))||(ae||!re)&&history.state&&history.state.scroll||null;return Yt().then(()=>Ne($,ie,Ke)).then(b=>b&&ML(b)).catch(b=>Ce(b,$,ie))}const ze=$=>s.go($);let at;const Ur=new Set,Hn={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:T,getRoutes:E,resolve:k,options:t,push:V,replace:j,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Re.add,isReady:Et,install($){const ie=this;$.component("RouterLink",aV),$.component("RouterView",hI),$.config.globalProperties.$router=ie,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>P(l)}),Ai&&!at&&l.value===zr&&(at=!0,V(s.location).catch(Ne=>{}));const re={};for(const Ne in zr)Object.defineProperty(re,Ne,{get:()=>l.value[Ne],enumerable:!0});$.provide(kp,ie),$.provide(uI,Lv(re)),$.provide(Pd,l);const ae=$.unmount;Ur.add($),$.unmount=function(){Ur.delete($),Ur.size<1&&(u=zr,C&&C(),C=null,l.value=zr,at=!1,ve=!1),ae()}}};function Ct($){return $.reduce((ie,re)=>ie.then(()=>A(re)),Promise.resolve())}return Hn}function dV(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Xi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Xi(u,l))||s.push(l))}return[n,r,s]}var Nt=[];for(var Ih=0;Ih<256;++Ih)Nt.push((Ih+256).toString(16).slice(1));function fV(t,e=0){return(Nt[t[e+0]]+Nt[t[e+1]]+Nt[t[e+2]]+Nt[t[e+3]]+"-"+Nt[t[e+4]]+Nt[t[e+5]]+"-"+Nt[t[e+6]]+Nt[t[e+7]]+"-"+Nt[t[e+8]]+Nt[t[e+9]]+"-"+Nt[t[e+10]]+Nt[t[e+11]]+Nt[t[e+12]]+Nt[t[e+13]]+Nt[t[e+14]]+Nt[t[e+15]]).toLowerCase()}var Pl,pV=new Uint8Array(16);function mV(){if(!Pl&&(Pl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Pl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Pl(pV)}var gV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Wy={randomUUID:gV};function _V(t,e,n){if(Wy.randomUUID&&!e&&!t)return Wy.randomUUID();t=t||{};var r=t.random||(t.rng||mV)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,fV(r)}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var yV="store";function fo(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function vV(t){return t!==null&&typeof t=="object"}function wV(t){return t&&typeof t.then=="function"}function EV(t,e){return function(){return t(e)}}function dI(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function fI(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Su(t,n,[],t._modules.root,!0),Op(t,n,e)}function Op(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=qd(!0);l.run(function(){fo(i,function(u,h){o[h]=EV(u,t),a[h]=ue(function(){return o[h]()}),Object.defineProperty(t.getters,h,{get:function(){return a[h].value},enumerable:!0})})}),t._state=ni({data:e}),t._scope=l,t.strict&&CV(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Su(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Dp(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var u=r.context=bV(t,o,n);r.forEachMutation(function(h,d){var p=o+d;TV(t,p,h,u)}),r.forEachAction(function(h,d){var p=h.root?d:o+d,g=h.handler||h;IV(t,p,g,u)}),r.forEachGetter(function(h,d){var p=o+d;AV(t,p,h,u)}),r.forEachChild(function(h,d){Su(t,e,n.concat(d),h,s)})}function bV(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var l=Nc(i,o,a),u=l.payload,h=l.options,d=l.type;return(!h||!h.root)&&(d=e+d),t.dispatch(d,u)},commit:r?t.commit:function(i,o,a){var l=Nc(i,o,a),u=l.payload,h=l.options,d=l.type;(!h||!h.root)&&(d=e+d),t.commit(d,u,h)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return pI(t,e)}},state:{get:function(){return Dp(t.state,n)}}}),s}function pI(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function TV(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function IV(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return wV(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function AV(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function CV(t){lt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Dp(t,e){return e.reduce(function(n,r){return n[r]},t)}function Nc(t,e,n){return vV(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var RV="vuex bindings",Hy="vuex:mutations",Ah="vuex:actions",vi="vuex",SV=0;function PV(t,e){uL({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[RV]},function(n){n.addTimelineLayer({id:Hy,label:"Vuex Mutations",color:zy}),n.addTimelineLayer({id:Ah,label:"Vuex Actions",color:zy}),n.addInspector({id:vi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===vi)if(r.filter){var s=[];yI(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[_I(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===vi){var s=r.nodeId;pI(e,s),r.state=OV(NV(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===vi){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(vi),n.sendInspectorState(vi),n.addTimelineEvent({layerId:Hy,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=SV++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ah,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ah,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var zy=8702998,xV=6710886,kV=16777215,mI={label:"namespaced",textColor:kV,backgroundColor:xV};function gI(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function _I(t,e){return{id:e||"root",label:gI(e),tags:t.namespaced?[mI]:[],children:Object.keys(t._children).map(function(n){return _I(t._children[n],e+n+"/")})}}function yI(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[mI]:[]}),Object.keys(e._children).forEach(function(s){yI(t,e._children[s],n,r+s+"/")})}function OV(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=DV(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?gI(o):o,editable:!1,value:xd(function(){return i[o]})}})}return s}function DV(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=xd(function(){return t[n]})}else e[n]=xd(function(){return t[n]})}),e}function NV(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function xd(t){try{return t()}catch(e){return e}}var Wn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},vI={namespaced:{configurable:!0}};vI.namespaced.get=function(){return!!this._rawModule.namespaced};Wn.prototype.addChild=function(e,n){this._children[e]=n};Wn.prototype.removeChild=function(e){delete this._children[e]};Wn.prototype.getChild=function(e){return this._children[e]};Wn.prototype.hasChild=function(e){return e in this._children};Wn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Wn.prototype.forEachChild=function(e){fo(this._children,e)};Wn.prototype.forEachGetter=function(e){this._rawModule.getters&&fo(this._rawModule.getters,e)};Wn.prototype.forEachAction=function(e){this._rawModule.actions&&fo(this._rawModule.actions,e)};Wn.prototype.forEachMutation=function(e){this._rawModule.mutations&&fo(this._rawModule.mutations,e)};Object.defineProperties(Wn.prototype,vI);var li=function(e){this.register([],e,!1)};li.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};li.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};li.prototype.update=function(e){wI([],this.root,e)};li.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Wn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&fo(n.modules,function(a,l){s.register(e.concat(l),a,r)})};li.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};li.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function wI(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;wI(t.concat(r),e.getChild(r),n.modules[r])}}function MV(t){return new cn(t)}var cn=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new li(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,u=a.commit;this.dispatch=function(p,g){return l.call(o,p,g)},this.commit=function(p,g,_){return u.call(o,p,g,_)},this.strict=s;var h=this._modules.root.state;Su(this,h,[],this._modules.root),Op(this,h),r.forEach(function(d){return d(n)})},Np={state:{configurable:!0}};cn.prototype.install=function(e,n){e.provide(n||yV,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&PV(e,this)};Np.state.get=function(){return this._state.data};Np.state.set=function(t){};cn.prototype.commit=function(e,n,r){var s=this,i=Nc(e,n,r),o=i.type,a=i.payload,l={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(h){return h(l,s.state)}))};cn.prototype.dispatch=function(e,n){var r=this,s=Nc(e,n),i=s.type,o=s.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(h){return h.before}).forEach(function(h){return h.before(a,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(h){return h(o)})):l[0](o);return new Promise(function(h,d){u.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}h(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}d(p)})})}};cn.prototype.subscribe=function(e,n){return dI(e,this._subscribers,n)};cn.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return dI(r,this._actionSubscribers,n)};cn.prototype.watch=function(e,n,r){var s=this;return lt(function(){return e(s.state,s.getters)},n,Object.assign({},r))};cn.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};cn.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Su(this,this.state,e,this._modules.get(e),r.preserveState),Op(this,this.state)};cn.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Dp(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),fI(this)};cn.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};cn.prototype.hotUpdate=function(e){this._modules.update(e),fI(this,!0)};cn.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(cn.prototype,Np);const LV=[];let Gy;const VV=5e3,FV={addToast(t,e){const n=Math.floor(Math.random()*1e6);e.id=n,t.toasts=[e,...t.toasts],Gy=setTimeout(()=>{t.toasts=t.toasts.filter(r=>r.id!==e.id)},VV)},setToasts(t,e){t.toasts=e,clearTimeout(Gy)}},Mp=MV({state:{user:{},account:null,toasts:LV,redirectMatch:null},mutations:{...FV,setDialog(t,e){t.dialog=e},setRedirectMatch(t,e){t.redirectMatch=e},setUser(t,e){t.user=e},setAccount(t,e){t.account||(t.account=e)}}}),EI=async({id:t,data:e,setStore:n=!0})=>{try{const r=await Mc({id:t}),s=_p(Xa,"accounts",t);return await AM(s,{...r.data(),...e,updated_at:new Date}),Mc({id:t,setStore:n}),!0}catch(r){console.error("Error adding document: ",r)}},UV=async({data:t,setStore:e=!0})=>{try{const n=_V();t.uuid=n,t.archived=!1;const r=await CM(gp(Xa,"accounts"),t);return e&&Mc({id:r.id}),r}catch(n){console.error("Error adding document: ",n)}},Mc=async({id:t,setStore:e=!0})=>{const n=_p(Xa,"accounts",t),r=await IM(n);return e&&Mp.commit("setAccount",r),r},bI=async({id:t})=>{const e=jT(gp(Xa,"accounts"),kc("archived","==",!1),kc("owner","==",t));return!(await GT(e)).empty},TI=async({id:t})=>{try{const e=jT(gp(Xa,"accounts"),kc("archived","==",!1),kc("owner","==",t)),r=(await GT(e)).docs[0];return Mp.commit("setAccount",r),!0}catch(e){console.error("Error adding document: ",e)}},Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},BV={},$V={class:"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full bg-muted"};function jV(t,e){return W(),Je("div",$V,[X(t.$slots,"default")])}const qV=Jt(BV,[["render",jV]]),WV=["top","right","bottom","left"],Xn=Math.min,pn=Math.max,Lc=Math.round,xl=Math.floor,_s=t=>({x:t,y:t}),HV={left:"right",right:"left",bottom:"top",top:"bottom"},zV={start:"end",end:"start"};function kd(t,e,n){return pn(t,Xn(e,n))}function kr(t,e){return typeof t=="function"?t(e):t}function Or(t){return t.split("-")[0]}function po(t){return t.split("-")[1]}function Lp(t){return t==="x"?"y":"x"}function Vp(t){return t==="y"?"height":"width"}function mo(t){return["top","bottom"].includes(Or(t))?"y":"x"}function Fp(t){return Lp(mo(t))}function GV(t,e,n){n===void 0&&(n=!1);const r=po(t),s=Fp(t),i=Vp(s);let o=s==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(o=Vc(o)),[o,Vc(o)]}function KV(t){const e=Vc(t);return[Od(t),e,Od(e)]}function Od(t){return t.replace(/start|end/g,e=>zV[e])}function QV(t,e,n){const r=["left","right"],s=["right","left"],i=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:r:e?r:s;case"left":case"right":return e?i:o;default:return[]}}function YV(t,e,n,r){const s=po(t);let i=QV(Or(t),n==="start",r);return s&&(i=i.map(o=>o+"-"+s),e&&(i=i.concat(i.map(Od)))),i}function Vc(t){return t.replace(/left|right|bottom|top/g,e=>HV[e])}function XV(t){return{top:0,right:0,bottom:0,left:0,...t}}function II(t){return typeof t!="number"?XV(t):{top:t,right:t,bottom:t,left:t}}function Fc(t){const{x:e,y:n,width:r,height:s}=t;return{width:r,height:s,top:n,left:e,right:e+r,bottom:n+s,x:e,y:n}}function Ky(t,e,n){let{reference:r,floating:s}=t;const i=mo(e),o=Fp(e),a=Vp(o),l=Or(e),u=i==="y",h=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2,p=r[a]/2-s[a]/2;let g;switch(l){case"top":g={x:h,y:r.y-s.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-s.width,y:d};break;default:g={x:r.x,y:r.y}}switch(po(e)){case"start":g[o]-=p*(n&&u?-1:1);break;case"end":g[o]+=p*(n&&u?-1:1);break}return g}const JV=async(t,e,n)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:o}=n,a=i.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:d}=Ky(u,r,l),p=r,g={},_=0;for(let E=0;E<a.length;E++){const{name:T,fn:k}=a[E],{x:D,y:O,data:V,reset:j}=await k({x:h,y:d,initialPlacement:r,placement:p,strategy:s,middlewareData:g,rects:u,platform:o,elements:{reference:t,floating:e}});h=D??h,d=O??d,g={...g,[T]:{...g[T],...V}},j&&_<=50&&(_++,typeof j=="object"&&(j.placement&&(p=j.placement),j.rects&&(u=j.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):j.rects),{x:h,y:d}=Ky(u,p,l)),E=-1)}return{x:h,y:d,placement:p,strategy:s,middlewareData:g}};async function ka(t,e){var n;e===void 0&&(e={});const{x:r,y:s,platform:i,rects:o,elements:a,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=kr(e,t),_=II(g),T=a[p?d==="floating"?"reference":"floating":d],k=Fc(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(T)))==null||n?T:T.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:h,strategy:l})),D=d==="floating"?{x:r,y:s,width:o.floating.width,height:o.floating.height}:o.reference,O=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),V=await(i.isElement==null?void 0:i.isElement(O))?await(i.getScale==null?void 0:i.getScale(O))||{x:1,y:1}:{x:1,y:1},j=Fc(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:D,offsetParent:O,strategy:l}):D);return{top:(k.top-j.top+_.top)/V.y,bottom:(j.bottom-k.bottom+_.bottom)/V.y,left:(k.left-j.left+_.left)/V.x,right:(j.right-k.right+_.right)/V.x}}const ZV=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:s,rects:i,platform:o,elements:a,middlewareData:l}=e,{element:u,padding:h=0}=kr(t,e)||{};if(u==null)return{};const d=II(h),p={x:n,y:r},g=Fp(s),_=Vp(g),E=await o.getDimensions(u),T=g==="y",k=T?"top":"left",D=T?"bottom":"right",O=T?"clientHeight":"clientWidth",V=i.reference[_]+i.reference[g]-p[g]-i.floating[_],j=p[g]-i.reference[g],F=await(o.getOffsetParent==null?void 0:o.getOffsetParent(u));let I=F?F[O]:0;(!I||!await(o.isElement==null?void 0:o.isElement(F)))&&(I=a.floating[O]||i.floating[_]);const w=V/2-j/2,A=I/2-E[_]/2-1,v=Xn(d[k],A),R=Xn(d[D],A),S=v,C=I-E[_]-R,ye=I/2-E[_]/2+w,$e=kd(S,ye,C),Re=!l.arrow&&po(s)!=null&&ye!==$e&&i.reference[_]/2-(ye<S?v:R)-E[_]/2<0,ve=Re?ye<S?ye-S:ye-C:0;return{[g]:p[g]+ve,data:{[g]:$e,centerOffset:ye-$e-ve,...Re&&{alignmentOffset:ve}},reset:Re}}}),eF=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:s,middlewareData:i,rects:o,initialPlacement:a,platform:l,elements:u}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:E=!0,...T}=kr(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const k=Or(s),D=Or(a)===a,O=await(l.isRTL==null?void 0:l.isRTL(u.floating)),V=p||(D||!E?[Vc(a)]:KV(a));!p&&_!=="none"&&V.push(...YV(a,E,_,O));const j=[a,...V],F=await ka(e,T),I=[];let w=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&I.push(F[k]),d){const S=GV(s,o,O);I.push(F[S[0]],F[S[1]])}if(w=[...w,{placement:s,overflows:I}],!I.every(S=>S<=0)){var A,v;const S=(((A=i.flip)==null?void 0:A.index)||0)+1,C=j[S];if(C)return{data:{index:S,overflows:w},reset:{placement:C}};let ye=(v=w.filter($e=>$e.overflows[0]<=0).sort(($e,Re)=>$e.overflows[1]-Re.overflows[1])[0])==null?void 0:v.placement;if(!ye)switch(g){case"bestFit":{var R;const $e=(R=w.map(Re=>[Re.placement,Re.overflows.filter(ve=>ve>0).reduce((ve,Ce)=>ve+Ce,0)]).sort((Re,ve)=>Re[1]-ve[1])[0])==null?void 0:R[0];$e&&(ye=$e);break}case"initialPlacement":ye=a;break}if(s!==ye)return{reset:{placement:ye}}}return{}}}};function Qy(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Yy(t){return WV.some(e=>t[e]>=0)}const tF=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:r="referenceHidden",...s}=kr(t,e);switch(r){case"referenceHidden":{const i=await ka(e,{...s,elementContext:"reference"}),o=Qy(i,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Yy(o)}}}case"escaped":{const i=await ka(e,{...s,altBoundary:!0}),o=Qy(i,n.floating);return{data:{escapedOffsets:o,escaped:Yy(o)}}}default:return{}}}}};async function nF(t,e){const{placement:n,platform:r,elements:s}=t,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),o=Or(n),a=po(n),l=mo(n)==="y",u=["left","top"].includes(o)?-1:1,h=i&&l?-1:1,d=kr(e,t);let{mainAxis:p,crossAxis:g,alignmentAxis:_}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof _=="number"&&(g=a==="end"?_*-1:_),l?{x:g*h,y:p*u}:{x:p*u,y:g*h}}const rF=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,r;const{x:s,y:i,placement:o,middlewareData:a}=e,l=await nF(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:s+l.x,y:i+l.y,data:{...l,placement:o}}}}},sF=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:s}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:a={fn:T=>{let{x:k,y:D}=T;return{x:k,y:D}}},...l}=kr(t,e),u={x:n,y:r},h=await ka(e,l),d=mo(Or(s)),p=Lp(d);let g=u[p],_=u[d];if(i){const T=p==="y"?"top":"left",k=p==="y"?"bottom":"right",D=g+h[T],O=g-h[k];g=kd(D,g,O)}if(o){const T=d==="y"?"top":"left",k=d==="y"?"bottom":"right",D=_+h[T],O=_-h[k];_=kd(D,_,O)}const E=a.fn({...e,[p]:g,[d]:_});return{...E,data:{x:E.x-n,y:E.y-r}}}}},iF=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:r,placement:s,rects:i,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:u=!0}=kr(t,e),h={x:n,y:r},d=mo(s),p=Lp(d);let g=h[p],_=h[d];const E=kr(a,e),T=typeof E=="number"?{mainAxis:E,crossAxis:0}:{mainAxis:0,crossAxis:0,...E};if(l){const O=p==="y"?"height":"width",V=i.reference[p]-i.floating[O]+T.mainAxis,j=i.reference[p]+i.reference[O]-T.mainAxis;g<V?g=V:g>j&&(g=j)}if(u){var k,D;const O=p==="y"?"width":"height",V=["top","left"].includes(Or(s)),j=i.reference[d]-i.floating[O]+(V&&((k=o.offset)==null?void 0:k[d])||0)+(V?0:T.crossAxis),F=i.reference[d]+i.reference[O]+(V?0:((D=o.offset)==null?void 0:D[d])||0)-(V?T.crossAxis:0);_<j?_=j:_>F&&(_=F)}return{[p]:g,[d]:_}}}},oF=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:r,platform:s,elements:i}=e,{apply:o=()=>{},...a}=kr(t,e),l=await ka(e,a),u=Or(n),h=po(n),d=mo(n)==="y",{width:p,height:g}=r.floating;let _,E;u==="top"||u==="bottom"?(_=u,E=h===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(E=u,_=h==="end"?"top":"bottom");const T=g-l.top-l.bottom,k=p-l.left-l.right,D=Xn(g-l[_],T),O=Xn(p-l[E],k),V=!e.middlewareData.shift;let j=D,F=O;if(d?F=h||V?Xn(O,k):k:j=h||V?Xn(D,T):T,V&&!h){const w=pn(l.left,0),A=pn(l.right,0),v=pn(l.top,0),R=pn(l.bottom,0);d?F=p-2*(w!==0||A!==0?w+A:pn(l.left,l.right)):j=g-2*(v!==0||R!==0?v+R:pn(l.top,l.bottom))}await o({...e,availableWidth:F,availableHeight:j});const I=await s.getDimensions(i.floating);return p!==I.width||g!==I.height?{reset:{rects:!0}}:{}}}};function ci(t){return Up(t)?(t.nodeName||"").toLowerCase():"#document"}function _n(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Lr(t){var e;return(e=(Up(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Up(t){return t instanceof Node||t instanceof _n(t).Node}function ir(t){return t instanceof Element||t instanceof _n(t).Element}function or(t){return t instanceof HTMLElement||t instanceof _n(t).HTMLElement}function Xy(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof _n(t).ShadowRoot}function Ja(t){const{overflow:e,overflowX:n,overflowY:r,display:s}=qn(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(s)}function aF(t){return["table","td","th"].includes(ci(t))}function Bp(t){const e=$p(),n=qn(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function lF(t){let e=ys(t);for(;or(e)&&!Zi(e);){if(Bp(e))return e;e=ys(e)}return null}function $p(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Zi(t){return["html","body","#document"].includes(ci(t))}function qn(t){return _n(t).getComputedStyle(t)}function Pu(t){return ir(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ys(t){if(ci(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xy(t)&&t.host||Lr(t);return Xy(e)?e.host:e}function AI(t){const e=ys(t);return Zi(e)?t.ownerDocument?t.ownerDocument.body:t.body:or(e)&&Ja(e)?e:AI(e)}function Oa(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=AI(t),i=s===((r=t.ownerDocument)==null?void 0:r.body),o=_n(s);return i?e.concat(o,o.visualViewport||[],Ja(s)?s:[],o.frameElement&&n?Oa(o.frameElement):[]):e.concat(s,Oa(s,[],n))}function CI(t){const e=qn(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=or(t),i=s?t.offsetWidth:n,o=s?t.offsetHeight:r,a=Lc(n)!==i||Lc(r)!==o;return a&&(n=i,r=o),{width:n,height:r,$:a}}function jp(t){return ir(t)?t:t.contextElement}function Fi(t){const e=jp(t);if(!or(e))return _s(1);const n=e.getBoundingClientRect(),{width:r,height:s,$:i}=CI(e);let o=(i?Lc(n.width):n.width)/r,a=(i?Lc(n.height):n.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const cF=_s(0);function RI(t){const e=_n(t);return!$p()||!e.visualViewport?cF:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function uF(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==_n(t)?!1:e}function Zs(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),i=jp(t);let o=_s(1);e&&(r?ir(r)&&(o=Fi(r)):o=Fi(t));const a=uF(i,n,r)?RI(i):_s(0);let l=(s.left+a.x)/o.x,u=(s.top+a.y)/o.y,h=s.width/o.x,d=s.height/o.y;if(i){const p=_n(i),g=r&&ir(r)?_n(r):r;let _=p,E=_.frameElement;for(;E&&r&&g!==_;){const T=Fi(E),k=E.getBoundingClientRect(),D=qn(E),O=k.left+(E.clientLeft+parseFloat(D.paddingLeft))*T.x,V=k.top+(E.clientTop+parseFloat(D.paddingTop))*T.y;l*=T.x,u*=T.y,h*=T.x,d*=T.y,l+=O,u+=V,_=_n(E),E=_.frameElement}}return Fc({width:h,height:d,x:l,y:u})}const hF=[":popover-open",":modal"];function qp(t){return hF.some(e=>{try{return t.matches(e)}catch{return!1}})}function dF(t){let{elements:e,rect:n,offsetParent:r,strategy:s}=t;const i=s==="fixed",o=Lr(r),a=e?qp(e.floating):!1;if(r===o||a&&i)return n;let l={scrollLeft:0,scrollTop:0},u=_s(1);const h=_s(0),d=or(r);if((d||!d&&!i)&&((ci(r)!=="body"||Ja(o))&&(l=Pu(r)),or(r))){const p=Zs(r);u=Fi(r),h.x=p.x+r.clientLeft,h.y=p.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+h.x,y:n.y*u.y-l.scrollTop*u.y+h.y}}function fF(t){return Array.from(t.getClientRects())}function SI(t){return Zs(Lr(t)).left+Pu(t).scrollLeft}function pF(t){const e=Lr(t),n=Pu(t),r=t.ownerDocument.body,s=pn(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=pn(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+SI(t);const a=-n.scrollTop;return qn(r).direction==="rtl"&&(o+=pn(e.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:a}}function mF(t,e){const n=_n(t),r=Lr(t),s=n.visualViewport;let i=r.clientWidth,o=r.clientHeight,a=0,l=0;if(s){i=s.width,o=s.height;const u=$p();(!u||u&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:i,height:o,x:a,y:l}}function gF(t,e){const n=Zs(t,!0,e==="fixed"),r=n.top+t.clientTop,s=n.left+t.clientLeft,i=or(t)?Fi(t):_s(1),o=t.clientWidth*i.x,a=t.clientHeight*i.y,l=s*i.x,u=r*i.y;return{width:o,height:a,x:l,y:u}}function Jy(t,e,n){let r;if(e==="viewport")r=mF(t,n);else if(e==="document")r=pF(Lr(t));else if(ir(e))r=gF(e,n);else{const s=RI(t);r={...e,x:e.x-s.x,y:e.y-s.y}}return Fc(r)}function PI(t,e){const n=ys(t);return n===e||!ir(n)||Zi(n)?!1:qn(n).position==="fixed"||PI(n,e)}function _F(t,e){const n=e.get(t);if(n)return n;let r=Oa(t,[],!1).filter(a=>ir(a)&&ci(a)!=="body"),s=null;const i=qn(t).position==="fixed";let o=i?ys(t):t;for(;ir(o)&&!Zi(o);){const a=qn(o),l=Bp(o);!l&&a.position==="fixed"&&(s=null),(i?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ja(o)&&!l&&PI(t,o))?r=r.filter(h=>h!==o):s=a,o=ys(o)}return e.set(t,r),r}function yF(t){let{element:e,boundary:n,rootBoundary:r,strategy:s}=t;const o=[...n==="clippingAncestors"?qp(e)?[]:_F(e,this._c):[].concat(n),r],a=o[0],l=o.reduce((u,h)=>{const d=Jy(e,h,s);return u.top=pn(d.top,u.top),u.right=Xn(d.right,u.right),u.bottom=Xn(d.bottom,u.bottom),u.left=pn(d.left,u.left),u},Jy(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function vF(t){const{width:e,height:n}=CI(t);return{width:e,height:n}}function wF(t,e,n){const r=or(e),s=Lr(e),i=n==="fixed",o=Zs(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const l=_s(0);if(r||!r&&!i)if((ci(e)!=="body"||Ja(s))&&(a=Pu(e)),r){const d=Zs(e,!0,i,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=SI(s));const u=o.left+a.scrollLeft-l.x,h=o.top+a.scrollTop-l.y;return{x:u,y:h,width:o.width,height:o.height}}function Ch(t){return qn(t).position==="static"}function Zy(t,e){return!or(t)||qn(t).position==="fixed"?null:e?e(t):t.offsetParent}function xI(t,e){const n=_n(t);if(qp(t))return n;if(!or(t)){let s=ys(t);for(;s&&!Zi(s);){if(ir(s)&&!Ch(s))return s;s=ys(s)}return n}let r=Zy(t,e);for(;r&&aF(r)&&Ch(r);)r=Zy(r,e);return r&&Zi(r)&&Ch(r)&&!Bp(r)?n:r||lF(t)||n}const EF=async function(t){const e=this.getOffsetParent||xI,n=this.getDimensions,r=await n(t.floating);return{reference:wF(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function bF(t){return qn(t).direction==="rtl"}const TF={convertOffsetParentRelativeRectToViewportRelativeRect:dF,getDocumentElement:Lr,getClippingRect:yF,getOffsetParent:xI,getElementRects:EF,getClientRects:fF,getDimensions:vF,getScale:Fi,isElement:ir,isRTL:bF};function IF(t,e){let n=null,r;const s=Lr(t);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();const{left:u,top:h,width:d,height:p}=t.getBoundingClientRect();if(a||e(),!d||!p)return;const g=xl(h),_=xl(s.clientWidth-(u+d)),E=xl(s.clientHeight-(h+p)),T=xl(u),D={rootMargin:-g+"px "+-_+"px "+-E+"px "+-T+"px",threshold:pn(0,Xn(1,l))||1};let O=!0;function V(j){const F=j[0].intersectionRatio;if(F!==l){if(!O)return o();F?o(!1,F):r=setTimeout(()=>{o(!1,1e-7)},1e3)}O=!1}try{n=new IntersectionObserver(V,{...D,root:s.ownerDocument})}catch{n=new IntersectionObserver(V,D)}n.observe(t)}return o(!0),i}function AF(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=jp(t),h=s||i?[...u?Oa(u):[],...Oa(e)]:[];h.forEach(k=>{s&&k.addEventListener("scroll",n,{passive:!0}),i&&k.addEventListener("resize",n)});const d=u&&a?IF(u,n):null;let p=-1,g=null;o&&(g=new ResizeObserver(k=>{let[D]=k;D&&D.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var O;(O=g)==null||O.observe(e)})),n()}),u&&!l&&g.observe(u),g.observe(e));let _,E=l?Zs(t):null;l&&T();function T(){const k=Zs(t);E&&(k.x!==E.x||k.y!==E.y||k.width!==E.width||k.height!==E.height)&&n(),E=k,_=requestAnimationFrame(T)}return n(),()=>{var k;h.forEach(D=>{s&&D.removeEventListener("scroll",n),i&&D.removeEventListener("resize",n)}),d==null||d(),(k=g)==null||k.disconnect(),g=null,l&&cancelAnimationFrame(_)}}const CF=rF,RF=sF,ev=eF,SF=oF,PF=tF,xF=ZV,kF=iF,OF=(t,e,n)=>{const r=new Map,s={platform:TF,...n},i={...s.platform,_c:r};return JV(t,e,{...s,platform:i})};function DF(t){return t!=null&&typeof t=="object"&&"$el"in t}function Dd(t){if(DF(t)){const e=t.$el;return Up(e)&&ci(e)==="#comment"?null:e}return t}function NF(t){return{name:"arrow",options:t,fn(e){const n=Dd(P(t.element));return n==null?{}:xF({element:n,padding:t.padding}).fn(e)}}}function kI(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function tv(t,e){const n=kI(t);return Math.round(e*n)/n}function MF(t,e,n){n===void 0&&(n={});const r=n.whileElementsMounted,s=ue(()=>{var I;return(I=P(n.open))!=null?I:!0}),i=ue(()=>P(n.middleware)),o=ue(()=>{var I;return(I=P(n.placement))!=null?I:"bottom"}),a=ue(()=>{var I;return(I=P(n.strategy))!=null?I:"absolute"}),l=ue(()=>{var I;return(I=P(n.transform))!=null?I:!0}),u=ue(()=>Dd(t.value)),h=ue(()=>Dd(e.value)),d=fe(0),p=fe(0),g=fe(a.value),_=fe(o.value),E=Jd({}),T=fe(!1),k=ue(()=>{const I={position:g.value,left:"0",top:"0"};if(!h.value)return I;const w=tv(h.value,d.value),A=tv(h.value,p.value);return l.value?{...I,transform:"translate("+w+"px, "+A+"px)",...kI(h.value)>=1.5&&{willChange:"transform"}}:{position:g.value,left:w+"px",top:A+"px"}});let D;function O(){u.value==null||h.value==null||OF(u.value,h.value,{middleware:i.value,placement:o.value,strategy:a.value}).then(I=>{d.value=I.x,p.value=I.y,g.value=I.strategy,_.value=I.placement,E.value=I.middlewareData,T.value=!0})}function V(){typeof D=="function"&&(D(),D=void 0)}function j(){if(V(),r===void 0){O();return}if(u.value!=null&&h.value!=null){D=r(u.value,h.value,O);return}}function F(){s.value||(T.value=!1)}return lt([i,o,a],O,{flush:"sync"}),lt([u,h],j,{flush:"sync"}),lt(s,F,{flush:"sync"}),Wd()&&bv(V),{x:gi(d),y:gi(p),strategy:gi(g),placement:gi(_),middlewareData:gi(E),isPositioned:gi(T),floatingStyles:k,update:O}}function Rn(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,r=Symbol(n);return[s=>{const i=Vn(r,s);if(i||i===null)return i;throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},s=>(ki(r,s),s)]}function OI(t,e,n){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),r.dispatchEvent(s)}function LF(t,e){var n;const r=Jd();return An(()=>{r.value=t()},{...e,flush:(n=void 0)!=null?n:"sync"}),Qd(r)}function Wp(t){return Wd()?(bv(t),!0):!1}function VF(t){let e=!1,n;const r=qd(!0);return(...s)=>(e||(n=r.run(()=>t(...s)),e=!0),n)}function FF(t){let e=0,n,r;const s=()=>{e-=1,r&&e<=0&&(r.stop(),n=void 0,r=void 0)};return(...i)=>(e+=1,n||(r=qd(!0),n=r.run(()=>t(...i))),Wp(s),n)}function Ui(t){return typeof t=="function"?t():P(t)}const Vr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const UF=t=>typeof t<"u",BF=Object.prototype.toString,$F=t=>BF.call(t)==="[object Object]",jF=()=>{},nv=qF();function qF(){var t,e;return Vr&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function WF(t){return Ts()}function HF(t,e=1e4){return yA((n,r)=>{let s=Ui(t),i;const o=()=>setTimeout(()=>{s=Ui(t),r()},Ui(e));return Wp(()=>{clearTimeout(i)}),{get(){return n(),s},set(a){s=a,r(),clearTimeout(i),i=o()}}})}function zF(t,e){WF()&&Zv(t,e)}function vs(t){var e;const n=Ui(t);return(e=n==null?void 0:n.$el)!=null?e:n}const DI=Vr?window:void 0;function NI(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=DI):[e,n,r,s]=t,!e)return jF;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(h=>h()),i.length=0},a=(h,d,p,g)=>(h.addEventListener(d,p,g),()=>h.removeEventListener(d,p,g)),l=lt(()=>[vs(e),Ui(s)],([h,d])=>{if(o(),!h)return;const p=$F(d)?{...d}:d;i.push(...n.flatMap(g=>r.map(_=>a(h,g,_,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),o()};return Wp(u),u}function GF(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function MI(...t){let e,n,r={};t.length===3?(e=t[0],n=t[1],r=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],r=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:s=DI,eventName:i="keydown",passive:o=!1,dedupe:a=!1}=r,l=GF(e);return NI(s,i,u=>{u.repeat&&Ui(a)||l(u)&&n(u)},o)}function KF(){const t=fe(!1),e=Ts();return e&&ar(()=>{t.value=!0},e),t}function QF(t){return JSON.parse(JSON.stringify(t))}function xu(t,e,n,r={}){var s,i,o;const{clone:a=!1,passive:l=!1,eventName:u,deep:h=!1,defaultValue:d,shouldEmit:p}=r,g=Ts(),_=n||(g==null?void 0:g.emit)||((s=g==null?void 0:g.$emit)==null?void 0:s.bind(g))||((o=(i=g==null?void 0:g.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(g==null?void 0:g.proxy));let E=u;e||(e="modelValue"),E=E||`update:${e.toString()}`;const T=O=>a?typeof a=="function"?a(O):QF(O):O,k=()=>UF(t[e])?T(t[e]):d,D=O=>{p?p(O)&&_(E,O):_(E,O)};if(l){const O=k(),V=fe(O);let j=!1;return lt(()=>t[e],F=>{j||(j=!0,V.value=T(F),Yt(()=>j=!1))}),lt(V,F=>{!j&&(F!==t[e]||h)&&D(F)},{deep:h}),V}else return ue({get(){return k()},set(O){D(O)}})}function Hp(t){return t?t.flatMap(e=>e.type===nn?Hp(e.children):[e]):[]}const YF=["INPUT","TEXTAREA"];function XF(t,e,n,r={}){if(!e||r.enableIgnoredElement&&YF.includes(e.nodeName))return null;const{arrowKeyOptions:s="both",attributeName:i="[data-radix-vue-collection-item]",itemsArray:o=[],loop:a=!0,dir:l="ltr",preventScroll:u=!0,focus:h=!1}=r,[d,p,g,_,E,T]=[t.key==="ArrowRight",t.key==="ArrowLeft",t.key==="ArrowUp",t.key==="ArrowDown",t.key==="Home",t.key==="End"],k=g||_,D=d||p;if(!E&&!T&&(!k&&!D||s==="vertical"&&D||s==="horizontal"&&k))return null;const O=n?Array.from(n.querySelectorAll(i)):o;if(!O.length)return null;u&&t.preventDefault();let V=null;return D||k?V=LI(O,e,{goForward:k?_:l==="ltr"?d:p,loop:a}):E?V=O.at(0)||null:T&&(V=O.at(-1)||null),h&&(V==null||V.focus()),V}function LI(t,e,n,r=t.length){if(--r===0)return null;const s=t.indexOf(e),i=n.goForward?s+1:s-1;if(!n.loop&&(i<0||i>=t.length))return null;const o=(i+t.length)%t.length,a=t[o];return a?a.hasAttribute("disabled")&&a.getAttribute("disabled")!=="false"?LI(t,a,n,r):a:null}function Rh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Nd(t,e,n=".",r){if(!Rh(e))return Nd(t,{},n);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Rh(o)&&Rh(s[i])?s[i]=Nd(o,s[i],(n?`${n}.`:"")+i.toString()):s[i]=o)}return s}function JF(t){return(...e)=>e.reduce((n,r)=>Nd(n,r,""),{})}const ZF=JF(),[zp,L4]=Rn("ConfigProvider");let eU="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",tU=(t=21)=>{let e="",n=t;for(;n--;)e+=eU[Math.random()*64|0];return e};const nU=FF(()=>{const t=fe(new Map),e=fe(),n=ue(()=>{for(const o of t.value.values())if(o)return!0;return!1}),r=zp({scrollBody:fe(!0)});let s=null;const i=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.body.style.removeProperty("--scrollbar-width"),document.body.style.overflow=e.value??"",nv&&(s==null||s()),e.value=void 0};return lt(n,(o,a)=>{var l;if(!Vr)return;if(!o){a&&i();return}e.value===void 0&&(e.value=document.body.style.overflow);const u=window.innerWidth-document.documentElement.clientWidth,h={padding:u,margin:0},d=(l=r.scrollBody)!=null&&l.value?typeof r.scrollBody.value=="object"?ZF({padding:r.scrollBody.value.padding===!0?u:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?u:r.scrollBody.value.margin},h):h:{padding:0,margin:0};u>0&&(document.body.style.paddingRight=`${d.padding}px`,document.body.style.marginRight=`${d.margin}px`,document.body.style.setProperty("--scrollbar-width",`${u}px`),document.body.style.overflow="hidden"),nv&&(s=NI(document,"touchmove",p=>{var g;p.target===document.documentElement&&(p.touches.length>1||(g=p.preventDefault)==null||g.call(p))},{passive:!1})),Yt(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),t});function VI(t){const e=tU(6),n=nU();n.value.set(e,t??!1);const r=ue({get:()=>n.value.get(e)??!1,set:s=>n.value.set(e,s)});return zF(()=>{n.value.delete(e)}),r}const rU="data-radix-vue-collection-item";function Gp(t,e=rU){const n=t??Symbol();return{createCollection:r=>{const s=fe([]);function i(){const o=vs(r);return o?s.value=Array.from(o.querySelectorAll(`[${e}]:not([data-disabled])`)):s.value=[]}return Xv(()=>{s.value=[]}),ar(i),Jv(i),lt(()=>r==null?void 0:r.value,i,{immediate:!0}),ki(n,s),s},injectCollection:()=>Vn(n,fe([]))}}function Kp(t){const e=zp({dir:fe("ltr")});return ue(()=>{var n;return(t==null?void 0:t.value)||((n=e.dir)==null?void 0:n.value)||"ltr"})}function go(t){const e=Ts(),n=e==null?void 0:e.type.emits,r={};return n!=null&&n.length||console.warn(`No emitted event found. Please check component: ${e==null?void 0:e.type.__name}`),n==null||n.forEach(s=>{r[Ll(In(s))]=(...i)=>t(s,...i)}),r}let Sh=0;function sU(){An(t=>{if(!Vr)return;const e=document.querySelectorAll("[data-radix-focus-guard]");document.body.insertAdjacentElement("afterbegin",e[0]??rv()),document.body.insertAdjacentElement("beforeend",e[1]??rv()),Sh++,t(()=>{Sh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),Sh--})})}function rv(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",t}function ku(t){const e=Ts(),n=Object.keys((e==null?void 0:e.type.props)??{}).reduce((s,i)=>{const o=(e==null?void 0:e.type.props[i]).default;return o!==void 0&&(s[i]=o),s},{}),r=EA(t);return ue(()=>{const s={},i=(e==null?void 0:e.vnode.props)??{};return Object.keys(i).forEach(o=>{s[In(o)]=i[o]}),Object.keys({...n,...s}).reduce((o,a)=>(r.value[a]!==void 0&&(o[a]=r.value[a]),o),{})})}function Fr(t,e){const n=ku(t),r=e?go(e):{};return ue(()=>({...n.value,...r}))}function xe(){const t=Ts(),e=fe(),n=ue(()=>{var o,a;return["#text","#comment"].includes((o=e.value)==null?void 0:o.$el.nodeName)?(a=e.value)==null?void 0:a.$el.nextElementSibling:vs(e)}),r=Object.assign({},t.exposed),s={};for(const o in t.props)Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>t.props[o]});if(Object.keys(r).length>0)for(const o in r)Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>r[o]});Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=s;function i(o){e.value=o,!(o instanceof Element||!o)&&(Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>o.$el}),t.exposed=s)}return{forwardRef:i,currentRef:e,currentElement:n}}var iU=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},wi=new WeakMap,kl=new WeakMap,Ol={},Ph=0,FI=function(t){return t&&(t.host||FI(t.parentNode))},oU=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=FI(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},aU=function(t,e,n,r){var s=oU(e,Array.isArray(t)?t:[t]);Ol[n]||(Ol[n]=new WeakMap);var i=Ol[n],o=[],a=new Set,l=new Set(s),u=function(d){!d||a.has(d)||(a.add(d),u(d.parentNode))};s.forEach(u);var h=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(p){if(a.has(p))h(p);else{var g=p.getAttribute(r),_=g!==null&&g!=="false",E=(wi.get(p)||0)+1,T=(i.get(p)||0)+1;wi.set(p,E),i.set(p,T),o.push(p),E===1&&_&&kl.set(p,!0),T===1&&p.setAttribute(n,"true"),_||p.setAttribute(r,"true")}})};return h(e),a.clear(),Ph++,function(){o.forEach(function(d){var p=wi.get(d)-1,g=i.get(d)-1;wi.set(d,p),i.set(d,g),p||(kl.has(d)||d.removeAttribute(r),kl.delete(d)),g||d.removeAttribute(n)}),Ph--,Ph||(wi=new WeakMap,wi=new WeakMap,kl=new WeakMap,Ol={})}},lU=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),s=iU(t);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live]"))),aU(r,s,n,"aria-hidden")):function(){return null}};function UI(t){let e;lt(()=>vs(t),n=>{n?e=lU(n):e&&e()}),eo(()=>{e&&e()})}let cU=0;function Da(t,e="radix"){const{useId:n}=zp({useId:void 0});return n&&typeof n=="function"?`${e}-${n()}`:`${e}-${++cU}`}function uU(t){const e=fe(),n=ue(()=>{var s;return((s=e.value)==null?void 0:s.width)??0}),r=ue(()=>{var s;return((s=e.value)==null?void 0:s.height)??0});return ar(()=>{const s=vs(t);if(s){e.value={width:s.offsetWidth,height:s.offsetHeight};const i=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let l,u;if("borderBoxSize"in a){const h=a.borderBoxSize,d=Array.isArray(h)?h[0]:h;l=d.inlineSize,u=d.blockSize}else l=s.offsetWidth,u=s.offsetHeight;e.value={width:l,height:u}});return i.observe(s,{box:"border-box"}),()=>i.unobserve(s)}else e.value=void 0}),{width:n,height:r}}function hU(t,e){const n=fe(t);function r(s){return e[n.value][s]??n.value}return{state:n,dispatch:s=>{n.value=r(s)}}}function dU(t){const e=HF("",1e3);return{search:e,handleTypeaheadSearch:(n,r)=>{var s,i;if(!(t!=null&&t.value)&&!r)return;e.value=e.value+n;const o=(t==null?void 0:t.value)??r,a=document.activeElement,l=((i=(s=o.find(p=>p===a))==null?void 0:s.textContent)==null?void 0:i.trim())??"",u=o.map(p=>{var g;return((g=p.textContent)==null?void 0:g.trim())??""}),h=pU(u,e.value,l),d=o.find(p=>{var g;return((g=p.textContent)==null?void 0:g.trim())===h});return d&&d.focus(),d},resetTypeahead:()=>{e.value=""}}}function fU(t,e){return t.map((n,r)=>t[(e+r)%t.length])}function pU(t,e,n){const r=e.length>1&&Array.from(e).every(a=>a===e[0])?e[0]:e,s=n?t.indexOf(n):-1;let i=fU(t,Math.max(s,0));r.length===1&&(i=i.filter(a=>a!==n));const o=i.find(a=>a.toLowerCase().startsWith(r.toLowerCase()));return o!==n?o:void 0}const mU=he({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{var r,s;if(!n.default)return null;const i=Hp(n.default()),o=i.findIndex(h=>h.type!==Ar);if(o===-1)return i;const a=i[o];(r=a.props)==null||delete r.ref;const l=a.props?Pe(e,a.props):e;e.class&&(s=a.props)!=null&&s.class&&delete a.props.class;const u=qs(a,l);for(const h in l)h.startsWith("on")&&(u.props||(u.props={}),u.props[h]=l[h]);return i.length===1?u:(i[o]=u,i)}}}),pt=he({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const r=t.asChild?"template":t.as;return typeof r=="string"&&["area","img","input"].includes(r)?()=>br(r,e):r!=="template"?()=>br(t.as,e,{default:n.default}):()=>br(mU,e,{default:n.default})}});function gU(t,e){const n=fe({}),r=fe("none"),s=t.value?"mounted":"unmounted",{state:i,dispatch:o}=hU(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),a=p=>{var g;if(Vr){const _=new CustomEvent(p,{bubbles:!1,cancelable:!1});(g=e.value)==null||g.dispatchEvent(_)}};lt(t,async(p,g)=>{var _;const E=g!==p;if(await Yt(),E){const T=r.value,k=Dl(e.value);p?(o("MOUNT"),a("enter"),k==="none"&&a("after-enter")):k==="none"||((_=n.value)==null?void 0:_.display)==="none"?(o("UNMOUNT"),a("leave"),a("after-leave")):g&&T!==k?(o("ANIMATION_OUT"),a("leave")):(o("UNMOUNT"),a("after-leave"))}},{immediate:!0});const l=p=>{const g=Dl(e.value),_=g.includes(p.animationName),E=i.value==="mounted"?"enter":"leave";p.target===e.value&&_&&(a(`after-${E}`),o("ANIMATION_END")),p.target===e.value&&g==="none"&&o("ANIMATION_END")},u=p=>{p.target===e.value&&(r.value=Dl(e.value))},h=lt(e,(p,g)=>{p?(n.value=getComputedStyle(p),p.addEventListener("animationstart",u),p.addEventListener("animationcancel",l),p.addEventListener("animationend",l)):(o("ANIMATION_END"),g==null||g.removeEventListener("animationstart",u),g==null||g.removeEventListener("animationcancel",l),g==null||g.removeEventListener("animationend",l))},{immediate:!0}),d=lt(i,()=>{const p=Dl(e.value);r.value=i.value==="mounted"?p:"none"});return eo(()=>{h(),d()}),{isPresent:ue(()=>["mounted","unmountSuspended"].includes(i.value))}}function Dl(t){return t&&getComputedStyle(t).animationName||"none"}const Qp=he({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(t,{slots:e,expose:n}){var r;const{present:s,forceMount:i}=ri(t),o=fe(),{isPresent:a}=gU(s,o);n({present:a});let l=e.default({present:a});l=Hp(l||[]);const u=Ts();if(l&&(l==null?void 0:l.length)>1){const h=(r=u==null?void 0:u.parent)!=null&&r.type.name?`<${u.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${h}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}return()=>i.value||s.value||a.value?br(e.default({present:a})[0],{ref:h=>{const d=vs(h);return typeof(d==null?void 0:d.hasAttribute)>"u"||(d!=null&&d.hasAttribute("data-radix-popper-content-wrapper")?o.value=d.firstElementChild:o.value=d),d}}):null}}),[ur,_U]=Rn("DialogRoot"),yU=he({__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(t,{emit:e}){const n=t,r=xu(n,"open",e,{defaultValue:n.defaultOpen,passive:n.open===void 0}),s=fe(),i=fe(),{modal:o}=ri(n);return _U({open:r,modal:o,openModal:()=>{r.value=!0},onOpenChange:a=>{r.value=a},onOpenToggle:()=>{r.value=!r.value},contentId:"",titleId:"",descriptionId:"",triggerElement:s,contentElement:i}),(a,l)=>X(a.$slots,"default",{open:P(r)})}}),vU=he({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t,n=ur(),{forwardRef:r,currentElement:s}=xe();return n.contentId||(n.contentId=Da(void 0,"radix-vue-dialog-content")),ar(()=>{n.triggerElement.value=s.value}),(i,o)=>(W(),Y(P(pt),Pe(e,{ref:P(r),type:i.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":P(n).open.value||!1,"aria-controls":P(n).open.value?P(n).contentId:void 0,"data-state":P(n).open.value?"open":"closed",onClick:P(n).onOpenToggle}),{default:B(()=>[X(i.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Yp=he({__name:"Teleport",props:{to:{default:"body"},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=KF();return(n,r)=>P(e)||n.forceMount?(W(),Y(gC,{key:0,to:n.to,disabled:n.disabled},[X(n.$slots,"default")],8,["to","disabled"])):mn("",!0)}}),V4=he({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=t;return(n,r)=>(W(),Y(P(Yp),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),wU="dismissableLayer.pointerDownOutside",EU="dismissableLayer.focusOutside";function BI(t,e){const n=e.closest("[data-dismissable-layer]"),r=t.dataset.dismissableLayer===""?t:t.querySelector("[data-dismissable-layer]"),s=Array.from(t.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(n&&r===n||s.indexOf(r)<s.indexOf(n))}function bU(t,e){var n;const r=((n=e==null?void 0:e.value)==null?void 0:n.ownerDocument)??(globalThis==null?void 0:globalThis.document),s=fe(!1),i=fe(()=>{});return An(o=>{if(!Vr)return;const a=async u=>{const h=u.target;if(e!=null&&e.value){if(BI(e.value,h)){s.value=!1;return}if(u.target&&!s.value){let d=function(){OI(wU,t,p)};const p={originalEvent:u};u.pointerType==="touch"?(r.removeEventListener("click",i.value),i.value=d,r.addEventListener("click",i.value,{once:!0})):d()}else r.removeEventListener("click",i.value);s.value=!1}},l=window.setTimeout(()=>{r.addEventListener("pointerdown",a)},0);o(()=>{window.clearTimeout(l),r.removeEventListener("pointerdown",a),r.removeEventListener("click",i.value)})}),{onPointerDownCapture:()=>s.value=!0}}function TU(t,e){var n;const r=((n=e==null?void 0:e.value)==null?void 0:n.ownerDocument)??(globalThis==null?void 0:globalThis.document),s=fe(!1);return An(i=>{if(!Vr)return;const o=async a=>{e!=null&&e.value&&(await Yt(),!(!e.value||BI(e.value,a.target))&&a.target&&!s.value&&OI(EU,t,{originalEvent:a}))};r.addEventListener("focusin",o),i(()=>r.removeEventListener("focusin",o))}),{onFocusCapture:()=>s.value=!0,onBlurCapture:()=>s.value=!1}}const Pn=ni({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$I=he({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(t,{emit:e}){const n=t,r=e,{forwardRef:s,currentElement:i}=xe(),o=ue(()=>{var _;return((_=i.value)==null?void 0:_.ownerDocument)??globalThis.document}),a=ue(()=>Pn.layersRoot),l=ue(()=>i.value?Array.from(a.value).indexOf(i.value):-1),u=ue(()=>Pn.layersWithOutsidePointerEventsDisabled.size>0),h=ue(()=>{const _=Array.from(a.value),[E]=[...Pn.layersWithOutsidePointerEventsDisabled].slice(-1),T=_.indexOf(E);return l.value>=T}),d=bU(async _=>{const E=[...Pn.branches].some(T=>T.contains(_.target));!h.value||E||(r("pointerDownOutside",_),r("interactOutside",_),await Yt(),_.defaultPrevented||r("dismiss"))},i),p=TU(_=>{[...Pn.branches].some(E=>E.contains(_.target))||(r("focusOutside",_),r("interactOutside",_),_.defaultPrevented||r("dismiss"))},i);MI("Escape",_=>{l.value===a.value.size-1&&(r("escapeKeyDown",_),_.defaultPrevented||r("dismiss"))});let g;return An(_=>{i.value&&(n.disableOutsidePointerEvents&&(Pn.layersWithOutsidePointerEventsDisabled.size===0&&(g=o.value.body.style.pointerEvents,o.value.body.style.pointerEvents="none"),Pn.layersWithOutsidePointerEventsDisabled.add(i.value)),a.value.add(i.value),_(()=>{n.disableOutsidePointerEvents&&Pn.layersWithOutsidePointerEventsDisabled.size===1&&(o.value.body.style.pointerEvents=g)}))}),An(_=>{_(()=>{i.value&&(a.value.delete(i.value),Pn.layersWithOutsidePointerEventsDisabled.delete(i.value))})}),(_,E)=>(W(),Y(P(pt),{ref:P(s),"as-child":_.asChild,as:_.as,"data-dismissable-layer":"",style:ws({pointerEvents:u.value?h.value?"auto":"none":void 0}),onFocusCapture:P(p).onFocusCapture,onBlurCapture:P(p).onBlurCapture,onPointerdownCapture:P(d).onPointerDownCapture},{default:B(()=>[X(_.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),IU=he({__name:"DismissableLayerBranch",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t,{forwardRef:n,currentElement:r}=xe();return ar(()=>{Pn.branches.add(r.value)}),eo(()=>{Pn.branches.delete(r.value)}),(s,i)=>(W(),Y(P(pt),Pe({ref:P(n)},e),{default:B(()=>[X(s.$slots,"default")]),_:3},16))}}),xh="focusScope.autoFocusOnMount",kh="focusScope.autoFocusOnUnmount",sv={bubbles:!1,cancelable:!0};function Xl(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(Qr(r,{select:e}),document.activeElement!==n)return!0}function AU(t){const e=Xp(t),n=iv(e,t),r=iv(e.reverse(),t);return[n,r]}function Xp(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function iv(t,e){for(const n of t)if(!CU(n,{upTo:e}))return n}function CU(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function RU(t){return t instanceof HTMLInputElement&&"select"in t}function Qr(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&RU(t)&&e&&t.select()}}const SU=VF(()=>fe([]));function PU(){const t=SU();return{add(e){const n=t.value[0];e!==n&&(n==null||n.pause()),t.value=ov(t.value,e),t.value.unshift(e)},remove(e){var n;t.value=ov(t.value,e),(n=t.value[0])==null||n.resume()}}}function ov(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function xU(t){return t.filter(e=>e.tagName!=="A")}const jI=he({__name:"FocusScope",props:{loop:{type:Boolean,default:!1},trapped:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["mountAutoFocus","unmountAutoFocus"],setup(t,{emit:e}){const n=t,r=e,{currentRef:s,currentElement:i}=xe(),o=fe(null),a=PU(),l=ni({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});An(h=>{if(!Vr)return;const d=i.value;if(!n.trapped)return;function p(T){if(l.paused||!d)return;const k=T.target;d.contains(k)?o.value=k:Qr(o.value,{select:!0})}function g(T){if(l.paused||!d)return;const k=T.relatedTarget;k!==null&&(d.contains(k)||Qr(o.value,{select:!0}))}function _(T){d.contains(o.value)||Qr(d)}document.addEventListener("focusin",p),document.addEventListener("focusout",g);const E=new MutationObserver(_);d&&E.observe(d,{childList:!0,subtree:!0}),h(()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",g),E.disconnect()})}),An(async h=>{const d=i.value;if(await Yt(),!d)return;a.add(l);const p=document.activeElement;if(!d.contains(p)){const g=new CustomEvent(xh,sv);d.addEventListener(xh,_=>r("mountAutoFocus",_)),d.dispatchEvent(g),g.defaultPrevented||(Xl(xU(Xp(d)),{select:!0}),document.activeElement===p&&Qr(d))}h(()=>{d.removeEventListener(xh,E=>r("mountAutoFocus",E));const g=new CustomEvent(kh,sv),_=E=>{r("unmountAutoFocus",E)};d.addEventListener(kh,_),d.dispatchEvent(g),setTimeout(()=>{g.defaultPrevented||Qr(p??document.body,{select:!0}),d.removeEventListener(kh,_),a.remove(l)},0)})});function u(h){if(!n.loop&&!n.trapped||l.paused)return;const d=h.key==="Tab"&&!h.altKey&&!h.ctrlKey&&!h.metaKey,p=document.activeElement;if(d&&p){const g=h.currentTarget,[_,E]=AU(g);_&&E?!h.shiftKey&&p===E?(h.preventDefault(),n.loop&&Qr(_,{select:!0})):h.shiftKey&&p===_&&(h.preventDefault(),n.loop&&Qr(E,{select:!0})):p===g&&h.preventDefault()}}return(h,d)=>(W(),Y(P(pt),{ref_key:"currentRef",ref:s,tabindex:"-1","as-child":h.asChild,as:h.as,onKeydown:u},{default:B(()=>[X(h.$slots,"default")]),_:3},8,["as-child","as"]))}}),kU="menu.itemSelect",Md=["Enter"," "],OU=["ArrowDown","PageUp","Home"],qI=["ArrowUp","PageDown","End"],DU=[...OU,...qI];[...Md],[...Md];function WI(t){return t?"open":"closed"}function NU(t){const e=document.activeElement;for(const n of t)if(n===e||(n.focus(),document.activeElement!==e))return}function MU(t,e){const{x:n,y:r}=t;let s=!1;for(let i=0,o=e.length-1;i<e.length;o=i++){const a=e[i].x,l=e[i].y,u=e[o].x,h=e[o].y;l>r!=h>r&&n<(u-a)*(r-l)/(h-l)+a&&(s=!s)}return s}function LU(t,e){if(!e)return!1;const n={x:t.clientX,y:t.clientY};return MU(n,e)}function Ld(t){return t.pointerType==="mouse"}const HI=he({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=ur(),{forwardRef:i,currentElement:o}=xe();return s.titleId||(s.titleId=Da(void 0,"radix-vue-dialog-title")),s.descriptionId||(s.descriptionId=Da(void 0,"radix-vue-dialog-description")),ar(()=>{s.contentElement=o,document.activeElement!==document.body&&(s.triggerElement.value=document.activeElement)}),(a,l)=>(W(),Y(P(jI),{"as-child":"",loop:"",trapped:n.trapFocus,onMountAutoFocus:l[5]||(l[5]=u=>r("openAutoFocus",u)),onUnmountAutoFocus:l[6]||(l[6]=u=>r("closeAutoFocus",u))},{default:B(()=>[ee(P($I),Pe({id:P(s).contentId,ref:P(i),as:a.as,"as-child":a.asChild,"disable-outside-pointer-events":a.disableOutsidePointerEvents,role:"dialog","aria-describedby":P(s).descriptionId,"aria-labelledby":P(s).titleId,"data-state":P(WI)(P(s).open.value)},a.$attrs,{onDismiss:l[0]||(l[0]=u=>P(s).onOpenChange(!1)),onEscapeKeyDown:l[1]||(l[1]=u=>r("escapeKeyDown",u)),onFocusOutside:l[2]||(l[2]=u=>r("focusOutside",u)),onInteractOutside:l[3]||(l[3]=u=>r("interactOutside",u)),onPointerDownOutside:l[4]||(l[4]=u=>r("pointerDownOutside",u))}),{default:B(()=>[X(a.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),VU=he({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=ur(),i=go(r),{forwardRef:o,currentElement:a}=xe();return UI(a),(l,u)=>(W(),Y(HI,Pe({...n,...P(i)},{ref:P(o),"trap-focus":P(s).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:u[0]||(u[0]=h=>{var d;r("closeAutoFocus",h),h.defaultPrevented||(h.preventDefault(),(d=P(s).triggerElement.value)==null||d.focus())}),onPointerDownOutside:u[1]||(u[1]=h=>{const d=h.detail.originalEvent,p=d.button===0&&d.ctrlKey===!0;(d.button===2||p)&&h.preventDefault()}),onFocusOutside:u[2]||(u[2]=h=>{h.preventDefault()}),onOpenAutoFocus:u[3]||(u[3]=h=>r("openAutoFocus",h))}),{default:B(()=>[X(l.$slots,"default")]),_:3},16,["trap-focus"]))}}),FU=he({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=go(r);xe();const i=ur(),o=fe(!1),a=fe(!1);return(l,u)=>(W(),Y(HI,Pe({...n,...P(s)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:u[0]||(u[0]=h=>{var d;r("closeAutoFocus",h),h.defaultPrevented||(o.value||(d=P(i).triggerElement.value)==null||d.focus(),h.preventDefault()),o.value=!1,a.value=!1}),onInteractOutside:u[1]||(u[1]=h=>{var d;h.defaultPrevented||(o.value=!0,h.detail.originalEvent.type==="pointerdown"&&(a.value=!0));const p=h.target;(d=P(i).triggerElement.value)!=null&&d.contains(p)&&h.preventDefault(),h.detail.originalEvent.type==="focusin"&&a.value&&h.preventDefault()})}),{default:B(()=>[X(l.$slots,"default")]),_:3},16))}}),UU=he({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=ur(),i=go(r),{forwardRef:o}=xe();return(a,l)=>(W(),Y(P(Qp),{present:a.forceMount||P(s).open.value},{default:B(()=>[P(s).modal.value?(W(),Y(VU,Pe({key:0,ref:P(o)},{...n,...P(i),...a.$attrs},{onOpenAutoFocus:l[0]||(l[0]=u=>r("openAutoFocus",u))}),{default:B(()=>[X(a.$slots,"default")]),_:3},16)):(W(),Y(FU,Pe({key:1,ref:P(o)},{...n,...P(i),...a.$attrs}),{default:B(()=>[X(a.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),BU=he({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(t){const e=ur();return VI(!0),xe(),(n,r)=>(W(),Y(P(pt),{as:n.as,"as-child":n.asChild,"data-state":P(e).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:B(()=>[X(n.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),$U=he({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=ur(),{forwardRef:n}=xe();return(r,s)=>{var i;return(i=P(e))!=null&&i.modal.value?(W(),Y(P(Qp),{key:0,present:r.forceMount||P(e).open.value},{default:B(()=>[ee(BU,Pe(r.$attrs,{ref:P(n),as:r.as,"as-child":r.asChild}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):mn("",!0)}}}),zI=he({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;xe();const n=ur();return(r,s)=>(W(),Y(P(pt),Pe(e,{type:r.as==="button"?"button":void 0,onClick:s[0]||(s[0]=i=>P(n).onOpenChange(!1))}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["type"]))}}),jU=he({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(t){const e=t,n=ur();return xe(),(r,s)=>(W(),Y(P(pt),Pe(e,{id:P(n).titleId}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["id"]))}}),qU=he({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(t){const e=t;xe();const n=ur();return(r,s)=>(W(),Y(P(pt),Pe(e,{id:P(n).descriptionId}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["id"]))}}),WU=he({__name:"AlertDialogRoot",props:{open:{type:Boolean},defaultOpen:{type:Boolean}},emits:["update:open"],setup(t,{emit:e}){const n=Fr(t,e);return xe(),(r,s)=>(W(),Y(P(yU),Pe(P(n),{modal:!0}),{default:B(()=>[X(r.$slots,"default")]),_:3},16))}}),HU=he({__name:"AlertDialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(vU),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),zU=he({__name:"AlertDialogPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=t;return(n,r)=>(W(),Y(P(Yp),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),[GU,KU]=Rn("AlertDialogContent"),QU=he({__name:"AlertDialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=go(e);xe();const s=fe();return KU({onCancelElementChange:i=>{s.value=i}}),(i,o)=>(W(),Y(P(UU),Pe({...n,...P(r)},{role:"alertdialog",onPointerDownOutside:o[0]||(o[0]=Hh(()=>{},["prevent"])),onInteractOutside:o[1]||(o[1]=Hh(()=>{},["prevent"])),onOpenAutoFocus:o[2]||(o[2]=()=>{Yt(()=>{var a;(a=s.value)==null||a.focus({preventScroll:!0})})})}),{default:B(()=>[X(i.$slots,"default")]),_:3},16))}}),YU=he({__name:"AlertDialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P($U),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),XU=he({__name:"AlertDialogCancel",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t,n=GU(),{forwardRef:r,currentElement:s}=xe();return ar(()=>{n.onCancelElementChange(s.value)}),(i,o)=>(W(),Y(P(zI),Pe(e,{ref:P(r)}),{default:B(()=>[X(i.$slots,"default")]),_:3},16))}}),JU=he({__name:"AlertDialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(jU),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),ZU=he({__name:"AlertDialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(qU),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),e2=he({__name:"AlertDialogAction",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(zI),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),[t2,n2]=Rn("AvatarRoot"),r2=he({__name:"AvatarRoot",props:{asChild:{type:Boolean},as:{default:"span"}},setup(t){return xe(),n2({imageLoadingStatus:fe("loading")}),(e,n)=>(W(),Y(P(pt),{"as-child":e.asChild,as:e.as},{default:B(()=>[X(e.$slots,"default")]),_:3},8,["as-child","as"]))}}),s2=he({__name:"AvatarFallback",props:{delayMs:{default:0},asChild:{type:Boolean},as:{default:"span"}},setup(t){const e=t,n=t2();xe();const r=fe(!1);let s;return lt(n.imageLoadingStatus,i=>{i==="loading"&&(r.value=!1,e.delayMs?s=setTimeout(()=>{r.value=!0,clearTimeout(s)},e.delayMs):r.value=!0)},{immediate:!0}),(i,o)=>r.value&&P(n).imageLoadingStatus.value!=="loaded"?(W(),Y(P(pt),{key:0,"as-child":i.asChild,as:i.as},{default:B(()=>[X(i.$slots,"default")]),_:3},8,["as-child","as"])):mn("",!0)}}),[GI,i2]=Rn("PopperRoot"),o2=he({__name:"PopperRoot",setup(t){const e=fe();return i2({anchor:e,onAnchorChange:n=>e.value=n}),(n,r)=>X(n.$slots,"default")}}),a2=he({__name:"PopperAnchor",props:{element:{},asChild:{type:Boolean},as:{}},setup(t){const e=t,{forwardRef:n,currentElement:r}=xe(),s=GI();return lt(r,()=>{s.onAnchorChange(e.element??r.value)}),(i,o)=>(W(),Y(P(pt),{ref:P(n),as:i.as,"as-child":i.asChild},{default:B(()=>[X(i.$slots,"default")]),_:3},8,["as","as-child"]))}});function l2(t){return t!==null}function c2(t){return{name:"transformOrigin",options:t,fn(e){var n,r,s;const{placement:i,rects:o,middlewareData:a}=e,l=((n=a.arrow)==null?void 0:n.centerOffset)!==0,u=l?0:t.arrowWidth,h=l?0:t.arrowHeight,[d,p]=Vd(i),g={start:"0%",center:"50%",end:"100%"}[p],_=(((r=a.arrow)==null?void 0:r.x)??0)+u/2,E=(((s=a.arrow)==null?void 0:s.y)??0)+h/2;let T="",k="";return d==="bottom"?(T=l?g:`${_}px`,k=`${-h}px`):d==="top"?(T=l?g:`${_}px`,k=`${o.floating.height+h}px`):d==="right"?(T=`${-h}px`,k=l?g:`${E}px`):d==="left"&&(T=`${o.floating.width+h}px`,k=l?g:`${E}px`),{data:{x:T,y:k}}}}}function Vd(t){const[e,n="center"]=t.split("-");return[e,n]}const KI={side:"bottom",sideOffset:0,align:"center",alignOffset:0,arrowPadding:0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:"partial",hideWhenDetached:!1,updatePositionStrategy:"optimized",prioritizePosition:!1},[F4,u2]=Rn("PopperContent"),h2=he({inheritAttrs:!1,__name:"PopperContent",props:tw({side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},{...KI}),emits:["placed"],setup(t,{emit:e}){const n=t,r=e,s=GI(),{forwardRef:i,currentElement:o}=xe(),a=fe(),l=fe(),{width:u,height:h}=uU(l),d=ue(()=>n.side+(n.align!=="center"?`-${n.align}`:"")),p=ue(()=>typeof n.collisionPadding=="number"?n.collisionPadding:{top:0,right:0,bottom:0,left:0,...n.collisionPadding}),g=ue(()=>Array.isArray(n.collisionBoundary)?n.collisionBoundary:[n.collisionBoundary]),_=ue(()=>({padding:p.value,boundary:g.value.filter(l2),altBoundary:g.value.length>0})),E=LF(()=>[CF({mainAxis:n.sideOffset+h.value,alignmentAxis:n.alignOffset}),n.prioritizePosition&&n.avoidCollisions&&ev({..._.value}),n.avoidCollisions&&RF({mainAxis:!0,crossAxis:!!n.prioritizePosition,limiter:n.sticky==="partial"?kF():void 0,..._.value}),!n.prioritizePosition&&n.avoidCollisions&&ev({..._.value}),SF({..._.value,apply:({elements:v,rects:R,availableWidth:S,availableHeight:C})=>{const{width:ye,height:$e}=R.reference,Re=v.floating.style;Object.assign(v.floating.style,{maxWidth:`${S}px`,maxHeight:`${C}px`}),Re.setProperty("--radix-popper-available-width",`${S}px`),Re.setProperty("--radix-popper-available-height",`${C}px`),Re.setProperty("--radix-popper-anchor-width",`${ye}px`),Re.setProperty("--radix-popper-anchor-height",`${$e}px`)}}),l.value&&NF({element:l.value,padding:n.arrowPadding}),c2({arrowWidth:u.value,arrowHeight:h.value}),n.hideWhenDetached&&PF({strategy:"referenceHidden",..._.value})]),{floatingStyles:T,placement:k,isPositioned:D,middlewareData:O}=MF(s.anchor,a,{strategy:"fixed",placement:d,whileElementsMounted:(...v)=>AF(...v,{animationFrame:n.updatePositionStrategy==="always"}),middleware:E}),V=ue(()=>Vd(k.value)[0]),j=ue(()=>Vd(k.value)[1]);An(()=>{D.value&&r("placed")});const F=ue(()=>{var v;return((v=O.value.arrow)==null?void 0:v.centerOffset)!==0}),I=fe("");An(()=>{o.value&&(I.value=window.getComputedStyle(o.value).zIndex)});const w=ue(()=>{var v;return((v=O.value.arrow)==null?void 0:v.x)??0}),A=ue(()=>{var v;return((v=O.value.arrow)==null?void 0:v.y)??0});return u2({placedSide:V,onArrowChange:v=>l.value=v,arrowX:w,arrowY:A,shouldHideArrow:F}),(v,R)=>{var S,C,ye;return W(),Je("div",{ref_key:"floatingRef",ref:a,"data-radix-popper-content-wrapper":"",style:ws({...P(T),transform:P(D)?P(T).transform:"translate(0, -200%)",minWidth:"max-content",zIndex:I.value,"--radix-popper-transform-origin":[(S=P(O).transformOrigin)==null?void 0:S.x,(C=P(O).transformOrigin)==null?void 0:C.y].join(" "),...((ye=P(O).hide)==null?void 0:ye.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}})},[ee(P(pt),Pe({ref:P(i)},v.$attrs,{"as-child":n.asChild,as:v.as,"data-side":V.value,"data-align":j.value,style:{animation:P(D)?void 0:"none"}}),{default:B(()=>[X(v.$slots,"default")]),_:3},16,["as-child","as","data-side","data-align","style"])],4)}}}),d2=he({__name:"VisuallyHidden",props:{asChild:{type:Boolean},as:{default:"span"}},setup(t){return xe(),(e,n)=>(W(),Y(P(pt),{as:e.as,"as-child":e.asChild,style:ws({position:"absolute",border:0,width:"1px",display:"inline-block",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"})},{default:B(()=>[X(e.$slots,"default")]),_:3},8,["as","as-child","style"]))}}),f2=he({__name:"MenuAnchor",props:{element:{},asChild:{type:Boolean},as:{}},setup(t){const e=t;return(n,r)=>(W(),Y(P(a2),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),[Ou,p2]=Rn(["MenuRoot","MenuSub"],"MenuContext"),[Jp,m2]=Rn("MenuRoot"),g2=he({__name:"MenuRoot",props:{open:{type:Boolean,default:!1},dir:{},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(t,{emit:e}){const n=t,r=e,{modal:s,dir:i}=ri(n),o=Kp(i),a=xu(n,"open",r),l=fe(),u=fe(!1);return An(h=>{if(!Vr)return;const d=()=>{u.value=!0,document.addEventListener("pointerdown",p,{capture:!0,once:!0}),document.addEventListener("pointermove",p,{capture:!0,once:!0})},p=()=>u.value=!1;document.addEventListener("keydown",d,{capture:!0}),h(()=>{document.removeEventListener("keydown",d,{capture:!0}),document.removeEventListener("pointerdown",p,{capture:!0}),document.removeEventListener("pointermove",p,{capture:!0})})}),p2({open:a,onOpenChange:h=>{a.value=h},content:l,onContentChange:h=>{l.value=h}}),m2({onClose:()=>{a.value=!1},isUsingKeyboardRef:u,dir:o,modal:s}),(h,d)=>(W(),Y(P(o2),null,{default:B(()=>[X(h.$slots,"default")]),_:3}))}}),_2="rovingFocusGroup.onEntryFocus",y2={bubbles:!1,cancelable:!0};function v2(t){const e=document.activeElement;for(const n of t)if(n===e||(n.focus(),document.activeElement!==e))return}const[U4,w2]=Rn("RovingFocusGroup"),E2=he({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(t,{emit:e}){const n=t,r=e,{loop:s,orientation:i,dir:o}=ri(n),a=Kp(o),l=xu(n,"currentTabStopId",r,{defaultValue:n.defaultCurrentTabStopId,passive:n.currentTabStopId===void 0}),u=fe(!1),h=fe(!1),d=fe(0),{forwardRef:p,currentElement:g}=xe(),{createCollection:_}=Gp("rovingFocus"),E=_(g);function T(k){const D=!h.value;if(k.currentTarget&&k.target===k.currentTarget&&D&&!u.value){const O=new CustomEvent(_2,y2);if(k.currentTarget.dispatchEvent(O),r("entryFocus",O),!O.defaultPrevented){const V=E.value,j=V.find(w=>w.getAttribute("data-active")==="true"),F=V.find(w=>w.id===l.value),I=[j,F,...V].filter(Boolean);v2(I)}}h.value=!1}return w2({loop:s,dir:a,orientation:i,currentTabStopId:l,onItemFocus:k=>{l.value=k},onItemShiftTab:()=>{u.value=!0},onFocusableItemAdd:()=>{d.value++},onFocusableItemRemove:()=>{d.value--}}),(k,D)=>(W(),Y(P(pt),{ref:P(p),tabindex:u.value||d.value===0?-1:0,"data-orientation":P(i),as:k.as,"as-child":k.asChild,dir:P(a),style:{outline:"none"},onMousedown:D[0]||(D[0]=O=>h.value=!0),onFocus:T,onBlur:D[1]||(D[1]=O=>u.value=!1)},{default:B(()=>[X(k.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"]))}}),[QI,b2]=Rn("MenuContent"),YI=he({__name:"MenuContentImpl",props:tw({loop:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},disableOutsideScroll:{type:Boolean},trapFocus:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},{...KI}),emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus","dismiss"],setup(t,{emit:e}){const n=t,r=e,s=Ou(),i=Jp(),{trapFocus:o,disableOutsidePointerEvents:a,loop:l}=ri(n);sU(),VI(a.value);const u=fe(""),h=fe(0),d=fe(0),p=fe(null),g=fe("right"),_=fe(0),E=fe(null),{createCollection:T}=Gp(),{forwardRef:k,currentElement:D}=xe(),O=T(D);lt(D,v=>{s.onContentChange(v)});const{handleTypeaheadSearch:V}=dU(O);eo(()=>{window.clearTimeout(h.value)});function j(v){var R,S;return g.value===((R=p.value)==null?void 0:R.side)&&LU(v,(S=p.value)==null?void 0:S.area)}async function F(v){var R;r("openAutoFocus",v),!v.defaultPrevented&&(v.preventDefault(),(R=D.value)==null||R.focus())}function I(v){if(v.defaultPrevented)return;const R=v.target.closest("[data-radix-menu-content]")===v.currentTarget,S=v.ctrlKey||v.altKey||v.metaKey,C=v.key.length===1,ye=XF(v,document.activeElement,D.value,{loop:l.value,arrowKeyOptions:"vertical",dir:i==null?void 0:i.dir.value,focus:!0,attributeName:"[data-radix-vue-collection-item]:not([data-disabled])"});if(ye)return ye==null?void 0:ye.focus();if(v.code==="Space"||(R&&(v.key==="Tab"&&v.preventDefault(),!S&&C&&V(v.key)),v.target!==D.value)||!DU.includes(v.key))return;v.preventDefault();const $e=O.value;qI.includes(v.key)&&$e.reverse(),NU($e)}function w(v){var R,S;(S=(R=v==null?void 0:v.currentTarget)==null?void 0:R.contains)!=null&&S.call(R,v.target)||(window.clearTimeout(h.value),u.value="")}function A(v){var R;if(!Ld(v))return;const S=v.target,C=_.value!==v.clientX;if((R=v==null?void 0:v.currentTarget)!=null&&R.contains(S)&&C){const ye=v.clientX>_.value?"right":"left";g.value=ye,_.value=v.clientX}}return b2({onItemEnter:v=>!!j(v),onItemLeave:v=>{var R;j(v)||((R=D.value)==null||R.focus(),E.value=null)},onTriggerLeave:v=>!!j(v),searchRef:u,pointerGraceTimerRef:d,onPointerGraceIntentChange:v=>{p.value=v}}),(v,R)=>(W(),Y(P(jI),{"as-child":"",trapped:P(o),onMountAutoFocus:F,onUnmountAutoFocus:R[7]||(R[7]=S=>r("closeAutoFocus",S))},{default:B(()=>[ee(P($I),{"as-child":"","disable-outside-pointer-events":P(a),onEscapeKeyDown:R[2]||(R[2]=S=>r("escapeKeyDown",S)),onPointerDownOutside:R[3]||(R[3]=S=>r("pointerDownOutside",S)),onFocusOutside:R[4]||(R[4]=S=>r("focusOutside",S)),onInteractOutside:R[5]||(R[5]=S=>r("interactOutside",S)),onDismiss:R[6]||(R[6]=S=>r("dismiss"))},{default:B(()=>[ee(P(E2),{"current-tab-stop-id":E.value,"onUpdate:currentTabStopId":R[0]||(R[0]=S=>E.value=S),"as-child":"",orientation:"vertical",dir:P(i).dir.value,loop:P(l),onEntryFocus:R[1]||(R[1]=S=>{r("entryFocus",S),P(i).isUsingKeyboardRef.value||S.preventDefault()})},{default:B(()=>[ee(P(h2),{ref:P(k),role:"menu",as:v.as,"as-child":v.asChild,"aria-orientation":"vertical","data-radix-menu-content":"","data-state":P(WI)(P(s).open.value),dir:P(i).dir.value,side:v.side,"side-offset":v.sideOffset,align:v.align,"align-offset":v.alignOffset,"avoid-collisions":v.avoidCollisions,"collision-boundary":v.collisionBoundary,"collision-padding":v.collisionPadding,"arrow-padding":v.arrowPadding,"prioritize-position":v.prioritizePosition,sticky:v.sticky,"hide-when-detached":v.hideWhenDetached,onKeydown:I,onBlur:w,onPointermove:A},{default:B(()=>[X(v.$slots,"default")]),_:3},8,["as","as-child","data-state","dir","side","side-offset","align","align-offset","avoid-collisions","collision-boundary","collision-padding","arrow-padding","prioritize-position","sticky","hide-when-detached"])]),_:3},8,["current-tab-stop-id","dir","loop"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),T2=he({__name:"MenuItemImpl",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(t){const e=t,n=QI(),r=fe(!1);async function s(o){if(!o.defaultPrevented&&Ld(o)){if(e.disabled)n.onItemLeave(o);else if(!n.onItemEnter(o)){const a=o.currentTarget;a==null||a.focus()}}}async function i(o){await Yt(),!o.defaultPrevented&&Ld(o)&&n.onItemLeave(o)}return(o,a)=>(W(),Y(P(pt),{role:"menuitem",tabindex:"-1",as:o.as,"as-child":o.asChild,"data-radix-vue-collection-item":"","aria-disabled":o.disabled||void 0,"data-disabled":o.disabled?"":void 0,"data-highlighted":r.value?"":void 0,onPointermove:s,onPointerleave:i,onFocus:a[0]||(a[0]=async l=>{await Yt(),!(l.defaultPrevented||o.disabled)&&(r.value=!0)}),onBlur:a[1]||(a[1]=async l=>{await Yt(),!l.defaultPrevented&&(r.value=!1)})},{default:B(()=>[X(o.$slots,"default")]),_:3},8,["as","as-child","aria-disabled","data-disabled","data-highlighted"]))}}),I2=he({__name:"MenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:e}){const n=t,r=e,{forwardRef:s,currentElement:i}=xe(),o=Jp(),a=QI(),l=fe(!1);async function u(){const h=i.value;if(!n.disabled&&h){const d=new CustomEvent(kU,{bubbles:!0,cancelable:!0});r("select",d),await Yt(),d.defaultPrevented?l.value=!1:o.onClose()}}return(h,d)=>(W(),Y(T2,Pe(n,{ref:P(s),onClick:u,onPointerdown:d[0]||(d[0]=()=>{l.value=!0}),onPointerup:d[1]||(d[1]=async p=>{var g;await Yt(),!p.defaultPrevented&&(l.value||(g=p.currentTarget)==null||g.click())}),onKeydown:d[2]||(d[2]=async p=>{const g=P(a).searchRef.value!=="";h.disabled||g&&p.key===" "||P(Md).includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})}),{default:B(()=>[X(h.$slots,"default")]),_:3},16))}}),A2=he({__name:"MenuRootContentModal",props:{loop:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=Fr(n,r),i=Ou(),{forwardRef:o,currentElement:a}=xe();return UI(a),(l,u)=>(W(),Y(YI,Pe(P(s),{ref:P(o),"trap-focus":P(i).open.value,"disable-outside-pointer-events":P(i).open.value,"disable-outside-scroll":!0,onDismiss:u[0]||(u[0]=h=>P(i).onOpenChange(!1)),onFocusOutside:u[1]||(u[1]=Hh(h=>r("focusOutside",h),["prevent"]))}),{default:B(()=>[X(l.$slots,"default")]),_:3},16,["trap-focus","disable-outside-pointer-events"]))}}),C2=he({__name:"MenuRootContentNonModal",props:{loop:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=Fr(t,e),r=Ou();return(s,i)=>(W(),Y(YI,Pe(P(n),{"trap-focus":!1,"disable-outside-pointer-events":!1,"disable-outside-scroll":!1,onDismiss:i[0]||(i[0]=o=>P(r).onOpenChange(!1))}),{default:B(()=>[X(s.$slots,"default")]),_:3},16))}}),R2=he({__name:"MenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=Fr(t,e),r=Ou(),s=Jp();return(i,o)=>(W(),Y(P(Qp),{present:i.forceMount||P(r).open.value},{default:B(()=>[P(s).modal.value?(W(),Y(A2,vt(Pe({key:0},{...i.$attrs,...P(n)})),{default:B(()=>[X(i.$slots,"default")]),_:3},16)):(W(),Y(C2,vt(Pe({key:1},{...i.$attrs,...P(n)})),{default:B(()=>[X(i.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),S2=he({__name:"MenuLabel",props:{asChild:{type:Boolean},as:{default:"div"}},setup(t){const e=t;return(n,r)=>(W(),Y(P(pt),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),P2=he({__name:"MenuPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=t;return(n,r)=>(W(),Y(P(Yp),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),x2=he({__name:"MenuSeparator",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return(n,r)=>(W(),Y(P(pt),Pe(e,{role:"separator","aria-orientation":"horizontal"}),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),[XI,k2]=Rn("DropdownMenuRoot"),O2=he({__name:"DropdownMenuRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean,default:void 0},dir:{},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(t,{emit:e}){const n=t,r=e;xe();const s=xu(n,"open",r,{defaultValue:n.defaultOpen,passive:n.open===void 0}),i=fe(),{modal:o,dir:a}=ri(n),l=Kp(a);return k2({open:s,onOpenChange:u=>{s.value=u},onOpenToggle:()=>{s.value=!s.value},triggerId:"",triggerElement:i,contentId:"",modal:o,dir:l}),(u,h)=>(W(),Y(P(g2),{open:P(s),"onUpdate:open":h[0]||(h[0]=d=>kt(s)?s.value=d:null),dir:P(l),modal:P(o)},{default:B(()=>[X(u.$slots,"default",{open:P(s)})]),_:3},8,["open","dir","modal"]))}}),D2=he({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t,n=XI(),{forwardRef:r,currentElement:s}=xe();return ar(()=>{n.triggerElement=s}),n.triggerId||(n.triggerId=Da(void 0,"radix-vue-dropdown-menu-trigger")),(i,o)=>(W(),Y(P(f2),{"as-child":""},{default:B(()=>[ee(P(pt),{id:P(n).triggerId,ref:P(r),type:i.as==="button"?"button":void 0,"as-child":e.asChild,as:i.as,"aria-haspopup":"menu","aria-expanded":P(n).open.value,"aria-controls":P(n).open.value?P(n).contentId:void 0,"data-disabled":i.disabled?"":void 0,disabled:i.disabled,"data-state":P(n).open.value?"open":"closed",onClick:o[0]||(o[0]=async a=>{var l;!i.disabled&&a.button===0&&a.ctrlKey===!1&&((l=P(n))==null||l.onOpenToggle(),await Yt(),P(n).open.value&&a.preventDefault())}),onKeydown:o[1]||(o[1]=tR(a=>{i.disabled||(["Enter"," "].includes(a.key)&&P(n).onOpenToggle(),a.key==="ArrowDown"&&P(n).onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())},["enter","space","arrow-down"]))},{default:B(()=>[X(i.$slots,"default")]),_:3},8,["id","type","as-child","as","aria-expanded","aria-controls","data-disabled","disabled","data-state"])]),_:3}))}}),N2=he({__name:"DropdownMenuPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=t;return(n,r)=>(W(),Y(P(P2),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),M2=he({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:e}){const n=Fr(t,e);xe();const r=XI(),s=fe(!1);function i(o){o.defaultPrevented||(s.value||setTimeout(()=>{var a;(a=r.triggerElement.value)==null||a.focus()},0),s.value=!1,o.preventDefault())}return r.contentId||(r.contentId=Da(void 0,"radix-vue-dropdown-menu-content")),(o,a)=>{var l;return W(),Y(P(R2),Pe(P(n),{id:P(r).contentId,"aria-labelledby":(l=P(r))==null?void 0:l.triggerId,style:{"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"},onCloseAutoFocus:i,onInteractOutside:a[0]||(a[0]=u=>{var h;if(u.defaultPrevented)return;const d=u.detail.originalEvent,p=d.button===0&&d.ctrlKey===!0,g=d.button===2||p;(!P(r).modal.value||g)&&(s.value=!0),(h=P(r).triggerElement.value)!=null&&h.contains(u.target)&&u.preventDefault()})}),{default:B(()=>[X(o.$slots,"default")]),_:3},16,["id","aria-labelledby","style"])}}}),L2=he({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:e}){const n=t,r=go(e);return xe(),(s,i)=>(W(),Y(P(I2),vt(It({...n,...P(r)})),{default:B(()=>[X(s.$slots,"default")]),_:3},16))}}),V2=he({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(x2),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),F2=he({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(S2),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}}),U2=he({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{default:"label"}},setup(t){const e=t;return xe(),(n,r)=>(W(),Y(P(pt),Pe(e,{onMousedown:r[0]||(r[0]=s=>{!s.defaultPrevented&&s.detail>1&&s.preventDefault()})}),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}});function B2(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}B2();const[JI,B4]=Rn("ToastProvider"),$2="toast.viewportPause",j2="toast.viewportResume",av=he({__name:"FocusProxy",emits:["focusFromOutsideViewport"],setup(t,{emit:e}){const n=e,r=JI();return(s,i)=>(W(),Y(P(d2),{"aria-hidden":"",tabindex:"0",style:{position:"fixed"},onFocus:i[0]||(i[0]=o=>{var a;const l=o.relatedTarget;!((a=P(r).viewport.value)!=null&&a.contains(l))&&n("focusFromOutsideViewport")})},{default:B(()=>[X(s.$slots,"default")]),_:3}))}}),q2=he({inheritAttrs:!1,__name:"ToastViewport",props:{hotkey:{default:()=>["F8"]},label:{type:[String,Function],default:"Notifications ({hotkey})"},asChild:{type:Boolean},as:{default:"ol"}},setup(t){const e=t,{hotkey:n,label:r}=ri(e),{forwardRef:s,currentElement:i}=xe(),{createCollection:o}=Gp(),a=o(i),l=JI(),u=ue(()=>l.toastCount.value>0),h=fe(),d=fe(),p=ue(()=>n.value.join("+").replace(/Key/g,"").replace(/Digit/g,""));MI(n.value,()=>{i.value.focus()}),ar(()=>{l.onViewportChange(i.value)}),An(_=>{const E=i.value;if(u.value&&E){const T=()=>{if(!l.isClosePausedRef.value){const j=new CustomEvent($2);E.dispatchEvent(j),l.isClosePausedRef.value=!0}},k=()=>{if(l.isClosePausedRef.value){const j=new CustomEvent(j2);E.dispatchEvent(j),l.isClosePausedRef.value=!1}},D=j=>{!E.contains(j.relatedTarget)&&k()},O=()=>{E.contains(document.activeElement)||k()},V=j=>{var F,I,w;const A=j.altKey||j.ctrlKey||j.metaKey;if(j.key==="Tab"&&!A){const v=document.activeElement,R=j.shiftKey;if(j.target===E&&R){(F=h.value)==null||F.focus();return}const S=g({tabbingDirection:R?"backwards":"forwards"}),C=S.findIndex(ye=>ye===v);Xl(S.slice(C+1))?j.preventDefault():R?(I=h.value)==null||I.focus():(w=d.value)==null||w.focus()}};E.addEventListener("focusin",T),E.addEventListener("focusout",D),E.addEventListener("pointermove",T),E.addEventListener("pointerleave",O),E.addEventListener("keydown",V),window.addEventListener("blur",T),window.addEventListener("focus",k),_(()=>{E.removeEventListener("focusin",T),E.removeEventListener("focusout",D),E.removeEventListener("pointermove",T),E.removeEventListener("pointerleave",O),E.removeEventListener("keydown",V),window.removeEventListener("blur",T),window.removeEventListener("focus",k)})}});function g({tabbingDirection:_}){const E=a.value.map(T=>{const k=[T,...Xp(T)];return _==="forwards"?k:k.reverse()});return(_==="forwards"?E.reverse():E).flat()}return(_,E)=>(W(),Y(P(IU),{role:"region","aria-label":typeof P(r)=="string"?P(r).replace("{hotkey}",p.value):P(r)(p.value),tabindex:"-1",style:ws({pointerEvents:u.value?void 0:"none"})},{default:B(()=>[u.value?(W(),Y(av,{key:0,ref:T=>{h.value=P(vs)(T)},onFocusFromOutsideViewport:E[0]||(E[0]=()=>{const T=g({tabbingDirection:"forwards"});P(Xl)(T)})},null,512)):mn("",!0),ee(P(pt),Pe({ref:P(s),tabindex:"-1",as:_.as,"as-child":_.asChild},_.$attrs),{default:B(()=>[X(_.$slots,"default")]),_:3},16,["as","as-child"]),u.value?(W(),Y(av,{key:1,ref:T=>{d.value=P(vs)(T)},onFocusFromOutsideViewport:E[1]||(E[1]=()=>{const T=g({tabbingDirection:"backwards"});P(Xl)(T)})},null,512)):mn("",!0)]),_:3},8,["aria-label","style"]))}});function ZI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=ZI(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function W2(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=ZI(t))&&(r&&(r+=" "),r+=e);return r}const Zp="-";function H2(t){const e=G2(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;function s(o){const a=o.split(Zp);return a[0]===""&&a.length!==1&&a.shift(),e0(a,e)||z2(o)}function i(o,a){const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}return{getClassGroupId:s,getConflictingClassGroupIds:i}}function e0(t,e){var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?e0(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Zp);return(o=e.validators.find(({validator:a})=>a(i)))==null?void 0:o.classGroupId}const lv=/^\[(.+)\]$/;function z2(t){if(lv.test(t)){const e=lv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function G2(t){const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return Q2(Object.entries(t.classGroups),n).forEach(([i,o])=>{Fd(o,r,i,e)}),r}function Fd(t,e,n,r){t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:cv(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(K2(s)){Fd(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{Fd(o,cv(e,i),n,r)})})}function cv(t,e){let n=t;return e.split(Zp).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function K2(t){return t.isThemeGetter}function Q2(t,e){return e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,a])=>[e+o,a])):i);return[n,s]}):t}function Y2(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;function s(i,o){n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)}return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}}const t0="!";function X2(t){const e=t.separator,n=e.length===1,r=e[0],s=e.length;return function(o){const a=[];let l=0,u=0,h;for(let E=0;E<o.length;E++){let T=o[E];if(l===0){if(T===r&&(n||o.slice(E,E+s)===e)){a.push(o.slice(u,E)),u=E+s;continue}if(T==="/"){h=E;continue}}T==="["?l++:T==="]"&&l--}const d=a.length===0?o:o.substring(u),p=d.startsWith(t0),g=p?d.substring(1):d,_=h&&h>u?h-u:void 0;return{modifiers:a,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:_}}}function J2(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e}function Z2(t){return{cache:Y2(t.cacheSize),splitModifiers:X2(t),...H2(t)}}const eB=/\s+/;function tB(t,e){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=new Set;return t.trim().split(eB).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:u,maybePostfixModifierPosition:h}=n(o);let d=r(h?u.substring(0,h):u),p=!!h;if(!d){if(!h)return{isTailwindClass:!1,originalClassName:o};if(d=r(u),!d)return{isTailwindClass:!1,originalClassName:o};p=!1}const g=J2(a).join(":");return{isTailwindClass:!0,modifierId:l?g+t0:g,classGroupId:d,originalClassName:o,hasPostfixModifier:p}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:u}=o,h=a+l;return i.has(h)?!1:(i.add(h),s(l,u).forEach(d=>i.add(a+d)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function nB(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=n0(e))&&(r&&(r+=" "),r+=n);return r}function n0(t){if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=n0(t[r]))&&(n&&(n+=" "),n+=e);return n}function rB(t,...e){let n,r,s,i=o;function o(l){const u=e.reduce((h,d)=>d(h),t());return n=Z2(u),r=n.cache.get,s=n.cache.set,i=a,a(l)}function a(l){const u=r(l);if(u)return u;const h=tB(l,n);return s(l,h),h}return function(){return i(nB.apply(null,arguments))}}function et(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const r0=/^\[(?:([a-z-]+):)?(.+)\]$/i,sB=/^\d+\/\d+$/,iB=new Set(["px","full","screen"]),oB=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,aB=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lB=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,cB=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,uB=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function pr(t){return Fs(t)||iB.has(t)||sB.test(t)}function Gr(t){return _o(t,"length",yB)}function Fs(t){return!!t&&!Number.isNaN(Number(t))}function Nl(t){return _o(t,"number",Fs)}function Uo(t){return!!t&&Number.isInteger(Number(t))}function hB(t){return t.endsWith("%")&&Fs(t.slice(0,-1))}function Se(t){return r0.test(t)}function Kr(t){return oB.test(t)}const dB=new Set(["length","size","percentage"]);function fB(t){return _o(t,dB,s0)}function pB(t){return _o(t,"position",s0)}const mB=new Set(["image","url"]);function gB(t){return _o(t,mB,wB)}function _B(t){return _o(t,"",vB)}function Bo(){return!0}function _o(t,e,n){const r=r0.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1}function yB(t){return aB.test(t)&&!lB.test(t)}function s0(){return!1}function vB(t){return cB.test(t)}function wB(t){return uB.test(t)}function EB(){const t=et("colors"),e=et("spacing"),n=et("blur"),r=et("brightness"),s=et("borderColor"),i=et("borderRadius"),o=et("borderSpacing"),a=et("borderWidth"),l=et("contrast"),u=et("grayscale"),h=et("hueRotate"),d=et("invert"),p=et("gap"),g=et("gradientColorStops"),_=et("gradientColorStopPositions"),E=et("inset"),T=et("margin"),k=et("opacity"),D=et("padding"),O=et("saturate"),V=et("scale"),j=et("sepia"),F=et("skew"),I=et("space"),w=et("translate"),A=()=>["auto","contain","none"],v=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",Se,e],S=()=>[Se,e],C=()=>["",pr,Gr],ye=()=>["auto",Fs,Se],$e=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Re=()=>["solid","dashed","dotted","double","none"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ce=()=>["start","end","center","between","around","evenly","stretch"],Et=()=>["","0",Se],on=()=>["auto","avoid","all","avoid-page","page","left","right","column"],At=()=>[Fs,Nl],ze=()=>[Fs,Se];return{cacheSize:500,separator:":",theme:{colors:[Bo],spacing:[pr,Gr],blur:["none","",Kr,Se],brightness:At(),borderColor:[t],borderRadius:["none","","full",Kr,Se],borderSpacing:S(),borderWidth:C(),contrast:At(),grayscale:Et(),hueRotate:ze(),invert:Et(),gap:S(),gradientColorStops:[t],gradientColorStopPositions:[hB,Gr],inset:R(),margin:R(),opacity:At(),padding:S(),saturate:At(),scale:At(),sepia:Et(),skew:ze(),space:S(),translate:S()},classGroups:{aspect:[{aspect:["auto","square","video",Se]}],container:["container"],columns:[{columns:[Kr]}],"break-after":[{"break-after":on()}],"break-before":[{"break-before":on()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$e(),Se]}],overflow:[{overflow:v()}],"overflow-x":[{"overflow-x":v()}],"overflow-y":[{"overflow-y":v()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Uo,Se]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Se]}],grow:[{grow:Et()}],shrink:[{shrink:Et()}],order:[{order:["first","last","none",Uo,Se]}],"grid-cols":[{"grid-cols":[Bo]}],"col-start-end":[{col:["auto",{span:["full",Uo,Se]},Se]}],"col-start":[{"col-start":ye()}],"col-end":[{"col-end":ye()}],"grid-rows":[{"grid-rows":[Bo]}],"row-start-end":[{row:["auto",{span:[Uo,Se]},Se]}],"row-start":[{"row-start":ye()}],"row-end":[{"row-end":ye()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Se]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Ce()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Ce(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Ce(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[D]}],px:[{px:[D]}],py:[{py:[D]}],ps:[{ps:[D]}],pe:[{pe:[D]}],pt:[{pt:[D]}],pr:[{pr:[D]}],pb:[{pb:[D]}],pl:[{pl:[D]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Se,e]}],"min-w":[{"min-w":[Se,e,"min","max","fit"]}],"max-w":[{"max-w":[Se,e,"none","full","min","max","fit","prose",{screen:[Kr]},Kr]}],h:[{h:[Se,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Se,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Se,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Se,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Kr,Gr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Nl]}],"font-family":[{font:[Bo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Se]}],"line-clamp":[{"line-clamp":["none",Fs,Nl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",pr,Se]}],"list-image":[{"list-image":["none",Se]}],"list-style-type":[{list:["none","disc","decimal",Se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Re(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",pr,Gr]}],"underline-offset":[{"underline-offset":["auto",pr,Se]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:S()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$e(),pB]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fB]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},gB]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...Re(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:Re()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Re()]}],"outline-offset":[{"outline-offset":[pr,Se]}],"outline-w":[{outline:[pr,Gr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:C()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[pr,Gr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Kr,_B]}],"shadow-color":[{shadow:[Bo]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...ve(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ve()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Kr,Se]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[d]}],saturate:[{saturate:[O]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Se]}],duration:[{duration:ze()}],ease:[{ease:["linear","in","out","in-out",Se]}],delay:[{delay:ze()}],animate:[{animate:["none","spin","ping","pulse","bounce",Se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[V]}],"scale-x":[{"scale-x":[V]}],"scale-y":[{"scale-y":[V]}],rotate:[{rotate:[Uo,Se]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Se]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":S()}],"scroll-mx":[{"scroll-mx":S()}],"scroll-my":[{"scroll-my":S()}],"scroll-ms":[{"scroll-ms":S()}],"scroll-me":[{"scroll-me":S()}],"scroll-mt":[{"scroll-mt":S()}],"scroll-mr":[{"scroll-mr":S()}],"scroll-mb":[{"scroll-mb":S()}],"scroll-ml":[{"scroll-ml":S()}],"scroll-p":[{"scroll-p":S()}],"scroll-px":[{"scroll-px":S()}],"scroll-py":[{"scroll-py":S()}],"scroll-ps":[{"scroll-ps":S()}],"scroll-pe":[{"scroll-pe":S()}],"scroll-pt":[{"scroll-pt":S()}],"scroll-pr":[{"scroll-pr":S()}],"scroll-pb":[{"scroll-pb":S()}],"scroll-pl":[{"scroll-pl":S()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[pr,Gr,Nl]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const bB=rB(EB);function wt(...t){return bB(W2(t))}const TB={__name:"ToastViewport",props:{class:{type:String,default:""}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(q2),Pe(n.value,{class:`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${e.class}`}),null,16,["class"]))}};/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ml={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AB=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:r,iconNode:s,name:i,class:o,...a},{slots:l})=>br("svg",{...Ml,width:t||Ml.width,height:t||Ml.height,stroke:r||Ml.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${IB(i??"icon")}`],...a},[...s.map(u=>br(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=(t,e)=>(n,{slots:r})=>br(AB,{...n,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CB=Za("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=Za("HomeIcon",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=Za("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SB=Za("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=Za("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function o0(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o0(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function xB(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=o0(t))&&(r&&(r+=" "),r+=e);return r}const uv=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,hv=xB,a0=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return hv(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=e,o=Object.keys(s).map(u=>{const h=n==null?void 0:n[u],d=i==null?void 0:i[u];if(h===null)return null;const p=uv(h)||uv(d);return s[u][p]}),a=n&&Object.entries(n).reduce((u,h)=>{let[d,p]=h;return p===void 0||(u[d]=p),u},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:d,className:p,...g}=h;return Object.entries(g).every(_=>{let[E,T]=_;return Array.isArray(T)?T.includes({...i,...a}[E]):{...i,...a}[E]===T})?[...u,d,p]:u},[]);return hv(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},Du={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const e=t;return(n,r)=>(W(),Y(P(pt),{as:t.as,"as-child":t.asChild,class:sn(P(wt)(P(em)({variant:t.variant,size:t.size}),e.class))},{default:B(()=>[X(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}},em=a0("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),kB={components:{X:PB,Button:Du},props:{index:{type:Number,required:!0},class:{type:String,default:""}},methods:{close(){const t=this.$store.state.toasts;this.$store.commit("setToasts",t.filter((e,n)=>n!==this.index))}}};function OB(t,e,n,r,s,i){const o=we("X"),a=we("Button");return W(),Y(a,{variant:"icon",onClick:i.close,class:"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600"},{default:B(()=>[ee(o,{class:"h-4 w-4"})]),_:1},8,["onClick"])}const DB=Jt(kB,[["render",OB]]),NB={props:{class:{type:String,default:""}}},MB={class:"text-sm font-semibold"};function LB(t,e,n,r,s,i){return W(),Je("p",MB,[X(t.$slots,"default")])}const VB=Jt(NB,[["render",LB]]),FB={props:{class:{type:String,default:""}}},UB={class:"text-sm opacity-90"};function BB(t,e,n,r,s,i){return W(),Je("p",UB,[X(t.$slots,"default")])}const $B=Jt(FB,[["render",BB]]);fe({toasts:[]});const jB={components:{Toast:qV,ToastClose:DB,ToastDescription:$B,ToastTitle:VB,ToastViewport:TB},computed:{toasts(){return this.$store.state.toasts}}},qB={key:0,class:"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] gap-2"},WB={class:"grid gap-1"};function HB(t,e,n,r,s,i){const o=we("ToastTitle"),a=we("ToastDescription"),l=we("ToastClose"),u=we("Toast");return i.toasts.length>0?(W(),Je("div",qB,[(W(!0),Je(nn,null,QA(i.toasts,(h,d)=>(W(),Y(u,{key:d},{default:B(()=>[yt("div",WB,[h.title?(W(),Y(o,{key:0},{default:B(()=>[dt(Mn(h.title),1)]),_:2},1024)):mn("",!0),h.description?(W(),Y(a,{key:1},{default:B(()=>[dt(Mn(h.description),1)]),_:2},1024)):mn("",!0),ee(l,{index:d},null,8,["index"])])]),_:2},1024))),128))])):mn("",!0)}const zB=Jt(jB,[["render",HB]]),GB={components:{RouterView:hI,Toaster:zB},computed:{account(){return this.$store.state.account}},name:"App",created(){AP(Pp,async t=>{t&&!this.account?await bI({id:t.uid})?(this.$store.commit("setUser",t),TI({id:t.uid}),this.loading=!1):this.loading=!1:(this.$route.path.includes("match")&&(this.$store.commit("setRedirectMatch",this.$route.params.id),this.$router.push({name:"home"})),this.$route.path.includes("game")&&this.$router.push({name:"home"}),this.loading=!1)})}};function KB(t,e,n,r,s,i){const o=we("RouterView"),a=we("Toaster");return W(),Je("div",null,[ee(o),ee(a)])}const QB=Jt(GB,[["render",KB]]),YB="/assets/bg-1-CRTipGjt.jpg",tm={__name:"Card",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("div",{class:sn(P(wt)("rounded-lg border bg-card text-card-foreground shadow-sm",e.class))},[X(n.$slots,"default")],2))}},l0={__name:"CardHeader",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("div",{class:sn(P(wt)("flex flex-col gap-y-1.5 p-6",e.class))},[X(n.$slots,"default")],2))}},c0={__name:"CardTitle",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("h3",{class:sn(P(wt)("text-2xl font-semibold leading-none tracking-tight",e.class))},[X(n.$slots,"default")],2))}},XB={__name:"CardDescription",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("p",{class:sn(P(wt)("text-sm text-muted-foreground",e.class))},[X(n.$slots,"default")],2))}},nm={__name:"CardContent",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("div",{class:sn(P(wt)("p-6 pt-0",e.class))},[X(n.$slots,"default")],2))}};typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const JB=t=>typeof t<"u";function ZB(t){return JSON.parse(JSON.stringify(t))}function e$(t,e,n,r={}){var s,i,o;const{clone:a=!1,passive:l=!1,eventName:u,deep:h=!1,defaultValue:d,shouldEmit:p}=r,g=Ts(),_=n||(g==null?void 0:g.emit)||((s=g==null?void 0:g.$emit)==null?void 0:s.bind(g))||((o=(i=g==null?void 0:g.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(g==null?void 0:g.proxy));let E=u;E=E||`update:${e.toString()}`;const T=O=>a?typeof a=="function"?a(O):ZB(O):O,k=()=>JB(t[e])?T(t[e]):d,D=O=>{p?p(O)&&_(E,O):_(E,O)};if(l){const O=k(),V=fe(O);let j=!1;return lt(()=>t[e],F=>{j||(j=!0,V.value=T(F),Yt(()=>j=!1))}),lt(V,F=>{!j&&(F!==t[e]||h)&&D(F)},{deep:h}),V}else return ue({get(){return k()},set(O){D(O)}})}const u0={__name:"Input",props:{defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,s=e$(n,"modelValue",e,{passive:!0,defaultValue:n.defaultValue});return(i,o)=>BA((W(),Je("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>kt(s)?s.value=a:null),class:sn(P(wt)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n.class))},null,2)),[[XC,P(s)]])}},h0={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(U2),Pe(n.value,{class:P(wt)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["class"]))}},t$="/assets/google-H-QI_8Ti.png",n$={components:{Button:Du,Input:u0,Label:h0,LoaderCircle:i0},data(){return{email:"",pwd:"",loading:!1,error:!1,message:""}},computed:{redirectMatch(){return this.$store.state.redirectMatch}},methods:{doLoginGoogle(){const t=new mr;zP(Pp,t).then(async e=>{if(await bI({id:e.user.uid}))await TI({id:e.user.uid});else{const r={name:e.user.displayName,email:e.user.email,owner:e.user.uid};await UV({data:r})}this.redirectMatch?this.$router.push({name:"match",params:{id:this.redirectMatch}}):this.$router.push({name:"lobby"})})}}},r$={class:"grid gap-6"},s$=yt("p",null,"Get in and destroy your friends",-1),i$=yt("span",{class:"flex justify-center items-center gap-4"},[yt("img",{src:t$,class:"w-[24px]"}),dt(" Get in using google ")],-1);function o$(t,e,n,r,s,i){const o=we("Button");return W(),Je("div",r$,[s$,ee(o,{onClick:i.doLoginGoogle,variant:"outline"},{default:B(()=>[i$]),_:1},8,["onClick"])])}const a$=Jt(n$,[["render",o$]]),l$=yt("img",{class:"object-cover object-center fixed h-[100vh] w-[100vw]",src:YB},null,-1),c$={class:"min-h-[100vh] flex items-center justify-center relative z-30"},u$={__name:"home",setup(t){return(e,n)=>(W(),Je(nn,null,[l$,yt("div",c$,[ee(P(tm),null,{default:B(()=>[ee(P(l0),null,{default:B(()=>[ee(P(c0),null,{default:B(()=>[dt("Elemental Cards")]),_:1}),ee(P(XB),null,{default:B(()=>[dt("This is a card game")]),_:1})]),_:1}),ee(P(nm),null,{default:B(()=>[ee(a$)]),_:1})]),_:1})])],64))}},h$="/assets/my-account-BaUPS0Vm.jpg",d$={},f$={class:"bg-stone-200 flex items-center h-36"},p$=yt("img",{src:h$,class:"h-36 w-full object-cover object-center"},null,-1),m$=[p$];function g$(t,e){return W(),Je("div",f$,m$)}const _$=Jt(d$,[["render",g$]]),y$={components:{Input:u0,Label:h0,Button:Du,Card:tm,CardHeader:l0,CardTitle:c0,CardContent:nm},props:{account:{type:Object}},data(){return{name:this.account.data().name,email:this.account.data().email}},methods:{save(){EI({id:this.account.id,data:{...this.account.data(),name:this.name}})}}},v$={key:0,class:"mx-auto max-w-md"},w$={class:"flex flex-col gap-2"},E$={class:"flex flex-col gap-2"};function b$(t,e,n,r,s,i){const o=we("CardTitle"),a=we("CardHeader"),l=we("Label"),u=we("Input"),h=we("Button"),d=we("CardContent"),p=we("Card");return n.account?(W(),Je("div",v$,[ee(p,null,{default:B(()=>[ee(a,null,{default:B(()=>[ee(o,null,{default:B(()=>[dt("My profile")]),_:1})]),_:1}),ee(d,{class:"flex flex-col gap-8"},{default:B(()=>[yt("div",w$,[ee(l,null,{default:B(()=>[dt("My name")]),_:1}),ee(u,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=g=>s.name=g)},null,8,["modelValue"])]),yt("div",E$,[ee(l,null,{default:B(()=>[dt("My email")]),_:1}),ee(u,{modelValue:s.email,"onUpdate:modelValue":e[1]||(e[1]=g=>s.email=g),disabled:""},null,8,["modelValue"])]),yt("div",null,[ee(h,{onClick:i.save},{default:B(()=>[dt("Save")]),_:1},8,["onClick"])])]),_:1})]),_:1})])):mn("",!0)}const T$=Jt(y$,[["render",b$]]),I$={components:{Button:Du,Card:tm,CardContent:nm},props:{account:{type:Object}},methods:{doArchiveAccount(){EI({id:this.account.id,data:{...this.account.data(),archived:!0}}),Jw(auth).then(()=>{this.$store.commit("setAccount",null),this.$router.push({name:"home"})})},archiveAccount(){this.$store.commit("setDialog",{title:"Are you sure?",description:"You can activate your account later.",action:()=>this.doArchiveAccount()})}}},A$={class:"mx-auto max-w-md mt-4"};function C$(t,e,n,r,s,i){const o=we("Button");return W(),Je("div",A$,[ee(o,{onClick:i.archiveAccount,variant:"outline",size:"sm"},{default:B(()=>[dt("I want to delete my account")]),_:1},8,["onClick"])])}const R$=Jt(I$,[["render",C$]]),S$={},P$={class:"flex items-center text-lg font-medium gap-2 text-white"};function x$(t,e){return W(),Je("div",P$," Card Game ")}const k$=Jt(S$,[["render",x$]]),O$={__name:"Avatar",props:{class:{type:null,required:!1},size:{type:null,required:!1,default:"sm"},shape:{type:null,required:!1,default:"circle"}},setup(t){const e=t;return(n,r)=>(W(),Y(P(r2),{class:sn(P(wt)(P(N$)({size:t.size,shape:t.shape}),e.class))},{default:B(()=>[X(n.$slots,"default")]),_:3},8,["class"]))}},D$={__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Y(P(s2),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}},N$=a0("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),M$={props:{id:{type:String,required:!0},showName:{type:Boolean,default:!1},className:{type:String,required:!1}},components:{Avatar:O$,AvatarFallback:D$,LoaderCircle:i0},computed:{initials(){if(!this.account||!this.account.data().name)return"";const t=this.account.data().name.split(" ");return t.length===1?t[0].charAt(0):t[0].charAt(0)+t[t.length-1].charAt(0)}},mounted(){this.getData()},data(){return{account:null}},methods:{async getData(){this.account=await Mc({id:this.id,setStore:!1})}}},L$={class:"flex items-center gap-2 justify-start"},V$={key:0,class:"flex flex-col justify-center items-start"},F$={class:"text-xs"};function U$(t,e,n,r,s,i){const o=we("LoaderCircle"),a=we("AvatarFallback"),l=we("Avatar");return W(),Je("div",{class:sn(`flex justify-between gap-2 ${n.className}`)},[yt("div",L$,[ee(l,{class:"uppercase flex items-center justify-center"},{default:B(()=>[ee(a,null,{default:B(()=>[s.account?mn("",!0):(W(),Y(o,{key:0,class:"size-4 animate-spin"})),dt(" "+Mn(i.initials),1)]),_:1})]),_:1}),n.showName&&s.account?(W(),Je("div",V$,[dt(Mn(s.account.data().name)+" ",1),yt("span",F$,Mn(s.account.data().email),1)])):mn("",!0)]),X(t.$slots,"default",{account:s.account})],2)}const B$=Jt(M$,[["render",U$]]),$$={__name:"DropdownMenu",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1},dir:{type:String,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(t,{emit:e}){const s=Fr(t,e);return(i,o)=>(W(),Y(P(O2),vt(It(P(s))),{default:B(()=>[X(i.$slots,"default")]),_:3},16))}},j$={__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const n=ku(t);return(r,s)=>(W(),Y(P(D2),Pe({class:"outline-none"},P(n)),{default:B(()=>[X(r.$slots,"default")]),_:3},16))}},q$={__name:"DropdownMenuContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1,default:4},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},updatePositionStrategy:{type:String,required:!1},prioritizePosition:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=ue(()=>{const{class:o,...a}=n;return a}),i=Fr(s,r);return(o,a)=>(W(),Y(P(N2),null,{default:B(()=>[ee(P(M2),Pe(P(i),{class:P(wt)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n.class)}),{default:B(()=>[X(o.$slots,"default")]),_:3},16,["class"])]),_:3}))}},W$={__name:"DropdownMenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1},inset:{type:Boolean,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:s,...i}=e;return i}),r=ku(n);return(s,i)=>(W(),Y(P(L2),Pe(P(r),{class:P(wt)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t.inset&&"pl-8",e.class)}),{default:B(()=>[X(s.$slots,"default")]),_:3},16,["class"]))}},H$={__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(V2),Pe(n.value,{class:P(wt)("-mx-1 my-1 h-px bg-muted",e.class)}),null,16,["class"]))}},z$={__name:"DropdownMenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1},inset:{type:Boolean,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:s,...i}=e;return i}),r=ku(n);return(s,i)=>(W(),Y(P(F2),Pe(P(r),{class:P(wt)("px-2 py-1.5 text-sm font-semibold",t.inset&&"pl-8",e.class)}),{default:B(()=>[X(s.$slots,"default")]),_:3},16,["class"]))}},G$={components:{AccountAvatar:B$,LogOut:SB,DropdownMenu:$$,DropdownMenuContent:q$,DropdownMenuSeparator:H$,DropdownMenuItem:W$,DropdownMenuTrigger:j$,DropdownMenuLabel:z$},computed:{account(){return this.$store.state.account}},methods:{logOut(){Jw(Pp).then(()=>{this.$store.commit("setAccount",null),this.$router.push({name:"home"})})}}};function K$(t,e,n,r,s,i){const o=we("AccountAvatar"),a=we("DropdownMenuTrigger"),l=we("DropdownMenuLabel"),u=we("DropdownMenuSeparator"),h=we("router-link"),d=we("DropdownMenuItem"),p=we("LogOut"),g=we("DropdownMenuContent"),_=we("DropdownMenu");return W(),Y(_,null,{default:B(()=>[ee(a,null,{default:B(()=>{var E;return[ee(o,{id:(E=i.account)==null?void 0:E.id},null,8,["id"])]}),_:1}),ee(g,{align:"end"},{default:B(()=>[ee(l,null,{default:B(()=>[dt(Mn(i.account.data().name),1)]),_:1}),ee(u),ee(d,null,{default:B(()=>[ee(h,{to:{name:"my-account"}},{default:B(()=>[dt(" My account ")]),_:1})]),_:1}),ee(u),ee(d,{onClick:i.logOut,class:"cursor-pointer"},{default:B(()=>[ee(p,{size:"16",class:"mr-2"}),dt(" Sair ")]),_:1},8,["onClick"])]),_:1})]),_:1})}const Q$=Jt(G$,[["render",K$]]),Y$={computed:{account(){return this.$store.state.account},exp(){var t;return((t=this.account)==null?void 0:t.data().exp)??0},win(){var t;return((t=this.account)==null?void 0:t.data().win)??0},matches(){var t;return((t=this.account)==null?void 0:t.data().matches)??0}}},X$={class:"border border-gray-500 bg-gray-600 text-gray-200 rounded px-2 py-1 text-xs"};function J$(t,e,n,r,s,i){return W(),Je("span",X$,Mn(i.win)+"/"+Mn(i.matches)+" - "+Mn(i.exp)+" exp ",1)}const Z$=Jt(Y$,[["render",J$]]),e4={class:"flex justify-between items-center bg-stone-900 p-2"},t4={class:"flex gap-4 items-center"},n4={__name:"nav-bar",setup(t){return(e,n)=>{const r=we("router-link");return W(),Je("div",e4,[ee(r,{to:{name:"lobby"}},{default:B(()=>[ee(k$)]),_:1}),yt("div",t4,[ee(Z$),ee(Q$)])])}}},r4={__name:"AlertDialog",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1}},emits:["update:open"],setup(t,{emit:e}){const s=Fr(t,e);return(i,o)=>(W(),Y(P(WU),vt(It(P(s))),{default:B(()=>[X(i.$slots,"default")]),_:3},16))}},s4={__name:"AlertDialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Y(P(HU),vt(It(e)),{default:B(()=>[X(n.$slots,"default")]),_:3},16))}},i4={__name:"AlertDialogContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=ue(()=>{const{class:o,...a}=n;return a}),i=Fr(s,r);return(o,a)=>(W(),Y(P(zU),null,{default:B(()=>[ee(P(YU),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),ee(P(QU),Pe(P(i),{class:P(wt)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n.class)}),{default:B(()=>[X(o.$slots,"default")]),_:3},16,["class"])]),_:3}))}},o4={__name:"AlertDialogHeader",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("div",{class:sn(P(wt)("flex flex-col gap-y-2 text-center sm:text-left",e.class))},[X(n.$slots,"default")],2))}},a4={__name:"AlertDialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(JU),Pe(n.value,{class:P(wt)("text-lg font-semibold",e.class)}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["class"]))}},l4={__name:"AlertDialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(ZU),Pe(n.value,{class:P(wt)("text-sm text-muted-foreground",e.class)}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["class"]))}},c4={__name:"AlertDialogFooter",props:{class:{type:null,required:!1}},setup(t){const e=t;return(n,r)=>(W(),Je("div",{class:sn(P(wt)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",e.class))},[X(n.$slots,"default")],2))}},u4={__name:"AlertDialogAction",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(e2),Pe(n.value,{class:P(wt)(P(em)(),e.class)}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["class"]))}},h4={__name:"AlertDialogCancel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=ue(()=>{const{class:r,...s}=e;return s});return(r,s)=>(W(),Y(P(XU),Pe(n.value,{class:P(wt)(P(em)({variant:"outline"}),"mt-2 sm:mt-0",e.class)}),{default:B(()=>[X(r.$slots,"default")]),_:3},16,["class"]))}},d4={components:{AlertDialog:r4,AlertDialogAction:u4,AlertDialogCancel:h4,AlertDialogContent:i4,AlertDialogDescription:l4,AlertDialogFooter:c4,AlertDialogHeader:o4,AlertDialogTitle:a4,AlertDialogTrigger:s4},computed:{dialog(){return this.$store.state.dialog}},methods:{toggleOpen(){this.$store.commit("setDialog",null)}}};function f4(t,e,n,r,s,i){const o=we("AlertDialogTitle"),a=we("AlertDialogDescription"),l=we("AlertDialogHeader"),u=we("AlertDialogCancel"),h=we("AlertDialogAction"),d=we("AlertDialogFooter"),p=we("AlertDialogContent"),g=we("AlertDialog");return i.dialog?(W(),Y(g,{key:0,open:!!i.dialog,"onUpdate:open":i.toggleOpen},{default:B(()=>[ee(p,null,{default:B(()=>[ee(l,null,{default:B(()=>[ee(o,null,{default:B(()=>[dt(Mn(i.dialog.title),1)]),_:1}),ee(a,null,{default:B(()=>[dt(Mn(i.dialog.description),1)]),_:1})]),_:1}),ee(d,null,{default:B(()=>[ee(u,null,{default:B(()=>[dt("Cancel")]),_:1}),ee(h,{onClick:i.dialog.action},{default:B(()=>[dt("Continue")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open","onUpdate:open"])):mn("",!0)}const p4=Jt(d4,[["render",f4]]),m4={components:{Home:RB,ChevronRight:CB,NavBar:n4,Hero:_$,UserData:T$,DeleteMyAccount:R$,Dialog:p4},computed:{account(){return this.$store.state.account}}},g4={class:"bg-stone-500"},_4={class:"flex min-h-[100vh] flex flex-col md:mx-auto max-w-7xl shadow bg-white"},y4={class:"flex-1"},v4={class:"px-4 py-2 text-sm flex gap-2 items-center"},w4=yt("span",{class:"flex gap-1 items-center text-sm"}," My account ",-1);function E4(t,e,n,r,s,i){const o=we("NavBar"),a=we("Hero"),l=we("Home"),u=we("router-link"),h=we("ChevronRight"),d=we("UserData"),p=we("DeleteMyAccount"),g=we("Dialog");return W(),Je(nn,null,[yt("div",g4,[yt("div",_4,[yt("div",y4,[ee(o),ee(a),yt("div",v4,[ee(u,{to:{name:"lobby"},class:"flex items-center gap-2 text-sm"},{default:B(()=>[ee(l,{size:"16"}),dt(" Lobby ")]),_:1}),ee(h,{size:"14"}),w4]),i.account?(W(),Y(d,{key:0,account:i.account},null,8,["account"])):mn("",!0),ee(p,{account:i.account},null,8,["account"])])])]),ee(g)],64)}const b4=Jt(m4,[["render",E4]]),T4="modulepreload",I4=function(t){return"/"+t},dv={},es=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=I4(a),a in dv)return;dv[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":T4,l||(h.as="script",h.crossOrigin=""),h.href=a,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},A4=[{path:"/auth",component:()=>es(()=>import("./auth-30Q_MesE.js"),[]),children:[{path:"login",name:"login",component:()=>es(()=>import("./login-Bf0vZs64.js"),[])}]}],C4=[{path:"/g",component:()=>es(()=>import("./game-KJToaV2_.js"),[]),children:[{path:"lobby",name:"lobby",component:()=>es(()=>import("./lobby-CNZ2UO1T.js"),__vite__mapDeps([0,1,2,3,4,5,6]))},{path:"decks",name:"decks",component:()=>es(()=>import("./deck-ZUSrWeRq.js"),__vite__mapDeps([7,2,3,1,4]))},{path:"decks/new",name:"deck-builder",component:()=>es(()=>import("./deck-builder-Bbi9rw-c.js"),__vite__mapDeps([8,4,5,9,3]))},{path:"decks/:id",name:"deck-editor",component:()=>es(()=>import("./deck-builder-Bbi9rw-c.js"),__vite__mapDeps([8,4,5,9,3]))},{path:"match/:id",name:"match",component:()=>es(()=>import("./match-DNUDSr4b.js"),__vite__mapDeps([10,2,6,3,5,9]))}]}],R4=[{path:"",name:"home",component:u$},{path:"/my-account",name:"my-account",component:b4},...A4,...C4],S4=hV({history:$L("/"),routes:R4}),rm=sR(QB);rm.use(S4);rm.use(Mp);rm.mount("#app");export{wt as $,AM as A,sn as B,n4 as C,p4 as D,Za as E,nn as F,CB as G,RB as H,u0 as I,ws as J,Hh as K,k$ as L,Fr as M,X as N,vt as O,It as P,yU as Q,hI as R,vU as S,zI as T,a$ as U,ue as V,Pe as W,PB as X,UU as Y,$U as Z,Jt as _,yt as a,V4 as a0,jU as a1,qU as a2,a0 as a3,EI as a4,i0 as a5,ee as b,Je as c,Y as d,mn as e,Du as f,Mc as g,dt as h,M4 as i,kc as j,gp as k,N4 as l,QA as m,Xa as n,W as o,D4 as p,jT as q,we as r,GT as s,Mn as t,P as u,CM as v,B as w,Mp as x,_p as y,IM as z};
