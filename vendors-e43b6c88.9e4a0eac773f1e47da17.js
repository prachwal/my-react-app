"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[696],{7275:(e,t,r)=>{r.d(t,{g:()=>w});var n=r(96540),o=r(1882),i=r.n(o),a=r(34164),c=r(6634),l=r(49303),u=r(65787),s=r(98940);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,O(n.key),n)}}function b(e,t,r){return t=d(t),function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,v()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function g(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:t+""}var j=32,w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,o=[{key:"renderIcon",value:function(e){var t=this.props.inactiveColor,r=16,o=j/6,i=j/3,a=e.inactive?t:e.color;if("plainline"===e.type)return n.createElement("line",{strokeWidth:4,fill:"none",stroke:a,strokeDasharray:e.payload.strokeDasharray,x1:0,y1:r,x2:j,y2:r,className:"recharts-legend-icon"});if("line"===e.type)return n.createElement("path",{strokeWidth:4,fill:"none",stroke:a,d:"M0,".concat(r,"h").concat(i,"\n            A").concat(o,",").concat(o,",0,1,1,").concat(2*i,",").concat(r,"\n            H").concat(j,"M").concat(2*i,",").concat(r,"\n            A").concat(o,",").concat(o,",0,1,1,").concat(i,",").concat(r),className:"recharts-legend-icon"});if("rect"===e.type)return n.createElement("path",{stroke:"none",fill:a,d:"M0,".concat(4,"h").concat(j,"v").concat(24,"h").concat(-32,"z"),className:"recharts-legend-icon"});if(n.isValidElement(e.legendIcon)){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return delete c.legendIcon,n.cloneElement(e.legendIcon,c)}return n.createElement(u.i,{fill:a,cx:r,cy:r,size:j,sizeType:"diameter",type:e.type})}},{key:"renderItems",value:function(){var e=this,t=this.props,r=t.payload,o=t.iconSize,u=t.layout,f=t.formatter,y=t.inactiveColor,m={x:0,y:0,width:j,height:j},b={display:"horizontal"===u?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return r.map((function(t,r){var u=t.formatter||f,d=(0,a.A)(g(g({"recharts-legend-item":!0},"legend-item-".concat(r),!0),"inactive",t.inactive));if("none"===t.type)return null;var h=i()(t.value)?null:t.value;(0,c.R)(!i()(t.value),'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');var O=t.inactive?y:t.color;return n.createElement("li",p({className:d,style:b,key:"legend-item-".concat(r)},(0,s.XC)(e.props,t,r)),n.createElement(l.u,{width:o,height:o,viewBox:m,style:v},e.renderIcon(t)),n.createElement("span",{className:"recharts-legend-item-text",style:{color:O}},u?u(h,t,r):h))}))}},{key:"render",value:function(){var e=this.props,t=e.payload,r=e.layout,o=e.align;if(!t||!t.length)return null;var i={padding:0,margin:0,textAlign:"horizontal"===r?o:"left"};return n.createElement("ul",{className:"recharts-default-legend",style:i},this.renderItems())}}],o&&m(r.prototype,o),f&&m(r,f),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o,f}(n.PureComponent);g(w,"displayName","Legend"),g(w,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"})},18689:(e,t,r)=>{r.d(t,{E:()=>h});var n=r(96540),o=r(33031),i=r.n(o),a=r(69843),c=r.n(a),l=r(34164),u=r(59744);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){var n;return n=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==s(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return Array.isArray(e)&&(0,u.vh)(e[0])&&(0,u.vh)(e[1])?e.join(" ~ "):e}var h=function(e){var t=e.separator,r=void 0===t?" : ":t,o=e.contentStyle,a=void 0===o?{}:o,s=e.itemStyle,y=void 0===s?{}:s,m=e.labelStyle,v=void 0===m?{}:m,h=e.payload,g=e.formatter,O=e.itemSorter,j=e.wrapperClassName,w=e.labelClassName,P=e.label,S=e.labelFormatter,E=e.accessibilityLayer,N=void 0!==E&&E,k=b({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},a),A=b({margin:0},v),C=!c()(P),x=C?P:"",D=(0,l.A)("recharts-default-tooltip",j),I=(0,l.A)("recharts-tooltip-label",w);C&&S&&null!=h&&(x=S(P,h));var z=N?{role:"status","aria-live":"assertive"}:{};return n.createElement("div",f({className:D,style:k},z),n.createElement("p",{className:I,style:A},n.isValidElement(x)?x:"".concat(x)),function(){if(h&&h.length){var e=(O?i()(h,O):h).map((function(e,t){if("none"===e.type)return null;var o=b({display:"block",paddingTop:4,paddingBottom:4,color:e.color||"#000"},y),i=e.formatter||g||d,a=e.value,c=e.name,l=a,s=c;if(i&&null!=l&&null!=s){var f=i(a,c,e,t,h);if(Array.isArray(f)){var m=p(f,2);l=m[0],s=m[1]}else l=f}return n.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(t),style:o},(0,u.vh)(s)?n.createElement("span",{className:"recharts-tooltip-item-name"},s):null,(0,u.vh)(s)?n.createElement("span",{className:"recharts-tooltip-item-separator"},r):null,n.createElement("span",{className:"recharts-tooltip-item-value"},l),n.createElement("span",{className:"recharts-tooltip-item-unit"},e.unit||""))}));return n.createElement("ul",{className:"recharts-tooltip-item-list",style:{padding:0,margin:0}},e)}return null}())}},72050:(e,t,r)=>{r.d(t,{f:()=>n});var n=function(e){return null};n.displayName="Cell"},80279:(e,t,r)=>{r.d(t,{Y:()=>f});var n=r(96540),o=r(1882),i=r.n(o),a=r(86069),c=r(6634),l=["component"];function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e){var t,r=e.component,o=s(e,l);return(0,n.isValidElement)(r)?t=(0,n.cloneElement)(r,o):i()(r)?t=(0,n.createElement)(r,o):(0,c.R)(!1,"Customized's props `component` must be React.element or Function, but got %s.",u(r)),n.createElement(a.W,{className:"recharts-customized-wrapper"},t)}f.displayName="Customized"},99848:(e,t,r)=>{r.d(t,{b:()=>d});var n=r(96540),o=r(34164),i=r(45249),a=r(35862),c=r(74613),l=r(34723),u=r(68334),s=r(58522),f=r(41389),p=r(94501);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){var n;return n=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==y(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t,r,y,m=e.element,v=e.tooltipEventType,d=e.isActive,h=e.activeCoordinate,g=e.activePayload,O=e.offset,j=e.activeTooltipIndex,w=e.tooltipAxisBandSize,P=e.layout,S=e.chartName,E=null!==(t=m.props.cursor)&&void 0!==t?t:null===(r=m.type.defaultProps)||void 0===r?void 0:r.cursor;if(!m||!E||!d||!h||"ScatterChart"!==S&&"axis"!==v)return null;var N=i.I;if("ScatterChart"===S)y=h,N=a.F;else if("BarChart"===S)y=(0,c.C)(P,h,O,w),N=l.M;else if("radial"===P){var k=(0,u.H)(h),A=k.cx,C=k.cy,x=k.radius;y={cx:A,cy:C,startAngle:k.startAngle,endAngle:k.endAngle,innerRadius:x,outerRadius:x},N=s.h}else y={points:(0,f.K)(P,h,O)},N=i.I;var D=b(b(b(b({stroke:"#ccc",pointerEvents:"none"},O),y),(0,p.J9)(E,!1)),{},{payload:g,payloadIndex:j,className:(0,o.A)("recharts-tooltip-cursor",E.className)});return(0,n.isValidElement)(E)?(0,n.cloneElement)(E,D):(0,n.createElement)(N,D)}}}]);