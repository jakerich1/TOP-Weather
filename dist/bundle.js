(()=>{"use strict";var e={578:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(645),r=t.n(a)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]),r.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Roboto",sans-serif}html,body{min-height:100%}body{background:#4a4969;background:linear-gradient(180deg, #4a4969 0%, #7072ab 50%, #cd82a0 100%);padding:1em}@media only screen and (max-width: 1120px){body{padding:0}}body .container{width:80%;margin:auto}@media only screen and (max-width: 1120px){body .container{width:100%}body .container>*{border-radius:0 !important}}header{display:flex;justify-content:space-between;align-items:center;width:100%;background:#ffffff33;padding:.5em;font-family:"Roboto",sans-serif;font-size:36px;color:#fff;border-radius:16px}@media only screen and (max-width: 880px){header{flex-direction:column}}@media only screen and (max-width: 500px){header{padding:0}}header .search-cont{display:flex;align-items:stretch}header .search-cont>*{display:block}@media only screen and (max-width: 860px){header .search-cont{margin-top:.5em}}header .search-cont span{margin-right:10px;font-weight:100}@media only screen and (max-width: 500px){header .search-cont span{display:none}}header .search-cont input{width:270px;border:none;border-bottom:1px solid #fff;background:none;font-size:30px;font-weight:100;color:#fff}@media only screen and (max-width: 500px){header .search-cont input{width:200px;font-size:20px}}header .search-cont input:focus{outline:none}header .search-cont button{border:1px solid #fff;background:none;padding:0 .5em;color:#fff;font-weight:100;font-size:24px;cursor:pointer;border-top-right-radius:8px;border-bottom-right-radius:8px;transition:all .15s ease-in-out}@media only screen and (max-width: 500px){header .search-cont button{font-size:20px}}header .search-cont button:hover{background:#ffffff33}header .summary-cont{display:flex;align-items:center}@media only screen and (max-width: 860px){header .summary-cont{margin-top:8px}}header .summary-cont>*{display:block;font-weight:300}header .summary-cont .weather-label{font-size:24px;margin-right:16px}header .summary-cont .temp-label{font-size:62px;margin-right:16px}@media only screen and (max-width: 500px){header .summary-cont .temp-label{font-size:36px}}header .summary-cont .hilo-label{font-size:24px}main{display:flex;width:100%;background:#ffffff33;padding:.5em;border-radius:16px;margin-top:16px;font-size:36px;color:#fff}main .snap-frame{display:flex;width:100%;overflow-x:scroll;overflow-y:hidden;padding:0 0 8px 0;scroll-snap-type:x mandatory}main .snap-frame .snap-block{display:flex;flex-direction:column;align-items:center;text-align:center;justify-content:space-between;padding:.5em;background:#ffffff33;border-radius:8px;margin-right:8px;scroll-snap-align:center}@media only screen and (max-width: 500px){main .snap-frame .snap-block{padding:.25em}}main .snap-frame .snap-block .block-time{font-weight:300;font-size:18px}main .snap-frame .snap-block .block-rain{font-weight:700;font-size:16px;color:#5656a7}main .snap-frame .snap-block .block-weather{font-weight:300;font-size:21px}main .snap-frame .snap-block .block-temp{font-weight:300;font-size:21px}.week{width:100%;background:#ffffff33;padding:.5em;border-radius:16px;margin-top:16px;font-size:36px;color:#fff}.week #seven-table{width:100%;border-collapse:collapse}.week #seven-table td,.week #seven-table th{text-align:left;font-weight:500;font-size:32px;padding:.25em 0}@media only screen and (max-width: 600px){.week #seven-table thead{display:none}}.week #seven-table thead tr{border-bottom:1px solid #fff}.week #seven-table tbody tr{border-bottom:1px solid #ffffff44}.week #seven-table tbody tr td{padding:1em 1em 1em 0;font-size:18px;font-weight:300}',""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(r[d]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);a&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},695:e=>{var n={};e.exports=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},d=[],i=0;i<e.length;i++){var c=e[i],s=a.base?c[0]+a.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(n[m].references++,n[m].updater(u)):n.push({identifier:p,updater:r(u,a),references:1}),d.push(p)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var i=t(o[d]);n[i].references--}for(var c=a(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a=t.css,r=t.media,o=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(695),d=t.n(o),i=t(216),c=t.n(i),s=t(578),l={styleTagTransform:function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}},setAttributes:function(e){var n=t.nc;n&&e.setAttribute("nonce",n)},insert:function(e){var n=d()("head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}};l.domAPI=r(),l.insertStyleElement=c(),n()(s.Z,l),s.Z&&s.Z.locals&&s.Z.locals;const p=function(){document.querySelector("#sButton").innerHTML="...loading"},m=function(){document.querySelector("#sButton").innerHTML="search"},u=function(e){document.querySelector(".weather-label").innerHTML=e},f=function(e){document.querySelector(".temp-label").innerHTML=e},h=function(e){document.querySelector(".hilo-label").innerHTML=e},x=function(e){const n=document.querySelector(".snap-frame");n.innerHTML="";for(let t=0;t<e.length;t+=1){const a=Math.round(e[t].temp),r=e[t].weather[0].main,o=new Date((new Date).setHours((new Date).getHours()+t)).getHours(),d=Math.round(100*e[t].pop),i=document.createElement("div");i.className="snap-block";const c=document.createElement("div");c.className="block-time",c.innerText=o,i.appendChild(c);const s=document.createElement("div");s.innerText=`${d}%`,s.className="block-rain",i.appendChild(s);const l=document.createElement("div");l.innerText=r,l.className="block-weather",i.appendChild(l);const p=document.createElement("div");p.innerText=`${a}°`,p.className="block-temp",i.appendChild(p),n.appendChild(i)}},b=function(e){const n=document.querySelector("tbody");n.innerHTML="";const t=new Date,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];for(let r=1;r<e.length;r+=1){t.setDate(t.getDate()+1);const o=Math.round(100*e[r].pop),d=Math.round(e[r].temp.day),i=e[r].weather[0].description,c=document.createElement("tr"),s=document.createElement("td");s.innerText=a[t.getDay()],c.appendChild(s);const l=document.createElement("td");l.innerText=i,c.appendChild(l);const p=document.createElement("td");p.innerText=`${o}%`,c.appendChild(p);const m=document.createElement("td");m.innerText=`${d}°`,c.appendChild(m),n.appendChild(c)}},y=async function(e){if(""===e)throw new Error("Empty input");{p();const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=12e3d57611d7008bed26d747d8731449`,{mode:"cors"}),t=await n.json();try{const{lat:e}=t.coord,{lon:n}=t.coord;await async function(e,n){const t=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${n}&exclude=minutely&appid=12e3d57611d7008bed26d747d8731449&units=metric`,{mode:"cors"}),a=await t.json(),r=a.current.weather[0].description,o=`${Math.round(a.current.temp)}°`,d=`H:${Math.round(a.daily[0].temp.max)}° L:${Math.round(a.daily[0].temp.min)}°`,i=a.hourly,c=a.daily;u(r),f(o),h(d),x(i),b(c)}(e,n)}catch{throw new Error("SEarch term returned no data")}m()}},g=function(){const e=document.querySelector("#sInput");document.querySelector("#sButton").addEventListener("click",(()=>{y(e.value)}))};document.body.appendChild(function(){const e=document.createElement("div");return e.classList.add("container"),e.appendChild(function(){const e=document.createElement("header"),n=document.createElement("div");n.className="search-cont";const t=document.createElement("span");t.id="search-label",t.innerText="City:",n.appendChild(t);const a=document.createElement("input");a.type="text",a.id="sInput",a.placeholder="Enter city name",n.appendChild(a);const r=document.createElement("button");r.innerText="search",r.id="sButton",n.appendChild(r),e.appendChild(n);const o=document.createElement("div");o.className="summary-cont";const d=document.createElement("span");d.className="weather-label",d.innerText="Cloudy",o.appendChild(d);const i=document.createElement("span");i.className="temp-label",i.innerText="19°",o.appendChild(i);const c=document.createElement("span");return c.className="hilo-label",c.innerText="H:21 L:13°",o.appendChild(c),e.appendChild(o),e}()),e.appendChild(function(){const e=document.createElement("main"),n=document.createElement("div");n.className="snap-frame";for(let e=0;e<24;e+=1){const t=document.createElement("div");t.className="snap-block";const a=document.createElement("div");a.className="block-time",a.innerText=e,t.appendChild(a);const r=document.createElement("div");r.innerText="36%",r.className="block-rain",t.appendChild(r);const o=document.createElement("div");o.innerText="sunny",o.className="block-weather",t.appendChild(o);const d=document.createElement("div");d.innerText="20°",d.className="block-temp",t.appendChild(d),n.appendChild(t)}return e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.className="week";const n=document.createElement("table");n.id="seven-table";const t=document.createElement("thead"),a=document.createElement("tr"),r=document.createElement("th");r.innerText="Day",a.appendChild(r);const o=document.createElement("th");o.innerText="Weather",a.appendChild(o);const d=document.createElement("th");d.innerText="Rain",a.appendChild(d);const i=document.createElement("th");i.innerText="Temperature",a.appendChild(i),t.appendChild(a),n.appendChild(t);const c=document.createElement("tbody");n.appendChild(c);for(let e=0;e<7;e+=1){const e=document.createElement("tr"),n=document.createElement("td");n.innerText="Monday",e.appendChild(n);const t=document.createElement("td");t.innerText="Sunny",e.appendChild(t);const a=document.createElement("td");a.innerText="43%",e.appendChild(a);const r=document.createElement("td");r.innerText="19°",e.appendChild(r),c.appendChild(e)}return e.appendChild(n),e}()),e}()),g(),y("London"),document.querySelector("#sInput").value="London"})()})();