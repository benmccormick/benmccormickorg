webpackJsonp([0xc3b9f63eef5fb000],{"./node_modules/json-loader/index.js!./.cache/json/2017-07-19-ten-things-javascript.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>There’s been an interesting Reddit thread circling my corner of the internet for the last week or so. It started with a question:</p>\n<blockquote>\n<p>I’m inviting pure opinion here, but what’s your list of ten things that everyone looking for a good javascript role should know and understand. Personally, I’m in a role where what I know is adequate, but I want to be somewhere better; somewhere that has some flippin standards. I’m learning outside of work requirements at the moment, but there is so much to learn out there.\nThe objective is to do good work in a good place.\nNarrow it down to your ten for me, or for you..\n<em>- From <a href="https://www.reddit.com/r/javascript/comments/6mlc9d/what_10_things_should_a_serious_javascript/">“What 10 Things Should a Serious Javascript Developer Know Right Now?”</a></em></p>\n</blockquote>\n<p>I think this is a great question if you take it seriously, because when you think about it critically, it exposes all of the things JavaScript don’t really <strong>need</strong> to know.  Can you contribute productively as a mid-level JavaScript developer without knowing anything about <a href="https://github.com/prettier/prettier">Prettier</a>, <a href="https://www.typescriptlang.org/">Typescript</a> or <a href="https://facebook.github.io/react/">React</a>?  Sure!  Can you contribute productively if you’re writing and testing your JavaScript using <em>&#x3C;awful uncool code editor that you the reader can’t stand></em>?  Definitely.  So here’s my take on answering the question.</p>\n<h2>Assumptions</h2>\n<p>I’m making the following assumptions about the question</p>\n<ol>\n<li>\n<p>I’m assuming the audience is a developer who has some level of professional programming experience and some existing JavaScript experience, and that they are primarily interested in “code skill” answers. Thus I’ll exclude things like communication ability, experience with version control, professional conduct, or basic coding ability that are very important to success in a JavaScript development environment but are out of the scope of this question.</p>\n</li>\n<li>\n<p>I’m optimizing for “what specific pre-existing knowledge will make the most difference between success and failure for a new hire in a mid-level JavaScript role”.  </p>\n<p><strong>Pre-existing</strong> means that these are things that somebody is expected to know before taking the job.  Learning the details of a company’s technology stack, style guide and engineering philosophy are all important, but you shouldn’t be expected to know them in advance, and in many cases doing so is impossible.</p>\n<p><strong>Specific knowledge</strong> means that these are things that you can learn with some effort and study.  They should not be broad categories like “security”, “design”, or “server-side development”.  They  should be things you know or know how to do, not things you “have experience with”.  And they should be specific enough that somebody can feel comfortable saying they understand the topic or don’t. Most of the things I list below are <em>topics</em>, but I try to lay out a specific set of things that you would need to know to understand it.</p>\n<p><strong>The most difference between success and failure</strong> means that these are the things that are really going to make a difference in how effective you are at understanding and completing the work assigned to you.  There are many such things, and their importance will vary situationally, so this is just my educated take on a generalists list.  </p>\n<p>When I say <strong>mid-level</strong>, I’m picturing hiring for a role that pays well but is not the most senior person on the team.  This would be a developer who would be expected to complete tasks with minimal help and oversight but wouldn’t necessarily be planning the architecture of everything right off the bat.  To be clear this list is not a set of things that you need to go to get paid to write JavaScript.  It is more along the lines of “next steps” for junior devs.  Its also not a step function where you need to know all of these at once to get to the next level.  These are just things that may limit you if you don’t have them.</p>\n<p>I’m taking the liberty to assume that <strong>JavaScript role</strong> implies using JavaScript in some sort of client/UI environment (Browser, React Native, Cordova, Electron, etc).  This list would be at least a bit different for a Node.js server-side role, and somebody else will have to write that post.</p>\n</li>\n</ol>\n<h2>The List</h2>\n<h4>1. You should know the core language</h4>\n<p>JavaScript is not a very complicated language at its core.  It can seem difficult to learn because of all of the noise around it.  Browser APIs, Library APIs, jQuery, React, TypeScript, the many npm packages out there, etc all can make the language syntax space seem huge.  And this isn’t helped by the fact that the language has evolved over time so you’ll see many different ways to do a single task spread out over the internet.  But the core language and standard libraries are actually pretty small compared to languages like Python and Java that have more features and larger standard libraries.  Eventually you’ll need the ecosystem.  But knowing the core language features that are implemented in most browsers is a great start.  </p>\n<p>This means you should know about basic language features like if/else, error handling with throw/try/catch, array manipulation with push/map/reduce/filter, and string manipulation methods like replace/slice/split.  You should also know about how JavaScript handles things like truthiness and falsiness<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>, how to work with JSON data with the JSON object methods, and how variable scope works in JavaScript.  These days its also becoming more and more important to have at least a basic familiarity with the more important language features that were added in ES6 like Promises, modules, classes, template literals, generators and destructuring. Even if you choose not to use those features, being able to see and understand them will help you learn faster from others.</p>\n<p>This list is mostly unordered, but this comes first because learning everything else becomes a lot harder without this knowledge, mostly because it becomes difficult to learn from other people’s code since you won’t understand what it is doing.  If you’re starting from a weak base here I’d recommend finding a good book on the core language like <a href="http://amzn.to/2uD4R1Y">Eloquent JavaScript</a><sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup> and digging in.  If you’ve been using JavaScript in an older code base or haven’t used it in a while and want to catch up, you can see <a href="https://benmccormick.org/2017/07/10/how-to-follow-the-javascript-roadmap/">my post on keeping up with new language features</a>.</p>\n<h4>2. You should understand async code</h4>\n<p>One of the biggest leaps for new JavaScript developers, even those who are experienced with other languages is the amount of asynchronous code found in idiomatic JavaScript.  Asynchronous (async) code is code that is scheduled to run at a later time after some event, delay or response.  It can appear a bunch of different ways in JavaScript code, and it’s important to be able to interpret them.</p>\n<p>This means learning about <a href="https://benmccormick.org/2015/12/30/es6-patterns-converting-callbacks-to-promises/">callbacks and promises</a> at least.   You should also learn about the JavaScript <a href="http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/">event loop</a> and how it works  Ideally some of the standard APIs that use them like <a href="https://developer.mozilla.org/en-US/docs/Talk:DOM/window.setTimeout">setTimeout</a> and  <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch</a>.  If you’re ambitious you can learn about newer async syntax and library implementations like <a href="https://ponyfoo.com/articles/understanding-javascript-async-await">async-await</a> or <a href="https://github.com/Reactive-Extensions/RxJS">RxJS</a> But the most important thing is to spend time using and writing async code so that you get an intuitive understanding of how it works.</p>\n<h4>3. You should get comfortable with at least one set of developer tools</h4>\n<p>When developing JavaScript, its important to be able to debug problems and understand how existing systems work.  JavaScript has a fantastic ecosystem of developer tools for diagnosing bugs and examining application code.  For the most part they’re bundled with browsers (though some IDEs like VS Code and WebStorm have their own debuggers).  Learning how to use these tools well will turbocharge your JS dev skills.  If you can’t use them though, it will make everything much harder.  </p>\n<p>Competence in this means comfort with at least the JavaScript debugger panel of a browser’s devtools.  You should be able to set and use breakpoints, use watch mode and the console to test for the value of expressions, and understand the stack traces. But its also good to get comfortable using the elements panel to understand and manipulate the DOM, and the network panel to debug network requests.</p>\n<h4>4. You should be proficient with JavaScript functions</h4>\n<p>Functions are the core of the JavaScript language.  You should be able to use them fluently.  That means understanding function scope, closures, how <code>this</code> works, and the difference between normal functions and arrow functions. It also means knowing about how to process arrays with function using methods like map, filter, and reduce.  A good resource for “thinking in functions” is <a href="https://leanpub.com/javascriptallongesix/read">JavaScript Allonge</a> by Reginald Braithwaite.</p>\n<h4>5. You should be comfortable with basic design tasks</h4>\n<p>No matter how well you learn JavaScript, you’ll be limited career-wise if you can’t manage basic design tasks.  This might not seem inherently true; after all isn’t that what professional designers are for?  But the truth is that unless you’re a purely server-side developer (excluded by our assumptions above), there will be times when you’re asked to fill in a visual gap that a designer doesn’t have time for, or there will be ambiguities in a designers spec that aren’t worth a meeting.  And learning the basics of design will help you communicate better with designers and product managers about technical constraints and design requirements.  </p>\n<p>When I talk design, I mean both the basics of implementing a visual design with HTML and CSS<sup id="fnref-3"><a href="#fn-3" class="footnote-ref">3</a></sup>, and enough of an understanding of design basics to create a simple UI that looks ok and isn’t confusing.  That last requirement is harder than you’d think.  Design is hard and mostly orthogonal to the set of skills most folks pick up while learning to code.  For learning design theory, I’d recommend finding a simple resource on visual design first like <a href="http://amzn.to/2uz3vEG">White Space is Not Your Enemy</a>, and ideally supplementing that with a more UX focused resource like <a href="http://amzn.to/2uvUrR7">Don’t Make Me Think</a>.  The practical side of HTML/CSS is easiest to pick up with experience.  If you’re using devtools you can see what other people are doing with CSS and tweak and explore using the elements panel.  And there are lots of good online resources for learning about CSS and HTML syntax like <a href="https://developer.mozilla.org/en-US/">MDN</a> for API info or <a href="https://css-tricks.com/">CSS-Tricks</a> for ideas, tutorials and keeping up with new stuff.</p>\n<h4>6. You should have a basic understanding of networking and HTTP-based APIs</h4>\n<p>Because we’re assuming that this job involves using JavaScript in a browser or other client context, you should be able to understand the basics of networking.  You should know what a client and server is.  You should be able to explain a rough approximation of what happens when somebody enters a URL into the browser<sup id="fnref-4"><a href="#fn-4" class="footnote-ref">4</a></sup>. There’s a bunch of vocabulary thats good to know here. You should know what an HTTP request is and ideally know the conventions of what GET/PUT/POST/DELETE imply.  It will help you to have a working definition of what REST is and what AJAX is. It’s good to get experience working with some HTTP based APIs, either at work or playing around with an API like <a href="https://dev.twitter.com/rest/public">Twitter</a> or <a href="https://developer.github.com/v3/">Github</a>.  You should also get familiar with at least one way to make HTTP requests in JavaScript (XMLHttpRequest, fetch, jQuery’s ajax methods).  </p>\n<h4>7. You should be comfortable with Node.js based tooling</h4>\n<p>One of the biggest shifts in the last 5 years in the JavaScript world has been the explosive growth and consolidation of tools to help build JavaScript applications.  Tools like <a href="http://eslint.org/">eslint</a>, <a href="http://babeljs.io/">Babel</a>, <a href="https://www.typescriptlang.org/">Typescript</a>, and <a href="https://webpack.js.org/">Webpack</a> are essential to many teams workflows.  While you don’t necessarily have to be experienced writing applications for Node.js, it is important that you be able to use those tools.  That means knowing how to install Node and use npm to install and update packages.  It also means getting comfortable with build tools like Webpack, Rollup or Ember CLI and knowing how to use them.  Reasonable people can differ on how many tools and libraries you should be using, or what the right ones to use are, but having a basic familiarity with how the Node ecosystem works has become essential.</p>\n<h4>8. You should know how to use a framework to structure a moderately sized program</h4>\n<p>A critical requirement for a developer who is expected to complete work with minimum supervision or hand-holding is the ability to structure their code in a maintainable way.  That means having an understanding of (or helping define) the overall architecture of the system, and then writing code that fits into it.  It also means being able to identify and help solve situations where the current architecture or code base norms causes problems.  I put this in terms of frameworks because pretty much all medium to large JavaScript programs are using some sort of framework, whether it is an “official” framework like React, Angular, and Ember or a collection of helper files and functions cobbled together by a development team over time.  For learning purposes, the popular official frameworks will usually be better to learn, since the knowledge can translate elsewhere, the purposes behind the structure are documented on the internet, and at least some sense of best practice architecture should be embedded in the code.  To check this box I think it would be best to get experience with at least 2 frameworks/architectures, since it is difficult to tell which decisions a Framework makes are specific to its architecture and constraints without something to compare it with.</p>\n<p>This is probably the most controversial item on this list, since I know a lot of folks believe it’s better to learn architecture ideas outside the constraints of a framework.  My stance here is that frameworks are practical: they’re most likely to translate to an actual employment background and it’s easy to find practical explanations of how they solve architecture problems.  </p>\n<h4>9. You should know the basics of JavaScript program performance</h4>\n<p>Like design, performance is a deep well of things you can learn.  But knowing the basics is important and can go a long ways.  For performance “the basics” is more about process than knowledge.  You need to learn how to debug slow processes and understand where the problems are coming from.  For browser environments in particular there are some baseline things to understand.  You’ll want to be able to tell the difference between code that is running slowly due to parsing slowness, runtime slowness, and network latency.  It’s important to learn how to keep a UI responsive and not block rendering with other calculations.  And it’s great to understand how to cache data and avoid making too many requests to the server.  </p>\n<p>This is also an area where learning more about Computer Science theory can be beneficial.  Studying data structures and algorithms can help give you good intuitions on how to handle data, and learning about Big O notation gives you a language for discussing performance tradeoffs.  This is the type of background knowledge that pays off in occasional subtle ways though, not something that is always obvious applicable in the moment.</p>\n<h4>10. You should have a process for learning new things</h4>\n<p>JavaScript development has changed a lot over the last 10 years, and there’s no reason to think it won’t continue to evolve over the next 10.  There are also a lot of different technologies that fall under the umbrella of JavaScript, more than any one person can keep in their head.  So it’s important to be able to keep up with the new technologies as they come along, and also learn about new technologies quickly when you need them.  Ideally this means having at least one place where you can follow news about new JavaScript innovation.  Could be Twitter, a set of blogs, newsletters or an aggregator site like Reddit or Hacker News.  If you’re looking for an easy place to start, I’d recommend the <a href="http://javascriptweekly.com/">JavaScript Weekly mailing list</a>.  </p>\n<p>You also need to get comfortable finding information about specific technologies, either to learn to use them or troubleshoot problems.  These resources will likely be more varied, but it’s important to learn to <a href="https://xkcd.com/627/">Google well</a>, and also helpful to get familiar with <a href="http://stackoverflow.com/">Stack Overflow</a> or some other resource for getting help when you have specific questions or problems.  </p>\n<hr>\n<p>Do you have a different list?  Feel free to post it and then link in the comments!</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>If you don’t learn all the pitfalls here, at least learn that there are pitfalls.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n<li id="fn-2">\n<p>Disclosure: Some of these book links are affiliate links</p>\n<a href="#fnref-2" class="footnote-backref">↩</a>\n</li>\n<li id="fn-3">\n<p>Or SASS/LESS/CSS in JS/whatever</p>\n<a href="#fnref-3" class="footnote-backref">↩</a>\n</li>\n<li id="fn-4">\n<p>This can be explained at several levels, but its good to at least know that a request is sent from the users computer to a server somewhere, and that server returns resources like HTML, CSS, JS, and image files.  </p>\n<a href="#fnref-4" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{title:"Ten Things A Serious JavaScript Developer Should Learn",keywords:"javascript reddit",category:"javascript",date:"2017-07-19T04:00:00+00:00",path:"/2017/07/19/ten-things-javascript/",layout:"post",hideFooter:null},fields:{slug:"/2017/07/19/ten-things-javascript/"}}},pathContext:{slug:"/2017/07/19/ten-things-javascript/",relatedPosts:[{title:"How to follow the JavaScript roadmap",path:"/2017/07/10/how-to-follow-the-javascript-roadmap/",description:"Keeping up with the language's progress"},{title:"Running Jest Tests Before Each Git Commit",path:"/2017/02/26/running-jest-tests-before-each-git-commit/",description:"A simple setup to run your Jest tests before every commit"},{title:"Orthogonality and CSS in JS",path:"/2017/01/03/orthogonality-and-css-in-js/",description:"Separation of concerns in the context of CSS and JavaScript"}]}}}});
//# sourceMappingURL=path---2017-07-19-ten-things-javascript-633e8abd44fe06f90c21.js.map