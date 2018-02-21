webpackJsonp([96688354625342],{730:function(e,t){e.exports={data:{markdownRemark:{html:'<p>2017 was the 5th full year of this blog, and in many ways it was the most productive.  I wrote one of the most popular things I’ve written on here, started the weekly links section (on hiatus for New Years, but will return next week), and wrote 21 full articles and 8 weekly links post, the most I’ve ever posted here in a year.  Here are some of the highlights from my blog and development this year.</p>\n<h3>Most Read Posts Published in 2017</h3>\n<ol>\n<li>\n<p><a href="https://benmccormick.org/2017/07/19/ten-things-javascript/">Ten Things A Serious JavaScript Developer Should Learn</a> - It turns out that making lists of things is a good way to get traffic.  I wonder if anybody else on the internet has figured this out?</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-cb86a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.202247191011235%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAsUlEQVQY042NwXKDMAxE+f8P67mXnAskKQYnIQbLYAx+EWR66PRSzbzRakdaFTln/k1KpEGIVUssDfFiSc2dqKzOk4GCX5X5U/ntmTESZAYNXfeAumWzPSwJ4gLrduwVUcWUNmZl2TL7vOuffnjKx3XgsxNm9b3+ED3WeILOont+WQlKYceJZggYJ5TmdnTrJ3b/5me+H46vruf8DNS9UCnlfeRUGyrruLpA9ZCDy1N4ATo/NqrBAMsOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="An analytics graph with a big spike in July when I posted my list post"\n        title=""\n        src="/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-d766e.png"\n        srcset="/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-a6b6e.png 143w,\n/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-8e488.png 285w,\n/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-d766e.png 570w,\n/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-13239.png 855w,\n/static/list_analytics-bf4aa20172b0ec0f0d0791d56219f6d6-cb86a.png 890w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>In all seriousness, I think there’s a hunger out there for clearer roadmaps for folks who are early out in their front end development career.  People are telling them to learn all the frameworks, all the tools and all the compile-to-JS languages, and everyone knows they can’t learn it all.  So even an imperfect list that can serve as a starting point for figuring that out can get some traction.  This article was my attempt to answer “what should a serious mid-level JavaScript developer have learned and be learning?“.  </p>\n</li>\n</ol>\n<ol start="2">\n<li>\n<p><a href="https://benmccormick.org/2017/07/10/how-to-follow-the-javascript-roadmap/">How To Follow The JavaScript Roadmap</a> - This post was aimed at a similar audience to the “Serious JavaScript Developer” post, but aimed to help folks who want to follow changes in the JavaScript language keep up with new developments.</p>\n</li>\n<li>\n<p><a href="https://benmccormick.org/2017/01/03/orthogonality-and-css-in-js/">Orthogonality and CSS in JS</a> - This article was an examination of the architecture tradeoffs of CSS in JS solutions, and also an examination of how people discuss “separations of concerns” in general.  If you liked this one, keep your eyes open.  I’m planning on writing more architecture level posts in 2018.</p>\n</li>\n</ol>\n<h3>Code I wrote in 2017</h3>\n<p>Most of the code I wrote this year was again for my work at Windsor Circle.  But I’ve continued to add new features to this blog, which is based on React and Gatsby, and the source code for that is available <a href="https://github.com/benmccormick/benmccormickorg">on Github</a>.</p>\n<h3>Talks I gave in 2017</h3>\n<p>This was a big speaking year for me.  I gave 3 different talks: <a href="https://www.slideshare.net/BenMcCormick/vim-survival-guide-71763917">The Vim Survival Guide</a> at Open Source 101, <a href="https://www.slideshare.net/BenMcCormick/gatsby-intro">Intro to Gatsby</a> at a local meetup group and <a href="https://www.slideshare.net/BenMcCormick/saving-time-by-testing-with-jest">Saving Time with Jest</a> at All Things Open.  I’d be interested in giving any of those talks again next year, so if you’re looking for a speaker, feel free to reach out.</p>\n<h3>Languages, Libraries, and Technologies I started using in 2017</h3>\n<ul>\n<li>\n<p><a href="https://mobx.js.org/">Mobx</a> is a JavaScript data modeling library that serves as an alternative to Redux or React state for state management.  I wrote about my <a href="https://benmccormick.org/2017/01/09/mobx-first-impressions/">first impressions</a> at the beginning of the year, but I’ve continued to use it and love it since then.</p>\n</li>\n<li>\n<p><a href="https://yarnpkg.com/en/">Yarn</a> was a nice upgrade over npm.  My understanding is that npm has since stepped up and closed the gap here, but I’m continuing to use Yarn for now since it has taken over my projects and muscle memory.</p>\n</li>\n<li>\n<p>When I upgraded this blog to Gatsby 1.0, I had the opportunity to learn about <a href="http://graphql.org/">GraphQL</a>.  I’ve really enjoyed getting to play with it and love the GraphQL community’s dedication to providing a great developer experience.</p>\n</li>\n</ul>\n<h3>Languages and Libraries I used (more or less) every day in 2017</h3>\n<p>JavaScript (ES6), Python, React, PostgreSQL, Backbone (<strong>sigh</strong>), lodash, MobX, Jest</p>\n<h3>Languages and Libraries I want to try in 2018</h3>\n<p><a href="https://github.com/FormidableLabs/victory">Victory</a>, Rust, and Pandas/other python data analysis libraries <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup></p>\n<h3>Blogs I started following in 2017</h3>\n<p><a href="http://blog.isquaredsoftware.com/">Mark Erikson’s Dev blog</a></p>\n<h3>Blogs I read every post from in 2017</h3>\n<p><a href="http://randsinrepose.com/">Rands In Repose</a>, <a href="https://stratechery.com/">Stratechery</a>, <a href="https://daringfireball.net/">Daring Fireball</a>, <a href="http://purposedworking.org/">purposedworking.org</a>, <a href="https://wynnnetherland.com/">wynnnetherland.com</a></p>\n<h3>Podcasts I started listening to in 2017</h3>\n<ul>\n<li>\n<p><a href="https://www.npr.org/sections/money/">Planet Money</a> - A long running NPR podcast about money, the economy, and the unexpected ways they affect our everyday lives</p>\n</li>\n<li>\n<p><a href="https://www.theallusionist.org/">The Allusionist</a> - A great podcast on the crazy history behind different words in the English language.</p>\n</li>\n</ul>\n<h3>Software I started using in 2017</h3>\n<ul>\n<li><a href="http://www.bear-writer.com/">Bear</a> - I mentioned I was testing this out at the end of last year, but it has become my go-to notes application, and I would recommend it to anyone who wants a stylish notes app in the middle ground between Apple Notes and Evernote (and who uses Apple products).</li>\n</ul>\n<h3>Software I used (nearly) every day in 2017</h3>\n<p>MacOS/iOS, Google Search, Chrome/Safari/Firefox, GMail/MailPlane 3, Twitter/Tweetbot, Feedbin/Reeder, Instapaper, iMessage, Slack, Trello, 1Password, Atom/Vim, iTerm, Fish Shell, Bitbucket, Fantastical, Spotify, Bear, Annotate, Dash</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Yes this is basically the same list as last year.  ¯\\_(ツ)_/¯ I mostly learn tech as I have need for it, and it was a very “nose to the grindstone” year focused on improving existing codebases this year</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{title:"2017 Roundup",keywords:null,category:"meta",date:"2017/12/30",path:"/2017/12/30/2017-roundup",layout:"post",hideFooter:null},fields:{slug:"/2017/12/30/2017-roundup"}}},pathContext:{slug:"/2017/12/30/2017-roundup",relatedPosts:[{path:"/2017/07/19/ten-things-javascript/",data:{title:"Ten Things A Serious JavaScript Developer Should Learn",path:"/2017/07/19/ten-things-javascript/",description:"Some of the important things to pick up in the JS world",date:"2017-07-19T04:00:00+00:00"}},{path:"/2017/07/24/my-favorite-interview-question/",data:{title:"My Favorite Interview Question",path:"/2017/07/24/my-favorite-interview-question/",description:"How does the Internet work anyway?",date:"2017-07-24T11:45:00+00:00"}},{path:"/2017/10/29/adequate-talks/",data:{title:"How To Give A Perfectly Adequate Conference Talk",path:"/2017/10/29/adequate-talks/",description:"Tips for making your talk both useful and rewarding",date:"2017-10-30T02:00:00+00:00"}}]}}}});
//# sourceMappingURL=path---2017-12-30-2017-roundup-46cf69d0b42be273c582.js.map