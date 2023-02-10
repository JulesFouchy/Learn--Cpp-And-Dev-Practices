"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1537],{4137:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9104:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),i=["components"],c={title:"Error Handling",benefit:3,easiness:4,level:"practices-and-patterns",tags:["Clean Code"]},p=void 0,s={unversionedId:"lessons/error-handling",id:"lessons/error-handling",title:"Error Handling",description:"Exceptions",source:"@site/../../content/lessons/error-handling.md",sourceDirName:"lessons",slug:"/lessons/error-handling",permalink:"/Learn--Clean-Code-With-Cpp/lessons/error-handling",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Error Handling",benefit:3,easiness:4,level:"practices-and-patterns",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Dependency Injection",permalink:"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection"},next:{title:"Scope guard",permalink:"/Learn--Clean-Code-With-Cpp/lessons/scope-guard"}},l=[{value:"Exceptions",id:"exceptions",children:[],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"exceptions"},"Exceptions"),(0,a.kt)("p",null,"Despite their bad reputations, they are actually pretty good and you should consider using them."),(0,a.kt)("p",null,"Here is a very nice paper by Bjarne Stroustrup defending them : ",(0,a.kt)("a",{parentName:"p",href:"http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1947r0.pdf"},"http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1947r0.pdf"),"\n(answering to a discussion opened by ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GC4cp4U2f2E"},"https://www.youtube.com/watch?v=GC4cp4U2f2E"),")"))}d.isMDXComponent=!0}}]);