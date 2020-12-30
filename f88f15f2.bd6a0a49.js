(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{152:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/pinout_bluemicrov1.0-492bb04538c1ad249169afbb2a38e5a2.svg"},153:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/schematic_bluemicro840_1.0-a8bab4054d9ddeeb92fb4297b6b22eda.png"},91:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var r=o(3),a=o(7),n=(o(0),o(96)),l={id:"bluemicro840_v1",title:"BlueMicro840 V1.x"},i={unversionedId:"bluemicro840_v1",id:"bluemicro840_v1",isDocsHomePage:!1,title:"BlueMicro840 V1.x",description:"Description",source:"@site/docs/bluemicro840v1.md",slug:"/bluemicro840_v1",permalink:"/docs/bluemicro840_v1",editUrl:"https://github.com/jpconstantineau/NRF52-Board/edit/master/documentation/docs/bluemicro840v1.md",version:"current",sidebar:"someSidebar",previous:{title:"BlueMicro V2.1",permalink:"/docs/bluemicro_v2_1"},next:{title:"BlueMacro840 V1.x",permalink:"/docs/bluemacro840_v1"}},c=[{value:"Description",id:"description",children:[]},{value:"Processor and Module",id:"processor-and-module",children:[]},{value:"Bootloader",id:"bootloader",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Pinout",id:"pinout",children:[]},{value:"PCB",id:"pcb",children:[]},{value:"Schematic",id:"schematic",children:[]},{value:"Building it yourself?",id:"building-it-yourself",children:[{value:"Small Components",id:"small-components",children:[]},{value:"USB-C Connector",id:"usb-c-connector",children:[]},{value:"E73 Module",id:"e73-module",children:[]},{value:"Flash Bootloader",id:"flash-bootloader",children:[]},{value:"Test USB-C Connector",id:"test-usb-c-connector",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("h2",{id:"processor-and-module"},"Processor and Module"),Object(n.b)("p",null,"The BlueMicro840 uses the nRF52840 from Nordic Semiconductors. For an overview of the features of this SoC, refer to Nordic's ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52840"}),"Product Page"),".  The most important features are as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"64 MHz Cortex-M4 with FPU"),Object(n.b)("li",{parentName:"ul"},"1 MB Flash, 256 KB RAM"),Object(n.b)("li",{parentName:"ul"},"2.4 GHz Transceiver"),Object(n.b)("li",{parentName:"ul"},"-20 to +8 dbm programmable TX Power"),Object(n.b)("li",{parentName:"ul"},"48 configurable GPIOs"),Object(n.b)("li",{parentName:"ul"},"USB 2.0")),Object(n.b)("p",null,"For a detailed description of the nRF52840, you can download the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://infocenter.nordicsemi.com/pdf/nRF52840_PS_v1.1.pdf"}),"datasheet")," (619 pages)."),Object(n.b)("p",null,"The BlueMicro840 uses the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://s.click.aliexpress.com/e/_dWxR3nN"}),"Ebyte E73-2G4M08S1C module"),". This module is FCC and CE certified.",Object(n.b)("br",{parentName:"p"}),"\n","The module uses a ceramic antenna and makes 32 GPIOs available externally, 2 of which are reserved for the low frequency crystal oscilator and 1 is reserved for the reset button.\nFor a detailed description of the module, refer to the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.ebyte.com/en/downpdf.aspx?id=445"}),"manual"),"."),Object(n.b)("h2",{id:"bootloader"},"Bootloader"),Object(n.b)("p",null,"Although the BlueMicro840 can be programmed using the Nordic Software Development Kit and other commercial tools, we recommend using the open source ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/adafruit/Adafruit_nRF52_Bootloader"}),"Adafruit nRF52 Bootloader")," as the bootloader for the BlueMicro840.  Two versions of the bootloader are compatible with the BlueMicro840:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK"}),"Nordic nRF52840-DK")," - also named PCA10056"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://nrf52.jpconstantineau.com/docs/bluemicro840_v1"}),"BlueMicro840"),".")),Object(n.b)("p",null,"You can obtain the above bootloaders from the following locations:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"release artifacts of the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases"}),"Adafruit Repo")),Object(n.b)("li",{parentName:"ul"},"release artifacts of the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jpconstantineau/Adafruit_nRF52_Bootloader/releases"}),"Forked Repo")),Object(n.b)("li",{parentName:"ul"},"Adafruit nRF52 Arduino Board Support Package"),Object(n.b)("li",{parentName:"ul"},"Community Add-on to Adafruit nRF52 Arduino Board Support Package")),Object(n.b)("h2",{id:"firmware"},"Firmware"),Object(n.b)("h2",{id:"pinout"},"Pinout"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:o(152).default})),Object(n.b)("h2",{id:"pcb"},"PCB"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Top"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Bottom"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("img",{src:"http://nrf52.jpconstantineau.com/img/pcb_top_bluemicro840_1.0.svg",width:"200"})),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("img",{src:"http://nrf52.jpconstantineau.com/img/pcb_bottom_bluemicro840_1.0.svg",width:"200"}))))),Object(n.b)("h2",{id:"schematic"},"Schematic"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:o(153).default})),Object(n.b)("h2",{id:"building-it-yourself"},"Building it yourself?"),Object(n.b)("p",null,"You need to order the parts included in this ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/jpconstantineau/NRF52-Board/master/BlueMicro840/BlueMicro840.csv"}),"csv BOM"),".  You can it load in Excel.  The LCSC column refers to the part number at ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://lcsc.com/"}),"LCSC.com"),"."),Object(n.b)("h3",{id:"small-components"},"Small Components"),Object(n.b)("p",null,"If you are assembling the BlueMicro840 yourself, refer to the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://nrf52.jpconstantineau.com/bom/BlueMicro840/ibom.html"}),"HTML Bom")," to help you as you assemble it. If you have received the partially assembled boards, you will have all these components already installed and you can move on to the next section."),Object(n.b)("h3",{id:"usb-c-connector"},"USB-C Connector"),Object(n.b)("p",null,'Steps to solder the TYPE-C-31-M-12 from Korean Hroparts Elec onto a PCB using only a Soldering Iron:\n1 - using a no-clean rosin fluxed Solder, pre-apply some solder to the pads, making sure you don\'t have large "blobs" or joints between pads.\n2 - place the connector on top, making sure to align it properly.\n3 - apply heat to the connector pins.  This will solder the pins in place.\n4 - once soldered, move on to the body of the connector, starting with one of the larger pegs.\n5 - Once the 4 metal body pegs are soldered, pass again over the connector pins; making sure that no solder bridges two pins.'),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/PbO9HdlcIPY",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("p",null,"Tools I use for soldering the connector:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"TS 100 Soldering Iron with 19V power supply (300C setting)"),Object(n.b)("li",{parentName:"ul"},"TS-D24 Soldering Tip. This is the Chisel Tip one."),Object(n.b)("li",{parentName:"ul"},"Copper Cleaning Ball for Soldering Iron (ball of copper wool in a metal container)"),Object(n.b)("li",{parentName:"ul"},'MG Chemicals 63/37 No Clean Leaded Solder, 0.032" Diameter')),Object(n.b)("p",null,"Once you have soldered the connectors on, you will need to test if there are any shorts between VUsb and GND. These are the outermost pins on each side of the connector.  Because VUsb is not available on the pins, I use a USB tester.  You can test it using a multimeter on the continuity testing function."),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/2jEpu-We5eI",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("p",null,"Tools I use for testing  the connector:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://s.click.aliexpress.com/e/_AaXAiW"}),"USB Tester")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://s.click.aliexpress.com/e/_Aot7Zo"}),"25cm USB-C Cable")),Object(n.b)("li",{parentName:"ul"},"Old phone charger")),Object(n.b)("h3",{id:"e73-module"},"E73 Module"),Object(n.b)("p",null,"With the hidden pads underneath the module, soldering it to a PCB using just a soldering iron isn't a trivial task."),Object(n.b)("p",null,"Steps:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Add a bead of solder to the inner pads of the E73 module.  Make sure that they are not too large and are all the same size"),Object(n.b)("li",{parentName:"ol"},'Line-up the beads with the holes matching these pads in the PCB.  Since the beads will "fall into" the holes they will "fall in place" somewhat.  A binder clip will help hold everything together'),Object(n.b)("li",{parentName:"ol"},"Heat-up the inner pads on the opposite side of the PCB, distributing the heat to all pads so that the solder melt and until there is no gap left between the module and PCB.  This will require multiple passes with a larger soldering iron tip to heat more than 1 pad at a time."),Object(n.b)("li",{parentName:"ol"},"Once the inner pads are soldered, change your tip to a conical one with w relatively fine tip (not super fine).  You can then start soldering the outer pads.  Make sure to keep the head and iron away from the holes of the PCB.  Only heat the castellations of the module, apply a little bit of solder and let it flow towards the PCB pad."),Object(n.b)("li",{parentName:"ol"},"Go and solder the 3 sides of the module, one joint at a time."),Object(n.b)("li",{parentName:"ol"},"Once you have all joints done, visually inspect all connections to make sure there are no shorts between pins."),Object(n.b)("li",{parentName:"ol"},"Go ahead and test with a USB tester.  This will make sure there are no shorts in the power circuitry."),Object(n.b)("li",{parentName:"ol"},"To test the rest, we need to flash a bootloader and some testing firmware on it.")),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/k_32XvBC0sA",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("p",null,"Tools Used:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"TS 100 Soldering Iron with 19V power supply (300C setting)"),Object(n.b)("li",{parentName:"ul"},"TS-D24 Soldering Tip. This is the Chisel Tip one."),Object(n.b)("li",{parentName:"ul"},"TS-B2 Conical Soldering Tip (not very fine like the TS-I)"),Object(n.b)("li",{parentName:"ul"},"Copper Cleaning Ball for Soldering Iron (ball of copper wool in a metal container)"),Object(n.b)("li",{parentName:"ul"},'MG Chemicals 63/37 No Clean Leaded Solder, 0.032" Diameter'),Object(n.b)("li",{parentName:"ul"},"Small Binder Clip"),Object(n.b)("li",{parentName:"ul"},"Solder Wick")),Object(n.b)("h3",{id:"flash-bootloader"},"Flash Bootloader"),Object(n.b)("p",null,"Using the Community nRF52 Add-on Boards in the Arduino IDE and a Black Magic Probe (nRF52 GDB Debugger), it's possible to unlock and flash the bootloader very easily without the need to configure any special software."),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/-Na2m6-LVGI",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Select Board type.  In this case, it's a BlueMacro840"),Object(n.b)("li",{parentName:"ol"},"Select Programmer (use Black Magic Probe - Unlock and Erase)"),Object(n.b)("li",{parentName:"ol"},"Select Serial port from Programmer (there are 2, you may have to try each one)"),Object(n.b)("li",{parentName:"ol"},'Select "Burn Bootloader" while making sure there is good contact with the board. This will unlock the nrf52840 (or nrf52832)'),Object(n.b)("li",{parentName:"ol"},"Select Programmer (use Black Magic Probe)"),Object(n.b)("li",{parentName:"ol"},'Select "Burn Bootloader" while making sure there is good contact with the board. This will flash the bootloader')),Object(n.b)("p",null,"There are 2 common errors:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SWD Scan failed: this is generally due to a poor connection with the chip. Note that in the video, I give the BlueMacro840 and programmer a gentle twist to make sure I have a good contact."),Object(n.b)("li",{parentName:"ul"},'Cannot flash because the chip is protected.  You need to "unlock and erase" before flashing the bootloader. ')),Object(n.b)("h3",{id:"test-usb-c-connector"},"Test USB-C Connector"),Object(n.b)("p",null,"This step is done after the bootloader is flashed to the chip.  With the bootloader enabled, we will see if the computer detects the nRF52840 chip.  If the device doesn't connect or if the device is not recognized, it's likely that the data lines on the USB-C connector are not soldered properly."),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/brCGFSwaw_k",frameborder:"0",allowfullscreen:!0,width:"100%"})))}b.isMDXComponent=!0},96:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return h}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(o),p=r,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||n;return o?a.a.createElement(h,i(i({ref:t},s),{},{components:o})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=o[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);