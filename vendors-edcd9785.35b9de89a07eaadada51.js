"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[8682],{13264:(e,t,r)=>{r.d(t,{gu:()=>ye});var a=r(96540),n=r(69843),i=r.n(n),o=r(1882),s=r.n(o),l=r(23181),d=r.n(l),c=r(58156),p=r.n(c),u=r(33031),h=r.n(u),f=r(7350),v=r.n(f),y=r(34164),x=r(11561),m=r(49303),g=r(86069),I=r(72149),b=r(89607),A=r(66613),M=r(34723),E=r(94501),S=r(3509),k=r(81636),T=r(59744),P=r(33964),O=r(12532),w=r(67688),C=r(14040),B=r(23521),D=r(52408),j=r(98940),G=r(70284),L=r(93749),R=r(80489),z=r(99848),N=r(19287),K=["item"],U=["children","className","width","height","style","compact","title","desc"];function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_.apply(this,arguments)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i,o,s=[],l=!0,d=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(a=i.call(r)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){d=!0,n=e}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(d)throw n}}return s}}(e,t)||$(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function W(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,ae(a.key),a)}}function Q(e,t,r){return t=V(t),function(e,t){if(t&&("object"===X(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,F()?Reflect.construct(t,r||[],V(e).constructor):t.apply(e,r))}function F(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(F=function(){return!!e})()}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function Z(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function re(e,t,r){return(t=ae(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e){var t=function(e,t){if("object"!=X(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=X(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==X(t)?t:t+""}var ne={xAxis:["bottom","top"],yAxis:["left","right"]},ie={width:"100%",height:"100%"},oe={x:0,y:0};function se(e){return e}var le=function(e,t){var r=t.graphicalItems,a=t.dataStartIndex,n=t.dataEndIndex,i=(null!=r?r:[]).reduce((function(e,t){var r=t.props.data;return r&&r.length?[].concat(Z(e),Z(r)):e}),[]);return i.length>0?i:e&&e.length&&(0,T.Et)(a)&&(0,T.Et)(n)?e.slice(a,n+1):[]};function de(e){return"number"===e?[0,"auto"]:void 0}var ce=function(e,t,r,a){var n=e.graphicalItems,i=e.tooltipAxis,o=le(t,e);return r<0||!n||!n.length||r>=o.length?null:n.reduce((function(n,s){var l,d,c=null!==(l=s.props.data)&&void 0!==l?l:t;if(c&&e.dataStartIndex+e.dataEndIndex!==0&&e.dataEndIndex-e.dataStartIndex>=r&&(c=c.slice(e.dataStartIndex,e.dataEndIndex+1)),i.dataKey&&!i.allowDuplicatedCategory){var p=void 0===c?o:c;d=(0,T.eP)(p,i.dataKey,a)}else d=c&&c[r]||o[r];return d?[].concat(Z(n),[(0,P.zb)(s,d)]):n}),[])},pe=function(e,t,r,a){var n=a||{x:e.chartX,y:e.chartY},i=function(e,t){return"horizontal"===t?e.x:"vertical"===t?e.y:"centric"===t?e.angle:e.radius}(n,r),o=e.orderedTooltipTicks,s=e.tooltipAxis,l=e.tooltipTicks,d=(0,P.gH)(i,o,l,s);if(d>=0&&l){var c=l[d]&&l[d].value,p=ce(e,t,d,c),u=function(e,t,r,a){var n=t.find((function(e){return e&&e.index===r}));if(n){if("horizontal"===e)return{x:n.coordinate,y:a.y};if("vertical"===e)return{x:a.x,y:n.coordinate};if("centric"===e){var i=n.coordinate,o=a.radius;return te(te(te({},a),(0,C.IZ)(a.cx,a.cy,o,i)),{},{angle:i,radius:o})}var s=n.coordinate,l=a.angle;return te(te(te({},a),(0,C.IZ)(a.cx,a.cy,s,l)),{},{angle:l,radius:s})}return oe}(r,o,d,n);return{activeTooltipIndex:d,activeLabel:c,activePayload:p,activeCoordinate:u}}return null},ue=function(e,t){var r=t.axisType,a=void 0===r?"xAxis":r,n=t.AxisComp,o=t.graphicalItems,s=t.stackGroups,l=t.dataStartIndex,c=t.dataEndIndex,u=e.children,h="".concat(a,"Id"),f=(0,E.aS)(u,n),v={};return f&&f.length?v=function(e,t){var r=t.axes,a=t.graphicalItems,n=t.axisType,o=t.axisIdKey,s=t.stackGroups,l=t.dataStartIndex,c=t.dataEndIndex,p=e.layout,u=e.children,h=e.stackOffset,f=(0,P._L)(p,n);return r.reduce((function(t,r){var v,y=void 0!==r.type.defaultProps?te(te({},r.type.defaultProps),r.props):r.props,x=y.type,m=y.dataKey,g=y.allowDataOverflow,I=y.allowDuplicatedCategory,b=y.scale,A=y.ticks,M=y.includeHidden,E=y[o];if(t[E])return t;var S,k,O,C=le(e.data,{graphicalItems:a.filter((function(e){var t;return(o in e.props?e.props[o]:null===(t=e.type.defaultProps)||void 0===t?void 0:t[o])===E})),dataStartIndex:l,dataEndIndex:c}),B=C.length;(0,L.B)(y.domain,g,x)&&(S=(0,P.AQ)(y.domain,null,g),!f||"number"!==x&&"auto"===b||(O=(0,P.Ay)(C,m,"category")));var D=de(x);if(!S||0===S.length){var j,G=null!==(j=y.domain)&&void 0!==j?j:D;if(m){if(S=(0,P.Ay)(C,m,x),"category"===x&&f){var R=(0,T.CG)(S);I&&R?(k=S,S=d()(0,B)):I||(S=(0,P.KC)(G,S,r).reduce((function(e,t){return e.indexOf(t)>=0?e:[].concat(Z(e),[t])}),[]))}else if("category"===x)S=I?S.filter((function(e){return""!==e&&!i()(e)})):(0,P.KC)(G,S,r).reduce((function(e,t){return e.indexOf(t)>=0||""===t||i()(t)?e:[].concat(Z(e),[t])}),[]);else if("number"===x){var z=(0,P.A1)(C,a.filter((function(e){var t,r,a=o in e.props?e.props[o]:null===(t=e.type.defaultProps)||void 0===t?void 0:t[o],n="hide"in e.props?e.props.hide:null===(r=e.type.defaultProps)||void 0===r?void 0:r.hide;return a===E&&(M||!n)})),m,n,p);z&&(S=z)}!f||"number"!==x&&"auto"===b||(O=(0,P.Ay)(C,m,"category"))}else S=f?d()(0,B):s&&s[E]&&s[E].hasStack&&"number"===x?"expand"===h?[0,1]:(0,P.Mk)(s[E].stackGroups,l,c):(0,P.vf)(C,a.filter((function(e){var t=o in e.props?e.props[o]:e.type.defaultProps[o],r="hide"in e.props?e.props.hide:e.type.defaultProps.hide;return t===E&&(M||!r)})),x,p,!0);if("number"===x)S=(0,w.M)(u,S,E,n,A),G&&(S=(0,P.AQ)(G,S,g));else if("category"===x&&G){var N=G;S.every((function(e){return N.indexOf(e)>=0}))&&(S=N)}}return te(te({},t),{},re({},E,te(te({},y),{},{axisType:n,domain:S,categoricalDomain:O,duplicateDomain:k,originalDomain:null!==(v=y.domain)&&void 0!==v?v:D,isCategorical:f,layout:p})))}),{})}(e,{axes:f,graphicalItems:o,axisType:a,axisIdKey:h,stackGroups:s,dataStartIndex:l,dataEndIndex:c}):o&&o.length&&(v=function(e,t){var r=t.graphicalItems,a=t.Axis,n=t.axisType,i=t.axisIdKey,o=t.stackGroups,s=t.dataStartIndex,l=t.dataEndIndex,c=e.layout,u=e.children,h=le(e.data,{graphicalItems:r,dataStartIndex:s,dataEndIndex:l}),f=h.length,v=(0,P._L)(c,n),y=-1;return r.reduce((function(e,t){var x,m=(void 0!==t.type.defaultProps?te(te({},t.type.defaultProps),t.props):t.props)[i],g=de("number");return e[m]?e:(y++,v?x=d()(0,f):o&&o[m]&&o[m].hasStack?(x=(0,P.Mk)(o[m].stackGroups,s,l),x=(0,w.M)(u,x,m,n)):(x=(0,P.AQ)(g,(0,P.vf)(h,r.filter((function(e){var t,r,a=i in e.props?e.props[i]:null===(t=e.type.defaultProps)||void 0===t?void 0:t[i],n="hide"in e.props?e.props.hide:null===(r=e.type.defaultProps)||void 0===r?void 0:r.hide;return a===m&&!n})),"number",c),a.defaultProps.allowDataOverflow),x=(0,w.M)(u,x,m,n)),te(te({},e),{},re({},m,te(te({axisType:n},a.defaultProps),{},{hide:!0,orientation:p()(ne,"".concat(n,".").concat(y%2),null),domain:x,originalDomain:g,isCategorical:v,layout:c}))))}),{})}(e,{Axis:n,graphicalItems:o,axisType:a,axisIdKey:h,stackGroups:s,dataStartIndex:l,dataEndIndex:c})),v},he=function(e){var t=e.children,r=e.defaultShowTooltip,a=(0,E.BU)(t,S.v),n=0,i=0;return e.data&&0!==e.data.length&&(i=e.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(n=a.props.startIndex),a.props.endIndex>=0&&(i=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:n,dataEndIndex:i,activeTooltipIndex:-1,isTooltipActive:Boolean(r)}},fe=function(e){return"horizontal"===e?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:"vertical"===e?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:"centric"===e?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},ve=function(e,t){return"xAxis"===t?e[t].width:"yAxis"===t?e[t].height:void 0},ye=function(e){var t=e.chartName,r=e.GraphicalChild,n=e.defaultTooltipEventType,o=void 0===n?"axis":n,l=e.validateTooltipEventTypes,d=void 0===l?["axis"]:l,c=e.axisComponents,u=e.legendContent,f=e.formatAxisMap,w=e.defaultProps,L=function(e,t){var r=t.graphicalItems,a=t.stackGroups,n=t.offset,o=t.updateId,s=t.dataStartIndex,l=t.dataEndIndex,d=e.barSize,p=e.layout,u=e.barGap,h=e.barCategoryGap,f=e.maxBarSize,v=fe(p),y=v.numericAxisName,m=v.cateAxisName,g=function(e){return!(!e||!e.length)&&e.some((function(e){var t=(0,E.Mn)(e&&e.type);return t&&t.indexOf("Bar")>=0}))}(r),I=[];return r.forEach((function(r,v){var b=le(e.data,{graphicalItems:[r],dataStartIndex:s,dataEndIndex:l}),A=void 0!==r.type.defaultProps?te(te({},r.type.defaultProps),r.props):r.props,M=A.dataKey,S=A.maxBarSize,k=A["".concat(y,"Id")],T=A["".concat(m,"Id")],O=c.reduce((function(e,r){var a=t["".concat(r.axisType,"Map")],n=A["".concat(r.axisType,"Id")];a&&a[n]||"zAxis"===r.axisType||(0,x.A)(!1);var i=a[n];return te(te({},e),{},re(re({},r.axisType,i),"".concat(r.axisType,"Ticks"),(0,P.Rh)(i)))}),{}),w=O[m],C=O["".concat(m,"Ticks")],B=a&&a[k]&&a[k].hasStack&&(0,P.kA)(r,a[k].stackGroups),D=(0,E.Mn)(r.type).indexOf("Bar")>=0,j=(0,P.Hj)(w,C),G=[],L=g&&(0,P.tA)({barSize:d,stackGroups:a,totalSize:ve(O,m)});if(D){var R,z,N=i()(S)?f:S,K=null!==(R=null!==(z=(0,P.Hj)(w,C,!0))&&void 0!==z?z:N)&&void 0!==R?R:0;G=(0,P.BX)({barGap:u,barCategoryGap:h,bandSize:K!==j?K:j,sizeList:L[T],maxBarSize:N}),K!==j&&(G=G.map((function(e){return te(te({},e),{},{position:te(te({},e.position),{},{offset:e.position.offset-K/2})})})))}var U=r&&r.type&&r.type.getComposedData;U&&I.push({props:te(te({},U(te(te({},O),{},{displayedData:b,props:e,dataKey:M,item:r,bandSize:j,barPosition:G,offset:n,stackedData:B,layout:p,dataStartIndex:s,dataEndIndex:l}))),{},re(re(re({key:r.key||"item-".concat(v)},y,O[y]),m,O[m]),"animationId",o)),childIndex:(0,E.AW)(r,e.children),item:r})})),I},X=function(e,a){var n=e.props,i=e.dataStartIndex,o=e.dataEndIndex,s=e.updateId;if(!(0,E.Me)({props:n}))return null;var l=n.children,d=n.layout,u=n.stackOffset,v=n.data,y=n.reverseStackOrder,x=fe(d),m=x.numericAxisName,g=x.cateAxisName,I=(0,E.aS)(l,r),A=(0,P.Mn)(v,I,"".concat(m,"Id"),"".concat(g,"Id"),u,y),M=c.reduce((function(e,t){var r="".concat(t.axisType,"Map");return te(te({},e),{},re({},r,ue(n,te(te({},t),{},{graphicalItems:I,stackGroups:t.axisType===m&&A,dataStartIndex:i,dataEndIndex:o}))))}),{}),k=function(e,t){var r=e.props,a=e.graphicalItems,n=e.xAxisMap,i=void 0===n?{}:n,o=e.yAxisMap,s=void 0===o?{}:o,l=r.width,d=r.height,c=r.children,u=r.margin||{},h=(0,E.BU)(c,S.v),f=(0,E.BU)(c,b.s),v=Object.keys(s).reduce((function(e,t){var r=s[t],a=r.orientation;return r.mirror||r.hide?e:te(te({},e),{},re({},a,e[a]+r.width))}),{left:u.left||0,right:u.right||0}),y=Object.keys(i).reduce((function(e,t){var r=i[t],a=r.orientation;return r.mirror||r.hide?e:te(te({},e),{},re({},a,p()(e,"".concat(a))+r.height))}),{top:u.top||0,bottom:u.bottom||0}),x=te(te({},y),v),m=x.bottom;h&&(x.bottom+=h.props.height||S.v.defaultProps.height),f&&t&&(x=(0,P.s0)(x,a,r,t));var g=l-x.left-x.right,I=d-x.top-x.bottom;return te(te({brushBottom:m},x),{},{width:Math.max(g,0),height:Math.max(I,0)})}(te(te({},M),{},{props:n,graphicalItems:I}),null==a?void 0:a.legendBBox);Object.keys(M).forEach((function(e){M[e]=f(n,M[e],k,e.replace("Map",""),t)}));var O,w,C,B=M["".concat(g,"Map")],D=(O=B,w=(0,T.lX)(O),{tooltipTicks:C=(0,P.Rh)(w,!1,!0),orderedTooltipTicks:h()(C,(function(e){return e.coordinate})),tooltipAxis:w,tooltipAxisBandSize:(0,P.Hj)(w,C)}),j=L(n,te(te({},M),{},{dataStartIndex:i,dataEndIndex:o,updateId:s,graphicalItems:I,stackGroups:A,offset:k}));return te(te({formattedGraphicalItems:j,graphicalItems:I,offset:k,stackGroups:A},D),M)},F=function(e){function r(e){var n,o,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),re(l=Q(this,r,[e]),"eventEmitterSymbol",Symbol("rechartsEventEmitter")),re(l,"accessibilityManager",new G.k),re(l,"handleLegendBBoxUpdate",(function(e){if(e){var t=l.state,r=t.dataStartIndex,a=t.dataEndIndex,n=t.updateId;l.setState(te({legendBBox:e},X({props:l.props,dataStartIndex:r,dataEndIndex:a,updateId:n},te(te({},l.state),{},{legendBBox:e}))))}})),re(l,"handleReceiveSyncEvent",(function(e,t,r){if(l.props.syncId===e){if(r===l.eventEmitterSymbol&&"function"!=typeof l.props.syncMethod)return;l.applySyncEvent(t)}})),re(l,"handleBrushChange",(function(e){var t=e.startIndex,r=e.endIndex;if(t!==l.state.dataStartIndex||r!==l.state.dataEndIndex){var a=l.state.updateId;l.setState((function(){return te({dataStartIndex:t,dataEndIndex:r},X({props:l.props,dataStartIndex:t,dataEndIndex:r,updateId:a},l.state))})),l.triggerSyncEvent({dataStartIndex:t,dataEndIndex:r})}})),re(l,"handleMouseEnter",(function(e){var t=l.getMouseInfo(e);if(t){var r=te(te({},t),{},{isTooltipActive:!0});l.setState(r),l.triggerSyncEvent(r);var a=l.props.onMouseEnter;s()(a)&&a(r,e)}})),re(l,"triggeredAfterMouseMove",(function(e){var t=l.getMouseInfo(e),r=t?te(te({},t),{},{isTooltipActive:!0}):{isTooltipActive:!1};l.setState(r),l.triggerSyncEvent(r);var a=l.props.onMouseMove;s()(a)&&a(r,e)})),re(l,"handleItemMouseEnter",(function(e){l.setState((function(){return{isTooltipActive:!0,activeItem:e,activePayload:e.tooltipPayload,activeCoordinate:e.tooltipPosition||{x:e.cx,y:e.cy}}}))})),re(l,"handleItemMouseLeave",(function(){l.setState((function(){return{isTooltipActive:!1}}))})),re(l,"handleMouseMove",(function(e){e.persist(),l.throttleTriggeredAfterMouseMove(e)})),re(l,"handleMouseLeave",(function(e){l.throttleTriggeredAfterMouseMove.cancel();var t={isTooltipActive:!1};l.setState(t),l.triggerSyncEvent(t);var r=l.props.onMouseLeave;s()(r)&&r(t,e)})),re(l,"handleOuterEvent",(function(e){var t,r=(0,E.X_)(e),a=p()(l.props,"".concat(r));r&&s()(a)&&a(null!==(t=/.*touch.*/i.test(r)?l.getMouseInfo(e.changedTouches[0]):l.getMouseInfo(e))&&void 0!==t?t:{},e)})),re(l,"handleClick",(function(e){var t=l.getMouseInfo(e);if(t){var r=te(te({},t),{},{isTooltipActive:!0});l.setState(r),l.triggerSyncEvent(r);var a=l.props.onClick;s()(a)&&a(r,e)}})),re(l,"handleMouseDown",(function(e){var t=l.props.onMouseDown;s()(t)&&t(l.getMouseInfo(e),e)})),re(l,"handleMouseUp",(function(e){var t=l.props.onMouseUp;s()(t)&&t(l.getMouseInfo(e),e)})),re(l,"handleTouchMove",(function(e){null!=e.changedTouches&&e.changedTouches.length>0&&l.throttleTriggeredAfterMouseMove(e.changedTouches[0])})),re(l,"handleTouchStart",(function(e){null!=e.changedTouches&&e.changedTouches.length>0&&l.handleMouseDown(e.changedTouches[0])})),re(l,"handleTouchEnd",(function(e){null!=e.changedTouches&&e.changedTouches.length>0&&l.handleMouseUp(e.changedTouches[0])})),re(l,"handleDoubleClick",(function(e){var t=l.props.onDoubleClick;s()(t)&&t(l.getMouseInfo(e),e)})),re(l,"handleContextMenu",(function(e){var t=l.props.onContextMenu;s()(t)&&t(l.getMouseInfo(e),e)})),re(l,"triggerSyncEvent",(function(e){void 0!==l.props.syncId&&D.k.emit(D.D,l.props.syncId,e,l.eventEmitterSymbol)})),re(l,"applySyncEvent",(function(e){var t=l.props,r=t.layout,a=t.syncMethod,n=l.state.updateId,i=e.dataStartIndex,o=e.dataEndIndex;if(void 0!==e.dataStartIndex||void 0!==e.dataEndIndex)l.setState(te({dataStartIndex:i,dataEndIndex:o},X({props:l.props,dataStartIndex:i,dataEndIndex:o,updateId:n},l.state)));else if(void 0!==e.activeTooltipIndex){var s=e.chartX,d=e.chartY,c=e.activeTooltipIndex,p=l.state,u=p.offset,h=p.tooltipTicks;if(!u)return;if("function"==typeof a)c=a(h,e);else if("value"===a){c=-1;for(var f=0;f<h.length;f++)if(h[f].value===e.activeLabel){c=f;break}}var v=te(te({},u),{},{x:u.left,y:u.top}),y=Math.min(s,v.x+v.width),x=Math.min(d,v.y+v.height),m=h[c]&&h[c].value,g=ce(l.state,l.props.data,c),I=h[c]?{x:"horizontal"===r?h[c].coordinate:y,y:"horizontal"===r?x:h[c].coordinate}:oe;l.setState(te(te({},e),{},{activeLabel:m,activeCoordinate:I,activePayload:g,activeTooltipIndex:c}))}else l.setState(e)})),re(l,"renderCursor",(function(e){var r,n=l.state,i=n.isTooltipActive,o=n.activeCoordinate,s=n.activePayload,d=n.offset,c=n.activeTooltipIndex,p=n.tooltipAxisBandSize,u=l.getTooltipEventType(),h=null!==(r=e.props.active)&&void 0!==r?r:i,f=l.props.layout,v=e.key||"_recharts-cursor";return a.createElement(z.b,{key:v,activeCoordinate:o,activePayload:s,activeTooltipIndex:c,chartName:t,element:e,isActive:h,layout:f,offset:d,tooltipAxisBandSize:p,tooltipEventType:u})})),re(l,"renderPolarAxis",(function(e,t,r){var n=p()(e,"type.axisType"),i=p()(l.state,"".concat(n,"Map")),o=e.type.defaultProps,s=void 0!==o?te(te({},o),e.props):e.props,d=i&&i[s["".concat(n,"Id")]];return(0,a.cloneElement)(e,te(te({},d),{},{className:(0,y.A)(n,d.className),key:e.key||"".concat(t,"-").concat(r),ticks:(0,P.Rh)(d,!0)}))})),re(l,"renderPolarGrid",(function(e){var t=e.props,r=t.radialLines,n=t.polarAngles,i=t.polarRadius,o=l.state,s=o.radiusAxisMap,d=o.angleAxisMap,c=(0,T.lX)(s),p=(0,T.lX)(d),u=p.cx,h=p.cy,f=p.innerRadius,v=p.outerRadius;return(0,a.cloneElement)(e,{polarAngles:Array.isArray(n)?n:(0,P.Rh)(p,!0).map((function(e){return e.coordinate})),polarRadius:Array.isArray(i)?i:(0,P.Rh)(c,!0).map((function(e){return e.coordinate})),cx:u,cy:h,innerRadius:f,outerRadius:v,key:e.key||"polar-grid",radialLines:r})})),re(l,"renderLegend",(function(){var e=l.state.formattedGraphicalItems,t=l.props,r=t.children,n=t.width,i=t.height,o=l.props.margin||{},s=n-(o.left||0)-(o.right||0),d=(0,O.g)({children:r,formattedGraphicalItems:e,legendWidth:s,legendContent:u});if(!d)return null;var c=d.item,p=Y(d,K);return(0,a.cloneElement)(c,te(te({},p),{},{chartWidth:n,chartHeight:i,margin:o,onBBoxUpdate:l.handleLegendBBoxUpdate}))})),re(l,"renderTooltip",(function(){var e,t=l.props,r=t.children,n=t.accessibilityLayer,i=(0,E.BU)(r,I.m);if(!i)return null;var o=l.state,s=o.isTooltipActive,d=o.activeCoordinate,c=o.activePayload,p=o.activeLabel,u=o.offset,h=null!==(e=i.props.active)&&void 0!==e?e:s;return(0,a.cloneElement)(i,{viewBox:te(te({},u),{},{x:u.left,y:u.top}),active:h,label:p,payload:h?c:[],coordinate:d,accessibilityLayer:n})})),re(l,"renderBrush",(function(e){var t=l.props,r=t.margin,n=t.data,i=l.state,o=i.offset,s=i.dataStartIndex,d=i.dataEndIndex,c=i.updateId;return(0,a.cloneElement)(e,{key:e.key||"_recharts-brush",onChange:(0,P.HQ)(l.handleBrushChange,e.props.onChange),data:n,x:(0,T.Et)(e.props.x)?e.props.x:o.left,y:(0,T.Et)(e.props.y)?e.props.y:o.top+o.height+o.brushBottom-(r.bottom||0),width:(0,T.Et)(e.props.width)?e.props.width:o.width,startIndex:s,endIndex:d,updateId:"brush-".concat(c)})})),re(l,"renderReferenceElement",(function(e,t,r){if(!e)return null;var n=l.clipPathId,i=l.state,o=i.xAxisMap,s=i.yAxisMap,d=i.offset,c=e.type.defaultProps||{},p=e.props,u=p.xAxisId,h=void 0===u?c.xAxisId:u,f=p.yAxisId,v=void 0===f?c.yAxisId:f;return(0,a.cloneElement)(e,{key:e.key||"".concat(t,"-").concat(r),xAxis:o[h],yAxis:s[v],viewBox:{x:d.left,y:d.top,width:d.width,height:d.height},clipPathId:n})})),re(l,"renderActivePoints",(function(e){var t=e.item,a=e.activePoint,n=e.basePoint,i=e.childIndex,o=e.isRange,s=[],l=t.props.key,d=void 0!==t.item.type.defaultProps?te(te({},t.item.type.defaultProps),t.item.props):t.item.props,c=d.activeDot,p=te(te({index:i,dataKey:d.dataKey,cx:a.x,cy:a.y,r:4,fill:(0,P.Ps)(t.item),strokeWidth:2,stroke:"#fff",payload:a.payload,value:a.value},(0,E.J9)(c,!1)),(0,j._U)(c));return s.push(r.renderActiveDot(c,p,"".concat(l,"-activePoint-").concat(i))),n?s.push(r.renderActiveDot(c,te(te({},p),{},{cx:n.x,cy:n.y}),"".concat(l,"-basePoint-").concat(i))):o&&s.push(null),s})),re(l,"renderGraphicChild",(function(e,t,r){var n=l.filterFormatItem(e,t,r);if(!n)return null;var o=l.getTooltipEventType(),s=l.state,d=s.isTooltipActive,c=s.tooltipAxis,p=s.activeTooltipIndex,u=s.activeLabel,h=l.props.children,f=(0,E.BU)(h,I.m),v=n.props,y=v.points,x=v.isRange,m=v.baseLine,g=void 0!==n.item.type.defaultProps?te(te({},n.item.type.defaultProps),n.item.props):n.item.props,b=g.activeDot,A=g.hide,M=g.activeBar,S=g.activeShape,k=Boolean(!A&&d&&f&&(b||M||S)),O={};"axis"!==o&&f&&"click"===f.props.trigger?O={onClick:(0,P.HQ)(l.handleItemMouseEnter,e.props.onClick)}:"axis"!==o&&(O={onMouseLeave:(0,P.HQ)(l.handleItemMouseLeave,e.props.onMouseLeave),onMouseEnter:(0,P.HQ)(l.handleItemMouseEnter,e.props.onMouseEnter)});var w=(0,a.cloneElement)(e,te(te({},n.props),O));if(k){if(!(p>=0)){var C,B=(null!==(C=l.getItemByXY(l.state.activeCoordinate))&&void 0!==C?C:{graphicalItem:w}).graphicalItem,D=B.item,j=void 0===D?e:D,G=B.childIndex,L=te(te(te({},n.props),O),{},{activeIndex:G});return[(0,a.cloneElement)(j,L),null,null]}var R,z;if(c.dataKey&&!c.allowDuplicatedCategory){var N="function"==typeof c.dataKey?function(e){return"function"==typeof c.dataKey?c.dataKey(e.payload):null}:"payload.".concat(c.dataKey.toString());R=(0,T.eP)(y,N,u),z=x&&m&&(0,T.eP)(m,N,u)}else R=null==y?void 0:y[p],z=x&&m&&m[p];if(S||M){var K=void 0!==e.props.activeIndex?e.props.activeIndex:p;return[(0,a.cloneElement)(e,te(te(te({},n.props),O),{},{activeIndex:K})),null,null]}if(!i()(R))return[w].concat(Z(l.renderActivePoints({item:n,activePoint:R,basePoint:z,childIndex:p,isRange:x})))}return x?[w,null,null]:[w,null]})),re(l,"renderCustomized",(function(e,t,r){return(0,a.cloneElement)(e,te(te({key:"recharts-customized-".concat(r)},l.props),l.state))})),re(l,"renderMap",{CartesianGrid:{handler:se,once:!0},ReferenceArea:{handler:l.renderReferenceElement},ReferenceLine:{handler:se},ReferenceDot:{handler:l.renderReferenceElement},XAxis:{handler:se},YAxis:{handler:se},Brush:{handler:l.renderBrush,once:!0},Bar:{handler:l.renderGraphicChild},Line:{handler:l.renderGraphicChild},Area:{handler:l.renderGraphicChild},Radar:{handler:l.renderGraphicChild},RadialBar:{handler:l.renderGraphicChild},Scatter:{handler:l.renderGraphicChild},Pie:{handler:l.renderGraphicChild},Funnel:{handler:l.renderGraphicChild},Tooltip:{handler:l.renderCursor,once:!0},PolarGrid:{handler:l.renderPolarGrid,once:!0},PolarAngleAxis:{handler:l.renderPolarAxis},PolarRadiusAxis:{handler:l.renderPolarAxis},Customized:{handler:l.renderCustomized}}),l.clipPathId="".concat(null!==(n=e.id)&&void 0!==n?n:(0,T.NF)("recharts"),"-clip"),l.throttleTriggeredAfterMouseMove=v()(l.triggeredAfterMouseMove,null!==(o=e.throttleDelay)&&void 0!==o?o:1e3/60),l.state={},l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(r,e),n=r,l=[{key:"componentDidMount",value:function(){var e,t;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:null!==(e=this.props.margin.left)&&void 0!==e?e:0,top:null!==(t=this.props.margin.top)&&void 0!==t?t:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var e=this.props,t=e.children,r=e.data,a=e.height,n=e.layout,i=(0,E.BU)(t,I.m);if(i){var o=i.props.defaultIndex;if(!("number"!=typeof o||o<0||o>this.state.tooltipTicks.length-1)){var s=this.state.tooltipTicks[o]&&this.state.tooltipTicks[o].value,l=ce(this.state,r,o,s),d=this.state.tooltipTicks[o].coordinate,c=(this.state.offset.top+a)/2,p="horizontal"===n?{x:d,y:c}:{y:d,x:c},u=this.state.formattedGraphicalItems.find((function(e){return"Scatter"===e.item.type.name}));u&&(p=te(te({},p),u.props.points[o].tooltipPosition),l=u.props.points[o].tooltipPayload);var h={activeTooltipIndex:o,isTooltipActive:!0,activeLabel:s,activePayload:l,activeCoordinate:p};this.setState(h),this.renderCursor(i),this.accessibilityManager.setIndex(o)}}}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return this.props.accessibilityLayer?(this.state.tooltipTicks!==t.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==e.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==e.margin&&this.accessibilityManager.setDetails({offset:{left:null!==(r=this.props.margin.left)&&void 0!==r?r:0,top:null!==(a=this.props.margin.top)&&void 0!==a?a:0}}),null):null;var r,a}},{key:"componentDidUpdate",value:function(e){(0,E.OV)([(0,E.BU)(e.children,I.m)],[(0,E.BU)(this.props.children,I.m)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var e=(0,E.BU)(this.props.children,I.m);if(e&&"boolean"==typeof e.props.shared){var t=e.props.shared?"axis":"item";return d.indexOf(t)>=0?t:o}return o}},{key:"getMouseInfo",value:function(e){if(!this.container)return null;var t=this.container,r=t.getBoundingClientRect(),a=(0,k.A3)(r),n={chartX:Math.round(e.pageX-a.left),chartY:Math.round(e.pageY-a.top)},i=r.width/t.offsetWidth||1,o=this.inRange(n.chartX,n.chartY,i);if(!o)return null;var s=this.state,l=s.xAxisMap,d=s.yAxisMap;if("axis"!==this.getTooltipEventType()&&l&&d){var c=(0,T.lX)(l).scale,p=(0,T.lX)(d).scale,u=c&&c.invert?c.invert(n.chartX):null,h=p&&p.invert?p.invert(n.chartY):null;return te(te({},n),{},{xValue:u,yValue:h})}var f=pe(this.state,this.props.data,this.props.layout,o);return f?te(te({},n),f):null}},{key:"inRange",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=this.props.layout,n=e/r,i=t/r;if("horizontal"===a||"vertical"===a){var o=this.state.offset;return n>=o.left&&n<=o.left+o.width&&i>=o.top&&i<=o.top+o.height?{x:n,y:i}:null}var s=this.state,l=s.angleAxisMap,d=s.radiusAxisMap;if(l&&d){var c=(0,T.lX)(l);return(0,C.yy)({x:n,y:i},c)}return null}},{key:"parseEventsOfWrapper",value:function(){var e=this.props.children,t=this.getTooltipEventType(),r=(0,E.BU)(e,I.m),a={};return r&&"axis"===t&&(a="click"===r.props.trigger?{onClick:this.handleClick}:{onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu}),te(te({},(0,j._U)(this.props,this.handleOuterEvent)),a)}},{key:"addListener",value:function(){D.k.on(D.D,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){D.k.removeListener(D.D,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(e,t,r){for(var a=this.state.formattedGraphicalItems,n=0,i=a.length;n<i;n++){var o=a[n];if(o.item===e||o.props.key===e.key||t===(0,E.Mn)(o.item.type)&&r===o.childIndex)return o}return null}},{key:"renderClipPath",value:function(){var e=this.clipPathId,t=this.state.offset,r=t.left,n=t.top,i=t.height,o=t.width;return a.createElement("defs",null,a.createElement("clipPath",{id:e},a.createElement("rect",{x:r,y:n,height:i,width:o})))}},{key:"getXScales",value:function(){var e=this.state.xAxisMap;return e?Object.entries(e).reduce((function(e,t){var r=H(t,2),a=r[0],n=r[1];return te(te({},e),{},re({},a,n.scale))}),{}):null}},{key:"getYScales",value:function(){var e=this.state.yAxisMap;return e?Object.entries(e).reduce((function(e,t){var r=H(t,2),a=r[0],n=r[1];return te(te({},e),{},re({},a,n.scale))}),{}):null}},{key:"getXScaleByAxisId",value:function(e){var t;return null===(t=this.state.xAxisMap)||void 0===t||null===(t=t[e])||void 0===t?void 0:t.scale}},{key:"getYScaleByAxisId",value:function(e){var t;return null===(t=this.state.yAxisMap)||void 0===t||null===(t=t[e])||void 0===t?void 0:t.scale}},{key:"getItemByXY",value:function(e){var t=this.state,r=t.formattedGraphicalItems,a=t.activeItem;if(r&&r.length)for(var n=0,i=r.length;n<i;n++){var o=r[n],s=o.props,l=o.item,d=void 0!==l.type.defaultProps?te(te({},l.type.defaultProps),l.props):l.props,c=(0,E.Mn)(l.type);if("Bar"===c){var p=(s.data||[]).find((function(t){return(0,M.J)(e,t)}));if(p)return{graphicalItem:o,payload:p}}else if("RadialBar"===c){var u=(s.data||[]).find((function(t){return(0,C.yy)(e,t)}));if(u)return{graphicalItem:o,payload:u}}else if((0,R.NE)(o,a)||(0,R.nZ)(o,a)||(0,R.xQ)(o,a)){var h=(0,R.GG)({graphicalItem:o,activeTooltipItem:a,itemData:d.data}),f=void 0===d.activeIndex?h:d.activeIndex;return{graphicalItem:te(te({},o),{},{childIndex:f}),payload:(0,R.xQ)(o,a)?d.data[h]:o.props.data[h]}}}return null}},{key:"render",value:function(){var e=this;if(!(0,E.Me)(this))return null;var t,r,n=this.props,i=n.children,o=n.className,s=n.width,l=n.height,d=n.style,c=n.compact,p=n.title,u=n.desc,h=Y(n,U),f=(0,E.J9)(h,!1);if(c)return a.createElement(N.DR,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},a.createElement(m.u,_({},f,{width:s,height:l,title:p,desc:u}),this.renderClipPath(),(0,E.ee)(i,this.renderMap)));this.props.accessibilityLayer&&(f.tabIndex=null!==(t=this.props.tabIndex)&&void 0!==t?t:0,f.role=null!==(r=this.props.role)&&void 0!==r?r:"application",f.onKeyDown=function(t){e.accessibilityManager.keyboardEvent(t)},f.onFocus=function(){e.accessibilityManager.focus()});var v=this.parseEventsOfWrapper();return a.createElement(N.DR,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},a.createElement("div",_({className:(0,y.A)("recharts-wrapper",o),style:te({position:"relative",cursor:"default",width:s,height:l},d)},v,{ref:function(t){e.container=t}}),a.createElement(m.u,_({},f,{width:s,height:l,title:p,desc:u,style:ie}),this.renderClipPath(),(0,E.ee)(i,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}],l&&W(n.prototype,l),c&&W(n,c),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,l,c}(a.Component);re(F,"displayName",t),re(F,"defaultProps",te({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},w)),re(F,"getDerivedStateFromProps",(function(e,t){var r=e.dataKey,a=e.data,n=e.children,o=e.width,s=e.height,l=e.layout,d=e.stackOffset,c=e.margin,p=t.dataStartIndex,u=t.dataEndIndex;if(void 0===t.updateId){var h=he(e);return te(te(te({},h),{},{updateId:0},X(te(te({props:e},h),{},{updateId:0}),t)),{},{prevDataKey:r,prevData:a,prevWidth:o,prevHeight:s,prevLayout:l,prevStackOffset:d,prevMargin:c,prevChildren:n})}if(r!==t.prevDataKey||a!==t.prevData||o!==t.prevWidth||s!==t.prevHeight||l!==t.prevLayout||d!==t.prevStackOffset||!(0,B.b)(c,t.prevMargin)){var f=he(e),v={chartX:t.chartX,chartY:t.chartY,isTooltipActive:t.isTooltipActive},y=te(te({},pe(t,a,l)),{},{updateId:t.updateId+1}),x=te(te(te({},f),v),y);return te(te(te({},x),X(te({props:e},x),t)),{},{prevDataKey:r,prevData:a,prevWidth:o,prevHeight:s,prevLayout:l,prevStackOffset:d,prevMargin:c,prevChildren:n})}if(!(0,E.OV)(n,t.prevChildren)){var m,g,I,b,A=(0,E.BU)(n,S.v),M=A&&null!==(m=null===(g=A.props)||void 0===g?void 0:g.startIndex)&&void 0!==m?m:p,k=A&&null!==(I=null===(b=A.props)||void 0===b?void 0:b.endIndex)&&void 0!==I?I:u,T=M!==p||k!==u,P=!i()(a)&&!T?t.updateId:t.updateId+1;return te(te({updateId:P},X(te(te({props:e},t),{},{updateId:P,dataStartIndex:M,dataEndIndex:k}),t)),{},{prevChildren:n,dataStartIndex:M,dataEndIndex:k})}return null})),re(F,"renderActiveDot",(function(e,t,r){var n;return n=(0,a.isValidElement)(e)?(0,a.cloneElement)(e,t):s()(e)?e(t):a.createElement(A.c,t),a.createElement(g.W,{className:"recharts-active-dot",key:r},n)}));var V=(0,a.forwardRef)((function(e,t){return a.createElement(F,_({},e,{ref:t}))}));return V.displayName=F.displayName,V}}}]);