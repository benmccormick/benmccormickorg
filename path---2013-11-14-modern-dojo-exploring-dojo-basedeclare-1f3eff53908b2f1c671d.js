webpackJsonp([0x8fcc56e99d99],{644:function(n,s){n.exports={data:{markdownRemark:{html:'<p>This is part 2 of my ongoing exploration of <a href="http://dojotoolkit.org/">Dojo</a>’s important modules and concepts.  Specifically this post will be examining dojo/_base/declare, Dojo’s object oriented programming helper module.</p>\n<h2>What is dojo/_base/declare used for?</h2>\n<p>dojo/_base/declare (henceforth “declare”) is the Dojo module for dom assisting with Object Oriented Programming.  It provides a function that allows for easy “classical style” inheritance, as well as mixins.  It is fairly flexible, and there seem to be several ways to use it.  I’m going to explore those here.</p>\n<h2>How do you use declare?</h2>\n<p>Dojo’s declare function takes up to 3 arguments.  The first argument, which is optional, gives a fully qualified namespaced class name <sup id="fnref:1"><a href="#fn:1" rel="footnote">1</a></sup>.  The second argument is a string or an array specifying a class or set of classes that the new class will inherit from.  This argument can also be null.  The final argument is an object with the properties we want the new class to contain.  The full 3 argument syntax looks like the example below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//declare with a className argument</span>\n\n<span class="token comment">//pull in the declare module</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/_base/declare"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>declare<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">//we\'re going to create a class in the global myApp namespace</span>\n  <span class="token function">declare</span><span class="token punctuation">(</span><span class="token string">"myApp.examples.Messenger"</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span>\n    sendMessage<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//since our class was created globally, we can access it wherever</span>\n  <span class="token comment">//we want, by refering to the namespace property</span>\n  <span class="token keyword">var</span> messenger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">myApp<span class="token punctuation">.</span>examples<span class="token punctuation">.</span>Messenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  messenger<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This syntax works fine, but to me it seems fairly contrary to the spirit of Modern Dojo.  Rather than keeping the class definition bound in a module, it is instead pushed out as a global, using namespacing techniques rather than AMD style modules for code organization.  It seems to be solely a product of supporting legacy implementations and Dojo’s declarative syntax.  As such I’m going to spend the rest of this piece focusing on the 2 argument syntax, where the above example would look like what we have below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//declare without the className argument</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/_base/declare"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>declare<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> Messenger <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span>\n    sendMessage<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//since our class was created locally, we can access it here</span>\n  <span class="token keyword">var</span> messenger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Messenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  messenger<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//If we need access our class in other places, we can return it</span>\n  <span class="token comment">//from a module and then load it as a dependency where needed</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So what is this simple example actually doing?  declare takes the object that you pass and adds it to the prototype chain of your class.  It’s important to understand that properties on the prototype are shared between all objects based on that class.  This is perfect for functions, as they only need to be created once.  It also works well for primitive values, since if we rewrite them the values will be added to the object itself rather than the prototype.  Putting properties on the prototype can lead to unexpected behavior when dealing with arrays and more complex objects though.  So its important to understand how the prototype chain works.  For example, the code below produces unexpected output since the messages array is shared between all Messengers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/_base/declare"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>declare<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> Messenger <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    messages<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"world"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    sendMessages<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>messages<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> messenger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Messenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> messenger2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Messenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">//change the messages array on messenger</span>\n  messenger<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"extra value"</span><span class="token punctuation">)</span>\n  <span class="token comment">//and the change has populated to all instances of Messages</span>\n  messenger2<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//logs ["hello", "world", "extra value"]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Fortunately Dojo provides an easy way to get around this issue with the special constructor property.  If you define the constructor property of your object as a function, dojo treats that property as the constructor for your class and runs it when instantiating your class.  This allows you to have local properties, and only share properties that should be shared.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Constructor example</span>\n\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"dojo/_base/declare"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>declare<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">var</span> Messenger <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    constructor<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"world"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    sendMessages<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>messages<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> messenger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Messenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> messenger2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Messenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//change the messages array on messenger</span>\n  messenger<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"extra value"</span><span class="token punctuation">)</span>\n  messenger<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//logs ["hello","world","extra value"]</span>\n  <span class="token comment">//and the change has not populated to other instances of Messages</span>\n  messenger2<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//logs ["hello","world"]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Dojo also provides a special helper function to allow you to define arbitrary properties on a member of the class when an object is created.  You can use code like this to accept object arguments that you can map to properties.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//safeMixin example</span>\n\n<span class="token keyword">var</span> TestObject <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  val<span class="token punctuation">:</span><span class="token string">"default"</span><span class="token punctuation">,</span>\n  constructor<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//make the constructor arguments a mixin</span>\n    declare<span class="token punctuation">.</span><span class="token function">safeMixin</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">//then we can stick with the default value</span>\n<span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//or come up with our own</span>\n<span class="token keyword">var</span> spicyTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>val<span class="token punctuation">:</span><span class="token string">"spicy"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">alert</span><span class="token punctuation">(</span>spicyTest<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token comment">//"spicy"</span>\n</code></pre>\n      </div>\n<h4>Inheritance</h4>\n<p>declare also provides a flexible inheritance option.  In the examples above, we created a class without any inheritance by passing null as the superClass argument.  But we can also specify a class as a superclass.  For instance to create a new messenger that alerts your message instead of logging them, you could inherit the existing Messenger class like the example below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Basic Inheritance</span>\n\n<span class="token keyword">var</span> AlertMessenger <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span>Messenger<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    sendMessage<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>messages<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> alerter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertMessenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nalerter<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//alerts the message</span>\n</code></pre>\n      </div>\n<p>In this example, AlertMessenger inherits the constructor property from Messenger, but overrides the sendMessage function.  So we change the functionality in a classical OO way.</p>\n<p>One nice feature of Dojo’s OO implementation is that it is easy to make calls up the prototype change even when we are overriding functions.  So for instance if we wanted our AlertMessenger class to send an alert while still logging the message in the console, we could use <code>this.inherited</code> to make it happen.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//this.inherited Example</span>\n\n<span class="token keyword">var</span> AlertMessenger <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span>Messenger<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    sendMessage<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>messages<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">//calls up the prototype chain to Messenger\'s sendMessage function</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">inherited</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> alerter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertMessenger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nalerter<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//alerts and logs the message</span>\n</code></pre>\n      </div>\n<p>So we still have access to overriden functions if used judiciously. Also, each constructor will be executed along the prototype chain, so there is no need to use <code>this.inherited</code> in a constructor context.</p>\n<h4>Mixins</h4>\n<p>But we’re not limited to a single inheritance instance.  We can still do more.  We can also pass an array of classes to the className argument, allowing us to inherit from multiple types at once. The first argument is the base of the prototype chain, and its extended from there, with the additional class properties being mixed in.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//Multi-Inheritance Example</span>\n\n<span class="token keyword">var</span> Lion <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  head<span class="token punctuation">:</span> <span class="token string">"lion"</span><span class="token punctuation">,</span>\n  body<span class="token punctuation">:</span> <span class="token string">"lion"</span><span class="token punctuation">,</span>\n  legs<span class="token punctuation">:</span> <span class="token string">"lion"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> Bird <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  head<span class="token punctuation">:</span> <span class="token string">"bird"</span><span class="token punctuation">,</span>\n  wings<span class="token punctuation">:</span> <span class="token string">"bird"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> Human <span class="token operator">=</span> <span class="token function">declare</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  head<span class="token punctuation">:</span> <span class="token string">"human"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Sphinx is declared with 3 mixins</span>\n<span class="token comment">//lion is first, then bird, then human</span>\n<span class="token keyword">var</span> Sphinx <span class="token operator">=</span> <span class="token function">declare</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Lion<span class="token punctuation">,</span>Bird<span class="token punctuation">,</span>Human<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n  <span class="token comment">//head gets overriden by human last, wings body and legs are never overriden and stay with their first set values</span>\n\n  aboutMe<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"I have the head of a "</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">+</span>\n           <span class="token string">", the wings of a "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>wings <span class="token operator">+</span>\n           <span class="token string">", and the body of a "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> sphinx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sphinx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nsphinx<span class="token punctuation">.</span><span class="token function">aboutMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//I have the head of a human, the wings of a bird, and the body of a lion</span>\n</code></pre>\n      </div>\n<h2>When should I use dojo/_base/declare</h2>\n<p>declare seems like a great choice for creating reusable objects, and allows for either a classical inheritance style or a more flexible mixin style.  Its a bit of overkill for simple or one off objects, but for defining the structure of a complex model, it seems like a great fit.</p>\n<p>Personally I’m going to avoid the className syntax unless I find a use for it that I currently don’t see.  It seems to be a legacy option that is completely at odds with the rest of Dojo’s avoidance of global variables.  The 2 argument syntax on the other hand, seems like a great choice for creating maintainable and reusable classes.</p>\n<p>declare should be especially useful for programmers who want to implement a classical inheritance structure in JS.  It makes the syntax quick and straightforward.  The only gotcha I see is the need to be aware of how the prototype chain works under the covers so that there’s no being burned by unexpected sharing of changes.</p>\n<h3>More Resources</h3>\n<ul>\n<li><a href="http://dojotoolkit.org/documentation/tutorials/1.9/declare/">Official Dojo tutorial on dojo/_base/declare</a></li>\n<li><a href="http://dojotoolkit.org/reference-guide/1.9/dojo/_base/declare.html">Dojo docs on dojo/_base/declare</a></li>\n<li><a href="/blog/2013/01/12/javascript-explained-object-oriented-javascript/">JS Explained: Object Oriented Javascript</a></li>\n</ul>\n<h3>Other Modern Dojo Posts</h3>\n<ul>\n<li><a href="/blog/2013/11/13/modern-dojo-dojo-query/">Exploring dojo/query</a></li>\n</ul>\n<div class="footnotes"><ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        I\'m not a fan of the dojo convention of having optional arguments be first in some cases.  It seems very strange that arguments might "shift" and not line up as expected.  I can understand in this case not wanting to have a small string parameter after a potentially large object listing the class properties, but it still makes for a confusingly inconsistent API.\n        <a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n</ol></div>',frontmatter:{title:"Modern Dojo: Exploring declare",keywords:null,category:"frameworks",date:"2013-11-14T23:15:00+00:00",path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",layout:"post",hideFooter:null},fields:{slug:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare"}}},pathContext:{slug:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",relatedPosts:[{path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",data:{title:"Modern Dojo: Exploring declare",path:"/2013/11/14/modern-dojo-exploring-dojo_basedeclare",description:"A dive into the _base/declare module",date:"2013-11-14T23:15:00+00:00"}},{path:"/2013/11/13/modern-dojo-exploring-dojoquery",data:{title:"Modern Dojo: Exploring query",path:"/2013/11/13/modern-dojo-exploring-dojoquery",description:"A dive into the query module",date:"2013-11-13T23:15:00+00:00"}},{path:"/2013/05/07/revertible-observables-in-knockout",data:{title:"Revertible Observables in Knockout",path:"/2013/05/07/revertible-observables-in-knockout",description:"Building an observable with simple undo functionality",date:"2013-05-07T20:05:00+00:00"}}]}}}});
//# sourceMappingURL=path---2013-11-14-modern-dojo-exploring-dojo-basedeclare-1f3eff53908b2f1c671d.js.map