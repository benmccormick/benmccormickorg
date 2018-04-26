webpackJsonp([38779265224460],{667:function(e,t){e.exports={data:{markdownRemark:{html:'<p>How do you feel about being efficient?  If you’re reading this blog, I bet you like it.  What if I told you your text editor could help you cut the amount of time you spend typing in half, with just a little reading and a bit of practice?  For you Vim users, it’s very possible that you’re spending way more time typing than needed.</p>\n<p>The software developers reading this have probably heard of the <em>Don’t Repeat Yourself</em> principle.  Developers want to avoid duplicating work, and try to write each distinct meaningful chunk of code only once.  DRY is extremely powerful when it comes to code, but it’s also a very useful principle in text editing.  Much of the editing work we do is extremely repetitive. Vim can help you remove those inefficiencies.</p>\n<p>If Vim’s composable commands are the <a href="http://benmccormick.org/2014/07/02/learning-vim-in-2014-vim-as-language/">language of Vim</a>, then repeating commands are it’s art.  For pretty much any thing you do in Vim, there are ways to automate and repeat it.  These “repeating commands” are powerful tools, but it’s not always easy to know what to do with them.  There aren’t simple rules you can learn for when to use repeating commands.  Instead it takes practice, awareness, and experience.  </p>\n<p>All of Vim’s commands are designed to be repeatable and undoable.  So if you find yourself typing something a lot, there is likely to be a good solution for making it easier and faster.  I’m going to lay out the tools for doing that, along with a few hints for knowing when to use them.</p>\n<h4>Repetition Basics: The dot command</h4>\n<p>The most important Vim tool for repetition is the dot command.  Pressing <code>.</code> at any time will repeat the last native command you used in Vim.  How is this useful?  Let’s say we’re faced with the following code</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> widget <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Widget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> widgets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WidgetCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwidgets<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>widget<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">\'widget passed test\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If we want to rename the <code>widget</code> variable to be more informative, how could we go about it? We’ll ignore “language-wise” refactoring solutions, like <a href="http://ternjs.net/">ternjs</a>, and look at the basic Vim options.  </p>\n<p>A simple find and replace causes problems.  We can’t distinguish between the widget we want and other occurences.  <code>:%s/widget/testWidget/g</code> results in plenty of unwanted changes.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> testWidget <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Widget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> testWidgets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WidgetCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ntestWidgets<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>testWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>testWidget<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">\'testWidget passed test\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It might be possible to find a complex regex that only hit the variables we want, but thats suddenly a lot of thought for what should be a simple change.  We could go one by one and knock out each word one by one.  But that would be a lot of repeated typing of <code>testWidget</code>.  So what can we do?</p>\n<p>The dot command is a nice solution.  If we start on the first occurence of <code>widget</code>, we can use <code>ciw</code> to replace the current word with new text.  When we’ve added our new text and exit insert mode, we’ll have a <em>command</em>, which we can then repeat with <code>.</code>. After that we can move to the next occurence we want to change and hit <code>.</code> to replace it without retyping the variable name.  If we accidentally use it in the wrong place, it’s easy to undo with <code>u</code>.</p>\n<p>Of course it would still be a pain to navigate between each widget with hjkl.  Fortunately, Vim has more commands that allow us to avoid unecessary work.  If we start on one instance of <code>widget</code>, we can use <code>*</code> to search for all occurences of that word.  We can then use <code>n</code> to move from occurence to occurence. If we overshoot and go too far, we can use <code>N</code> to go backwards.  So if we start with <code>*</code> (shift+8 in the gif below) and then use ciw to replace the word, we can then use <code>n</code> and <code>.</code> to clean up the other widgets in only 5 keystrokes.</p>\n<p><img src="/vimdotcommand-fcd9036267e137c552c8afdc822b223f.gif" alt="vim gif"></p>\n<h4>The Vim Way</h4>\n<p>If you’re used to another editor, I’m guessing you’re justifiably a bit skeptical at this point.  After all, this example is something people do all the time, and many editors have tools to make it easy (multiple selections in Sublime Text and refactoring tools in language specific IDEs like Eclipse for instance).  They may take even fewer keystrokes than Vim. And they don’t require you to learn 6 separate commands to use well.  So what’s so special here?</p>\n<p>Let’s have a quick refresher on the philosophy of Vim.  Like the Unix ecosystem it came from, Vim provides <strong>small</strong>, <strong>composable</strong> tools that you can combine to create powerful actions.  The power isn’t in a specific use case.  Instead it comes from the range of possibilities that open up when we start mixing and matching the code.  As with verbs, movements, and text objects, repeating commands and their corresponding reverse commands are tools we can add to our toolbox.  Using the commands above and some of the other composable commands from my <a href="http://benmccormick.org/2014/07/02/learning-vim-in-2014-vim-as-language/">language post</a>, we can do some cool things.</p>\n<p>We can:</p>\n<ul>\n<li>Search through json files and selectively remove lines that contain an attribute we don’t want to use (start on the attribute, <code>*</code>,<code>dd</code>, then use <code>n</code> and <code>.</code> repeatedly to select lines to delete)</li>\n<li>Replace a long, hard to type function name throughout the document with another version without having to type out the function name (start on the function name, <code>*</code>,<code>:%s//&#x3C;newname>/g</code>)</li>\n<li>Fix poorly indented lines using the <code>.</code> command (<code>>></code> or <code>&#x3C;&#x3C;</code>, <code>.</code> repeatedly, <code>u</code> to undo if you go too far. This can easily be used on groups of lines using visual mode too)</li>\n</ul>\n<p>What do all of these have in common?  They all use a command once, and a movement at most once, then allow for as much repetition as you like.  In <a href="http://www.amazon.com/gp/product/1934356980/ref=as_li_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=1934356980&#x26;linkCode=as2&#x26;tag=benmccormicko-20&#x26;linkId=FE3JFKHYVRYCUOVS">Practical Vim</a>, Drew Neil encourages actively thinking about making your actions repeatable.  In many scenarios, once you’ve made a change and movement once, you can then get by with a single keystroke for each future action and movement, with another keystroke available to cancel an action if you go too far.  Here’s a partial list of repeating commands, with the corresponding cancel command to undo them.</p>\n<table>\n<tr><th>Repeating Command</th><th>Purpose</th><th>Canceling Command</th></tr>\n<tr><td>.</td><td>Repeat the last normal mode command</td><td>u</td></tr>\n<tr><td>n</td><td>Repeat the last Search</td><td>N</td></tr>\n<tr><td>;</td><td>Repeat the last character-wise search</td><td>,</td></tr>\n<tr><td>/<replacement>/</td><td>Repeat the last search</td><td>N/A</td></tr>\n<tr><td>@:</td><td>Repeat the last ex-mode command</td><td>N/A</td></tr>\n<tr><td>@@</td><td>Repeat the last Macro used</td><td>u</td></tr>\n</table>\n<p>None of these commands are all that useful on their own, but they’re each valuable things to learn as you build up your Vim toolbox. Focus on one or two to start, and learn to make edits so that you can easily repeat them. The art of Vim is learning to look for those opportunities, and crafting your commands so that they’re short, powerful, and repeatable.</p>\n<hr>\n<h3>More Resources</h3>\n<ul>\n<li>Some of you are probably confused that I wrote a whole post on repeating commands in Vim with only one side-reference to Macros.  Macros are Vim’s DRY power tool, and different enough from the rest of these commands that I didn’t want to lump it all together.  But for those interested, Drew Neil has a <a href="http://vimcasts.org/episodes/converting-markdown-to-structured-html-with-a-macro/">great screencast</a> on how to build a good Vim macro.</li>\n<li>On a similar note, Drew’s book <a href="http://www.amazon.com/gp/product/1934356980/ref=as_li_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=1934356980&#x26;linkCode=as2&#x26;tag=benmccormicko-20&#x26;linkId=FE3JFKHYVRYCUOVS">Practical Vim</a> is the best guide I’ve found on making good use of repetition in Vim.  I learned plenty of the stuff in this article from that book.  For those who don’t want to pay, I’m currently giving <a href="http://benmccormick.org/2014/07/11/new-twitter-feed-and-practical-vim-giveaway/">new subscribers a chance to win 2 copies of the book</a>.  You can also see more about repetition from Drew online at <a href="http://vimcasts.org/categories/repetition/">Vimcasts</a>.</li>\n<li>Tim Pope has published a plugin that allows you to extend the dot command to work on arbitrary user commands.  It also works out of the box with many of his other plugins.  You can see it on <a href="https://github.com/tpope/vim-repeat">Github</a>.</li>\n</ul>',frontmatter:{title:"Learning Vim in 2014: Vim as Art",keywords:"vim dot command",category:"tools",date:"2014-07-16T10:41:00+00:00",path:"/2014/07/16/learning-vim-in-2014-vim-as-art",layout:"post",hideFooter:null},fields:{slug:"/2014/07/16/learning-vim-in-2014-vim-as-art"}}},pathContext:{slug:"/2014/07/16/learning-vim-in-2014-vim-as-art",relatedPosts:[{path:"/learning-vim-in-2014",data:{title:"Learning Vim in 2014",path:"/learning-vim-in-2014",description:"A series of beginner level articles on Vim",date:null}},{path:"/2014/11/10/vim-workflows-file-switching-strategies",data:{title:"Vim Workflows: File Switching",path:"/2014/11/10/vim-workflows-file-switching-strategies",description:"A look at the different approaches you can take to managing files in Vim",date:"2014-11-10T04:06:52+00:00"}},{path:"/2014/07/02/learning-vim-in-2014-vim-as-language",data:{title:"Learning Vim in 2014: Vim as Language",path:"/2014/07/02/learning-vim-in-2014-vim-as-language",description:"An explanation of the grammar behind Vim",date:"2014-07-02T11:27:00+00:00"}}]}}}});
//# sourceMappingURL=path---2014-07-16-learning-vim-in-2014-vim-as-art-0ddb05435a3292519932.js.map