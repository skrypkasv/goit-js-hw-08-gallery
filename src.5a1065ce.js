parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"QHdL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2020/10/12/22/12/color-pop-5650322__340.jpg",original:"https://cdn.pixabay.com/photo/2020/10/12/22/12/color-pop-5650322_1280.jpg",description:"Red fish"},{preview:"https://cdn.pixabay.com/photo/2020/09/14/17/19/beach-5571545__340.jpg",original:"https://cdn.pixabay.com/photo/2020/09/14/17/19/beach-5571545_1280.jpg",description:"Couple on the beach"},{preview:"https://cdn.pixabay.com/photo/2020/04/13/16/39/flash-5039182__340.jpg",original:"https://cdn.pixabay.com/photo/2020/04/13/16/39/flash-5039182_1280.jpg",description:"Flash of lightning"}];exports.default=p;
},{}],"oWe0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGalleryMarkup=r,exports.gallery=void 0;var e=document.querySelector("ul.js-gallery");function r(e){return e.map(function(e){var r=e.preview,n=e.original,a=e.description;return'<li class="gallery__item">\n              <a\n                class="gallery__link"\n                href="'.concat(n,'"\n              >\n                <img\n                  class="gallery__image"\n                  src="').concat(r,'"\n                  data-source="').concat(n,'"\n                  alt="').concat(a,'"\n                />\n              </a>\n          </li>')}).join("")}exports.gallery=e;
},{}],"gYcX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onArrowsKeydown=n;var r=e(require("./data")),o=require("./open-modal");function e(r){return r&&r.__esModule?r:{default:r}}var t=r.default.map(function(r){return r.original});function n(r){"ArrowRight"===r.code?c():"ArrowLeft"===r.code&&a()}function c(){for(var r=0;r<t.length;r+=1){if(o.modalImg.src===t[Number("".concat(t.length))-1])return void(o.modalImg.src="".concat(t[0]));if(o.modalImg.src===t[r])return void(o.modalImg.src="".concat(t[r+1]))}}function a(){for(var r=0;r<t.length;r+=1){if(o.modalImg.src===t[0])return void(o.modalImg.src="".concat(t[Number("".concat(t.length))-1]));if(o.modalImg.src===t[r])return void(o.modalImg.src="".concat(t[r-1]))}}
},{"./data":"QHdL","./open-modal":"n7vg"}],"vwdI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.closeModal=t,exports.onEscKeydown=d,exports.modalBackdrop=exports.btnCloseModal=void 0;var e=require("./open-modal"),o=require("./arrows-keydown"),r=document.querySelector('button[data-action="close-lightbox"]');function t(){window.removeEventListener("keydown",d),window.removeEventListener("keydown",o.onArrowsKeydown),e.modal.classList.remove("is-open"),e.modalImg.src=""}exports.btnCloseModal=r;var n=document.querySelector("div.lightbox__overlay");function d(e){"Escape"===e.code&&t()}exports.modalBackdrop=n;
},{"./open-modal":"n7vg","./arrows-keydown":"gYcX"}],"n7vg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openModal=a,exports.modalImg=exports.modal=void 0;var e=require("./close-modal"),o=require("./arrows-keydown"),t=document.querySelector("div.js-lightbox");exports.modal=t;var r=document.querySelector("img.lightbox__image");function a(r){r.preventDefault(),r.target.classList.contains("gallery__image")&&(t.classList.add("is-open"),s(r),window.addEventListener("keydown",e.onEscKeydown),window.addEventListener("keydown",o.onArrowsKeydown))}function s(e){r.src=e.target.dataset.source,r.alt=e.target.alt}exports.modalImg=r;
},{"./close-modal":"vwdI","./arrows-keydown":"gYcX"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=s(require("./js/data.js")),r=require("./js/create-markup"),a=require("./js/open-modal"),l=require("./js/close-modal");function s(e){return e&&e.__esModule?e:{default:e}}r.gallery.insertAdjacentHTML("beforeend",(0,r.createGalleryMarkup)(e.default)),r.gallery.addEventListener("click",a.openModal),l.btnCloseModal.addEventListener("click",l.closeModal),l.modalBackdrop.addEventListener("click",l.closeModal);
},{"./sass/main.scss":"clu1","./js/data.js":"QHdL","./js/create-markup":"oWe0","./js/open-modal":"n7vg","./js/close-modal":"vwdI"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery/src.5a1065ce.js.map