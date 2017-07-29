webpackJsonp([0x8ef67e00bdd71800],{"./node_modules/json-loader/index.js!./.cache/json/2013-02-13-simple-publish-subscribe-with-jquery.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>Here’s a cool pattern that I’ve been able to use in two of my projects lately:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">//Publish Subscribe with jQuery</span>\n\n<span class="token keyword">var</span> exampleHandle <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">//do stuff when topic is published</span>\n\t<span class="token operator">...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">subscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span>handle<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#subscription"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span>handle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">publish</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#subscription"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span>params<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span>handle<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#subscription"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span>handle<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern">Publish-Subscribe</a> is a pretty commonly used model for sending messages in software applications.  Implementations can vary, from the very heavyweight setups of things like <a href="http://en.wikipedia.org/wiki/Java_Message_Service">Java Message Service</a> to much lighter methods.  This is an example of a lightweight pubsub implementation for javascript.</p>\n<h3>Implementation Details</h3>\n<p>The method is based on jQuery’s <code>trigger</code> and <code>bind</code> functions.  These allow you to listen for a custom event on an element, and manually trigger an event on an element.  This provides the basic backbone for the simple subscription model.</p>\n<p>If an application element wants to subscribe to a topic, they bind a handler to the “subscription element”.  This can be a designated element on the page, or just the window element.  You can also of course use different elements for different subscriptions.  Then, when something publishes to that topic, the handler function will execute.</p>\n<p>For publishing, a function can pass a topic and parameters to the publish function.  This calls jQuery’s <code>trigger</code> to set off the event topic, passing along the parameters.  These params are passed to the handle function.</p>\n<p>If an element wants to cancel its subscription, they can pass the topic and handle function to the <code>unsubscribe</code> method. Note that the handle has to be the same function object that was used to originally subscribe, not a copy or similar function.  You also can use jQuery’s <code>unbind</code> to cancel all subscriptions to a topic by only specifying the topic without the handle function.</p>\n<p>I’ve found this to be a useful, lightweight way of creating loosely coupled messages across different components of my software systems.</p>\n<hr>\n<h3>Further Reading</h3>\n<ul>\n<li><a href="http://api.jquery.com/category/events/event-handler-attachment/">jQuery Documentation</a> - in depth information on bind, trigger and unbind</li>\n</ul>',frontmatter:{title:"Simple Publish-Subscribe with jQuery",keywords:null,category:"frameworks",date:"2013-02-13 21:00:00+00:00",path:"/2013/02/13/simple-publish-subscribe-with-jquery",layout:"post",hideFooter:null}}},pathContext:{slug:"/2013/02/13/simple-publish-subscribe-with-jquery",relatedPosts:[{title:"Building Normal Distribution Charts Using Highcharts",path:"/2017/05/11/building-normal-curves-highcharts/",description:"Creating a statistical visualization in JavaScript"},{title:"MobX: First Impressions",path:"/2017/01/09/mobx-first-impressions/",description:"First impression of managing data with MobX"},{title:"What are Higher Order Components?",path:"/2016/12/14/what-are-higher-order-components",description:"An explanation of React's higher order components"}]}}}});
//# sourceMappingURL=path---2013-02-13-simple-publish-subscribe-with-jquery-5b3db8e0a121463f3c6c.js.map