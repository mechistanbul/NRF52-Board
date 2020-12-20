(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{141:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/pinout_bluemacrov1.0-0d0c5ba57373c01a31f7a5036bf28cea.svg"},142:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/schematic_bluemacro840_1.0-af145fc66093690a741b4112d78e12ba.png"},78:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return n})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var a=o(3),r=o(7),l=(o(0),o(97)),n={id:"bluemacro840_v1",title:"BlueMacro840 V1.x"},i={unversionedId:"bluemacro840_v1",id:"bluemacro840_v1",isDocsHomePage:!1,title:"BlueMacro840 V1.x",description:"Description",source:"@site/docs/bluemacro840v1.md",slug:"/bluemacro840_v1",permalink:"/docs/bluemacro840_v1",editUrl:"https://github.com/jpconstantineau/NRF52-Board/edit/master/documentation/docs/bluemacro840v1.md",version:"current",sidebar:"someSidebar",previous:{title:"BlueMicro840 V1.x",permalink:"/docs/bluemicro840_v1"},next:{title:"Getting Started",permalink:"/docs/macropad/"}},c=[{value:"Description",id:"description",children:[]},{value:"Processor and Module",id:"processor-and-module",children:[]},{value:"Bootloader",id:"bootloader",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Pinout",id:"pinout",children:[]},{value:"PCB",id:"pcb",children:[]},{value:"Schematic",id:"schematic",children:[]},{value:"Building it yourself?",id:"building-it-yourself",children:[{value:"Small Components",id:"small-components",children:[]},{value:"USB-C Connector",id:"usb-c-connector",children:[]},{value:"E73 Module",id:"e73-module",children:[]},{value:"Flash Bootloader",id:"flash-bootloader",children:[]},{value:"Test USB-C Connector",id:"test-usb-c-connector",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("h2",{id:"processor-and-module"},"Processor and Module"),Object(l.b)("p",null,"The BlueMacro840 uses the nRF52840 from Nordic Semiconductors. For an overview of the features of this SoC, refer to Nordic's ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52840"}),"Product Page"),".  The most important features are as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"64 MHz Cortex-M4 with FPU"),Object(l.b)("li",{parentName:"ul"},"1 MB Flash, 256 KB RAM"),Object(l.b)("li",{parentName:"ul"},"2.4 GHz Transceiver"),Object(l.b)("li",{parentName:"ul"},"-20 to +8 dbm programmable TX Power"),Object(l.b)("li",{parentName:"ul"},"48 configurable GPIOs")),Object(l.b)("p",null,"For a detailed description of the nRF52840, you can download the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://infocenter.nordicsemi.com/pdf/nRF52840_PS_v1.1.pdf"}),"datasheet")," (619 pages)."),Object(l.b)("p",null,"The BlueMacro840 uses the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://s.click.aliexpress.com/e/_dWxR3nN"}),"Ebyte E73-2G4M08S1C module"),". This module is FCC and CE certified.",Object(l.b)("br",{parentName:"p"}),"\n","The module uses a ceramic antenna and makes 32 GPIOs available externally, 2 of which are reserved for the low frequency crystal oscilator and 1 is reserved for the reset button.\nFor a detailed description of the module, refer to the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.ebyte.com/en/downpdf.aspx?id=445"}),"manual"),"."),Object(l.b)("h2",{id:"bootloader"},"Bootloader"),Object(l.b)("p",null,"Although the BlueMacro840 can be programmed using the Nordic Software Development Kit and other commercial tools, we recommend using the open source ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/adafruit/Adafruit_nRF52_Bootloader"}),"Adafruit nRF52 Bootloader")," as the bootloader for the BlueMicro840.  Two versions of the bootloader are compatible with the BlueMacro840:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK"}),"Nordic nRF52840-DK")," - also named PCA10056"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://nrf52.jpconstantineau.com/docs/bluemicro840_v1"}),"BlueMicro840"),".")),Object(l.b)("p",null,"You can obtain the above bootloaders from the following locations:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"release artifacts of the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases"}),"Adafruit Repo")),Object(l.b)("li",{parentName:"ul"},"release artifacts of the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jpconstantineau/Adafruit_nRF52_Bootloader/releases"}),"Forked Repo")),Object(l.b)("li",{parentName:"ul"},"Adafruit nRF52 Arduino Board Support Package"),Object(l.b)("li",{parentName:"ul"},"Community Add-on to Adafruit nRF52 Arduino Board Support Package")),Object(l.b)("h2",{id:"firmware"},"Firmware"),Object(l.b)("h2",{id:"pinout"},"Pinout"),Object(l.b)("p",null,Object(l.b)("img",{alt:"img",src:o(141).default})),Object(l.b)("h2",{id:"pcb"},"PCB"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Top"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Bottom"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("img",{src:"http://nrf52.jpconstantineau.com/img/pcb_top_bluemacro840v1.svg",width:"200"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("img",{src:"http://nrf52.jpconstantineau.com/img/pcb_bottom_bluemacro840v1.svg",width:"200"}))))),Object(l.b)("h2",{id:"schematic"},"Schematic"),Object(l.b)("p",null,Object(l.b)("img",{alt:"img",src:o(142).default})),Object(l.b)("h2",{id:"building-it-yourself"},"Building it yourself?"),Object(l.b)("p",null,"You need to order the parts included in this ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/jpconstantineau/NRF52-Board/master/BlueMacro840/BlueMacro.csv"}),"csv BOM"),".  You can it load in Excel.  The LCSC column refers to the part number at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://lcsc.com/"}),"LCSC.com"),".  The Ebyte E73-2G4M08S1C modules can be obtained on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://s.click.aliexpress.com/e/_dWxR3nN"}),"AliExpress"),"."),Object(l.b)("h3",{id:"small-components"},"Small Components"),Object(l.b)("p",null,"If you are assembling the BlueMicro840 yourself, refer to the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://nrf52.jpconstantineau.com/bom/BlueMacro840/ibom.html"}),"HTML Bom")," to help you as you assemble it.  If you have received the partially assembled boards, you will have all these components already installed and you can move on to the next section."),Object(l.b)("h3",{id:"usb-c-connector"},"USB-C Connector"),Object(l.b)("p",null,'Steps to solder the TYPE-C-31-M-12 from Korean Hroparts Elec onto a PCB using only a Soldering Iron:\n1 - using a no-clean rosin fluxed Solder, pre-apply some solder to the pads, making sure you don\'t have large "blobs" or joints between pads.\n2 - place the connector on top, making sure to align it properly.\n3 - apply heat to the connector pins.  This will solder the pins in place.\n4 - once soldered, move on to the body of the connector, starting with one of the larger pegs.\n5 - Once the 4 metal body pegs are soldered, pass again over the connector pins; making sure that no solder bridges two pins.'),Object(l.b)("figure",{class:"video-container"},Object(l.b)("iframe",{src:"http://www.youtube.com/embed/PbO9HdlcIPY",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(l.b)("p",null,"Tools I use for soldering the connector:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TS 100 Soldering Iron with 19V power supply (300C setting)"),Object(l.b)("li",{parentName:"ul"},"TS-D24 Soldering Tip. This is the Chisel Tip one."),Object(l.b)("li",{parentName:"ul"},"Copper Cleaning Ball for Soldering Iron (ball of copper wool in a metal container)"),Object(l.b)("li",{parentName:"ul"},'MG Chemicals 63/37 No Clean Leaded Solder, 0.032" Diameter')),Object(l.b)("p",null,"Once you have soldered the connectors on, you will need to test if there are any shorts between VUsb and GND. These are the outermost pins on each side of the connector.  Because VUsb is not available on the pins, I use a USB tester.  You can test it using a multimeter on the continuity testing function."),Object(l.b)("figure",{class:"video-container"},Object(l.b)("iframe",{src:"//www.youtube.com/embed/2jEpu-We5eI",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(l.b)("p",null,"Tools I use for testing  the connector:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://s.click.aliexpress.com/e/_AaXAiW"}),"USB Tester")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://s.click.aliexpress.com/e/_Aot7Zo"}),"25cm USB-C Cable")),Object(l.b)("li",{parentName:"ul"},"Old phone charger")),Object(l.b)("h3",{id:"e73-module"},"E73 Module"),Object(l.b)("p",null,"With the hidden pads underneath the module, soldering it to a PCB using just a soldering iron isn't a trivial task."),Object(l.b)("p",null,"Steps:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Add a bead of solder to the inner pads of the E73 module.  Make sure that they are not too large and are all the same size"),Object(l.b)("li",{parentName:"ol"},'Line-up the beads with the holes matching these pads in the PCB.  Since the beads will "fall into" the holes they will "fall in place" somewhat.  A binder clip will help hold everything together'),Object(l.b)("li",{parentName:"ol"},"Heat-up the inner pads on the opposite side of the PCB, distributing the heat to all pads so that the solder melt and until there is no gap left between the module and PCB.  This will require multiple passes with a larger soldering iron tip to heat more than 1 pad at a time."),Object(l.b)("li",{parentName:"ol"},"Once the inner pads are soldered, change your tip to a conical one with w relatively fine tip (not super fine).  You can then start soldering the outer pads.  Make sure to keep the head and iron away from the holes of the PCB.  Only heat the castellations of the module, apply a little bit of solder and let it flow towards the PCB pad."),Object(l.b)("li",{parentName:"ol"},"Go and solder the 3 sides of the module, one joint at a time."),Object(l.b)("li",{parentName:"ol"},"Once you have all joints done, visually inspect all connections to make sure there are no shorts between pins."),Object(l.b)("li",{parentName:"ol"},"Go ahead and test with a USB tester.  This will make sure there are no shorts in the power circuitry."),Object(l.b)("li",{parentName:"ol"},"To test the rest, we need to flash a bootloader and some testing firmware on it.")),Object(l.b)("figure",{class:"video-container"},Object(l.b)("iframe",{src:"http://www.youtube.com/embed/k_32XvBC0sA",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(l.b)("p",null,"Tools Used:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TS 100 Soldering Iron with 19V power supply (300C setting)"),Object(l.b)("li",{parentName:"ul"},"TS-D24 Soldering Tip. This is the Chisel Tip one."),Object(l.b)("li",{parentName:"ul"},"TS-B2 Conical Soldering Tip (not very fine like the TS-I)"),Object(l.b)("li",{parentName:"ul"},"Copper Cleaning Ball for Soldering Iron (ball of copper wool in a metal container)"),Object(l.b)("li",{parentName:"ul"},'MG Chemicals 63/37 No Clean Leaded Solder, 0.032" Diameter'),Object(l.b)("li",{parentName:"ul"},"Small Binder Clip"),Object(l.b)("li",{parentName:"ul"},"Solder Wick")),Object(l.b)("h3",{id:"flash-bootloader"},"Flash Bootloader"),Object(l.b)("p",null,"Using the Community nRF52 Add-on Boards in the Arduino IDE and a Black Magic Probe (nRF52 GDB Debugger), it's possible to unlock and flash the bootloader very easily without the need to configure any special software."),Object(l.b)("figure",{class:"video-container"},Object(l.b)("iframe",{src:"http://www.youtube.com/embed/-Na2m6-LVGI",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Select Board type.  In this case, it's a BlueMacro840"),Object(l.b)("li",{parentName:"ol"},"Select Programmer (use Black Magic Probe - Unlock and Erase)"),Object(l.b)("li",{parentName:"ol"},"Select Serial port from Programmer (there are 2, you may have to try each one)"),Object(l.b)("li",{parentName:"ol"},'Select "Burn Bootloader" while making sure there is good contact with the board. This will unlock the nrf52840 (or nrf52832)'),Object(l.b)("li",{parentName:"ol"},"Select Programmer (use Black Magic Probe)"),Object(l.b)("li",{parentName:"ol"},'Select "Burn Bootloader" while making sure there is good contact with the board. This will flash the bootloader')),Object(l.b)("p",null,"There are 2 common errors:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SWD Scan failed: this is generally due to a poor connection with the chip. Note that in the video, I give the BlueMacro840 and programmer a gentle twist to make sure I have a good contact."),Object(l.b)("li",{parentName:"ul"},'Cannot flash because the chip is protected.  You need to "unlock and erase" before flashing the bootloader. ')),Object(l.b)("h3",{id:"test-usb-c-connector"},"Test USB-C Connector"),Object(l.b)("p",null,"This step is done after the bootloader is flashed to the chip.  With the bootloader enabled, we will see if the computer detects the nRF52840 chip.  If the device doesn't connect or if the device is not recognized, it's likely that the data lines on the USB-C connector are not soldered properly."),Object(l.b)("figure",{class:"video-container"},Object(l.b)("iframe",{src:"http://www.youtube.com/embed/brCGFSwaw_k",frameborder:"0",allowfullscreen:!0,width:"100%"})))}b.isMDXComponent=!0}}]);