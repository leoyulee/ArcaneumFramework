"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3085,5713],{87529:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var t=a(67294),l=a(86010),r=a(54814),c=a(3905),s=a(61914),i=a(51575),o=a(32822),u="mdxPageWrapper_3qD3";var m=function(e){var n=e.content,a=n.frontMatter,m=n.metadata,d=a.title,f=a.description,h=a.wrapperClassName,v=a.hide_table_of_contents,p=m.permalink;return t.createElement(r.Z,{title:d,description:f,permalink:p,wrapperClassName:null!=h?h:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",u)},t.createElement("div",{className:(0,l.Z)("col",!v&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(n,null))),!v&&n.toc&&t.createElement("div",{className:"col col--2"},t.createElement(i.Z,{toc:n.toc,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level})))))}},25002:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(87462),l=a(63366),r=a(67294),c=a(32822),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function i(e){var n=e.toc,a=e.className,t=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:a},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:t}))}))):null}function o(e){var n=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,v=e.maxHeadingLevel,p=(0,l.Z)(e,s),g=(0,c.LU)(),N=null!=h?h:g.tableOfContents.minHeadingLevel,k=null!=v?v:g.tableOfContents.maxHeadingLevel,E=(0,c.DA)({toc:n,minHeadingLevel:N,maxHeadingLevel:k}),_=(0,r.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:k}}),[m,f,N,k]);return(0,c.Si)(_),r.createElement(i,(0,t.Z)({toc:E,className:o,linkClassName:m},p))}},51575:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(87462),l=a(63366),r=a(67294),c=a(86010),s=a(25002),i="tableOfContents_35-E",o=["className"];var u=function(e){var n=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,c.Z)(i,"thin-scrollbar",n)},r.createElement(s.Z,(0,t.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6979:function(e,n,a){var t=a(76775),l=a(52263),r=a(28084),c=a(94184),s=a.n(c),i=a(67294);n.Z=function(e){var n=(0,i.useRef)(!1),c=(0,i.useRef)(null),o=(0,t.k6)(),u=(0,l.Z)().siteConfig,m=(void 0===u?{}:u).baseUrl;(0,i.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||c.current&&e.srcElement===document.body&&(e.preventDefault(),c.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var d=(0,r.usePluginData)("docusaurus-lunr-search"),f=function(){n.current||(Promise.all([fetch(""+m+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+m+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(9878),a.e(1245)]).then(a.bind(a,24130)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((function(e){var n=e[0],a=e[1],t=e[2].default;0!==n.length&&function(e,n,a){new a({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,a){var t=m+a.url;document.createElement("a").href=t,o.push(t)}})}(n,a,t)})),n.current=!0)},h=(0,i.useCallback)((function(n){c.current.contains(n.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return i.createElement("div",{className:"navbar__search",key:"search-box"},i.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),i.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:h,onBlur:h,ref:c}))}}}]);