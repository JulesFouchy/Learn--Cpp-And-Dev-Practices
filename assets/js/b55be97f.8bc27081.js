"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[2149],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37352:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294),o="video_E3b0";function a(e){var n=e.id;return r.createElement("div",{className:o},r.createElement("iframe",{src:"https://www.youtube.com/embed/"+n,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}))}},91706:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(37352),s=["components"],c={title:"Enums",benefit:4,easiness:5,level:"basic-cpp",tags:["Clean Code"]},l=void 0,u={unversionedId:"lessons/enums",id:"lessons/enums",title:"Enums",description:"Brief",source:"@site/../../content/lessons/enums.md",sourceDirName:"lessons",slug:"/lessons/enums",permalink:"/Learn--Clean-Code-With-Cpp/lessons/enums",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Enums",benefit:4,easiness:5,level:"basic-cpp",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Designated Initializers",permalink:"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers"},next:{title:"Range-based for loop",permalink:"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop"}},p=[{value:"Brief",id:"brief",children:[],level:2},{value:"Use <code>enum class</code>, not <code>enum</code>",id:"use-enum-class-not-enum",children:[],level:2},{value:"<code>using enum</code>",id:"using-enum",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"If you are used to using integer constants (or worse, a long list of booleans) to express different possible situations, then don't! Enums are meant to do exactly that and are way clearer to read!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Bad, you need comments to indicate what the numbers mean!\nvoid Character::move(int direction) {\n    switch(direction) {\n    case 0: // North\n        /*...*/\n    case 1: // East\n        /*...*/\n    case 2: // South\n        /*...*/\n    case 3: // West\n        /*...*/\n    default:\n        /*...*/\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Good, the meaning is incorporated in the names of the enum and its values!\nenum class Direction {\n    North,\n    East,\n    South,\n    West,\n};\n\nvoid Character::move(Direction direction) {\n    switch (direction) {\n    case Direction::North:\n        /*...*/\n    case Direction::East:\n        /*...*/\n    case Direction::South:\n        /*...*/\n    case Direction::West:\n        /*...*/\n    default:\n        /*...*/\n    }\n}\n")),(0,a.kt)(i.Z,{id:"x55jfOd5PEE?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",mdxType:"YoutubeVideo"}),(0,a.kt)("h2",{id:"use-enum-class-not-enum"},"Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"enum class"),", not ",(0,a.kt)("inlineCode",{parentName:"h2"},"enum")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enum class")," was introduced in C++ as a better version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," from C."),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"enum class")," doesn't allow implicit conversion with ints and other enums, and gives a proper namespace to your values!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Bad, there is no type checking that ensures we use the right enum"',title:'"Bad,',there:!0,is:!0,no:!0,type:!0,checking:!0,that:!0,ensures:!0,we:!0,use:!0,the:!0,right:!0,'enum"':!0},"enum Direction { Left, Right, Up, Down };\nenum CardinalDirection { North, East, South, West };\n\nvoid move(CardinalDirection direction);\n\nmove(Left); // Bad, this compiles but doesn't do what we want! It will move North!\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Bad, this doesn\'t compile because we are defining two Ok values in the global namespace"',title:'"Bad,',this:!0,"doesn't":!0,compile:!0,because:!0,we:!0,are:!0,defining:!0,two:!0,Ok:!0,values:!0,in:!0,the:!0,global:!0,'namespace"':!0},"enum FilesystemError {\n    Ok, // Should be renamed to fs_Ok to avoid conflicting with the other `Ok`\n    ErrorNoPermission,\n    // etc.\n}\n\nenum DatabaseError {\n    Ok, // Should be renamed to db_Ok to avoid conflicting with the other `Ok`\n    ErrorConnectionLost,\n    // etc.\n}\n\n///\n/// This is equivalent to defining integer constants in the global namespace:\n///\nstatic constexpr int Ok = 0;\nstatic constexpr int ErrorNoPermission = 1;\nstatic constexpr int Ok = 0; // Bad, conflicts with the first Ok\nstatic constexpr int ErrorConnectionLost = 1;\n")),(0,a.kt)("p",null,"All of these problems disappear with ",(0,a.kt)("inlineCode",{parentName:"p"},"enum class"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Good, the type checking makes sure we use the right enum"',title:'"Good,',the:!0,type:!0,checking:!0,makes:!0,sure:!0,we:!0,use:!0,right:!0,'enum"':!0},"enum class Direction { Left, Right, Up, Down };\nenum class CardinalDirection { North, East, South, West };\n\nvoid move(CardinalDirection direction);\n\nmove(Direction::Left); // Good, this doesn't compile and gives us a clear error message\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Good, this works just fine and we don\'t need to give weird prefixes to our enum values"',title:'"Good,',this:!0,works:!0,just:!0,fine:!0,and:!0,we:!0,"don't":!0,need:!0,to:!0,give:!0,weird:!0,prefixes:!0,our:!0,enum:!0,'values"':!0},"enum class FilesystemError {\n    Ok,\n    ErrorNoPermission,\n    // etc.\n}\n\nenum class DatabaseError {\n    Ok,\n    ErrorConnectionLost,\n    // etc.\n}\n")),(0,a.kt)("h2",{id:"using-enum"},(0,a.kt)("inlineCode",{parentName:"h2"},"using enum")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/language/enum#Using-enum-declaration"},"Since C++20")," you can have a nicer syntax: ",(0,a.kt)("inlineCode",{parentName:"p"},"using enum")," allows you to skip the enum name in all your switch cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void Character::move(Direction direction)\n{\n    using enum Direction;\n    switch (direction) {\n    case North: // More readable than `Direction::North`. We already know that we are dealing with Directions.\n        /*...*/\n    case East:\n        /*...*/\n    case South:\n        /*...*/\n    case West:\n        /*...*/\n    default:\n        /*...*/\n    }\n}\n")))}m.isMDXComponent=!0}}]);