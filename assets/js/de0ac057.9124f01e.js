"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1955],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Linked lists",benefit:2,easiness:5,level:"advanced",tags:["Performant Code"]},s=void 0,c={unversionedId:"lessons/linked-list",id:"lessons/linked-list",title:"Linked lists",description:"Linked lists are rarely usefull. All the theoretical advantages in insertion time and what not are actually murdered by the awfull cache coherency that make them actually very slow.",source:"@site/../../content/lessons/linked-list.md",sourceDirName:"lessons",slug:"/lessons/linked-list",permalink:"/Learn--Clean-Code-With-Cpp/lessons/linked-list",tags:[{label:"Performant Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/performant-code"}],version:"current",frontMatter:{title:"Linked lists",benefit:2,easiness:5,level:"advanced",tags:["Performant Code"]},sidebar:"lessons",previous:{title:"l-values and r-values",permalink:"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values"},next:{title:"Multithreading",permalink:"/Learn--Clean-Code-With-Cpp/lessons/multithreading"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Linked lists are rarely usefull. All the theoretical advantages in insertion time and what not are actually murdered by the awfull cache coherency that make them actually very slow."),(0,o.kt)("p",null,"The only real I know them is that they never invalidate refercences."))}f.isMDXComponent=!0}}]);