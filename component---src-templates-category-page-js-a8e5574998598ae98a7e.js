webpackJsonp([0x737be2ef4efd],{280:function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=r(3),i=o(c),f=r(227),s=o(f),p=r(35),d=o(p),y=r(233),g=o(y),b=r(52),h=r(53),m=o(h),_=r(204),w=o(_),v=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.pages,r=e.categoryKey,o=(0,s.default)(w.default.categories,{key:r}),a=(0,g.default)(t,function(e){return(0,d.default)(e,"data.date")}).filter(function(e){return e.data.category===r&&"post"===(0,d.default)(e,"data.layout")}).reverse(),u=o.description,l=o.title,c=l+" Articles";return n.createElement("div",null,n.createElement(b.HeadContent,{title:"benmccormick.org - "+c,keywords:"blog,articles,posts,"+c}),n.createElement(m.default,{pages:a,title:c,description:n.createElement("p",null,u),showCategory:!1}))},t}(i.default.Component);t.default=v,e.exports=t.default}).call(t,r(9))},294:function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=r(6),a=n(o),u=r(3),l=(n(u),r(280)),c=n(l),i=r(74),f=function(t){var r=t.data,n=t.pathContext,o=r.allMarkdownRemark.edges,a=(0,i.getSortedPosts)(o);return e.createElement(c.default,{pages:a,categoryKey:n.category})};f.propTypes={route:a.default.object},t.default=f;t.pageQuery="** extracted graphql fragment **"}).call(t,r(9))}});
//# sourceMappingURL=component---src-templates-category-page-js-a8e5574998598ae98a7e.js.map