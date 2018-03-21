webpackJsonp([0xad8227f59e69],{627:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Javascript can be a confusing language when you start to use it.  Designed in a hurry with a functional programming heart and an object oriented skin, Javascript looks a lot like Java or C at first glance.  That expectation causes frustration though when you realize that writing Java style code means that you have no private variables, no block scope, no threads, and no abstract/classes or interfaces.  When I started writing Javascript I had only ever written in pure object oriented languages.  My javascript code was inefficient, fragile, and no fun to write.  I wanted to share some of the things I’ve learned since here, to help other people making that adjustment.</p>\n<h3>Closures</h3>\n<p>Closures are one of the key concepts to understand when you start writing Javascript.  By default, all javascript objects are global, and blocks such as for loops and if statements do not restrict scope.  Closures are Javascript’s mechanism for information hiding and controlling scope.  They also allow for some advanced functionality in an elegant way.</p>\n<h4>Laying the ground</h4>\n<p>There are a few things you need to understand about Javascript before closures make sense.</p>\n<h4>Functions are objects</h4>\n<p>Javascript uses First Class Functions, meaning that Functions are Objects in Javascript.  They can be passed to other functions, assigned properties, and be added as properties of another object.  This is very important to understand about Javascript, and a big difference between Javascript and Java/C++.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//6</span>\n    <span class="token keyword">var</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> param<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">f2</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>\n</code></pre>\n      </div>\n<h4>Functions have their own scope</h4>\n<p>Functions are effectively the only construct in Javascript that can limit scope.  Unlike other languages, code blocks don’t automatically limit scope.  So variables defined in for loops and if statements are not confined to those constructs, and Javascript doesn’t have an exact equivalent to javascript classes.  Instead functions are used to manage scope.  The key point is that from within a function you can reference variables defined outside the function, but you cannot access variables defined within a function from outside that function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// alerts 1, alerts 2</span>\n    a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//alerts 3, alerts 2</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// undefined</span>\n</code></pre>\n      </div>\n<h4>Functions can be defined inside of other functions</h4>\n<p>This naturally follows from the other two points.  Functions are just objects and can be defined anywhere.  So you can define a function inside another function, and use it as the return value of the outer function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">outer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n        <span class="token keyword">var</span> <span class="token function-variable function">inner</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> x<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> inner<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">a</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>\n</code></pre>\n      </div>\n<h4>What is a Closure?</h4>\n<p>A closure is a function defined inside of another function and returned by that function which maintains a reference to variables in the outer functions scope.  Since the inner function was created within the scope of the outer function, it can reference variables defined within the scope of the outer function.  This is best seen by example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">outer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">3</span>\n        <span class="token keyword">var</span> <span class="token function-variable function">inner</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> x<span class="token operator">*</span>y<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> inner<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> triple <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">triple</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>\n</code></pre>\n      </div>\n<p>Since the outer function scope is maintained, you can also use the variables within that class to track state for the function so that it can only be modified through the function.  This is how javascript implements private variables.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    <span class="token keyword">var</span> <span class="token function-variable function">outer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">0</span>\n        <span class="token keyword">var</span> <span class="token function-variable function">inner</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">alert</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            y<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> inner<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>\n    <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\n    <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>\n    <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>\n    <span class="token comment">//...</span>\n</code></pre>\n      </div>\n<h4>Closures in practice</h4>\n<p>Closures are one of the most commonly used idioms in javascript.  They’re used anytime a programmer wants to protect their implementation of a feature, and prevent other code from directly referencing internal variables.  Its also the key concept in the popular <a href="http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth">module pattern</a>, and many more javascript patterns.  If you are writing javascript of any complexity, or need to understand other people’s javascript code, understanding closures is essential.</p>\n<h2>Further Reading</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures">Mozilla Documentation on Closures</a></li>\n<li><a href="http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth">Ben Cherry on the Module Pattern</a></li>\n<li><a href="http://www.amazon.com/Effective-JavaScript-Specific-Software-Development/dp/0321812182">Effective Javascript</a> is a great book for understanding javascript.  I wrote a review of it <a href="http://benmccormick.org/blog/2013/01/06/book-review-effective-javascript/">here</a></li>\n</ul>',frontmatter:{title:"Explaining Javascript: Closures",keywords:null,category:"javascript",date:"2013-01-08T23:30:00+00:00",path:"/2013/01/08/explaining-javascript-closures",layout:"post",hideFooter:null},fields:{slug:"/2013/01/08/explaining-javascript-closures"}}},pathContext:{slug:"/2013/01/08/explaining-javascript-closures",relatedPosts:[{path:"/2013/02/23/coffeescript-is-great",data:{title:"Coffeescript Is Great",path:"/2013/02/23/coffeescript-is-great",description:null,date:"2013-02-23T23:50:00+00:00"}},{path:"/2013/01/08/explaining-javascript-closures",data:{title:"Explaining Javascript: Closures",path:"/2013/01/08/explaining-javascript-closures",description:"Diving into one of JavaScripts more confusing concepts",date:"2013-01-08T23:30:00+00:00"}},{path:"/2013/01/12/explaining-javascript-object-oriented-programming",data:{title:"Explaining Javascript: Object Oriented Programming",path:"/2013/01/12/explaining-javascript-object-oriented-programming",description:"A look at Object Oriented programming principles in JavaScript",date:"2013-01-12T03:05:00+00:00"}}]}}}});
//# sourceMappingURL=path---2013-01-08-explaining-javascript-closures-5406e3f467860a44c6c0.js.map