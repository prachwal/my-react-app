(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[758],{961:(e,n,t)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=t(6221)},2694:(e,n,t)=>{"use strict";var r=t(6925);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},3710:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>k,I18nextProvider:()=>K,Trans:()=>D,TransWithoutContext:()=>A,Translation:()=>H,composeInitialProps:()=>P,date:()=>z,getDefaults:()=>_,getI18n:()=>N,getInitialProps:()=>$,initReactI18next:()=>C,number:()=>G,plural:()=>Y,select:()=>W,selectOrdinal:()=>q,setDefaults:()=>O,setI18n:()=>v,time:()=>M,useSSR:()=>B,useTranslation:()=>j,withSSR:()=>F,withTranslation:()=>U});var r=t(6540),i=t(3804);const s=(e,n,t,r)=>{const i=[t,{code:n,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(i,"warn","react-i18next::",!0);f(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...i):console},o={},a=(e,n,t,r)=>{f(t)&&o[t]||(f(t)&&(o[t]=new Date),s(e,n,t,r))},c=(e,n)=>()=>{if(e.isInitialized)n();else{const t=()=>{setTimeout((()=>{e.off("initialized",t)}),0),n()};e.on("initialized",t)}},l=(e,n,t)=>{e.loadNamespaces(n,c(e,t))},u=(e,n,t,r)=>{if(f(t)&&(t=[t]),e.options.preload&&e.options.preload.indexOf(n)>-1)return l(e,t,r);t.forEach((n=>{e.options.ns.indexOf(n)<0&&e.options.ns.push(n)})),e.loadLanguages(n,c(e,r))},p=e=>e.displayName||e.name||(f(e)&&e.length>0?e:"Unknown"),f=e=>"string"==typeof e,d=e=>"object"==typeof e&&null!==e,g=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,y={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},m=e=>y[e];let h={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(g,m)};const O=(e={})=>{h={...h,...e}},_=()=>h;let E;const v=e=>{E=e},N=()=>E,S=(e,n)=>{if(!e)return!1;const t=e.props?.children??e.children;return n?t.length>0:!!t},T=e=>{if(!e)return[];const n=e.props?.children??e.children;return e.props?.i18nIsDynamicList?b(n):n},b=e=>Array.isArray(e)?e:[e],I=(e,n,t,i)=>{if(!e)return"";let o="";const a=b(e),c=n?.transSupportBasicHtmlNodes?n.transKeepBasicHtmlNodesFor??[]:[];return a.forEach(((e,a)=>{if(f(e))o+=`${e}`;else if((0,r.isValidElement)(e)){const{props:r,type:s}=e,l=Object.keys(r).length,u=c.indexOf(s)>-1,p=r.children;if(!p&&u&&!l)return void(o+=`<${s}/>`);if(!p&&(!u||l)||r.i18nIsDynamicList)return void(o+=`<${a}></${a}>`);if(u&&1===l&&f(p))return void(o+=`<${s}>${p}</${s}>`);const d=I(p,n,t,i);o+=`<${a}>${d}</${a}>`}else if(null!==e)if(d(e)){const{format:n,...r}=e,a=Object.keys(r);if(1===a.length){const e=n?`${a[0]}, ${n}`:a[0];return void(o+=`{{${e}}}`)}s(t,"TRANS_INVALID_OBJ","Invalid child - Object should only have keys {{ value, format }} (format is optional).",{i18nKey:i,child:e})}else s(t,"TRANS_INVALID_VAR","Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.",{i18nKey:i,child:e});else s(t,"TRANS_NULL_VALUE","Passed in a null value as child",{i18nKey:i})})),o},R=(e,n,t,s,o,a)=>{if(""===n)return[];const c=s.transKeepBasicHtmlNodesFor||[],l=n&&new RegExp(c.map((e=>`<${e}`)).join("|")).test(n);if(!e&&!l&&!a)return[n];const u={},p=e=>{b(e).forEach((e=>{f(e)||(S(e)?p(T(e)):d(e)&&!(0,r.isValidElement)(e)&&Object.assign(u,e))}))};p(e);const g=i.A.parse(`<0>${n}</0>`),y={...u,...o},m=(e,n,t)=>{const i=T(e),s=O(i,n.children,t);return(e=>Array.isArray(e)&&e.every(r.isValidElement))(i)&&0===s.length||e.props?.i18nIsDynamicList?i:s},h=(e,n,t,i,s)=>{e.dummy?(e.children=n,t.push((0,r.cloneElement)(e,{key:i},s?void 0:n))):t.push(...r.Children.map([e],(e=>{const t={...e.props};return delete t.i18nIsDynamicList,(0,r.createElement)(e.type,{...t,key:i,ref:e.ref},s?null:n)})))},O=(n,i,o)=>{const u=b(n);return b(i).reduce(((n,i,p)=>{const g=i.children?.[0]?.content&&t.services.interpolator.interpolate(i.children[0].content,y,t.language);if("tag"===i.type){let a=u[parseInt(i.name,10)];1!==o.length||a||(a=o[0][i.name]),a||(a={});const _=0!==Object.keys(i.attrs).length?((e,n)=>{const t={...n};return t.props=Object.assign(e.props,n.props),t})({props:i.attrs},a):a,E=(0,r.isValidElement)(_),v=E&&S(i,!0)&&!i.voidElement,N=l&&d(_)&&_.dummy&&!E,T=d(e)&&Object.hasOwnProperty.call(e,i.name);if(f(_)){const e=t.services.interpolator.interpolate(_,y,t.language);n.push(e)}else if(S(_)||v){const e=m(_,i,o);h(_,e,n,p)}else if(N){const e=O(u,i.children,o);h(_,e,n,p)}else if(Number.isNaN(parseFloat(i.name)))if(T){const e=m(_,i,o);h(_,e,n,p,i.voidElement)}else if(s.transSupportBasicHtmlNodes&&c.indexOf(i.name)>-1)if(i.voidElement)n.push((0,r.createElement)(i.name,{key:`${i.name}-${p}`}));else{const e=O(u,i.children,o);n.push((0,r.createElement)(i.name,{key:`${i.name}-${p}`},e))}else if(i.voidElement)n.push(`<${i.name} />`);else{const e=O(u,i.children,o);n.push(`<${i.name}>${e}</${i.name}>`)}else if(d(_)&&!E){const e=i.children[0]?g:null;e&&n.push(e)}else h(_,g,n,p,1!==i.children.length||!g)}else if("text"===i.type){const e=s.transWrapTextNodes,o=a?s.unescape(t.services.interpolator.interpolate(i.content,y,t.language)):t.services.interpolator.interpolate(i.content,y,t.language);e?n.push((0,r.createElement)(e,{key:`${i.name}-${p}`},o)):n.push(o)}return n}),[])},_=O([{dummy:!0,children:e||[]}],g,b(e||[]));return T(_[0])},x=(e,n,t)=>{const i=e.key||n,s=(0,r.cloneElement)(e,{key:i});if(!s.props||!s.props.children||t.indexOf(`${n}/>`)<0&&t.indexOf(`${n} />`)<0)return s;return(0,r.createElement)((function(){return(0,r.createElement)(r.Fragment,null,s)}),{key:i})},L=(e,n,t,r)=>e?Array.isArray(e)?((e,n)=>e.map(((e,t)=>x(e,t,n))))(e,n):d(e)?((e,n)=>{const t={};return Object.keys(e).forEach((r=>{Object.assign(t,{[r]:x(e[r],r,n)})})),t})(e,n):(a(t,"TRANS_INVALID_COMPONENTS",'<Trans /> "components" prop expects an object or array',{i18nKey:r}),null):null;function A({children:e,count:n,parent:t,i18nKey:i,context:s,tOptions:o={},values:c,defaults:l,components:u,ns:p,i18n:d,t:g,shouldUnescape:y,...m}){const h=d||N();if(!h)return a(h,"NO_I18NEXT_INSTANCE","Trans: You need to pass in an i18next instance using i18nextReactModule",{i18nKey:i}),e;const O=g||h.t.bind(h)||(e=>e),E={..._(),...h.options?.react};let v=p||O.ns||h.options?.defaultNS;v=f(v)?[v]:v||["translation"];const S=I(e,E,h,i),T=l||S||E.transEmptyNodeValue||i,{hashTransKey:b}=E,x=i||(b?b(S||T):S||T);h.options?.interpolation?.defaultVariables&&(c=c&&Object.keys(c).length>0?{...c,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});const A=c||void 0!==n&&!h.options?.interpolation?.alwaysFormat||!e?o.interpolation:{interpolation:{...o.interpolation,prefix:"#$?",suffix:"?$#"}},C={...o,context:s||o.context,count:n,...c,...A,defaultValue:T,ns:v},k=x?O(x,C):T,w=L(u,k,h,i),P=R(w||e,k,h,E,C,y),$=t??E.defaultTransParent;return $?(0,r.createElement)($,m,P):P}const C={type:"3rdParty",init(e){O(e.options.react),v(e)}},k=(0,r.createContext)();class w{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const P=e=>async n=>({...await(e.getInitialProps?.(n))??{},...$()}),$=()=>{const e=N(),n=e.reportNamespaces?.getUsedNamespaces()??[],t={},r={};return e.languages.forEach((t=>{r[t]={},n.forEach((n=>{r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t};function D({children:e,count:n,parent:t,i18nKey:i,context:s,tOptions:o={},values:a,defaults:c,components:l,ns:u,i18n:p,t:f,shouldUnescape:d,...g}){const{i18n:y,defaultNS:m}=(0,r.useContext)(k)||{},h=p||y||N(),O=f||h?.t.bind(h);return A({children:e,count:n,parent:t,i18nKey:i,context:s,tOptions:o,values:a,defaults:c,components:l,ns:u||O?.ns||m||h?.options?.defaultNS,i18n:h,t:f,shouldUnescape:d,...g})}const V=(e,n,t,r)=>e.getFixedT(n,t,r),j=(e,n={})=>{const{i18n:t}=n,{i18n:i,defaultNS:s}=(0,r.useContext)(k)||{},o=t||i||N();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new w),!o){a(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const e=(e,n)=>f(n)?n:d(n)&&f(n.defaultValue)?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,n=[e,{},!1];return n.t=e,n.i18n={},n.ready=!1,n}o.options.react?.wait&&a(o,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={..._(),...o.options.react,...n},{useSuspense:p,keyPrefix:g}=c;let y=e||s||o.options?.defaultNS;y=f(y)?[y]:y||["translation"],o.reportNamespaces.addUsedNamespaces?.(y);const m=(o.isInitialized||o.initializedStoreOnce)&&y.every((e=>((e,n,t={})=>n.languages&&n.languages.length?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,r)=>{if(t.bindI18n?.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):(a(n,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:n.languages}),!0))(e,o,c))),h=((e,n,t,i)=>(0,r.useCallback)(V(e,n,t,i),[e,n,t,i]))(o,n.lng||null,"fallback"===c.nsMode?y:y[0],g),O=()=>h,E=()=>V(o,n.lng||null,"fallback"===c.nsMode?y:y[0],g),[v,S]=(0,r.useState)(O);let T=y.join();n.lng&&(T=`${n.lng}${T}`);const b=((e,n)=>{const t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current=n?t.current:e}),[e,n]),t.current})(T),I=(0,r.useRef)(!0);(0,r.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=c;I.current=!0,m||p||(n.lng?u(o,n.lng,y,(()=>{I.current&&S(E)})):l(o,y,(()=>{I.current&&S(E)}))),m&&b&&b!==T&&I.current&&S(E);const r=()=>{I.current&&S(E)};return e&&o?.on(e,r),t&&o?.store.on(t,r),()=>{I.current=!1,o&&e?.split(" ").forEach((e=>o.off(e,r))),t&&o&&t.split(" ").forEach((e=>o.store.off(e,r)))}}),[o,T]),(0,r.useEffect)((()=>{I.current&&m&&S(O)}),[o,g,m]);const R=[v,o,m];if(R.t=v,R.i18n=o,R.ready=m,m)return R;if(!m&&!p)return R;throw new Promise((e=>{n.lng?u(o,n.lng,y,(()=>e())):l(o,y,(()=>e()))}))},U=(e,n={})=>function(t){function i({forwardedRef:i,...s}){const[o,a,c]=j(e,{...s,keyPrefix:n.keyPrefix}),l={...s,t:o,i18n:a,tReady:c};return n.withRef&&i?l.ref=i:!n.withRef&&i&&(l.forwardedRef=i),(0,r.createElement)(t,l)}i.displayName=`withI18nextTranslation(${p(t)})`,i.WrappedComponent=t;return n.withRef?(0,r.forwardRef)(((e,n)=>(0,r.createElement)(i,Object.assign({},e,{forwardedRef:n})))):i},H=({ns:e,children:n,...t})=>{const[r,i,s]=j(e,t);return n(r,{i18n:i,lng:i.language},s)};function K({i18n:e,defaultNS:n,children:t}){const i=(0,r.useMemo)((()=>({i18n:e,defaultNS:n})),[e,n]);return(0,r.createElement)(k.Provider,{value:i},t)}const B=(e,n,t={})=>{const{i18n:i}=t,{i18n:s}=(0,r.useContext)(k)||{},o=i||s||N();o.options?.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce(((e,n)=>(Object.keys(n).forEach((n=>{e.indexOf(n)<0&&e.push(n)})),e)),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))},F=()=>function(e){function n({initialI18nStore:n,initialLanguage:t,...i}){return B(n,t),(0,r.createElement)(e,{...i})}return n.getInitialProps=P(e),n.displayName=`withI18nextSSR(${p(e)})`,n.WrappedComponent=e,n},z=()=>"",M=()=>"",G=()=>"",W=()=>"",Y=()=>"",q=()=>""},5338:(e,n,t)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=t(1247)},5556:(e,n,t)=>{e.exports=t(2694)()},6221:(e,n,t)=>{"use strict";var r=t(6540);function i(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},a=Symbol.for("react.portal");var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,n){return"font"===e?"":"string"==typeof n?"use-credentials"===n?n:"":void 0}n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,n.createPortal=function(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!n||1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType)throw Error(i(299));return function(e,n,t){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:a,key:null==r?null:""+r,children:e,containerInfo:n,implementation:t}}(e,n,null,t)},n.flushSync=function(e){var n=c.T,t=o.p;try{if(c.T=null,o.p=2,e)return e()}finally{c.T=n,o.p=t,o.d.f()}},n.preconnect=function(e,n){"string"==typeof e&&(n?n="string"==typeof(n=n.crossOrigin)?"use-credentials"===n?n:"":void 0:n=null,o.d.C(e,n))},n.prefetchDNS=function(e){"string"==typeof e&&o.d.D(e)},n.preinit=function(e,n){if("string"==typeof e&&n&&"string"==typeof n.as){var t=n.as,r=l(t,n.crossOrigin),i="string"==typeof n.integrity?n.integrity:void 0,s="string"==typeof n.fetchPriority?n.fetchPriority:void 0;"style"===t?o.d.S(e,"string"==typeof n.precedence?n.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:s}):"script"===t&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:s,nonce:"string"==typeof n.nonce?n.nonce:void 0})}},n.preinitModule=function(e,n){if("string"==typeof e)if("object"==typeof n&&null!==n){if(null==n.as||"script"===n.as){var t=l(n.as,n.crossOrigin);o.d.M(e,{crossOrigin:t,integrity:"string"==typeof n.integrity?n.integrity:void 0,nonce:"string"==typeof n.nonce?n.nonce:void 0})}}else null==n&&o.d.M(e)},n.preload=function(e,n){if("string"==typeof e&&"object"==typeof n&&null!==n&&"string"==typeof n.as){var t=n.as,r=l(t,n.crossOrigin);o.d.L(e,t,{crossOrigin:r,integrity:"string"==typeof n.integrity?n.integrity:void 0,nonce:"string"==typeof n.nonce?n.nonce:void 0,type:"string"==typeof n.type?n.type:void 0,fetchPriority:"string"==typeof n.fetchPriority?n.fetchPriority:void 0,referrerPolicy:"string"==typeof n.referrerPolicy?n.referrerPolicy:void 0,imageSrcSet:"string"==typeof n.imageSrcSet?n.imageSrcSet:void 0,imageSizes:"string"==typeof n.imageSizes?n.imageSizes:void 0,media:"string"==typeof n.media?n.media:void 0})}},n.preloadModule=function(e,n){if("string"==typeof e)if(n){var t=l(n.as,n.crossOrigin);o.d.m(e,{as:"string"==typeof n.as&&"script"!==n.as?n.as:void 0,crossOrigin:t,integrity:"string"==typeof n.integrity?n.integrity:void 0})}else o.d.m(e)},n.requestFormReset=function(e){o.d.r(e)},n.unstable_batchedUpdates=function(e,n){return e(n)},n.useFormState=function(e,n,t){return c.H.useFormState(e,n,t)},n.useFormStatus=function(){return c.H.useHostTransitionStatus()},n.version="19.0.0"},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);