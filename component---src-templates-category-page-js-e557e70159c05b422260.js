(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{184:function(t,n,r){"use strict";r.r(n),function(t){r.d(n,"pageQuery",function(){return c});var e=r(4),o=r.n(e),u=(r(0),r(278)),i=r(205),a=r(228),f=function(n){var r=n.data,e=n.pageContext,o=n.history,f=r.allMarkdownRemark.edges,c=Object(i.b)(f);return t.createElement(a.a,{history:o},t.createElement(u.a,{pages:c,categoryKey:e.category}))};f.propTypes={route:o.a.object},n.default=f;var c="919390859"}.call(this,r(79))},195:function(t,n,r){var e=r(197),o=r(192);t.exports=function(t,n,r){return t&&t.length?(n=r||void 0===n?1:o(n),e(t,0,n<0?0:n)):[]}},196:function(t,n,r){var e=r(229),o=r(210),u=r(234),i=r(206),a=u(function(t,n){if(null==t)return[];var r=n.length;return r>1&&i(t,n[0],n[1])?n=[]:r>2&&i(n[0],n[1],n[2])&&(n=[n[0]]),o(t,e(n,1),[])});t.exports=a},197:function(t,n){t.exports=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}},198:function(t,n,r){var e=r(188),o=r(231),u=/^\s+/,i=e.parseInt;t.exports=function(t,n,r){return r||null==n?n=0:n&&(n=+n),i(o(t).replace(u,""),n||0)}},199:function(t,n,r){var e=r(191);t.exports=function(t,n){return e(n,function(n){return t[n]})}},200:function(t,n,r){var e=r(199),o=r(213);t.exports=function(t){return null==t?[]:e(t,o(t))}},201:function(t,n){t.exports=function(t,n,r){for(var e=r-1,o=t.length;++e<o;)if(t[e]===n)return e;return-1}},202:function(t,n){t.exports=function(t){return t!=t}},203:function(t,n,r){var e=r(223),o=r(202),u=r(201);t.exports=function(t,n,r){return n==n?u(t,n,r):e(t,o,r)}},204:function(t,n,r){var e=r(203),o=r(187),u=r(227),i=r(192),a=r(200),f=Math.max;t.exports=function(t,n,r,c){t=o(t)?t:a(t),r=r&&!c?i(r):0;var s=t.length;return r<0&&(r=f(s+r,0)),u(t)?r<=s&&t.indexOf(n,r)>-1:!!s&&e(t,n,r)>-1}},205:function(t,n,r){"use strict";r.d(n,"a",function(){return w}),r.d(n,"b",function(){return b}),r.d(n,"d",function(){return k}),r.d(n,"c",function(){return E});var e=r(193),o=r.n(e),u=r(204),i=r.n(u),a=r(198),f=r.n(a),c=r(196),s=r.n(c),l=r(195),d=r.n(l),p=r(224),v=r.n(p),m=function(t){return o()(t,"node.frontmatter.isDraft",!1)},g=function(t){return!i()(t.node.frontmatter.path,"/404")&&!t.node.frontmatter.dontfeature&&"post"===o()(t,"node.frontmatter.layout")},h=function(t){return o()(t,"node.fields.slug")},y=function(t){return f()(o()(t,"node.frontmatter.last30pageViews")||0)},x=function(t){return f()(o()(t,"node.frontmatter.pageViews")||0)},w=function(t,n){return void 0===n&&(n=1/0),d()(s()(t,y).reverse().filter(function(t){return!i()(t.node.frontmatter.path,"/404")&&!t.node.frontmatter.dontfeature&&!m(t)&&"post"===o()(t,"node.frontmatter.layout")}).map(function(t){return{data:t.node.frontmatter,path:t.node.fields.slug}}),n)},b=function(t,n){void 0===n&&(n=1/0);var r=function(t,n){return d()(s()(t,x).reverse().filter(g).map(h),n)}(t,10),e=function(t,n){var r=t.filter(g).filter(function(t){return y(t)>30}).filter(function(t){return y(t)!==x(t)}),e=s()(t,x),o=s()(r,y),u=s()(r,function(t){var n=function(n){return v()(n,function(n){return h(n)===h(t)})};return n(e)-n(o)});return d()(u.map(h),n)}(t,10);return d()(s()(t,function(t){return new Date(o()(t,"node.frontmatter.date"))}).reverse().filter(function(t){return"post"===o()(t,"node.frontmatter.layout")&&!m(t)&&!o()(t,"node.frontmatter.dontfeature")}).map(function(t){var n=h(t),o=t.node.frontmatter;return o.isTrending=i()(e,n),o.isPopular=i()(r,n),{data:o,path:n}}),n)},k=function(t,n){return void 0===n&&(n=1/0),d()(s()(t,function(t){return o()(t,"node.frontmatter.date")}).reverse().filter(function(t){return"weekly-links"===o()(t,"node.frontmatter.layout")}).map(function(t){return{data:t.node.frontmatter,path:t.node.fields.slug}}),n)},E=function(t,n){return void 0===n&&(n=1/0),d()(t.map(function(t){return{data:{title:t},path:"topics/"+t}}),n)}},206:function(t,n,r){var e=r(220),o=r(187),u=r(218),i=r(214);t.exports=function(t,n,r){if(!i(r))return!1;var a=typeof n;return!!("number"==a?o(r)&&u(n,r.length):"string"==a&&n in r)&&e(r[n],t)}},207:function(t,n,r){var e=r(212);t.exports=function(t,n){if(t!==n){var r=void 0!==t,o=null===t,u=t==t,i=e(t),a=void 0!==n,f=null===n,c=n==n,s=e(n);if(!f&&!s&&!i&&t>n||i&&a&&c&&!f&&!s||o&&a&&c||!r&&c||!u)return 1;if(!o&&!i&&!s&&t<n||s&&r&&u&&!o&&!i||f&&r&&u||!a&&u||!c)return-1}return 0}},208:function(t,n,r){var e=r(207);t.exports=function(t,n,r){for(var o=-1,u=t.criteria,i=n.criteria,a=u.length,f=r.length;++o<a;){var c=e(u[o],i[o]);if(c)return o>=f?c:c*("desc"==r[o]?-1:1)}return t.index-n.index}},209:function(t,n){t.exports=function(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}},210:function(t,n,r){var e=r(191),o=r(215),u=r(230),i=r(209),a=r(232),f=r(208),c=r(216);t.exports=function(t,n,r){var s=-1;n=e(n.length?n:[c],a(o));var l=u(t,function(t,r,o){return{criteria:e(n,function(n){return n(t)}),index:++s,value:t}});return i(l,function(t,n){return f(t,n,r)})}},278:function(t,n,r){"use strict";(function(t){var e=r(6),o=r.n(e),u=r(0),i=r.n(u),a=r(251),f=r.n(a),c=r(193),s=r.n(c),l=r(196),d=r.n(l),p=r(233),v=r(225),m=r(252),g=function(n){function r(){return n.apply(this,arguments)||this}return o()(r,n),r.prototype.render=function(){var n=this.props,r=n.pages,e=n.categoryKey,o=f()(m.categories,{key:e}),u=d()(r,function(t){return s()(t,"data.date")}).filter(function(t){return t.data.category===e&&"post"===s()(t,"data.layout")}).reverse(),i=o.description,a=o.title+" Articles";return t.createElement("div",null,t.createElement(p.a,{title:"benmccormick.org - "+a,keywords:"blog,articles,posts,"+a}),t.createElement(v.a,{pages:u,title:a,description:t.createElement("p",null,i),showCategory:!1}))},r}(i.a.Component);n.a=g}).call(this,r(79))}}]);
//# sourceMappingURL=component---src-templates-category-page-js-e557e70159c05b422260.js.map