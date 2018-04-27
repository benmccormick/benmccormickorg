webpackJsonp([0xb9a5c4751c11],{713:function(n,s){n.exports={data:{markdownRemark:{html:'<p>One of the more frustrating things about using JavaScript in the browser is the number of different collection types that you need to deal with.  When using native APIs and 3rd party libraries, it’s easy to encounter 3 or more different types of collections, including <a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList">NodeLists</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection">HTMLCollections</a>, <a href="https://learn.jquery.com/using-jquery-core/jquery-object/">jQuery Objects</a>, and plain arrays.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span>\na instanceOf <span class="token class-name">NodeList</span> <span class="token comment">//true</span>\n\n<span class="token keyword">let</span> b <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span>\nb instanceOf <span class="token class-name">HTMLCollection</span> <span class="token comment">//true</span>\n\n<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span>\nc instanceOf <span class="token class-name">jQuery</span> <span class="token comment">// true</span>\n\n<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'button1\'</span><span class="token punctuation">,</span> <span class="token string">\'button2\'</span><span class="token punctuation">,</span> <span class="token string">\'button3\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>id <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nd instance <span class="token keyword">of</span> Array <span class="token comment">//true</span>\n</code></pre>\n      </div>\n<p>This ends up mattering in practice because not every function that is available on Array is available on NodeList, HTMLCollections, and jQuery objects.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> ids <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>el <span class="token operator">=></span> el<span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n<span class="token comment">// Uncaught TypeError: document.querySelectorAll(...).map is not a function</span>\n\nids <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>el <span class="token operator">=></span> el<span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n<span class="token comment">// Uncaught TypeError: document.getElementsByTagName(...).map is not a function</span>\n\n<span class="token keyword">let</span> numDivs <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> el<span class="token punctuation">)</span> <span class="token operator">=></span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Uncaught TypeError: $(...).reduce is not a function</span>\n</code></pre>\n      </div>\n<p>Since we can’t use native array methods on these alternate collections, we end up having to be very careful about knowing where we’ve retrieved data from, and how to convert those collections or how to work around their limitations.</p>\n<p>It’s useful to know about these distinctions, but in practice dealing with them is a pain.  One of the nice properties of <a href="https://lodash.com/docs">lodash</a> is that it abstracts over these incompatibilities.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> ids <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> el <span class="token operator">=></span> el<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [\'container\', \'left-box\', \'right-box\']</span>\n\nids <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementssByTagName</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> el <span class="token operator">=></span> el<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [\'container\', \'left-box\', \'right-box\']</span>\n\n<span class="token keyword">let</span> numDivs <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">,</span> el<span class="token punctuation">)</span> <span class="token operator">=></span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 3</span>\n</code></pre>\n      </div>\n<p>For methods that iterate over a collection lodash treats all array-like objects (essentially anything with a length property) the same and iterates over their numerical properties from 0 to length-1.  This provides a nice consistency when working with DOM APIs and removes the mental overhead from managing their inconsistencies.  </p>',frontmatter:{title:"Quick Tip: Take advantage of lodash collections",keywords:"lodash javascript collections arrays",category:"frameworks",date:"2016-06-26T21:27:55+00:00",path:"/2016/06/26/quick-tip-take-advantage-of-lodash-collections-2",layout:"post",hideFooter:null},fields:{slug:"/2016/06/26/quick-tip-take-advantage-of-lodash-collections-2"}}},pathContext:{slug:"/2016/06/26/quick-tip-take-advantage-of-lodash-collections-2",relatedPosts:[{path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",data:{title:"Modern Dojo: Exploring declare",path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",description:"A dive into the _base/declare module",date:"2013-11-14T23:15:00+00:00"}},{path:"/2013/11/13/modern-dojo-exploring-dojoquery",data:{title:"Modern Dojo: Exploring query",path:"/2013/11/13/modern-dojo-exploring-dojoquery",description:"A dive into the query module",date:"2013-11-13T23:15:00+00:00"}},{path:"/2013/05/07/revertible-observables-in-knockout",data:{title:"Revertible Observables in Knockout",path:"/2013/05/07/revertible-observables-in-knockout",description:"Building an observable with simple undo functionality",date:"2013-05-07T20:05:00+00:00"}}]}}}});
//# sourceMappingURL=path---2016-06-26-quick-tip-take-advantage-of-lodash-collections-2-2f990f47f0d34e88a654.js.map