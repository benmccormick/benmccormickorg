webpackJsonp([0xef47e37750d80000],{"./node_modules/element-resize-event/index.js":function(e,t){function n(e){var t=e.target||e.srcElement;t.__resizeRAF__&&o(t.__resizeRAF__),t.__resizeRAF__=r(function(){var n=t.__resizeTrigger__;n.__resizeListeners__.forEach(function(t){t.call(n,e)})})}var r=function(){var e=this,t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)};return function(e){return t(e)}}(),o=function(){var e=this,t=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;return function(e){return t(e)}}(),t=function(e,t){function r(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var o,i=this,s=i.document,a=s.attachEvent;if("undefined"!=typeof navigator&&(o=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],a)e.__resizeTrigger__=e,e.attachEvent("onresize",n);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var l=e.__resizeTrigger__=s.createElement("object");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),l.setAttribute("class","resize-sensor"),l.__resizeElement__=e,l.onload=r,l.type="text/html",o&&e.appendChild(l),l.data="about:blank",o||e.appendChild(l)}e.__resizeListeners__.push(t)};e.exports="undefined"==typeof window?t:t.bind(window),e.exports.unbind=function(e,t){var r=document.attachEvent;t?e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1):e.__resizeListeners__=[],e.__resizeListeners__.length||(r?e.detachEvent("onresize",n):(e.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete e.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)),delete e.__resizeListeners__)}},"./node_modules/performance-now/lib/performance-now.js":function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n("./node_modules/process/browser.js"))},"./node_modules/process/browser.js":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(u===clearTimeout)return clearTimeout(e);if((u===r||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}function s(){f&&m&&(f=!1,m.length?h=m.concat(h):b=-1,h.length&&a())}function a(){if(!f){var e=o(s);f=!0;for(var t=h.length;t;){for(m=h,h=[];++b<t;)m&&m[b].run();b=-1,t=h.length}m=null,f=!1,i(e)}}function l(e,t){this.fun=e,this.array=t}function d(){}var c,u,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{u="function"==typeof clearTimeout?clearTimeout:r}catch(e){u=r}}();var m,h=[],f=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||f||o(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=d,p.addListener=d,p.once=d,p.off=d,p.removeListener=d,p.removeAllListeners=d,p.emit=d,p.prependListener=d,p.prependOnceListener=d,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/raf/index.js":function(e,t,n){for(var r=n("./node_modules/performance-now/lib/performance-now.js"),o="undefined"==typeof window?{}:window,i=["moz","webkit"],s="AnimationFrame",a=o["request"+s],l=o["cancel"+s]||o["cancelRequest"+s],d=!0,c=0;c<i.length&&!a;c++)a=o[i[c]+"Request"+s],l=o[i[c]+"Cancel"+s]||o[i[c]+"CancelRequest"+s];if(!a||!l){d=!1;var u=0,p=0,m=[],h=1e3/60;a=function(e){if(0===m.length){var t=r(),n=Math.max(0,h-(t-u));u=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return m.push({handle:++p,callback:e,cancelled:!1}),p},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return d?a.call(o,function(){try{e.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):a.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)}},"./node_modules/react-component-width-mixin/index.js":function(e,t,n){var r=n("./node_modules/react-dom/index.js"),o=n("./node_modules/element-resize-event/index.js");e.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:r.findDOMNode(this).getBoundingClientRect().width}),o(r.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===r.findDOMNode(this).getElementsByClassName("resize-sensor").length&&o(r.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:r.findDOMNode(this).getBoundingClientRect().width})}}},"./node_modules/react-page-width/dist/index.js":function(e,t,n){var r;r=n("./node_modules/react-page-width/dist/resizeListener.js"),e.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return r.on(this.onResize)},componentWillUnmount:function(){return r.off(this.onResize)},onResize:function(e){return this.setState({pageWidth:e})}}},"./node_modules/react-page-width/dist/resizeListener.js":function(e,t,n){var r,o,i,s,a,l;i=n("./node_modules/raf/index.js"),r=void 0,s=[],a=!1,"undefined"!=typeof window&&null!==window&&(r=window.innerWidth),o=function(){if(!a)return a=!0,i(l)},l=function(){var e,t,n;for(r=window.innerWidth,e=0,t=s.length;e<t;e++)(n=s[e])(r);return a=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",o),e.exports={on:function(e){return e(r),s.push(e)},off:function(e){return s.splice(s.indexOf(e),1)}}},"./node_modules/react-responsive-grid/dist/components/Breakpoint.js":function(e,t,n){var r,o,i,s,a,l;s=n("./node_modules/react/react.js"),a=n("./node_modules/react-component-width-mixin/index.js"),i=n("./node_modules/react-page-width/dist/index.js"),l=n("./node_modules/object-assign/index.js"),r=s.createClass({displayName:"Breakpoint",mixins:[a],propTypes:{minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return s.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?s.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.componentWidth&&this.props.minWidth<=(t=this.state.componentWidth)&&t<this.props.maxWidth?s.createElement("div",Object.assign({},e),this.renderChildren()):s.createElement("div",null)}}),o=s.createClass({displayName:"Breakpoint",mixins:[i],propTypes:{minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return s.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=(n=t.type)?n.displayName:void 0)?s.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=l({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.pageWidth&&this.props.minWidth<=(t=this.state.pageWidth)&&t<this.props.maxWidth?s.createElement("div",Object.assign({},e),this.renderChildren()):s.createElement("div",null)}}),e.exports=s.createClass({displayName:"Breakpoint",propTypes:{widthMethod:s.PropTypes.string.isRequired,minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?s.createElement(o,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?s.createElement(r,Object.assign({},this.props)):void 0}})},"./node_modules/react-responsive-grid/dist/components/Container.js":function(e,t,n){var r,o;r=n("./node_modules/react/react.js"),o=n("./node_modules/object-assign/index.js"),e.exports=r.createClass({displayName:"Container",render:function(){var e,t,n,i;return t={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},i=o(t,this.props.style),e=this.props.children,n=o({},this.props),delete n.children,delete n.style,r.createElement("div",Object.assign({},n,{style:i}),e,r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Grid.js":function(e,t,n){var r,o;r=n("./node_modules/react/react.js"),o=n("./node_modules/object-assign/index.js"),e.exports=r.createClass({displayName:"Grid",propTypes:{columns:r.PropTypes.number,gutterRatio:r.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return r.Children.map(this.props.children,function(e){return function(t){var n,o;return"Breakpoint"===(n=null!=(o=t.type)?o.displayName:void 0)||"Span"===n?r.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.gutterRatio}}):t}}(this))},render:function(){var e;return e=o({},this.props),delete e.gutterRatio,delete e.columns,r.createElement("div",Object.assign({},e),this.renderChildren(),r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/components/Span.js":function(e,t,n){var r,o,i;r=n("./node_modules/react/react.js"),o=n("./node_modules/object-assign/index.js"),i=n("./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js"),e.exports=r.createClass({displayName:"Span",propTypes:{context:r.PropTypes.object,columns:r.PropTypes.number,at:r.PropTypes.number,pre:r.PropTypes.number,post:r.PropTypes.number,squish:r.PropTypes.number,last:r.PropTypes.bool,break:r.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return r.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?r.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.context.gutterRatio}}):t}}(this))},render:function(){var e,t;return t=i({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),t=o(t,this.props.style),e=o({},this.props,{style:t}),delete e.at,delete e.break,delete e.columns,delete e.context,delete e.first,delete e.last,delete e.post,delete e.pre,delete e.squish,delete e.style,r.createElement("div",Object.assign({},e,{style:t}),this.renderChildren(),r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},"./node_modules/react-responsive-grid/dist/index.js":function(e,t,n){t.Container=n("./node_modules/react-responsive-grid/dist/components/Container.js"),t.Grid=n("./node_modules/react-responsive-grid/dist/components/Grid.js"),t.Breakpoint=n("./node_modules/react-responsive-grid/dist/components/Breakpoint.js"),t.Span=n("./node_modules/react-responsive-grid/dist/components/Span.js")},"./node_modules/react-responsive-grid/dist/utils/SpanCalculate.js":function(e,t,n){var r;r=n("./node_modules/object-assign/index.js"),e.exports=function(e){var t,n,o,i,s,a,l,d,c,u;return o={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},c=r(o,e),d=100/(c.contextColumns+(c.contextColumns-1)*c.gutterRatio),s=c.gutterRatio*d,n=function(e){return d*e+s*(e-1)},t=function(e){return 0===e?0:n(e)+s},u=n(c.columns),a=0===c.at&&0===c.pre&&0===c.squish?0:t(c.at)+t(c.pre)+t(c.squish),c.last&&0===c.post&&0===c.squish?l=0:0!==c.post||0!==c.squish?(l=t(c.post)+t(c.squish),c.last||(l+=s)):l=s,i=c.last?"right":"left",u+="%",a+="%",l+="%",{float:i,marginLeft:a,marginRight:l,width:u,clear:c.break?"both":"none"}}},"./src/components/Header.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),d=r(l),c=n("./node_modules/gatsby-link/index.js"),u=r(c);n("./src/css/header.css");var p=t.Header=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props.blogTitle;return d.default.createElement("div",{style:{display:"flex",paddingBottom:"0.5rem",marginBottom:"0.5rem",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}},d.default.createElement("h3",{style:{margin:"0 20px 0 0",paddingBottom:0}},d.default.createElement(u.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},name:"title",to:"/"},e)),d.default.createElement("div",{style:{color:"rgba(100,100,100, 0.7)"}},d.default.createElement(u.default,{className:"header-link",to:"/archive/"},"Blog"),d.default.createElement("span",{style:{padding:"0 0.5rem"}}),d.default.createElement(u.default,{className:"header-link",to:"/subscribe/"},"Subscribe"),d.default.createElement("span",{style:{padding:"0 0.5rem"}}),d.default.createElement(u.default,{className:"header-link",to:"/speaking/"},"Speaking"),d.default.createElement("span",{style:{padding:"0 0.5rem"}}),d.default.createElement("a",{className:"header-link",href:"http://twitter.com/ben336"},"Twitter"),d.default.createElement("span",{style:{padding:"0 0.5rem"}}),d.default.createElement(u.default,{className:"header-link",to:"/about/"},"About")))}}]),t}(d.default.Component);p.propTypes={blogTitle:d.default.PropTypes.string.isRequired}},"./src/css/header.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".header-link{color:hsla(0,0%,39%,.7);font-family:brandon-grotesque,Helvetica,sans-serif}.header-link:hover{color:#e2777a}.ad-wrapper{overflow:hidden;margin:0 0 1rem}#carbonads,.ad-wrapper{height:300px;width:150px}#carbonads{font-size:14px;position:relative;border:3px solid #f0f0f0;padding:7px}.carbon-wrap{width:130px;display:flex;flex-direction:column}.carbon-text{padding:5px 10px;max-height:120px;display:inline-block;overflow:hidden;line-height:1.3}.carbon-poweredby{color:hsla(0,0%,39%,.7);position:absolute;right:5px;bottom:0}.post-title-area{padding:1em 0}",""])},"./src/css/mobile.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".columns{display:flex}@media (max-width:700px){.columns{flex-wrap:wrap}.ad-wrapper,.no-mobile{display:none}.subscribe-block{padding-right:0;padding:0 10px}.subscribe-block,.subscribe-block .mc-field-group{width:100%!important}.subscribe-block .mc-field-group input{width:100%!important;font-size:.8em;height:2.4em}.up-next-block{width:100%!important;padding:0 10px}}@media (max-width:321px){html{font-size:100%!important}}",""])},"./src/css/typography.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"a{color:#e2777a;text-decoration:none;cursor:pointer}a:hover{text-decoration:underline}.footnote-backref,.footnote-ref{text-decoration:none;padding-left:3px}blockquote{border-left:5px solid #57a3e8;background:#eee;font-weight:400;font-size:.9rem;padding:1.5rem 2rem;margin:0 0 1rem}blockquote p{margin-bottom:.667em}h2,h3{color:#57a3e8}.explanation{padding:10px;background:#eee;border-radius:10px;margin:20px auto;font-size:.85em}.footnotes li>*{display:inline;margin-bottom:0}.article-body li{padding-left:10px}",""])},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ben/Blog/benmccormickorg/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ben/Blog/benmccormickorg/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ben/Blog/benmccormickorg/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ben/Blog/benmccormickorg/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/ben/Blog/benmccormickorg/node_modules/babel-preset-env/lib/index.js","/Users/ben/Blog/benmccormickorg/node_modules/babel-preset-stage-0/lib/index.js","/Users/ben/Blog/benmccormickorg/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),d=r(l),c=n("./node_modules/react-responsive-grid/dist/index.js"),u=n("./src/utils/typography.js"),p=n("./src/components/Header.js");n("./src/css/mobile.css"),n("./src/css/typography.css");var m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.history;return d.default.createElement(c.Container,{style:{padding:(0,u.rhythm)(1.5)+" "+(0,u.rhythm)(.75)}},d.default.createElement(p.Header,{blogTitle:"benmccormick.org",history:n}),t())}}]),t}(d.default.Component);m.propTypes={children:d.default.PropTypes.any,route:d.default.PropTypes.object},t.default=m,e.exports=t.default}});
//# sourceMappingURL=layout-component---index-4bbac47e781bb66ce6ea.js.map