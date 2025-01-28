"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[3561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"friend",benefit:1,easiness:5,level:"advanced",tags:["Clean Code","C++"]},l=void 0,c={unversionedId:"lessons/friend",id:"lessons/friend",title:"friend",description:"There are *very few* good reasons to use `friend`.",source:"@site/../../content/lessons/friend.md",sourceDirName:"lessons",slug:"/lessons/friend",permalink:"/Learn--Clean-Code-With-Cpp/lessons/friend",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"friend",benefit:1,easiness:5,level:"advanced",tags:["Clean Code","C++"]},sidebar:"lessons",previous:{title:"Multithreading",permalink:"/Learn--Clean-Code-With-Cpp/lessons/multithreading"},next:{title:"Avoid nested namespaces",permalink:"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"very few"))," good reasons to use ",(0,o.kt)("inlineCode",{parentName:"p"},"friend"),".\nThe only one I can think of is when you are forced, for implementation reasons, to split something into two classes but conceptually it really is one united block. For example, when implementing the state pattern : you have a class X that holds a state S. Although S needs to be a seperate class in order to have different implementations and be changed at runtime, it really is part of X and should be allowed to access it's internals like no one else. Even in that case, you should first wonder wether it wouldn't make sense to put in your public interface all the things that ",(0,o.kt)("em",{parentName:"p"},"S")," needs. If the answer is now, then maybe you have a use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"friend"),"."),(0,o.kt)("p",null,"What really bothers me with ",(0,o.kt)("inlineCode",{parentName:"p"},"friend")," is that it is ",(0,o.kt)("em",{parentName:"p"},"all or nothing"),'. I wish I could specify that only one given method will be usable by a specific class : "this method is not part of the public API, but it can be used by this one class who knows how to handle it". With the current ',(0,o.kt)("inlineCode",{parentName:"p"},"friend"),", all friends suddenly have access to all methods ",(0,o.kt)("em",{parentName:"p"},"and members"),"."),(0,o.kt)("p",null,"(Maybe this problem is lessened when the Single Responsibility Principle is strictly followed and each class really is an ",(0,o.kt)("em",{parentName:"p"},"all or nothing")," package (since there is only one thing in the package), but still I don't like the fact the friends can access member variables)"),(0,o.kt)("p",null,"=> Useless since C++20 and modules, which allow us a much finer grain control over visibility"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/zvWCgiVvpPU"},"PassKey idiom")))}d.isMDXComponent=!0}}]);