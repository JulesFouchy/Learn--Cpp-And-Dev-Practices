"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4769],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],p={title:"Polymorphism",benefit:3,easiness:2,order:3,tags:["Clean Code"]},l=void 0,s={unversionedId:"lessons/polymorphism",id:"lessons/polymorphism",title:"Polymorphism",description:"Static Polymorphism",source:"@site/../../content/lessons/polymorphism.md",sourceDirName:"lessons",slug:"/lessons/polymorphism",permalink:"/Learn--Clean-Code-With-Cpp/lessons/polymorphism",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Polymorphism",benefit:3,easiness:2,order:3,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Multithreading",permalink:"/Learn--Clean-Code-With-Cpp/lessons/multithreading"},next:{title:"Trailing return type",permalink:"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type"}},c=[{value:"Static Polymorphism",id:"static-polymorphism",children:[],level:2},{value:"Dynamic Polymorphism",id:"dynamic-polymorphism",children:[],level:2},{value:"To Go Further",id:"to-go-further",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"static-polymorphism"},"Static Polymorphism"),(0,i.kt)("p",null,"Function overloading and templates."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.fluentcpp.com/2017/04/28/extract-interface-cpp/"},"https://www.fluentcpp.com/2017/04/28/extract-interface-cpp/")),(0,i.kt)("h2",{id:"dynamic-polymorphism"},"Dynamic Polymorphism"),(0,i.kt)("p",null,"Base class ",(0,i.kt)("em",{parentName:"p"},"vs")," ",(0,i.kt)("inlineCode",{parentName:"p"},"std::variant"),". When people say why OOP is so great, the biggest (hidden) argument is most often that ",(0,i.kt)("strong",{parentName:"p"},"polymorphism")," is great. But beware the confusion ! OOP is not the only way of achieving polymorphism ; generic programming with ",(0,i.kt)("inlineCode",{parentName:"p"},"std::variant")," is an option too."),(0,i.kt)("h2",{id:"to-go-further"},"To Go Further"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fwXaRH5ffJM"},"Check this out")," (Comparison of different approaches to achieve polymorphism)"))}u.isMDXComponent=!0}}]);