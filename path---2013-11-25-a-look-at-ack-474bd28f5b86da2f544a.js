webpackJsonp([47856150909993],{657:function(e,a){e.exports={data:{markdownRemark:{html:'<p>Do you spend a lot of time searching your projects for a specific piece of code?  Frustrated by grep’s weird syntax or slow IDE search tools?  <a href="http://beyondgrep.com/">Ack</a> is a tool like grep designed for programmers.  I use it for searching my source code to track down sections of code or look for occurences of a variable or reference.  It’s a simple open-source tool that does one job well, and does it with blazing speed.</p>\n<p>Ack performs a subset of grep’s functionality, optimizing for the programmer’s use case. In the simplest usage it will allow you to enter an expression, and will search files in the current directory/subdirectory for it, ignoring version control artifacts like .svn and .git files.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># search all files in current directory recursively\n# to see if they contain "foobar"\nack foobar</code></pre>\n      </div>\n<p>Ack then spits out nicely formatted output with the full file paths and line numbers of each occurence. For instance here is the output of searching the directory containing my blog posts for references to Microsoft.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ack_msft-6822157d461dd85024f1a6ecb0089337-81e03.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.433772269558474%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABc0lEQVQY0z3QS2+bQBQFYNZVmjiNTbAdDMVgFwIJMM87D5hhHJQqqdRVpf7/P5JBkSJ9i6Mzi3s0Qa7H0l5yNcZcIkerUcRcp0JFSK1b2LRi08mwE78E2SF+9yxuG/YlODDxwMSByy1V2NHWkE0PEYLbBlYN//Hkwd0TTykOW+abVU2/BEepj9oc9ZjJQb1CIeS6U/7aWdACeNgtE8JebjoVdjJCnr7v1QKpIAGTKZdJ91O60lj9WxTSxNxVo8nEcI/Nnox7MmzxEGET4XFHhgUetkgHR6UTUAfux0svl2KH1RbrsNd7LLHFKYV1q/ZYZAy6kfjgj/s5/juCTNgY5oi4BC4x91wKUwL2gVn6MrBZ+1EJuMb6PBR6ecrkxZcHboOY6cbK6Z3kSqdMrGpY1eLTdcW/V+BdP/KrCr6VcFUu2fc3NdzUIiB/9Pv/dvz7jN76139NPePyhTzOtJ7ZaUKnqffOEzr7YPvCotxg7+RoMZEPupZanGThrrwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ack usage example"\n        title=""\n        src="/static/ack_msft-6822157d461dd85024f1a6ecb0089337-d766e.png"\n        srcset="/static/ack_msft-6822157d461dd85024f1a6ecb0089337-a6b6e.png 143w,\n/static/ack_msft-6822157d461dd85024f1a6ecb0089337-8e488.png 285w,\n/static/ack_msft-6822157d461dd85024f1a6ecb0089337-d766e.png 570w,\n/static/ack_msft-6822157d461dd85024f1a6ecb0089337-13239.png 855w,\n/static/ack_msft-6822157d461dd85024f1a6ecb0089337-cab6d.png 1140w,\n/static/ack_msft-6822157d461dd85024f1a6ecb0089337-81e03.png 1291w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>These are very simple examples.  Because of ack’s sensible defaults and focused design, these basic commands cover about 80% of what I’m looking for from a code search tool. But for those who want to do a bit more, ack can be much more powerful.  Because ack is written in perl, any perl-compatible regular expression can be used to search your files.  Ack provides plenty of options for formatting the output and it’s also very easy to filter by filetype.</p>\n<p>For instance, I have a small side project where I’m creating an event signup site with the front end code written in CoffeeScript.  If I want to see which files I’ve referenced events in without necessarily seeing all the details, I can use the <code>-l</code> flag to only show file names.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ack_signup-60dba8e1289abe5c1cd1d144a95daad7-7c4ee.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.41379310344827%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVQoz3VTi1KjMBTlB1YsqN1Va4UW+sBaissjCRBCeLT4///jCdDtdkZnzpy5GXJu7jkJ2lvFXc78trRYOEsi88DMA7kP2F3AJnti7Al44vf8rx6W74m2LrpF1q54Z7HGYrVFpc2qORHmO9G96PZtQHwurqC5vF1k9TJvVsXRyVE3qOeknAYpeqtNu1jfRbriEbdDAbHDWzutX6mcxcVzj1kiwI8h188n6D9AW2bNIq2hn8UCemMX33ih+naZOZrs4m+hrcUJmqeQvyQCZ04/0ocDxczTAwMeAjZFeIjnW/G2RGDNK6vgeSNOYGArP9eIgLer4oSmxmD+2oUSe7JDQnYK8WlTdq4StxvRrfgRdqAHP4a56ZPRzhkq7a3snJ/EWe1yNcifv9n/ystVQYDMLFZBBv/YrQSKW0yEy7v36S8vvBlxnTYaW0zOaYl9A3p96+YNmmKJOPvYUuDOp1eBKXFaQaycM4ndSAtW4QVjq2KsGyRn7sll+F7c2Wlj0drJjzar0cuTnzh5XajHo94PkXhwcyqfwlyHcy8a0Y+dLnMKXgvmcPaM50WE4kT8jnIzoMOfYPiXX8IYlvvkCyQdmuRBCaSLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="filenames only"\n        title=""\n        src="/static/ack_signup-60dba8e1289abe5c1cd1d144a95daad7-d766e.png"\n        srcset="/static/ack_signup-60dba8e1289abe5c1cd1d144a95daad7-a6b6e.png 143w,\n/static/ack_signup-60dba8e1289abe5c1cd1d144a95daad7-8e488.png 285w,\n/static/ack_signup-60dba8e1289abe5c1cd1d144a95daad7-d766e.png 570w,\n/static/ack_signup-60dba8e1289abe5c1cd1d144a95daad7-7c4ee.png 725w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Obviously this search brings up several types of files. Along with the CoffeeScript files I’m interested in, ack shows some html and css files, as well as a random server side file.  It also shows the generated JavaScript files.  I could get rid of these files by specifying a different root directory, but instead I’m going to show ack’s  smart filtering by filetype.  To search only coffeescript files, I just need to add the <code>--coffee</code> flag to see all CoffeeScript matches.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-bc4cb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.685589519650655%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhklEQVQoz3WRTU/bQBCGcwaatfNh1ziEIjWyHHvtZL9m1157vcRJadNScuCE+P9/gw0EQQ+VXo3mMM/MOzODpFN5r9nP5kYrv4RhqbxSfsHVEKuLXKICzjOFMHgFeCX4pRo5rU4aTAlcCfhxqG//VImW3a/1yvJMs7QWZcsjWtOORkwHpJ6sKi8XKBcu+hicBmepQBn4a7s/KLrRdq/FtpkxiCmfMz4q4Jvg41L6hRy5+e/YCQ4ZjQWjPUkauFYwJoCcWyy9U4W4WMIw4+h15ps+YLdPuIb7B0J228TuA+IctjNhnZfdb4KN8ooK5f+Bz1PXWAYlv2Qm7bZiZ+SdXdr++Yn/fWxSs/GwdLCH37B/bc8F/V7x6RoumbpRityyrOExFbkmIakQPh0JZcd45iYtPx0sqWl/sEm3XbS9vbdw106IibgJmP3Kmrm0sTAzYa5eE7KpF7pzq7lDHuGF6SIO11LOQMWiibmeEh3xNmQ6pDqgjSudkto1cgk2Yi71hOjx6vjwF8BYYIPabUxKAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ack filetype filtering"\n        title=""\n        src="/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-d766e.png"\n        srcset="/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-a6b6e.png 143w,\n/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-8e488.png 285w,\n/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-d766e.png 570w,\n/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-13239.png 855w,\n/static/ack_event-452a97bdd94106ace4c6ae680b2f0068-bc4cb.png 916w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Its also easy to add multiple filetype flags in order to search several filetypes, and you can even define custom filetype flags with an .ackrc file.  These also let you specify default options and set certain directories to be ignored on a global or per-project basis.</p>\n<h4>Other Options</h4>\n<p>Ack is hardly the only code search tool out there.  It’s meant to improve on grep by focusing on the programmer’s use cases, but there are <del>many</del> some situations where grep is still a good option.  Ack is situationally optimized for searching code, <del>and doesn’t work as well for filtering piped output</del>. Grep is also installed on many remote servers where you won’t have access to ack.  So ack makes a great complement to grep, moreso than a replacement.</p>\n<p><em>Update: You can totally use Ack to filter piped output.  Another reason to use grep gone.</em></p>\n<p>In terms of direct competition, <a href="https://github.com/ggreer/the_silver_searcher">ag</a> is an attempt to improve on ack, mostly in terms of speed. Ag uses various tricks to optimize speed performance for code search, using an ack compatible syntax. Since its written in C rather than perl, it is indeed significantly faster.  I personally am more comfortable with ack.  Its more mature, has better documentation, and has always been fast enough for me.</p>\n<p><del>Ag was not updated to support ack 2’s filetype filtering, and generally seems to have focused on speed over all else.</del>  It also has dependencies that I’ve found are a problem on old operating systems. Ack only depends on perl, and is thus very portable, even to Windows systems.  Still, if you find ack to be slow on your code base, or just like knowing you’re doing everything as fast as possible, ag is a great alternative.</p>\n<p><em>Update: As of version 0.22.0 ag supports ack’s filetype syntax, but does not allow you to define custom file types, a very useful ack feature.</em></p>\n<h4>Summary</h4>\n<p>If you’ve been using grep or slow GUI tools to search your source code, you can do better. Ack is fast, easy to use, and optimized for programmers.  It’s also free, open-source code you can use without cost or licensing worries.  If you want to go even faster, consider using ag.  Just make sure you’re using a tool that was built for the work you’re doing.</p>',frontmatter:{title:"A look at Ack",keywords:null,category:"tools",date:"2013-11-25T23:50:00+00:00",path:"/2013/11/25/a-look-at-ack",layout:"post",hideFooter:null},fields:{slug:"/2013/11/25/a-look-at-ack"}}},pathContext:{slug:"/2013/11/25/a-look-at-ack",relatedPosts:[{path:"/2012/11/08/shutdown-tiles-for-windows-8-start-screen",data:{title:"Shutdown Tiles for Windows 8 Start Screen",path:"/2012/11/08/shutdown-tiles-for-windows-8-start-screen",description:"A solve for shutting down Windows 8 easily",date:"2012-11-08T12:00:00+00:00"}},{path:"/2012/12/30/sublime-text-for-javascript-keyboard-shortcuts",data:{title:"Sublime Text For Javascript: Keyboard Shortcuts",path:"/2012/12/30/sublime-text-for-javascript-keyboard-shortcuts",description:"Helpful keyboard shortcuts for JS developers",date:"2012-12-30T21:00:00+00:00"}},{path:"/2012/11/07/sync-multiple-google-calendars-in-windows-8",data:{title:"Sync Multiple Google Calendars in Windows 8",path:"/2012/11/07/sync-multiple-google-calendars-in-windows-8",description:"A helpful tip for using Google Calendar in Windows 8",date:"2012-11-07T12:00:00+00:00"}}]}}}});
//# sourceMappingURL=path---2013-11-25-a-look-at-ack-474bd28f5b86da2f544a.js.map