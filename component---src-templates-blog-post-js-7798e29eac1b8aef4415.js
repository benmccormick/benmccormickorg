webpackJsonp([0x620f737b6699],{798:function(e,t){function n(e,t,n){if("function"!=typeof e)throw new TypeError(r);return setTimeout(function(){e.apply(void 0,n)},t)}var r="Expected a function";e.exports=n},888:function(e,t,n){var r=n(798),o=n(134),i=o(function(e,t){return r(e,1,t)});e.exports=i},278:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Ad=void 0;var c=n(3),s=r(c),l=n(888),u=r(l),p=n(15),f=r(p),d=f.default.div({height:"300px",width:"150px",overflow:"hidden",margin:"0 0 1rem 0","@media all and (max-width: 700px)":{display:"none"}}),m=t.Ad=function(t){function n(e){o(this,n);var r=i(this,t.call(this,e));return r.state={url:null},r}return a(n,t),n.prototype.insertScript=function(){if(!this.container)return!1;var e=document.getElementById("carbonads");e&&e.remove();var t=document.createElement("script");for(t.src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=benmccormickorg",t.type="text/javascript",t.id="_carbonads_js",t.async=!0;this.container.hasChildNodes();)this.container.removeChild(this.container.lastChild);this.container.appendChild(t)},n.prototype.componentDidMount=function(){var e=this;(0,u.default)(function(){return e.insertScript()}),this.props.history.listen(function(t){var n=t.pathname;n!==e.state.url&&e.insertScript(),e.setState({url:n})})},n.prototype.render=function(){var t=this;return e.createElement(d,{innerRef:function(e){return t.container=e}})},n}(s.default.Component);m.propTypes={}}).call(t,n(9))},279:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.BlogPostHeadContent=void 0;var c=n(3),s=r(c),l=n(6),u=r(l),p=n(51),f=n(60),d=r(f),m=n(16),b=r(m),h=t.BlogPostHeadContent=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return a(n,t),n.prototype.render=function(){var t=this.props,n=t.post,r=t.slug,o=t.body,i="http://benmccormick.org/"+r;return e.createElement(p.HeadContent,{title:n.title?n.title+" | benmccormick.org":"benmccormick.org",description:n.description,keywords:n.keywords,meta:{"twitter:card":"summary","twitter:site":"@benmccormickorg","twitter:creator":"@ben336","twitter:title":n.title,"twitter:description":n.description||"","twitter:image":n.image||"http://benmccormick.org/logo.png"},script:[{type:"application/ld+json",innerHTML:'{\n                  "@context": "http://schema.org"\n                  "@type": "BlogPosting",\n                  "headline": "'+n.title+'",\n                  "genre": "Software Development",\n                  "keywords": "'+(n.keywords||"")+'",\n                  "url": "'+i+'",\n                  "image": "http://benmccormick.org/logo.png",\n                  "datePublished": "'+(0,d.default)((0,b.default)(n.date),"YYYY-MM-D")+'",\n                  '+(n.description?'"description": "'+n.description+'",':"")+'\n                  "articleBody": "'+o.replace(/\"/g,'\\"')+'",\n                    "author": {\n                      "@type": "Person",\n                      "name": "Ben McCormick"\n                      "email": "mailto:ben@benmccormick.org",\n                      "image": "/profile_pic.jpg",\n                      "jobTitle": "Software Engineer",\n                      "alumniOf": "Duke",\n                      "birthPlace": "Pittsburgh, PA",\n                      "gender": "male",\n                      "url": "http://benmccormick.org",\n                \t    "sameAs" : [\n                        "https://www.linkedin.com/in/benmccormick",\n                        "http://twitter.com/ben336",\n                      ]\n                   }\n                }'}]})},n}(s.default.Component);h.propTypes={post:u.default.object.isRequired,slug:u.default.string.isRequired,body:u.default.string.isRequired}}).call(t,n(9))},282:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.EmailSubscribe=void 0;var c=n(3),s=r(c),l=n(53),u=n(287),p=n(15),f=r(p),d=f.default.h6({margin:0,fontSize:(0,l.scale)(-.5).fontSize,lineHeight:(0,l.scale)(-.5).lineHeight,letterSpacing:-.25});t.EmailSubscribe=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return a(n,t),n.prototype.render=function(){return e.createElement(u.SubscribeBlock,null,e.createElement("div",{id:"mc_embed_signup"},e.createElement(d,null,"Subscribe via email"),e.createElement("form",{action:"//benmccormick.us8.list-manage.com/subscribe/post?u=115446b80fd9d930ba091cc27&id=f5b9f5acf2",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},e.createElement("div",{id:"mc_embed_signup_scroll"},e.createElement("div",{className:"mc-field-group sidebar-group"},e.createElement("input",{type:"email",defaultValue:"",name:"EMAIL",className:"subscribe-email required email",id:"mce-EMAIL",placeholder:"Email Address"}),e.createElement("input",{type:"submit",value:">",name:"subscribe",id:"mc-embedded-subscribe",className:"subscribe-button button"})),e.createElement("div",{id:"mce-responses",className:"clear"},e.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),e.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})),e.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},e.createElement("input",{type:"text",name:"b_115446b80fd9d930ba091cc27_f5b9f5acf2",tabIndex:"-1",value:""})),e.createElement("div",{className:"clear"})))))},n}(s.default.Component)}).call(t,n(9))},285:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(6),l=o(s),u=n(3),p=o(u),f=n(286),d=o(f);n(398);var m=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return c(t,e),t.prototype.render=function(){var e=this.props.recommendedPosts;return r.createElement(d.default,{recommendedPosts:e})},t}(p.default.Component);m.propTypes={post:l.default.object.isRequired,recommendedPosts:l.default.array},t.default=m,e.exports=t.default}).call(t,n(9))},286:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(6),l=o(s),u=n(3),p=o(u),f=n(52),d=o(f),m=function(e){function t(){return i(this,t),a(this,e.apply(this,arguments))}return c(t,e),t.prototype.render=function(){var e=this.props.recommendedPosts;return r.createElement("div",null,r.createElement("hr",null),r.createElement(d.default,{title:"You Might Also Like These Articles",pages:e,showCategory:!1,showDate:!0,useBox:!0}))},t}(p.default.Component);m.propTypes={pages:l.default.array},t.default=m,e.exports=t.default}).call(t,n(9))},287:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SubscribeBlock=void 0;var o=n(15),i=r(o);t.SubscribeBlock=i.default.div({overflow:"hidden",margin:0,"& #mc_embed_signup form":{marginBottom:"20px"},"@media all and (max-width: 700px)":{paddingRight:0,width:"100% !important",padding:"0 10px","& .mc-field-group":{width:"100% !important"},"& .mc-field-group input":{width:"100% !important",fontSize:"0.8em",height:"2.4em"}}})},393:function(e,t){},395:function(e,t){},396:function(e,t){},398:function(e,t){},399:function(e,t){},122:function(e,t){},293:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0,n(393),n(395),n(396),n(399),n(122);var c=n(3),s=r(c),l=n(60),u=r(l),p=n(278),f=n(282),d=n(279),m=n(75),b=n(53),h=n(285),y=r(h),g=n(15),w=r(g),_=w.default.h5({display:"block",fontFamily:"ff-tisa-web-pro, serif",fontSize:"14px",color:"rgba(100,100,100, 0.7)",marginTop:(0,b.rhythm)(.5),marginBottom:(0,b.rhythm)(.5)}),E=w.default.div({maxWidth:"600px","& li":{paddingLeft:"10px"},"& .reading-img img":{width:"150px",float:"right",margin:"0px 10px 20px 10px"},"& img.full-width":{maxHeight:"none"},"& img.half-width":{maxHeight:"none",width:"50%"}}),v=w.default.div({paddingLeft:"2rem"}),x=function(t){function n(){return o(this,n),i(this,t.apply(this,arguments))}return a(n,t),n.prototype.componentDidMount=function(){(0,m.fadeIn)(this.markdownContainer)},n.prototype.render=function(){var t=this,n=this.props,r=n.data,o=n.pathContext,i=n.history,a=r.markdownRemark.frontmatter,c=r.markdownRemark.html,s=r.markdownRemark.fields.slug,l="post"===a.layout,m="weekly-links"===a.layout,b=l||m,h=function(e){return l?e:null},g=function(e){return b?e:null};return e.createElement("div",{className:"markdown",ref:function(e){return t.markdownContainer=e}},e.createElement(d.BlogPostHeadContent,{post:a,slug:s,body:c}),e.createElement("div",{className:"post-title-area"},e.createElement("h1",null,a.title),h(e.createElement(_,null,"Originally Posted ",(0,u.default)(new Date(a.date),"MMMM Do YYYY")))),e.createElement("div",{className:"columns"},e.createElement(E,{dangerouslySetInnerHTML:{__html:c}}),g(e.createElement(v,{className:"no-mobile"},e.createElement(p.Ad,{history:i}),e.createElement(f.EmailSubscribe,null)))),h(e.createElement(y.default,{post:a,recommendedPosts:o.relatedPosts})))},n}(s.default.Component);t.default=x;t.pageQuery="** extracted graphql fragment **"}).call(t,n(9))}});
//# sourceMappingURL=component---src-templates-blog-post-js-7798e29eac1b8aef4415.js.map