"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[627],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7352:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o="video_E3b0";function a(e){var t=e.id;return r.createElement("div",{className:o},r.createElement("iframe",{src:"https://www.youtube.com/embed/"+t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}))}},9372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=n(7352),l=["components"],s={title:"std::vector",benefit:5,easiness:5,level:"basic-cpp",tags:["Clean Code","Performant Code","C++"]},c=void 0,p={unversionedId:"lessons/vector",id:"lessons/vector",title:"std::vector",description:"Brief",source:"@site/../../content/lessons/vector.md",sourceDirName:"lessons",slug:"/lessons/vector",permalink:"/Learn--Clean-Code-With-Cpp/lessons/vector",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"},{label:"Performant Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/performant-code"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"std::vector",benefit:5,easiness:5,level:"basic-cpp",tags:["Clean Code","Performant Code","C++"]},sidebar:"lessons",previous:{title:"std::variant",permalink:"/Learn--Clean-Code-With-Cpp/lessons/variant"},next:{title:"Design cohesive classes",permalink:"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes"}},u=[{value:"Brief",id:"brief",children:[],level:2},{value:"Initializer-list syntax",id:"initializer-list-syntax",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"This is by far the best container! It can do everything and is also the most performant in almost all situations.",(0,a.kt)("br",null),"\nIf you use another container than ",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector")," you must have a very strong reason to do so! Most notably, even if ",(0,a.kt)("inlineCode",{parentName:"p"},"std::list")," has a better algorithmic complexity for some operations, in most cases ",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector")," will still be faster in practice because it has better cache coherency (the data is grouped together in memory, which makes it much faster to access)."),(0,a.kt)(i.Z,{id:"PocJ5jXv8No?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",mdxType:"YoutubeVideo"}),(0,a.kt)("br",null),(0,a.kt)(i.Z,{id:"HcESuwmlHEY?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",mdxType:"YoutubeVideo"}),(0,a.kt)("h2",{id:"initializer-list-syntax"},"Initializer-list syntax"),(0,a.kt)("p",null,"Instead of"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v;\nv.push_back(1);\nv.push_back(7);\nv.push_back(4);\nv.push_back(12);\n")),(0,a.kt)("p",null,"you can write"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v{1, 7, 4, 12};\n")),(0,a.kt)("p",null,"These are totally equivalent. And by the way this syntax works for all the containers, not only ",(0,a.kt)("inlineCode",{parentName:"p"},"std::vector"),"."))}f.isMDXComponent=!0}}]);