parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"gdB6":[function(require,module,exports) {
"use strict";var e=n(require("./gallery-items.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t=document.querySelector("ul.js-gallery"),r=c(e.default);function c(e){return e.map(function(e){var n=e.preview,t=e.original,r=e.description;return'<li class="gallery__item">\n              <a\n                class="gallery__link"\n                href="'.concat(t,'"\n              >\n                <img\n                  class="gallery__image"\n                  src="').concat(n,'"\n                  data-source="').concat(t,'"\n                  alt="').concat(r,'"\n                />\n              </a>\n          </li>')}).join("")}t.insertAdjacentHTML("beforeend",r),t.addEventListener("click",a);var o=document.querySelector("div.js-lightbox"),i=document.querySelector("img.lightbox__image");function a(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(o.classList.add("is-open"),s(e),window.addEventListener("keydown",v),window.addEventListener("keydown",g))}function s(e){i.src=e.target.dataset.source,i.alt=e.target.alt}var l=document.querySelector('button[data-action="close-lightbox"]');function d(){window.removeEventListener("keydown",v),window.removeEventListener("keydown",g),o.classList.remove("is-open"),i.src=""}l.addEventListener("click",d);var u=document.querySelector("div.lightbox__overlay");function v(e){"Escape"===e.code&&d()}u.addEventListener("click",d);var f=e.default.map(function(e){return e.original});function g(e){"ArrowRight"===e.code?m():"ArrowLeft"===e.code&&y()}function m(){for(var e=0;e<f.length;e+=1){if(i.src===f[8])return void(i.src="".concat(f[0]));if(i.src===f[e])return void(i.src="".concat(f[e+1]))}}function y(){for(var e=0;e<f.length;e+=1){if(i.src===f[0])return void(i.src="".concat(f[8]));if(i.src===f[e])return void(i.src="".concat(f[e-1]))}}
},{"./gallery-items.js":"q5Rn"}]},{},["gdB6"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery/basic.4558fd35.js.map