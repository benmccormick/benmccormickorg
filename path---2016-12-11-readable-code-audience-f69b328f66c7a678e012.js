webpackJsonp([0xf4c31a4b6cabc800],{"./node_modules/json-loader/index.js!./.cache/json/2016-12-11-readable-code-audience.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>A coworker asked me last week if there was a better way to write the following python code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>self<span class="token punctuation">.</span>custom_attributes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\':\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span> x<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\':\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n  <span class="token keyword">for</span> x <span class="token keyword">in</span> a<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>I semi-jokingly replied that there were 3 better ways:</p>\n<h5>For people who like comprehensions</h5>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>self<span class="token punctuation">.</span>custom_attributes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> value\n  <span class="token keyword">for</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>entry<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\':\'</span><span class="token punctuation">)</span> <span class="token keyword">for</span> entry <span class="token keyword">in</span> a<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h5>For people who like functions</h5>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">build_obj</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">:</span>\n   <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\':\'</span><span class="token punctuation">)</span>\n   acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value\n   <span class="token keyword">return</span> acc\nself<span class="token punctuation">.</span>custom_attributes <span class="token operator">=</span> reduce<span class="token punctuation">(</span>build_obj<span class="token punctuation">,</span> a<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h4>For people who like other folks to be able to read their code</h4>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token comment" spellcheck="true"># create a hash of custom attributes</span>\nself<span class="token punctuation">.</span>custom_attributes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true"># get the entries from splitting the input string</span>\nentries <span class="token operator">=</span> a<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true"># for each entry split the key value pairs and add them to the hash</span>\n<span class="token keyword">for</span> entry <span class="token keyword">in</span> entries<span class="token punctuation">:</span>\n   <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> entry<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\':\'</span><span class="token punctuation">)</span>\n   self<span class="token punctuation">.</span>custom_attributes<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value\n</code></pre>\n      </div>\n<p>The joke of course is that it doesn’t really matter what the author of the code considers the best way to write it.  Like writing an essay or persuasive speech, it is much more important to consider the audience, and what style will work best for them.  Most code will eventually be read by other people, even if that is simply a future version of the original author who has been stripped of context by time <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>.</p>\n<p>If my coworker is confident that his code will be read in the future by confident Python programmers who understand object comprehensions, then he could go with the first example, with its heavy use of python idioms.  If he thought it was more likely that somebody like me who is used to JavaScript idioms, he might consider the less idiomatic python from the second example that matched his teammates.  If he didn’t know who would read the code in the future, he might go with the more explicit and difficult to misinterpret version 3, and possibly tuck it away within a named function so that the main code flow could remain uninterrupted.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>self<span class="token punctuation">.</span>custom_attributes <span class="token operator">=</span> parse_entry_string<span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true"># ... elsewhere ...</span>\n\n<span class="token keyword">def</span> parse_entry_string <span class="token punctuation">(</span>entry_string<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    attributes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token comment" spellcheck="true"># get the entries from splitting the input string</span>\n    entries <span class="token operator">=</span> a<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true"># for each entry split the key value pairs and add them to the hash</span>\n    <span class="token keyword">for</span> entry <span class="token keyword">in</span> entries<span class="token punctuation">:</span>\n       <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> entry<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">\':\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>\n       attributes<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token keyword">return</span> attributes\n</code></pre>\n      </div>\n<p>Of course once the functionality is separated out into a function, it matters a lot less how it is implemented since the only time somebody will need to read it is when they are interested in that specific functionality and can invest the time to understand the code.  The well named function replaces the need for understanding everything when people browse through the code.  This is extremely important in larger code bases, since data often flows through many lines of code.  The more of it that can be usefully (and accurately) abstracted away for a reader, the easier the code base is to debug.</p>\n<p>So quick tip version:</p>\n<ol>\n<li>Think about the audience of the code you’re writing</li>\n<li>Naming functions well limits the needs to make implementation details readable for everybody. It can also make your program flow easier to follow.</li>\n</ol>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>In my experience, it usually only takes about a week for me to look back at my old code and wonder what maniac wrote it and what he could have possibly been thinking</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{title:"Readable code: Know your audience ",keywords:"readable code python",category:"software-productivity",date:"2016-12-12T04:00:00+00:00",path:"/2016/12/11/readable-code-audience",layout:"post",hideFooter:null},fields:{slug:"/2016/12/11/readable-code-audience"}}},pathContext:{slug:"/2016/12/11/readable-code-audience",relatedPosts:[{title:"My Favorite Interview Question",path:"/2017/07/24/my-favorite-interview-question/",description:"How does the Internet work anyway?"},{title:"Giving Context To Best Practices",path:"/2017/02/18/context-to-best-practices/",description:"What we talk about when we talk about best practices"},{title:"Orthogonality and CSS in JS",path:"/2017/01/03/orthogonality-and-css-in-js/",description:"Separation of concerns in the context of CSS and JavaScript"}]}}}});
//# sourceMappingURL=path---2016-12-11-readable-code-audience-f69b328f66c7a678e012.js.map