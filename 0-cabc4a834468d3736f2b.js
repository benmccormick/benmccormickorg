(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"c",function(){return c});var o=n(491),i=n.n(o),r=n(490),a=n.n(r),s=n(487),l='"mr-eaves-xl-modern", "Helvetica Neue", Arial, sans-serif',c='"minion-3", Garamond, serif',d=new i.a({baseFontSize:"18px",baseLineHeight:1.6,headerFontFamily:["mr-eaves-xl-modern","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],bodyFontFamily:["minion-3","Garamond","serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],scaleRatio:1.6,blockMarginTop:.75,blockMarginBottom:.75,plugins:[new a.a],overrideStyles:function(){var e;return(e={"h1,h2,h3,h4,h5,h6":{lineHeight:1.1},"tt,code":{fontSize:"14px"},pre:{lineHeight:1.1},"pre code":{lineHeight:1.1}})[s.MOBILE_MEDIA_QUERY]={html:{fontSize:"112.5%"}},e}});d.injectStyles(),t.a=d},292:function(e,t,n){"use strict";(function(e){var o=n(37),i=n.n(o),r=n(1),a=n.n(r),s=n(261),l=n.n(s),c=n(257),d=n(0),p=n.n(d),u=n(327),h=n(356),L=c.a.h2({color:"inherit"}),g=c.a.ul({marginLeft:0,paddingLeft:0}),w=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.pages,o=t.title,i=t.showCategory,r=t.showDate,a=t.showDescriptions,s=t.description,l=t.className,c=t.titleFn,d=t.showPopular,p=t.showTrending,w=t.useBox,m=n.map(function(t){return w?e.createElement(u.a,{key:t.path,page:t,showDate:r,titleFn:c}):e.createElement(h.a,{page:t,showCategory:i,key:t.path,showDate:r,showDescription:a,showPopular:d,showTrending:p,titleFn:c})});return e.createElement("div",{className:l},o?e.createElement(L,null,o):null,s||null,e.createElement(g,null,m))},n}(a.a.Component);w.propTypes={pages:p.a.array.isRequired,title:p.a.string,description:p.a.node,showCategory:p.a.bool.isRequired,showDate:p.a.bool.isRequired,showPopular:p.a.bool.isRequired,showTrending:p.a.bool.isRequired,showDescriptions:p.a.bool.isRequired,className:p.a.any.isRequired,titleFn:p.a.func.isRequired,useBox:p.a.bool.isRequired},w.defaultProps={showCategory:!0,showDate:!0,showDescriptions:!0,showPopular:!1,showTrending:!1,className:"",useBox:!1,titleFn:function(e){return l()(e,"data.title")||e.path}},t.a=w}).call(this,n(117))},294:function(e,t,n){"use strict";(function(e){var o=n(1),i=n.n(o),r=n(0),a=n.n(r),s=n(293),l=n.n(s);n.d(t,"a",function(){return l.a}),n(328),i.a.createContext({}),a.a.object,a.a.string.isRequired,a.a.func,a.a.func}).call(this,n(117))},295:function(e,t,n){"use strict";(function(e){var o=n(37),i=n.n(o),r=n(0),a=n.n(r),s=n(1),l=n.n(s),c=n(262),d=n(257),p=n(400),u=(n(376),n(349),c.a.rhythm),h=d.a.div({maxWidth:"960px",margin:"0 auto",padding:u(1.5)+" "+u(.75)}),L=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.children,o=t.history;return e.createElement(h,null,e.createElement(p.a,{blogTitle:"benmccormick.org",history:o}),n)},n}(l.a.Component);L.propTypes={children:a.a.any,history:a.a.object},t.a=L}).call(this,n(117))},300:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return g});var o=n(37),i=n.n(o),r=n(1),a=n.n(r),s=n(0),l=n.n(s),c=n(484),d=n.n(c),p=n(476),u=n.n(p),h=n(403),L=n.n(h),g=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.title,o=t.description,i=t.keywords,r=t.meta,a=t.script,s=u()(r,function(e,t){return{name:t,content:e}});return e.createElement(d.a,{title:n,meta:L()([{name:"description",content:o},{name:"keywords",content:i}],s),script:a})},n}(a.a.Component);g.propTypes={title:l.a.string.isRequired,description:l.a.string.isRequired,keywords:l.a.string.isRequired,script:l.a.array.isRequired,meta:l.a.array.isRequired},g.defaultProps={title:"benmccormick.org",description:"Ben McCormick's blog on JavaScript and Web Development",keywords:"blog javascript development code react vim",script:[],meta:[]}}).call(this,n(117))},311:function(e,t,n){"use strict";(function(e){var o=n(0),i=n.n(o),r=(n(1),n(372)),a=n.n(r),s=n(257),l=function(t){var n=t.icon,o=t.color,i=function(e){return s.a.span({display:"block",width:"2em",height:"2em",marginRight:"0.5em","& *":{fill:e},"& > i":{height:"30px"}})}(o);return e.createElement(i,{color:o},e.createElement(a.a,{src:n}))};l.propTypes={color:i.a.string.isRequired,icon:i.a.string.isRequired},t.a=l}).call(this,n(117))},323:function(e){e.exports={categories:[{title:"JavaScript Frameworks and Libraries",description:"These posts cover development using JavaScript frameworks and libraries, including React, jQuery, Knockout, and Backbone",key:"frameworks",icon:"beaker",color:"rgba(240, 219, 79, 1.00)",subscribeText:"JavaScript development"},{title:"JavaScript Language",description:"These posts cover the JavaScript language, its evolution over time, and practical usage examples.",key:"javascript",icon:"code",color:"rgb(42, 194, 240)",subscribeText:"JavaScript"},{title:"Productivity and Software Engineering",description:"These posts cover techniques and ideas around improving productivity and writing better software.",key:"software-productivity",icon:"project",color:"#F1684E",subscribeText:"Software engineering"},{title:"Meta",key:"meta",description:"These posts are updates about the site, messages to the readers or news from me",icon:"info",color:"#999",subscribeText:"Web development"},{title:"Software Tools",description:"These posts cover tools and applications I use in software development",key:"tools",icon:"tools",color:"#5F9EA0",subscribeText:"Software tooling"},{title:"Book and Product Reviews",description:"These posts are reviews of books I've read and products I've used",key:"reviews",icon:"book",color:"rgba(99, 159, 110, 1.00)",subscribeText:"Web development"},{title:"Web Platform",description:"These posts cover the technologies and standards behind the web, especially how they relate to software development",key:"platform",icon:"globe",color:"rgba(29, 100, 158, 1.00)",subscribeText:"The web platform"},{title:"Opinion",description:"These posts cover my thoughts on a variety of technology related subjects",key:"opinion",icon:"megaphone",color:"rgba(154, 116, 170, 1.00)",subscribeText:"Web development"},{title:"Computer Science",description:"These posts cover more academic computer science concepts",key:"computer-science",icon:"desktop",color:"#F08080",subscribeText:"Computer Science"}]}},324:function(e,t,n){"use strict";(function(e){var o=n(37),i=n.n(o),r=n(0),a=n.n(r),s=n(1),l=n.n(s),c=n(370),d=n.n(c),p=n(369),u=n.n(p),h=n(368),L=n.n(h),g=n(367),w=n.n(g),m=n(366),f=n.n(m),C=n(365),v=n.n(C),x=n(364),b=n.n(x),y=n(363),k=n.n(y),M=n(362),S=n.n(M),E=n(361),Z=n.n(E),T=n(360),R=n.n(T),q=n(323),F=(n(294),n(261)),D=n.n(F),j=n(322),B=n.n(j),z=(n(69),n(311)),I=(n(262),n(257)),P={beaker:d.a,book:u.a,browser:L.a,code:w.a,globe:f.a,info:v.a,megaphone:b.a,project:k.a,tools:S.a,desktop:R.a},O=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t,n=this.props.category,o=D()(q,"categories",[]),i=B()(o,{key:n}),r=i?P[i.icon]:Z.a,a=(t=i?i.color:"red",I.a.div({background:t,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",paddingLeft:"0.5rem"}));return e.createElement(a,null,e.createElement(z.a,{icon:r,color:"rgba(256,256,256,1)"}))},n}(l.a.Component);O.propTypes={category:a.a.string.isRequired,includeText:a.a.bool.isRequired},O.defaultProps={includeText:!0},t.a=O}).call(this,n(117))},325:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>'},326:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>'},327:function(e,t,n){"use strict";(function(e){var o=n(37),i=n.n(o),r=n(0),a=n.n(r),s=n(1),l=n.n(s),c=n(294),d=n(261),p=n.n(d),u=n(262),h=n(304),L=n.n(h),g=n(263),w=n.n(g),m=n(257),f=(n(326),n(325),n(311),n(324)),C=n(69),v=Object(C.css)({fontFamily:u.b,fontSize:"120%",margin:"0 1px "+u.a.rhythm(.5)+" 1px",color:"initial",background:"#FFFFFF",transition:"all 0.5s ease",display:"grid",gridTemplateColumns:"5rem 1fr 6rem",gridTemplateRows:"1fr",boxShadow:"0 1px 2px 0 rgba(43, 59, 93, 0.29)",":hover":{textDecoration:"none",boxShadow:"0 10px 30px 0 rgba(0, 0, 0, 0.29)"},"@media all and (max-width: 700px)":{gridTemplateColumns:"5rem 1fr 0px"}}),x=m.a.div({maxWidth:"60vw","@media all and (max-width: 700px)":{maxWidth:"100vw"},display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem"}),b=m.a.p({fontFamily:u.c,fontSize:"18px",margin:0,"@media all and (max-width: 700px)":{fontSize:"70%"}}),y=m.a.span({whiteSpace:"nowrap",display:"flex",fontSize:"18px",justifyContent:"space-between",alignItems:"center","@media all and (max-width: 700px)":{display:"none"}}),k=m.a.div({display:"flex",justifyContent:"space-between",alignItems:"center","> *":{marginRight:"10px"},"@media all and (max-width: 700px)":{fontSize:"80%"}}),M=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.page,o=t.showDate,i=(0,t.titleFn)(n);return e.createElement(c.a,{className:v,to:n.path},e.createElement(f.a,{category:n.data.category}),e.createElement(x,null,e.createElement("div",null,e.createElement(k,null,i),e.createElement(b,null,n.data.description))),o?e.createElement(y,{className:"no-mobile"},L()(w()(n.data.date),"MMM Do YYYY")):null)},n}(l.a.Component);M.propTypes={page:a.a.object.isRequired,showDate:a.a.bool.isRequired,titleFn:a.a.func.isRequired},M.defaultProps={showDate:!0,showDescription:!0,titleFn:function(e){return p()(e,"data.title")||e.path}},t.a=M}).call(this,n(117))},328:function(e,t,n){var o;e.exports=(o=n(379))&&o.default||o},349:function(e,t,n){},356:function(e,t,n){"use strict";(function(e){var o=n(37),i=n.n(o),r=n(0),a=n.n(r),s=n(1),l=n.n(s),c=n(294),d=n(262),p=n(324),u=n(304),h=n.n(u),L=n(263),g=n.n(L),w=n(257),m=n(326),f=n.n(m),C=n(325),v=n.n(C),x=n(311),b=n(69),y=function(){return e.createElement(x.a,{color:"#E55934",icon:v.a})},k=function(){return e.createElement(x.a,{color:"#D7AF70",icon:f.a})},M=w.a.li({marginBottom:d.a.rhythm(.5),listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}),S=w.a.div({maxWidth:"50vw","@media all and (max-width: 700px)":{maxWidth:"100vw"},display:"flex",alignItems:"center"}),E=Object(b.css)({boxShadow:"none",fontSize:"16px",fontFamily:d.b,textDecoration:"none"}),Z=w.a.p({fontFamily:d.c,fontSize:"16px",margin:0,color:"#999999"}),T=w.a.span({fontFamily:d.c,whiteSpace:"nowrap",fontSize:"18px",color:"#999999"}),R=w.a.div({display:"flex",alignItems:"center","> *":{marginRight:"10px"}}),q=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props,n=t.page,o=t.showCategory,i=t.showDate,r=t.showDescription,a=t.titleFn,s=t.showPopular,l=t.showTrending,d=a(n);return e.createElement(M,null,e.createElement(S,null,e.createElement("div",null,e.createElement(R,null,e.createElement(c.a,{className:E,to:n.path},d),l&&n.data.isTrending?e.createElement(y,null):null,s&&n.data.isPopular?e.createElement(k,null):null),r?e.createElement(Z,null,n.data.description):null,o?e.createElement(p.a,{category:n.data.category}):null)),i?e.createElement(T,{className:"no-mobile"},h()(g()(n.data.date),"MMM Do YYYY")):null)},n}(l.a.Component);q.propTypes={page:a.a.object.isRequired,showDate:a.a.bool.isRequired,showCategory:a.a.bool.isRequired,showDescription:a.a.bool.isRequired,showPopular:a.a.bool.isRequired,showTrending:a.a.bool.isRequired,titleFn:a.a.func.isRequired},q.defaultProps={showCategory:!0,showDate:!0,showDescription:!0},t.a=q}).call(this,n(117))},360:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'},361:function(e,t){e.exports='<svg viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>question</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="question" fill="#000000"><path d="M6,10 L8,10 L8,12 L6,12 L6,10 L6,10 Z M10,6.5 C10,8.64 8,9 8,9 L6,9 C6,8.45 6.45,8 7,8 L7.5,8 C7.78,8 8,7.78 8,7.5 L8,6.5 C8,6.22 7.78,6 7.5,6 L6.5,6 C6.22,6 6,6.22 6,6.5 L6,7 L4,7 C4,5.5 5.5,4 7,4 C8.5,4 10,5 10,6.5 L10,6.5 Z M7,2.3 C10.14,2.3 12.7,4.86 12.7,8 C12.7,11.14 10.14,13.7 7,13.7 C3.86,13.7 1.3,11.14 1.3,8 C1.3,4.86 3.86,2.3 7,2.3 L7,2.3 Z M7,1 C3.14,1 0,4.14 0,8 C0,11.86 3.14,15 7,15 C10.86,15 14,11.86 14,8 C14,4.14 10.86,1 7,1 L7,1 Z" id="Shape"></path></g></g></svg>'},362:function(e,t){e.exports='<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>tools</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="tools" fill="#000000"><path d="M4.48,7.27 C4.74,7.53 5.76,8.6 5.76,8.6 L6.32,8.02 L5.44,7.11 L7.13,5.31 C7.13,5.31 6.37,4.57 6.7,4.86 C7.02,3.67 6.73,2.35 5.83,1.42 C4.93,0.5 3.66,0.2 2.52,0.51 L4.45,2.51 L3.94,4.47 L2.05,4.99 L0.12,2.99 C-0.19,4.17 0.1,5.48 1,6.4 C1.94,7.38 3.29,7.66 4.48,7.27 L4.48,7.27 Z M10.92,9.21 L8.59,11.51 L12.43,15.49 C12.74,15.82 13.16,15.98 13.57,15.98 C13.98,15.98 14.39,15.82 14.71,15.49 C15.34,14.84 15.34,13.79 14.71,13.14 L10.92,9.21 L10.92,9.21 Z M16,2.53 L13.55,0 L6.33,7.46 L7.21,8.37 L2.9,12.83 L1.91,13.36 L0.52,15.63 L0.87,16 L3.07,14.56 L3.58,13.54 L7.9,9.08 L8.78,9.99 L16,2.53 L16,2.53 Z" id="Shape"></path></g></g></svg>'},363:function(e,t){e.exports='<svg viewBox="0 0 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>project</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="project" fill="#000000"><path d="M10,12 L13,12 L13,2 L10,2 L10,12 L10,12 Z M6,10 L9,10 L9,2 L6,2 L6,10 L6,10 Z M2,14 L5,14 L5,2 L2,2 L2,14 L2,14 Z M1,15 L14,15 L14,1 L1,1 L1,15 L1,15 Z M14,0 L1,0 C0.448,0 0,0.448 0,1 L0,15 C0,15.552 0.448,16 1,16 L14,16 C14.552,16 15,15.552 15,15 L15,1 C15,0.448 14.552,0 14,0 L14,0 L14,0 Z" id="Shape"></path></g></g></svg>'},364:function(e,t){e.exports='<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>megaphone</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="megaphone" fill="#000000"><path d="M10,1 C9.83,1 9.64,1.05 9.48,1.14 C8.04,2.02 4.5,4.58 3,5 C1.62,5 0,5.67 0,7.5 C0,9.33 1.63,10 3,10 C3.3,10.08 3.64,10.23 4,10.41 L4,15 L6,15 L6,11.55 C7.34,12.41 8.69,13.38 9.48,13.86 C9.64,13.95 9.82,14 10,14 C10.52,14 11,13.58 11,13 L11,2 C11,1.42 10.52,1 10,1 L10,1 Z M10,13 C9.62,12.77 9.11,12.42 8.5,12 C8.34,11.89 8.17,11.78 8,11.66 L8,3.31 C8.16,3.2 8.31,3.11 8.47,3 C9.08,2.59 9.63,2.23 10,2 L10,13 L10,13 Z M12,7 L16,7 L16,8 L12,8 L12,7 L12,7 Z M12,9 L16,11 L16,12 L12,10 L12,9 L12,9 Z M16,3 L16,4 L12,6 L12,5 L16,3 L16,3 Z" id="Shape"></path></g></g></svg>'},365:function(e,t){e.exports='<svg viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>info</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="info" fill="#000000"><path d="M6.3,5.69 C6.11,5.5 6.02,5.27 6.02,4.99 C6.02,4.71 6.11,4.47 6.3,4.29 C6.49,4.11 6.72,4.01 7,4.01 C7.28,4.01 7.52,4.1 7.7,4.29 C7.88,4.48 7.98,4.71 7.98,4.99 C7.98,5.27 7.89,5.51 7.7,5.69 C7.51,5.87 7.28,5.99 7,5.99 C6.72,5.99 6.48,5.88 6.3,5.69 L6.3,5.69 Z M8,7.99 C7.98,7.74 7.89,7.51 7.69,7.3 C7.49,7.11 7.27,7 7,6.99 L6,6.99 C5.73,7.01 5.52,7.12 5.31,7.3 C5.11,7.5 5.01,7.74 5,7.99 L6,7.99 L6,10.99 C6.02,11.26 6.11,11.49 6.31,11.68 C6.51,11.88 6.73,11.99 7,11.99 L8,11.99 C8.27,11.99 8.48,11.88 8.69,11.68 C8.89,11.49 8.99,11.26 9,10.99 L8,10.99 L8,7.98 L8,7.99 Z M7,2.3 C3.86,2.3 1.3,4.84 1.3,7.98 C1.3,11.12 3.86,13.68 7,13.68 C10.14,13.68 12.7,11.13 12.7,7.98 C12.7,4.83 10.14,2.29 7,2.29 L7,2.3 Z M7,0.98 C10.86,0.98 14,4.12 14,7.98 C14,11.84 10.86,14.98 7,14.98 C3.14,14.98 0,11.86 0,7.98 C0,4.1 3.14,0.98 7,0.98 L7,0.98 Z" id="Shape"></path></g></g></svg>'},366:function(e,t){e.exports='<svg viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>globe</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="globe" fill="#000000"><path d="M7,1 C3.14,1 0,4.14 0,8 C0,11.86 3.14,15 7,15 C7.48,15 7.94,14.95 8.38,14.86 C8.21,14.78 8.18,14.13 8.36,13.77 C8.55,13.36 9.17,12.32 8.56,11.97 C7.95,11.62 8.12,11.47 7.75,11.06 C7.38,10.65 7.53,10.59 7.5,10.48 C7.42,10.14 7.86,9.59 7.89,9.54 C7.91,9.48 7.91,9.27 7.89,9.21 C7.89,9.13 7.62,8.99 7.55,8.98 C7.49,8.98 7.44,9.09 7.35,9.11 C7.26,9.13 6.85,8.86 6.76,8.78 C6.67,8.7 6.62,8.55 6.49,8.44 C6.36,8.31 6.35,8.41 6.16,8.33 C5.97,8.25 5.36,8.02 4.88,7.85 C4.4,7.66 4.36,7.38 4.36,7.19 C4.34,6.99 4.06,6.72 3.94,6.52 C3.8,6.32 3.78,6.05 3.74,6.11 C3.7,6.17 3.99,6.89 3.94,6.92 C3.89,6.94 3.78,6.72 3.64,6.54 C3.5,6.35 3.78,6.45 3.34,5.59 C2.9,4.73 3.48,4.29 3.51,3.84 C3.54,3.39 3.89,4.01 3.7,3.71 C3.51,3.41 3.7,2.82 3.56,2.6 C3.43,2.38 2.68,2.85 2.68,2.85 C2.7,2.63 3.37,2.27 3.84,1.93 C4.31,1.59 4.62,1.87 5,1.98 C5.39,2.11 5.41,2.07 5.28,1.93 C5.15,1.8 5.34,1.76 5.64,1.8 C5.92,1.85 6.02,2.21 6.47,2.16 C6.94,2.13 6.52,2.25 6.58,2.38 C6.64,2.51 6.52,2.49 6.2,2.68 C5.9,2.88 6.22,2.9 6.75,3.29 C7.28,3.68 7.13,3.04 7.06,2.74 C6.99,2.44 7.45,2.68 7.45,2.68 C7.78,2.9 7.72,2.7 7.95,2.76 C8.18,2.82 8.86,3.4 8.86,3.4 C8.03,3.84 8.55,3.88 8.69,3.99 C8.83,4.1 8.41,4.29 8.41,4.29 C8.24,4.12 8.22,4.31 8.11,4.37 C8,4.43 8.09,4.59 8.09,4.59 C7.53,4.68 7.65,5.28 7.67,5.42 C7.67,5.56 7.29,5.78 7.2,6 C7.11,6.2 7.45,6.64 7.26,6.66 C7.07,6.69 6.92,6 5.95,6.25 C5.65,6.33 5.01,6.66 5.36,7.33 C5.72,8.02 6.28,7.14 6.47,7.24 C6.66,7.34 6.41,7.77 6.45,7.79 C6.49,7.81 6.98,7.81 7.01,8.4 C7.04,8.99 7.78,8.93 7.93,8.95 C8.1,8.95 8.63,8.51 8.7,8.5 C8.76,8.47 9.08,8.22 9.73,8.59 C10.39,8.95 10.71,8.9 10.93,9.06 C11.15,9.22 11.01,9.53 11.21,9.64 C11.41,9.75 12.27,9.61 12.49,9.95 C12.71,10.29 11.61,12.04 11.27,12.23 C10.93,12.42 10.79,12.87 10.43,13.15 C10.07,13.43 9.62,13.79 9.16,14.06 C8.75,14.29 8.69,14.72 8.5,14.86 C11.64,14.16 13.98,11.36 13.98,8.02 C13.98,4.16 10.84,1.02 6.98,1.02 L7,1 Z M8.64,7.56 C8.55,7.59 8.36,7.78 7.86,7.48 C7.38,7.18 7.05,7.25 7,7.2 C7,7.2 6.95,7.09 7.17,7.06 C7.61,7.01 8.15,7.47 8.28,7.47 C8.41,7.47 8.47,7.34 8.69,7.42 C8.91,7.5 8.74,7.55 8.64,7.56 L8.64,7.56 Z M6.34,1.7 C6.29,1.67 6.37,1.62 6.43,1.56 C6.46,1.53 6.45,1.45 6.48,1.42 C6.59,1.31 7.09,1.17 7,1.45 C6.89,1.72 6.42,1.75 6.34,1.7 L6.34,1.7 Z M7.57,2.59 C7.38,2.57 6.99,2.54 7.05,2.45 C7.35,2.17 6.96,2.07 6.71,2.07 C6.46,2.05 6.37,1.91 6.49,1.88 C6.61,1.85 7.1,1.9 7.19,1.96 C7.27,2.02 7.71,2.21 7.74,2.34 C7.76,2.47 7.74,2.59 7.57,2.59 L7.57,2.59 Z M9.04,2.54 C8.9,2.63 8.21,2.13 8.09,2.02 C7.53,1.54 7.2,1.71 7.09,1.61 C6.98,1.51 7.01,1.42 7.2,1.27 C7.39,1.12 7.89,1.33 8.2,1.36 C8.5,1.39 8.86,1.63 8.86,1.91 C8.88,2.16 9.19,2.41 9.05,2.54 L9.04,2.54 Z" id="Shape"></path></g></g></svg>'},367:function(e,t){e.exports='<svg viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>code</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="code" fill="#000000"><path d="M9.5,3 L8,4.5 L11.5,8 L8,11.5 L9.5,13 L14,8 L9.5,3 L9.5,3 Z M4.5,3 L0,8 L4.5,13 L6,11.5 L2.5,8 L6,4.5 L4.5,3 L4.5,3 Z" id="Shape"></path></g></g></svg>'},368:function(e,t){e.exports='<svg viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>browser</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="browser" fill="#000000"><path d="M5,3 L6,3 L6,4 L5,4 L5,3 L5,3 Z M3,3 L4,3 L4,4 L3,4 L3,3 L3,3 Z M1,3 L2,3 L2,4 L1,4 L1,3 L1,3 Z M13,13 L1,13 L1,5 L13,5 L13,13 L13,13 Z M13,4 L7,4 L7,3 L13,3 L13,4 L13,4 Z M14,3 C14,2.45 13.55,2 13,2 L1,2 C0.45,2 0,2.45 0,3 L0,13 C0,13.55 0.45,14 1,14 L13,14 C13.55,14 14,13.55 14,13 L14,3 L14,3 Z" id="Shape"></path></g></g></svg>'},369:function(e,t){e.exports='<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>book</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="book" fill="#000000"><path d="M3,5 L7,5 L7,6 L3,6 L3,5 L3,5 Z M3,8 L7,8 L7,7 L3,7 L3,8 L3,8 Z M3,10 L7,10 L7,9 L3,9 L3,10 L3,10 Z M14,5 L10,5 L10,6 L14,6 L14,5 L14,5 Z M14,7 L10,7 L10,8 L14,8 L14,7 L14,7 Z M14,9 L10,9 L10,10 L14,10 L14,9 L14,9 Z M16,3 L16,12 C16,12.55 15.55,13 15,13 L9.5,13 L8.5,14 L7.5,13 L2,13 C1.45,13 1,12.55 1,12 L1,3 C1,2.45 1.45,2 2,2 L7.5,2 L8.5,3 L9.5,2 L15,2 C15.55,2 16,2.45 16,3 L16,3 Z M8,3.5 L7.5,3 L2,3 L2,12 L8,12 L8,3.5 L8,3.5 Z M15,3 L9.5,3 L9,3.5 L9,12 L15,12 L15,3 L15,3 Z" id="Shape"></path></g></g></svg>'},370:function(e,t){e.exports='<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>beaker</title><desc>Created with Sketch.</desc><defs></defs><g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="beaker" fill="#000000"><path d="M14.3797254,14.59 L10.9997254,7 L10.9997254,3 L11.9997254,3 L11.9997254,2 L2.99972539,2 L2.99972539,3 L3.99972539,3 L3.99972539,7 L0.62972539,14.59 C0.32972539,15.25 0.81972539,16 1.53972539,16 L13.4797254,16 C14.1997254,16 14.6797254,15.25 14.3897254,14.59 L14.3797254,14.59 Z M3.74972539,10 L4.99972539,7 L4.99972539,3 L9.99972539,3 L9.99972539,7 L11.2497254,10 L3.74972539,10 L3.74972539,10 Z M7.99972539,8 L8.99972539,8 L8.99972539,9 L7.99972539,9 L7.99972539,8 L7.99972539,8 Z M6.99972539,7 L5.99972539,7 L5.99972539,6 L6.99972539,6 L6.99972539,7 L6.99972539,7 Z M6.99972539,4 L7.99972539,4 L7.99972539,5 L6.99972539,5 L6.99972539,4 L6.99972539,4 Z M6.99972539,1 L5.99972539,1 L5.99972539,0 L6.99972539,0 L6.99972539,1 L6.99972539,1 Z" id="Shape"></path></g></g></svg>'},376:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(0),a=n.n(r),s=n(64),l=n(3),c=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return i.a.createElement(s.a,{location:t,pageResources:n})};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},400:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return f});var o=n(37),i=n.n(o),r=n(0),a=n.n(r),s=n(1),l=n.n(s),c=n(294),d=(n(378),n(257)),p=n(69),u=n(262),h=d.a.div({display:"flex",paddingBottom:"2rem",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}),L=d.a.span({padding:"0 0.5rem","@media all and (max-width: 400px)":{padding:"0 0.25rem"}}),g=d.a.h3({margin:"0 20px 0 0",paddingBottom:0,"& a":{boxShadow:"none",textDecoration:"none",color:"inherit",":hover":{textDecoration:"none"}}}),w=d.a.div({color:"#999999"}),m=Object(p.css)({color:"#999999",fontSize:"16px",fontFamily:u.b,":hover":{color:"#F1684E"}}),f=function(t){function n(){return t.apply(this,arguments)||this}return i()(n,t),n.prototype.render=function(){var t=this.props.blogTitle;return e.createElement(h,null,e.createElement(g,null,e.createElement(c.a,{name:"title",to:"/"},t)),e.createElement(w,null,e.createElement(c.a,{className:m,to:"/archive/"},"Blog"),e.createElement(L,null),e.createElement(c.a,{className:m,to:"/subscribe/"},"Subscribe"),e.createElement(L,null),e.createElement(c.a,{className:m,to:"/speaking/"},"Speaking"),e.createElement(L,null),e.createElement("a",{className:m,href:"http://twitter.com/ben336"},"Twitter"),e.createElement(L,null),e.createElement(c.a,{className:m,to:"/about/"},"About")))},n}(l.a.Component);f.propTypes={blogTitle:a.a.string.isRequired}}).call(this,n(117))}}]);
//# sourceMappingURL=0-cabc4a834468d3736f2b.js.map