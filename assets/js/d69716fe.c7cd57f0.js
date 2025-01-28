"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Testing",benefit:5,easiness:2,level:"practices-and-patterns",tags:["Clean Code"]},l=void 0,p={unversionedId:"lessons/testing",id:"lessons/testing",title:"Testing",description:"https://youtu.be/ta3S8CRN2TM?t=1306",source:"@site/../../content/lessons/testing.md",sourceDirName:"lessons",slug:"/lessons/testing",permalink:"/Learn--Clean-Code-With-Cpp/lessons/testing",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Testing",benefit:5,easiness:2,level:"practices-and-patterns",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Dear ImGui",permalink:"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui"},next:{title:"Avoid unnecessary condition nesting",permalink:"/Learn--Clean-Code-With-Cpp/lessons/avoid-unnecessary-condition-nesting"}},c=[{value:"Unit Tests",id:"unit-tests",children:[],level:2},{value:"UnitTesting libraries",id:"unittesting-libraries",children:[],level:2},{value:"Test-Driven Development (TDD)",id:"test-driven-development-tdd",children:[],level:2},{value:"Going further",id:"going-further",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/ta3S8CRN2TM?t=1306"},"https://youtu.be/ta3S8CRN2TM?t=1306")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/u5senBJUkPc"},"https://youtu.be/u5senBJUkPc")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/cfh6ZrA19r4?t=983"},"https://youtu.be/cfh6ZrA19r4?t=983")),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"For example I wrote tests for the code that computes your grades: TODO PUT A LINK"),(0,a.kt)("h2",{id:"unittesting-libraries"},"UnitTesting libraries"),(0,a.kt)("p",null,"There a few out there. I personaly use and recommend ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/doctest/doctest"},"doctest"),". Other popular libraries include ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/googletest"},"GoogleTest")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/catchorg/Catch2"},"Catch2"),"."),(0,a.kt)("h2",{id:"test-driven-development-tdd"},"Test-Driven Development (TDD)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://blog.wingman-sw.com/tdd-guided-by-zombies"},"http://blog.wingman-sw.com/tdd-guided-by-zombies")),(0,a.kt)("h2",{id:"going-further"},"Going further"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Going further")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/N2gTxeIHMP0"},"Phil Nash, ",(0,a.kt)("em",{parentName:"a"},"Test Driven C++"))," (1h) About TDD "))))}d.isMDXComponent=!0}}]);