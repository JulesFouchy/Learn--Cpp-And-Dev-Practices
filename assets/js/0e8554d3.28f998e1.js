"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[2059],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Continuous Integration (CI)",benefit:4,easiness:3,level:"tools",tags:["Tools"]},l=void 0,c={unversionedId:"lessons/ci",id:"lessons/ci",title:"Continuous Integration (CI)",description:"Brief",source:"@site/../../content/lessons/ci.md",sourceDirName:"lessons",slug:"/lessons/ci",permalink:"/Learn--Clean-Code-With-Cpp/lessons/ci",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"}],version:"current",frontMatter:{title:"Continuous Integration (CI)",benefit:4,easiness:3,level:"tools",tags:["Tools"]},sidebar:"lessons",previous:{title:"Linter",permalink:"/Learn--Clean-Code-With-Cpp/lessons/static-analysers"},next:{title:"Markdown",permalink:"/Learn--Clean-Code-With-Cpp/lessons/markdown"}},u=[{value:"Brief",id:"brief",children:[],level:2},{value:"How to",id:"how-to",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"Continuous Integration is the process of testing your code automatically whenever you make changes to it."),(0,a.kt)("p",null,"For example, you can set it up with GitHub so that, whenever you make a commit, a server will automatically try to build your code and run your tests and, if anything fails, it will warn you. CI is an essential part of development as it ensures that you notice immediately if you break something. It also allows you to test your code on all the platforms (Windows, Linux, MacOS, ...) and all the compilers (Clang, GCC, MSVC, ...) and benefit from all the warnings they have to offer."),(0,a.kt)("p",null,"You can see the progress (and eventual errors) of your tests in the ",(0,a.kt)("em",{parentName:"p"},"Actions")," tab of your GitHub repository."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/45451201/217274801-37bc38bd-055a-4a84-89b9-e2d56c798b2f.png",alt:"image"})),(0,a.kt)("p",null,"You will also receive an email if something fails."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("p",null,"To learn more about the specifics of GitHub Actions for C++, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/cpp-CI-template"},"see this article"),". Or you can check out how CI is set up in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-p6-Setup"},"this template"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is also possible to do this with GitLab (and many others) but you will have to look it up on your own."))))}m.isMDXComponent=!0}}]);