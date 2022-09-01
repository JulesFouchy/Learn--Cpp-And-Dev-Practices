"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[780],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=s.createContext({}),p=function(e){var t=s.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,C=u["".concat(r,".").concat(g)]||u[g]||c[g]||a;return n?s.createElement(C,o(o({ref:t},d),{},{components:n})):s.createElement(C,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},456:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(7294),i=JSON.parse('[{"title":"Compiler","benefit":5,"easiness":5,"level":"tools","bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":5},{"title":"Classes and Structs","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/classes-and-structs","slug":"classes-and-structs","priority":5},{"title":"for","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/for","slug":"for","priority":5},{"title":"Functions","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/functions","slug":"functions","priority":5},{"title":"IDE","benefit":5,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":5},{"title":"if","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/if","slug":"if","priority":5},{"title":"Operator Overloading","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/operator-overloading","slug":"operator-overloading","priority":5},{"title":"References","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/references","slug":"references","priority":5},{"title":"Structured bindings","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/structured-bindings","slug":"structured-bindings","priority":5},{"title":"Variables","benefit":5,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/variables","slug":"variables","priority":5},{"title":"std::vector","benefit":5,"easiness":5,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":5},{"title":"Git","benefit":5,"easiness":4,"level":"tools","bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":4.75},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":"clean-code","bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":4.75},{"title":"Debugger","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":4.75},{"title":"Formatter","benefit":5,"easiness":4,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":4.75},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":"clean-code","bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":4.5},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":"clean-code","bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":4.5},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":"clean-code","bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":4.5},{"title":"Write small functions","benefit":5,"easiness":3,"level":"clean-code","bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":4.5},{"title":"Internet Search","benefit":5,"easiness":3,"level":"tools","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/internet","slug":"internet","priority":4.5},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":4.5},{"title":"Static Analysers","benefit":5,"easiness":3,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":4.5},{"title":"Strong Types","benefit":5,"easiness":3,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-types","slug":"strong-types","priority":4.5},{"title":"Use libraries","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":4.5},{"title":"Watch conferences","benefit":5,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":4.5},{"title":"Write libraries","benefit":5,"easiness":3,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":4.5},{"title":"The Command pattern","benefit":5,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/command","slug":"command","priority":4.25},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":4.25},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":4.25},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":4.25},{"title":"Enums","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":4.25},{"title":"Range-based for loop","benefit":4,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":4.25},{"title":"Testing","benefit":5,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":4.25},{"title":"Lambda functions","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":4},{"title":"Master your IDE","benefit":4,"easiness":4,"level":"advanced","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":4},{"title":"Naming","benefit":5,"easiness":1,"level":"clean-code","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":4},{"title":"std::optional","benefit":4,"easiness":4,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":4},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":4},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":4},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":4},{"title":"Code reviews","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":3.75},{"title":"const","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":3.75},{"title":"Documentation","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":3.75},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":3.75},{"title":"Git submodules","benefit":4,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":3.75},{"title":"Iterators","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/iterators","slug":"iterators","priority":3.75},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":3.75},{"title":"Static site generators","benefit":4,"easiness":3,"level":"good-to-know","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":3.75},{"title":"STL algorithms","benefit":4,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":3.75},{"title":"Templates","benefit":4,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/templates","slug":"templates","priority":3.75},{"title":"Write debug tools","benefit":4,"easiness":3,"level":"practices-and-patterns","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-debug-tools","slug":"write-debug-tools","priority":3.75},{"title":"assert","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":3.5},{"title":"auto","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":3.5},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":3.5},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":3.5},{"title":"Deleted functions","benefit":3,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":3.5},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":3.5},{"title":"Markdown","benefit":3,"easiness":5,"level":"tools","tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":3.5},{"title":"namespace","benefit":3,"easiness":5,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/namespace","slug":"namespace","priority":3.5},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":3.5},{"title":"std::function","benefit":3,"easiness":5,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":3.5},{"title":"Type erasure","benefit":4,"easiness":2,"level":"advanced","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":3.5},{"title":"wasm and electron","benefit":4,"easiness":2,"level":"advanced","tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":3.5},{"title":"std::array","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/array","slug":"array","priority":3.25},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":3.25},{"title":"Error Handling","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":3.25},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":3.25},{"title":"Scope guard","benefit":3,"easiness":4,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":3.25},{"title":"static","benefit":3,"easiness":4,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/static","slug":"static","priority":3.25},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":"advanced","tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":3},{"title":"CMake","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":3},{"title":"C++ casts","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":3},{"title":"Functional programming","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":3},{"title":"Measuring performance","benefit":3,"easiness":3,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":3},{"title":"Move semantics","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":3},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":"good-to-know","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":3},{"title":"<random>","benefit":3,"easiness":3,"level":"basic-cpp","tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":3},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":3},{"title":"State and Strategy","benefit":3,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":3},{"title":"std::variant","benefit":3,"easiness":3,"level":"basic-cpp","tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":3},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":2.75},{"title":"Consistency in style","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":2.75},{"title":"l-values and r-values","benefit":3,"easiness":2,"level":"advanced","link":"/Learn--Clean-Code-With-Cpp/lessons/l-values-and-r-values","slug":"l-values-and-r-values","priority":2.75},{"title":"Linked lists","benefit":2,"easiness":5,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":2.75},{"title":"Multithreading","benefit":3,"easiness":2,"level":"advanced","tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":2.75},{"title":"Polymorphism","benefit":3,"easiness":2,"level":"basic-cpp","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":2.75},{"title":"Space out your code","benefit":2,"easiness":5,"level":"practices-and-patterns","tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":2.75},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":"practices-and-patterns","tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":2.25},{"title":"Inheritance","benefit":2,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/inheritance","slug":"inheritance","priority":2.25},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":"useless","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":2},{"title":"friend","benefit":1,"easiness":5,"level":"advanced","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":2},{"title":"#if defined()","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":2},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":"basic-cpp","tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":2},{"title":"Trailing return type","benefit":1,"easiness":5,"level":"useless","tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":2},{"title":"Macros","benefit":1,"easiness":3,"level":"basic-cpp","link":"/Learn--Clean-Code-With-Cpp/lessons/macros","slug":"macros","priority":1.5}]');function a(e){var t=e.slug,n=e.text,a=e.anchor,o=i.find((function(e){return e.slug===t}));if(void 0===o)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return s.createElement("a",{href:o.link+(a||"")},n||o.title)}},5848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var s=n(7462),i=n(3366),a=(n(7294),n(4137)),o=n(456),l=["components"],r={title:"Introduction",slug:"/assignment"},p=void 0,d={unversionedId:"assignment/introduction",id:"assignment/introduction",title:"Introduction",description:'"Passe-moi le code !"',source:"@site/../../content/assignment/00-introduction.md",sourceDirName:"assignment",slug:"/assignment",permalink:"/Learn--Clean-Code-With-Cpp/assignment",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",slug:"/assignment"},sidebar:"assignment",next:{title:"Setting up a project",permalink:"/Learn--Clean-Code-With-Cpp/assignment/project-setup"}},c=[{value:'"Passe-moi le code !"',id:"passe-moi-le-code-",children:[],level:2},{value:"Submitting your work",id:"submitting-your-work",children:[],level:2},{value:"Time investment",id:"time-investment",children:[],level:2},{value:"Option#1: Rolling your own project",id:"option1-rolling-your-own-project",children:[{value:"Project ideas",id:"project-ideas",children:[],level:3}],level:2},{value:"Option#2: Following the guided project",id:"option2-following-the-guided-project",children:[],level:2}],u={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"passe-moi-le-code-"},(0,a.kt)("a",{parentName:"h2",href:"https://www.youtube.com/watch?v=59lC-XnPgBE&ab_channel=LaCineTech"},'"Passe-moi le code !"')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Que ce soit tes sources ou ton Wi-Fi, stp passe-moi le code !\n\u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=59lC-XnPgBE&ab_channel=LaCineTech"},(0,a.kt)("em",{parentName:"a"},"MC-Risson")))),(0,a.kt)("p",null,"In order to evaluate you, all I need is to see some code you wrote in order for me to tell which lessons you mastered."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This means that the exact project you will be working on is up to you"),"."),(0,a.kt)("p",null,"I will provide a suggestion of a small project with guided steps, but you can choose to work on your own project instead."),(0,a.kt)("p",null,"The main difference will be that I won't be able to provide you with guided steps for your own projects, but this also means that you will learn a ton more by doing it! You might also be more motivated to work on something you chose and care about."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It's important that you deviate from the TP and add your own functionalities, it can be very simple, just a few extra functions, but I really want to see as much things as possible that you wrote 100% yourself."))),(0,a.kt)("h2",{id:"submitting-your-work"},"Submitting your work"),(0,a.kt)("p",null,"I will be looking at your code regularly to give you feedback and start checking the lessons that you are learning."),(0,a.kt)("p",null,"In order for me to do so, all of you must publish your work on a public Git repository (which is good practice anyways, and will be the number one lesson I will be looking at)."),(0,a.kt)("p",null,"You can use GitHub, GitLab or whatever you are used to using. Just send me a link to the relevant repository ",(0,a.kt)("em",{parentName:"p"},"now")," (or as soon as you start working on the project)."),(0,a.kt)("p",null,"Also, there are some lessons that I won't be able, from looking at your code, to tell if you have read them, like ",(0,a.kt)(o.Z,{slug:"master-your-ide",mdxType:"LessonLink"}),". So it would be nice if you kept a little ReadMe of all the lessons you have read. You can also use it for yourself: for example you can take notes of the things you learned in the lesson and really don't want to forget",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", write down the points that you didn't quite get, the ones you disagree with, ",(0,a.kt)("em",{parentName:"p"},"etc.")),(0,a.kt)("h2",{id:"time-investment"},"Time investment"),(0,a.kt)("p",null,"In terms of invested time I won't ask you more than can fit during the class sessions, i.e. 24 hours in total this semester. This means that hopefully you won't have to work (too much) outside of class on your spare time."),(0,a.kt)("p",null,"Please note that ",(0,a.kt)("em",{parentName:"p"},"I will only be evaluating the quality of your code, not the state of the end product"),". This means that it doesn't matter if you don't have time to finish the project you set out to do! Your grade will be solely based on the lessons you successfully applied in the project. So no worries please \ud83d\ude0e."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The minimum expected is that you finish ",(0,a.kt)("em",{parentName:"p"},"Bubble Shooter"),"."))),(0,a.kt)("h2",{id:"option1-rolling-your-own-project"},"Option#1: Rolling your own project"),(0,a.kt)("p",null,"I would highly encourage you to do so if you are really interested in programming. You will definitely learn a ton by doing so, and produce something that you will be proud of."),(0,a.kt)("p",null,"If you choose to do so it might be a good idea to share your plans with me so that we can discuss them, give you some feedback or suggestions, and try to estimate the time it will take you. Try to aim for something that is not too big: what matters to me is ",(0,a.kt)("strong",{parentName:"p"},"quality rather than quantity"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For this project you ",(0,a.kt)("em",{parentName:"strong"},"can")," work in groups"),". Simply remember that the more you are on a project, the harder it is to coordinate and produce a cohesive codebase. But if you think that a collaboration would be beneficial, then please go ahead!"),(0,a.kt)("p",null,"I also think that it only makes sense to team up with people who have roughly the same level as you. This way you will be able to help each other out and discuss ideas on equal footing. If you are looking for someone very good to help you, you can always ask your comrades or me, but working on the same project wouldn't be beneficial I believe because you won't be advancing at the same pace and/or having the same ambitions. (I might be wrong though and we can discuss that)."),(0,a.kt)("p",null,"If you want to mix with a project from another class, it is possible, but beware!"),(0,a.kt)("p",null,"If you choose Option#1, you don't need to care about the other pages of the ",(0,a.kt)("em",{parentName:"p"},"Assignment")," section. Just know that I strongly recommend to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"this template")," as a starting point for your code."),(0,a.kt)("h3",{id:"project-ideas"},"Project ideas"),(0,a.kt)("p",null,"If you are looking for inspiration I can suggest a few ideas that I would personally love working on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A Bezier-curve editor"),": Check out ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/aVwxzDHniEw"},"this video")," to learn more about Bezier curves. Bezier curves are pretty cool; you could do an editor that renders them, allows you to draw them, implement a fill algorithm to colorize the interior, and so on. Once you can render Bezier curves you can render any SVG using a library like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/memononen/nanosvg"},"nanosvg"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Image post-processing"),": Apply effects like brightness, constrast, blur, and many more on an image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Image mosaic"),": Recreate an image by stamping a lot of small ones together, like ",(0,a.kt)("a",{parentName:"li",href:"https://blenderartists.org/t/mosaic-image-generator-program/596903"},"this one"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Boids"),": Simulate flocks of birds and other similar behaviours, using a few simple rules. Here is a ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/P_xJMH8VvAE?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM"},"great explanation by ",(0,a.kt)("em",{parentName:"a"},"The Coding Train")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A drawing app"),": With a few tools: brushes, shapes, ",(0,a.kt)("em",{parentName:"li"},"etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A tool for generative artists")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cool"),": I am currently working on a C++ framework called ",(0,a.kt)("a",{parentName:"li",href:"https://coollibs.github.io/home/"},(0,a.kt)("em",{parentName:"a"},"Cool"))," where we do a lot of image-related work. If you are interested in joining the adventure, there is definitely a place for you! You could work on the camera system, the lighting, the scripting, or many other things.")),(0,a.kt)("h2",{id:"option2-following-the-guided-project"},"Option#2: Following the guided project"),(0,a.kt)("p",null,"This option will be easier to follow and shouldn't require as much time investment. The project will consist in making a few little games: hangman, noughts and crosses, ",(0,a.kt)("em",{parentName:"p"},"etc."),"."),(0,a.kt)("p",null,"It makes sense to choose this option if you don't want to have to organize and plan a project by yourself. Here you will be able to focus entirely on the micro-level programming tasks like ",(0,a.kt)("em",{parentName:"p"},'"let\'s get a string from the user"'),", ",(0,a.kt)("em",{parentName:"p"},'"let\'s check if this word contains this letter"')," and so on."),(0,a.kt)("p",null,"The other pages of this section will guide you through this project step by step."),(0,a.kt)("p",null,"I believe it is better if you work alone on this project. (But we can discuss that if you think it will be beneficial for you to team up with someone)."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"This is a great learning practice. See ",(0,a.kt)("a",{parentName:"li",href:"https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"},"The Pragmatic Programer"),", Chapter 3, Section ",(0,a.kt)("em",{parentName:"li"},"Engineering Daybooks"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);