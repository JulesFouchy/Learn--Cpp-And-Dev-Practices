"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[7997],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7690:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i=["components"],s={title:"The Rule of 5",benefit:3,easiness:3,order:4,tags:["C++"]},c=void 0,l={unversionedId:"lessons/rule-of-5",id:"lessons/rule-of-5",isDocsHomePage:!1,title:"The Rule of 5",description:"The Rule of 5 states that if you write either a destructor, a copy constructor, a copy assignment, a move constructor or a move assignment, then you most likely need to write all 5 of them (they will not be generated by the compiler). This is because resources that need proper destruction most often also need proper copy. For example a raw owning pointer needs to be deleted, but also when you make a copy of it you want to copy the pointed object, not the pointer, in order to preserve value semantics. (If you were to copy only the pointer then the copied object would point to the same thing as the original object, they would not be independent copies).",source:"@site/docs/lessons/rule-of-5.md",sourceDirName:"lessons",slug:"/lessons/rule-of-5",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/rule-of-5",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/c"}],version:"current",frontMatter:{title:"The Rule of 5",benefit:3,easiness:3,order:4,tags:["C++"]},sidebar:"lessons",previous:{title:"Scope guard",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/scope-guard"},next:{title:"friend",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/friend"}},p=[],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Rule of 5")," states that if you write either a destructor, a copy constructor, a copy assignment, a move constructor or a move assignment, then you most likely need to write all 5 of them (they will not be generated by the compiler). This is because resources that need proper destruction most often also need proper copy. For example a raw owning pointer needs to be deleted, but also when you make a copy of it you want to copy the pointed object, not the pointer, in order to preserve value semantics. (If you were to copy only the pointer then the copied object would point to the same thing as the original object, they would not be independent copies)."),(0,a.kt)("p",null,"If you have to do that, try to limit its scope. You most likely have only one member of your class that requires the destructor / copy. Then, move that member into its own class that implements the rule of 5, and in your main class use that wrapper class and let the compiler generate the destructor / move / copy. It will prevent you from forgetting to copy a member in your copy / move, or something silly of that kind."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Most classes shouldn't have complex destruction behaviour, and those wo do should be kept to a minimal size."))))}d.isMDXComponent=!0}}]);