(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{253:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return E});var r=n(37),i=n.n(r),a=(n(529),n(527),n(525),n(523),n(349),n(1)),o=n.n(a),c=n(304),s=n.n(c),l=n(508),m=n(492),d=n(485),u=n(295),p=n(262),h=n(374),f=n(257),g=f.a.h5({display:"block",fontFamily:p.c,fontSize:"16px",color:"rgba(100,100,100, 0.8)",marginTop:p.a.rhythm(.5),marginBottom:p.a.rhythm(.5)}),b=f.a.h1({display:"block",maxWidth:"100%"}),y=f.a.div({maxWidth:"100%","& li":{paddingLeft:"10px"},"& .reading-img img":{width:"150px",float:"right",margin:"0px 10px 20px 10px"},"& img.full-width":{maxHeight:"none"},"& img.half-width":{maxHeight:"none",width:"50%"}}),v=f.a.div({paddingLeft:"2rem"}),w=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t,n=this,r=this.props,i=r.data,a=r.pageContext,o=r.history,c=i.markdownRemark.frontmatter,p=i.markdownRemark.html,f=i.markdownRemark.fields.slug,w="post"===c.layout,E="weekly-links"===c.layout,k=w||E,x=function(e){return w?e:null};return e.createElement(u.a,{history:o},e.createElement("article",{className:"markdown",ref:function(e){return n.markdownContainer=e}},e.createElement(d.a,{post:c,slug:f,body:p}),e.createElement("div",{className:"post-title-area"},x(e.createElement(g,null,s()(new Date(c.date),"MMMM Do YYYY"))),e.createElement(b,null,c.title)),e.createElement("div",{className:"columns"},e.createElement(y,{dangerouslySetInnerHTML:{__html:p}}),(t=e.createElement(v,{className:"no-mobile"},e.createElement(l.a,{history:o}),e.createElement(m.a,null)),k?t:null)),x(e.createElement(h.a,{post:c,recommendedPosts:a.relatedPosts}))))},n}(o.a.Component);t.default=w;var E="2227881947"}.call(this,n(117))},355:function(e,t,n){},373:function(e,t,n){"use strict";(function(e){var r=n(37),i=n.n(r),a=n(0),o=n.n(a),c=n(1),s=n.n(c),l=n(292),m=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props.recommendedPosts;return e.createElement("div",null,e.createElement("hr",null),e.createElement(l.a,{title:"You Might Also Like These Articles",pages:t,showCategory:!1,showDate:!0,useBox:!0}))},n}(s.a.Component);m.propTypes={pages:o.a.array},t.a=m}).call(this,n(117))},374:function(e,t,n){"use strict";(function(e){var r=n(37),i=n.n(r),a=n(0),o=n.n(a),c=n(1),s=n.n(c),l=n(373),m=(n(355),function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props.recommendedPosts;return e.createElement(l.a,{recommendedPosts:t})},n}(s.a.Component));m.propTypes={post:o.a.object.isRequired,recommendedPosts:o.a.array},t.a=m}).call(this,n(117))},485:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h}),n(76);var r=n(37),i=n.n(r),a=n(1),o=n.n(a),c=n(0),s=n.n(c),l=n(300),m=n(304),d=n.n(m),u=n(263),p=n.n(u),h=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.post,r=t.slug,i=t.body,a="http://benmccormick.org/"+r;return e.createElement(l.a,{title:n.title?n.title+" | benmccormick.org":"benmccormick.org",description:n.description,keywords:n.keywords,meta:[{"twitter:card":"summary","twitter:site":"@benmccormickorg","twitter:creator":"@ben336","twitter:title":n.title,"twitter:description":n.description||"","twitter:image":n.image||"http://benmccormick.org/logo.png"}],script:[{type:"application/ld+json",innerHTML:'{\n                  "@context": "http://schema.org"\n                  "@type": "BlogPosting",\n                  "headline": "'+n.title+'",\n                  "genre": "Software Development",\n                  "keywords": "'+(n.keywords||"")+'",\n                  "url": "'+a+'",\n                  "image": "http://benmccormick.org/logo.png",\n                  "datePublished": "'+d()(p()(n.date),"YYYY-MM-D")+'",\n                  '+(n.description?'"description": "'+n.description+'",':"")+'\n                  "articleBody": "'+i.replace(/\"/g,'\\"')+'",\n                    "author": {\n                      "@type": "Person",\n                      "name": "Ben McCormick"\n                      "email": "mailto:ben@benmccormick.org",\n                      "image": "/profile_pic.jpg",\n                      "jobTitle": "Software Engineer",\n                      "alumniOf": "Duke",\n                      "birthPlace": "Pittsburgh, PA",\n                      "gender": "male",\n                      "url": "http://benmccormick.org",\n                \t    "sameAs" : [\n                        "https://www.linkedin.com/in/benmccormick",\n                        "http://twitter.com/ben336",\n                      ]\n                   }\n                }'}]})},n}(o.a.Component);h.propTypes={post:s.a.object.isRequired,slug:s.a.string.isRequired,body:s.a.string.isRequired}}).call(this,n(117))},486:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(257).a.div({overflow:"hidden",margin:0,"& #mc_embed_signup form":{marginBottom:"20px"},"@media all and (max-width: 700px)":{paddingRight:0,width:"100% !important",padding:"0 10px","& .mc-field-group":{width:"100% !important"},"& .mc-field-group input":{width:"100% !important",fontSize:"0.8em",height:"2.4em"}}})},492:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return m});var r=n(37),i=n.n(r),a=n(1),o=n.n(a),c=n(262),s=n(486),l=n(257).a.h6({margin:0,fontSize:c.a.scale(-.5).fontSize,lineHeight:c.a.scale(-.5).lineHeight,letterSpacing:-.25}),m=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){return e.createElement(s.a,null,e.createElement("div",{id:"mc_embed_signup"},e.createElement(l,null,"Subscribe via email"),e.createElement("form",{action:"//benmccormick.us8.list-manage.com/subscribe/post?u=115446b80fd9d930ba091cc27&id=f5b9f5acf2",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},e.createElement("div",{id:"mc_embed_signup_scroll"},e.createElement("div",{className:"mc-field-group sidebar-group"},e.createElement("input",{type:"email",defaultValue:"",name:"EMAIL",className:"subscribe-email required email",id:"mce-EMAIL",placeholder:"Email Address"}),e.createElement("input",{type:"submit",value:">",name:"subscribe",id:"mc-embedded-subscribe",className:"subscribe-button button"})),e.createElement("div",{id:"mce-responses",className:"clear"},e.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),e.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})),e.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},e.createElement("input",{type:"text",name:"b_115446b80fd9d930ba091cc27_f5b9f5acf2",tabIndex:"-1",value:""})),e.createElement("div",{className:"clear"})))))},n}(o.a.Component)}).call(this,n(117))},506:function(e,t){e.exports=function(e,t,n){if("function"!=typeof e)throw new TypeError("Expected a function");return setTimeout(function(){e.apply(void 0,n)},t)}},507:function(e,t,n){var r=n(506),i=n(302)(function(e,t){return r(e,1,t)});e.exports=i},508:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return m});var r=n(37),i=n.n(r),a=n(1),o=n.n(a),c=n(507),s=n.n(c),l=n(257).a.div({height:"300px",width:"150px",overflow:"hidden",margin:"0 0 1rem 0","@media all and (max-width: 700px)":{display:"none"}}),m=function(t){function n(e){var n;return(n=t.call(this,e)||this).state={url:null},n}i()(n,t);var r=n.prototype;return r.insertScript=function(){if(!this.container)return!1;var e=document.getElementById("carbonads");e&&e.remove();var t=document.createElement("script");for(t.src="//cdn.carbonads.com/carbon.js?serve=CKYIK53M&placement=benmccormickorg",t.type="text/javascript",t.id="_carbonads_js",t.async=!0;this.container.hasChildNodes();)this.container.removeChild(this.container.lastChild);this.container.appendChild(t)},r.componentDidMount=function(){var e=this;s()(function(){return e.insertScript()}),this.props.history.listen(function(t){var n=t.pathname;n!==e.state.url&&e.insertScript(),e.setState({url:n})})},r.render=function(){var t=this;return e.createElement(l,{innerRef:function(e){return t.container=e}})},n}(o.a.Component);m.propTypes={}}).call(this,n(117))},523:function(e,t,n){},525:function(e,t,n){},527:function(e,t,n){},529:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2f23ca2d2d8592850528.js.map