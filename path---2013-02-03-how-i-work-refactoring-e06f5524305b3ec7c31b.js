webpackJsonp([0xcf13a91abdee],{712:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I recently took the time to re-examine a section of code that I’ve worked on as part of a team for the last year.  Looking at it with fresh eyes I saw plenty of room for improvement.  The issues weren’t the result of one bad checkin or poor decision.  Instead they were the result of “death by a thousand cuts”, a series of small decisions made by different people that were individually justifiable but eventually resulted in brittle, hard to maintain code.</p>\n<p>Over the last few days I’ve been taking some time to refactor the code.  Doing so made me think about what questions I should be asking while refactoring code.  Here are a few of the things I look for when I’m working to clean up code:</p>\n<h4>Does each function do only one thing?</h4>\n<p>This has been the hardest bad habit for me to break.  I have a natural inclination when adding new functionality to try to toss it into a related function.  This seems great as first, but its how you go from a function that “removes special characters from a string”, to one that “removes extra characters from a string”, to one that “processes strings”, and finally to “the string function” that takes a string and returns a new output determined by a glob of unreadable code that nobody understands and everyone is scared to touch.</p>\n<p>Functions that perform only one purpose are easier to understand, easier to use, easier to test, and easier to port to new environments.  When functions start to perform multiple purposes it becomes harder to maintain <a href="http://en.wikipedia.org/wiki/Don&#x27;t_repeat_yourself">DRY</a> principles.  If one function performs actions A&#x26;B, another performs B&#x26;C, and a 3rd one performs A&#x26;C, you have to duplicate each action twice, adding code bloat and opening up the risk of inconsistent changes across methods.</p>\n<h4>Does each object/concept have a consistent naming convention throughout the system?</h4>\n<p>One source of frustration I’ve had when debugging the code for my project has been the fact that different developers have started different naming conventions for objects within the code.  This results in a single object being called chartObj within function, chart within another, params in another place, and chartData in another instance.  Sometimes these different references even pop up within the same function.  This inconsistency makes it much harder for an unfamiliar developer to understand how the system functions.  This again can lead to duplicating information, if a developer modifying a function or class doesn’t realize they already have the information they need.</p>\n<h4>What assumptions have I made?</h4>\n<p>One thing that can easily add confusion within a system is making undocumented assumptions.  One common assumption thats made for javascript code is that it will always run in a browser, or have access to a specific library such as jQuery.  While some of these assumptions are necessary, its worthwhile documenting them in some way, either in the comments or through code checks that through exceptions if the assumptions are violated.</p>\n<p>This is important because requirements change.  The particular code that I’m working with was originally intended to run only in the browser, without any thought of server-side use.  When a requirement made it necessary to run it with PhantomJS, plenty of changes were needed.  This isn’t necessarily problematic, because this particular change was not likely when the original code was made, and the adaptation was not hard.  More problematic was the fact that developers not directly involved with the phantomJS work still were acting under the assumption that the code would run within a browser environment.</p>\n<p>These three questions are obviously not the only things that can be wrong in code, but in my experience they’re especially treacherous because they can come in slowly and then make every future change harder.</p>\n<hr>\n<h3>Further Reading</h3>\n<ul>\n<li><a href="http://www.codinghorror.com/blog/2007/03/curlys-law-do-one-thing.html">Coding Horror: Curly’s Law</a> a readable explanation of DRY principles</li>\n<li><a href="http://refactoring.com/">Refactoring.com</a>- A nice collection of resources on refactoring by Martin Fowler, who also has written a well regarded <a href="http://www.amazon.com/gp/product/0201485672/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0201485672&linkCode=as2&tag=productjavasc-20">book</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=productjavasc-20&amp;l=as2&amp;o=1&amp;a=0201485672" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;">\non refactoring.</li>\n</ul>',frontmatter:{title:"How I Work:  Refactoring",keywords:null,category:"software-productivity",date:"2013-02-03T21:00:00+00:00",path:"/2013/02/03/how-i-work-refactoring",layout:"post",hideFooter:null},fields:{slug:"/2013/02/03/how-i-work-refactoring"}}},pathContext:{slug:"/2013/02/03/how-i-work-refactoring",relatedPosts:[{path:"/2013/09/10/blendconf-2013-takeaways-from-a-very-human-tech-conference",data:{title:"BlendConf 2013: Takeaways From A Very Human Tech Conference",path:"/2013/09/10/blendconf-2013-takeaways-from-a-very-human-tech-conference",description:"My takeaways from BlendConf",date:"2013-09-10T20:00:00+00:00"}},{path:"/2013/02/03/how-i-work-refactoring",data:{title:"How I Work:  Refactoring",path:"/2013/02/03/how-i-work-refactoring",description:"Describing the process that goes behind refactoring code",date:"2013-02-03T21:00:00+00:00"}},{path:"/2016/12/11/readable-code-audience",data:{title:"Readable code: Know your audience ",path:"/2016/12/11/readable-code-audience",description:"A quick observation about what it means to write readable code",date:"2016-12-12T04:00:00+00:00"}}]}}}});
//# sourceMappingURL=path---2013-02-03-how-i-work-refactoring-e06f5524305b3ec7c31b.js.map