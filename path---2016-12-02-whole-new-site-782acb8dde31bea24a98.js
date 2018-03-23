webpackJsonp([0xf3f47a76220e],{708:function(e,t){e.exports={data:{markdownRemark:{html:'<p>After 2.5 years of stability, this week I moved benmccormick.org to a new platform and overhauled the look and feel. Although most readers have seen the site remain relatively stable, this is actually the 5th major revision of the site since it was first created, so this seems like a good time for a quick trip down memory lane.</p>\n<p>I first started it as a Django app, wanting to challenge myself to build a blog.  That was so short-lived that the way-back machine never even registered it, and I don’t have any evidence that it ever existed (thankfully).  In December 2012, I moved the blog over to <a href="http://octopress.org/">Octopress</a> a static site generator based on Ruby.  I started out using a very nice stock template:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-e1722.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.70347003154574%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABdElEQVQoz2WQ3WrCQBCF80IFxbZqMSZRmhgStXrX1ykUCi21VPpYXoi9U/yJ1kQLZvOvN6UnO1Ui/QjDZHbPnpkRbqTbUkWpKOrFZfnh8WkymQwGg+Fw+HlkNBpNp9PlcrlYLObz+Ww2G4/HuGZZliDVtTtdN3Q9X6q+vn8Evo9Ltm0HAVI/4MRxnCRJGIZUZIwhoiKINfW+0+6azdy1+NzrJ0m8Xq8dx7E5yBG/OGsO1bfbLd4SZM1sNDua2b2q1F56fY8xNAlz9AkB4mq1sjhLDuUoRlEkSKohq2at0SqUZYijIICd53k+55RQTlDnqbOiGpJq4ssX07Z/DoeQsf1+j5Fo1JgDn/ic1Fmu61WtpTTahaIIZ7xKHdKQGJ72hEiG4JuTisW6jk9WjRwXex7DwBiJpoV+s9lgQw4Hv3gUdVTSto9ik8Tohs5otyQgzSnShazznxjbxgG2wjK4rpvNiX/itz4O0WP2EvLdbueegyLEv6Yt+yV2ukA/AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="oldsite1" title="" src="/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-d766e.png" srcset="/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-a6b6e.png 143w,\n/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-8e488.png 285w,\n/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-d766e.png 570w,\n/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-13239.png 855w,\n/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-cab6d.png 1140w,\n/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-71f14.png 1710w,\n/static/oldsite1-3e407b021bfafbf89ce80f1734dc02a7-e1722.png 2536w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>and then shortly switched to a version that I mostly did myself based off of the default octopress theme.  This was one of my first attempts to design anything from scratch, and was not particularly pretty:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-2c42d.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 46.5742251223491%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAzklEQVQoz42RyQ6DMAxE+f+PQ5ygzY2tJFAgCWtYO00lSFFpOwcrkefZlm2thuq6rqpKCNE0Tdu2eCdJkmrleY4YhqFSavNbJoxE13WtFiHEdV3HcWzb9n1/qzuO4wd4nudlWbZv3/cohBEQp2lC6mUwbTsMxzAMJn8YatSCB/wRRiv0obmIs/J250JWg1LPLifl3uAg8D3Pu1xJTFnCUkqplHL9qh3GPqMoYoxhNViP1CqKAkv6F8Y9OOdlWXItPACfTb7DuESWZeYlfuoB28MMHM4MfTYAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="oldsite2" title="" src="/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-d766e.png" srcset="/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-a6b6e.png 143w,\n/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-8e488.png 285w,\n/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-d766e.png 570w,\n/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-13239.png 855w,\n/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-cab6d.png 1140w,\n/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-71f14.png 1710w,\n/static/oldsite2-eb6c891f1d94f0af42f4885cac57a5df-2c42d.png 2452w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>I enjoyed Octopress, but spent a lot of time messing around with it (and struggling through the unfamiliar ruby ecosystem), and not a lot of time writing.  So in the spring of 2014 I decided I wanted to switch to a blogging platform where I could write, rather than messing with code.  So I moved my blog to <a href="https://ghost.org/">Ghost</a>, lightly modified a public theme, and began writing about Vim.  It was around this time (2 years and 40 articles in) that I began to attract more readers, and also began to focus more on higher quality technical articles:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-dcb72.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.5593087195601%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABq0lEQVQoz22SO48BYRSGv+1F9IpNJBK/QUQiMYlGKSQKUUoUEp1eITQqCZH4BRqFTqkUlSAGwdp1Ges2Zhg7s++eb9kp9ilOTuY7t/ecYaIoDgaDXq83mUxqtVo+nz8ej2/EcDgUifF43O/3EQb/g3gnGLztdrtcLvf7fb1er1QqhmF8EXher9er1QoWYYiBoyjK9Xo1CDYajVAPnafTabVaLRaLPFnTNISiLkpIkiTL8uVyOZ/Pp9MJo93vd13XWbfb7XQ67XYbNpfLZbNZJOuE8cDsm2GtVqvZbGLgRqORTqdTqRQPvd1us9lsPp8vFounTrQ112KFQgHTlkqlcrkcj8djsZiqqjwZQrAqWOTIBD5C0V9yMBj0+XyhUCiRSPj9fkEQDocDHqBqQ3wSu90OG5UIOKjyk5zJZKLRaDgcTiaTgUDA4/FgPL4zlcButQe84bM5s9lsFovF5XJ5vV632x2JRHAbLgxXQTKWjCn+XxiSGWMvBByr1Yrj8bGxLfwqsNCMKgqBWrC/nV8Jp9OJ5na73eFw4Ox4wJAQbP6foBbrgH7cGZMj5huXzBWA59G75QAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="oldsite3" title="" src="/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-d766e.png" srcset="/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-a6b6e.png 143w,\n/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-8e488.png 285w,\n/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-d766e.png 570w,\n/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-13239.png 855w,\n/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-cab6d.png 1140w,\n/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-71f14.png 1710w,\n/static/oldsite3-61d53315ea3c4ee2617d02f32ce50bff-dcb72.png 2546w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>About a year after that I re-introduced some color to the blog after a prolonged absence. The black and white sidebar was traded for a colorful green, and a I began using a mix of blue and red for text emphasis. I also began to focus on making it more clear how to subscribe to the blog, and highlighted the more popular content:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-5ec97.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.062992125984245%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABp0lEQVQoz22SyU7CUBSG+w4uBBMVNXGIoAwRLZMUWsZSQI0Rg7jQjS5cOex8AeNenxA30Pbe2+G2tnhaDCDxz03aNOfr+c9/LhMqcutCYUMorvHcYoYNS3WEses4hmGOZuT+J2a/2eCuu/leN315AfxeUyS6jhDq97++ZzT3o/ELs10tJ0/PEi0xLpXibSl20kSEUEqBVxRVlmWMsWH+cWHbtmVZHszf9Z4+XrP3j9zL54pQ3hUrWNNMwxgMBsOhPJRlVVVNEz4Ymi9w4TjO2AuTu+ncvT+nbh/Yh7dlXgg3qgDb9resIBURhAkm2lBREcKWL8fXLwy2N3hhKZMMsNFA5igiiVgjUASxYUzAPHSDIR3HndiepMAkTlu5bifEcyuFfDCXjkh16ExNqkJjNG6suSN3duYpvFkpQcI7tfJqMR/MpsawRalnFGMYGBMCPucCA3kwVB+en0HIsO2AB4vYT1v2Rbz57clu5uFAlgUGDnheYA+2amXPNqWQNbTVdR1yHv3VNLBoW4q2vBNrN+F6HV9dKgjBbhQFnsiyKJRCfrP3ZNL5ByEf9d3AflHPAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="oldsite4" title="" src="/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-d766e.png" srcset="/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-a6b6e.png 143w,\n/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-8e488.png 285w,\n/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-d766e.png 570w,\n/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-13239.png 855w,\n/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-cab6d.png 1140w,\n/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-71f14.png 1710w,\n/static/oldsite4-3d778ab26a3f2e19e1b36fad35576d10-5ec97.png 2540w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Ghost was a great blogging platform, but this fall I decided it was time to move off of it.  I was interested in trying some things that didn’t fit into the platform’s more structured approach, and wanted to move the blog to a place where it was no longer losing me money to run.  So I decided to take another look at the static site generator landscape. I looked through the top 12 or so options on <a href="https://www.staticgen.com/">StaticGen</a> and <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> quickly stood out.  It uses concepts I’m extremely comfortable with (built with React and Webpack!), produces fast server-rendered SPA style sites, and dictates almost nothing about how the site is built.  </p>\n<p>The site is now built with Gatsby and hosted on Github pages.  I’ve ditched the noisy green sidebar in favor of a simpler text-focused experience and added a small ad at the top of the page to offset some of the costs associated with the blog.  I’m planning on iterating on the design (better organizing and exposing older content, making it simpler to subscribe to the blog, and making it easier for me to add rich content/code examples to posts without relying on 3rd party services), but for right now I’m excited to get back to focusing on writing.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/current_site-c595f859eaea97eb4f04097307b2f2ce-37443.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 83.81502890173411%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB30lEQVQ4y31TSY4UMRDsHyFxRTwITohXIC7wCS5Ic0CaPyAeQLMeqG71NrV4qfKWXoqwq3umuns0qVTJdjkyMsL2IoTgyGuXU1lPPjyE93Ech2XVfvna3X4bfq6cJ6u1NYaI8H+RYpCadoLuJG25Y4piBKqAHaVx3L7/vHzx5vuzV9W7T91m3f7+w1YrPQwxxkVhIGc0ilqjjDFKqaEEFgDefbj58fLt8vnr9ccbqftmtz/s98METilxLpqmYYzVdcM5L9VyeDSQkqu5+rXWfzeuFT4GcjlObacE2L+q2my31Wq1PxxiSgGtI0tgCuU5sY5pQMEUy9/cdiQatUlaj8ZEpUhK6nvi3BuTS/js3MmGAFF931trCzhGMsYx7oR0QjjOJzDGXql7/pP9Xmt9BsZCphrA2R9ppxyGULTNwXD0EuzajkA7fbvOMYa2MfDYdE6OtoUQKHECK+3qGk0iCVk48+CKGYG2z8HGgjCTYCt44OoxY7gKMEspZ2BtiItMKOTRWO/DYzFpBn6m2VooBHk2mbHsPKa4LY+VQNsXzDCszSaB+cnAxcLFhGaUKHc7azYFKbLDhRM+5zNjuR3v3Nxw4C81ZzB2A9n3k7gnyGfgYgPK58RjuDqba8/uH8Z/MfnSZnLavn8AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="current site" title="" src="/static/current_site-c595f859eaea97eb4f04097307b2f2ce-d766e.png" srcset="/static/current_site-c595f859eaea97eb4f04097307b2f2ce-a6b6e.png 143w,\n/static/current_site-c595f859eaea97eb4f04097307b2f2ce-8e488.png 285w,\n/static/current_site-c595f859eaea97eb4f04097307b2f2ce-d766e.png 570w,\n/static/current_site-c595f859eaea97eb4f04097307b2f2ce-13239.png 855w,\n/static/current_site-c595f859eaea97eb4f04097307b2f2ce-cab6d.png 1140w,\n/static/current_site-c595f859eaea97eb4f04097307b2f2ce-71f14.png 1710w,\n/static/current_site-c595f859eaea97eb4f04097307b2f2ce-37443.png 1730w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Like all software, as this blog has evolved, I’m sure not all of the progress has been forward.  If you see any issues with the new site, feedback and bugfixes are welcome.  Feel free to hit me up on <a href="https://twitter.com/ben336">twitter</a>, comment on this post, or open an issue on the site’s <a href="https://github.com/benmccormick/benmccormickorg/issues">github repo</a>.  Thank you to everyone who has read and supported this site over the past several years.</p>\n<h3>More Resources</h3>\n<ul>\n<li>If you’re interested in <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> this post on <a href="https://blog.scottnonnenberg.com/practical-gatsby-js/">Practical Gatsby.js</a> by Scott Nonnenberg is excellent.  Its not a how-to, but more of a series of examples of how he deviated from the base Gatsby blog (and why).  I found it really helpful when brainstorming ideas for this site.</li>\n</ul>',frontmatter:{title:"A whole new site",keywords:"Gatsby blog ghost benmccormick.org",category:"meta",date:"2016-12-02T16:00:00+00:00",path:"/2016/12/02/whole-new-site/",layout:"post",hideFooter:null},fields:{slug:"/2016/12/02/whole-new-site/"}}},pathContext:{slug:"/2016/12/02/whole-new-site/",relatedPosts:[{path:"/2012/12/29/cleaning-my-digital-house",data:{title:"Cleaning My Digital House",path:"/2012/12/29/cleaning-my-digital-house",description:"Organizing what software I use",date:"2012-12-29T01:00:00+00:00"}},{path:"/2012/10/06/it-took-a-month-to-get-sick-of-php",data:{title:"It took a month to get sick of php",path:"/2012/10/06/it-took-a-month-to-get-sick-of-php",description:"Porting my blog from Wordpress to Python",date:"2012-10-06T11:00:00+00:00"}},{path:"/2013/04/06/a-new-look",data:{title:"A New Look",path:"/2013/04/06/a-new-look",description:"A clean redesign for benmccormick.org",date:"2013-04-06T17:00:00+00:00"}}]}}}});
//# sourceMappingURL=path---2016-12-02-whole-new-site-782acb8dde31bea24a98.js.map