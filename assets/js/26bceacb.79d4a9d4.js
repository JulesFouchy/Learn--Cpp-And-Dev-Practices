"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[7846],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77026:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Avoid dead code",benefit:2,easiness:3,level:"practices-and-patterns",tags:["Clean Code"]},c=void 0,l={unversionedId:"lessons/avoid-dead-code",id:"lessons/avoid-dead-code",title:"Avoid dead code",description:"Don't leave commented out blocks in your code.",source:"@site/../../content/lessons/avoid-dead-code.md",sourceDirName:"lessons",slug:"/lessons/avoid-dead-code",permalink:"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Avoid dead code",benefit:2,easiness:3,level:"practices-and-patterns",tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Put your static objects in functions",permalink:"/Learn--Clean-Code-With-Cpp/lessons/static-in-functions"},next:{title:"Static site generators",permalink:"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators"}},d=[],m={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Don't leave commented out blocks in your code.\nIf for some reason you want to do so, then leave a comment at the top explaining your reason ; otherwise it is very hard for readers to know what the purpose of that code is and what to do with it : is it still relevant ? is it another option ? or is it just junk ?"),(0,i.kt)("p",null,"Example from real code from a company whose name I shall not mention:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'void Start()\n{\n    // Utils.SetEnglishLanguage();\n\n    // SetupSavedReportsFolder();\n\n    // var commandLine = GetCommandLine();\n    // _commandLineArguments = new CommandLineArguments(commandLine);\n\n    // // set a specific GUID for the first report\n    // if (_commandLineArguments.ContainsKey("ReportGuid"))\n    //     BloombergUnityClient.Instance.ReportGuid = Guid.Parse(_commandLineArguments["ReportGuid"]);\n\n    // // set a specific address to send the report to.\n    // if (_commandLineArguments.ContainsKey("ServerAddress"))\n    //     BloombergUnityClient.Instance.config.bloombergServerHost = _commandLineArguments["ServerAddress"];\n\n    // // set a specific TCP port to send the report to.\n    // if (_commandLineArguments.ContainsKey("ServerPort"))\n    //     BloombergUnityClient.Instance.config.bloombergServerPort = Convert.ToUInt16(_commandLineArguments["ServerPort"]);\n\n    // // set the Transmission mode to be use to send the report\n    // if (_commandLineArguments.ContainsKey("TransmissionMode"))\n    //     BloombergUnityClient.Instance.config.transmissionMode = (BloombergTransmissionMode) Enum.Parse(typeof(BloombergTransmissionMode), _commandLineArguments["TransmissionMode"]);\n\n    // // URL to use to get temporary access to write objects (breport)\n    // if (_commandLineArguments.ContainsKey("S3_MainAPIUrl"))\n    //     BloombergUnityClient.Instance.S3_MainAPIUrl = _commandLineArguments["S3_MainAPIUrl"];\n\n    // // MyServices specific to initialize the session\n    // if (_commandLineArguments.ContainsKey("US_ApplicationId"))\n    // {\n    //     try\n    //     {\n    //         _myServices = new MyServices();\n    //         _myServices?.Initialize(_commandLineArguments["US_ApplicationId"], _commandLineArguments["US_Email"], _commandLineArguments["US_Password"]);\n    //     }\n    //     catch (Exception e)\n    //     {\n    //         Debug.LogWarning($"MyServices creation failed /r/n {e}");\n    //     }\n    // }\n\n    BloombergBootstrap.Bootstrap();\n    Reporter.Initialize();\n    SetCommandLine();\n    SetSettings();\n    Application.logMessageReceivedThreaded += OnLog;\n}\n')))}p.isMDXComponent=!0}}]);