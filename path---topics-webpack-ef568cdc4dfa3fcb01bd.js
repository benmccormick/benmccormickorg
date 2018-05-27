webpackJsonp([78777151745600],{915:function(e,a){e.exports={pathContext:{posts:[{node:{frontmatter:{readNext:null,topics:["WebAssembly","Webpack"],category:"opinion",key:"weekly-links-01-19-18",title:"Weekly Links: January 19th",description:"JavaScript Framework lifecycles, WebAssembly, and Social Media ",layout:"weekly-links",path:"/2018/01/19/weekly-links-01-19-18/",date:"2018/01/19",dontfeature:null,isDraft:null},html:'<h3>JavaScript And The Web</h3>\n<p><a href="https://stackoverflow.blog/2018/01/11/brutal-lifecycle-javascript-frameworks/">The Brutal Lifecycle of JavaScript Frameworks | Stack Overflow Blog</a> - This was an interesting analysis on how JavaScript frameworks have risen and fallen.  Among the reasons that it’s interesting is that the data appears to be a bit of a Rorschach test.  The post itself is very negative about the pace of change in the JavaScript framework world.  But I saw a lot of twitter takes like this one:</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This “new framework every 6-months” FUD is comical. The crux is centered on 4 JS frameworks released over the last decade. <br><br>4. In 10 years. <br><br>It’s great for my business, but makes me chuckle. <br><br>It’s not really moving that fast y’all. <a href="https://t.co/BiH7UK0M9V">https://t.co/BiH7UK0M9V</a></p>&mdash; Joel ⛈ (@jhooks) <a href="https://twitter.com/jhooks/status/951924735654244352?ref_src=twsrc%5Etfw">January 12, 2018</a></blockquote>\n<p>Personally I lean more toward the side that there’s nothing wrong here.  The change in frameworks has come during a large change in use cases and technology used on the web.  Think PWAs verse server-side generated sites, and the large amount of new browser APIs and JavaScript language features.  These things have naturally brought new best practices which have been encoded in frameworks.  While it is true that a jQuery based site from 2009 might be difficult to maintain through today, that has less to do with the lack of support for the technology than it does with the fundamental nature of web development.  It would be much more difficult to build and scale a web application like <a href="https://slack.com/">Slack</a> using only jQuery and other 2009 technologies.<br>\nWhich is why it was surpassed for <em>web application</em> development first by a wave of frameworks that allowed you to model domain concepts in an object oriented way and tie that to a UI (Backbone, Angular1, Knockout), and then by a second wave that allowed you to do that with more declarative component-based UIs (React, Ember, Angular2+, Vue).  Those evolutions have come to match a real need.</p>\n<p><a href="https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true/48274520#48274520">Can (a ==1 &#x26;&#x26; a== 2 &#x26;&#x26; a==3) ever evaluate to true? | Stack Overflow</a> - This was a fun little question.  I don’t think I like it as an interview question for JavaScript, since it borders on trivia, and requires in-depth knowledge of the “bad parts” of JavaScript like <code>==</code> and <code>with</code> or global variable behavior that many new developers are just taught to avoid.  But it’s definitely a fun trivia question.  And it may even be a good interview question in Python, where you can do it using more commonly accepted parts of the language.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">EqualToEverything</span><span class="token punctuation">:</span>\n  <span class="token keyword">def</span> <span class="token function">__eq__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>\na <span class="token operator">=</span> EqualToEverything<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">and</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">and</span> a <span class="token operator">==</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">#prints True</span>\n</code></pre>\n      </div>\n<p><a href="https://hacks.mozilla.org/2018/01/making-webassembly-even-faster-firefoxs-new-streaming-and-tiering-compiler/">Making WebAssembly even faster: Firefox’s new streaming and tiering compiler | Lin Clark</a> - Web Assembly + Rust is quickly moving to the top of my “I’ve got to learn more about that” list.</p>\n<p><a href="https://slack.engineering/keep-webpack-fast-a-field-guide-for-better-build-performance-f56a5995e8f1">Keep webpack Fast: A Field Guide for Better Build Performance | Slack Engineering</a> - This is a super helpful and detailed list of performance tips and tricks for Webpack builds, which unfortunately are easy to make slow and challenging to make fast for large projects.  Even after having my own fights with webpack last year, I learned a few things from this, and look forward to experimenting with them.</p>\n<h3>Tech and Business</h3>\n<p><a href="https://www.joelonsoftware.com/2018/01/12/birdcage-liners/">Birdcage Liners | Joel Spoelsky</a> - Joel’s first post in a while is a great piece on the problems with social media, as well as tech folks’ responsibility to think through the choices they’re making, including the secondary effects.  What type of future are we making?</p>\n<p><a href="https://motherboard.vice.com/en_us/article/9kng57/dogecoin-my-joke-cryptocurrency-hit-2-billion-jackson-palmer-opinion">My Joke Cryptocurrency Hit $2 Billion and Something Is Very Wrong</a> - I promise I snagged this link to post before bitcoin took a dip this week, but I don’t think it’s properly appreciated in many places just how crazy the cryptocurrency fad is becoming.  Meme-based joke currencies are being valued at billions of dollars, and there are many other similar newborn currencies with similar valuations out there.  I’m not going to try to give anyone investment advise, but it seems clear for now that at minimum these “currencies” are completely unusable for their theoretical purpose as currency given the price swings.</p>',fields:{slug:"/2018/01/19/weekly-links-01-19-18/"}}},{node:{frontmatter:{readNext:null,topics:["RequireJS","Webpack"],category:"frameworks",key:null,title:"Moving Past RequireJS",description:"A look at the problems with using requireJS in todays JavaScript world",layout:"post",path:"/2015/05/28/moving-past-requirejs",date:"2015-05-28T14:10:00+00:00",dontfeature:"true",isDraft:null},html:'<p>RequireJS has been a hugely influential and important tool in the JavaScript world.  It’s still used in many solid, well-written projects today.  But as it has stagnated and competitors have grown up, it now suffers compared to the alternatives.  It’s time for new projects to look past RequireJS when deciding how to structure their front-end projects.</p>\n<h3>What is RequireJS?</h3>\n<p>RequireJS is the most well known module loader for JavaScript.  Module loaders are tools for specifying dependencies for JavaScript files and loading those files into a browser.  They became necessary because JavaScript has not traditionally offered a built in way to specify what other code is needed to execute a file.  Developers coming from server side languages like Java and Python are used to being able to import anything they need from another file, letting the language handle the details.  Since that was not designed into JavaScript, the only alternative originally was having developers take care that all scripts were correctly loaded into a page together in the right order, then making references across files without the assurance that the other file existed.</p>\n<p>Module loaders improve on that by allowing you to define dependencies for your JavaScript files, and assuring that those dependencies are loaded in the correct order so that the variables the code needs are there when referenced.  These dependencies are specified using one of several “module formats”.  There are currently 3 primary competing standards for JavaScript modules: AMD or Asynchronous Module Definition, CommonJS, and EcmaScript 6 Modules.  I’ll discuss these more below, but each of them provide syntax for listing the files that a module requires as a dependency, and the object that the module wishes to import from those files.</p>\n<h3>Why not start a project with RequireJS?</h3>\n<p>RequireJS was the first JavaScript module loader to gain widespread popularity.  It’s used in hundreds of successful production sites, and is widely referenced in JavaScript books, blog posts, and talks.  I personally led a project to convert a large web application to use it for dependency management in my previous job, and still use it now in a current project.  So why would I say not to use it for your project?  There are two sets of issues with RequireJS:  issues with the AMD module format, and increased competition in terms of the features expected from a module loader.</p>\n<h3>The problems with AMD</h3>\n<p>RequireJS requires developers to use AMD modules.  That choice made a ton of sense in 2011 when RequireJS first launched.  It makes less sense today.  In 2011, the only popular alternative to AMD modules was the CommonJS standard, and AMD held a technical advantage over CommonJS. It was essentially a decision between a technological superiority and a cleaner API. In 2015, AMD is one of 3 realistic module syntax alternatives, and no longer holds a significant technical advantage, but it still has a less clear syntax and has begun to experience problems with network effects.  </p>\n<h4>Syntax Comparison</h4>\n<p>AMD modules look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'file1\'</span><span class="token punctuation">,</span><span class="token string">\'file2\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>Class1<span class="token punctuation">,</span> Class2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>A <code>define</code> function is used to define a new module.  It takes 2 arguments: an array of dependencies (specified as strings), and a callback function that is passed in the values exported by each dependency and run after all of the dependencies have been loaded.  AMD also provides a require function that takes the same arguments, but serves as the initialization point of a program, loading its dependencies and executing them when it’s run.</p>\n<p>Compare that to CommonJS and the ES6 Modules syntax:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//commonJS</span>\n<span class="token keyword">let</span> Class1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'file1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    Class2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'file2\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    obj <span class="token operator">=</span> <span class="token function">newClass1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//ES6</span>\n<span class="token keyword">import</span> Class1 <span class="token keyword">from</span> <span class="token string">\'file1\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Class2 <span class="token keyword">from</span> <span class="token string">\'file2\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">newClass1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There’s some obvious niceties there.  CommonJS and ES6 modules don’t require you to wrap your code in an outer function, which serves to reduce boilerplate and also aligns the import code more closely with the expectations of developers who have used imports in server-side languages.</p>\n<p>But there are also other subtler problems with the AMD syntax.  Because you’re asked to specify your dependencies as an array of strings that then result in parameters to a callback function, adding or removing a dependency requires code to be changed in 2 places. <sup id="fnref:1"><a href="#fn:1">1</a></sup>  This is no big deal in a simple example like above.  But what about in this real world example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'marionette\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'radio\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'underscore\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'lib/analytics\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'collections/widget\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'collections/user\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'models/user\'</span><span class="token punctuation">,</span>\n         <span class="token string">\'routers/widget_page_router\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'views/widget_page/page\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n<span class="token keyword">function</span><span class="token punctuation">(</span>Mn<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> _<span class="token punctuation">,</span> Analytics<span class="token punctuation">,</span> WidgetCollection<span class="token punctuation">,</span> UsersCollection<span class="token punctuation">,</span>\n    User<span class="token punctuation">,</span> WidgetRouter<span class="token punctuation">,</span> WidgetPage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//module code here</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you were asked to remove a dependency here, it’s easy to imagine accidentally putting a parameter in the wrong position in the list, or removing an item from one list without the other, causing the parameters to be set to the wrong values.  It’s a small issue, but the type of subtle source of bugs that can drive developers crazy.</p>\n<p>Finally the mixed use of require and define for pulling in dependencies seems to be confusing to many developers.  While it certainly isn’t a large learning curve (require is for initiating new code, define is for defining a module that can be pulled into a dependency tree started by a require), it’s an additional point of confusion that doesn’t exist in CommonJS, which simply has a “starting script” that is run and pulls in its dependencies.</p>\n<p><strong>Update</strong>: <em>Commenters on Reddit have correctly pointed out that there’s a <a href="http://requirejs.org/docs/whyamd.html#sugar">second usable AMD syntax</a> that cleans up some of these issues.  I didn’t include it originally since it’s not the “official” AMD syntax and I have not seen it widely used, but it is better and worth noting for users sticking with RequireJS/AMD</em></p>\n<h4>Technical Advantages</h4>\n<p>When RequireJS was first created, AMD had a few technical advantages over CommonJS solutions.  AMD was set up to be asynchronous.  The callback function syntax made it easy to handle dependency loading over a network.  You made the define call, loaded the dependencies, and once all of the dependencies had been pulled over the network, ran the callback function.  This also allowed some dependencies to be lazy-loaded after the initial page load, since that could be handled like any other ajax request with a callback attached.  Since CommonJS was set up in a more synchronous fashion, it was less clear how to accomplish this, and early systems were less popular than requireJS.  </p>\n<p>AMD’s asynchronous nature remains a theoretical advantage, but in practice, modern module loaders have found ways to solve these problems for CommonJS.  Webpack allows configuration options for lazy loading individual modules, and developers using Browserify have <a href="http://esa-matti.suuronen.org/blog/2013/04/15/asynchronous-module-loading-with-browserify/">found workarounds</a> to the problem.  At this point there’s no real difference in the capabilities of AMD compared to other module formats.</p>\n<h4>Network Effects</h4>\n<p>While RequireJS and AMD were initially the most popular module system for the browser, CommonJS is built into Node.js and has always been the dominant module format on the server-side.   This was initially no big deal, but Node has grown in popularity and also become more important to client-side developers due to the tooling ecosystem around it.  Because of that, code that doesn’t play well with Node is limited in ways that CommonJS  is not.  One area that I’ve noticed this is unit testing.  There’s a whole ecosystem of unit-testing libraries that allow you to test your modules on the command line using Node (Mocha, jasmine-node, Jest).  This has nice advantages relative to running your tests in a browser.  It’s easy to integrate into a build workflow, the test framework can run all tests in a directory without developers needing to manually add them to a test page, and there’s no extra browser window required.  With AMD you can get part of the way there by making all of your tests asynchronous (painful) and importing requireJS or by using PhantomJS to run your browser tests on the command-line.  But you can’t match the experience of full node compatibility.</p>\n<p>In addition to the unit test example, there are many small node modules out there that can be usefully pulled into a web project.  Libraries like Ampersand.js and Event-Emitter are quite useful in a browser context, but only play nicely if you’re using CommonJS.  While it’s true that most libraries do support AMD, they tend to do so through a “Universal” module format that checks the environment to see what module format is being used and then uses appropriate format.  I’m unfamiliar with any examples of major JavaScript libraries that support AMD module loaders but not CommonJS.  So choosing AMD limits you in a way that choosing CommonJS does not.</p>\n<p>This is not a disadvantage that’s likely to get fixed for AMD modules anytime soon.  If these network effects shift at all, they’re only likely to do so in favor of ES6 modules, which have the appeal of being a “blessed” part of the JavaScript language. So in the short and long term, it’s fair to expect that using AMD modules will limit your compatibility with other tools and libraries compared to CommonJS.</p>\n<h3>What are the alternatives to RequireJS?</h3>\n<p>In 2015, RequireJS is one of 3 major options on the module loading scene, along with <a href="http://browserify.org/">Browserify</a> and <a href="http://webpack.github.io/">Webpack</a>.  Browserify is an attempt to build a module loader on top of the NPM ecosystem and node modules.  It uses CommonJS modules and integrates tightly with NPM.  Webpack is an attempt to unify the modules landscape by supporting AMD, CommonJS and ES6 modules.  It handles JavaScript, CSS and other assets, as well as preprocessors for each. RequireJS suffers in comparison to both of them, both in terms of features and workflow.</p>\n<p>Browserify and Webpack both provide servers for development, allowing you to instantly integrate changes without a long build process or extra JavaScript files loaded into the browser. RequireJS doesn’t have a great solution for development workflow, requiring you to either do a full build every time, or load a copy of the require.js JavaScript file up to your browser where it loads files from the client.  This has disadvantages both in terms of reliability (you’ll be running the files in a different way in development than on production, and there will be timing differences due to the need to load the files on the client), and configuration (you’ll need to have separate configurations for development and production that will have to be kept in sync somehow).</p>\n<p>Browserify and Webpack also provide a clean syntax for preprocessing things like CoffeeScript or JSX files, using transforms or loaders (respectively).  These transforms can be applied to a subset of files with configuration. These methods compare favorably to RequireJS’s plugin system, which require you to manually specify the plugins used each time you load a resource.  </p>\n<p>All of this adds up to a strong case for not starting new projects with RequireJS.  It’s a good tool that has benefited many projects, but as other people have learned from its pain points and provided superior solutions, the time has come to move on.</p>\n<h3>Disclaimers</h3>\n<p>It should be noted here that this article is addressed primarily at developers starting new projects.  If you’re working on an project that already uses RequireJS, you’ve probably already worked through the configuration pain, gotten used to the syntax, found a compatible unit testing library and developed a strategy for live development.  If these aren’t things that are causing you pain, don’t switch.  RequireJS is a stable tool that has stood the test of time.  It’s not inherently flawed.  There are simply better options out there these days for developers starting new projects.  </p>\n<h3>More Resources</h3>\n<ul>\n<li>\n<p>Axel Rauschmayer has a <a href="http://www.2ality.com/2014/09/es6-modules-final.html">great piece</a> up on his blog 2ality describing ECMAScript 6 modules and how they compare to CommonJS</p>\n</li>\n<li>\n<p>This <a href="https://blog.andyet.com/2014/06/25/introducing-ampersand-js">blog post</a> is primarily an introduction post for Ampersand.js, a modular JS framework. But it also serves as a great look at the environment around nodejs and CommonJS modules, including a discussion of the advantages and disadvantages of using many small modules to structure applications.</p>\n</li>\n<li>\n<p>Several users on <a href="http://www.reddit.com/r/javascript/comments/37lowt/moving_past_requirejs/">reddit</a>, have pointed out that <a href="https://github.com/systemjs/systemjs">systemjs</a> is another competing module loader worth discussing.  I didn’t include it because it’s less mature and wouldn’t be something I’d currently recommend for production apps, but it looks to be getting there quickly and is certainly another option to consider.</p>\n</li>\n</ul>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        AMD does allow you to use an alternative syntax that is more similar to CommonJS that avoids this issue with "off by 1" errors.  But since it\'s an alternative syntax, not the recommended one, I think it\'s fair to critique this as an issue.  My other points apply equally to both forms.\n        <a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',fields:{slug:"/2015/05/28/moving-past-requirejs"}}}],topic:"Webpack"}}}});
//# sourceMappingURL=path---topics-webpack-ef568cdc4dfa3fcb01bd.js.map