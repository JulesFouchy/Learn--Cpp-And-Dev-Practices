"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[3085],{8032:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),c=t(7325),o=t(9623),s="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function v(e){var n,t=e.as,d=e.id,v=(0,r.Z)(e,u),f=(0,o.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,a.Z)({},v,{className:(0,i.Z)("anchor",(n={},n[m]=f,n[s]=!f,n)),id:d}),v.children,l.createElement("a",{className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,v)}function f(e){var n=e.as,t=(0,r.Z)(e,d);return"h1"===n?l.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children):l.createElement(v,(0,a.Z)({as:n},t))}},7136:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(7462),r=t(3366),l=t(7294),i=t(4384),c=t(3699),o=t(2380),s=t(8032),m=t(6010),u=t(9623),d="details_BAp3";function v(e){var n=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},n,{className:(0,m.Z)("alert alert--info",d,n.className)}))}var f=["mdxType","originalType"];var h={head:function(e){var n=l.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,f));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,n)},code:function(e){return l.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?l.createElement("code",e):l.createElement(o.Z,e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var n;return l.createElement(o.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(n=e.children)?void 0:n.props:Object.assign({},e))},details:function(e){var n=l.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),r=l.createElement(l.Fragment,null,n.filter((function(e){return e!==t})));return l.createElement(v,(0,a.Z)({},e,{summary:t}),r)},h1:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h6"},e))}}},6255:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(7294),r=t(6010),l=t(8023),i=t(4137),c=t(7136),o=t(9260),s=t(9623),m="mdxPageWrapper_zHyg";var u=function(e){var n=e.content,t=n.metadata,u=t.title,d=t.description,v=t.permalink,f=t.frontMatter,h=f.wrapperClassName,p=f.hide_table_of_contents;return a.createElement(l.Z,{title:u,description:d,permalink:v,wrapperClassName:null!=h?h:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",m)},a.createElement("div",{className:(0,r.Z)("col",!p&&"col--8")},a.createElement(i.Zo,{components:c.Z},a.createElement(n,null))),!p&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},9260:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),c=t(4202),o="tableOfContents_cNA8",s=["className"];var m=function(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4202:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7462),r=t(3366),l=t(7294),i=t(9623),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function s(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,v=void 0===d?void 0:d,f=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,r.Z)(e,c),g=(0,i.LU)(),Z=null!=f?f:g.tableOfContents.minHeadingLevel,E=null!=h?h:g.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:n,minHeadingLevel:Z,maxHeadingLevel:E}),_=(0,l.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:Z,maxHeadingLevel:E}}),[u,v,Z,E]);return(0,i.Si)(_),l.createElement(o,(0,a.Z)({toc:N,className:s,linkClassName:u},p))}}}]);