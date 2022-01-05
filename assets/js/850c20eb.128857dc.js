"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4647],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Documentation",benefit:5,easiness:3,order:3,tags:["Clean Code"]},l=void 0,u={unversionedId:"lessons/documentation",id:"lessons/documentation",title:"Documentation",description:"Document for users of your library",source:"@site/../../content/lessons/documentation.md",sourceDirName:"lessons",slug:"/lessons/documentation",permalink:"/Learn--Clean-Code-With-Cpp/lessons/documentation",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Documentation",benefit:5,easiness:3,order:3,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"std::vector",permalink:"/Learn--Clean-Code-With-Cpp/lessons/vector"},next:{title:"Stack vs Heap",permalink:"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap"}},c=[{value:"Document for users of your library",id:"document-for-users-of-your-library",children:[],level:2},{value:"Document for maintainers of your library",id:"document-for-maintainers-of-your-library",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"document-for-users-of-your-library"},"Document for users of your library"),(0,a.kt)("p",null,"Give examples! Ideally the code should be cimpilable as-is (no hidden information)! It also allows you to write some script that grabs all your examples and tries to run them. Write your examples as tests!"),(0,a.kt)("h2",{id:"document-for-maintainers-of-your-library"},"Document for maintainers of your library"),(0,a.kt)("p",null,"State your intentions, the alternatives you considered, the reason that made you choose this particular implementation etc. Don't be shy, talk a lot, leave a trace for others."),(0,a.kt)("p",null,"Even if you are unsure or not confident about your design, say it ! It will help future developers have no remorse to rewrite your code, and be confident there isn't some important thing that they are missing and that made you write the code this way."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/nm45t2fnUms"},"https://youtu.be/nm45t2fnUms")))}f.isMDXComponent=!0}}]);