(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{185:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return k});var r=n(6),i=n.n(r),o=(n(440),n(438),n(436),n(434),n(274),n(0)),a=n.n(o),c=n(241),m=n.n(c),s=n(419),l=n(403),p=n(401),u=n(228),d=n(211),h=n(300),f=n(191),g=f.a.h5({display:"block",fontFamily:d.c,fontSize:"16px",color:"rgba(100,100,100, 0.8)",marginTop:d.a.rhythm(.5),marginBottom:d.a.rhythm(.5)}),b=f.a.h1({display:"block",maxWidth:"100%"}),w=f.a.div({maxWidth:"100%","& li":{paddingLeft:"10px"},"& .reading-img img":{width:"150px",float:"right",margin:"0px 10px 20px 10px"},"& img.full-width":{maxHeight:"none"},"& img.half-width":{maxHeight:"none",width:"50%"}}),y=f.a.div({paddingLeft:"2rem",overflow:"hidden"}),v=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t,n=this,r=this.props,i=r.data,o=r.pageContext,a=r.location,c=i.markdownRemark.frontmatter,d=i.markdownRemark.html,f=i.markdownRemark.fields.slug,v="post"===c.layout,k=function(e){return c.hideSidebar?null:e};return e.createElement(u.a,null,e.createElement("article",{className:"markdown",ref:function(e){return n.markdownContainer=e}},e.createElement(p.a,{post:c,slug:f,body:d}),e.createElement("div",{className:"post-title-area"},e.createElement(g,null,m()(new Date(c.date),"MMMM Do YYYY")),e.createElement(b,null,c.title)),e.createElement("div",{className:k?"":"columns"},e.createElement(w,{dangerouslySetInnerHTML:{__html:d}}),k(e.createElement(y,{className:"no-mobile"},e.createElement(l.a,null),e.createElement(s.a,{url:a.pathname})))),(t=e.createElement(h.a,{post:c,recommendedPosts:o.relatedPosts}),v?t:null)))},n}(a.a.Component);t.default=v;var k="3726450165"}.call(this,n(79))},280:function(e,t,n){},299:function(e,t,n){"use strict";(function(e){var r=n(6),i=n.n(r),o=n(4),a=n.n(o),c=n(0),m=n.n(c),s=n(225),l=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props.recommendedPosts;return e.createElement("div",null,e.createElement("hr",null),e.createElement(s.a,{title:"You Might Also Like These Articles",pages:t,showCategory:!1,showDate:!0,useBox:!0}))},n}(m.a.Component);l.propTypes={pages:a.a.array},t.a=l}).call(this,n(79))},300:function(e,t,n){"use strict";(function(e){var r=n(6),i=n.n(r),o=n(4),a=n.n(o),c=n(0),m=n.n(c),s=n(299),l=(n(280),function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props.recommendedPosts;return e.createElement(s.a,{recommendedPosts:t})},n}(m.a.Component));l.propTypes={post:a.a.object.isRequired,recommendedPosts:a.a.array},t.a=l}).call(this,n(79))},401:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h});n(31);var r=n(6),i=n.n(r),o=n(0),a=n.n(o),c=n(4),m=n.n(c),s=n(233),l=n(241),p=n.n(l),u=n(196),d=n.n(u),h=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.post,r=t.slug,i=t.body,o="http://benmccormick.org/"+r;return e.createElement(s.a,{title:n.title?n.title+" | benmccormick.org":"benmccormick.org",description:n.description,keywords:n.keywords,meta:[{"twitter:card":"summary","twitter:site":"@benmccormickorg","twitter:creator":"@ben336","twitter:title":n.title,"twitter:description":n.description||"","twitter:image":n.image||"http://benmccormick.org/logo.png"}],script:[{type:"application/ld+json",innerHTML:'{\n                  "@context": "http://schema.org"\n                  "@type": "BlogPosting",\n                  "headline": "'+n.title+'",\n                  "genre": "Software Development",\n                  "keywords": "'+(n.keywords||"")+'",\n                  "url": "'+o+'",\n                  "image": "http://benmccormick.org/logo.png",\n                  "datePublished": "'+p()(d()(n.date),"YYYY-MM-D")+'",\n                  '+(n.description?'"description": "'+n.description+'",':"")+'\n                  "articleBody": "'+i.replace(/\"/g,'\\"')+'",\n                    "author": {\n                      "@type": "Person",\n                      "name": "Ben McCormick"\n                      "email": "mailto:ben@benmccormick.org",\n                      "image": "/profile_pic.jpg",\n                      "jobTitle": "Software Engineer",\n                      "alumniOf": "Duke",\n                      "birthPlace": "Pittsburgh, PA",\n                      "gender": "male",\n                      "url": "http://benmccormick.org",\n                \t    "sameAs" : [\n                        "https://www.linkedin.com/in/benmccormick",\n                        "http://twitter.com/ben336",\n                      ]\n                   }\n                }'}]})},n}(a.a.Component);h.propTypes={post:m.a.object.isRequired,slug:m.a.string.isRequired,body:m.a.string.isRequired}}).call(this,n(79))},402:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(191).a.div({overflow:"hidden",margin:0,"& #mc_embed_signup form":{marginBottom:"20px"},"@media all and (max-width: 700px)":{paddingRight:0,width:"100% !important",padding:"0 10px","& .mc-field-group":{width:"100% !important"},"& .mc-field-group input":{width:"100% !important",fontSize:"0.8em",height:"2.4em"}}})},403:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return m});var r=n(6),i=n.n(r),o=n(0),a=n.n(o),c=n(402),m=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){return e.createElement(c.a,null,e.createElement("form",{action:"https://buttondown.email/api/emails/embed-subscribe/benmccormick",method:"post",target:"popupwindow",onSubmit:"window.open('https://buttondown.email/benmccormick', 'popupwindow')",className:"embeddable-buttondown-form"},e.createElement("label",{htmlFor:"bd-email",id:"bd-label"},"Subscribe to the Newsletter"),e.createElement("input",{type:"hidden",value:"1",name:"embed"}),e.createElement("div",{className:"bd-subscribe-row"},e.createElement("input",{type:"email",name:"email",id:"bd-email",placeholder:"Your Email"}),e.createElement("input",{type:"submit",value:"Subscribe",id:"bd-submit"}))))},n}(a.a.Component)}).call(this,n(79))},417:function(e,t){var n="Expected a function";e.exports=function(e,t,r){if("function"!=typeof e)throw new TypeError(n);return setTimeout(function(){e.apply(void 0,r)},t)}},418:function(e,t,n){var r=n(417),i=n(234)(function(e,t){return r(e,1,t)});e.exports=i},419:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return l});var r=n(6),i=n.n(r),o=n(0),a=n.n(o),c=n(418),m=n.n(c),s=n(191).a.div({height:"300px",width:"150px",overflow:"hidden",margin:"0 0 1rem 0","@media all and (max-width: 700px)":{display:"none"}}),l=function(t){function n(){return t.apply(this,arguments)||this}i()(n,t);var r=n.prototype;return r.insertScript=function(){if(!this.container)return!1;var e=document.getElementById("carbonads");e&&e.remove();var t=document.createElement("script");for(t.src="//cdn.carbonads.com/carbon.js?serve=CKYIK53M&placement=benmccormickorg",t.type="text/javascript",t.id="_carbonads_js",t.async=!0;this.container.hasChildNodes();)this.container.removeChild(this.container.lastChild);this.container.appendChild(t)},r.componentDidUpdate=function(e){e.url!==this.props.url&&this.insertScript()},r.componentDidMount=function(){var e=this;m()(function(){return e.insertScript()})},r.render=function(){var t=this;return e.createElement(s,{innerRef:function(e){return t.container=e}})},n}(a.a.Component);l.propTypes={}}).call(this,n(79))},434:function(e,t,n){},436:function(e,t,n){},438:function(e,t,n){},440:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aeeaa540670d6bf31dbf.js.map