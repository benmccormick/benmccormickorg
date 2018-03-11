webpackJsonp([43069659570870],{622:function(n,a){n.exports={data:{markdownRemark:{html:'<p>When I started writing Javascript, I encountered a lot of stuff that was just plain weird.  Stuff didn’t act the way I expected, syntax seemed misleading, and some behavior just seemed completely wrong.  I have a better understanding now and have come to appreciate Javascript for the quirky but stable language that it is once you know the rules.  But just for fun, here are some examples of assumptions that its easy to make when looking at Javascript for the first time.  All of the following statements are wrong (at least in some cases).  See if you know why.  And feel free to contribute more in the comments!</p>\n<h3>Equality Problems</h3>\n<ul>\n<li><code>0.1+0.2 === .3</code> is true <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup></li>\n<li><code>10000000000000001+20000000000000000 === 300000000000000001</code> is true <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup></li>\n<li><code>x === x</code> is true for all values of x <sup id="fnref-3"><a href="#fn-3" class="footnote-ref">3</a></sup></li>\n<li><code>"1.0e0" == {valueOf: function(){ return true;}};</code> is false <sup id="fnref-4"><a href="#fn-4" class="footnote-ref">4</a></sup></li>\n<li>if <code>x==y</code> and <code>x==z</code> then <code>z==y</code> <sup id="fnref-5"><a href="#fn-5" class="footnote-ref">5</a></sup></li>\n<li><code>parseInt(\'016\') === 16</code> is true. <sup id="fnref-6"><a href="#fn-6" class="footnote-ref">6</a></sup></li>\n</ul>\n<h3>Environment Concerns</h3>\n<ul>\n<li><code>window</code> will always be available as a global variable <sup id="fnref-7"><a href="#fn-7" class="footnote-ref">7</a></sup></li>\n<li>Javascript will always be enabled on your web page <sup id="fnref-8"><a href="#fn-8" class="footnote-ref">8</a></sup></li>\n<li>If it works in firebug it will work in the browser <sup id="fnref-9"><a href="#fn-9" class="footnote-ref">9</a></sup></li>\n</ul>\n<h3>Code Structure</h3>\n<ul>\n<li>You don’t need to add semicolons in javascript, they’re inserted automatically <sup id="fnref-10"><a href="#fn-10" class="footnote-ref">10</a></sup></li>\n<li>I always add semicolons, so I don’t need to know about how they’re inserted <sup id="fnref-11"><a href="#fn-11" class="footnote-ref">11</a></sup></li>\n<li>The var keyword is unnecessary, variables are created just by referencing them. <sup id="fnref-12"><a href="#fn-12" class="footnote-ref">12</a></sup></li>\n<li><code>return eval("x")</code> is the same as <code>var a = eval; return a("x");</code> <sup id="fnref-13"><a href="#fn-13" class="footnote-ref">13</a></sup></li>\n<li>Functions are the only thing in Javascript that restrict scope.  <sup id="fnref-14"><a href="#fn-14" class="footnote-ref">14</a></sup></li>\n</ul>\n<h3>Function Issues</h3>\n<ul>\n<li>I will always know what <code>this</code> is when the function is run <sup id="fnref-15"><a href="#fn-15" class="footnote-ref">15</a></sup></li>\n<li>You can get the last argument of the function using <code>arguments.pop()</code> <sup id="fnref-16"><a href="#fn-16" class="footnote-ref">16</a></sup></li>\n<li>The following will generate different names and alerts for each link: <sup id="fnref-17"><a href="#fn-17" class="footnote-ref">17</a></sup></li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addLinks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> link<span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    link<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"Link "</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>\n    link<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>The following function will return 1: <sup id="fnref-18"><a href="#fn-18" class="footnote-ref">18</a></sup></li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ul>\n<li>The if statement code can be removed here with no side effects: <sup id="fnref-19"><a href="#fn-19" class="footnote-ref">19</a></sup></li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">testf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  x<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> x<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Explanations here:</h4>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Actually comes to 0.30000000000000004 See <a href="http://stackoverflow.com/questions/588004/is-javascripts-floating-point-math-broken">here</a></p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n<li id="fn-2">\n<p>Loses the trailing 1 due to limits of <a href="http://stackoverflow.com/questions/588004/is-javascripts-floating-point-math-broken">floating point numbers</a></p>\n<a href="#fnref-2" class="footnote-backref">↩</a>\n</li>\n<li id="fn-3">\n<p>It turns out that <code>NaN === NaN</code> is false</p>\n<a href="#fnref-3" class="footnote-backref">↩</a>\n</li>\n<li id="fn-4">\n<p>Both values get cast to 1 by the <a href="http://stackoverflow.com/questions/359494/javascript-vs-does-it-matter-which-equal-operator-i-use">== operator</a></p>\n<a href="#fnref-4" class="footnote-backref">↩</a>\n</li>\n<li id="fn-5">\n<p>” == ‘0’ is false, 0==” is true, as is 0 ==‘0’</p>\n<a href="#fnref-5" class="footnote-backref">↩</a>\n</li>\n<li id="fn-6">\n<p>Prior to ECMAScript 5, strings with leading 0s were interpreted as Octal Notation.  This is resolved in newer browsers, but IE8 and other older browsers still show this behavior.</p>\n<a href="#fnref-6" class="footnote-backref">↩</a>\n</li>\n<li id="fn-7">\n<p>Window is a browser construct.  It may not be available in all JS environments (for instance, it is not available in Node.js)  Unless you know exactly where your code will be run, be careful</p>\n<a href="#fnref-7" class="footnote-backref">↩</a>\n</li>\n<li id="fn-8">\n<p>Especially in government situations, security conscious users may disable javascript.  Even if the user is able to enable JS, it may be disabled by default.  You can prepare your site for this.</p>\n<a href="#fnref-8" class="footnote-backref">↩</a>\n</li>\n<li id="fn-9">\n<p>This is not always accurate.  Firebug executes in eval context, <a href="http://perfectionkills.com/understanding-delete/">and that may lead to strange behavior </a>.</p>\n<a href="#fnref-9" class="footnote-backref">↩</a>\n</li>\n<li id="fn-10">\n<p>There are some cases when a JS parser may unexpectedly concatenate 2 lines you didn’t intend.  This is particularly an issue when the next line begins with an arithmetic operator or a <code>(</code>, as is the case for immediately invoked function expressions.  You can see an example with <a href="http://jsfiddle.net/2XSCk/">this fiddle</a></p>\n<a href="#fnref-10" class="footnote-backref">↩</a>\n</li>\n<li id="fn-11">\n<p>You can still be burned by automatic semicolon insertion even if you don’t want to take advantage of it.  The classic example is that Javascript will automatically insert a semicolon after <code>return</code> if you put the value to be returned on a new line, something that may happen often if you’re returning a new object and like to start your curly braces on a new line.</p>\n<a href="#fnref-11" class="footnote-backref">↩</a>\n</li>\n<li id="fn-12">\n<p>This is more of a beginner assumption.  Undeclared variables are automatically set as global variables and can cause plenty of problems if you don’t understand this.</p>\n<a href="#fnref-12" class="footnote-backref">↩</a>\n</li>\n<li id="fn-13">\n<p>Strangely, Javascript differentiates between direct calls to eval and indirect calls. You can read more on this <a href="http://stackoverflow.com/questions/9107240/1-evalthis-vs-evalthis-in-javascript">StackOverflow Question</a></p>\n<a href="#fnref-13" class="footnote-backref">↩</a>\n</li>\n<li id="fn-14">\n<p>This is admittedly an edge case, but catch statements of try…catch blocks also restrict scope, and the <code>with</code> statement also modifies the scope, in a different way.  <code>with</code> is not recommended</p>\n<a href="#fnref-14" class="footnote-backref">↩</a>\n</li>\n<li id="fn-15">\n<p>Even methods of an object can be called by another object with Javascript’s call and apply functions.  The only way to guarantee that the correct value of this is used is to use <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind">Javascript’s bind function</a></p>\n<a href="#fnref-15" class="footnote-backref">↩</a>\n</li>\n<li id="fn-16">\n<p><code>arguments</code> is not a real array.  It is array-like, in that it has a length value, and has integer properties that it accepts.  But you can’t run normal array arguments on it without converting it to an Array object.</p>\n<a href="#fnref-16" class="footnote-backref">↩</a>\n</li>\n<li id="fn-17">\n<p>This is the classic example of improper closure behavior.  I got this example from <a href="http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/">this article</a>, where you can read more.</p>\n<a href="#fnref-17" class="footnote-backref">↩</a>\n</li>\n<li id="fn-18">\n<p>Function declarations are hoisted to the top of the function.  Therefore both versions of f are defined, and the second one overrules the first, before f is called and return</p>\n<a href="#fnref-18" class="footnote-backref">↩</a>\n</li>\n<li id="fn-19">\n<p>More variable hoisting.  In this case the var x declaration is hoisted to the top of the function, even though the assignment can never be executed.  This has the effect of making the variable local to the function rather than global, which is potentially very significant.  You can see the difference in this <a href="http://jsfiddle.net/H4bCx/">jsFiddle</a>/</p>\n<a href="#fnref-19" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{title:"Unexpected Javascript: That Doesn't Do What You Think",keywords:null,category:"javascript",date:"2013-01-15T23:30:00+00:00",path:"/2013/01/15/unexpected-javascript-that-doesnt-do-what-you-think",layout:"post",hideFooter:null},fields:{slug:"/2013/01/15/unexpected-javascript-that-doesnt-do-what-you-think"}}},pathContext:{slug:"/2013/01/15/unexpected-javascript-that-doesnt-do-what-you-think",relatedPosts:[{path:"/2013/02/23/coffeescript-is-great",data:{title:"Coffeescript Is Great",path:"/2013/02/23/coffeescript-is-great",description:null,date:"2013-02-23T23:50:00+00:00"}},{path:"/2013/01/08/explaining-javascript-closures",data:{title:"Explaining Javascript: Closures",path:"/2013/01/08/explaining-javascript-closures",description:"Diving into one of JavaScripts more confusing concepts",date:"2013-01-08T23:30:00+00:00"}},{path:"/2013/01/12/explaining-javascript-object-oriented-programming",data:{title:"Explaining Javascript: Object Oriented Programming",path:"/2013/01/12/explaining-javascript-object-oriented-programming",description:"A look at Object Oriented programming principles in JavaScript",date:"2013-01-12T03:05:00+00:00"}}]}}}});
//# sourceMappingURL=path---2013-01-15-unexpected-javascript-that-doesnt-do-what-you-think-585d2c3c3ad4b6fc11a8.js.map