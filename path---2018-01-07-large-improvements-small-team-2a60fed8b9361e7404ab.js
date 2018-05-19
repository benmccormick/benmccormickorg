webpackJsonp([84787891142466],{823:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Over the last year I’ve been acting as the lone JavaScript resource working on a codebase with around 90k lines of JavaScript code.  That has left me spending the vast majority of my work time trying to knock out features and deal with bugs across the large code surface area.  But I’ve also wanted to do my best to continue to improve code quality with limited resources.  Here are a few things I’ve learned about trying to improve code quality across a large project with limited resources.</p>\n<h4>1. You need to accept not being on the bleeding edge</h4>\n<p>Let’s be real, in the JavaScript world the only way to always be on the bleeding edge is to never maintain an application for more than a few weeks.  And even in other contexts, it often is much less feasible than hype bubbles at conferences or sites like Hacker News might make it seem.  Most companies that are shipping software that users actually pay for are using quite a lot of very old technology quite extensively.  That’s not to say there’s no place for new and shiny things, but there will always be limits to how new and shiny things get.  When you’re low on people resources for the size of your project, those limits get a lot more restrictive.</p>\n<h4>2. It’s important to identify your pain points.</h4>\n<p>There are 3 main type of value that developers can add by changing a software system. They can write new <strong>features</strong>, which give users new capabilities.  They can improve some <strong>cross-feature attributes</strong> of the system like loading speed, accessibility, design, logging or documentation.  Or they can make <strong>architecture improvements</strong> that make it easier to make other changes.  Generally engineers don’t have to argue to add features, because the business decision makers will be calling for them constantly.  Cross-feature things like performance, design or logging sometimes come from business decision makers, but often only when things have become problematic, and then the conversations around how long it will take to achieve improvements can be tense ones.  Architecture concerns pretty much never come from business folks, because they usually don’t see the effects of a bad architecture until it is too late and shipping simple features has become a disastrously slow process<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>.  It’s part of a developer’s job to push for the latter 2 type of changes when they’re needed.   But with limited resources, <em>needed</em> is often hard to quantify.</p>\n<p>That’s why it is important to know what is <em>actually</em> causing you pain, or will soon be causing pain.  Is your site getting slower and slower?  Is your CSS a giant tangled mess that creates bugs with every change<sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup>?  Make a list, and then prioritize it by importance and expected effort.</p>\n<h4>3. Take things one at a time</h4>\n<p>Once you have a list of things that you want to fix, it can be tempting to try to fit those fixes in all over the places.  You’re creating a new page, might as well write it in Vue instead of Angular.  You’re changing some styles, maybe you can use a CSS in JS library.  But the absolute worst thing you can do with limited resources is try to improve too many things at once.  You’ll end up with a codebase with many different ways to do everything, so that every change requires a full context reset, and maintenance means dealing with multiple sets of bugs and compatibility issues for each duplicated approach.  That’s why prioritization is critical.  With limited bandwidth, you need to know what <strong>one thing</strong> will be the best use of your time.</p>\n<h4>4. Expand from small footholds, don’t boil the ocean</h4>\n<p>A few truths to note at this point:</p>\n<ol>\n<li><strong>Changing large systems is hard.</strong>  They have a million different subtle assumptions weaved into their code, and making seemingly the same change in different places can often produce subtly different results.  </li>\n<li><strong>Practice is how you learn to use a tool or technique optimally.</strong> Unless you’ve already used a technology extensively in a different context, you will never be more blind to it’s downsides than at the start of adding it to a project.  As you begin using it, you’ll learn more about it and how to use it better in your system.</li>\n<li><strong>Well designed systems have good interface points</strong>.  Interface points are areas where one part of the system doesn’t need to care about the details of how other parts of the system are implemented, they just need to know the <em>interface</em> for interacting with that part of the system.  For example, when using React, parent components don’t need to know the details of how a child component work, just what props they take.  Similarly when writing HTMl, you don’t need to know the details of how CSS will work for layout, you just need to expose meaningful class names that CSS can use.  A website doesn’t need to know what language a web server is written in to make HTML requests to it.  These are examples of interface points, and while well designed systems will have more of them and fewer “breaches” of the interface lines, all systems have them to some extent.</li>\n</ol>\n<p>The implication of these truths is that there is value in starting small and expanding.  If we can pick a small section of the application that is cordoned off from the rest of the code in a meaningful way, we can create a foothold for the new technology.  This serves as a learning opportunity, an example, and a starting place.  If it goes badly, small changes are easy to revert or fix.  If it works well, we can look for more similar interface boundaries, or expand out to convert some of the code that uses the new code.</p>\n<p>When I converted a large Backbone app to use React, I took advantage of 2 different interface boundaries.  I started by converting small “widget” components to be written in React, and came up with a method of calling these widgets from within Backbone code.  Once I had enough of these building block widgets written in React, I started writing new pages in React.  Then finally I would convert subsections of Backbone driven pages to React, starting from the bottom up and converting the top level layouts of the page last.  I was using 2 interface boundaries: components and pages.  That made sense for Backbone to React, where I was essentially converting one type of component tree to another.  But the lines may be different for other changes, and you’ll need to use your judgement.</p>\n<h4>5. Automate what you can</h4>\n<p>Not every change needs to be hard and slow.  Sometimes we can take advantage of automation. Tools like <a href="https://prettier.io/">Prettier</a> and <a href="https://eslint.org/">ESLint</a> make it easy to automate code style and correctness fixes.  Tools like React often provide <a href="https://github.com/reactjs/react-codemod">codemods</a> to help make it easier to update to a new version of the tool or use best practices.  Unit tests can help you prevent regression bugs and are easy to automate with a CI server or <a href="https://benmccormick.org/2017/02/26/running-jest-tests-before-each-git-commit/">pre-commit hooks</a>.  </p>\n<p>If you’re dealing with problems that are more specific to your codebase, it may make sense to invest time into writing your own automation scripts, whether that means hacking together a crazy bash/python script to do a massive find and replace, or using a tool like Ansible to automate some previously manual developer processes. It made a big difference in our company when our QA developer put in the work to automate the creation of consistent local environments.</p>\n<h4>6. Count the cost of maintenance</h4>\n<p>With a small team, some improvements may simply not be worth it over time.  Genuinely valuable things like test coverage, JSDoc style automated documentation, old browser support, add overhead to future changes as well as any up front cost to implement. These are the type of things that advocates tend to moralize about, and say that it’s the developers job to advocate for them.  And that is true as I alluded to earlier.  But when faced with limited resources, it’s important to prioritize, and understanding the cost of maintaining certain improvements is part of that.</p>\n<h4>7. Distinguish between craftsmanship and business needs</h4>\n<p>Along the same lines, as developers we’re often encouraged to think of ourselves as craftsmen.  Think of <a href="https://thenextweb.com/apple/2011/10/24/steve-jobs-obsession-with-the-quality-of-the-things-unseen/">Steve Jobs talking about using good wood for the back of a cabinet</a> or the aforementioned moralizing about code and process quality.  There are great things about this, since it is a developers job to look after the quality and craftsmanship of their product.  But it also is good to align that craftsmanship with business needs and create something that is useful rather than merely theoretically beautiful.  So there is a place for making changes to improve the “purity” of code, but when investing limited resources, it’s even more important than usual to balance that with business needs.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>I’ve gotten to work with plenty of non-devs who respect the need for good architecture.  They still aren’t going to be able to identify when changes need to happen.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n<li id="fn-2">\n<p>Little known fact: CSS actually stands for “Giant Tangled Mess that creates bugs with every change”</p>\n<a href="#fnref-2" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{title:"Tips For Improving a Large Code Base With A Small Team",keywords:"productivity refactoring efficiency team",category:"software-productivity",date:"2018/01/07",path:"/2018/01/07/large-improvements-small-team/",layout:"post",hideFooter:null},fields:{slug:"/2018/01/07/large-improvements-small-team/"}}},pathContext:{slug:"/2018/01/07/large-improvements-small-team/",relatedPosts:[{path:"/2017/07/19/ten-things-javascript/",data:{title:"Ten Things A Serious JavaScript Developer Should Learn",path:"/2017/07/19/ten-things-javascript/",description:"Some of the important things to pick up in the JS world",date:"2017-07-19T04:00:00+00:00"}},{path:"/2017/07/24/my-favorite-interview-question/",data:{title:"My Favorite Interview Question",path:"/2017/07/24/my-favorite-interview-question/",description:"How does the Internet work anyway?",date:"2017-07-24T11:45:00+00:00"}},{path:"/2017/02/18/context-to-best-practices/",data:{title:"Giving Context To Best Practices",path:"/2017/02/18/context-to-best-practices/",description:"What we talk about when we talk about best practices",date:"2017-02-18T23:30:00+00:00"}}]}}}});
//# sourceMappingURL=path---2018-01-07-large-improvements-small-team-2a60fed8b9361e7404ab.js.map