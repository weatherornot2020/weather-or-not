(this["webpackJsonpweather-or-not"]=this["webpackJsonpweather-or-not"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),o=(t(14),t(6)),i=t.n(o),s=(t(15),t(2)),u=t(22),m=t(23),h=t(24),p=t(25),d=t(26),E=t(27),w=t(28),f=t(7),g=t.n(f);function v(e){return("0"+e).slice(-2)}function b(e){var a=new Date(1e3*e),t=a.getHours(),n=a.getMinutes(),r=a.getSeconds(),l=t>=12?"PM":"AM";return t>12&&(t-=12),v(t)+":"+v(n)+":"+v(r)+l}var D=function(e){if(e.weatherData&&e.weatherData.weather&&e.weatherData.weather[0]){var a=e.weatherData.weather[0];return r.a.createElement(g.a,null,r.a.createElement("div",null,"temporary for testing: ",JSON.stringify(e.weatherData,null,2)),r.a.createElement("h2",null,e.weatherData.name),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a.icon,"@2x.png"),alt:"weather icon"}),r.a.createElement("span",{className:"weather-desc"},a.description),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(u.a,null),e.weatherData.main.temp,"\xb0F",r.a.createElement("br",null),r.a.createElement(m.a,null)," Feels like ",e.weatherData.main.feels_like,"\xb0F",r.a.createElement("br",null),r.a.createElement(h.a,null)," ",e.weatherData.main.temp_max,"\xb0F |"," ",r.a.createElement(p.a,null)," ",e.weatherData.main.temp_min,"\xb0F"),r.a.createElement("div",null,r.a.createElement(d.a,null),r.a.createElement("div",{style:{display:"inline",marginTop:"-5"}},e.weatherData.wind.speed,"mph at ",e.weatherData.wind.deg,"\xb0")),r.a.createElement("div",null,r.a.createElement(E.a,null)," ",b(e.weatherData.sys.sunrise)),r.a.createElement("div",null,r.a.createElement(w.a,null)," ",b(e.weatherData.sys.sunset)))}return null},y=t(3),j=t.n(y),k=t(8),N=function(e){var a=Object(n.useState)(),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(),i=Object(s.a)(o,2),u=i[0],m=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"zipcode"},"Zip Code:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"zipcode",name:"zipcode",placeholder:"enter weather data",onChange:function(e){isNaN(e.target.value)?(c(null),m("Please enter a valid number")):(m(null),c(e.target.value))}})),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(l,",").concat("us","&appid=").concat("f93cef4b0a2e48e43b7bdeb56b87290c")).then(function(){var a=Object(k.a)(j.a.mark((function a(t){var n;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,console.log(n),e.setWeatherData(n);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}},"Find Weather Data"),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"red"}},u))},F=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("main",null,r.a.createElement(N,{setWeatherData:l}),r.a.createElement(D,{weatherData:t}))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Welcome to Weather or Not!"),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload (only if in dev mode)."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},9:function(e,a,t){e.exports=t(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.0fa5b493.chunk.js.map