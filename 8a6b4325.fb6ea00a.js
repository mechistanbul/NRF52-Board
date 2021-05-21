(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/image_nrf52bmp-edcfa534cb356cafe55b5a5ad8b95bbe.png"},146:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pcb_top_nrf52_bmp-8520ff9ca27446e31b8ba73c4eaa007c.svg"},147:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pcb_bottom_nrf52_bmp-12ff1e4d2d0818a3fafbe0bd62f127b0.svg"},148:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/schematic_nrf52bmp-c258e7d3bfbd5bc3efeb232853295494.png"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),o=r(7),n=(r(0),r(98)),i={id:"programmer_nrf52bmp",title:"nRF52 GDB Debugger"},l={unversionedId:"programmer/programmer_nrf52bmp",id:"programmer/programmer_nrf52bmp",isDocsHomePage:!1,title:"nRF52 GDB Debugger",description:"Description",source:"@site/docs/programmer/nrf52bmp.md",slug:"/programmer/programmer_nrf52bmp",permalink:"/docs/programmer/programmer_nrf52bmp",editUrl:"https://github.com/jpconstantineau/NRF52-Board/edit/master/documentation/docs/programmer/nrf52bmp.md",version:"current",sidebar:"someSidebar",previous:{title:"Need a Programmer?",permalink:"/docs/programmer/"}},c=[{value:"Description",id:"description",children:[]},{value:"Final Assembly",id:"final-assembly",children:[]},{value:"Received a pertially assembled one?",id:"received-a-pertially-assembled-one",children:[{value:"USB-C Connector",id:"usb-c-connector",children:[]},{value:"Flashing the firmware",id:"flashing-the-firmware",children:[]}]},{value:"Using the nRF52 GDB Debugger to Flash the bootloader to a nRF52",id:"using-the-nrf52-gdb-debugger-to-flash-the-bootloader-to-a-nrf52",children:[]},{value:"PCB",id:"pcb",children:[]},{value:"Schematic",id:"schematic",children:[]}],s={rightToc:c};function b(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"The nRF52 GDB Debugger is an inexpensive Open Source blackmagic probe compatible SWD debugger designed to be used with ARM GDB. It supports ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/blacksphere/blackmagic/wiki"}),"many platforms"),", but was primarily designed for use with our Nordic Semiconductor nRF52 BLE boards."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:r(145).default})),Object(n.b)("p",null,"When we built our BlueMicro840 and BlueMacro840 boards, we were looking for an simple option to upload the bootloader without the need to worry about additionnal cables or adapters between the programmer and the board.  Then we came across the blackmagic probe (BMP) project - an Open Source debugging tool for embedded microprocessors. "),Object(n.b)("p",null,"Although the BMP hardware is excellent, it requires the use of adapters to convert the standard 1.27mm 2x5 pins programming header to the larger 2.54mm pin header.\nSo we decided to make use of their liberal open source license and build something that fits our requirements, albeit with less capabilities.  To maintain firmware compatibility with the original BMP, we designed it to be compatible with the first version of the BlackMagic probe.  As such, the same firmware as the Blackmagic Probe can be uploaded to the nRF52 GDB Debugger."),Object(n.b)("p",null,"From a software point of view, using the Blackmagic probe greatly simplifies the debugging and code uploading process by just using ARM GDB - no need to run a GDB server or use an additional complex tool like openocd.  Arduino Support for the nRF52 GDB Debugger has been added to the Community nRF52 Board Support Package.  This further simplifies the process of uploading the bootloader to the boards. "),Object(n.b)("h2",{id:"final-assembly"},"Final Assembly"),Object(n.b)("p",null,"If you purchased an assembled and tested nRF52 GDB Debugger, the USB-C connector will be soldered on.  The bootloader and the Black Magic Probe firmware will have been flashed on.  To save on potential damage to the headers while shipping, they are not installed on the nRF52 GDB Debugger.  You will need to solder these yourself.  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"2x5 Pin header: this is a standard ARM programmer pinout which is designed to be used with the Tag Connect TC2050-IDC-NL programming cable.  These are only needed if you plan to use a standard ARM programming cable."),Object(n.b)("li",{parentName:"ul"},"1x4 Pin header: this header matches the SWD pins on the edge of the BlueMicro840 and BlueMacro840 controllers. If you only need to flash a BlueMicro840 or BlueMacro840, you only need to install these pins."),Object(n.b)("li",{parentName:"ul"},"1x3 Pin header: this header exposes the serial pins of the programmer.  These are not generally needed."),Object(n.b)("li",{parentName:"ul"},"DFU update button: this button is only needed if you need to upload a new version of the firmware to the nRF52 GDB Debugger.")),Object(n.b)("h2",{id:"received-a-pertially-assembled-one"},"Received a pertially assembled one?"),Object(n.b)("p",null,"If you purchased a partially assembled nRF52 GDB Debugger, the USB-C connector won't be soldered on.  The bootloader will have been flashed but the firmware will not have been flashed."),Object(n.b)("h3",{id:"usb-c-connector"},"USB-C Connector"),Object(n.b)("p",null,"Steps to solder the TYPE-C-31-M-12 from Korean Hroparts Elec onto a PCB using only a Soldering Iron:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'using a no-clean rosin fluxed Solder, pre-apply some solder to the pads, making sure you don\'t have large "blobs" or joints between pads.'),Object(n.b)("li",{parentName:"ol"},"place the connector on top, making sure to align it properly."),Object(n.b)("li",{parentName:"ol"},"apply heat to the connector pins.  This will solder the pins in place."),Object(n.b)("li",{parentName:"ol"},"once soldered, move on to the body of the connector, starting with one of the larger pegs."),Object(n.b)("li",{parentName:"ol"},"Once the 4 metal body pegs are soldered, pass again over the connector pins; making sure that no solder bridges two pins.")),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/PbO9HdlcIPY",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("p",null,"Tools I use for soldering the connector:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"TS 100 Soldering Iron with 19V power supply (300C setting)"),Object(n.b)("li",{parentName:"ul"},"TS-D24 Soldering Tip. This is the Chisel Tip one."),Object(n.b)("li",{parentName:"ul"},"Copper Cleaning Ball for Soldering Iron (ball of copper wool in a metal container)"),Object(n.b)("li",{parentName:"ul"},'MG Chemicals 63/37 No Clean Leaded Solder, 0.032" Diameter')),Object(n.b)("p",null,"Once you have soldered the connectors on, you will need to test if there are any shorts between VUsb and GND. These are the outermost pins on each side of the connector.  Because VUsb is not available on the pins, I use a USB tester.  You can test it using a multimeter on the continuity testing function."),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"//www.youtube.com/embed/2jEpu-We5eI",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("p",null,"Tools I use for testing  the connector:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://s.click.aliexpress.com/e/_AaXAiW"}),"USB Tester")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://s.click.aliexpress.com/e/_Aot7Zo"}),"25cm USB-C Cable")),Object(n.b)("li",{parentName:"ul"},"Old phone charger")),Object(n.b)("h3",{id:"flashing-the-firmware"},"Flashing the firmware"),Object(n.b)("p",null,"With the bootloader flashed to the nRF52 GDB Debugger, the LEDs will be cycling/blinking.  This indicates that the bootloader is ready to listen to the DFU-Util for flashing a firmware."),Object(n.b)("p",null,"You will need to download the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/blacksphere/blackmagic/releases"}),"latest firmware"),' from the blackmagic github reporitory. Just download the latest .tar.gz file and uncompress it (I use 7-zip). You will need the "blackmagic-native.bin" file from it.'),Object(n.b)("p",null,'To flash the firmware, you will need the "dfu-util" package. Follow the instructions on Blackmagic\'s ',Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/blacksphere/blackmagic/wiki/Upgrading-Firmware"}),"Upgrading Fiwmware")," wiki page for detailed steps on how to proceed."),Object(n.b)("h2",{id:"using-the-nrf52-gdb-debugger-to-flash-the-bootloader-to-a-nrf52"},"Using the nRF52 GDB Debugger to Flash the bootloader to a nRF52"),Object(n.b)("p",null,"Using the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jpconstantineau/Community_nRF52_Arduino/wiki/Installation-Instructions"}),"Community nRF52 Add-on Boards")," in the Arduino IDE, it's possible to unlock and flash the bootloader very easily without the need to configure any special software."),Object(n.b)("figure",{class:"video-container"},Object(n.b)("iframe",{src:"http://www.youtube.com/embed/-Na2m6-LVGI",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Select Board type.  In this video, it's a BlueMacro840"),Object(n.b)("li",{parentName:"ol"},"If your chip is locked: Select Programmer (use Black Magic Probe - Unlock and Erase)"),Object(n.b)("li",{parentName:"ol"},"Select Serial port from Programmer (there are 2, you may have to try each one)"),Object(n.b)("li",{parentName:"ol"},'Select "Burn Bootloader" while making sure there is good contact with the board. This will unlock the nrf52840 (or nrf52832)'),Object(n.b)("li",{parentName:"ol"},"If your chip is not locked: Select Programmer (use Black Magic Probe)"),Object(n.b)("li",{parentName:"ol"},'Select "Burn Bootloader" while making sure there is good contact with the board. This will flash the bootloader')),Object(n.b)("p",null,"There are 2 common errors:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SWD Scan failed: this is generally due to a poor connection with the chip. Note that in the video, I give the BlueMacro840 and nRF52 GDB Debugger a gentle twist to make sure I have a good contact."),Object(n.b)("li",{parentName:"ul"},'Cannot flash because the chip is protected.  You need to "unlock and erase" before flashing the bootloader. ')),Object(n.b)("h2",{id:"pcb"},"PCB"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Top"),Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Bottom"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("img",{alt:"img",src:r(146).default})),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("img",{alt:"img",src:r(147).default}))))),Object(n.b)("h2",{id:"schematic"},"Schematic"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img",src:r(148).default})))}b.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(r),u=a,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||n;return r?o.a.createElement(h,l(l({ref:t},s),{},{components:r})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);