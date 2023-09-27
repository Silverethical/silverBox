"use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function define(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{define({},"")}catch(e){define=function(e,t,n){return e[t]=n}}function wrap(e,t,n,r){var i=t&&t.prototype instanceof Generator?t:Generator,a=Object.create(i.prototype),l=new Context(r||[]);return o(a,"_invoke",{value:makeInvokeMethod(e,n,l)}),a}function tryCatch(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=wrap;var c={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var s={};define(s,i,(function(){return this}));var u=Object.getPrototypeOf,d=u&&u(u(values([])));d&&d!==t&&n.call(d,i)&&(s=d);var v=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(s);function defineIteratorMethods(e){["next","throw","return"].forEach((function(t){define(e,t,(function(e){return this._invoke(t,e)}))}))}function AsyncIterator(e,t){function invoke(o,r,i,a){var l=tryCatch(e[o],e,r);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){invoke("next",e,i,a)}),(function(e){invoke("throw",e,i,a)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return invoke("throw",e,i,a)}))}a(l.arg)}var r;o(this,"_invoke",{value:function(e,n){function callInvokeWithMethodAndArg(){return new t((function(t,o){invoke(e,n,t,o)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,t,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return doneResult()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var l=maybeInvokeDelegate(a,n);if(l){if(l===c)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=tryCatch(e,t,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===c)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function maybeInvokeDelegate(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,maybeInvokeDelegate(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),c;var r=tryCatch(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=void 0,next.done=!0,next};return r.next=r}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(v,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,define(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,a,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},defineIteratorMethods(v),define(v,l,"Generator"),define(v,i,(function(){return this})),define(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function next(){for(;n.length;){var e=n.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function handle(n,o){return i.type="throw",i.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],i=r.completion;if("root"===r.tryLoc)return handle("end");if(r.tryLoc<=this.prev){var a=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(a&&l){if(this.prev<r.catchLoc)return handle(r.catchLoc,!0);if(this.prev<r.finallyLoc)return handle(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return handle(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return handle(r.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),resetTryEntry(n),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;resetTryEntry(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:values(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}function asyncGeneratorStep(e,t,n,o,r,i,a){try{var l=e[i](a),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(o,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function _next(e){asyncGeneratorStep(i,o,r,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,o,r,_next,_throw,"throw",e)}_next(void 0)}))}}function _defineProperty(e,t,n){return(t=function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function silverBoxDisableScroll(e){document.querySelectorAll(e).length<=0?document.body.classList.remove("stop-scrolling"):document.body.classList.add("stop-scrolling")}function silverBoxClose(e){var t=e.uniqueID,n=e.timer,o=e.onClose,r=e.element;n?function silverBoxCloseAfterTimeout(e){var t=document.querySelector('[data-unique-id="'.concat(e,'"]'));t&&t.remove();silverBoxDisableScroll(".silverBox-overlay")}(t):r&&r.closest(".silverBox-container").remove(),o&&o()}function silverBoxButtonComponent(e,t,n,o){var r=document.createElement("button");e.onClick&&r.addEventListener("click",e.onClick),Object.entries(e.dataAttribute||{}).map((function(e){var t=_slicedToArray(e,2),n=t[0],o=t[1];r.setAttribute("data-".concat(n),o)})),e.bgColor&&(r.style.backgroundColor=e.bgColor),e.borderColor&&(r.style.borderColor=e.borderColor),e.textColor&&(r.style.color=e.textColor),e.disabled&&(r.disabled=e.disabled),r.classList.add("silverBox-button",t),e.id&&(r.id=e.id),e.className&&(r.classList+=" ".concat(e.className)),!1!==e.closeOnClick&&r.addEventListener("click",(function(){silverBoxClose({onClose:o,element:r})})),!1!==e.loadingAnimation&&r.addEventListener("click",(function(){r.classList.add("silverBox-loading-button")}));var i=document.createElement("span");return i.classList="silverBox-button-text",i.textContent=e.text?e.text:n,r.append(createSilverBoxButtonIcon(e.iconStart||""),i,function silverBoxLoadingAnimation(){var e=document.createElement("span");return e.classList.add("silverBox-button-loading-animation"),e}(),createSilverBoxButtonIcon(e.iconEnd||"")),r}function createSilverBoxButtonIcon(e){if(!e)return"";var t=document.createElement("img");return t.src=e,t.classList="silverBox-button-icon",t}function silverBoxInputComponent(e){var t=e.type,n=e.select,o=e.numberOnly,r=e.placeHolder,i=e.readOnly,a=e.label,l=e.hint,c=e.width,s=e.height,u=e.maxLength,d=e.textAlign,v=e.fontSize,m=e.placeHolderFontSize,p=e.name,f=e.className,h=e.id,y=e.value,x=document.createElement("div");x.classList="silverBox-input-wrapper";var g=document.createElement("label");if(g.textContent=a,n){var b=document.createElement("select");b.classList="silverBox-select",n.map((function(e){var t,n,o,r=document.createElement("option");r.value=null!==(t=e.value)&&void 0!==t?t:"",r.textContent=null!==(n=null!==(o=e.text)&&void 0!==o?o:e.value)&&void 0!==n?n:"",e.disabled&&r.setAttribute("disabled",""),e.selected&&r.setAttribute("selected",""),b.append(r)})),x.append(b)}else{var C,B="textarea"===t.toLowerCase(),L=document.createElement(B?"textarea":"input");!B&&t&&L.setAttribute("type",t),L.value=null!=y?y:"",r&&(L.placeholder=r),u&&(L.maxLength=u),d&&(L.style.textAlign=d),c&&(L.style.width=c),s&&(L.style.height=s),v&&(L.style.fontSize=v),o&&L.addEventListener("input",(function(){L.value=L.value.replace(/[۰-۹]/g,(function(e){return"۰۱۲۳۴۵۶۷۸۹.".indexOf(e)})).replace(/[^0-9.]/g,"")}));var w=null!==(C=null!=m?m:v)&&void 0!==C&&C;!1!==w&&L.style.setProperty("--silverBox-placeHolder-fontSize",w),p&&(L.name=p),f&&(L.classList+=" ".concat(f)),h&&(L.id=h),c&&(x.style.width="fit-content"),i&&L.setAttribute("readonly",""),a&&x.append(g),x.append(L)}var E=document.createElement("span");return E.classList="silverBox-input-hint",E.textContent=null!=l?l:"",l&&x.append(E),x}function appendingToModal(e,t){Object.keys(t).map((function(n){t[n]&&e.append(t[n])}))}var e=function silverBoxIconsComponent(e){var n=e.alertIcon,o=e.customIcon,r=e.customSvgIcon,i=e.isCentred,a=void 0!==i&&i,l=e.customIconClassName,c=e.customIconId,s=e.customSvgIconClassName,u=e.customSvgIconId;if(o)return silverBoxCreateCustomIcon(o,a,l,c,!1).cloneNode(!0);if(r)return silverBoxCreateCustomIcon(r,a,s,u,!0).cloneNode(!0);if(t[n]){if("closeButton"===n)return t[n];var d=t[n].cloneNode(!0);return a&&d.classList.add("silverBox-centered-icon"),d}return null},t={warning:createIcon("silverBox-warning","!"),success:createIcon("silverBox-tick-mark","","inside"),info:createIcon("silverBox-info","i"),error:createIcon("silverBox-error","","x"),question:createIcon("silverBox-question","?"),closeButton:'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/><line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/></svg>'};function createIcon(e,t,n){var o=document.createElement("div");if(o.classList=e,o.classList.add("silverBox-icon","silverBox-default-icon"),n){var r=document.createElement("div");r.classList=n,o.appendChild(r)}else if(t){var i=document.createElement("span");i.textContent=t,o.appendChild(i)}return o}function silverBoxCreateCustomIcon(e,t,n,o,r){var i=document.createElement("div");if(i.classList.add("silverBox-image-wrapper"),t&&i.classList.add("silverBox-centered-icon"),o&&(i.id=o),n&&(i.classList+=" ".concat(n)),r)i.innerHTML+=e;else{var a=document.createElement("img");a.src=e,a.classList="silverBox-icon silverBox-custom-icon",i.append(a)}return i}var n=0;function silverBoxUniqueNumberMaker(e){var t=Math.floor(Math.random()*e+1);if(n!==t)return n=t;silverBoxUniqueNumberMaker(e)}var o=function validateDuration(e){return Number(e)?"".concat(e,"ms"):parseInt(e)||parseFloat(e)?e:"300ms"},r=function silverBoxTimerBar(e){var t=e.uniqueID,n=e.timerConfig,r=e.onClose;"showBar"in n||(n.showBar=!0),"pauseOnHover"in n||(n.pauseOnHover=!0);var i=document.querySelectorAll(".silverBox");i=i[i.length-1];var a=document.createElement("div");a.classList="timer-bar";var l=document.createElement("div");l.classList="timer-bar-wrapper",l.append(a),a.style.animation="timer ".concat(o(n.timer)," linear"),!1!==(null==n?void 0:n.pauseOnHover)&&i&&(i.addEventListener("mouseover",(function(){a.style.animationPlayState="paused"})),i.addEventListener("mouseout",(function(){a.style.animationPlayState="running"}))),i&&null!=n&&n.showBar?(i.append(l),a.addEventListener("animationend",(function(){silverBoxClose({uniqueID:t,timer:n.timer,onClose:r})}))):setTimeout((function(){silverBoxClose({uniqueID:t,timer:n.timer,onClose:r})}),n.timer)},i=function applyAnimation(e){var t={name:"popUp",duration:"300ms",timingFunction:"linear",delay:"0ms",iterationCount:"1",direction:"normal",fillMode:"none"},n=_objectSpread2(_objectSpread2(_objectSpread2({},t),e),{},{duration:o(e.duration)||t.duration,delay:o(e.delay)||t.delay}),r=n.name,i=n.duration,a=n.timingFunction,l=n.delay,c=n.iterationCount,s=n.direction,u=n.fillMode;return"".concat(r," ").concat(i," ").concat(a," ").concat(l," ").concat(c," ").concat(s," ").concat(u)};function silverBox(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,o;if(0===Object.keys(t).length)throw new Error("You can't create silverBox with an empty config.");null===(n=t.preOpen)||void 0===n||n.call(t),"removeSilverBox"in t&&function removeAllSilverBoxes(e){e=e.toLowerCase();var t=document.querySelectorAll(".silverBox-container");if("first"===e&&(e=1),"last"===e&&(e=t.length),"all"===e)for(var n=0;n<t.length;n++)t[n].remove();else Number(e)>0&&t[Number(e)-1].remove()}(t.removeSilverBox),"removeLoading"in t&&function silverBoxRemoveLoadings(e){var t=document.querySelectorAll(".silverBox-button-wrapper");if(e.toLowerCase(),"first"===e&&(e=1),"last"===e&&(e=t.length),"all"===e)for(var n=0;n<t.length;n++)t[n].childNodes.forEach((function(e){e.classList.remove("silverBox-loading-button")}));else Number(e)>0&&t[Number(e)-1].childNodes.forEach((function(e){e.classList.remove("silverBox-loading-button")}))}(t.removeLoading);var a={},l={},c=document.createElement("div");c.classList="silverBox-input-container";var s=document.createElement("div");s.classList="silverBox-button-wrapper";var u=function silverBoxHeaderComponent(t){var n,o,r,i,a=t.titleConfig,l=t.icon,c=t.showCloseButton,s=t.centerContent,u=t.onCloseConfig,d=document.createElement("div");d.classList.add("silverBox-header-wrapper");var v=document.createElement("div");v.classList.add("silverBox-icon-wrapper");var m=document.createElement("h2");if(m.classList.add("silverBox-header-title"),"string"==typeof a&&(a={text:a}),null!==(n=a)&&void 0!==n&&n.customIcon){var p,f,h=e({customIcon:a.customIcon});null!==(p=a)&&void 0!==p&&p.customIconId&&(h.children[0].id=a.customIconId),null!==(f=a)&&void 0!==f&&f.customIconClassName&&(h.children[0].classList+=" ".concat(a.customIconClassName)),m.append(h)}else if(null!==(o=a)&&void 0!==o&&o.customSvgIcon){var y,x,g=e({customSvgIcon:a.customSvgIcon});null!==(y=a)&&void 0!==y&&y.customSvgIconId&&(g.children[0].id=a.customSvgIconId),null!==(x=a)&&void 0!==x&&x.customSvgIconClassName&&(g.children[0].classList+=" ".concat(a.customSvgIconClassName)),m.append(g)}else if(null!==(r=a)&&void 0!==r&&r.alertIcon){var b=e({alertIcon:a.alertIcon});m.append(b)}if(m.childElementCount>=1&&m.classList.add("silverBox-title-has-icon"),s&&m.classList.add("silverBox-title-centred"),null!==(i=a)&&void 0!==i&&i.text){var C=document.createElement("span");m.classList.add("silverBox-title-text"),C.textContent=a.text,m.append(C)}var B=document.createElement("span");return B.innerHTML=e({alertIcon:"closeButton"}),B.classList.add("silverBox-close-button"),B.addEventListener("click",(function(){silverBoxClose({onClose:u,element:B})})),l&&v.appendChild(l),c&&v.appendChild(B),v.childElementCount>=1&&d.append(v),a&&d.appendChild(m),d}({titleConfig:t.title,icon:e(function iconsConfig(){return{alertIcon:t.alertIcon,customIcon:t.customIcon,isCentred:t.centerContent,customIconClassName:t.customIconClassName,customIconId:t.customIconId,customSvgIcon:t.customSvgIcon,customSvgIconClassName:t.customSvgIconClassName,customSvgIconId:t.customSvgIconId}}()),showCloseButton:t.showCloseButton,centerContent:t.centerContent,onCloseConfig:t.onClose});if(0!==u.childElementCount&&(a.header=u),"input"in t){var d=function inputConfig(e){return{type:"type"in e?e.type:"",select:e.select,numberOnly:e.numberOnly,hint:e.hint,label:e.label,placeHolder:e.placeHolder,readOnly:e.readOnly,width:e.width,height:e.height,maxLength:e.maxLength,textAlign:e.textAlign,fontSize:e.fontSize,placeHolderFontSize:e.placeHolderFontSize,name:e.name,className:e.className,id:e.id,value:e.value}},v=function multiplyByCheck(e){"multiplyBy"in e||(e.multiplyBy=1);for(var t=1;t<=e.multiplyBy;t++)c.append(silverBoxInputComponent(d(e)))};Array.isArray(t.input)?t.input.forEach((function(e){return v(e)})):v(t.input),c.childElementCount&&(l.input=c)}for(var m=0,p=[{type:"confirmButton",text:"Confirm"},{type:"denyButton",text:"Deny"},{type:"cancelButton",text:"Cancel"},{type:"customButton",text:"Custom"}];m<p.length;m++){var f=p[m];f.type in t&&!1!==t[f.type].showButton&&s.append(silverBoxButtonComponent(t[f.type],"silverBox-".concat(f.text.toLowerCase(),"-button"),f.text,t.onClose))}"buttonsDirection"in t&&(s.style.direction=t.buttonsDirection),s.childElementCount&&(l.button=s);var h=function silverBoxBodyComponent(e){var t,n=e.htmlContent,o=e.bodyText,r=e.components,i=e.isInput,a=document.createElement("div");if(a.classList="silverBox-body-wrapper",n){var l=document.createElement("div");l.classList.add("silverBox-body-description"),n.outerHTML?l.append(n):l.innerHTML=n,a.appendChild(l)}else if(o){var c=document.createElement("p");c.textContent=o,c.classList.add("silverBox-body-description"),a.appendChild(c)}return i&&((t=document.createElement("form")).classList.add("silverBox-form"),t.addEventListener("submit",(function(e){e.preventDefault()})),a.append(t)),appendingToModal(t||a,r),a}({htmlContent:t.html,bodyText:t.text,components:l,isInput:t.input});h.childElementCount&&(a.body=h),t.footer&&(a.footer=function silverBoxFooterComponent(e){var t=e.footerContent,n=document.createElement("div");n.classList.add("silverBox-footer-wrapper");var o=document.createElement("hr");return n.append(o),n.innerHTML+=t,n}({footerContent:t.footer}));var y,x=function modalSampleConfig(e){if(0===Object.keys(a).length)return null;var n=function createSilverBox(e){var t=e.direction,n=e.components,o=e.positionClassName,r=e.theme,i=void 0===r?"light":r,a=e.centerContent,l=document.createElement("div");l.classList.add("silverBox-container",o),l.dataset.theme=i;var c=document.createElement("div");if(c.classList.add("silverBox"),t&&c.setAttribute("dir",t),a&&(c.style.textAlign="center"),appendingToModal(c,n),0!==c.childElementCount&&l.append(c),0!==l.childElementCount)return l}({components:a,positionClassName:e,theme:t.theme,direction:t.direction,centerContent:t.centerContent});return document.body.append(n),n}("position"in t?"silverBox-".concat(t.position):"silverBox-overlay"),g=document.querySelectorAll(".silverBox-container");g=g[g.length-1],h.childElementCount&&(y=silverBoxUniqueNumberMaker(1e6)),g&&g.setAttribute("data-unique-id",y),"timer"in t&&(t.timer,t.timer={timer:t.timer},r({uniqueID:y,timerConfig:t.timer,pauseTimerOnHover:t.pauseTimerOnHover,showTimerBar:t.showTimerBar,onClose:t.onClose}));var b=document.querySelectorAll(".silverBox-overlay");if((b=b[b.length-1])&&!1!==t.closeOnOverlayClick&&b.addEventListener("click",(function(e){e.target===b&&silverBoxClose({onClose:t.onClose,element:b}),silverBoxDisableScroll(".silverBox-overlay")})),silverBoxDisableScroll(".silverBox-overlay"),"silverBoxId"in t&&(g.id=t.silverBoxId),"silverBoxClassName"in t&&(g.classList+=" ".concat(t.silverBoxClassName)),"animation"in t){var C=document.querySelector('.silverBox-container[data-unique-id="'.concat(y,'"] .silverBox'));C&&(C.style.animation=Array.isArray(t.animation)?t.animation.map((function(e){return i(e)})).join(", "):i(t.animation))}return null===(o=t.didOpen)||void 0===o||o.call(t),null===x?null:{remove:function remove(){document.body.removeChild(x)},removeLoading:function removeLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";x.querySelectorAll("button".concat(e)).forEach((function(e){e.classList.remove("silverBox-loading-button")}))}}}catch(e){throw e}}function silverBoxDocumentationTableComponent(e,t){var n=document.querySelector(e);n.append(function silverBoxTableHeader(){var e=document.createElement("div");e.classList.add("silverBox-tableRow","silverBox-tableRowHeader");var t=document.createElement("div");t.classList.add("silverBox-tableColumn","tableHeaderColumn"),t.textContent="Name";var n=document.createElement("div");n.classList.add("silverBox-tableColumn","tableHeaderColumn"),n.textContent="Type";var o=document.createElement("div");o.classList.add("silverBox-tableColumn","tableHeaderColumn"),o.textContent="Default";var r=document.createElement("div");return r.classList.add("silverBox-tableColumn","tableHeaderColumn"),r.textContent="Description",e.append(t),e.append(n),e.append(o),e.append(r),e}());var o=function silverBoxTableRowConfig(e,t,n){return function silverBoxTableRow(e){var t=e.name,n=e.type,o=e.description,r=e.defaultValue,i=e.id,a=e.config,l=document.createElement("div");l.classList.add("silverBox-tableRow");var c=document.createElement("a");c.classList.add("silverBox-tableColumn");var s=document.createElement("span");s.classList.add("silverBox-document-argument"),s.textContent=t,c.append(s);var u=document.createElement("div");u.classList.add("silverBox-tableColumn");var d=document.createElement("span");d.classList.add("silverBox-document-type"),d.textContent=n,u.append(d),c.onclick=function(){!function copyArgument(e){navigator.clipboard.writeText(e.textContent)}(c),silverBox({timer:1500,theme:"dark",position:"top-left",title:{text:"Argument copied."},centerContent:!0})};var v=document.createElement("div");v.classList.add("silverBox-tableColumn","silverBox-document-description");var m=document.createElement("span");m.classList.add("silverBox-explanation-span"),m.innerHTML=function replaceQuotedTextWithSpan(e){for(var t=!1,n="",o=0;o<e.length;o++)'"'===e[o]?(n+=t?"</span>":'<span class="silverBox-explanation-special-values">',t=!t):n+=e[o];return t&&(n+="</span>"),n}(o),v.append(m);var p=document.createElement("div");p.classList.add("silverBox-tableColumn","silverBox-document-default");var f=document.createElement("span");"emptyDefaultValue"!=r&&(f.classList.add("silverBox-document-string"),f.textContent=r,""===r&&(f.classList.add("silverBox-document-string"),f.textContent='" "'));if(p.append(f),"noConfig"==i){if(c.setAttribute("href","#"+t),l.id="".concat(t),"config"in a){var h=document.createElement("div");h.classList.add("silverBox-documentConfig-indicator"),c.append(h)}}else"hasConfig"==i&&(c.setAttribute("href","#".concat(a.configName).concat(t)),l.id="".concat(a.configName).concat(t));return l.append(c),l.append(u),l.append(p),l.append(v),l}({name:e.configName,type:e.type,description:e.explanation,defaultValue:e.defaultValue,id:t,config:n})};t.forEach((function(e){if(n.append(o(e,"noConfig",e)),"config"in e){var t=document.createElement("div");t.classList.add("silverBox-document-has-config"),e.config.forEach((function(n){var r=o(n,"hasConfig",e);t.append(r)})),n.append(t)}})),function toggleConfig(){for(var e=document.querySelectorAll(".silverBox-document-has-config"),t=document.querySelectorAll(".silverBox-documentConfig-indicator"),n=function _loop(n){t[n].addEventListener("click",(function(){e[n].classList.contains("silverBox-hide")?(e[n].classList.remove("silverBox-hide"),t[n].classList.remove("silverBox-hide")):(e[n].classList.add("silverBox-hide"),t[n].classList.add("silverBox-hide"))}))},o=0;o<e.length;o++)n(o)}()}var a=document.querySelector("#hamburger-menu"),l=document.querySelector("#logo"),c=document.querySelector("#silverBox-header nav ul");a.addEventListener("click",(function(){c.classList.contains("show")?(a.classList.remove("rotate"),c.classList.remove("show"),l.classList.remove("hide")):(a.classList.add("rotate"),c.classList.add("show"),l.classList.add("hide"))}));var s=document.querySelector("#silverBox-header");window.addEventListener("scroll",(function(){window.scrollY>50?s.classList.add("scrolled"):s.classList.remove("scrolled")}));var u=["1.0.0","1.1.0","1.2.0","1.3.0"],d=function getParameterByName(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("v");d&&u.includes(d)||(d=u[u.length-1]),document.addEventListener("DOMContentLoaded",_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var e;return _regeneratorRuntime().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,import("/public/src/js/data/documentations/".concat(d,".js"));case 2:e=t.sent,silverBoxDocumentationTableComponent(".silverBox-tableWrapper",e.default);case 5:case"end":return t.stop()}}),_callee)})))),document.querySelector("#silverBox-documentation-version").innerText="v"+d;
