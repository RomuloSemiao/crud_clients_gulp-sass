!function r(i,u,a){function o(t,e){if(!u[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=u[t]={exports:{}},i[t][0].call(n.exports,function(e){return o(i[t][1][e]||e)},n,n.exports,r,i,u,a)}return u[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)o(a[e]);return o}({1:[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}Object.defineProperty(n,"__esModule",{value:!0}),n.ClientsList=void 0;var r=function(){function e(){var n=this;if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");u(this,"genderState",function(){for(var e=0;e<n.genders.length;e++)if(n.genders[e].checked)return n.genders[e].value}),u(this,"renderList",function(){var t="";n.list.forEach(function(e){t="\n                <li class='cadastrados__clientes'>\n                    <p>".concat(e.name,"</p>\n                    <p>").concat(e.email,"</p>\n                    <p>").concat(e.telephone,"</p>\n                    <p>").concat(e.age,"</p>\n                    <p>").concat(e.gender,"</p>\n                </li>\n            ")}),n.clients.innerHTML+=t}),u(this,"clearList",function(){n.nameInput.value="",n.emailInput.value="",n.telephoneInput.value="",n.ageInput.value="1";for(var e=0;e<n.genders.length;e++)n.genders[e].checked=!1}),this.list=[],this.selectors(),this.events()}var t,n,r;return t=e,(n=[{key:"selectors",value:function(){this.nameInput=document.querySelector("#data-name"),this.emailInput=document.querySelector("#data-email"),this.telephoneInput=document.querySelector("#data-telephone"),this.ageInput=document.querySelector(".clients__age--input"),this.incrementButton=document.querySelector(".clients-age__button--increment"),this.decrementButton=document.querySelector(".clients-age__button--decrement"),this.form=document.querySelector(".clients__form"),this.clients=document.querySelector(".cadastrados__items"),this.genders=document.getElementsByName("gender")}},{key:"events",value:function(){var t=this;this.incrementButton.addEventListener("click",function(){var e=Number(t.ageInput.value);t.ageInput.value=e+1}),this.decrementButton.addEventListener("click",function(){var e=Number(t.ageInput.value);1<e&&(t.ageInput.value=e-1)}),this.form.addEventListener("submit",function(e){e.preventDefault();e={name:t.nameInput.value,age:t.ageInput.value,email:t.emailInput.value,telephone:t.telephoneInput.value,gender:t.genderState()};""===e.name&&""===e.email&&""===e.telephone||t.list.push(e),t.renderList(),t.clearList()})}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();n.ClientsList=r},{}],2:[function(e,t,n){"use strict";var r=e("./components/ClientsList");document.addEventListener("DOMContentLoaded",function(){new r.ClientsList})},{"./components/ClientsList":1}]},{},[2]);