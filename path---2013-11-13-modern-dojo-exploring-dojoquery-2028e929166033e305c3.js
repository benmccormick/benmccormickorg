webpackJsonp([21680019653364],{641:function(n,s){n.exports={data:{markdownRemark:{html:'<p>It appears I’m going to be spending a significant amount of time working with <a href="http://dojotoolkit.org/">the Dojo toolkit</a> for my next project at work, so I’ve spent some time over the last few days trying to familiarize myself with the library.  Its quickly become apparent that there are a few challenges with learning Dojo at the pace I wanted.  First, Dojo is built as a lightweight core with many small modules of functionality available as components.  It’s effectively completely modularized in a way that no other framework really is (though jQuery appears to be moving in that direction as well).  As such, learning it is a bit decentralized.  Second, Dojo, which has existed since 2005, made a big transition back in 2011 to move to an AMD format for managing its modular components.  This resulted in a significant change in basic syntax.  Since this change happened after jQuery’s rise (which led to a significant drop in Dojo usage), it seems many examples on the web still use the old syntax, and I haven’t seen any print resources published since the change.  As a result, the resources for learning modern Dojo seem somewhat piecemeal beyond the toolkit’s website.</p>\n<p>That being the case, I’ve decided to explore Dojo’s primary modules on a case by case basis and document what I’ve learned here.  Hopefully this can be a helpful modern reference to others who are learning.  I’m going to start by exploring dojo/query, one of the primary Dojo modules, which provides jQuery selector style functions for Dojo users.</p>\n<h2>What is dojo/query for?</h2>\n<p>dojo/query is the Dojo module for dom selection.  The core module provides basic CSS selection capability, with the ability to use CSS3 style selectors if needed.  It can be extended using other modules to provide more advanced DOM traversal and manipulation functionality, effectively matching jQuery’s feature set in that area.</p>\n<h2>How do you use dojo/query?</h2>\n<p>To use dojo/query, you first need to require the module, using an AMD style require or define call.  You can then call query (or whatever you’ve aliased it to), and pass it a CSS style selector.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Basic query example</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/query"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//select all elements with class special</span>\n    <span class="token keyword">var</span> elementList <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">".special"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//you can also add an optional second parameter to search</span>\n    <span class="token comment">//under a single DOM element,rather than the whole DOM</span>\n    <span class="token keyword">var</span> parentNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"parent"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    elementList <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">".children"</span><span class="token punctuation">,</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The query function returns a dojo/NodeList object.  This is a basic array-like wrapper object, similar to a jQuery object.  By default it contains some basic array manipulation functions, but you can also extend it with plugin modules for dom manipulation, dom traversal, and other functions.  In fact you can even write your own extensions to the object.  These extensions are loaded in as additional AMD modules. For instance, we can load dojo/NodeList-dom to extend NodeList with some basic DOM functionality</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Extending NodeList</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/query"</span><span class="token punctuation">,</span><span class="token string">"dojo/NodeList-dom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//add a btn class to all button elements</span>\n    <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In that simple example, the <code>addClass</code> method was added as an extension to the NodeList type by the NodeList-dom module.  So adding that module brought extra functionality.  Its relatively simple to add custom functionality in this way.  An example from the Dojo docs looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Dojo extension example</span>\n\n<span class="token comment">//definition (in myapp/NodeList-custom.js)</span>\n<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/_base/lang"</span><span class="token punctuation">,</span> <span class="token string">"dojo/query"</span><span class="token punctuation">,</span> <span class="token string">"dojo/NodeList-dom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>lang<span class="token punctuation">,</span> query<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  lang<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span>NodeList<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    makeRed<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">style</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">"red"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//usage (in another file)</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/query"</span><span class="token punctuation">,</span> <span class="token string">"myapp/NodeList-custom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">".greenText"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">makeRed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is great for modularizing common patterns and functionality, and is a core Dojo concept, not just a dojo/query feature.</p>\n<h2>How does dojo/query perform?</h2>\n<p>I was curious about how dojo/query performance stacked up to jQuery.  So I set up some performance tests on <a href="http://jsperf.com/">jsPerf</a> to take a look.  I compared Dojo to jQuery across a few common and simple selection and manipulation operations.  The results were informative.</p>\n<p>You can see the results here for</p>\n<ul>\n<li><a href="http://jsperf.com/dojo-query-vs-jquery-selectors">ID selection</a></li>\n<li><a href="http://jsperf.com/dojo-query-vs-jquery-selectors-for-class-search">Class selection</a></li>\n<li><a href="http://jsperf.com/dojo-query-vs-jquery-selectors-for-class-manipulation">DOM manipulation</a></li>\n</ul>\n<p>The results varied a bit from platform to platform, but a few things stood out.</p>\n<h4>When selecting on IDs, don’t use dojo/query</h4>\n<p>For the basic ID selection tests, dojo/query was blown away by almost everything. It is very very slow to handle it.  I was initially bothered by this, until I added the dojo/dom test.  dojo/dom’s byID function is the “dojo way” of selecting an element by ID.</p>\n<p>dom.byId appears to be a thin wrapper around the native API, with near native performance everywhere (and confusingly, better than native performance on IE11).  dojo/query meanwhile, lags way behind, literally 100x slower than a native query on Chrome 31.  You can still integrate with dojo/NodeList to get dojo/query’s chaining functionality</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Method chaining with search by ID</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/query"</span><span class="token punctuation">,</span><span class="token string">"dojo/dom"</span><span class="token punctuation">,</span> <span class="token string">"dojo/NodeList-dom"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span>dom<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">var</span> list <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">NodeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dom<span class="token punctuation">.</span><span class="token function">byId</span><span class="token punctuation">(</span><span class="token string">"menu"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    list<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"sidebar"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onclick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span> <span class="token punctuation">(</span><span class="token string">"this is the menu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>For simple things operations, you can’t beat native selectors</h4>\n<p>On the basic tests, the native selectors blow away the library results, with little downside.  When you’re simply trying to access an element and, for instance, change its inner HTML, native selectors will scale much better.</p>\n<p>However, the situation begins to become more complicated when more complex queries are involved.  My manipulation example is still a relatively simple example, but the trade-offs start becoming a lot more substantial very rapidly.  For the manipulation example, native code requires significantly more code.  The simplest method of doing things is not supported on IE9, and requires you to understand the distinction between an HTMLCollection and a normal Javascript array.  A solution that supports IE9 and handles other edge cases involves even more code, and performs in the same range as Dojo and jQuery.</p>\n<h4>dojo/query seems to lag behind jQuery in performance, but its in the ballpark</h4>\n<p>dojo/query was consistently outperformed by jQuery in the testing that I did.  But while the gap between native selectors and library versions is very wide, the dojo/jQuery divide seems to be on the order of a 2-4x increase in speed on basic operations.  Thats significant, but hardly damning. If selector performance is your primary criteria for choosing a library, jQuery should be your pick.  But Dojo is competitive enough here, that it doesn’t seem disqualified for use if you have other reasons for doing so.</p>\n<h2>When should I use dojo/query?</h2>\n<p>To sum it all up, it looks like the query library is a great choice for providing jQuery selector style functionality for Dojo users.  It’s small, lightweight, and allows you to load only the things you need to get the job done.  If you only are looking for this type of selector functionality, a custom built jQuery package might be a better fit. But if you’re already using Dojo, dojo/query will get the job done very well.  Just don’t use it to search on id’s.  Use dojo/dom or native selectors instead.</p>\n<h2>More Resources</h2>\n<ul>\n<li><a href="https://dojotoolkit.org/documentation/tutorials/1.9/using_query/">Official Dojo tutorial on dojo/query</a></li>\n<li><a href="http://dojotoolkit.org/reference-guide/1.9/dojo/query.html">Dojo docs on dojo/query</a></li>\n<li><a href="http://dojotoolkit.org/reference-guide/1.9/dojo/NodeList.html">Dojo docs on NodeList</a></li>\n</ul>',frontmatter:{title:"Modern Dojo: Exploring query",keywords:null,category:"frameworks",date:"2013-11-13T23:15:00+00:00",path:"/2013/11/13/modern-dojo-exploring-dojoquery",layout:"post",hideFooter:null},fields:{slug:"/2013/11/13/modern-dojo-exploring-dojoquery"}}},pathContext:{slug:"/2013/11/13/modern-dojo-exploring-dojoquery",relatedPosts:[{path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",data:{title:"Modern Dojo: Exploring declare",path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",description:"A dive into the _base/declare module",date:"2013-11-14T23:15:00+00:00"}},{path:"/2013/11/13/modern-dojo-exploring-dojoquery",data:{title:"Modern Dojo: Exploring query",path:"/2013/11/13/modern-dojo-exploring-dojoquery",description:"A dive into the query module",date:"2013-11-13T23:15:00+00:00"}},{path:"/2013/05/07/revertible-observables-in-knockout",data:{title:"Revertible Observables in Knockout",path:"/2013/05/07/revertible-observables-in-knockout",description:"Building an observable with simple undo functionality",date:"2013-05-07T20:05:00+00:00"}}]}}}});
//# sourceMappingURL=path---2013-11-13-modern-dojo-exploring-dojoquery-2028e929166033e305c3.js.map