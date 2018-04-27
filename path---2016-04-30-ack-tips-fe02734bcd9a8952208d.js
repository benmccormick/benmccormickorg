webpackJsonp([85801929201614],{710:function(e,a){e.exports={data:{markdownRemark:{html:'<p><em>Last summer I briefly considered creating a separate blog focused on command line tools.  The idea is that the articles would be shorter and more practical than the longer pieces I write here.  I ended up scrapping the idea, but had written a few posts on one of my favorite command line tools Ack, so I wanted to preserve them here, as a single, longer piece, separated into 3 “tips”</em></p>\n<h3>#1: Prefer ack or ag to grep</h3>\n<p><a href="http://linux.die.net/man/1/grep">grep</a> is one of the most well known unix utilties.  If you’ve had any exposure to the command line at all, you’ve probably searched for something using grep.  grep’s standalone use is searching for content inside of files, but with Unix’s piping philosophy it is useful as a general search and filtering tool.  Originally created for Version 4 Unix 42 years ago, it has been a staple of *Nix operating systems ever since.   If you’ve been using it for even half that time, I’m sure a blog post isn’t enough to convince you to stop.  But for the rest of us, there’s an opportunity to do better.</p>\n<p><a href="http://beyondgrep.com/">ack</a> and <a href="https://github.com/ggreer/the_silver_searcher">ag</a> <sup id="fnref:1"><a href="#fn:1">1</a></sup> are similar projects with the same goal: providing a better experience than grep when searching directories of files, particularly for programmers.  The key selling points:</p>\n<ol>\n<li>Improved speed when searching through directories</li>\n<li>Ignores version control and binary files by default when searching</li>\n<li>Easy filtering by file-type</li>\n<li>A cleaner API for searching directories, without adding complexity to the single file case</li>\n</ol>\n<p>This is easiest to see by comparing commands.</p>\n<h4>Searching for “javascript” in a file</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>grep javascript foo.txt</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ack javascript foo.txt</code></pre>\n      </div>\n<h4>Searching every file in the current directory for “javascript”</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>grep -r javascript .</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ack javascript</code></pre>\n      </div>\n<h4>Searching every file in the current directory for “javascript”, excluding a .git directory</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>grep -r javascript . $(find . -type f | grep -v \'\\.git\')</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ack javascript</code></pre>\n      </div>\n<h4>Searching every HTML file in the current directory for “javascript”, excluding a .git directory</h4>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>grep -r javascript . $(find . -name \'*.html\' -or -name \'*.htm\'| grep -v \'\\.git\')</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ack --html javascript</code></pre>\n      </div>\n<p>Basically, as the complexity of what you’re trying to do increases in terms of multiple files, the overhead of using grep increases proportionately.  Because ack and ag are optimized for common use cases, they’re able to scale much better.</p>\n<h3>#2: Use Ack to get familiar with a new codebase</h3>\n<p><a href="http://beyondgrep.com/">ack</a> is an incredibly useful tool when approaching a new codebase, especially if you’re focused on a specific feature. It allows you to quickly get a view of the codebase, and then zero in on the functionality you’re interested in.  To see how this works, let’s use jQuery’s <a href="https://github.com/jquery/jquery">source repo</a> as an example, and see what happens if we want to get a look at how it implements ajax.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash get jquery"><code>❯ git clone git@github.com:jquery/jquery.git\n❯ cd jquery</code></pre>\n      </div>\n<p>We can start by trying to get a general idea of the size of the codebase.  Running <code>ack -f</code> to show all files in the directory will immediately overrun our terminal, so we can get a file count using <code>wc</code> instead</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>❯ ack -f <span class="token operator">|</span><span class="token function">wc</span> -l\n    249\n</code></pre>\n      </div>\n<p>Ok thats a good amount of files.  But how many of them are actually source files?  We can filter down to just the javascript files.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>❯ ack -f --js <span class="token operator">|</span><span class="token function">wc</span> -l\n    155\n</code></pre>\n      </div>\n<p>But thats probably still a bit high, since not all of the JavaScript files are source files.  A quick <code>ls</code> shows that we probably want to filter down to the src directory.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>❯ ack -f --js src <span class="token operator">|</span><span class="token function">wc</span> -l\n    92\n</code></pre>\n      </div>\n<p>Ok so now we’re down to 92 source files.  Still a bit much, but its probably worth printing them with <code>ack -f --js src</code> at this point to get an idea of the directory structure.  When we do that, we can see there’s an ajax folder, which is probably what we’re interested in.  To make sure we’re not missing related files, we can continue on to searching for files with ajax in the file name directly.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>❯ ack -g --js ajax src\n    src/ajax/jsonp.js\n    src/ajax/load.js\n    src/ajax/parseJSON.js\n    src/ajax/parseXML.js\n    src/ajax/script.js\n    src/ajax/var/location.js\n    src/ajax/var/nonce.js\n    src/ajax/var/rquery.js\n    src/ajax/xhr.js\n    src/ajax.js\n    src/event/ajax.js\n</code></pre>\n      </div>\n<p>That gets us down to 11 files to look at.  But we might be getting a bit greedy.  Not every file related to ajax may have ajax in the file path.  We can use the <code>-l</code> option of ack to display the list of files that contain ajax somewhere in their text.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>❯ ack --js -l ajax src\n    src/ajax/jsonp.js\n    src/ajax/load.js\n    src/ajax/script.js\n    src/ajax/xhr.js\n    src/ajax.js\n    src/event/ajax.js\n    src/jquery.js\n    src/manipulation/_evalUrl.js\n    src/serialize.js\n</code></pre>\n      </div>\n<p>Ok that adds 3 additional files with ajax references.  But its not clear that they’re relevant to jQuery’s ajax implementation, it may just be a file reference or comment.  Lets use ack to get a quick look at how ajax is referenced in those files.  This part gets a bit more complicated.  We can use ack’s <code>-v</code> option to invert our matching and find non-matching inputs, then use unix piping to filter our previous command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>❯ ack --js -l ajax src <span class="token operator">|</span>ack -v ajax\n    src/jquery.js\n    src/manipulation/_evalUrl.js\n    src/serialize.js\n</code></pre>\n      </div>\n<p>Now we can use ack’s <code>-x</code> argument to search the files piped in through standard input.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>❯ ack --js -l ajax src |ack -v ajax|ack -x ajax\n\n    src/jquery.js\n    20:     "./ajax",\n    21:     "./ajax/xhr",\n    22:     "./ajax/script",\n    23:     "./ajax/jsonp",\n    24:     "./ajax/load",\n    25:     "./event/ajax",\n\n    src/manipulation/_evalUrl.js\n    2:      "../ajax"\n    6:      return jQuery.ajax({\n    9:              // Make this explicit, since user can override this through ajaxSetup (#11264)\n\n    src/serialize.js\n    61:             traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;</code></pre>\n      </div>\n<p>So we can see pretty quickly that these files are safe to ignore in terms of understanding how ajax works in jQuery.  They’re just module loads, an actual call to the ajax method for other purposes, and settings serialization. It is useful to note that <code>src/ajax</code> is loaded into the main jQuery file first. Its probably worth looking at it as the starting point for our investigation. We’re well on our way to diving into the ajax functionality, able to focus on 11 of the 249 files in the repo immediately, already knowing how those files are loaded into the main library.</p>\n<p>This was just a simple example.  Whenever you’re spelunking into new code territory, consider using ack to get your bearings.  Things go a lot faster when you know the lay of the land in advance.</p>\n<h3>#3: Take advantage of Ack’s configurability</h3>\n<p>One of the nice things about <a href="http://beyondgrep.com/">ack</a> is the fact that it takes an <code>.ackrc</code> configuration file <sup id="fnref:2"><a href="#fn:2">2</a></sup>. These files can be scoped at a directory level, a user level or at a root level, and mirror the options available on the executable itself.  This allows you to extend and customize acks behavior in 3 primary ways.</p>\n<h4>a. Add new filetypes, and bundle existing ones</h4>\n<p>One of ack’s most useful features is the ability to add a <code>--&#x3C;filetype></code> flag to your searches to restrict your searches to a specific filetype.   ack comes with 75 builtin types including almost all common languages.  But those aren’t always good enough.  To handle obscure languages, and not so obscure syntaxes like handlebars templates, ack lets you define new filetypes.  You’re also able to modify existing filetypes to add additional file extensions to include under that filetype.  So for instance my ackrc includes these lines:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>--type-add\nhbs=hbs\n--type-add\njs=js,es6</code></pre>\n      </div>\n<p>The first 2 lines allow me to specifically search handlebars files, which are where all of the html content for my work projects is stored.  The next 2 lines include es6 files in my JavaScript searches, useful since I append JavaScript files that I intend to process with <a href="https://babeljs.io/">Babel</a> with the <code>.es6</code> extenstion.  Customizing the js extension allows me to search all of my JavaScript together.  You can also define richer types in ackrc <a href="http://beyondgrep.com/documentation/ack-2.14-man.html#defining_your_own_types">based on file names using regular expressions or direct name matching</a>.</p>\n<h4>b. Set default options</h4>\n<p>Any option that the ack executable takes can have a default set or changed in an ackrc file.  This is mainly useful for the display option.  By default ack groups matches from different files and gives the file information above each group of matches.  It also shows all output in color.  Any of those things can be disabled or changed in your ackrc file.</p>\n<h4>c. Exclude unwanted directories or files</h4>\n<p>Oftentimes there are a predictable group of files that you may want to ignore in searches.  Perhaps you have a build directory that mirrors your source code, or documentation files mingled with your source.  You can put <code>--ignore-directory</code> or <code>--ignore-file</code>.  Ignore directory takes a directory name, while ignore-file takes matches in the same format as the custom filetypes mentioned above.</p>\n<p>If you’re starting to use ack, don’t miss the chance to make your searches even more efficient by removing any rough edges with an <code>.ackrc</code>.</p>\n<h4>Installation Instructions</h4>\n<ul>\n<li><a href="http://beyondgrep.com/install/">ack</a></li>\n<li><a href="https://github.com/ggreer/the_silver_searcher#installing">ag</a></li>\n</ul>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n    <p>\n       ack came first; ag was created as a faster version of ack.  ack is written in perl, making it more portable, and has a few more configuration options.  ag is written in C and is generally faster.  Your choice may vary depending on your use case.\n    </p>\n    <a href="#fnref:1" title="return to article"> ↩</a>\n    </li>\n    <li class="footnote" id="fn:2">\n        <p>\n       This is also one of the main traits that separates ack from <a href="https://github.com/ggreer/the_silver_searcher">ag</a>.\n        </p>\n        <a href="#fnref:2" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',frontmatter:{title:"Ack Tips",keywords:"ack, command line, grep, ag",category:"tools",date:"2016-04-30T15:48:25+00:00",path:"/2016/04/30/ack-tips",layout:"post",hideFooter:null},fields:{slug:"/2016/04/30/ack-tips"}}},pathContext:{slug:"/2016/04/30/ack-tips",relatedPosts:[{path:"/learning-vim-in-2014",data:{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim",date:null}},{path:"/2013/11/25/a-look-at-ack",data:{title:"A look at Ack",path:"/2013/11/25/a-look-at-ack",description:"An introduction to using Ack for file searching",date:"2013-11-25T23:50:00+00:00"}},{path:"/2016/01/11/the-most-interesting-atom-packages-ive-found-so-far",data:{title:"The Most Interesting Atom Packages I've found (so far)",path:"/2016/01/11/the-most-interesting-atom-packages-ive-found-so-far",description:"A rundown of the coolest Atom packages I've seen",date:"2016-01-11T02:25:49+00:00"}}]}}}});
//# sourceMappingURL=path---2016-04-30-ack-tips-fe02734bcd9a8952208d.js.map