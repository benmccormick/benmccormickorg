webpackJsonp([0xdffbe870b9863800],{"./node_modules/json-loader/index.js!./.cache/json/2012-10-06-it-took-a-month-to-get-sick-of-php.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>I’m not going to claim that its impossible to write nice, well structured code with php. I’m not even going to claim that its impossible to write nice, well structured php code with Wordpress. What I did find during my month of running my blog on Wordpress, is that it is much easier to write bad code with Wordpress than it is to write good code. Which is why I ported my blog to a custom self-written blog based on Django.</p>\n<p>I wouldn’t recommend that most people (even technically inclined people) do this, because generally the primary purpose of a blog is to produce content. And Wordpress is fantastic for that. Many many people have spent a large amount of time making sure it is very easy to create pretty much any type of content you want to produce on Wordpress without writing a single line of code. However, for somebody like me who wants to tinker and customize (having a place to experiment is part of the fun of this site for me), being forced to deal with the php/Wordpress crapshoot every time I wanted to try writing something was tough to get around.</p>\n<p>Django was an attractive option because it was really easy to get a basic prototype running, and it provides significant flexibility to expand. I got the full functionality of my original Wordpress site back up in 3 days after I first downloaded Django (not 3 full days, 3 busy calendar days). In the process I significantly cut down on my code bloat and increased load time. It was crazy easy to define a basic blog design and have it reflected in the code and database.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token comment" spellcheck="true"># Basic Blog Format</span>\n<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models\n<span class="token keyword">class</span> <span class="token class-name">Category</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\nname <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">__unicode__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token keyword">return</span> self<span class="token punctuation">.</span>name\n<span class="token keyword">class</span> <span class="token class-name">Post</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\ntitle <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">)</span>\ncontent <span class="token operator">=</span> models<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>\npub_date <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span><span class="token string">\'date published\'</span><span class="token punctuation">)</span>\nslug <span class="token operator">=</span> models<span class="token punctuation">.</span>SlugField<span class="token punctuation">(</span>unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\ncategory <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>Category<span class="token punctuation">)</span>\ntags <span class="token operator">=</span> models<span class="token punctuation">.</span>ManyToManyField<span class="token punctuation">(</span><span class="token string">\'Tag\'</span><span class="token punctuation">,</span> blank<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">__unicode__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token keyword">return</span> self<span class="token punctuation">.</span>title\n<span class="token keyword">class</span> <span class="token class-name">Tag</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\nname <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>\nposts <span class="token operator">=</span> models<span class="token punctuation">.</span>ManyToManyField<span class="token punctuation">(</span>Post<span class="token punctuation">,</span> through<span class="token operator">=</span>Post<span class="token punctuation">.</span>tags<span class="token punctuation">.</span>through<span class="token punctuation">,</span> blank<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">__unicode__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token keyword">return</span> self<span class="token punctuation">.</span>name\n<span class="token keyword">class</span> <span class="token class-name">RelatedLink</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\npost <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>Post<span class="token punctuation">)</span>\nname <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>\nurl <span class="token operator">=</span> models<span class="token punctuation">.</span>URLField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">)</span>\ninternal <span class="token operator">=</span> models<span class="token punctuation">.</span>BooleanField<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">__unicode__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token keyword">return</span> self<span class="token punctuation">.</span>name\n</code></pre>\n      </div>\n<p>I love Python’s clean syntax, and especially the cleanliness of Django’s template systems. It is 100x more legible and “HTML” like than php code (or the jsp code I have to deal with at work). I’ve thoroughly enjoyed the experience and am looking forward to working more with Django in the future.\n[I wrote 20 short programs in Python yesterday. It was wonderful. Perl, I’m leaving you.]</p>\n<p><img src="http://imgs.xkcd.com/comics/python.png" alt="I wrote 20 short programs in Python yesterday.  It was wonderful.  Perl, I&#x27;m leaving you."></p>',frontmatter:{title:"It took a month to get sick of php",keywords:null,category:"meta",date:"2012-10-06 11:00:00+00:00",path:"/2012/10/06/it-took-a-month-to-get-sick-of-php",layout:"post",hideFooter:null}}},pathContext:{slug:"/2012/10/06/it-took-a-month-to-get-sick-of-php",relatedPosts:[{title:"Adding RSS, Atom, and JSON Feed to Gatsby",path:"/2017/06/03/rss-atom-json-gatsby/",description:"How to support subscription feeds with Gastby"},{title:"2016 Roundup",path:"/2016/12/31/2016-roundup",description:"A look back at benmccormick.org in 2016"},{title:"A whole new site",path:"/2016/12/02/whole-new-site/",description:"Introducing a new look for benmccormick.org"}]}}}});
//# sourceMappingURL=path---2012-10-06-it-took-a-month-to-get-sick-of-php-4246c5d1298ce82bdbaa.js.map