!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({0:function(e,t,n){},11:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.shown=!1,this.interfaceEl=n}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"hide",value:function(){this.element.classList.remove("show-modal"),this.interfaceEl.classList.remove("interface-bg"),this.shown=!1}},{key:"toggleShow",value:function(e){e.stopPropagation(),e.currentTarget==this.interfaceEl||e.currentTarget.classList.contains("close-button")?this.shown&&this.hide():(this.element.classList.toggle("show-modal"),this.interfaceEl.classList.toggle("interface-bg"),this.shown=!this.shown)}}]),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.position=n,this.lastIndex=o,this.addNewPosition(this.position)}return function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(e,[{key:"removeOldPosition",value:function(){this.element.style.transform=null,this.element.style.zIndex=null,this.element.style.animation=null,this.element.style.WebkitAnimation=null}},{key:"addNewPosition",value:function(e){var t=this.position;this.position=e,this.classNameChange(t),this.activeInactive()}},{key:"classNameChange",value:function(e){e==this.lastIndex&&0==this.position?(console.log("first"),this.element.style.transform="translate(".concat(-4*this.position,"%, ").concat(3*this.position,"%)"),this.element.style.zIndex="".concat(99+-1*this.position),this.element.style.WebkitAnimation="b-to-f-card-transition 0.7s ease",this.element.style.animation="b-to-f-card-transition 0.7s ease"):0==e&&this.position==this.lastIndex?(console.log("second"),this.element.style.transform="translate(".concat(-4*this.position,"%, ").concat(3*this.position,"%)"),this.element.style.zIndex="".concat(99+-1*this.position),this.element.style.animation="f-to-b-card-transition 0.7s ease",this.element.style.WebkitAnimation="f-to-b-card-transition 0.7s ease"):(this.element.style.transform="translate(".concat(-4*this.position,"%, ").concat(3*this.position,"%)"),this.element.style.zIndex="".concat(99+-1*this.position),this.element.style.animation=null,this.element.style.WebkitAnimation=null)}},{key:"activeInactive",value:function(){0!==this.position?this.element.classList.add("inactive-card"):this.element.classList.remove("inactive-card")}}]),e}();function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(){var e=document.querySelector(".interface-wrapper"),t=document.querySelector("#about-modal"),n=document.querySelector("#about-me-link"),o=new r(t,e),a=document.querySelector("#about-modal .close-button");b([n,e,a],o);var c=document.querySelector("#project-cards-modal"),l=Array.from(document.querySelectorAll("#portfolio-arm2-options .interface-link")),u=new r(c,e),m=document.querySelector("#project-cards-modal .close-button"),d=document.querySelector("#about-projects");b(i(l).concat([e,m,d]),u,function(t){t.currentTarget==e?l.map(function(e){e.classList.remove("active")}):t.currentTarget.classList.add("active"),t.currentTarget.dataset.index&&k(t.currentTarget.dataset.index,!0)});var f=document.querySelector("#contact-modal"),h=document.querySelector("#message-link"),v=new r(f,e),y=document.querySelector("#contact-modal .close-button"),p=document.querySelector("#about-contact");b([h,e,y,p],v);var g=[o,u,v];function b(e,t,n){e.map(function(e){e.addEventListener("click",function(e){g.map(function(e){e.hide()}),t.toggleShow(e),n&&n(e)})})}var w=[].slice.call(document.querySelectorAll(".project-card")),L=[];function S(){L=[],w.map(function(e,t){var n;n=new s(e,t,w.length-1),L.push(n)})}S();var A=document.createElement("style");A.type="text/css",document.querySelector("head").appendChild(A);var x="@keyframes f-to-b-card-transition{\n        0%{\n            opacity: 0;\n        }\n        30%{\n            opacity: 0;\n            -webkit-transform: translate(".concat(-4*(w.length-1),"%, ").concat(3*(w.length-1)-25,"%);\n            -moz-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1)-25,"%);\n            -o-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1)-25,"%);\n            -ms-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1)-25,"%);\n            transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1)-25,"%);\n        }\n        to{\n            opacity: 1;\n            -webkit-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1),"%);\n            -moz-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1),"%);\n            -o-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1),"%);\n            -ms-transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1),"%);\n            transform: translate(").concat(-4*(w.length-1),"%, ").concat(3*(w.length-1),"%);\n        }\n    }");function k(e,t){t&&S();var n=L.splice(0,e);(L=L.concat(n)).map(function(e,t){e.removeOldPosition(),e.addNewPosition(t)})}A.innerHTML=x,L.map(function(e){e.element.addEventListener("click",function(){k(e.position,!1)})}),document.querySelector("#next-card").addEventListener("click",function(){k(1,!1)}),document.querySelector("#prev-card").addEventListener("click",function(){k(L.length-1,!1)})};var l=function(){var e=Array.from(document.querySelectorAll(".node")),t=document.querySelectorAll("#RadialGradient2 stop");e.forEach(function(e){var n=e.cloneNode();e.parentNode.insertBefore(n,e),n.classList.add("node-hover"),n.classList.remove("node"),e.addEventListener("mouseover",function(e){n.classList.add("node-hover-show"),t[0].style.animation="node-glow 2s linear infinite"}),e.addEventListener("mouseleave",function(e){n.classList.remove("node-hover-show"),t[0].style.animation="none"})})};var u=function(){var e=Array.from(document.querySelectorAll(".interface-link")),t=document.querySelector(".content"),n=document.querySelector("#portfolio-arm1-revealer"),o=document.querySelector("#contact-arm2-revealer"),r=document.querySelector("#contact-arm3-icons"),a={},s=/-revealer/;e.map(function(e){var t,n,o,r,i,c,l,u;s.test(e.id)?(o=(t=e.id.replace("-revealer","")).substr(0,t.length-5),n=document.querySelector("#"+t),c=o+"-arm"+(parseInt(t[t.length-1])+1),r=document.querySelector("#"+c),u=c+"-options .link-h",l=Array.from(document.querySelectorAll("#"+u)),i=document.querySelector("#"+c+"-clip circle")):(t=e.id.replace("-link",""),n=o=r=i=l=null);var m=e.id,d="#"+t+"-sphere",f=document.querySelector(d);a[m]={linkElem:e,currentArm:n,currentPath:o,currentIdSubstr:t,nextArm:r,nextArmId:c,nextArmClip:i,nextArmOptions:l,stageImage:f,shown:!1}}),e.forEach(function(s){var i=s.id,c=a[i];function l(e,t){var n=e.shown?.2*(c.nextArmOptions.length-1):0;e.nextArmOptions.map(function(o){o.style.transitionDelay=n+"s",t?o.classList.toggle("show"):o.classList.remove("show"),e.shown?n-=.2:n+=.35}),e.shown=!!t&&!e.shown}function u(e,t){t?e.nextArm.classList.toggle("show"):e.nextArm.classList.remove("show");var n=e.nextArm.id+"-expandclip";if(void 0!==e.nextArmClip.style.r)t?e.nextArmClip.classList.toggle(n):e.nextArmClip.classList.remove(n);else{var o=250,r=2;switch(e.nextArmId){case"portfolio-arm2":o=245,r=2;break;case"contact-arm2":o=160,r=1;break;case"contact-arm3":o=175,r=1;break;case"about-arm2":o=250,r=2}var a=e.shown?50:o,s=setInterval(function(){e.nextArmClip.setAttribute("r",a),e.shown?a+=r:a-=r,(a>o||a<50)&&clearInterval(s)},5)}}s.addEventListener("mouseenter",function(e){c.stageImage&&c.stageImage.classList.add("show")}),s.addEventListener("mouseleave",function(){c.stageImage&&c.stageImage.classList.remove("show")}),s.addEventListener("click",function(m){if(a[i].currentPath){var d=a[i].currentPath;if(Object.keys(a).forEach(function(e){var t=a[e];t.currentPath!==d&&t.nextArm&&(l(t,!1),u(t,!1))}),c.nextArm&&(l(c,!0),u(c,!0),!c.shown)){var f=function(e){var t=e.nextArm.id+"-revealer";return a[t]||{}}(c);f.linkElem&&f.linkElem.classList.remove("active"),f.nextArm&&(l(f,!1),u(f,!1))}e.map(function(e){RegExp(c.currentPath).test(e.id)||e.classList.remove("active")}),s.classList.toggle("active"),n.classList.contains("active")?t.classList.add("content-transform"):t.classList.remove("content-transform"),o.classList.contains("active")?setTimeout(function(){r.classList.add("show")},600):r.classList.remove("show")}})})};n(0);l(),c(),u();var m=Date.now()-startTime,d=document.querySelector("#loader");m>1e3?d.classList.add("hide-loader"):setTimeout(function(){d.classList.add("hide-loader")},1e3),setTimeout(function(){d.remove()},2e3),console.log(m),console.log(startTime),console.log(Date.now());var f=document.querySelector("#contact-submit"),h=document.querySelectorAll(".form-input");f.addEventListener("click",function(e){e.preventDefault();for(var t="",n=0;n<h.length;++n){var o=h[n];o.name&&(t+="".concat(o.value,"%$"))}var r=new XMLHttpRequest;r.onreadystatechange=function(){4==this.readyState&&200==this.status?(document.getElementById("submit-res").innerHTML="Thank you for your message :)",document.getElementById("submit-res").classList.add("ok")):0!==this.status&&200!==this.status&&void 0!==this.status&&(document.getElementById("submit-res").innerHTML="Something went wrong..Please try again.",document.getElementById("submit-res").classList.add("error"))};r.open("POST","https://script.google.com/macros/s/AKfycbyuFIEsLSei7wgbmO4aUuurv_5xAypuyqweNQYrdZNY01pQ7vg/exec",!0),r.setRequestHeader("Content-Type","text/plain"),r.setRequestHeader("Accept","text/plain"),r.send(t)})}});