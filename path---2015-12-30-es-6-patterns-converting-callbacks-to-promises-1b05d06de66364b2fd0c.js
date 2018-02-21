webpackJsonp([0x9d041029feb4],{685:function(n,s){n.exports={data:{markdownRemark:{html:'<div class="explanation">\nI\'ve been writing code using the new features defined in the ECMAScript 2015 version of JavaScript (<a href="http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/">more commonly known as ES6</a>) since January.  Throughout the year I\'ve seen myself start using a few new patterns that I think make my code better.  I\'m going to share them here with a few quick hitter articles.  If you missed it, I wrote about <a href="http://benmccormick.org/2015/11/30/es6-patterns-clean-higher-order-functions/">clean higher order functions</a> earlier this week.  This post focuses on working with asynchronous code in ES6.  \n</div>\n<h3>Background</h3>\n<p>One of the nicest new features of ES6 JavaScript is the standardization of Promises.  Promises are a method for managing asynchronous code that serve as an alternative to the standard callback function syntax that has been the JavaScript standard for years.  If you’re unfamiliar with them, a good example of a Promise based API is the new <code>fetch</code> api provided by browsers.  <code>fetch</code> is a replacement for the older callback based XMLHttpRequest API.  A quick example of an HTTP request with the 2 APIs provides a nice comparison of how Promises can lead to clearer code.</p>\n<p>A simple get request with XMLHttpRequest looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reqListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  <span class="token keyword">var</span> data <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">reqError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>  \n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Fetch Error :-S\'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \nrequest<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> data <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n  <span class="token comment">//do stuff with data</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>  \n\nrequest<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'There was a problem with the request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nrequest<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">\'get\'</span><span class="token punctuation">,</span> <span class="token string">\'/api/foo/bar\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \nrequest<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>whereas with fetch we get this instead</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/api/foo/bar\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//do stuff with the data</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'There was a problem with the request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>This is admittedly a slightly unfair example due to XMLHttpRequest’s clunky object oriented API, but the key take away here is that promises allow for easier visualization of a program’s flow, as well as the ability to easily chain both synchronous and asynchronous operations together into a unified API.</p>\n<p>Promises have been around for a little while in user-land.  There are a bunch of Promise libraries out there that eventually standardized on a spec called <code>Promises/A+</code>.  Promises/A+ compliant libraries include <a href="https://github.com/kriskowal/q">Q</a>, <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>, and <a href="https://github.com/tildeio/rsvp.js">rsvp</a>.  There are also many older libraries that provide Promise-like capabilities but are not completely spec compatible, most notably <a href="https://api.jquery.com/category/deferred-object/">jQuery deferreds</a>.  But with ES6 Promises are being standardized.  Happily, since the implementation uses the standard that user-land libaries have agreed upon, the Promise spec is compatible with existing implementations, and existing code bases can remove their existing libraries in favor of the browser supplied version, or have code written to use the browser version interop cleanly with their existing code.  Support for Promises now exists in the latest versions of all major browsers, but it never made it to Internet Explorer and is Edge only for Microsoft browsers.  So most developers will still want to consider using a polyfill for the time being.</p>\n<h3>Converting callback-driven code to use Promises</h3>\n<p>If you believe that Promises are worthwhile, you’ll immediately encounter a problem in today’s JavaScript world.  Many JavaScript APIs, including most standard browser APIs and older but still popular libraries like jQuery and Backbone are heavily callback driven.  Rather than mixing 2 different styles of asynchronous code, wouldn’t it be nice if we could easily convert callback-based APIs to use Promises?  It turns out that it’s not that hard.  Let’s take the simplest example possible to start.  <code>setTimeout</code> is a straightforward browser API that waits for a specified period of time and then executes a callback.  A standard use looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span>doStuff<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>A Promise-based API for this function would likely look something like this code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>doStuff<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>We can create an API like that using setTimeout.  To do that, we’ll need a function <code>timeout</code> which takes a timeout variable and returns a Promise.  </p>\n<p>You can define A+ compliant Promises using the Promise constructor, which expects a single function as an argument.  That function takes 2 arguments, a <code>resolve</code> function and a <code>reject</code> function.  The wonderful thing is that under the covers these are just callback functions that the Promise api glosses over.  </p>\n<p>Since we already have an API that can handle callbacks, the implementation of our <code>timeout</code> function is pretty simple.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We don’t use the reject callback, since setTimeout doesn’t provide any hooks for an error state. So we pass resolve as the callback to setTimeout, and that is all we need.  Now we have a great chainable setTimeout function that we could include in a Promise chain.</p>\n<p>Moving on to a more complicated example, let’s take our <code>XMLHttpRequest</code> code from above and see if we can create a simplified version of the <code>fetch</code> API using <code>XMLHttpRequest</code> under the covers.  In this case I’m going to use ES6 style arrow functions to reduce the boilerplate a bit.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> fetch <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>method<span class="token punctuation">:</span><span class="token string">\'get\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n    request<span class="token punctuation">.</span>onload <span class="token operator">=</span> resolve\n    request<span class="token punctuation">.</span>onerror <span class="token operator">=</span> reject<span class="token punctuation">;</span>\n    request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n    request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is a simplified implementation that doesn’t come close to covering all the use cases of fetch, but it provides a great example of how simple it can be to transform a callback based api to a Promise based one, without having to rewrite the existing code<sup id="fnref:1"><a href="#fn:1">1</a></sup>.   </p>\n<p>For what it’s worth, it is equally easy to convert functions in the other direction.  For instance a callback based implementation of fetch can be a one liner.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callbackFetch</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">,</span> succ<span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>succ<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>It’s useful to know that the various syntaxes for asynchronous code in JavaScript are effectively equivalent and interoperable.  When designing APIs for your code, both for public libraries with external libraries and components that you use in an application, these patterns can be useful for providing a consistent API, even if you’re using code under the covers that presents it’s asynchronous code in a different way than your API.  </p>\n<h3>More Resources</h3>\n<ul>\n<li>The free online version of Exploring ES6 by Axel Rauschmayer has a <a href="http://exploringjs.com/es6/ch_promises.html">great chapter</a> on ES6 Promises explaining the API and how they fit in with the A+ standard.</li>\n<li>There was also a <a href="http://blogs.msdn.com/b/eternalcoding/archive/2015/09/30/javascript-goes-to-asynchronous-city.aspx">great post by David Catuhe on one of the MSDN blogs</a> earlier this year highlighting how asynchronous code has evolved in JavaScript over the years, including a look at the new <code>async/await</code> patterns proposed for ES2016.</li>\n</ul>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        And even a full implementation of fetch using XMLHttpRequest is only<a href="https://github.com/github/fetch/blob/master/fetch.js"> ~300 lines</a>\n        </p>\n        <a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',frontmatter:{title:"ES6 Patterns: Converting Callbacks to Promises",keywords:null,category:"javascript",date:"2015-12-30T03:30:47+00:00",path:"/2015/12/30/es6-patterns-converting-callbacks-to-promises",layout:"post",hideFooter:null},fields:{slug:"/2015/12/30/es6-patterns-converting-callbacks-to-promises"}}},pathContext:{slug:"/2015/12/30/es6-patterns-converting-callbacks-to-promises",relatedPosts:[{path:"/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning",data:{title:"ES5, ES6, ES2016, ES.Next: What's going on with JavaScript versioning?",path:"/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning",description:"A summary of the naming conventions for the JavaScript language",date:"2015-09-14T03:11:34+00:00"}},{path:"/2015/11/30/es6-patterns-clean-higher-order-functions",data:{title:"ES6 Patterns: Clean Higher Order Functions",path:"/2015/11/30/es6-patterns-clean-higher-order-functions",description:"A quick tip for clean functional syntax in ES6",date:"2015-11-30T05:06:03+00:00"}},{path:"/2015/09/09/what-can-backbone-developers-learn-from-react",data:{title:"Lessons Backbone Developers Can Learn From React",path:"/2015/09/09/what-can-backbone-developers-learn-from-react",description:"A look at the lessons that Backbone developers can learn from React",date:"2015-09-09T11:19:43+00:00"}}]}}}});
//# sourceMappingURL=path---2015-12-30-es-6-patterns-converting-callbacks-to-promises-1b05d06de66364b2fd0c.js.map