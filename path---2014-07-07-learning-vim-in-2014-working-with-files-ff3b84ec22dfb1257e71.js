webpackJsonp([0xea63fdb3fdd6],{649:function(e,t){e.exports={data:{markdownRemark:{html:'<p>As a software developer, you shouldn’t have to spend time thinking about how to get to the code you want to edit.  One of the messiest parts of my transition to using Vim full time was its way of dealing with files.  Coming to Vim after primarily using Eclipse and Sublime Text, it frustrated me that Vim doesn’t bundle a persistent file system viewer, and the built-in ways of opening and switching files always felt extremely painful.  </p>\n<p>At this point I appreciate the depth of Vim’s file management features. I’ve put together a system that works for me even better than more visual editors once did. Because it’s purely keyboard based, it allows me to move through my code much faster.  That took some time though, and involves several plugins. But the first step was me understanding Vim’s built in options for dealing with files. This post will be looking at the most important structures Vim provides you for file management, with a quick peek at some of the more advanced features you can get through plugins.</p>\n<h3>The Basics: Opening a new file</h3>\n<p>One of the biggest obstacles to learning Vim is its lack of visual affordances.  Unlike modern GUI based editors, there is no obvious way to do anything when you open a new instance of Vim in the terminal.  Everything is done through keyboard commands, and while that ends up being more efficient for experienced users, new Vim users will find themselves looking up even basic commands routinely.  So lets start with the basics.</p>\n<p>The command to open a new file in Vim is <code>:e &#x3C;filename></code>.  <code>:e</code> opens up a new buffer with the contents of the file inside. If the file doesn’t exist yet it opens up an empty buffer and will write to the file location you specify once you make changes and save. Buffers are Vim’s term for a “block of text stored in memory”. That text can be associated with an existing file or not, but there will be one buffer for each file you have open.</p>\n<p>After you open a file and make changes, you can save the contents of the buffer back to the file with the write command <code>:w</code>.  If the buffer is not yet associated with a file or you want to save to a different location, you can save to a specific file with <code>:w &#x3C;filename></code>. You may need to add a <code>!</code> and use <code>:w! &#x3C;filename></code> if you’re overwriting an existing file.</p>\n<p>This is the survival level knowledge for dealing with Vim files.  Plenty of developers get by with just these commands, and its technically all you need.  But Vim offers a lot more for those who dig a bit deeper.</p>\n<h3>Buffer Management</h3>\n<p>Moving beyond the basics, let’s talk some more about buffers.  Vim handles open files a bit differently than other editors.  Rather than leaving all open files visible as tabs, or only allowing you to have one file open at a time, Vim allows you to have multiple buffers open.  Some of these may be visible while others are not.  You can view a list of all open buffers at any time with <code>:ls</code>.  This shows each open buffer, along with their buffer number.  You can then switch to a specific buffer with the <code>:b &#x3C;buffer-number></code> command, or move in order along the list with the <code>:bnext</code> and <code>:bprevious</code> commands. (these can be shortened to <code>:bn</code> and <code>:bp</code> respectively).  </p>\n<p>While these commands are the fundamental Vim solutions for managing buffers, I’ve found that they don’t map well to my own way of thinking about files.  I don’t want to care about the order of buffers, I just want to go to the file I’m thinking about, or maybe to the file I was just in before the current one.  So while its important to understand Vim’s underlying buffer model, I wouldn’t necessarily recommend its builtin commands as your main file management strategy.  There are more powerful options available.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-8476c.jpeg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 60.15424164524421%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeMoGkI//8QAGhABAQACAwAAAAAAAAAAAAAAAQACERIhIv/aAAgBAQABBQLk22MmcfT1F//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAABMRAR/9oACAEBAAY/AqylZzf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAREhMZHB4f/aAAgBAQABPyF+8K62xVdBEgkoMT//2gAMAwEAAgADAAAAEHPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGxAAAwADAQEAAAAAAAAAAAAAAAERMUGRUXH/2gAIAQEAAT8Qhj6ySu8eUs3sVscTl2IYll2ZPp//2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="splits example" title="" src="/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-6fbc3.jpeg" srcset="/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-da4c7.jpeg 143w,\n/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-1d39e.jpeg 285w,\n/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-6fbc3.jpeg 570w,\n/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-9d77e.jpeg 855w,\n/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-e356a.jpeg 1140w,\n/static/skitch-e04bb8adecac1fcf97823f3f86913f0e-8476c.jpeg 1167w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h3>Splits</h3>\n<p>One of the best parts of managing files in Vim is its splits.  With Vim, you can split your current window into 2 windows at any time, and then resize and arrange them into any configuration you like.  Its not unusual for me to have 6 files open at a given time, each with its own small split of the window.</p>\n<p>You can open a new split with <code>:sp &#x3C;filename></code> or <code>:vs &#x3C;filename></code>, for horizontal and vertical splits respectively.  There are keyword commands you can use to then resize the windows the way you want them, but to be honest this is the one Vim task I prefer to do with my mouse.  A mouse gives me more precision without having to guess the number of columns I want or fiddle back and forth between 2 widths.  </p>\n<p>After you create some splits, you can switch back and forth between them with <code>ctrl-w [h|j|k|l]</code>.  This is a bit clunky though, and it’s important for common operations to be efficient and easy. If you use splits heavily, I would personally recommend aliasing these commands to <code>ctrl-h</code> <code>ctrl-j</code> etc in your .vimrc using this snippet.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-vimscript"><code>nnoremap <C-J> <C-W><C-J> "Ctrl-j to move down a split\nnnoremap <C-K> <C-W><C-K> "Ctrl-k to move up a split\nnnoremap <C-L> <C-W><C-L> "Ctrl-l to move\tright a split\nnnoremap <C-H> <C-W><C-H> "Ctrl-h to move left a split</code></pre>\n      </div>\n<h3>The jumplist</h3>\n<p>Splits solve the problem of viewing multiple related files at a time, but we still haven’t seen a satisfactory solution for moving quickly between open and hidden files.  The jumplist is one tool you can use for that.  </p>\n<p>The jumplist is one of those Vim features that can appear weird or even useless at first.  Vim keeps track of every motion command and file switch you make as you’re editing files.  Every time you “jump” from one place to another in a split, Vim adds an entry to the jumplist. While this may initially seem like a small thing, it becomes powerful when you’re switching files a lot, or moving around in a large file.  Instead of having to remember your place, or worry about what file you were in, you can instead retrace your footsteps quickly using some quick key commands.  <code>Ctrl-o</code> allows you to jump back to your last jump location.  Repeating it multiple times allows you to quickly jump back to the last file or code chunk you were working on, without having to keep the details of where that code is in your head. You can then move back up the chain with <code>ctrl-i</code>. This turns out to be immensely powerful when you’re moving around in code quickly, debugging a problem in multiple files or flipping back and forth between 2 files. Instead of typing file names or remembering buffer numbers, you can just move up and down the existing path.  It’s not the answer to everything, but like other Vim concepts, it’s a small focused tool that adds to the overall power of the editor without trying to do everything.</p>\n<h3>Plugins</h3>\n<p>So let’s be real, if you’re coming to Vim from something like Sublime Text or Atom, there’s a good chance all of this looks a bit arcane, scary, and inefficient.  “Why would I want to type the full path to open a file when Sublime has fuzzy finding?”  “How can I get a view of a project’s structure without a sidebar to show the directory tree?”  Legitimate questions.  The good news is that Vim has solutions.  They’re just not baked into the Vim core.  I’ll touch more on Vim configuration and plugins in later posts, but for now here’s a pointer to 3 helpful plugins that you can use to get Sublime-like file management.</p>\n<ul>\n<li>\n<p><a href="https://github.com/kien/ctrlp.vim">CtrlP</a> is a fuzzy finding file search similar to Sublime’s “Go to Anything” bar.  It’s lightning fast and pretty configurable.  I use it as my main way of opening new files.  With it I only need to know part of the file name and don’t need to memorize my project’s directory structure.</p>\n</li>\n<li>\n<p><a href="https://github.com/scrooloose/nerdtree">The NERDTree</a> is a “file navigation drawer” plugin that replicates the side file navigation that many editors have.  I actually rarely use it, as fuzzy search always seems faster to me.  But it can be useful coming into a project, when you’re trying to learn the project structure and see what’s available.  NERDTree is immensely configurable, and also replaces Vim’s built in directory tools when installed.</p>\n</li>\n<li>\n<p><a href="https://github.com/mileszs/ack.vim">Ack.vim</a> is a code search plugin for Vim that allows you to search across your project for text expressions.  It acts as a light wrapper around Ack or Ag, <a href="http://benmccormick.org/2013/11/25/a-look-at-ack/">2 great code search tools</a>, and allows you to quickly jump to any occurrence of a search term in your project.</p>\n</li>\n</ul>\n<p>Between it’s core and its plugin ecosystem, Vim offers enough tools to allow you to craft your workflow anyway you want.  File management is a key part of a good software development system, and it’s worth experimenting to get it right.</p>\n<p>Start with the basics for long enough to understand them, and then start adding tools on top until you find a comfortable workflow. It will all be worth it when you’re able to seamlessly move to the code you want to work on without the mental overhead of figuring out how to get there.</p>\n<hr>\n<h3>More Resources</h3>\n<ul>\n<li><a href="http://robots.thoughtbot.com/seamlessly-navigate-vim-and-tmux-splits">Seamlessly Navigate Vim &#x26; Tmux Splits</a> - This is a must read for anyone who wants to use vim with <a href="http://tmux.sourceforge.net/">tmux</a>.  It presents an easy system for treating Vim and Tmux splits as equals, and moving between them easily.</li>\n<li><a href="http://vim.wikia.com/wiki/Using_tab_pages">Using Tab Pages</a> - One file management feature I didn’t cover, since it’s poorly named and a bit confusing to use, is Vim’s “tab” feature.  This post on the Vim wiki gives a good overview of how you can use “tab pages” to have multiple views of your current workspace</li>\n<li><a href="http://vimcasts.org/episodes/the-edit-command/">Vimcasts: The edit command</a> - Vimcasts in general is a great resource for anyone learning Vim, but this screenshot does a good job of covering the file opening basics mentioned above, with some suggestions on improving the builtin workflow</li>\n</ul>',frontmatter:{title:"Learning Vim in 2014: Working with Files",keywords:"vim files file system splits buffers",category:"tools",date:"2014-07-07T11:10:37+00:00",path:"/2014/07/07/learning-vim-in-2014-working-with-files",layout:"post",hideFooter:null},fields:{slug:"/2014/07/07/learning-vim-in-2014-working-with-files"}}},pathContext:{slug:"/2014/07/07/learning-vim-in-2014-working-with-files",relatedPosts:[{path:"/learning-vim-in-2014",data:{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim",date:null}},{path:"/2014/11/10/vim-workflows-file-switching-strategies",data:{title:"Vim Workflows: File Switching",path:"/2014/11/10/vim-workflows-file-switching-strategies",description:"A look at the different approaches you can take to managing files in Vim",date:"2014-11-10T04:06:52+00:00"}},{path:"/2014/07/02/learning-vim-in-2014-vim-as-language",data:{title:"Learning Vim in 2014: Vim as Language",path:"/2014/07/02/learning-vim-in-2014-vim-as-language",description:"An explanation of the grammar behind Vim",date:"2014-07-02T11:27:00+00:00"}}]}}}});
//# sourceMappingURL=path---2014-07-07-learning-vim-in-2014-working-with-files-ff3b84ec22dfb1257e71.js.map