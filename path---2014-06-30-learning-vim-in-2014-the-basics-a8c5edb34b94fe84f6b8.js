webpackJsonp([70857240161644],{662:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Do you want to be efficient writing code?  Using Vim can be a powerful help.  Using it has let me move more effectively through the process of writing and editing code.  But getting to where I am now was frustrating. Vim resources are scattered across the web, and contain a lot of different advice.  It’s tough to figure out how to make Vim work for you.  In my next few posts, I’m going to talk about the process of learning a 23 year old programming power tool, and what you need to know in 2014 to be productive with Vim.  Today I’ll start with the basics, stuff that goes back all the way to the 1970s, and we’ll grow from there.</p>\n<h3>Why has Vim Survived?</h3>\n<p>Vim has been around for a while.  Originally released in 1991 as an improvement on vi (which had been around since 1976), it has outlasted a generation of programmers. The software world has changed a lot since 1991.  So why do people still use it?  </p>\n<p>Vim provides a system for editing text that is quite simply more powerful than its modern graphical based alternatives.  It asks a lot of its users. To use Vim effectively you have to internalize the syntax for many commands that have better affordances on other editors.  But you’re rewarded with a friction-free editing environment.  Vi’s commands are fast, composable, and powerful. So let’s get started.</p>\n<h3>Step 0: Setup</h3>\n<p>The first thing you need to do is install a copy of Vim. If you’re on a Linux or Mac system, there is likely already a system copy, but it is probably not up to date.  So use your system’s package manager to get the latest version (7.4 at the time of this writing).  For Mac users I recommend using <a href="http://brew.sh/">Homebrew</a> to download <a href="https://code.google.com/p/macvim/">MacVim</a>. Windows users can download the latest executable on <a href="http://www.vim.org/download.php">Vim.org</a>.</p>\n<p>The second thing you’ll need is a vimrc (the file vim uses for configuration).  These files can become quite extensive, setting up many different options, configurations, and plugins.  But we’re going to start simple.  Download <a href="https://gist.github.com/benmccormick/4e4bc44d8135cfc43fc3">this minimal vimrc file</a> and install it in the appropriate directory for your OS as instructed.  If you already have a .vimrc file but don’t understand it, I’d recommend saving it elsewhere and using a minimal one for now. You can then build it out as you learn more.  </p>\n<h3>Step 1: Learn the Syntax</h3>\n<p>Just like a programming language, the first thing to learn for Vim is the basic syntax.  Vim has a built in tool to help you get comfortable called vimtutor.  It’s a text file set up to help you learn to navigate Vim. Once vim is installed you can run it by calling vimtutor on unix-style systems.  On Windows you can follow the instructions <a href="http://superuser.com/questions/270938/how-to-run-vimtutor-on-windows">here</a>. It will take you through a series of 7 lessons that will familiarize you with the basic commands.</p>\n<p>Vim has rather non-standard commands, and it may be frustrating at first adapting to its different terminology and conventions.  The payoff comes slowly, but it does come.</p>\n<h4>Modes</h4>\n<p>The most important thing to understand is that Vim is a modal editor.  At any given time you’re in one of 6 modes.  You will have different abilities and keystrokes available to you in each of these modes.  For right now the key modes to understand are Normal Mode, Insert Mode, and Command line Mode.</p>\n<p>Normal Mode is the default mode.  It’s roughly equivalent to the state that other editors are in when you’re holding down the ctrl or cmd keys.  Instead of entering text onto the screen, different keys trigger different commands.  Initially this is a bit weird.  Those of us coming from other editors or IDEs are used to being able to type text by default.  The thought is that adding text is the primary task in a text editor.  But Vim treats adding text as sitting on equal footing with editing, deleting and manipulating existing text, and starts us in a mode where we can quickly make any change. To steal an analogy from Drew Neil, normal mode is the opportunity to take our paintbrush off the canvas while we decide our next stroke.  </p>\n<p>Insert mode is the equivalent of most editor’s normal state.  When you type a key in normal mode, it appears on the screen. You can enter insert mode by pressing <code>i</code> in visual mode, and exit it by hitting <code>&#x3C;esc></code>.</p>\n<p>Command line mode lets you enter ex-commands, a command line language that complements normal modes shortcuts.  You enter it by hitting <code>:</code> in normal mode.  Important commands are <code>:w</code> to write (save) a file, and <code>:q!</code> to quit.</p>\n<p>The above commands, and an understanding of the modes are enough for you to survive in Vim, and treat it as a sort of awkward Notepad clone.  You can edit files, save them, and quit.  Going through vimtutor will introduce you to many more commands, and a few more modes.  But you can learn those at your own pace.  Right now you want to see what taking time to learn this awkward unfamiliar syntax can buy you.</p>\n<h3>Step 2: Learn the Language</h3>\n<p>Vim’s key commands are different than you’ll find in other editors like Sublime Text.  They’re not a series of standalone actions that you can do one after another to get what you want.  Instead they form a language.  </p>\n<p>Vim statements are made up of actions and motions.  The actions are what you’re trying to do, the motions are where you want to do them.</p>\n<p>For example let’s take the <code>d</code> action. <code>d</code> deletes. You can delete a single character by typing <code>dl</code>.  You can delete 2 characters by typing <code>d2l</code>. You can delete a whole line by typing <code>dd</code>, or delete inside a word by typing <code>diw</code>.</p>\n<p>Once you learn the d action, you can use it with every motion you know. Similarly, when you learn a new motion, you can then use it with every action you know.</p>\n<p>So if somebody shows me the <code>y</code> action and tells me that it yanks (copies) text, I’ll know I can yank a character with <code>yl</code> a line with <code>yy</code> and inside the current word with <code>yiw</code>.  Each new Vim command is a tool in your toolbox, and since the tools build off of each other they become exponentially more valuable.</p>\n<h3>Step 3: Learn the Mindset</h3>\n<p>Vim can make you hyper-efficient.  But to get there you need to know more than just the command combinations available.  You have to shift your mindset.  Vim commands aren’t just easy to learn, they’re designed to be repeatable.  Bram Moolenar, Vim’s creator has listed out <a href="http://www.moolenaar.net/habits.html">7 habits of effective text editing</a>.  The second habit, don’t type it twice, is a pretty good summary of the “Vim Way” of doing things.</p>\n<p>Vim provides a bunch of ways to avoid repetition.  I’ll get into them in another post. For now though, let’s take a look at <code>.</code>, the dot command.  The dot command repeats the last action you’ve taken. For instance, you can use <code>ciw</code> to change a word, hit <code>&#x3C;esc></code> to return to normal mode, then move to another word and type <code>.</code> to replace that word as well.  You are able to avoid retyping the replacement word as well as the <code>ciw</code> command. You can run the whole replace with one keystroke, regardless of what words you’re replacing.  Like other Vim commands, the dot command is small on its own, but gains power as you add more tools to your toolbox.</p>\n<h3>More Resources</h3>\n<p>If you enjoyed this article you’ll probably also enjoy</p>\n<ul>\n<li>\n<p><a href="http://www.amazon.com/gp/product/1934356980/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1934356980&linkCode=as2&tag=benmccormicko-20&linkId=FE3JFKHYVRYCUOVS">Practical Vim</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=benmccormicko-20&amp;l=as2&amp;o=1&amp;a=1934356980" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;">: This amazing book by Drew Neil, the creator of <a href="http://vimcasts.org/">Vimcasts</a> was the single best resource I found as I learned Vim.  I highly recommend it for anyone who uses Vim.</p>\n</li>\n<li>\n<p><a href="http://yehudakatz.com/2010/07/29/everyone-who-tried-to-convince-me-to-use-vim-was-wrong/">Everyone Who Tried to Convince Me to use Vim was Wrong</a>: This blog post is another take on how to start learning Vim, by Yehuda Katz, the prolific developer who’s a core member of the Rails, EmberJS, and jQuery teams.</p>\n</li>\n<li>\n<p><a href="https://github.com/carlhuda/janus">Janus</a>: Janus is another Yehuda Katz project.  It’s a starting configuration for Vim meant to make it feel more comfortable for developers who want to come in and be productive immediately.  I personally found that it didn’t work for me. The plugin list overwhelmed me and prevented me from learning the basics.  But it may be a better fit for some people and is a great place to look to see configuration ideas and plugins that you can try out on your own.</p>\n</li>\n</ul>\n<hr>',frontmatter:{title:"Learning Vim in 2014: The Basics",keywords:"vim, basics, beginner, tutorial",category:"tools",date:"2014-06-30T11:28:00+00:00",path:"/2014/06/30/learning-vim-in-2014-the-basics",layout:"post",hideFooter:null},fields:{slug:"/2014/06/30/learning-vim-in-2014-the-basics"}}},pathContext:{slug:"/2014/06/30/learning-vim-in-2014-the-basics",relatedPosts:[{path:"/learning-vim-in-2014",data:{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim",date:null}},{path:"/2014/11/10/vim-workflows-file-switching-strategies",data:{title:"Vim Workflows: File Switching",path:"/2014/11/10/vim-workflows-file-switching-strategies",description:"A look at the different approaches you can take to managing files in Vim",date:"2014-11-10T04:06:52+00:00"}},{path:"/2014/07/02/learning-vim-in-2014-vim-as-language",data:{title:"Learning Vim in 2014: Vim as Language",path:"/2014/07/02/learning-vim-in-2014-vim-as-language",description:"An explanation of the grammar behind Vim",date:"2014-07-02T11:27:00+00:00"}}]}}}});
//# sourceMappingURL=path---2014-06-30-learning-vim-in-2014-the-basics-a8c5edb34b94fe84f6b8.js.map