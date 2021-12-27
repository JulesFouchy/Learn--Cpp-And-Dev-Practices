"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8769],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9038:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),s=["components"],i={title:"Range-based for loop",benefit:3,easiness:5,order:2,tags:["Clean Code","C++"]},l=void 0,c={unversionedId:"lessons/range-based-for-loop",id:"lessons/range-based-for-loop",title:"Range-based for loop",description:"It helps you express your intent more clearly. If you want to go over each element once (which the case of most for loops) you can write :",source:"@site/../../content/lessons/range-based-for-loop.md",sourceDirName:"lessons",slug:"/lessons/range-based-for-loop",permalink:"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"Range-based for loop",benefit:3,easiness:5,order:2,tags:["Clean Code","C++"]},sidebar:"lessons",previous:{title:"Markdown",permalink:"/Learn--Clean-Code-With-Cpp/lessons/markdown"},next:{title:"Smart Pointers",permalink:"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers"}},p=[],u={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It helps you express your intent more clearly. If you want to go over each element once (which the case of most ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops) you can write :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const std::vector v = {3, 1, 17, 8};\nfor (auto x : v) {\n    // do something with x\n}\nfor (const auto& x : v) {\n    // do something with x\n}\nfor (auto& x : v) {\n    // do something with x\n}\n")),(0,a.kt)("p",null,"It guarantees that you are not modifying the index in the body of the loop to make nasty things and change the iteration process.Having this guarantee helps people reason about your code, and this is very important !"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const std::vector v = {3, 1, 17, 8};\nfor (size_t i = 0; i < v.size(); ++i) {\n    // Long body\n    // Might do i++ somewhere\n}\n")))}f.isMDXComponent=!0}}]);