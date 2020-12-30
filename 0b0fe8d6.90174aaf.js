(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(96)),l={id:"programmer_overview",title:"Need a Programmer?",slug:"/programmer/"},b={unversionedId:"programmer/programmer_overview",id:"programmer/programmer_overview",isDocsHomePage:!1,title:"Need a Programmer?",description:"Why would you need one?",source:"@site/docs/programmer/overview.md",slug:"/programmer/",permalink:"/docs/programmer/",editUrl:"https://github.com/jpconstantineau/NRF52-Board/edit/master/documentation/docs/programmer/overview.md",version:"current",sidebar:"someSidebar",previous:{title:"4x4 Macropad",permalink:"/docs/macropad/4x4macropad"},next:{title:"nRF52 GDB Debugger",permalink:"/docs/programmer/programmer_nrf52bmp"}},c=[{value:"Why would you need one?",id:"why-would-you-need-one",children:[]},{value:"Available Options",id:"available-options",children:[]},{value:"Notes on Nordic Semiconductor and Segger",id:"notes-on-nordic-semiconductor-and-segger",children:[]},{value:"Notes on Adafruit nRF52 Arduino support",id:"notes-on-adafruit-nrf52-arduino-support",children:[]}],i={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-would-you-need-one"},"Why would you need one?"),Object(o.b)("p",null,"Here are a few reasons why you would need a SWD programmer:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"you have built/assembled a nRF52 board using a bare nRF52 chip or a module containing a nRF52 chip which were not previously programmed."),Object(o.b)("li",{parentName:"ul"},"you have completed the build of a partially assembled nRF52 board and need to flash the bootloader"),Object(o.b)("li",{parentName:"ul"},"you have somehow bricked your nRF52 board and need to re-flash the bootloader"),Object(o.b)("li",{parentName:"ul"},"you want to experiment with new bootloaders")),Object(o.b)("h2",{id:"available-options"},"Available Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Connector"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Software"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"License"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comments"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.digikey.com/en/products/detail/segger-microcontroller-systems/8-08-28-J-LINK-PLUS/4476087"}),"Segger J-Link Plus")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.54mm 2x10"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger J-Link"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Expensive")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.digikey.com/en/products/detail/segger-microcontroller-systems/8-08-90-J-LINK-EDU/2263130"}),"Segger J-Link Edu")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.54mm 2x10"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger J-Link"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Educational Use Only")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.digikey.com/en/products/detail/segger-microcontroller-systems/8-08-91-J-LINK-EDU-MINI/7387472"}),"Segger J-Link Edu Mini")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.27mm 2x5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger J-Link"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Educational Use Only, only supports 3.3V targets.  You will need a cable adapter.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chinese J-Link Clone"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Varies depending on version"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger J-Link"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Segger"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"may generate odd error messages (which can be dismissed), only supports 3.3V targets")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chinese ST-Link V2 Clone"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"non-standard 2.54 2x5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"OpenOCD"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Source"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Complex to setup, only supports 3.3V targets")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Raspberry Pi"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"40 Pin header"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"OpenOCD"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Source"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Complex to setup, only supports 3.3V targets")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CMSIS-DAP"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Varies but generally 1.27mm 2x5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"OpenOCD"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Source"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Complex to setup, only supports 3.3V targets")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://1bitsquared.com/collections/frontpage/products/black-magic-probe"}),"Blackmagic Probe")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.27mm 2x5"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GDB"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Source"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No additional software to setup. You will need a cable adapter. Supports 1.7-5V targets.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BluePill"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"non-standard 2.54"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GDB"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Source"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cheap but complex to setup, only supports 3.3V targets")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/programmer/programmer_nrf52bmp"}),"nRF52 SWD Programmer and Debugger")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2.54mm 2x5 and 2.54mm 1x4"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GDB"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Source"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No additional software to setup. Supports 1.8-3.3V targets.")))),Object(o.b)("h2",{id:"notes-on-nordic-semiconductor-and-segger"},"Notes on Nordic Semiconductor and Segger"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nordicsemi.com/Software-and-tools/Development-Tools/Segger-Embedded-Studio"}),"Segger and Nordic have worked together for years and Segger Embedded Studio is used internally by Nordic engineers"),". This is why Nordic usually recommends Segger's J-Link as the tool of choice for programming the nRF52 chips."),Object(o.b)("h2",{id:"notes-on-adafruit-nrf52-arduino-support"},"Notes on Adafruit nRF52 Arduino support"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/adafruit/Adafruit_nRF52_Arduino"}),"Adafruit nRF52 Arduino")," board support package uses Segger's J-Link to program the bootloader.  If you don't have a j-link, you won't be able to use the integration within the Arduino IDE to flash the bootloader."))}p.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,O=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.a.createElement(O,b(b({ref:t},i),{},{components:a})):n.a.createElement(O,b({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<o;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);