webpackJsonp([0x6539c1db515a],{667:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Do you know a <em>Problem Solver</em>?  They’re the ones who can take a crazy, vague bug report from a client and come up with a fix in an hour.  The ones who everybody else asks for help when the project deadline is creeping up.  The ones who get shipped out to the client site when the field team is out of their depth.  In school they were the person you called at 1AM the night before your project was due, hoping for a miracle.</p>\n<p>I’m guessing you can think of somebody.  Problem solving is a valuable gift, something that stands out.  But the truth is, all software developers should be problem solvers.  It’s a key part of our jobs.  We just happen to call it debugging.</p>\n<p>Debugging is hard.  As developers, we’re faced with vague problem descriptions, massive code bases, and constant pressure to move our projects forward.  But you can do some great things if you’re disciplined about getting better at debugging.</p>\n<p>I’ve built up my own debugging process over the years.  It’s nothing more exciting than <em>Problem Solving 101</em>, but it’s a productive way of working that lets me get stuff fixed quickly and keep issues from happening again. It helps me fix things even when I’m not qualified to do so, and keeps maintenance work from overwhelming my ability to get things done.  If that sounds useful to you, you should probably keep reading. Here’s my process.</p>\n<h3>Step 1: Define The Problem</h3>\n<p>The need to define the problem seems like common sense, but it often gets skipped.  The first thing you need before fixing a problem is a clear definition of what the problem looks like.  That means a detailed look at 2 things:</p>\n<ol>\n<li>What is the current behavior?</li>\n<li>What should the behavior be?</li>\n</ol>\n<p>The second question often gets neglected.  At Windsor Circle, we have a system that receives product records from another system.  The data it was receiving occasionally contained blank product titles, which was not considered valid data.  I was asked to ensure that the second system would not pass invalid data.  I could of course have just decided to not pass any records that had blank product data.  Or I could have filled them with a <code>"None"</code> string, calculated a value from other attributes, or a thousand other approaches.  Since each of these would have removed the current bad behavior, I might have been able to slip them by for a while.  Instead I asked what the correct behavior should be, which led to a longer discussion and an eventual decision that we would need to handle a small set of empty titles after all.  At that point I was able to actually deal with the problem.</p>\n<h3>Step 2: Reproduce The Problem</h3>\n<p>After you define the problem, the next step is to reproduce it.  <strong>Do not skip this step.</strong>  If you can’t define and consistently reproduce a situation where the problem occurs, it will be impossible to know whether you’ve solved it.  If the issue involves a lot of specific circumstances and moving parts, or only occurs sporadically, this may be the hardest part of the whole process.  The things you want to keep in mind:</p>\n<ol>\n<li>What are the circumstances under which this occurs? Always? Only on certain browsers/OSs/hardware?  Is it a timing issue? A timezone issue? All of the above?</li>\n<li>Is there a series of actions that I can do that makes this occur every single time?</li>\n<li>Am I confident that I know all of the situations that cause this to occur?</li>\n</ol>\n<p>Answering #1 is the first step.  If you can say yes to #2 you’re in a fantastic position to proceed.  If you can say yes to #3, you need to get a lot more suspicious and cynical.  But the more confident you can be about each of these, the better equipped you’ll be going forward.</p>\n<h3>Step 3: Narrow the Scope</h3>\n<p>Now that we’ve established our problem and hopefully found a consistent path to reproduce it, we’re ready to start rooting out our problem.  </p>\n<p>The first step is to narrow the scope.  In a normal software environment, you’re likely to be dealing with a large amount of your own code, as well as 3rd party libraries and APIs, some sort of environment, and unpredictable user behavior.  That’s a lot of uncertainty and information to process.  I’ve seen developers who really try to understand the whole system before even thinking about the problem.  But in many cases that’s unrealistic.  Instead, you should be trying to get rid of as much of that information as possible by narrowing the scope of where the bug might exist.  There are 4 main ways of narrowing scope.</p>\n<h4>Prove That The Problem Is Unique To A Component</h4>\n<p>If you want to eliminate a system component from consideration, one good way is by proving that the issue is not unique to it.  This works particularly well for platform issues.  For instance, you might prove that something is not a browser-specific problem by showing that the issue occurs in all browsers.  This can give you some firm ground to stand on.  If you do expose a platform-specific issue, that can be good news too, as they tend to be better documented.</p>\n<h4>Follow The Flow</h4>\n<p>If your problem is a data issue (and many issues are), you can also narrow the scope by following the flow of data through your application.  There are 2 main ways to do this.  One is by starting at the beginning of the flow, where the data initially comes into the system, and follow it through, looking to see where things go wrong. You could also start at the end with the incorrect output and try to trace back and see where it came from.  </p>\n<p>A good debugging tool is a great asset here.  There may be times when you’re forced to work without one though (for example, working in an environment you don’t control or a domain-specific language without adequate tooling).  In that case you can get by with log statements, or even changing the code to output a result early.  Regardless, what you want is clear evidence that data was good at a certain point, or already bad at another.  This allows you to eliminate that code from consideration and focus in on the code before it.</p>\n<h4>Follow The History</h4>\n<p>If you know this problem was introduced relatively recently, you can approach it by figuring out what changed.  Version control systems in particular provide great tools for this type of analysis.  If you know that the change was introduced within a set period of time, that provides an additional dimension from which you can narrow the scope and filter ideas.</p>\n<h3>Step 4: Make An Educated Guess</h3>\n<p>Now it’s time to make a guess at where the problem may be.  It’s important for this to be an <strong>educated</strong> guess.  You don’t want to check code at random.  Your starting point should come from your past experience with similar issues, or be the result of research into the problem. I can’t overstate how important research can be. It’s always worth starting with a quick Google search, since it might save you hours of time looking on your own.  Once you’ve narrowed the scope a bit, you can revisit your research, looking specifically for known issues with a specific component for instance.  Your guesses also can be a follow-up to new information from Step #5.  Despite the ordering I give here, debugging is never a completely linear process. You need to have all of these tools in your toolbox.  Experience will help you know which to use.</p>\n<h3>Step 5: Understand The Behavior</h3>\n<p>If you’ve managed to isolate the unwanted behavior a bit and have a guess where the problem might be, now’s the time to read more deeply into the code.  What is actually happening in there?  Does the logic of the code match your understanding of its purpose?  Do you see any red flags or danger signs?</p>\n<p>I once interviewed a candidate for a programming job who told me he didn’t read code very much while debugging.  Instead he made changes to observe the new behavior and kept fiddling until the output worked the way he wanted.  While that might work for aligning text on a Wordpress site, you simply can’t get away with that in a complex application.  Reading and understanding code quickly is a skill, but it’s one you must develop if you want to be a productive developer.</p>\n<h3>Step 6: Repeat Steps 3-5 until you have a thesis</h3>\n<p>If you’ve narrowed your scope and read some code, you might have an idea about what you think the problem is and how to solve it.  If you do, then proceed to step #6.  If not, take what you’ve learned and use it to loop back to step #3, to reduce the scope even more.</p>\n<h3>Step 7: Test your Thesis</h3>\n<p>If you think you have a handle on the problem, now’s the time to test it.  There are a few ways to do that.  One obvious way is to apply a fix and see if the problem goes away.  But if the fix would be expensive in time, money or complexity or if you’re afraid of treating the symptoms rather than the disease, you can also look into creating a simpler test case.  </p>\n<p>Earlier this month I encountered an issue where a <a href="http://handlebarsjs.com/">handlebars</a> template was failing to render correctly occasionally.  After digging in and narrowing the scope, I determined that the issue occurred only on Chrome, and seemed to happen randomly after a few renders.  I was able to create a <a href="http://jsfiddle.net/w2gtm3yx/1/">very simple test case</a> that reproduced the problem in a jsFiddle. I didn’t use any of my own data. Instead I just created the simplest test that I expected to fail.  And it did.  That gave me confidence that the issue was in the Handlebars-Chrome interaction, and I was able to find a workaround by looking through their <a href="https://github.com/wycats/handlebars.js/issues/832">issues page</a> on Github<sup id="fnref:1"><a href="#fn:1">1</a></sup>.  That type of iteration on your test cases also provides useful reference material in case the issue reoccurs.</p>\n<h3>Step 8: Repeat 3-7 until you can no longer reproduce</h3>\n<p>If your thesis turns out to be wrong, take your new knowledge and go back to step #3. It’s important to understand that this isn’t a rigidly structured process though.  This also may be time to go back and double check steps 1 &#x26; 2.  Do you really know what the right behavior is?  Have you learned anything that might change that?  If you couldn’t reproduce the issue after a change, are you sure that you’ve really fixed it?  Or were there holes in your original path to reproduce it?  A healthy amount of paranoia helps here.</p>\n<h3>Step 9: Document and future-proof</h3>\n<p>Once you’ve fixed the problem, or gotten to a point where you’re not going to continue for some reason, there’s one very important last step.  Document what you’ve learned.  If you made a change to the code that “looks wrong” but fixes the problem, leave a comment explaining it, and save it from future “code cleanups”.  If you can’t reproduce the problem consistently and it still exists, document what you learned in a bug tracker so that somebody can come back to it later.  If you isolated the problem to a 3rd party component, file a bug report and include your test case (simplified as much as possible).  If you created a useful test case, automate it or add it as a reference somewhere.  Exact processes will vary by team, but the key phrase here is “Those who don’t learn from the past are doomed to repeat it.”  Are you going to bruise this bug or bury it?  Make sure you can fix the problem quickly if it happens again. If you can do anything to keep it from coming back, do it.</p>\n<h3>The Takeaway</h3>\n<p>Real world engineering means dealing with code you don’t understand.  That might be your coworkers’ code, a 3rd party library, a buggy video driver, or your own 3 year old code. To do that effectively you need a process.  That might be mine, or one of your own, it could be formal, or just built on habit.  But make sure you have one.  The ability to dive in quickly, understand what’s going on and create a fix will set you apart.  It’s not that hard, but it takes discipline, creativity, and most of all practice.  So go ahead and start fixing something.  Maybe you’ll be the <em>Problem Solver</em> next time</p>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        Chrome 36.0.1985.143 seems to have resolved the issue.\n        <a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',frontmatter:{title:"The Debugging Toolbox",keywords:null,category:"software-productivity",date:"2014-08-19T11:35:00+00:00",path:"/2014/08/19/the-debugging-toolbox",layout:"post",hideFooter:null},fields:{slug:"/2014/08/19/the-debugging-toolbox"}}},pathContext:{slug:"/2014/08/19/the-debugging-toolbox",relatedPosts:[{path:"/2013/09/10/blendconf-2013-takeaways-from-a-very-human-tech-conference",data:{title:"BlendConf 2013: Takeaways From A Very Human Tech Conference",path:"/2013/09/10/blendconf-2013-takeaways-from-a-very-human-tech-conference",description:"My takeaways from BlendConf",date:"2013-09-10T20:00:00+00:00"}},{path:"/2013/02/03/how-i-work-refactoring",data:{title:"How I Work:  Refactoring",path:"/2013/02/03/how-i-work-refactoring",description:"Describing the process that goes behind refactoring code",date:"2013-02-03T21:00:00+00:00"}},{path:"/2014/08/19/the-debugging-toolbox",data:{title:"The Debugging Toolbox",path:"/2014/08/19/the-debugging-toolbox",description:"The process I use for solving problems",date:"2014-08-19T11:35:00+00:00"}}]}}}});
//# sourceMappingURL=path---2014-08-19-the-debugging-toolbox-8946e84447d99b838bf5.js.map