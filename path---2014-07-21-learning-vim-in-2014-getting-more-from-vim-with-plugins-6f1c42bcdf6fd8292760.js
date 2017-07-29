webpackJsonp([0x9d113515296f8800],{"./node_modules/json-loader/index.js!./.cache/json/2014-07-21-learning-vim-in-2014-getting-more-from-vim-with-plugins.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>It’s impossible to design a tool that fits everyone’s workflow perfectly.  No matter how many cases you hit, somebody will want to do something you don’t support, will find your solution for their problem confusing, or they’ll try to use your tool in a way you never imagined. Vim tries to deal with situations like that in 2 ways.  First by making it easy to <a href="http://benmccormick.org/2014/07/14/learning-vim-in-2014-configuring-vim/">configure</a>, and second by making it easy to extend.  Extending Vim happens through plugins. <span class="aside">\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/29f80260aa6eb0f5020cced255e32721-509b3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 138.84892086330936%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAIAAADuuAg3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD90lEQVQ4y2XUWU9XSRAFcD6pn8AXeWB7gABBtgAiO7ITUFREEYzKoqwjoCwKBJRFIMLIFhSFQVnmd+/9M0xmKrmdvt1dXadOneq40dHRlZWV1tbWsrKyxsbGly9fPnz4sLu7e35+fmNjw9bXr18fPXqUlZWVnp6ekZFx8+bN+/fvLy8vf/78Oc53enr669ev4+Pjo6Oj49D+Cu0otN+/f7tlYWFhaWnp48ePJvv7+xYvLi4C593d3Z6entLS0lu3brW0tEAxMDAwPDxcUlLi9/Hjx3fu3Hn79u34+PjTp08nJiZEuggtbm1tzU1OvH792l5nZ+erV68mJyffvHlz9+7de/futbe3d3R0uKuvr+/Zs2eDg4Pfvn27coaTs9Pyj0Y5S16qnIEaGRkxx4XxwYMH09PTMo3B5u96q8+fP7ftdH9/P8AOiSaLsbGxFy9eAO9MQ0NDZWXlwcFBzPnif4aP7e1tPKFjb2/v58+f/zkg8vn5eYzts7MzDicnJxEZW1tbdXV1VVVV0hH5w4cPFmV3cmkx2Kurq3Nzc+BBiw+jnI1WlNqWFGZmZr58+fLnpW1ubgKlloHzkydPEhMTc3Jy8vLy4uPjFSw5OTkhIaGmpoZsrMv/j9Akr1Tv3r2bnZ3FeeDsX4XsKRI+kNfb20tGPFGIasEjqhTPREU5f//+PXC23dTU1NbWhs+KioqotjSjvM7BBQI38StDc0whDg8PA8LoqaioSCiSArK6utokOzu7vr5etCgLl2LOYn5+vvnU1FTMmTB0BVUI4igIANfW1t6+fds5tItWUFAAjjlcSnAFG72W+MjH9UZJOkoYcsZ8V1eX3ebmZhIiT7tXznLDLaqFTUtL03Raz0Qbipybm2tdng5khAZ5pPDAWaMJjgP1nAgNC1HlrSuBflIe2VmnBQlyIacgZ+0mGZDQjjZdsbi4SEYo+fHjBxl7D2jOuLOzowVpdn193YHAmdu1a9euX7+OZAhv3LiRkpKCakmWl5fLnNSAev/+/cylmbs3gK2rqNe/t4L6lCFqfYdICgoBNy5NTCOXIDJnyWCbDJSEHnArplSxQhgydDWfldAgNQoT07ZtJVXYSBJEYnSXskePSQQEeUZ0qpOG0aeB89DQEDEShtdHkSM9IgKxMic+IgXHAVxiFBDPYMxZGxAQwlWyuLiYp05GlbfWWBVaYWFhUlJSZmZmamqqSAjS3rHIbhWKEuCkGQElIgjAcCJlJDSwRdJ/YHuVg1KhN3oiYSZDtXGRiVF6bl/6l5HHp0+fFC8gTJ7KQwPeCk+EcSu06MWItBFZ9Iz8M/fIxcEcad1lnm6/Y6F5HuBUZCOofm2J6QzaJEIFfwP6OPsu1tMqowAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="xkcd workflow"\n        title=""\n        src="/static/29f80260aa6eb0f5020cced255e32721-509b3.png"\n        srcset="/static/29f80260aa6eb0f5020cced255e32721-a6b6e.png 143w,\n/static/29f80260aa6eb0f5020cced255e32721-509b3.png 278w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n</span>\nVim plugins allow you to enhance, change, or add to Vim’s existing behaviors.  They’re a powerful tool, and a key part of what has helped Vim remain relevant for 23 years, even as the computing world has changed dramatically around it.  They allow Vim to support languages that didn’t exist the last time its core was updated, handle niche use cases that would never get solutions in the main Vim distribution, and also allow for powerful new features that benefit all users.</p>\n<p>Your key focus when it comes to Vim plugins should be identifying your needs and finding plugins to fit them.  Don’t just toss every plugin you see recommended somewhere into your .vim/bundle folder.  Plugins have costs; they slow down file loads, can fill up the key mapping space, and add complexity for users.  But they’re also extremely powerful, and I recommend that everyone who controls their development environment think about using at least a few.</p>\n<h3>Plugin Management: Hello Vundle</h3>\n<p>Before you install anything, you’re going to need a strategy for managing your plugins.  Plugin management for Vim has a bit of a troubled history.  There’s never been an official plugin management solution, and unlike Sublime Text’s Package Control, there wasn’t a simple, easy to use solution that the community standardized.  Instead, plugins were initially just placed into the .vim folder or elsewhere and then sourced in ~/.vimrc.  To allow for download or installation, authors used a variety of compression formats, including a Vim specific Vimball format.  Early efforts to standardize a process didn’t go particulary well.</p>\n<p>That changed with the rise of Github and Tim Pope’s <a href="https://github.com/tpope/vim-pathogen">Pathogen</a>.  Pathogen was the first plugin manager to make it relatively simple to include new plugins, by encouraging a standard directory format and installation process (using git repositories).  It began a standardization process that now means pretty much any modern Vim plugin can be installed with Pathogen without modification.</p>\n<p>Despite Pathogen’s historical significance, in 2014 you should use <a href="https://github.com/gmarik/Vundle.vim">Vundle</a>, not Pathogen, to manage your plugins.  Vundle is an easy to use plugin manager that is compatible with the Pathogen format.  Vundle improves on Pathogen in several ways.  It allows you to list the plugins you want to use in your vimrc file, then will pull them down and install them for you.  So adding and removing plugins is just a configuration change, and it’s always easy to see which ones you’re currently using.  It makes it easy to pull plugins from a variety of sources, but optimizes for Github, and Vim.org.  Since roughly 99% of plugins that most users will need are available from one of those sources, this is extremely convenient.  You can find full documentation for using Vundle in its <a href="https://github.com/gmarik/Vundle.vim">Github repo</a>, but trust me, it’s the best option out there for 99% of users.</p>\n<h3>What Can Plugins do for you?</h3>\n<p>Before you start installing plugins, it’s worth thinking about what you need from them.  There are a few main purposes for using plugins.  I’m including a few examples of each to get you started as you figure out which plugins make sense for you.</p>\n<h4>Let Vim Get Your Files In Order</h4>\n<p>File management plugins are some of the most important plugins you can use with Vim.  Vim’s built-in file management is pretty weak in some ways compared to editors like Sublime Text and TextMate.  Plugins can fill that gap.  The plugins listed below show several approaches to file management.  There’s plenty of overlap in functionality here, but they’re all worth trying to see which ones fit your style.</p>\n<ul>\n<li>\n<p><a href="https://github.com/kien/ctrlp.vim">CtrlP</a> is probably my most used Vim plugin.  It provides fuzzy finding capabilities for Vim, to allow you to search for files in a similar way to Sublime Text’s “Go To Anything” bar.</p>\n</li>\n<li>\n<p><a href="https://github.com/mileszs/ack.vim">Ack.vim</a> and <a href="https://github.com/rking/ag.vim">Ag.vim</a> are plugins to connect Vim with Ack and Ag respectively.  If you’re not using one of these tools for code search, you <a href="http://benmccormick.org/2013/11/25/a-look-at-ack/">really should be</a>.  They’re much faster than grep or an IDE’s built in search.  These plugins provide seamless integration for each within Vim, allowing you to easily jump to the code you’re searching on, opening new tabs or splits if you like.</p>\n</li>\n<li>\n<p><a href="https://github.com/Shougo/unite.vim">Unite.vim</a> is an interesting attempt to combine the functionality of plugins like ctrlp, ack.vim and others into a single “omnisearch” interface.  I personally found it a bit unintuitive and poorly documented, but some people <a href="http://www.codeography.com/2013/06/17/replacing-all-the-things-with-unite-vim.html">swear by it</a>. If you are able to make sense of it, it’s certainly a great concept to pull in related functionality into a single interface.</p>\n</li>\n<li>\n<p><a href="https://github.com/scrooloose/nerdtree">The NERDTree</a> is one of the most popular Vim plugins out there.  It provides a more traditional side-drawer style navigation interface to complement Vim’s other navigation options.  I personally prefer a “search over specifying” navigation style, so ctrlp and ack.vim work better for me.  But I keep NERDTree around for looking at other people’s code in new projects, when I want to look around a directory to see what’s available and how it’s structured before diving in.</p>\n</li>\n<li>\n<p><a href="https://github.com/tpope/vim-projectionist">Projectionist.vim</a> is something I’ve just begun to look into.  It’s an interesting approach by Tim Pope to provide a more intuitive way to navigate structured projects.  Rather than fuzzy finding or sidebars, Projectionist invites you to create categories of files that you can open files from (for instance  model, view and controller files in a BackboneJS project).  This gives you the simplicity of traditional Vim file path opens while removing some of the memorization and clutter from the process.  Projectionist also allows you to specify alternate files for each file. That allows you to, for instance, jump quickly from a file to its unit test file.</p>\n</li>\n</ul>\n<h4>Building On Vim’s Built In Language</h4>\n<p>Another interesting class of Vim plugins are plugins that extend Vim’s existing language concepts.  In my past few posts I’ve looked at how Vim is intended to be used by <a href="http://benmccormick.org/2014/07/02/learning-vim-in-2014-vim-as-language/">combining composable commands with motions and text objects</a>, then efficiently <a href="http://benmccormick.org/2014/07/16/learning-vim-in-2014-vim-as-art/">repeating that process when possible</a>.  </p>\n<ul>\n<li>\n<p><a href="https://github.com/tpope/vim-surround">Surround.vim</a> is another plugin by Tim Pope.  It provides an extra command to use with Vim’s built in text objects. That command, <code>ys</code> allows you to surround a text object with some sort of enclosing tag. So <code>ysiw\'</code> surrounds the current word with <code>\'</code>, and <code>ysip&#x3C;div class="example"></code> surrounds the current paragraph with <code>&#x3C;div class="example">...&#x3C;/div></code> tags.  There’s also a separate command to replace surrounding characters with different ones.  It’s extremely useful, especially for HTML editing and quoting.</p>\n</li>\n<li>\n<p><a href="https://github.com/tpope/vim-commentary">commentary.vim</a> adds a “commenting” action, <code>gc</code> that can be used with existing motions.  So <code>gcc</code> comments out the current line, <code>gcG</code> comments out the remainder of a file, and so on.  This is yet another Tim Pope plugin.  I promise I’m not trying to make up for recommending Vundle over Pathogen, the guy has just been prolific.</p>\n</li>\n<li>\n<p><a href="https://github.com/tpope/vim-repeat">Repeat.vim</a> is one final Tim Pope plugin for now.  Repeat allows you to extend the <code>.</code> command to work with user created commands.  It works with surround and commentary out of the box, but you can also set it up to work with your own commands. <a href="http://benmccormick.org/2014/07/16/learning-vim-in-2014-vim-as-art/">The . command is one of the most important Vim commands</a>, so being able to use it in more situations is definitely a win.</p>\n</li>\n<li>\n<p><a href="https://github.com/kana/vim-textobj-user">vim-text-obj-user</a> is an interesting project to make it easy to create plugins that define custom text objects which then can be used with Vim commands like any other text object.  If that sounds scary to you, you can also take a look at the <a href="https://github.com/kana/vim-textobj-user/wiki">list</a> of plugins already built with the project, and use any that will be useful to you.</p>\n</li>\n</ul>\n<html><head></head><body>\n  <a class="gatsby-resp-image-link" href="/static/521ac294b2640855286b37094b806af3-4fae5.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; z-index: -1; display: block; ">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 61.0145934676859%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAABYlAAAWJQFJUiTwAAABq0lEQVQoz4XRyUsCcRQH8FnSciyoblFW90xnfrM4S6OOtowV1Kno1CXo1imDqH+gQIqgf6xDBEKOphmiHXIZd3vaPlI9HnP6ffi+9wa7u71J3CegkskkfDOZTDabfepVLpc7jV2eXl0fxy6OzmI7h8f6/sFb70RPoucXWCadLpfLplmtVCqmabbb7c5HNRoNl6Y7WGmY5R1IcHKCnfNR0IjH3fyoqGHZx8dSqVStVr+zTzwZ0EkUJLwiPu/D54X3dgvYXA/DtDAhhINvNpsWPK2tkigAEl5buovTDw+pVAo8jF2v1y3YpUVIRiVoiaBFgpGtGK4Sj8fz+TyEt1otC54KRkik2Rg/QS8QXgka9yofONTFScOA2E5f9ZJXbcIyhRSSXsB/jj0mhTDINAwDFu7HMMhMeM3JKSM+/4ikOpGM9U71hQuFZwgvFou1Wg12hrRPDPefXVwnaJWS9XFRpRDnoDmHl7V5uHf88lLu/FJv2M4oA0KQYmQ7Ldk94o/kf3B4fQgJo1IAfjXWv/PfOLy7NxFcGldCg7w6xAfcG1uezW12RffLbEQPvQLbQ55gs8QUngAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Vim side by side styles" title="" src="/static/521ac294b2640855286b37094b806af3-d766e.png" srcset="/static/521ac294b2640855286b37094b806af3-a6b6e.png 143w,\n/static/521ac294b2640855286b37094b806af3-8e488.png 285w,\n/static/521ac294b2640855286b37094b806af3-d766e.png 570w,\n/static/521ac294b2640855286b37094b806af3-13239.png 855w,\n/static/521ac294b2640855286b37094b806af3-cab6d.png 1140w,\n/static/521ac294b2640855286b37094b806af3-71f14.png 1710w,\n/static/521ac294b2640855286b37094b806af3-4fae5.png 2878w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    </body></html>\n<h4>Help Vim Look Good</h4>\n<p>One of the best uses for plugins is making Vim a bit easier on the eyes. We can do a lot to change Vim’s default look and feel.  For instance the screenshot above shows what MacVim looks like with and without loading my ~/.vimrc file and plugins.  If you’re a writer or developer, you may be looking at Vim for as much as 8-10 hours a day.  So make it something you’re happy to look at.</p>\n<ul>\n<li>\n<p>Syntax highlighting plugins are one of the main things you can use to make your code easier to read.  Vim packages syntax highlighting for many common languages, but for less mainstream languages you’ll need to download plugins to get syntax highlighting.  These plugins often may contain other niceties for the language, like syntax checking or support for compiling from within Vim.  For instance I use plugins for <a href="https://github.com/groenewege/vim-less">Less</a>, <a href="https://github.com/kchmck/vim-coffee-script">CoffeeScript</a>, and <a href="https://github.com/plasticboy/vim-markdown">Markdown</a>.</p>\n</li>\n<li>\n<p>Colorschemes are also an important part of helping Vim look its best.  Most distributions of Vim bundle several colorschemes, but the most popular ones come as plugins.  If you’re somebody who needs to know that somebody else has sweated the details of the tools you use so that you don’t have to, I recommend <a href="http://ethanschoonover.com/solarized">Solarized</a>, a color scheme based on the relationships between different colors and designed to echo the readability of words on paper.  If you like to try different things and have more options, consider looking at <a href="https://github.com/chriskempson/base16">Base16</a>, a project to standardize color scheme creation for multiple editors.  The advantage of both of these schemes is that they’re available for pretty much any editor or tool you’d want to use alongside or in place of Vim.</p>\n</li>\n<li>\n<p><a href="https://github.com/reedes/vim-thematic">Thematic</a> is a tool to allow you to manage your visual schemes.  So if you like to use different color schemes or fonts in different situations, Thematic can make that easy. You can define a set of “themes”, and then switch between them whenever you feel like it.  As somebody who uses Vim for both writing and programming, it’s nice to be able to use different themes for different situations.  I currently use Solarized for code, and the Pencil theme for writing.  Thematic and Pencil are two of a <a href="http://wynnnetherland.com/journal/reed-esau-s-growing-list-of-vim-plugins-for-writers">wide variety of plugins for writers</a> that Reed Esau has written.</p>\n</li>\n<li>\n<p><a href="https://github.com/bling/vim-airline">Airline</a> is a plugin to pretty up your status bar.  It creates the nice triangular effects in the image above, and integrates with other plugins to show helpful information in the status bar.  It does require modified fonts to use though, so you’ll need to have pretty full control of the system you’re on to use this one.</p>\n</li>\n</ul>\n<h4>Help Vim Understand Your Code</h4>\n<p>Vim is not an IDE.  By default it doesn’t understand much about code, and very little about specific languages.  It offloads that knowledge to the operating system, through things like <code>:make</code> and <code>ctags</code>, and to plugins.  Here are a few plugins that can help make Vim a bit more “code aware”.</p>\n<ul>\n<li>\n<p><a href="https://github.com/scrooloose/syntastic">Syntastic</a> is a syntax checking plugin for Vim that integrates with external syntax checkers to provide in-editor feedback on your code as you make changes.  For instance, it can integrate with jshint, llvm or javac to provide immediate feedback on a file.</p>\n</li>\n<li>\n<p><a href="https://github.com/Valloric/YouCompleteMe">YouCompleteMe</a> is a code completion engine for Vim that builds on Vim’s built in autocomplete features to offer “smart completion” for as many situations as possible.  It can integrate with Clang, Jedi, Omnisharp, and Vim’s omnicompletion in order to bring smart autocomplete to a variety of languages.</p>\n</li>\n<li>\n<p><a href="https://github.com/tpope/vim-fugitive">Fugitive</a> and <a href="https://github.com/jisaacks/GitGutter">Git-gutter</a> are 2 plugins that bring Git integration into Vim.  Fugitive provides a wrapper around the Git executable to allow you to easily manage your git actions from within Vim. GitGutter focuses on individual files and lets you see where you’ve made uncommited modifications in the current file.  They complement each other well, and are both very useful for heavy Git users.</p>\n</li>\n<li>\n<p><a href="https://github.com/Raimondi/delimitMate">delimitMate</a> is a simple plugin that removes a huge annoyance by auto inserting matching braces and brackets in a smart, intuitive way.  Lack of auto brace insertion was a big mental hurdle for me coming from Sublime Text.  DelimitMate makes things work the way I expect.</p>\n</li>\n<li>\n<p>Language specific plugins are another plugin group worth investigating.  There are way too many examples to list here, but one that I use and enjoy is <a href="http://ternjs.net/">TernJs</a>, a code intelligence plugin for Javascript that you can use with something like YouCompleteMe to get the type of IDE style autocompletion that is very rare for Javascript code.</p>\n</li>\n</ul>\n<h4>Help Vim Play Nice With Others</h4>\n<p>Some plugins exist to provide tighter integration between Vim and external programs.  We’ve already touched on a few of those, like Ack.vim and Syntastic.  Vim is intended to follow the Unix philosophy of doing one thing well and working well with other programs.  Integration plugins allow for deeper versions of that.</p>\n<ul>\n<li>\n<p><a href="https://github.com/christoomey/vim-tmux-navigator">Tmux Navigator</a> is a must have plugin for <a href="http://tmux.sourceforge.net/">Tmux</a> users.  It allows you to easily move between tmux and Vim splits using a single set of keyboard mappings.  It lets Vim and tmux work together in a completely natural way, without the user having to keep track of where one ends and the other begins.  </p>\n</li>\n<li>\n<p><a href="http://kapeli.com/dash">Dash.vim</a> is an OSX only plugin that provides integration with Dash.app, a documentation manager app for OSX, making it easy to look up library method definitions from within Vim.</p>\n</li>\n</ul>\n<h4>Grant Vim Superpowers</h4>\n<p>The last category of plugins are scripts that allow Vim to do things that are totally different than anything it can do on its own.  These may be features pulled from other editors, or features inspired by Vim but implemented differently than the Vim core.  These can be pretty amazing, but I’d be careful with them to start.  You’ll want to learn how Vim works before piling a bunch of big extensions on top of it.</p>\n<ul>\n<li>\n<p><a href="https://github.com/SirVer/ultisnips">Ultisnips</a> allows Vim to use Textmate like “snippets” that allow you to save canned templates of code or text, then insert and modify them whenever you’re ready.  If this sounds interesting, I’d recommend checking out the recent <a href="http://vimcasts.org/episodes/meet-ultisnips/">Vimcast</a> episodes where Drew explores Ultisnips.</p>\n</li>\n<li>\n<p><a href="https://github.com/Lokaltog/vim-easymotion">EasyMotion</a> is a plugin that introduces a new type of movement to Vim.  It creates alternative versions of the Vim movements like <code>f</code> and <code>w</code> that allow you to find a character or word anywhere on the screen, and specify it by using a key character that temporarily appears on the screen in place of each possible target character.  If that’s hard to follow, check out the <a href="https://camo.githubusercontent.com/d5f800b9602faaeccc2738c302776a8a11797a0e/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f333739373036322f323033393335392f61386539333864362d383939662d313165332d383738392d3630303235656138333635362e676966">demo</a>.</p>\n</li>\n</ul>\n<hr>\n<h3>More Resources</h3>\n<ul>\n<li>\n<p><a href="http://vimawesome.com/">VimAwesome</a> is a recent project to collect popular Vim plugins in a beautiful, searchable format. It lists some categories similar to what I have above and sorts plugins by popularity.  It seems to pull rankings based on mentions in Github dotfiles, which is a creative and useful way of ranking plugins.</p>\n</li>\n<li>\n<p><a href="http://vimcasts.org/categories/plugins/">Vimcasts has a bunch of plugin related episodes</a>, many of which touch on some of the plugins mentioned in this article</p>\n</li>\n<li>\n<p>Plugins are great, but only have real value if you understand how Vim can make you productive.  If you haven’t seen them yet, consider checking out the <a href="http://benmccormick.org/tag/learning-vim-in-2014/">other posts</a> in this series to learn how Vim works before loading up on plugins.</p>\n</li>\n</ul>',frontmatter:{title:"Learning Vim in 2014: Getting More from Vim with Plugins",keywords:"vim, plugins, vundle, nerdtree, ack, ctrlp",category:"tools",date:"2014-07-21 10:50:00+00:00",path:"/2014/07/21/learning-vim-in-2014-getting-more-from-vim-with-plugins",layout:"post",hideFooter:null}}},pathContext:{slug:"/2014/07/21/learning-vim-in-2014-getting-more-from-vim-with-plugins",relatedPosts:[{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim"},{title:"Vim Workflows: File Switching",path:"/2014/11/10/vim-workflows-file-switching-strategies",description:"A look at the different approaches you can take to managing files in Vim"},{title:"Learning Vim in 2014: Vim as Language",path:"/2014/07/02/learning-vim-in-2014-vim-as-language",description:"An explanation of the grammar behind Vim"}]}}}});
//# sourceMappingURL=path---2014-07-21-learning-vim-in-2014-getting-more-from-vim-with-plugins-6f1c42bcdf6fd8292760.js.map