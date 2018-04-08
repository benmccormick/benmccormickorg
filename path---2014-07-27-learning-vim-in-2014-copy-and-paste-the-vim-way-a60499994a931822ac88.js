webpackJsonp([0xd9648a4206d6],{667:function(e,t){e.exports={data:{markdownRemark:{html:'<p>If you’ve been following <a href="http://benmccormick.org/tag/learning-vim-in-2014/">my series on Vim</a>, it should be clear now that Vim has a pretty clear philosophy of how text editing should work. It’s based on the Unix philosophy of small composable tools, and doesn’t necessarily match up with the conventions that other editors use for common commands.  So it’s probably not surprising that Vim has its own way of handling copy and paste operations, and in fact doesn’t even use those terms.  Vim’s copy and paste handling is minimalist, composable, and powerful, but most people take some time to adjust to it.  I’m going to walk through the basics here, along with a few advanced features that are worth knowing about.</p>\n<p>The primary Vim commands for copying something are <code>y</code> (yank) which acts like most people’s view of copy, and the delete/substitute commands <code>d</code> (delete),<code>c</code> (change), <code>x</code> (single character delete), and <code>s</code> (substitute), which unintuitively all act like the more common concept of “cut”.  These can be <a href="http://benmccormick.org/2014/07/16/learning-vim-in-2014-vim-as-art/">composed with motion commands to select different regions</a>.  </p>\n<p>Any Vim command that deletes text will also save a copy of that text unless you specifically tell it not too.  The idiomatic Vim method of deleting without copying is <code>"_d</code>, which probably sounds bizarre.  We’ll come back to that later, and you’ll see that it makes sense in the bigger scheme of Vim’s copy and paste system.</p>\n<p>The basic Vim commands for paste are <code>p</code> (put) which pastes after of the current character/line and <code>P</code> which pastes before the current character/line.  Vim auto detects whether you’ve yanked text on a line by line basis or a character by character basis, and pastes accordingly. Basically, if you select only full lines it will paste line by line and not break on the cursor position, if you select any partial lines it will paste at the character level, starting or ending at the current cursor location.  Note that <code>p</code> also works in visual mode, where it will replace the current selection.</p>\n<p>All of this leads to a very common annoyance for new Vim users.  They’re editing a document and yank some text.  Then they go to a new location, delete a few lines, and hit <code>p</code> to replace them with the copied text.  Do you see the problem?  The text that is “put” is not what they originally yanked, but instead it’s the contents of their last delete action. Obviously this can be worked around by changing the order of the actions, but it’s frustrating to users who are used to being able to easily delete without blowing away their paste action.  Even more frustrating is when an experienced Vim user comes by and tells them the answer to their problem is to just type <code>"0p</code> instead. Which will in fact put the correct text. So what’s going on with the weird syntax for these basic action?</p>\n<h4>Registers</h4>\n<p>What we’re missing is a clear understanding of how Vim handles copy and paste operations.  So let’s clarify.  Unlike most modern systems, which have a clipboard that holds a single value, Vim can store the values of yank and delete commands in one of many registers.  It has 26 normal registers, which correspond to the letters of the alphabet, and several “special” registers.  One of those special registers is the default register, which is where yank and delete commands store their content by default.  Other registers can be accessed with the <code>"&#x3C;char></code> prefix that we’ve already seen.  So in the above example, the text from the initial example is moved into the default register, and then replaced there by the deleted text.  But it remains in the 0 register, which always points to the last “yanked” text, ignoring text gained by deleting.</p>\n<p>The 26 alphabetical registers serve as great “medium term” storage.  You can use them to yank something that you want to have around for a while, and then put it in a few different places, even if you’re yanking and deleting other things in the meantime.  These will even persist across sessions as long as you have the <code>nocompatible</code> option set in your vimrc file.  However if you overwrite one, there’s no easy way to get it back.  </p>\n<p>One cool feature of registers is the built in ability to append to the end of them.  If you want to add text to an existing register, for instance if you missed part of the text you wanted to yank, you can do so by capitalizing the register.  So if you had deleted a line and put it in the <code>a</code> register with <code>"add</code>, but meant to include a second line, you could then delete the next line and append it to the register with <code>"Add</code>. <code>"ap</code> would then put the 2 lines back into the document.</p>\n<h4>Special Registers</h4>\n<p>In addition to the alphabetical registers, there are several <em>special registers</em> that are worth knowing about.  I already mentioned the default register, which most Vim users know about, even if they don’t understand exactly how registers work.  Other important registers are the clipboard register, the black hole register, and the numbered registers.</p>\n<p>If you have to learn one special register, learn the clipboard register.  One of the first things people notice about copy and paste in Vim is that it doesn’t interact nicely with other applications’ copy and paste by default.  If you yank a line of text in Vim, it’s not added to the system clipboard.  If you copy some code from Stack Overflow and try to paste it in Vim with <code>p</code>, it won’t work <sup id="fnref:1"><a href="#fn:1">1</a></sup>.  But, since we know about registers, it makes sense that the default register might not be mapped to the clipboard, which we don’t want getting blasted away everytime we delete a character.</p>\n<p>Vim isn’t completely disconnected from the system clipboard though.  The clipboard register <code>+</code> is Vim’s proxy to your system clipboard.  So <code>"+y&#x3C;motion></code> and <code>"+p</code> act like traditional copy and paste.  Your version of Vim does have to be compiled with clipboard support in order to use the <code>+</code> register. You can check to see if you have clipboard support with <code>:echo has(\'clipboard\').</code><sup id="fnref:2"><a href="#fn:2">2</a></sup> On OSX you can use MacVim to get clipboard support, since the default version of Vim shipped with OSX is not compiled with it.  On other operating systems you’ll have to investigate the easiest way to install with clipboard support if your version doesn’t have it.  It should be enabled for most modern mainstream distributions.</p>\n<p>Another register to quickly note is the black hole register <code>_</code>.  The black hole register, as you would expect, doesn’t retain what’s passed to it.  So <code>"_y</code> and <code>"_p</code> are no-ops, and <code>"_d</code> is “true delete”, as opposed to the delete commands default “cut” like behavior.  Of course since most people don’t use all 26 alphabetical registers, you can also achieve effective true delete by deleting to any unused register.</p>\n<p>Finally, the number keys also have special register functionality.  You can’t yank text directly to a numbered register.  Instead the <code>0</code> register contains the last yanked text, and the <code>1</code> through <code>9</code> registers contain the last 9 deleted chunks of text.  This feature is a cool idea, but unfortunately the implementation is inconsistent and a bit weird.  For one thing the distinction between yanked and deleted text seems arbitrary, and since they act the same in other ways, puts an added cognitive load on the user to remember which one they used.  Secondly, for whatever reason, deletions that span less than a line get special behavior.  If you delete these to an alphabetical register, they’re saved to <code>"1</code> just like any other delete.  But if you delete them to the default register, they’re saved to <code>"-</code> and not put in <code>"1</code>.  The logic is complicated enough that the numbered registers become tough to use in day to day tasks, and I’ll have to agree with Drew Neil in labeling them one of Vim’s <a href="http://vimcasts.org/blog/2013/11/registers-the-good-the-bad-and-the-ugly-parts/">“bad parts.”</a></p>\n<h4>Macros</h4>\n<p>One last important thing to know about registers is that along with being used for copy and paste, they serve as a place to save macros, Vim’s reusable command language.  You can save a macro by typing <code>q&#x3C;register key>&#x3C;commands>q</code>, and the macro will be saved to the register.  Like yank and delete, capitalizing the register name will let you append to the register instead of replacing it. So there’s a few things you should know about that.  One, if you use macros, don’t save macros to the same registers that you use for copy and paste.  If you use the <code>y</code> register a lot for the convenience of <code>"yy&#x3C;motion></code>, don’t use <code>qy</code> to save your macro unless you’re ok with it being blown away by your next yank.  Two, the sharing of registers allows you to copy text to use as a macro.  So if you for instance wanted to have a file with a list of common operations, it would be easy to go to that file, copy a line, and then execute it as a macro.  This isn’t the first thing most people will want to do, but it illustrates the power and flexibility that come when you start combining Vim’s tools.</p>\n<hr>\n<h3>More Resources</h3>\n<ul>\n<li>\n<p>For a more in depth look at Vim’s special registers, including a bunch I didn’t cover here, you can check out this great <a href="http://blog.sanctum.geek.nz/advanced-vim-registers/">roundup</a></p>\n</li>\n<li>\n<p><a href="http://vimcasts.org/categories/copy-and-paste/">Vimcasts</a> has a whole series of posts on copy and paste in Vim.</p>\n</li>\n</ul>\n<hr>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        Of course some people would probably see that as a feature, not a bug\n    \t<a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n    <li class="footnote" id="fn:2">\n        <p>\n        Thanks to schweinschmeisser on Reddit for reminding me to add a way to check for support.\n    \t<a href="#fnref:2" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',frontmatter:{title:"Learning Vim in 2014: Copy and Paste the Vim Way",keywords:"vim, copy, paste, registers, yank, delete",category:"tools",date:"2014-07-27T23:00:00+00:00",path:"/2014/07/27/learning-vim-in-2014-copy-and-paste-the-vim-way",layout:"post",hideFooter:null},fields:{slug:"/2014/07/27/learning-vim-in-2014-copy-and-paste-the-vim-way"}}},pathContext:{slug:"/2014/07/27/learning-vim-in-2014-copy-and-paste-the-vim-way",relatedPosts:[{path:"/learning-vim-in-2014",data:{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim",date:null}},{path:"/2014/11/10/vim-workflows-file-switching-strategies",data:{title:"Vim Workflows: File Switching",path:"/2014/11/10/vim-workflows-file-switching-strategies",description:"A look at the different approaches you can take to managing files in Vim",date:"2014-11-10T04:06:52+00:00"}},{path:"/2014/07/02/learning-vim-in-2014-vim-as-language",data:{title:"Learning Vim in 2014: Vim as Language",path:"/2014/07/02/learning-vim-in-2014-vim-as-language",description:"An explanation of the grammar behind Vim",date:"2014-07-02T11:27:00+00:00"}}]}}}});
//# sourceMappingURL=path---2014-07-27-learning-vim-in-2014-copy-and-paste-the-vim-way-a60499994a931822ac88.js.map