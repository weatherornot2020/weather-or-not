(this["webpackJsonpweather-or-not"]=this["webpackJsonpweather-or-not"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(14),a(6)),i=a.n(o),u=(a(15),a(2)),s=a(22),m=a(23),h=a(24),p=a(25),E=a(26),d=a(27),w=a(28),f=a(7),g=a.n(f);function v(e){return("0"+e).slice(-2)}function D(e){var t=new Date(1e3*e),a=t.getHours(),n=t.getMinutes(),r=t.getSeconds(),l=a>=12?"PM":"AM";return a>12&&(a-=12),v(a)+":"+v(n)+":"+v(r)+l}var b=function(e){if(e.weatherData&&e.weatherData.weather&&e.weatherData.weather[0]){var t=e.weatherData.weather[0];return r.a.createElement(g.a,null,r.a.createElement("div",null,"temporary for testing: ",JSON.stringify(e.weatherData,null,2)),r.a.createElement("h2",null,e.weatherData.name),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t.icon,"@2x.png"),alt:"weather icon"}),r.a.createElement("span",{className:"weather-desc"},t.description),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(s.a,null),e.weatherData.main.temp,"\xb0F",r.a.createElement("br",null),r.a.createElement(m.a,null)," Feels like ",e.weatherData.main.feels_like,"\xb0F",r.a.createElement("br",null),r.a.createElement(h.a,null)," ",e.weatherData.main.temp_max,"\xb0F |"," ",r.a.createElement(p.a,null)," ",e.weatherData.main.temp_min,"\xb0F"),r.a.createElement("div",null,r.a.createElement(E.a,null),r.a.createElement("div",{style:{display:"inline",marginTop:"-5"}},e.weatherData.wind.speed,"mph at ",e.weatherData.wind.deg,"\xb0")),r.a.createElement("div",null,r.a.createElement(d.a,null)," ",D(e.weatherData.sys.sunrise)),r.a.createElement("div",null,r.a.createElement(w.a,null)," ",D(e.weatherData.sys.sunset)))}return null},_=a(3),O=a.n(_),S=a(8),y=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(u.a)(o,2),s=i[0],m=i[1],h=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-or-not",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEATHER_API_KEY;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"zipcode"},"Zip Code:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"zipcode",name:"zipcode",placeholder:"enter weather data",onChange:function(e){isNaN(e.target.value)?(c(null),m("Please enter a valid number")):(m(null),c(e.target.value))}})),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(l,",").concat("us","&appid=").concat(h)).then(function(){var t=Object(S.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:n=t.sent,console.log(n),e.setWeatherData(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}},"Find Weather Data"),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"red"}},s))},j=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("main",null,r.a.createElement(y,{setWeatherData:l}),r.a.createElement(b,{weatherData:a}))};var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Welcome to Weather or Not!"),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload (only if in dev mode)."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.89fdd196.chunk.js.map