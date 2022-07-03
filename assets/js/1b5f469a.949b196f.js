"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[5115],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8720:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.id,n="https://marketplace.visualstudio.com/items?itemName="+t;return a.createElement("a",{href:n,target:"_blank"},t)}},9283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=n(8720),l=["components"],s={title:"Use a formatting tool",benefit:5,easiness:4,level:1,tags:["Tools"]},c=void 0,m={unversionedId:"lessons/formatting-tool",id:"lessons/formatting-tool",title:"Use a formatting tool",description:"Brief",source:"@site/../../content/lessons/formatting-tool.md",sourceDirName:"lessons",slug:"/lessons/formatting-tool",permalink:"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"}],version:"current",frontMatter:{title:"Use a formatting tool",benefit:5,easiness:4,level:1,tags:["Tools"]},sidebar:"lessons",previous:{title:"Use a debugger",permalink:"/Learn--Clean-Code-With-Cpp/lessons/debugger"},next:{title:"Use static analysers",permalink:"/Learn--Clean-Code-With-Cpp/lessons/static-analysers"}},u=[{value:"Brief",id:"brief",children:[],level:2},{value:"Details",id:"details",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"brief"},"Brief"),(0,r.kt)("p",null,"Tools can format your code automatically: fix indentation, add spaces consistently, put curly braces where you want them, ",(0,r.kt)("em",{parentName:"p"},"etc."),"\nIt saves a lot of time because it means you don't have to worry about it and do it manually!\nAlso, it ensures a consistency in style across the whole codebase and all the developers."),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("p",null,"For C++, ",(0,r.kt)("em",{parentName:"p"},"Clang format")," is the most popular one and I would recommend it. Here is how to set it up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install it on your computer. For Linux it is just a matter of using ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt install clang-format"),"."),(0,r.kt)("li",{parentName:"ul"},"Install the associated VSCode extension that will automatically run it on your code: ",(0,r.kt)(i.Z,{id:"xaver.clang-format",mdxType:"VSCodeExtension"}),"."),(0,r.kt)("li",{parentName:"ul"},"Go to your VSCode settings and:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("em",{parentName:"li"},"Default Formatter")," to Clang-Format"),(0,r.kt)("li",{parentName:"ul"},"enable ",(0,r.kt)("em",{parentName:"li"},"Format on Save"))))),(0,r.kt)("p",null,"You will also need to put a configuration file named ",(0,r.kt)("em",{parentName:"p"},".clang-format")," at the root of your project to specify how the formatting should be done. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://zed0.co.uk/clang-format-configurator/"},"this great website")," to configure it. Or if you don't want to spend too many time tweaking it yourself, you can use mine: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/tooling/blob/main/.clang-format"},"https://github.com/CoolLibs/tooling/blob/main/.clang-format"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that in some very specific cases you can disable clang-format locally to use some non-standard formatting, using these special comments:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// clang-format off\nvoid on_mouse_move  (Camera& camera, glm::vec2 const& delta) { std::visit([&](auto&& state) { state.on_mouse_move  (*this, camera, delta); }, _state); }\nvoid on_wheel_down  (Camera& camera, int mods)               { std::visit([&](auto&& state) { state.on_wheel_down  (*this, camera, mods);  }, _state); }\nvoid on_wheel_up    (Camera& camera)                         { std::visit([&](auto&& state) { state.on_wheel_up    (*this, camera);        }, _state); }\nvoid on_wheel_scroll(Camera& camera, float dl)               { std::visit([&](auto&& state) { state.on_wheel_scroll(*this, camera, dl);    }, _state); }\n// clang-format on\n")))))}d.isMDXComponent=!0}}]);