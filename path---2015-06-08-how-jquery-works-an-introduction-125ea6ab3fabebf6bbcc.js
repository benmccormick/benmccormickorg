webpackJsonp([0xb9784d59aca7],{693:function(n,t){n.exports={data:{markdownRemark:{html:'<p>Every developer has had the experience of using “magic” code.  Not the “hacked into the NSA in 20 seconds” type of magic code you see in movies. This is the code created when you nervously typed an incomprehensible incantation that somebody else passed on to you, desperately hoping to receive the results you want, ignoring the sinking feeling in your stomach that you have no clue what to do if it fails.  Almost all code feels like this when you’re pushing out to learn new things.  But it doesn’t have to stay that way.</p>\n<p>The primary goal of this blog has always been to help myself understand the tools I’m using, and to share that understanding with as many people as possible.  My experience is that really understanding a library or framework requires diving into the source code and swimming around a bit. Which sounds great.  But often the real world gets in the way. Real world source code is full of “special code”.  Code that handles browser edge cases, performance optimizations that obscure meaning, indirection to allow shared solutions for common problems; all things that are completely necessary, and also likely to obscure the true structure of code.  So while reading the source is the best way to understand a library, it often helps to have some guideposts to lead you through.</p>\n<p>This post is the start of a new series diving into how jQuery (certainly a very magical library for many developers) works.  I’ll pull snippets from the source code, but also try to lay out the big picture approaches the library takes to provide functionality that combines to form by far the best-known and most used JavaScript library out there <sup id="fnref:1"><a href="#fn:1">1</a></sup>. For this introduction, the focus will be on the overall structure of the jQuery repository, how the code is laid out for development purposes, how it’s built into a single file for production use, and a quick look at the core jQuery object code.  Future posts will cover how different features of the libary work, including deep dives into selectors, ajax, animation, and events.</p>\n<h3>So where to start?</h3>\n<p>When you look at the <a href="https://github.com/jquery/jquery">jQuery Github repo</a>, one of the first things you’ll probably notice is that the source isn’t developed as a single file the way it is distributed.  Instead it’s split up into many files separated by functionality.  That makes it easier to find specific functions when you know what you’re looking for, but harder to know where to start when trying to understand the big picture.  If you’re new to the library, it could be overwhelming.</p>\n<p>Fortunately it’s not that hard to get the lay of the land.  jQuery is broken into modules using the AMD format, and built using requireJS.  So each file lists its dependencies, and it’s easy enough to trace back what code is referenced where. So we can start by looking at <code>src/jquery.js</code>, which serves simply as a base file to require all of the other dependencies, then make the jQuery namespace available globally, both as <code>jQuery</code> and the famous <code>$</code>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/jquery_js-a23874d49348766fa0888467beb9d956-e4fe7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 124.84177215189874%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAIAAAC+dZmEAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC40lEQVQ4y41UCXLaQBD0UxwfIAntqT0lEEhgbkNIyo7t/z8krV0gPnBVpihKK21v98z07FUzVOtZaZRIs2wQIsuyJEm892075UIQQm5ubn58jOvr69vb26uHiX8+rLQxeZ6TY1AhxLiZtm3jnSaUZANCL8UVGfQLQfr9Pk66D9Hr9ZQqGOPeyKeN381d5YrLYMAYo1VVcc57IfCmKLCbeSN2D/Zp4/Zzh6/fgGlurYPsM1hKCbBVfNXqx5mZN5aC4RK4xyiRUtzd3Z3BSimASyPediXIhx5ZsO+YSV3XqHOvdx/BOoCdFru5WTZm6GQhOCGXwJQM0Bi0KJJ3YK072Zrv5/awdOuZLZDIV3ASwNWwcs5hjWIDHJ5ZacXzxv1eOZBrJdCwT+THgtX1CGxpmr7PGczrqd7M9GFhZ2NTOYnm4f0n2TmQKAmeI9haG3P+s/WLxkrBjELbRSGR+TswdkOLlAUsGR1yBkM2+rSZ2kWjJ1XRjhT+xyVqx8kJfE9JAp1gjniAjTEAg23d6vlEoVUwCfiFYJyzc9s6MKOJMXC3RrcAxhGxYND5+liiYJOhEpx99Xdgpin8mKbZ0SRJogMzct5MzXaq9wuLsbvQqsgsCxlLjQCzPcn+ubC/lnb74Ajlg27u6PtudWDOUoOjiwKT3OWMYf7XZ//66FAzmKyyaJVQkpNPslWIOFid7OAwMC8bvWpNaWXt5biUOEJjgD/KTrEbF8DJJN01EnJmL1v3srUQjwpng3hffJDdozQpgubo7S5naxkX3pv9erRbVG+HpvQ67O+gx+sGYBw5rNRqtRiPxzwE3iiMFc7TlimvbDmqJziu+4QfZedtV/0Eo5+XZQlj4BX4IR59hhdLXljnVVU3bTuqKiG1GTVaqHpUN02Dw4M98072YJBDdjQJWoX6x6sTKuPNGOR2zcpDYBEKhlaBlnHA4E1UG8U7mRB/LAY9Lul5efQ2cgRAaxNni/5f/AXYFh63Rr0uuwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="jquery_js.png"\n        title=""\n        src="/static/jquery_js-a23874d49348766fa0888467beb9d956-d766e.png"\n        srcset="/static/jquery_js-a23874d49348766fa0888467beb9d956-a6b6e.png 143w,\n/static/jquery_js-a23874d49348766fa0888467beb9d956-8e488.png 285w,\n/static/jquery_js-a23874d49348766fa0888467beb9d956-d766e.png 570w,\n/static/jquery_js-a23874d49348766fa0888467beb9d956-13239.png 855w,\n/static/jquery_js-a23874d49348766fa0888467beb9d956-cab6d.png 1140w,\n/static/jquery_js-a23874d49348766fa0888467beb9d956-e4fe7.png 1264w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>From that file we can see the layout of the library.  The core file is loaded and attached to the window, and all of the other “feature files” are also listed as dependencies to make sure they load.  Each of those files lists <code>core.js</code> as a dependency, so it is loaded first and creates the main jQuery namespace, which other dependencies then edit as needed.  If you’re interested in the process of how the package is built, you can take a read through <a href="https://github.com/jquery/jquery/blob/master/build/tasks/build.js">build/tasks/build.js</a>, where the dependencies are built using requirejs <sup id="fnref:2"><a href="#fn:2">2</a></sup>.</p>\n<h3>A look at core.js</h3>\n<p>We can see from jquery.js that <a href="https://github.com/jquery/jquery/blob/master/src/core.js">core.js</a> is an important file.  It exports the main jQuery namespace, and if we look around we’ll see that it is required by about half of the files in the source directory as a dependency.  So what does it do?  core.js is responsible for defining the jQuery namespace, as well as the prototype for jQuery objects.  This is a great place to start before taking a more detailed look into the library’s features, so lets take a look.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n\t<span class="token string">"./var/arr"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/document"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/slice"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/concat"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/push"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/indexOf"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/class2type"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/toString"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/hasOwn"</span><span class="token punctuation">,</span>\n\t<span class="token string">"./var/support"</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span> arr<span class="token punctuation">,</span> document<span class="token punctuation">,</span> slice<span class="token punctuation">,</span> concat<span class="token punctuation">,</span> push<span class="token punctuation">,</span> indexOf<span class="token punctuation">,</span> class2type<span class="token punctuation">,</span> toString<span class="token punctuation">,</span> hasOwn<span class="token punctuation">,</span> support <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n<span class="token keyword">var</span>\n\tversion <span class="token operator">=</span> <span class="token string">"@VERSION"</span><span class="token punctuation">,</span>\n\n\t<span class="token comment">// Define a local copy of jQuery</span>\n\t<span class="token function-variable function">jQuery</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> selector<span class="token punctuation">,</span> context <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// The jQuery object is actually just the init constructor \'enhanced\'</span>\n\t\t<span class="token comment">// Need init if jQuery is called (just allow error to be thrown if not included)</span>\n\t\t<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">jQuery<span class="token punctuation">.</span>fn<span class="token punctuation">.</span>init</span><span class="token punctuation">(</span> selector<span class="token punctuation">,</span> context <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>There’s a lot going on in the first 20 or so lines.  First we see a pattern that will repeat in future files.  jQuery uses a lot of small utility functions throughout its code.  Rather than attaching those to a single object, each one gets its own file in the <code>var</code> directory, and then is imported as a dependency as needed.  These modules are typically quite small and often trivial.  For instance the document module that is pulled in from <code>var/document</code> consists in its entirety of the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> window<span class="token punctuation">.</span>document<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is obviously a small shortcut, but it allows for consistent use of a pattern across the library. You’ll see small utility modules like this loaded in every significant file throughout the source code.</p>\n<p>After the imports, this file sets the version (the @VERSION annotation is replaced with the version number as part of the build process), and then creates the base jQuery function.  That base function proxies out to the <code>init</code> function if it is available, but more importantly serves as a namespace for the rest of the library.  All future functionality gets extended off of this object or its prototype.  After setting up a few constants, we dive right into that:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>jQuery.fn = jQuery.prototype = {\n\t// The current version of jQuery being used\n\tjquery: version,\n\n\tconstructor: jQuery,\n\n\t// The default length of a jQuery object is 0\n\tlength: 0,\n\n\ttoArray: function() {\n\t\treturn slice.call( this );\n\t},\n\n\t// Get the Nth element in the matched element set OR\n\t// Get the whole matched element set as a clean array\n\tget: function( num ) {\n\t\treturn num != null ?\n\n\t\t\t// Return just the one element from the set\n\t\t\t( num < 0 ? this[ num + this.length ] : this[ num ] ) :\n\n\t\t\t// Return all the elements in a clean array\n\t\t\tslice.call( this );\n\t},\n\n\t// Take an array of elements and push it onto the stack\n\t// (returning the new matched element set)\n\tpushStack: function( elems ) {\n\n\t\t// Build a new jQuery matched element set\n\t\tvar ret = jQuery.merge( this.constructor(), elems );\n\n\t\t// Add the old object onto the stack (as a reference)\n\t\tret.prevObject = this;\n\n\t\t// Return the newly-formed element set\n\t\treturn ret;\n\t},\n\n\t// Execute a callback for every element in the matched set.\n\teach: function( callback ) {\n\t\treturn jQuery.each( this, callback );\n\t},\n\n\tmap: function( callback ) {\n\t\treturn this.pushStack( jQuery.map(this, function( elem, i ) {\n\t\t\treturn callback.call( elem, i, elem );\n\t\t}));\n\t},\n\n\tslice: function() {\n\t\treturn this.pushStack( slice.apply( this, arguments ) );\n\t},\n\n\tfirst: function() {\n\t\treturn this.eq( 0 );\n\t},\n\n\tlast: function() {\n\t\treturn this.eq( -1 );\n\t},\n\n\teq: function( i ) {\n\t\tvar len = this.length,\n\t\t\tj = +i + ( i < 0 ? len : 0 );\n\t\treturn this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );\n\t},\n\n\tend: function() {\n\t\treturn this.prevObject || this.constructor(null);\n\t},\n\n\t// For internal use only.\n\t// Behaves like an Array\'s method, not like a jQuery method.\n\tpush: push,\n\tsort: arr.sort,\n\tsplice: arr.splice\n};</code></pre>\n      </div>\n<p>Here the code sets up the jQuery prototype, which is also made available as <code>jQuery.fn</code>.  jQuery objects, what you get when you select a set of elements with jQuery, have access to all of the methods defined on this prototype.  <code>jQuery.fn</code> is also the extension point for jQuery plugins, so that custom functions are available to jQuery objects.  Most of the functions built here are pretty basic ones that mimic built in array functions for jQuery objects.</p>\n<h3>A note about jQuery objects</h3>\n<p>I’ve glossed over jQuery objects twice now, but we’ve seen enough already to get a deeper understanding of what they are.  jQuery objects are the objects created when the jQuery init function is used as a constructor to create a new object <sup id="fnref:3"><a href="#fn:3">3</a></sup>.  That sounds fancy, but in reality that’s what is happening every time you make a simple jQuery call like <code>$(\'#foo\')</code> or <code>$(\'div\')</code>.  The jQuery namespace function is being called and returns a new object with <code>jQuery.init</code> as the constructor.  Since <code>init</code> shares a prototype with the namespace function <sup id="fnref:4"><a href="#fn:4">4</a></sup>, these objects all have access to <code>jQuery.prototype</code>.  The second post in this series will talk more about how the init function parses the various inputs that you can pass to the namespace function, but for now it’s best to focus on understanding that the namespace function and jQuery.fn are not magic, but are just a wrapper and alias for portions of a fairly normal prototypical inheritance example in JavaScript.</p>\n<h3>Extend</h3>\n<p>After the base functions get added to the prototype, a special function is created and added to both the prototype and the namespace function directly.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>jQuery<span class="token punctuation">.</span>extend <span class="token operator">=</span> jQuery<span class="token punctuation">.</span>fn<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> options<span class="token punctuation">,</span> name<span class="token punctuation">,</span> src<span class="token punctuation">,</span> copy<span class="token punctuation">,</span> copyIsArray<span class="token punctuation">,</span> clone<span class="token punctuation">,</span>\n\t\ttarget <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\ti <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\tlength <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n\t\tdeep <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Handle a deep copy situation</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">typeof</span> target <span class="token operator">===</span> <span class="token string">"boolean"</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tdeep <span class="token operator">=</span> target<span class="token punctuation">;</span>\n\n\t\t<span class="token comment">// Skip the boolean and the target</span>\n\t\ttarget <span class="token operator">=</span> arguments<span class="token punctuation">[</span> i <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t\ti<span class="token operator">++</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// Handle case when target is a string or something (possible in deep copy)</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">"object"</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>jQuery<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\ttarget <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// Extend jQuery itself if only one argument is passed</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span> i <span class="token operator">===</span> length <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\ttarget <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\t\ti<span class="token operator">--</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// Only deal with non-null/undefined values</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>options <span class="token operator">=</span> arguments<span class="token punctuation">[</span> i <span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// Extend the base object</span>\n\t\t\t<span class="token keyword">for</span> <span class="token punctuation">(</span> name <span class="token keyword">in</span> options <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tsrc <span class="token operator">=</span> target<span class="token punctuation">[</span> name <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\t\t\t\tcopy <span class="token operator">=</span> options<span class="token punctuation">[</span> name <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n\t\t\t\t<span class="token comment">// Prevent never-ending loop</span>\n\t\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span> target <span class="token operator">===</span> copy <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token keyword">continue</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\n\t\t\t\t<span class="token comment">// Recurse if we\'re merging plain objects or arrays</span>\n\t\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span> deep <span class="token operator">&amp;&amp;</span> copy <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span> jQuery<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span> <span class="token operator">||</span>\n\t\t\t\t\t<span class="token punctuation">(</span>copyIsArray <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\t\t\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span> copyIsArray <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\tcopyIsArray <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\t\t\t\t\t\tclone <span class="token operator">=</span> src <span class="token operator">&amp;&amp;</span> jQuery<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token operator">?</span> src <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n\t\t\t\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\tclone <span class="token operator">=</span> src <span class="token operator">&amp;&amp;</span> jQuery<span class="token punctuation">.</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token operator">?</span> src <span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token punctuation">}</span>\n\n\t\t\t\t\t<span class="token comment">// Never move original objects, clone them</span>\n\t\t\t\t\ttarget<span class="token punctuation">[</span> name <span class="token punctuation">]</span> <span class="token operator">=</span> jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span> deep<span class="token punctuation">,</span> clone<span class="token punctuation">,</span> copy <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\t\t\t<span class="token comment">// Don\'t bring in undefined values</span>\n\t\t\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span> copy <span class="token operator">!==</span> undefined <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t\ttarget<span class="token punctuation">[</span> name <span class="token punctuation">]</span> <span class="token operator">=</span> copy<span class="token punctuation">;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token comment">// Return the modified object</span>\n\t<span class="token keyword">return</span> target<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code>$.extend</code> is jQuery’s way of merging properties from one object into another.  It’s also a very handy shortcut for cloning an object (<code>var clone = $.extend({},obj)</code>).  We’ll see an example usage shortly, but since it’s a common function, it’s worth digging into how it works for a second.</p>\n<p>Looking at the code above, we can see that extend takes a variable number of arguments, the first of which can optionally be a boolean telling the function to “deep copy”.  If only a single object is passed, the function acts as if the jQuery prototype was passed as the first object, and targets that, otherwise it targets the first non-boolean argument.</p>\n<p><code>extend</code> then loops over each argument after the target and for each one goes over each of its keys.  For each object in order, properties are copied from the arguments to the target object.  If deep copy is set, properties that are objects are merged by calling <code>extend</code> recursively.  Otherwise, existing properties are overwritten.  This continues left to right till all arguments have been merged.</p>\n<p>The source code helpfully gives us an immediate example of how <code>extend</code> can be useful.  jQuery makes several properties and helpful functions available directly off of the <code>$</code> namespace.  Several of them are added here using extend.  You can see how the object notation flows much better than a long series of assignments with <code>=</code> would.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>jQuery<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t<span class="token comment">// Unique for each copy of jQuery on the page</span>\n\texpando<span class="token punctuation">:</span> <span class="token string">"jQuery"</span> <span class="token operator">+</span> <span class="token punctuation">(</span> version <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span> <span class="token regex">/\\D/g</span><span class="token punctuation">,</span> <span class="token string">""</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n\t<span class="token comment">// Assume jQuery is ready without the ready module</span>\n\tisReady<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n\terror<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> msg <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span> msg <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tnoop<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tisFunction<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> jQuery<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tisArray<span class="token punctuation">:</span> Array<span class="token punctuation">.</span>isArray<span class="token punctuation">,</span>\n\n\tisWindow<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> obj <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">===</span> obj<span class="token punctuation">.</span>window<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t<span class="token comment">//... many more functions and properties here</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>After working through 2 more helper functions, the namespace object gets returned, wrapping up <code>core.js</code>.  So 2 files and ~500 lines of source code in, we already have a pretty good idea of how jQuery is structured, both in terms of using AMD modules to separate out the source, and using a namespace function and its prototype as a central object to attach functionality.</p>\n<h3>More Resources</h3>\n<ul>\n<li>It’s no longer maintained with newer versions, but a few years ago Rob Flaherty created an annotated version of jQuery 1.6’s source.  You can see that <a href="http://robflaherty.github.io/jquery-annotated-source/">here</a></li>\n<li>Along the same lines: John Resig, jQuery’s creator, recently went through his original jQuery library (a early ~1.0 version) and <a href="http://ejohn.org/blog/annotated-version-of-the-original-jquery-release/">annotated it with both code commentary and historical notes</a>. It’s a great look inside the history of the library.</li>\n</ul>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        You can see that on <a href="https://www.google.com/trends/explore#q=jQuery%2C%20backbone%2C%20Angular%2C%20Ember%2C%20React&date=1%2F2010%2065m&cmpt=q&tz=">Google Trends</a>, <a href="http://bower.io/stats/">Bower stats</a>, or <a href="https://github.com/jquery/jquery">Github stars</a>\n        </p>\n        <a href="#fnref:1" title="return to article">↩</a></p>\n    </li>\n    <li class="footnote" id="fn:2">\n        <p>\n        jQuery\'s build process is actually super intersting, as they allow custom builds that optionally exclude portions of the library.  If you get a chance make sure to look through build.js and note the function to remove requireJS boilerplate after the modules have been built.\n        </p>\n        <a href="#fnref:2" title="return to article">↩</a></p>\n    </li>\n        <li class="footnote" id="fn:3">\n            <p>\n            If you\'re unclear on how constructors and prototypes work in JavaScript, feel free to catch up with <a href="http://benmccormick.org/2013/01/12/explaining-javascript-object-oriented-programming">this post</a> I wrote on Object Oriented Programming in JavaScript a few years back.\n            </p>\n            <a href="#fnref:3" title="return to article"> ↩</a></p>\n        </li>\n            <li class="footnote" id="fn:4">\n                <p>\n                Ok so we didn\'t have quite enough information to fully understand this yet, but you can see where the init function gets its prototye <a href="https://github.com/jquery/jquery/blob/master/src/core/init.js#L115">here</a>.\n                </p>\n                <a href="#fnref:4" title="return to article"> ↩</a></p>\n            </li>\n</ol>\n</div>',
frontmatter:{title:"How jQuery Works - An Introduction",keywords:null,category:"frameworks",date:"2015-06-08T11:51:25+00:00",path:"/2015/06/08/how-jquery-works-an-introduction",layout:"post",hideFooter:null},fields:{slug:"/2015/06/08/how-jquery-works-an-introduction"}}},pathContext:{slug:"/2015/06/08/how-jquery-works-an-introduction",relatedPosts:[{path:"/2014/11/12/underscore-vs-lodash",data:{title:"Underscore vs Lo-Dash",path:"/2014/11/12/underscore-vs-lodash",description:"A comparison between Underscore and lodash",date:"2014-11-12T13:00:00+00:00"}},{path:"/marionette-explained",data:{title:"Marionette: Explained",path:"/marionette-explained",description:"A series of posts explaining Marionette.js",date:null}},{path:"/2013/02/13/simple-publish-subscribe-with-jquery",data:{title:"Simple Publish-Subscribe with jQuery",path:"/2013/02/13/simple-publish-subscribe-with-jquery",description:"Building a basic pub-sub wrapper around jQuery",date:"2013-02-13T21:00:00+00:00"}}]}}}});
//# sourceMappingURL=path---2015-06-08-how-jquery-works-an-introduction-125ea6ab3fabebf6bbcc.js.map