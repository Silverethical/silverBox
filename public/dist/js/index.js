"use strict";function e(){e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new I(r||[]);return o(a,"_invoke",{value:E(e,n,c)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var m={};function p(){}function v(){}function f(){}var h={};s(h,a,(function(){return this}));var x=Object.getPrototypeOf,y=x&&x(x(S([])));y&&y!==n&&r.call(y,a)&&(h=y);var g=f.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(o,i,a,c){var l=d(e[o],e,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(u).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function E(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=d(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function C(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=d(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=f,o(g,"constructor",{value:f,configurable:!0}),o(f,"constructor",{value:v,configurable:!0}),v.displayName=s(f,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},t.awrap=function(e){return{__await:e}},b(L.prototype),s(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(g),s(g,l,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},t}function t(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,l,"next",e)}function l(e){t(a,o,i,c,l,"throw",e)}c(void 0)}))}}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e){document.querySelectorAll(e).length<=0?document.body.classList.remove("stop-scrolling"):document.body.classList.add("stop-scrolling")}function l(e){var t,n,r,o=e.uniqueID,i=e.timer;if(i)t=o,n=i,r=document.querySelector('[uniqueID="'.concat(t,'"]')),setTimeout((function(){r&&r.remove(),c(".silverBox-overlay")}),n);else{var a=document.querySelectorAll(".silverBox-container");a[a.length-1]&&a[a.length-1].remove(),c(".silverBox-overlay")}}function s(e,t,n){var o=document.createElement("button");if(o.style.background=e.bgColor,e.dataAttribute)for(var i=0,a=Object.entries(e.dataAttribute);i<a.length;i++){var c=r(a[i],2),s=c[0],u=c[1];o.setAttribute("data-".concat(s),u)}if(e.bgColor&&(o.style.backgroundColor=e.bgColor),e.borderColor&&(o.style.borderColor=e.borderColor),e.textColor&&(o.style.color=e.textColor),e.disabled&&(o.disabled=e.disabled),o.classList.add("silverBox-button",t),e.id&&(o.id=e.id),e.className&&e.className.split(" ").forEach((function(e){return o.classList.add(e)})),!0!==e.closeOnClick&&"closeOnClick"in e?(!1===e.loadingAnimation||e.loadingAnimation||(e.loadingAnimation=!0),!0===e.loadingAnimation&&o.addEventListener("click",(function(){o.classList.add("silverBox-loading-button")}))):o.onclick=l,e.iconStart){var d=document.createElement("img");d.setAttribute("src",e.iconStart),d.classList.add("silverBox-button-icon"),o.appendChild(d)}var m,p=document.createElement("span");if(p.classList.add("silverBox-button-text"),p.textContent=e.text?e.text:n,o.appendChild(p),o.append(((m=document.createElement("span")).classList.add("silverBox-button-loading-animation"),m)),e.iconEnd){var v=document.createElement("img");v.setAttribute("src",e.iconEnd),v.classList.add("silverBox-button-icon"),o.appendChild(v)}return o}function u(e){var t=e.type,n=e.select,r=e.numberOnly,o=e.placeHolder,i=e.readOnly,a=e.label,c=e.hint,l=e.width,s=e.height,u=e.maxLength,d=e.textAlign,m=e.fontSize,p=e.placeHolderFontSize,v=e.name,f=e.className,h=e.id,x=e.value;t=t.toLowerCase();var y=document.createElement("div");y.classList.add("silverBox-input-wrapper");var g=document.createElement("label");g.textContent=a;var b,L=document.createElement("select");if(L.classList.add("silverBox-select"),n){var E=[];n.forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e.value?e.value:""),t.textContent=e.text?e.text:e.value,e.disabled&&t.setAttribute("disabled",""),e.selected&&t.setAttribute("selected",""),E.push(t)})),E.forEach((function(e){L.append(e)}))}"textarea"!==t?(b=document.createElement("input"),t&&b.setAttribute("type",t)):b=document.createElement("textArea"),x&&(b.value=x);var C=document.createElement("span");return C.classList.add("silverBox-input-hint"),C.textContent=c,o&&b.setAttribute("placeholder",o),u&&b.setAttribute("maxlength",u),d&&(b.style.textAlign=d),b.style.width=l,b.style.height=s,b.style.fontSize=m,r&&b.addEventListener("input",(function(){b.value=b.value.replace(/[۰-۹]/g,(function(e){return"۰۱۲۳۴۵۶۷۸۹".indexOf(e)})).replace(/[^0-9]/g,"")})),p?p&&b.style.setProperty("--silverBox-placeHolder-fontSize",p):m&&b.style.setProperty("--silverBox-placeHolder-fontSize",m),v&&b.setAttribute("name",v),f&&f.split(" ").forEach((function(e){return b.classList.add(e)})),h&&(b.id=h),l&&(y.style.width="fit-content"),i&&b.setAttribute("readonly",""),a&&y.append(g),n?y.append(L):y.appendChild(b),c&&y.appendChild(C),y}var d=function(e){var t=e.alertIcon,n=e.customIcon,r=e.customSvgIcon,o=e.isCentred,i=void 0!==o&&o,a=e.customIconClassName,c=e.customIconId,l=e.customSvgIconClassName,s=e.customSvgIconId;if(n)return v(n,i,a,c,!1).cloneNode(!0);if(r)return v(r,i,l,s,!0).cloneNode(!0);if(m[t]){var u=m[t].cloneNode(!0);return i&&u.classList.add("silverBox-centered-icon"),u}return null},m={warning:p("silverBox-warning","!"),success:p("silverBox-tick-mark","","inside"),info:p("silverBox-info","i"),error:p("silverBox-error","","x"),question:p("silverBox-question","?")};function p(e,t,n){var r=document.createElement("div");if(r.classList=e,r.classList.add("silverBox-icon","silverBox-default-icon"),n){var o=document.createElement("div");o.classList=n,r.appendChild(o)}else if(t){var i=document.createElement("span");i.textContent=t,r.appendChild(i)}return r}function v(e,t,n,r,o){var i=document.createElement("div");if(i.classList.add("silverBox-image-wrapper"),t&&i.classList.add("silverBox-centered-icon"),r&&(i.id=r),n&&n.split(" ").forEach((function(e){i.classList.add(e)})),!1===o){var a=document.createElement("img");a.setAttribute("src",e),a.classList.add("silverBox-icon","silverBox-custom-icon"),i.append(a)}return o&&(i.innerHTML+=e),i}var f=0;function h(e){var t=Math.floor(Math.random()*e+1);if(f!==t)return f=t;h(e)}function x(e){if("removeSilverBox"in e&&function(e){e=e.toLowerCase();var t=document.querySelectorAll(".silverBox-container");if("first"===e&&(e=1),"last"===e&&(e=t.length),"all"===e)for(var n=0;n<t.length;n++)t[n].remove();else Number(e)>0&&t[Number(e)-1].remove()}(e.removeSilverBox),"removeLoading"in e&&function(e){var t=document.querySelectorAll(".silverBox-button-wrapper");if(e.toLowerCase(),"first"===e&&(e=1),"last"===e&&(e=t.length),"all"===e)for(var n=0;n<t.length;n++)t[n].childNodes.forEach((function(e){e.classList.remove("silverBox-loading-button")}));else Number(e)>0&&t[Number(e)-1].childNodes.forEach((function(e){e.classList.remove("silverBox-loading-button")}))}(e.removeLoading),0!==Object.keys(e).length){var t=[],n=document.body,r=document.createElement("div"),o=document.createElement("div");o.classList.add("silverBox-button-wrapper"),r.classList.add("silverBox-input-container");var i=function(e){var t=e.titleConfig,n=e.htmlText,r=e.simpleText,o=e.imageSource,i=e.closeButton,a=e.centerContent,c=document.createElement("div");c.classList.add("silverBox-header-wrapper");var s=document.createElement("div");s.classList.add("silverBox-icon-wrapper");var u=document.createElement("h2");u.classList.add("silverBox-header-title");var m=document.createElement("span");if(null!=t&&t.text&&(m.textContent=t.text),null!=t&&t.customIcon&&null!=t&&t.alertIcon||null!=t&&t.customIcon&&null!=t&&t.customSvgIcon||null!=t&&t.customIcon){var p=d({customIcon:null==t?void 0:t.customIcon});null!=t&&t.customIconId&&(p.children[0].parentElement.id=null==t?void 0:t.customIconId),null!=t&&t.customIconClassName&&(null==t||t.customIconClassName.split(" ").forEach((function(e){p.children[0].parentElement.classList.add(e)}))),p&&u.append(p)}else if(null!=t&&t.alertIcon){var v=d({alertIcon:null==t?void 0:t.alertIcon});v&&u.append(v)}else if(null!=t&&t.customSvgIcon){var f=d({customSvgIcon:null==t?void 0:t.customSvgIcon});null!=t&&t.customSvgIconId&&(f.children[0].parentElement.id=null==t?void 0:t.customSvgIconId),null!=t&&t.customSvgIconClassName&&(null==t||t.customSvgIconClassName.split(" ").forEach((function(e){f.children[0].parentElement.classList.add(e)}))),f&&u.append(f)}u.childElementCount>=1&&u.classList.add("silverBox-title-has-icon"),a&&u.classList.add("silverBox-title-centred"),u.append(m);var h=document.createElement("div");h.classList.add("silverBox-header-description"),h.innerHTML=n;var x=document.createElement("p");x.textContent=r,x.classList.add("silverBox-header-description");var y=document.createElement("span");return y.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/><line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/></svg>',y.onclick=l,y.classList.add("silverBox-close-button"),o&&s.appendChild(o),i&&s.appendChild(y),0!==s.childElementCount&&c.append(s),t&&c.appendChild(u),n&&r||n?c.appendChild(h):r&&c.appendChild(x),0!==c.childElementCount?c:""}({titleConfig:e.title,htmlText:e.html,simpleText:e.text,titleAlertIcon:e.titleAlertIcon,titleCustomIcon:e.titleCustomIcon,imageSource:d({alertIcon:e.alertIcon,customIcon:e.customIcon,isCentred:e.centerContent,customIconClassName:e.customIconClassName,customIconId:e.customIconId,customSvgIcon:e.customSvgIcon,customSvgIconClassName:e.customSvgIconClassName,customSvgIconId:e.customSvgIconId}),closeButton:e.showCloseButton,centerContent:e.centerContent,titleCustomIconId:e.titleCustomIconId,titleCustomIconClassName:e.titleCustomIconClassName});if(0!==i.length&&t.push(i),"input"in e){var m=function(e){return{type:"type"in e?e.type:"",select:e.select,numberOnly:e.numberOnly,hint:e.hint,label:e.label,placeHolder:e.placeHolder,readOnly:e.readOnly,width:e.width,height:e.height,maxLength:e.maxLength,textAlign:e.textAlign,fontSize:e.fontSize,placeHolderFontSize:e.placeHolderFontSize,name:e.name,className:e.className,id:e.id,value:e.value}},p=function(e){if("multiplyBy"in e){e.multiplyBy<=1&&(e.multiplyBy=1);for(var t=1;t<=e.multiplyBy;t++)r.append(u(m(e)))}else r.append(u(m(e)))};Array.isArray(e.input)?e.input.forEach((function(e){p(e)})):p(e.input),0!==r.childElementCount&&t.push(r)}for(var v=0,f=[{type:"confirmButton",text:"Confirm"},{type:"denyButton",text:"Deny"},{type:"cancelButton",text:"Cancel"}];v<f.length;v++){var x=f[v];x.type in e&&!1!==e[x.type].showButton&&o.append(s(e[x.type],"silverBox-".concat(x.text.toLowerCase(),"-button"),x.text))}"buttonsDirection"in e&&(o.style.direction=e.buttonsDirection),""!=o.innerHTML&&t.push(o),e.footer&&t.push(function(e){var t=e.footerInside,n=document.createElement("div"),r=document.createElement("div");n.classList.add("silverBox-footer");var o=document.createElement("hr");return r.innerHTML=t,n.append(o),n.append(r),n}({footerInside:e.footer}));var y="position"in e?"silverBox-".concat(e.position):"silverBox-overlay";0!==t.length&&(w=y,I="input"in e,n.append(function(e){var t=e.direction,n=e.elementsArray,r=e.overlayClass,o=e.isInput,i=e.theme,a=void 0===i?"light":i,c=e.centerContent,l=document.createElement("form");l.classList.add("silverBox-form"),l.addEventListener("submit",(function(e){e.preventDefault()}));var s=document.createElement("div");s.classList.add("silverBox-container"),s.classList.add(r),s.setAttribute("data-theme",a);var u=document.createElement("div");if(u.classList.add("silverBox"),t&&u.setAttribute("dir",t),c&&(u.style.textAlign="center"),o?(n.forEach((function(e){l.append(e)})),u.append(l)):n.forEach((function(e){u.append(e)})),0!==u.childElementCount&&s.append(u),0!==s.childElementCount)return s}({elementsArray:t,overlayClass:w,isInput:I,theme:e.theme,direction:e.direction,centerContent:e.centerContent})));var g=document.querySelectorAll(".silverBox-container");if(g=g[g.length-1],"timer"in e){var b=h(1e6);g&&g.setAttribute("uniqueID",b),l({uniqueID:b,timer:e.timer})}var L=document.querySelectorAll(".silverBox-overlay");if(L){var E,C=a(L);try{var B=function(){var e=E.value;e.addEventListener("click",(function(t){t.target===e&&e.remove(),c(".silverBox-overlay")}))};for(C.s();!(E=C.n()).done;)B()}catch(e){C.e(e)}finally{C.f()}}c(".silverBox-overlay"),"silverBoxId"in e&&(g.id=e.silverBoxId),"silverBoxClassName"in e&&e.silverBoxClassName.split(" ").forEach((function(e){return g.classList.add(e)}))}var w,I}var y=[{explanation:"Simple success alert.",config:{title:{text:"Success",alertIcon:"success"},text:"Your task has been completed."}},{explanation:"Error modal with a button.",config:{alertIcon:"error",text:"Operation failed.",centerContent:!0,cancelButton:{text:"OK"}}},{explanation:"Small informative message on top-right of the screen.",config:{position:"top-right",alertIcon:"info",text:"changes has been saved!",centerContent:!0,showCloseButton:!0}},{explanation:"Auto closing pop-up message with a timer.",config:{timer:2e3,customIcon:"/public/src/images/lightTimeout.png",title:{text:"You are so cute"},centerContent:!0}},{explanation:"A dark theme pop-up message.",config:{alertIcon:"info",theme:"dark",text:"Welcome to the dark side",centerContent:!0,showCloseButton:!0}},{explanation:"A login modal with a custom icon, a footer, and 2 different types of inputs.",config:{customIcon:"/public/src/images/loginExample.png",title:{text:"Login"},centerContent:!0,text:"Enter your account information",footer:"<a href='#'>Forgot your password?</a>",showCloseButton:!0,confirmButton:{text:"Login",closeOnClick:!1},cancelButton:{},input:[{label:"Username",type:"text",placeHolder:"Enter your username",maxLength:30},{label:"Password",type:"password",placeHolder:"Enter your password",hint:"Pick a strong password."}]}}],g=[{githubUsername:"Silverethical",position:"Lead Developer"},{githubUsername:"dofxo",position:"Developer"},{githubUsername:"fulcain",position:"Developer",showName:!0},{githubUsername:"mohammadrz1",position:"Website Designer"}];function b(e){return L.apply(this,arguments)}function L(){return(L=n(e().mark((function t(n){var r,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("//api.github.com/users/".concat(n));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error(r.statusText);case 6:return e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Request failed: ".concat(e.t0)),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function E(){return(E=n(e().mark((function t(n){var r,o,i,c,l,s,u,d,m,p,v,f,h;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document.querySelector("#silverBox-CreditsSection"),o=document.querySelector("#silverBox-CreditsSection .silverBox-teamMembers"),i=a(n),e.prev=2,i.s();case 4:if((c=i.n()).done){e.next=16;break}return l=c.value,s=l.githubUsername,u=l.position,d=l.showName,e.next=9,b(s);case 9:m=e.sent,p=m.login,v=m.avatar_url,f=m.name,p&&(r.classList.contains("hidden")&&r.classList.remove("hidden"),(h=document.createElement("a")).classList.add("silverBox-teamMember"),h.href="//github.com/".concat(s),h.target="_blank",h.innerHTML="\n\t\t\t\t  ".concat(v?'<img class="silverBox-memberImage" src="'.concat(v,'">'):"",'\n\t\t\t\t  <div class="silverBox-memberInfo">\n\t\t\t\t\t  <p class="silverBox-memberName">').concat(d?f:s,'</p>\n\t\t\t\t\t  <p class="silverBox-memberPosition">').concat(u,"</p>\n\t\t\t\t  </div>"),o.appendChild(h));case 14:e.next=4;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),i.e(e.t0);case 21:return e.prev=21,i.f(),e.finish(21);case 24:case"end":return e.stop()}}),t,null,[[2,18,21,24]])})))).apply(this,arguments)}function C(e){var t=e.copy,n=e.iconElement,r=e.timeOut;navigator.clipboard.writeText(t),n&&n.classList.add("silverBox-copied"),setTimeout((function(){n&&n.classList.remove("silverBox-copied")}),r)}document.addEventListener("DOMContentLoaded",(function(){!function(e){E.apply(this,arguments)}(g)}));var B=document.querySelector("#hamburger-menu"),w=document.querySelector("#logo"),I=document.querySelector("#silverBox-header nav ul");B.addEventListener("click",(function(){I.classList.contains("show")?(B.classList.remove("rotate"),I.classList.remove("show"),w.classList.remove("hide")):(B.classList.add("rotate"),I.classList.add("show"),w.classList.add("hide"))}));var S=document.querySelector("#silverBox-header");window.addEventListener("scroll",(function(){window.scrollY>50?S.classList.add("scrolled"):S.classList.remove("scrolled")}));for(var A=document.querySelector("#silverBox-exampleSection .container"),k=function(e){var t,n=function(e,t){var n=document.createElement("div");n.classList.add("silverBox-example");var r=document.createElement("div");r.classList.add("silverBox-exampleColumn");var o=document.createElement("div");o.classList.add("silverBox-exampleExplanation"),o.textContent=e;var i=document.createElement("div");i.classList.add("silverBox-example-button-wrapper");var a=document.createElement("button");a.classList.add("silverBox-showExample","silverBox-exampleButtons"),a.textContent="Show Me";var c=document.createElement("button");c.classList.add("silverBox-copyConfig","silverBox-exampleButtons"),c.textContent="Copy Code";var l=document.createElement("div");l.classList.add("silverBox-exampleColumn"),l.classList.add("silverBox-exampleColumn-code");var s=document.createElement("div");s.classList.add("silverBox-exampleConfig");var u=document.createElement("pre");s.append(u);var d=document.createElement("code");d.textContent=t,u.append(d);var m=document.createElement("button"),p=document.createElement("img");return p.setAttribute("src","/public/src/images/copyIcon.png"),m.classList.add("silverBox-exampleCopyButton"),m.append(p),m.addEventListener("click",(function(){C({copy:t,iconElement:p,timeOut:1500})})),c.addEventListener("click",(function(){C({copy:t}),x({timer:1500,title:{text:"Code copied."},theme:"dark",position:"top-left",centerContent:!0})})),r.append(o),i.append(a,c),r.append(i),s.append(m),l.append(s),n.append(r),n.append(l),n}(y[e].explanation,"silverBox(".concat((t=y[e].config,JSON.stringify(t,null,7).replace(/"([^"]+)"\s*:/g,"$1:")),")"));A.append(n),document.querySelectorAll(".silverBox-showExample")[e].addEventListener("click",(function(){x(y[e].config)}))},N=0;N<y.length;N++)k(N);var O=document.querySelector("#silverBox-usageInstructions code.step1");O.textContent+='<link rel="stylesheet" href="silverBox.min.css">',O.textContent+='\n<script src="silverBox.min.js"><\/script>';var j=document.querySelector("#silverBox-usageInstructions code.step2");j.textContent='silverBox({\n\talertIcon: "success",\n\ttext: "Your task has been completed.",\n\tcenterContent: true,\n\tconfirmButton: {\n\t\tbgColor: "#3085d6",\n\t\tborderColor: "#3085d6",\n\t\ttextColor: "#fff", \n\t\ttext: "Confirm",\n\t\tcloseOnClick: true\n\t}\n})';var q=document.querySelector("#usage-example .silverBox-exampleCopyButton");q.addEventListener("click",(function(){C({copy:j.textContent,iconElement:q.children[0],timeOut:1500})})),hljs.highlightAll();
