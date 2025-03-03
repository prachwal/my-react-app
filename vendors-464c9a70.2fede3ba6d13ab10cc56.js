"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[6395],{28895:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,a={};function c(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(a,{__DO_NOT_USE__ActionTypes:()=>s,applyMiddleware:()=>g,bindActionCreators:()=>w,combineReducers:()=>y,compose:()=>m,createStore:()=>d,isAction:()=>b,isPlainObject:()=>f,legacy_createStore:()=>p}),e.exports=(t=a,((e,t,a,c)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of i(t))o.call(e,u)||u===a||r(e,u,{get:()=>t[u],enumerable:!(c=n(t,u))||c.enumerable});return e})(r({},"__esModule",{value:!0}),t));var u=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),l=()=>Math.random().toString(36).substring(7).split("").join("."),s={INIT:`@@redux/INIT${l()}`,REPLACE:`@@redux/REPLACE${l()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${l()}`};function f(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function d(e,t,r){if("function"!=typeof e)throw new Error(c(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(c(1));return r(d)(e,t)}let n=e,i=t,o=new Map,a=o,l=0,p=!1;function y(){a===o&&(a=new Map,o.forEach(((e,t)=>{a.set(t,e)})))}function h(){if(p)throw new Error(c(3));return i}function w(e){if("function"!=typeof e)throw new Error(c(4));if(p)throw new Error(c(5));let t=!0;y();const r=l++;return a.set(r,e),function(){if(t){if(p)throw new Error(c(6));t=!1,y(),a.delete(r),o=null}}}function m(e){if(!f(e))throw new Error(c(7));if(void 0===e.type)throw new Error(c(8));if("string"!=typeof e.type)throw new Error(c(17));if(p)throw new Error(c(9));try{p=!0,i=n(i,e)}finally{p=!1}return(o=a).forEach((e=>{e()})),e}m({type:s.INIT});return{dispatch:m,subscribe:w,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error(c(10));n=e,m({type:s.REPLACE})},[u]:function(){const e=w;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(c(11));function r(){const e=t;e.next&&e.next(h())}r();return{unsubscribe:e(r)}},[u](){return this}}}}}function p(e,t,r){return d(e,t,r)}function y(e){const t=Object.keys(e),r={};for(let n=0;n<t.length;n++){const i=t[n];0,"function"==typeof e[i]&&(r[i]=e[i])}const n=Object.keys(r);let i;try{!function(e){Object.keys(e).forEach((t=>{const r=e[t];if(void 0===r(void 0,{type:s.INIT}))throw new Error(c(12));if(void 0===r(void 0,{type:s.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(e){i=e}return function(e={},t){if(i)throw i;let o=!1;const a={};for(let i=0;i<n.length;i++){const u=n[i],l=r[u],s=e[u],f=l(s,t);if(void 0===f){t&&t.type;throw new Error(c(14))}a[u]=f,o=o||f!==s}return o=o||n.length!==Object.keys(e).length,o?a:e}}function h(e,t){return function(...r){return t(e.apply(this,r))}}function w(e,t){if("function"==typeof e)return h(e,t);if("object"!=typeof e||null===e)throw new Error(c(16));const r={};for(const n in e){const i=e[n];"function"==typeof i&&(r[n]=h(i,t))}return r}function m(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}function g(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(c(15))};const a={getState:i.getState,dispatch:(e,...t)=>o(e,...t)},u=e.map((e=>e(a)));return o=m(...u)(i.dispatch),{...i,dispatch:o}}}function b(e){return f(e)&&"type"in e&&"string"==typeof e.type}},63853:(e,t,r)=>{var n,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,u=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of a(t))!c.call(e,u)&&u!==r&&i(e,u,{get:()=>t[u],enumerable:!(n=o(t,u))||n.enumerable});return e},l={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(l,{ReducerType:()=>ye,SHOULD_AUTOBATCH:()=>$,TaskAbortError:()=>ze,Tuple:()=>M,addListener:()=>at,asyncThunkCreator:()=>pe,autoBatchEnhancer:()=>W,buildCreateSlice:()=>we,clearAllListeners:()=>ct,combineSlices:()=>Et,configureStore:()=>U,createAction:()=>j,createActionCreatorInvariantMiddleware:()=>T,createAsyncThunk:()=>le,createDraftSafeSelector:()=>h,createDraftSafeSelectorCreator:()=>y,createDynamicMiddleware:()=>pt,createEntityAdapter:()=>ke,createImmutableStateInvariantMiddleware:()=>I,createListenerMiddleware:()=>st,createNextState:()=>s.produce,createReducer:()=>K,createSelector:()=>f.createSelector,createSelectorCreator:()=>f.createSelectorCreator,createSerializableStateInvariantMiddleware:()=>L,createSlice:()=>ge,current:()=>s.current,findNonSerializableValue:()=>N,formatProdErrorMessage:()=>jt,freeze:()=>s.freeze,isActionCreator:()=>v,isAllOf:()=>J,isAnyOf:()=>H,isAsyncThunkAction:()=>ne,isDraft:()=>s.isDraft,isFluxStandardAction:()=>S,isFulfilled:()=>re,isImmutableDefault:()=>k,isPending:()=>Z,isPlain:()=>x,isRejected:()=>ee,isRejectedWithValue:()=>te,lruMemoize:()=>f.lruMemoize,miniSerializeError:()=>ue,nanoid:()=>ie,original:()=>s.original,prepareAutoBatched:()=>z,removeListener:()=>ut,unwrapResult:()=>se,weakMapMemoize:()=>f.weakMapMemoize}),e.exports=(n=l,u(i({},"__esModule",{value:!0}),n)),((e,t,r)=>{u(e,t,"default"),r&&u(r,t,"default")})(l,r(28895),e.exports);var s=r(89407),f=r(42885),d=r(89407),p=r(42885),y=(...e)=>{let t=(0,p.createSelectorCreator)(...e),r=Object.assign(((...e)=>{let r=t(...e),n=(e,...t)=>r((0,d.isDraft)(e)?(0,d.current)(e):e,...t);return Object.assign(n,r),n}),{withTypes:()=>r});return r},h=y(p.weakMapMemoize),w=r(28895),m=r(28895),g=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?m.compose:m.compose.apply(null,arguments)},b=(typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,r(29069)),O=r(28895),E=e=>e&&"function"==typeof e.match;function j(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error(jt(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>(0,O.isAction)(t)&&t.type===e,r}function v(e){return"function"==typeof e&&"type"in e&&E(e)}function S(e){return(0,O.isAction)(e)&&Object.keys(e).every(A)}function A(e){return["type","payload","error","meta"].indexOf(e)>-1}function T(e={}){return()=>e=>t=>e(t)}var C=r(89407),M=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function P(e){return(0,C.isDraftable)(e)?(0,C.produce)(e,(()=>{})):e}function _(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function k(e){return"object"!=typeof e||null==e||Object.isFrozen(e)}function I(e={}){return()=>e=>t=>e(t)}var R=r(28895);function x(e){let t=typeof e;return null==e||"string"===t||"boolean"===t||"number"===t||Array.isArray(e)||(0,R.isPlainObject)(e)}function N(e,t="",r=x,n,i=[],o){let a;if(!r(e))return{keyPath:t||"<root>",value:e};if("object"!=typeof e||null===e||o?.has(e))return!1;let c=null!=n?n(e):Object.entries(e),u=i.length>0;for(let[e,l]of c){let c=t?t+"."+e:e;if(!u||!i.some((e=>e instanceof RegExp?e.test(c):c===e))){if(!r(l))return{keyPath:c,value:l};if("object"==typeof l&&(a=N(l,c,r,n,i,o),a))return a}}return o&&D(e)&&o.add(e),!1}function D(e){if(!Object.isFrozen(e))return!1;for(let t of Object.values(e))if("object"==typeof t&&null!==t&&!D(t))return!1;return!0}function L(e={}){return()=>e=>t=>e(t)}var B=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:i=!0}=e??{},o=new M;return t&&(function(e){return"boolean"==typeof e}(t)?o.push(b.thunk):o.push((0,b.withExtraArgument)(t.extraArgument))),o},$="RTK_autoBatch",z=()=>e=>({payload:e,meta:{[$]:!0}}),q=e=>t=>{setTimeout(t,e)},W=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),i=!0,o=!1,a=!1,c=new Set,u="tick"===e.type?queueMicrotask:"raf"===e.type?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:q(10):"callback"===e.type?e.queueNotification:q(e.timeout),l=()=>{a=!1,o&&(o=!1,c.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){let t=n.subscribe((()=>i&&e()));return c.add(e),()=>{t(),c.delete(e)}},dispatch(e){try{return i=!e?.meta?.[$],o=!i,o&&(a||(a=!0,u(l))),n.dispatch(e)}finally{i=!0}}})},V=e=>function(t){let{autoBatch:r=!0}=t??{},n=new M(e);return r&&n.push(W("object"==typeof r?r:void 0)),n};function U(e){let t,r,n=B(),{reducer:i,middleware:o,devTools:a=!0,preloadedState:c,enhancers:u}=e||{};if("function"==typeof i)t=i;else{if(!(0,w.isPlainObject)(i))throw new Error(jt(1));t=(0,w.combineReducers)(i)}r="function"==typeof o?o(n):n();let l=w.compose;a&&(l=g({trace:!1,..."object"==typeof a&&a}));let s=(0,w.applyMiddleware)(...r),f=V(s),d=l(..."function"==typeof u?u(f):f());return(0,w.createStore)(t,c,d)}var X=r(89407);function F(e){let t,r={},n=[],i={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw new Error(jt(28));if(n in r)throw new Error(jt(29));return r[n]=t,i},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),i),addDefaultCase:e=>(t=e,i)};return e(i),[r,n,t]}function K(e,t){let r,[n,i,o]=F(t);if(function(e){return"function"==typeof e}(e))r=()=>P(e());else{let t=P(e);r=()=>t}function a(e=r(),t){let a=[n[t.type],...i.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===a.filter((e=>!!e)).length&&(a=[o]),a.reduce(((e,r)=>{if(r){if((0,X.isDraft)(e)){let n=r(e,t);return void 0===n?e:n}if((0,X.isDraftable)(e))return(0,X.produce)(e,(e=>r(e,t)));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e}),e)}return a.getInitialState=r,a}var G=(e,t)=>E(e)?e.match(t):e(t);function H(...e){return t=>e.some((e=>G(e,t)))}function J(...e){return t=>e.every((e=>G(e,t)))}function Q(e,t){if(!e||!e.meta)return!1;let r="string"==typeof e.meta.requestId,n=t.indexOf(e.meta.requestStatus)>-1;return r&&n}function Y(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Z(...e){return 0===e.length?e=>Q(e,["pending"]):Y(e)?H(...e.map((e=>e.pending))):Z()(e[0])}function ee(...e){return 0===e.length?e=>Q(e,["rejected"]):Y(e)?H(...e.map((e=>e.rejected))):ee()(e[0])}function te(...e){let t=e=>e&&e.meta&&e.meta.rejectedWithValue;return 0===e.length||Y(e)?J(ee(...e),t):te()(e[0])}function re(...e){return 0===e.length?e=>Q(e,["fulfilled"]):Y(e)?H(...e.map((e=>e.fulfilled))):re()(e[0])}function ne(...e){return 0===e.length?e=>Q(e,["pending","fulfilled","rejected"]):Y(e)?H(...e.flatMap((e=>[e.pending,e.rejected,e.fulfilled]))):ne()(e[0])}var ie=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},oe=["name","message","stack","code"],ae=class{constructor(e,t){this.payload=e,this.meta=t}_type},ce=class{constructor(e,t){this.payload=e,this.meta=t}_type},ue=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of oe)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}},le=(()=>{function e(e,t,r){let n=j(e+"/fulfilled",((e,t,r,n)=>({payload:e,meta:{...n||{},arg:r,requestId:t,requestStatus:"fulfilled"}}))),i=j(e+"/pending",((e,t,r)=>({payload:void 0,meta:{...r||{},arg:t,requestId:e,requestStatus:"pending"}}))),o=j(e+"/rejected",((e,t,n,i,o)=>({payload:i,error:(r&&r.serializeError||ue)(e||"Rejected"),meta:{...o||{},arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===e?.name,condition:"ConditionError"===e?.name}})));return Object.assign((function(e){return(a,c,u)=>{let l,s,f=r?.idGenerator?r.idGenerator(e):ie(),d=new AbortController;function p(e){s=e,d.abort()}let y=async function(){let y;try{let o=r?.condition?.(e,{getState:c,extra:u});if(function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.then}(o)&&(o=await o),!1===o||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let h=new Promise(((e,t)=>{l=()=>{t({name:"AbortError",message:s||"Aborted"})},d.signal.addEventListener("abort",l)}));a(i(f,e,r?.getPendingMeta?.({requestId:f,arg:e},{getState:c,extra:u}))),y=await Promise.race([h,Promise.resolve(t(e,{dispatch:a,getState:c,extra:u,requestId:f,signal:d.signal,abort:p,rejectWithValue:(e,t)=>new ae(e,t),fulfillWithValue:(e,t)=>new ce(e,t)})).then((t=>{if(t instanceof ae)throw t;return t instanceof ce?n(t.payload,f,e,t.meta):n(t,f,e)}))])}catch(t){y=t instanceof ae?o(null,f,e,t.payload,t.meta):o(t,f,e)}finally{l&&d.signal.removeEventListener("abort",l)}return r&&!r.dispatchConditionRejection&&o.match(y)&&y.meta.condition||a(y),y}();return Object.assign(y,{abort:p,requestId:f,arg:e,unwrap:()=>y.then(se)})}}),{pending:i,rejected:o,fulfilled:n,settled:H(o,n),typePrefix:e})}return e.withTypes=()=>e,e})();function se(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var fe,de=Symbol.for("rtk-slice-createasyncthunk"),pe={[de]:le},ye=((fe=ye||{}).reducer="reducer",fe.reducerWithPrepare="reducerWithPrepare",fe.asyncThunk="asyncThunk",fe);function he(e,t){return`${e}/${t}`}function we({creators:e}={}){let t=e?.asyncThunk?.[de];return function(e){let{name:r,reducerPath:n=r}=e;if(!r)throw new Error(jt(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},o=Object.keys(i),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw new Error(jt(12));if(r in a.sliceCaseReducersByType)throw new Error(jt(13));return a.sliceCaseReducersByType[r]=t,c},addMatcher:(e,t)=>(a.sliceMatchers.push({matcher:e,reducer:t}),c),exposeAction:(e,t)=>(a.actionCreators[e]=t,c),exposeCaseReducer:(e,t)=>(a.sliceCaseReducersByName[e]=t,c)};function u(){let[t={},r=[],n]="function"==typeof e.extraReducers?F(e.extraReducers):[e.extraReducers],i={...t,...a.sliceCaseReducersByType};return K(e.initialState,(e=>{for(let t in i)e.addCase(t,i[t]);for(let t of a.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)}))}o.forEach((n=>{let o=i[n],a={reducerName:n,type:he(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(o)?function({type:e,reducerName:t,createNotation:r},n,i){let o,a;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error(jt(17));o=n.reducer,a=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?j(e,a):j(e))}(a,o,c):function({type:e,reducerName:t},r,n,i){if(!i)throw new Error(jt(18));let{payloadCreator:o,fulfilled:a,pending:c,rejected:u,settled:l,options:s}=r,f=i(e,o,s);n.exposeAction(t,f),a&&n.addCase(f.fulfilled,a),c&&n.addCase(f.pending,c),u&&n.addCase(f.rejected,u),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:a||be,pending:c||be,rejected:u||be,settled:l||be})}(a,o,c,t)}));let l,s=e=>e,f=new Map;function d(e,t){return l||(l=u()),l(e,t)}function p(){return l||(l=u()),l.getInitialState()}function y(t,r=!1){function n(e){let n=e[t];return typeof n>"u"&&r&&(n=p()),n}function i(t=s){let n=_(f,r,(()=>new WeakMap));return _(n,t,(()=>{let n={};for(let[i,o]of Object.entries(e.selectors??{}))n[i]=me(o,t,p,r);return n}))}return{reducerPath:t,getSelectors:i,get selectors(){return i(n)},selectSlice:n}}let h={name:r,reducer:d,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:p,...y(n),injectInto(e,{reducerPath:t,...r}={}){let i=t??n;return e.inject({reducerPath:i,reducer:d},r),{...h,...y(i,!0)}}};return h}}function me(e,t,r,n){function i(i,...o){let a=t(i);return typeof a>"u"&&n&&(a=r()),e(a,...o)}return i.unwrapped=e,i}var ge=we();function be(){}var Oe=r(89407),Ee=Oe.isDraft;function je(e){let t=ve(((t,r)=>e(r)));return function(e){return t(e,void 0)}}function ve(e){return function(t,r){let n=t=>{!function(e){return S(e)}(r)?e(r,t):e(r.payload,t)};return Ee(t)?(n(t),t):(0,Oe.produce)(t,n)}}var Se=r(89407);function Ae(e,t){return t(e)}function Te(e){return Array.isArray(e)||(e=Object.values(e)),e}function Ce(e){return(0,Se.isDraft)(e)?(0,Se.current)(e):e}function Me(e,t,r){e=Te(e);let n=Ce(r.ids),i=new Set(n),o=[],a=[];for(let r of e){let e=Ae(r,t);i.has(e)?a.push({id:e,changes:r}):o.push(r)}return[o,a,n]}function Pe(e){function t(t,r){let n=Ae(t,e);n in r.entities||(r.ids.push(n),r.entities[n]=t)}function r(e,r){e=Te(e);for(let n of e)t(n,r)}function n(t,r){let n=Ae(t,e);n in r.entities||r.ids.push(n),r.entities[n]=t}function i(e,t){let r=!1;e.forEach((e=>{e in t.entities&&(delete t.entities[e],r=!0)})),r&&(t.ids=t.ids.filter((e=>e in t.entities)))}function o(t,r){let n={},i={};t.forEach((e=>{e.id in r.entities&&(i[e.id]={id:e.id,changes:{...i[e.id]?.changes,...e.changes}})})),(t=Object.values(i)).length>0&&t.filter((t=>function(t,r,n){let i=n.entities[r.id];if(void 0===i)return!1;let o=Object.assign({},i,r.changes),a=Ae(o,e),c=a!==r.id;return c&&(t[r.id]=a,delete n.entities[r.id]),n.entities[a]=o,c}(n,t,r))).length>0&&(r.ids=Object.values(r.entities).map((t=>Ae(t,e))))}function a(t,n){let[i,a]=Me(t,e,n);o(a,n),r(i,n)}return{removeAll:je((function(e){Object.assign(e,{ids:[],entities:{}})})),addOne:ve(t),addMany:ve(r),setOne:ve(n),setMany:ve((function(e,t){e=Te(e);for(let r of e)n(r,t)})),setAll:ve((function(e,t){e=Te(e),t.ids=[],t.entities={},r(e,t)})),updateOne:ve((function(e,t){return o([e],t)})),updateMany:ve(o),upsertOne:ve((function(e,t){return a([e],t)})),upsertMany:ve(a),removeOne:ve((function(e,t){return i([e],t)})),removeMany:ve(i)}}function _e(e,t,r){let n=function(e,t,r){let n=0,i=e.length;for(;n<i;){let o=n+i>>>1;r(t,e[o])>=0?n=o+1:i=o}return n}(e,t,r);return e.splice(n,0,t),e}function ke(e={}){let{selectId:t,sortComparer:r}={sortComparer:!1,selectId:e=>e.id,...e},n=r?function(e,t){let{removeOne:r,removeMany:n,removeAll:i}=Pe(e);function o(t,r,n){t=Te(t);let i=new Set(n??Ce(r.ids)),o=t.filter((t=>!i.has(Ae(t,e))));0!==o.length&&l(r,o)}function a(t,r){if(0!==(t=Te(t)).length){for(let n of t)delete r.entities[e(n)];l(r,t)}}function c(t,r){let n=!1,i=!1;for(let o of t){let t=r.entities[o.id];if(!t)continue;n=!0,Object.assign(t,o.changes);let a=e(t);if(o.id!==a){i=!0,delete r.entities[o.id];let e=r.ids.indexOf(o.id);r.ids[e]=a,r.entities[a]=t}}n&&l(r,[],n,i)}function u(t,r){let[n,i,a]=Me(t,e,r);i.length&&c(i,r),n.length&&o(n,r,a)}let l=(r,n,i,o)=>{let a=Ce(r.entities),c=Ce(r.ids),u=r.entities,l=c;o&&(l=new Set(c));let s=[];for(let e of l){let t=a[e];t&&s.push(t)}let f=0===s.length;for(let r of n)u[e(r)]=r,f||_e(s,r,t);f?s=n.slice().sort(t):i&&s.sort(t);let d=s.map(e);(function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0})(c,d)||(r.ids=d)};return{removeOne:r,removeMany:n,removeAll:i,addOne:ve((function(e,t){return o([e],t)})),updateOne:ve((function(e,t){return c([e],t)})),upsertOne:ve((function(e,t){return u([e],t)})),setOne:ve((function(e,t){return a([e],t)})),setMany:ve(a),setAll:ve((function(e,t){e=Te(e),t.entities={},t.ids=[],o(e,t,[])})),addMany:ve(o),updateMany:ve(c),upsertMany:ve(u)}}(t,r):Pe(t),i=function(e){return{getInitialState:function(t={},r){let n=Object.assign({ids:[],entities:{}},t);return r?e.setAll(n,r):n}}}(n),o={getSelectors:function(e,t={}){let{createSelector:r=h}=t,n=e=>e.ids,i=e=>e.entities,o=r(n,i,((e,t)=>e.map((e=>t[e])))),a=(e,t)=>t,c=(e,t)=>e[t],u=r(n,(e=>e.length));if(!e)return{selectIds:n,selectEntities:i,selectAll:o,selectTotal:u,selectById:r(i,a,c)};let l=r(e,i);return{selectIds:r(e,n),selectEntities:l,selectAll:r(e,o),selectTotal:r(e,u),selectById:r(l,a,c)}}};return{selectId:t,sortComparer:r,...i,...o,...n}}var Ie=r(28895),Re="listener",xe="completed",Ne="cancelled",De=`task-${Ne}`,Le=`task-${xe}`,Be=`${Re}-${Ne}`,$e=`${Re}-${xe}`,ze=class{constructor(e){this.code=e,this.message=`task ${Ne} (reason: ${e})`}name="TaskAbortError";message},qe=(e,t)=>{if("function"!=typeof e)throw new TypeError(jt(32))},We=()=>{},Ve=(e,t=We)=>(e.catch(t),e),Ue=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),Xe=(e,t)=>{let r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},Fe=e=>{if(e.aborted){let{reason:t}=e;throw new ze(t)}};function Ke(e,t){let r=We;return new Promise(((n,i)=>{let o=()=>i(new ze(e.reason));e.aborted?o():(r=Ue(e,o),t.finally((()=>r())).then(n,i))})).finally((()=>{r=We}))}var Ge=e=>t=>Ve(Ke(e,t).then((t=>(Fe(e),t)))),He=e=>{let t=Ge(e);return e=>t(new Promise((t=>setTimeout(t,e))))},{assign:Je}=Object,Qe={},Ye="listenerMiddleware",Ze=(e,t)=>(r,n)=>{qe(r);let i=new AbortController;(t=>{Ue(e,(()=>Xe(t,e.reason)))})(i);let o=(async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(e){return{status:e instanceof ze?"cancelled":"rejected",error:e}}finally{t?.()}})((async()=>{Fe(e),Fe(i.signal);let t=await r({pause:Ge(i.signal),delay:He(i.signal),signal:i.signal});return Fe(i.signal),t}),(()=>Xe(i,Le)));return n?.autoJoin&&t.push(o.catch(We)),{result:Ge(e)(o),cancel(){Xe(i,De)}}},et=(e,t)=>(r,n)=>Ve((async(r,n)=>{Fe(t);let i=()=>{},o=[new Promise(((t,n)=>{let o=e({predicate:r,effect:(e,r)=>{r.unsubscribe(),t([e,r.getState(),r.getOriginalState()])}});i=()=>{o(),n()}}))];null!=n&&o.push(new Promise((e=>setTimeout(e,n,null))));try{let e=await Ke(t,Promise.race(o));return Fe(t),e}finally{i()}})(r,n)),tt=e=>{let{type:t,actionCreator:r,matcher:n,predicate:i,effect:o}=e;if(t)i=j(t).match;else if(r)t=r.type,i=r.match;else if(n)i=n;else if(!i)throw new Error(jt(21));return qe(o),{predicate:i,type:t,effect:o}},rt=Je((e=>{let{type:t,predicate:r,effect:n}=tt(e);return{id:ie(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(jt(22))}}}),{withTypes:()=>rt}),nt=(e,t)=>{let{type:r,effect:n,predicate:i}=tt(t);return Array.from(e.values()).find((e=>("string"==typeof r?e.type===r:e.predicate===i)&&e.effect===n))},it=e=>{e.pending.forEach((e=>{Xe(e,Be)}))},ot=(e,t,r)=>{try{e(t,r)}catch(e){setTimeout((()=>{throw e}),0)}},at=Je(j(`${Ye}/add`),{withTypes:()=>at}),ct=j(`${Ye}/removeAll`),ut=Je(j(`${Ye}/remove`),{withTypes:()=>ut}),lt=(...e)=>{},st=(e={})=>{let t=new Map,{extra:r,onError:n=lt}=e;qe(n);let i=e=>(e=>(e.unsubscribe=()=>t.delete(e.id),t.set(e.id,e),t=>{e.unsubscribe(),t?.cancelActive&&it(e)}))(nt(t,e)??rt(e));Je(i,{withTypes:()=>i});let o=e=>{let r=nt(t,e);return r&&(r.unsubscribe(),e.cancelActive&&it(r)),!!r};Je(o,{withTypes:()=>o});let a=async(e,o,a,c)=>{let u=new AbortController,l=et(i,u.signal),s=[];try{e.pending.add(u),await Promise.resolve(e.effect(o,Je({},a,{getOriginalState:c,condition:(e,t)=>l(e,t).then(Boolean),take:l,delay:He(u.signal),pause:Ge(u.signal),extra:r,signal:u.signal,fork:Ze(u.signal,s),unsubscribe:e.unsubscribe,subscribe:()=>{t.set(e.id,e)},cancelActiveListeners:()=>{e.pending.forEach(((e,t,r)=>{e!==u&&(Xe(e,Be),r.delete(e))}))},cancel:()=>{Xe(u,Be),e.pending.delete(u)},throwIfCancelled:()=>{Fe(u.signal)}})))}catch(e){e instanceof ze||ot(n,e,{raisedBy:"effect"})}finally{await Promise.all(s),Xe(u,$e),e.pending.delete(u)}},c=(e=>()=>{e.forEach(it),e.clear()})(t);return{middleware:e=>r=>u=>{if(!(0,Ie.isAction)(u))return r(u);if(at.match(u))return i(u.payload);if(ct.match(u))return void c();if(ut.match(u))return o(u.payload);let l,s=e.getState(),f=()=>{if(s===Qe)throw new Error(jt(23));return s};try{if(l=r(u),t.size>0){let r=e.getState(),i=Array.from(t.values());for(let t of i){let i=!1;try{i=t.predicate(u,r,s)}catch(e){i=!1,ot(n,e,{raisedBy:"predicate"})}i&&a(t,u,e,f)}}}finally{s=Qe}return l},startListening:i,stopListening:o,clearListeners:c}},ft=r(28895),dt=e=>({middleware:e,applied:new Map}),pt=()=>{let e=ie(),t=new Map,r=Object.assign(j("dynamicMiddleware/add",((...t)=>({payload:t,meta:{instanceId:e}}))),{withTypes:()=>r}),n=Object.assign((function(...e){e.forEach((e=>{_(t,e,dt)}))}),{withTypes:()=>n}),i=J(r,(e=>t=>t?.meta?.instanceId===e)(e));return{middleware:e=>r=>o=>i(o)?(n(...o.payload),e.dispatch):(e=>{let r=Array.from(t.values()).map((t=>_(t.applied,e,t.middleware)));return(0,ft.compose)(...r)})(e)(r)(o),addMiddleware:n,withMiddleware:r,instanceId:e}},yt=r(28895),ht=e=>e.flatMap((e=>(e=>"reducerPath"in e&&"string"==typeof e.reducerPath)(e)?[[e.reducerPath,e.reducer]]:Object.entries(e))),wt=Symbol.for("rtk-state-proxy-original"),mt=new WeakMap,gt=(e,t)=>_(mt,e,(()=>new Proxy(e,{get:(e,r,n)=>{if(r===wt)return e;let i=Reflect.get(e,r,n);if(typeof i>"u"){let e=t[r.toString()];if(e){let t=e(void 0,{type:ie()});if(typeof t>"u")throw new Error(jt(24));return t}}return i}}))),bt=e=>{if(!(e=>!!e&&!!e[wt])(e))throw new Error(jt(25));return e[wt]},Ot=(e={})=>e;function Et(...e){let t=Object.fromEntries(ht(e)),r=()=>Object.keys(t).length?(0,yt.combineReducers)(t):Ot,n=r();function i(e,t){return n(e,t)}i.withLazyLoadedSlices=()=>i;let o=Object.assign((function(e,r){return function(n,...i){return e(gt(r?r(n,...i):n,t),...i)}}),{original:bt});return Object.assign(i,{inject:(e,o={})=>{let{reducerPath:a,reducer:c}=e,u=t[a];return!o.overrideExisting&&u&&u!==c||(t[a]=c,n=r()),i},selector:o})}function jt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}},94603:(e,t,r)=>{e.exports=r(63853)}}]);