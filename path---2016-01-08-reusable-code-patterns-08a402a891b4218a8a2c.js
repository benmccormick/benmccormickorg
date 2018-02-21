webpackJsonp([96511245805918],{687:function(e,t){e.exports={data:{markdownRemark:{html:'<p>One of the most repeated mantras in all of software is the term “Don’t Repeat Yourself”. The phrase was first popularized by the book <a href="http://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X/ref=sr_1_1?s=books&#x26;ie=UTF8&#x26;qid=1452230454&#x26;sr=1-1&#x26;keywords=pragmatic+programmer">The Pragmatic Programmer</a>, with it’s call for DRY software.  At it’s core, DRY is all about finding a way to keep logic related to a particular function in one place, so that changes for new functionality can be limited in scope and have predictable consistent effects.  Software developers are usually very good at knowing that repetition is bad, but I’ve seen that we can be less great at communicating about our options to avoid it, or discussing the tradeoffs between different approaches.  This post is going to look at a specific situation that programmers encounter all the time, and give a framework for talking about how to handle it, focusing on positive options rather than simply what we want to avoid.</p>\n<p>The high level situation I want to talk about is when a programmer encounters a problem for which they have an existing piece of code that mostly works as a solution, but doesn’t quite meet all the requirements.  Some examples would include:</p>\n<ul>\n<li>a screen that is required to show a user avatar, but at a different size than other avatars displayed in the interface (all of which use an existing avatar ui widget)</li>\n<li>a program that already has an API to get friends data from a users Facebook account, and needs to add a second API to get similar data from their Twitter account</li>\n<li>a program that needs a  function that takes an integer or a string and displays it on the screen, when it already has a function that displays data but only accepts strings</li>\n</ul>\n<p>Some of those are simple, some are more complex, and you might already be thinking about how you’d handle each case.  The point isn’t so much the exact example so much as having a way to communicate what the options are.  I’m going to lay out 6 different patterns for handling situations where you’re required to implement something similar but not exactly the same as something that already exists.  I will not be endorsing a particular strategy as correct, since they all have their place.  Instead I’ll be discussing the benefits and risks of each, and hopefully giving a good framework for thinking about and discussing these tradeoffs in the future.</p>\n<h3>Using the existing component as is</h3>\n<h4>Pros</h4>\n<ul>\n<li>Least Effort</li>\n<li>Encourages consistency and simplicity</li>\n</ul>\n<h4>Cons</h4>\n<ul>\n<li>Often not allowed</li>\n<li>May be compromising user experience for developer expediency</li>\n</ul>\n<p>The first option is the simplest.  If you have a component that is similar to what is required but doesn’t quite match the requirements, change the requirements.  This can make sense in situations like the avatar example above, when you have a UI element or control that you use everywhere in the system.  It may make sense to use that same element in a new place for the benefit of consistency and user knowledge, rather than inventing a new UI element for the page.  This obviously requires an environment where developer input is welcome in the design and requirements process.</p>\n<p>Developers should be cautious with this though.  If using an existing component removes unecessary complexity from the design and saves time, it’s a win-win.  But if the design was a good one, and users lose out on functionality through developer “efficiency”, it can hurt the product.  Even worse, decisions like that usually end up coming back round again, as the need that was ignored often will pop up in new situations.</p>\n<h3>Copy and Paste</h3>\n<h4>Pros</h4>\n<ul>\n<li>Simple</li>\n<li>Keeps existing code stable in the short term</li>\n</ul>\n<h4>Cons</h4>\n<ul>\n<li>Adds to maintenance burden</li>\n<li>Decreases readability/understandability of the code base for other developers</li>\n</ul>\n<p>This is the approach that says “To Hell with DRY”, and takes some existing code, creates a copy of it, and then partially modifies it to suit the current situation.  This would be analogous to taking the User avatar code listed above, creating a copy of it and simply modifying it to be bigger.  That might look like this in CSS:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.user-avatar {\n    height: 30px;\n    width: 30px;\n    padding:5px;\n    float: left;\n    border-radius: 5px;\n}\n\n.user-avatar-big {\n    height: 50px;\n    width: 50px;\n    padding:5px;\n    float: left;\n    border-radius: 10px;\n}</code></pre>\n      </div>\n<p>Everything now works exactly the way we want it.  The problem comes when somebody wants to change the floats on avatar elements, or add a border to all of them now.  Instead of being able to make one change, they have to be aware of both avatar versions, and modify both.</p>\n<p>Note that copy and paste isn’t always bad.  Often there are very good reasons for not modifying existing code.  It may be code that you don’t control (for instance forking an open source project that is not actively maintained to add a feature that you want), or code that is from another project (or from a legacy portion of the current project that is handled as a different code base).  DRY is not crazy advice though, and if you’re operating within a single codebase you control, this is usually not the best option.</p>\n<h3>Classical Inheritance</h3>\n<h4>Pros</h4>\n<ul>\n<li>Well understood by most programmers, especially those with an academic background</li>\n<li>fits very well when you have multiple things that are variations of a type, with more similarities than differences</li>\n</ul>\n<h4>Cons</h4>\n<ul>\n<li>Often used as a silver bullet for all situations</li>\n<li>Not suitable for situations where the objects are more different than similar, or when they are 2 different things at the core with shared behavior</li>\n</ul>\n<p>If you ask a recent Computer Science graduate what the best way to solve the problem of similar behavior across objects is, 99% of them will immediately say <a href="https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)">inheritance</a>.  The “conventional wisdom” that’s taught in most introductory computer science courses is that Object Oriented Programming is the best way to structure programs, and that Object Oriented programming is primarily about inheritance.  Both statements are shaky, but the prevalence of this mindset means that many developers come out of school and look at every problem they see as a nail to hit with their inheritance hammer (this is certainly something I was guilty of when I first graduated).  </p>\n<p>Inheritance isn’t bad.  It’s definitely a tool you want in your toolbox, and shallow hierarchies of objects that inherit from a base class are a great pattern.  90% of “Frameworks” out there (Backbone, React, django, Rails, etc) use some form of inheritance as a way of structuring how users interact with the framework.  But when it is your only tool, things get ugly quickly.</p>\n<p>Inheritance is a bad choice when 2 objects are mostly different.  Inheritance forces objects to share an API, and implies that objects can be used interchangeably.  If the objects aren’t really interchangeable, this can lead to jumping through hoops to maintain a shared API, with a small base class being stretched between 2 or more verbose child classes.  Interfaces especially tend to be bad places to use inheritance, as they tend to require small tweaks and differences when used in different places that aren’t friendly to being passed as configuration properties or over-ridden methods.</p>\n<h3>Configuration</h3>\n<h4>Pros</h4>\n<ul>\n<li>Keeps everything in a single place</li>\n<li>\n<p>Declarative configuration can be easier to read and update than a bunch of logic</p>\n<h4>Cons</h4>\n</li>\n<li>Can get out of hand fast as use cases increase</li>\n<li>Often unclear what defaults should be, bad defaults make common use cases verbose</li>\n</ul>\n<p>We can define separate behaviors for 2 similar things by using a single configurable object. This maximizes code re-use since everything is in one place, and provides an easy to read abstraction over the code for quick changes later.  However, like inheritance it works much better for similar objects with small differences rather than different objects with shared behaviors, and can lead to “configuration creep” when the differences slowly grow, creating a monster configuration and spaghetti code that tries to handle all of the possible configuration options it could be passed.</p>\n<p>A big design point with configuration based strategies is figuring out good defaults.  If an object is designed so that the default case requires minimal to no configuration, and only true edge cases require a lot of configuration, configuration based objects and APIs can be very pleasant to deal with.  But objects with bad or no defaults that require common cases to include extensive configuration eventually lead to bloated projects that are very difficult to debug.</p>\n<h3>Mixins</h3>\n<h4>Pros</h4>\n<ul>\n<li>\n<p>Share individual behaviors or attributes well</p>\n<h4>Cons</h4>\n</li>\n<li>Can break down when the behavior or attribute requires significant knowledge about the object</li>\n</ul>\n<p>In contrast to inheritance and configuration, <a href="https://en.wikipedia.org/wiki/Mixin">mixins</a> work well when objects are significantly different, but share similar behaviors. <code>Mixins</code> are the strategy of adding individual methods or properties to an object without implying any relationship between objects that use it.  Mixins are great when used to add a standalone behavior to different objects.  They avoid the problems of inheritance and don’t lock an object into a single API.</p>\n<p>That said, it can often be hard to construct good mixins, since many behaviors require knowledge of the object that is performing the behavior, such as making assumptions about the structure of the objects data.  This either requires the objects implementing the mixin to obey rules about how they’re structured, similar to inheritance, involves offloading significant complexity into the mixin to allow it to handle different formats (making it a potential source of bugs), or it risks naming conflicts if the mixin tries to implement the data storage itself.  </p>\n<h3>Composition</h3>\n<h4>Pros</h4>\n<ul>\n<li>\n<p>Incredibly flexible for handling subtly different behaviors</p>\n<h4>Cons</h4>\n</li>\n<li>Can ramp up complexity, making it difficult to see the whole system</li>\n<li>May end up pushing code re-use problems downwards instead of solving them, leading to many small similar modules</li>\n</ul>\n<p>Often when faced with 2 similar objects or functions, the best solution is to create more objects or functions.  Composition is trendy these days.  On the server side, you have people talking up micro-services and programs composed of small single-purpose modules.  On the client, React is the hottest library around.  The idea is appealing.  Instead of having one big complicated “thing”, I can create a few smaller “things” that I can wrap my mind around, and then get them to work together.  When this works well its great.  React for example, makes testing UIs much easier, since you can unit test individual components in a reliable way.  The problem is that it often moves complexity out of the components and into the architecture.  The hard part becomes figuring out how components fit together, designing interfaces and deciding what should be going where.  Although any individual piece of code may be comprehensible and simple, the system at large is harder to visualize and understand.</p>\n<p>Like mixins, composition often works best when you have 2 or more fairly different “things” that share behavior.  The composition mindset is to treat code like lego blocks that you can snap together in different configurations as needed.  When done well, it allows for useful abstraction, letting developers create complex components out of meaningful sub-components without having to know all the details of the subcomponents.  When done poorly, it can lead to a fractured project with many undocumented dependencies between components.  </p>\n<h2>All Together Now</h2>\n<p>The great thing about these strategies is that none of them is the <strong>right answer</strong>.  All of them have their place, and can even be combined.  At my work we’ve developed code for describing workflows.  The workflows are described using an object that takes a configuration and uses it to layout a series of widgets.  Each widget inherits from a framework, and many of them use mixins to share behavior.  Most of the widgets are composed of several smaller views, and as developers we have pushed back against designs several times in order to allow greater widget re-use.  Each time we need to create a new automator we’ve started by copy and pasting some of the configuration boilerplate (which hopefully we’ll reduce going forward by providing better default behavior as we understand the requirements better). This is one feature of a large software product, and it uses all 6 reuse patterns I’ve described to perform its purpose.</p>\n<p>In the end, what I hope you as a reader get out of this is not that one strategy is good or bad.  Instead I want to provide a way of thinking about the choices around re-use, so that we as developers can talk intelligently about the options and tradeoffs and make the right choice for a given situation.</p>',frontmatter:{title:"Reusable Code Patterns",keywords:null,category:"software-productivity",date:"2016-01-08T05:22:29+00:00",path:"/2016/01/08/reusable-code-patterns",layout:"post",hideFooter:null},fields:{slug:"/2016/01/08/reusable-code-patterns"}}},pathContext:{slug:"/2016/01/08/reusable-code-patterns",relatedPosts:[{path:"/2016/12/11/readable-code-audience",data:{title:"Readable code: Know your audience ",path:"/2016/12/11/readable-code-audience",description:"A quick observation about what it means to write readable code",date:"2016-12-12T04:00:00+00:00"}},{path:"/2017/02/18/context-to-best-practices/",data:{title:"Giving Context To Best Practices",path:"/2017/02/18/context-to-best-practices/",description:"What we talk about when we talk about best practices",date:"2017-02-18T23:30:00+00:00"}},{path:"/2015/11/25/productive-javascript-development",data:{title:"Productive JavaScript Development",path:"/2015/11/25/productive-javascript-development",description:"An examination of what makes JavaScript development productive",date:"2015-11-25T14:43:46+00:00"}}]}}}});
//# sourceMappingURL=path---2016-01-08-reusable-code-patterns-08a402a891b4218a8a2c.js.map