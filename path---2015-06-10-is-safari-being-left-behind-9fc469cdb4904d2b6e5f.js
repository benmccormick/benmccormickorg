webpackJsonp([0x7d747d9e9208],{680:function(e,t){e.exports={data:{markdownRemark:{html:'<p>On Twitter yesterday, <a href="https://alexsexton.com/">Alex Sexton</a> surfaced Apple’s fact sheet on what’s new with Safari 9:</p>\n<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://t.co/fVg9U9dEq4">https://t.co/fVg9U9dEq4</a>&#10;&#10;Some ES6 and lots of unprefixed CSS (flexbox!), but I really want Intl, ServiceWorkers, PointerEvents, HTTP2, CSP2…</p>&mdash; Alex Sexton (@SlexAxton) <a href="https://twitter.com/SlexAxton/status/608017541173284864">June 8, 2015</a></blockquote>\n<p>Safari 9 is still in developer preview and won’t ship till September or so, so this all could change, but Apple’s changelog is underwhelming to say the least.   The developer facing changes in Safari 9 consist of only standardized versions of CSS properties (that were already supported with a prefix), and a handful of ES6 features.</p>\n<blockquote>\n<p>The following ECMAScript 6 content is now supported by Safari:</p>\n<ul>\n<li>Classes</li>\n<li>Computed Properties</li>\n<li>Weak Set</li>\n<li>Number Object</li>\n<li>Octal and Binary Literals</li>\n<li>Symbol Objects</li>\n<li>Template Literals</li>\n</ul>\n</blockquote>\n<p><em>- <a href="https://developer.apple.com/library/prerelease/mac/releasenotes/General/WhatsNewInSafari/Articles/Safari_9.html#//apple_ref/doc/uid/TP40014305-CH9-SW27">Safari Pre-Release notes</a></em></p>\n<p>While it’s great to see ES6 support, the truth is that by the time Safari is released in the fall, <a href="http://blogs.windows.com/msedgedev/2015/05/12/javascript-moves-forward-in-microsoft-edge-with-ecmascript-6-and-beyond/">Microsoft Edge</a> will have been released, and Safari 9 will release as (at best) the <a href="http://kangax.github.io/compat-table/es6/">3rd most ES6-compliant browser</a> among the 4 major desktop browsers.  And due to its yearly schedule, it’s basically guaranteed to be in last by the end of the year.  At the same time Safari has neglected other APIs like Internationalization, Pointer Events, Web Components, CSS Variables, Service Workers, or ASM.js optimizations, all of which are supported or in progress by each of the other browsers <sup id="fnref:1"><a href="#fn:1">1</a></sup>.  In addition, Safari’s developer tools, which were once best in class, have been slowly falling behind Chrome and Firefox, especially in more advanced performance features.</p>\n<p>So does this mean that Safari is the next IE6?  Not so much.  We’ve come a long way since the IE6 era, and browsers are more standards compliant than ever.  Tools like <a href="https://babeljs.io/">Babel</a> make it easier for developers to participate in the future of the web without being restricted by slow moving browsers or legacy support concerns.   But there’s always going to be some browser that serves as the “bottleneck” for what web developers are able to reasonably use in production.  Currently that is older versions of Internet Explorer and old Android browsers.  But as more and more users upgrade to Android phones using Chrome, and Microsoft makes strong pushes to move users to the <a href="http://benmccormick.org/2013/06/11/evergreen-browsers/">evergreen</a> Edge browser, it’s quite likely that Safari could take their place.  It is now the only major browser being updated yearly, and with Microsoft’s recent re-emphasis on JavaScript and HTML development, Apple is the only major browser vendor who seems to view the web as a second class platform.</p>\n<p>Safari is not going away.  Its monopoly status on iOS more or less guarantees that, and on the desktop I’ve talked to plenty of people who like its simple UI, and others who feel that it’s faster or consumes less memory than Chrome and Firefox.  But it will be a sad sight if it gets left behind.  Here’s hoping that the final release contains more surprises, and that going forward Apple chooses to embrace the web browser as a platform worthy of the respect and effort its competitors have lavished on it.</p>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        Ok, CSS Variables, Service Workers and Web Components are "under consideration" by IE.\n        <a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',frontmatter:{title:"Is Safari being left behind?",keywords:null,category:"platform",date:"2015-06-10T04:03:41+00:00",path:"/2015/06/10/is-safari-being-left-behind",layout:"post",hideFooter:null},fields:{slug:"/2015/06/10/is-safari-being-left-behind"}}},pathContext:{slug:"/2015/06/10/is-safari-being-left-behind",relatedPosts:[{path:"/2013/06/11/evergreen-browsers",data:{title:"Evergreen Browsers",path:"/2013/06/11/evergreen-browsers",description:"A look at the future of browsers",date:"2013-06-11T18:45:00+00:00"}},{path:"/2014/08/07/component-based-development",data:{title:"Component Based Development",path:"/2014/08/07/component-based-development",description:"Exploring the Web Components spec, and the future of web architecture",date:"2014-08-07T11:30:00+00:00"}},{path:"/2014/08/28/custom-elements-by-example",data:{title:"Custom Elements By Example",path:"/2014/08/28/custom-elements-by-example",description:"Explaining Custom Elements and the Web Components spec",date:"2014-08-28T12:33:00+00:00"}}]}}}});
//# sourceMappingURL=path---2015-06-10-is-safari-being-left-behind-9fc469cdb4904d2b6e5f.js.map