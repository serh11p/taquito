/*! For license information please see 2.d904ada7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{109:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},116:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},117:function(e,t,n){"use strict";var a=n(0),r=n(116);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(152),o=n(95),i=n(103),l=n(9),s="light",u="dark",d=function(e){return e===u?u:s},f=function(){return l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},m=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,r=(n=void 0===n?{}:n).disableSwitch,c=void 0!==r&&r,i=Object(a.useState)(f),l=i[0],h=i[1],v=Object(a.useCallback)((function(){h(s),m(s)}),[]),b=Object(a.useCallback)((function(){h(u),m(u)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(l))}),[l]),Object(a.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(a.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:l===u,setLightTheme:v,setDarkTheme:b}},v=n(195);var b=function(e){var t=h(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},p=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith("docusaurus.tab."))e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},g=function(){var e=Object(o.a)().siteConfig.themeConfig.announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},k=n(116);var E=function(e){var t=p(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=g(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},O=n(99),j=n(117),y=n(50),w=n.n(y);var C=function(){var e,t=Object(o.a)().siteConfig,n=(t=void 0===t?{}:t).themeConfig,a=(n=void 0===n?{}:n).announcementBar,c=void 0===a?{}:a,i=c.content,l=c.backgroundColor,s=c.textColor,u=c.isCloseable,d=Object(j.a)(),f=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!i||u&&f?null:r.a.createElement("div",{className:w.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},r.a.createElement("div",{className:Object(O.a)(w.a.announcementBarContent,(e={},e[w.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:i}}),u?r.a.createElement("button",{type:"button",className:w.a.announcementBarClose,onClick:m,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},_=n(2),N=n(102),S=function(){return null},T=n(302),L=n.n(T),x=n(51),B=n.n(x),I=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(O.a)(B.a.toggle,B.a.dark),style:n},t)},D=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(O.a)(B.a.toggle,B.a.light),style:n},t)},M=function(e){var t=Object(o.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,a=n.darkIcon,c=n.darkIconStyle,i=n.lightIcon,l=n.lightIconStyle,s=t.isClient;return r.a.createElement(L.a,Object(_.a)({disabled:!s,icons:{checked:r.a.createElement(I,{icon:a,style:c}),unchecked:r.a.createElement(D,{icon:i,style:l})}},e))},P=n(196),A=n(131);var X=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},V=n(197),F=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useState)(!1),o=c[0],i=c[1],l=Object(a.useState)(0),s=l[0],u=l[1],d=Object(a.useState)(0),f=d[0],m=d[1],h=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(A.useLocation)(),b=X(v.hash),p=b[0],g=b[1];return Object(V.a)((function(t){var n=t.scrollY;if(e&&(0===n&&r(!0),!(n<f))){if(o)return i(!1),r(!1),void u(n);var a=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&n>=s?r(!1):n+c<a&&r(!0),u(n)}}),[s,f]),Object(a.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(a.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:n}},R=n(198),U=n(199),H=n(200),G=n(52),Y=n.n(G),W=n(6),K=n(193),z={default:function(){return K.a},docsVersion:function(){return n(306).default},docsVersionDropdown:function(){return n(310).default}};function J(e){var t=e.type,n=Object(W.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=z[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(a,n)}var q=function(){var e,t,n=Object(o.a)(),c=n.siteConfig.themeConfig,i=c.navbar,l=(i=void 0===i?{}:i).title,s=void 0===l?"":l,u=i.items,d=void 0===u?[]:u,f=i.hideOnScroll,m=void 0!==f&&f,h=c.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,p=n.isClient,g=Object(a.useState)(!1),k=g[0],E=g[1],j=Object(a.useState)(!1),y=j[0],w=j[1],C=Object(P.a)(),T=C.isDarkTheme,L=C.setLightTheme,x=C.setDarkTheme,B=F(m),I=B.navbarRef,D=B.isNavbarVisible,A=Object(H.a)(),X=A.logoLink,V=A.logoLinkProps,G=A.logoImageUrl,W=A.logoAlt;Object(R.a)(k);var K=Object(a.useCallback)((function(){E(!0)}),[E]),z=Object(a.useCallback)((function(){E(!1)}),[E]),q=Object(a.useCallback)((function(e){return e.target.checked?x():L()}),[L,x]),Q=Object(U.a)();Object(a.useEffect)((function(){Q===U.b.desktop&&E(!1)}),[Q]);var Z=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),$=Z.leftItems,ee=Z.rightItems;return r.a.createElement("nav",{ref:I,className:Object(O.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[Y.a.navbarHideable]=m,e[Y.a.navbarHidden]=!D,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:K,onKeyDown:K},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(_.a)({className:"navbar__brand",to:X},V),null!=G&&r.a.createElement("img",{key:p,className:"navbar__logo",src:G,alt:W}),null!=s&&r.a.createElement("strong",{className:Object(O.a)("navbar__title",(t={},t[Y.a.hideLogoText]=y,t))},s)),$.map((function(e,t){return r.a.createElement(J,Object(_.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},ee.map((function(e,t){return r.a.createElement(J,Object(_.a)({},e,{key:t}))})),!b&&r.a.createElement(M,{className:Y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:q}),r.a.createElement(S,{handleSearchBarToggle:w,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:z}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(_.a)({className:"navbar__brand",onClick:z,to:X},V),null!=G&&r.a.createElement("img",{key:p,className:"navbar__logo",src:G,alt:W}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(M,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(J,Object(_.a)({mobile:!0},e,{onClick:z,key:t}))})))))))},Q=n(153);n(53);function Z(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(E,null,t))}t.a=function(e){var t=Object(o.a)().siteConfig,n=void 0===t?{}:t,a=n.favicon,l=n.title,s=n.themeConfig.image,u=n.url,d=e.children,f=e.title,m=e.noFooter,h=e.description,v=e.image,b=e.keywords,p=e.permalink,g=f?f+" | "+l:l,k=v||s,E=Object(i.a)(k,{absolute:!0}),O=Object(i.a)(a);return r.a.createElement(Z,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(C,null),r.a.createElement(q,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(Q.a,null))}},193:function(e,t,n){"use strict";var a,r=n(2),c=n(6),o=n(0),i=n.n(o),l=n(99),s=n(102),u=n(103);var d=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},f=o.useLayoutEffect,m=function(e){var t=Object(o.useRef)(e);return f((function(){t.current=e})),t},h=["mousedown","touchstart"],v=function(e){if("touchstart"===e)return d()?{passive:!0}:void 0};var b=function(e,t){var n=m(t);Object(o.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return h.forEach((function(e){document.addEventListener(e,a,v(e))})),function(){h.forEach((function(e){document.removeEventListener(e,a,v(e))}))}}}),[!t])};function p(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,o=e.href,l=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(c.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(a),b=Object(u.a)(t),p=Object(u.a)(o,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(r.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:m?p:o}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),l)}function g(e){var t=e.items,n=e.position,a=e.className,s=Object(c.a)(e,["items","position","className"]),u=i.a.useRef(null),d=i.a.useRef(null),f=Object(o.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,n,a=null==d||null===(t=d.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;a&&a.focus()}h(e)}b(u,(function(){return v(!1)}));var g=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":m})},i.a.createElement(p,Object(r.a)({className:g(a)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),i.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var a=e.className,o=Object(c.a)(e,["className"]);return i.a.createElement("li",{key:n},i.a.createElement(p,Object(r.a)({onKeyDown:function(e){n===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:g(a,!0)},o)))})))):i.a.createElement(p,Object(r.a)({className:g(a)},s))}function k(e){var t=e.items,n=(e.position,e.className),a=Object(c.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(p,Object(r.a)({className:o(n,!0)},a),a.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,l=Object(c.a)(e,["className"]);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(p,Object(r.a)({activeClassName:"menu__link--active",className:o(n)},l,{onClick:a.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(p,Object(r.a)({className:o(n)},a)))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(c.a)(e,["mobile"]),r=n?k:g;return i.a.createElement(r,a)}},195:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},196:function(e,t,n){"use strict";var a=n(0),r=n(195);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},197:function(e,t,n){"use strict";var a=n(0),r=n(9),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],i=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},198:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},199:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},200:function(e,t,n){"use strict";var a=n(95),r=n(196),c=n(103),o=n(130);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(c.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(f),logoAlt:l.alt}}},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),i=f(n(109)),l=f(n(8)),s=f(n(303)),u=f(n(304)),d=n(305);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},306:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(193),l=n(132);function s(e){var t=e.label,n=e.to,c=e.docsPluginId,s=Object(r.a)(e,["label","to","docsPluginId"]),u=Object(l.useActiveVersion)(c),d=Object(l.useLatestVersion)(c),f=null!=u?u:d,m=null!=t?t:f.label,h=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(f).path;return o.a.createElement(i.a,Object(a.a)({},s,{label:m,to:h}))}},310:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(193),l=n(132),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n=e.mobile,c=e.docsPluginId,u=Object(r.a)(e,["mobile","docsPluginId"]),d=Object(l.useActiveDocContext)(c),f=Object(l.useVersions)(c),m=Object(l.useLatestVersion)(c);var h=null!==(t=d.activeVersion)&&void 0!==t?t:m,v=n?"Versions":h.label,b=n?void 0:s(h).path;return o.a.createElement(i.a,Object(a.a)({},u,{mobile:n,label:v,to:b,items:function(){if(!(f.length<=2))return f.map((function(e){var t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==d?void 0:d.activeVersion)}}}))}()}))}}}]);