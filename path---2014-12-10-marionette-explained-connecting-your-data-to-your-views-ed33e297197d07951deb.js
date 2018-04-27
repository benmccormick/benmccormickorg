webpackJsonp([0xfc042566f5f0],{683:function(n,a){n.exports={data:{markdownRemark:{html:'<p><em>This is the second post in a series on <a href="http://marionettejs.com/">Marionette.js</a>.  For more background on what Marionette is, check out the first post in the series, <a href="http://benmccormick.org/2014/12/02/the-case-for-marionette-js/">The Case For Marionette</a>.  Also note that this article was written about Marionette v2.  The current latest version of Marionette is v3, and while most of the high level concepts remain the same, the specific syntax has changed in some cases.</em></p>\n<p>One of the most interesting design choices of <a href="http://backbonejs.org/">Backbone</a> was the decision to not provide a default render function for Views. Backbone Views by default are an empty function that adds nothing to the DOM when rendered.  Although a View can have a Model or Collection associated with it, there is no built in way to associate that with the generated View.  When you contrast that to other modern frameworks like Ember, Angular and KnockoutJS, and their emphasis on using 2 way bindings to associate a data object to a rendered View, Backbone can feel a bit incomplete.  The goal is to allow for a variety of rendering approaches, without making one of them a favored approach.  But it leaves a situation where choosing a rendering procedure is one of the first steps in any new Backbone project.  Marionette provides a structured approach for binding your data to your view layer, while still providing flexibility to introduce customization.</p>\n<h3>Rendering and Data-Binding in Marionette</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/renderpattern-3-c46f3a6beda389f53c3b773508f44dee-eb3d7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABqUlEQVQoz2P49vP3/MM3J+2+cvT2i//////79+8/GECoXVeeTNh1ZdmJO3/+QsWRAcOLj9+MG9Yrlixv2nAOyP8LUwQxpGDZMfmS5R69237+/gM3EaH51advju2b9WrWdG07D9IMthpoz2+wKRWrTujWrA6evOvHr98gzUDpP38gCKT599+/lx+9PHXn6bP3n8GaoVZDyIevP56+++zGszdgjX/RnQ3SAHTSrz8ffnx69P4pkPv91+/9159dePQGouLP95+fvn16+O4xkP3+9o3z/a2XpvVcnNr94/07hi8/v846tXjOqSUdhyYHLE188+1Fz/bLymXL9WvXHLn56tjjYz0Hp/cfnemxIPzW56cvD+5daam60dNyraPBx4f3GD58/9iwv6fpQF/xjgbnBWGPPz6oXnVGp3q1bvWq7Reebrm1tWhHQ/WedosZnufe3X51YO8Kc5Wtwc5rHfQ+ATXDo+fl59cXnl4BMt58+jp554XVJ2/DYu3/u28fzj25BFJz4cz+nPiDJWkHS9K/vn4J0gwJPnBQAdWjRAdQ8M9fkCxI6h96VAMALtbIblSMWu4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="rendering diagram"\n        title=""\n        src="/static/renderpattern-3-c46f3a6beda389f53c3b773508f44dee-d766e.png"\n        srcset="/static/renderpattern-3-c46f3a6beda389f53c3b773508f44dee-a6b6e.png 143w,\n/static/renderpattern-3-c46f3a6beda389f53c3b773508f44dee-8e488.png 285w,\n/static/renderpattern-3-c46f3a6beda389f53c3b773508f44dee-d766e.png 570w,\n/static/renderpattern-3-c46f3a6beda389f53c3b773508f44dee-eb3d7.png 800w"\n        sizes="(max-width: 570px) 100vw, 570px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Marionette.JS handles rendering in a way that is similar to the <a href="http://en.wikipedia.org/wiki/Model_View_ViewModel">Model-View-ViewModel</a> pattern that developers who have used KnockoutJS or Durandal will be familiar with <sup id="fnref:1"><a href="#fn:1">1</a></sup>. Marionette implements its render cycle through 2 primary methods available in all of its base View classes.  The first is <code>serializeData</code>. serializeData is a function that produces what is essentially a <code>ViewModel</code> in the sense of an MVVM application. It takes your data (a Backbone Model or Collection), and pulls it into a simplified form that a View can easily render.  By default Marionette will simply call the Model or Collection’s <code>toJSON</code> function to serialize the Backbone object down into a simple JavaScript object.  But it’s possible to override serializeData to provide more complicated logic.  For instance here’s an example from the <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone_marionette">Marionette TodoMVC project</a> that takes a collection of todos and calculates a few values to show the number of completed todos.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>serializeData<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> active <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">getActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        activeCount<span class="token punctuation">:</span> active<span class="token punctuation">,</span>\n        totalCount<span class="token punctuation">:</span> total<span class="token punctuation">,</span>\n        completedCount<span class="token punctuation">:</span> total <span class="token operator">-</span> active\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>Once the serialized data/view model has been prepared, data is passed to the render function which starts by looking for a template to render.  In Marionette, templates are defined by setting the template property on your View, or by setting a getTemplate method if you want to conditionally load your templates. The render function takes that template, passes it the serialized data, and renders it using a template engine.  The default Marionette template engine is Underscore, which makes sense since it’s a Backbone dependency already.  But it’s easy to switch to a different templating engine.  Here’s the entire chunk of code I wrote to use Handlebar templates in Windsor Circle’s Marionette app.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">//render templates with Handlebars instead of Underscore</span>\nBackbone<span class="token punctuation">.</span>Marionette<span class="token punctuation">.</span>Renderer<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> renderer <span class="token operator">=</span> Handlebars<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">renderer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>ItemView and CollectionView</h3>\n<p>Marionette provides several View classes that you can use as bases, but the core Views for representing data are ItemView and CollectionView.  An ItemView takes a single data object, either a Model or Collection and passes it to the template to render.  A CollectionView iterates over a Collection and renders a child View for each Model. You can either use the same View for every Collection, or mix and match Views based on the Model’s properties.</p>\n<p>So for instance, views for a simple todo list might look something like this <sup id="fnref:2"><a href="#fn:2">2</a></sup>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> TodoView<span class="token operator">=</span> Marionette<span class="token punctuation">.</span>ItemView<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    tagName<span class="token punctuation">:</span> <span class="token string">\'li\'</span><span class="token punctuation">,</span>\n    template<span class="token punctuation">:</span> <span class="token string">\'&lt;span class="checkbox" {{checked}}>&lt;/span>&lt;span class="text">{{ text}}&lt;/span>&lt;span class="delete">&lt;/span>\'</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'click .checkbox\'</span><span class="token punctuation">:</span> <span class="token string">\'toggleChecked\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'click .delete\'</span> <span class="token punctuation">:</span> <span class="token string">\'deleteItem\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    serializeData<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            checked<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'checked\'</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">\'checked\'</span><span class="token punctuation">:</span><span class="token string">\'\'</span><span class="token punctuation">,</span>\n            text<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'text\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    toggleChecked<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//logic for checking the box</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    deleteItem <span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//logic for deleting the todo</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> TodoListView <span class="token operator">=</span> Marionette<span class="token punctuation">.</span>CollectionView<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    childView<span class="token punctuation">:</span> TodoView<span class="token punctuation">,</span>\n    tagName<span class="token punctuation">:</span> <span class="token string">\'ul\'</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>When the TodoListView is given a collection and rendered, it will display an unordered list of rendered TodoViews, with the data for each model bound to the template object associated with TodoView.</p>\n<h3>A brief note on 2 way data-binding</h3>\n<p>Marionette data-binding is one-way by default.  Over the last few years the discussion around data-binding has gone from “cool there’s structured data-binding” when Backbone first came out, to “how can you ship without 2-way data-bindings?” when Knockout, Angular and Ember popularized the 2-way approach, to “1 way bindings keep things simple and they’re cool again” based on the popularity of React.  I’m not going to go deep into that debate during this post, but the important takeaway is that Marionette generally prefers explicit bindings to implicit.  So when model values change, it will be based on code that you’ve written, not implicit library code.</p>\n<h3>Wrap-Up</h3>\n<p>I kept things pretty simple in this post, but consistent data binding is a core part of what Marionette provides.  Having a single documented system for attaching Model and Collection data to Views is a big win for keeping Backbone applications lean and readable.  When using these conventions you can move from View to View or project to project and quickly pick up on the intent and structure of the code.  Instead of trying to solve these problems for every  View, you can rely on the experience of others and focus on writing code to achieve your application’s goals.</p>\n<p>This was a short but important start to diving deeper into Marionette. I’ll talk more about layouts, view life-cycles, and other Marionette features in future posts, but at their heart, web applications are about exposing data in rich UIs.  Without that core, your web applications won’t have much function at all.  So make sure to understand and take advantage of this aspect of Marionette before you move on to anything else.</p>\n<h3>More Resources</h3>\n<ul>\n<li>If you absolutely must have 2 way data bindings in Backbone, <a href="http://nytimes.github.io/backbone.stickit/">Backbone.stickit</a> is a good project to check out.  At Windsor Circle we use it for binding model data to forms (2 way data-binding’s best use case).  Rather than the template based approach most libaries use for 2 way data-binding, stickit allows you to configure bindings declaratively in your view code.  </li>\n</ul>\n<div class="footnotes">\n<ol>\n    <li class="footnote" id="fn:1">\n        <p>\n        MVVM is normally associated with 2 ways bindings though, which Backbone and Marionette do not provide\n        </p>\n        <a href="#fnref:1" title="return to article"> ↩</a></p>\n    </li>\n    <li class="footnote" id="fn:2">\n        <p>\n        In practice Marionette developers would likely use a ui hash on the TodoView, pull the template out into a separate file, and might have the CollectionView be a CompositeView to provide structure around the list.  But I\'ll dive into all of those things in more detail in future posts.\n        </p>\n        <a href="#fnref:2" title="return to article"> ↩</a></p>\n    </li>\n</ol>\n</div>',frontmatter:{title:"Marionette Explained: Connecting Data to Your Views",keywords:"JavaScript Marionette.js Backbone MVC Model View",category:"frameworks",date:"2014-12-10T12:30:00+00:00",path:"/2014/12/10/marionette-explained-connecting-your-data-to-your-views",layout:"post",hideFooter:null},fields:{slug:"/2014/12/10/marionette-explained-connecting-your-data-to-your-views"}}},pathContext:{slug:"/2014/12/10/marionette-explained-connecting-your-data-to-your-views",relatedPosts:[{path:"/marionette-explained",data:{title:"Marionette: Explained",path:"/marionette-explained",description:"A series of posts explaining Marionette.js",date:null}},{path:"/2015/09/09/what-can-backbone-developers-learn-from-react",data:{title:"Lessons Backbone Developers Can Learn From React",path:"/2015/09/09/what-can-backbone-developers-learn-from-react",description:"A look at the lessons that Backbone developers can learn from React",date:"2015-09-09T11:19:43+00:00"}},{path:"/2015/01/26/backbone-radio",data:{title:"Building Modular Web Apps With Backbone.Radio",path:"/2015/01/26/backbone-radio",description:"An overview of using Backbone.Radio in Marionette apps",date:"2015-01-26T12:00:00+00:00"}}]}}}});
//# sourceMappingURL=path---2014-12-10-marionette-explained-connecting-your-data-to-your-views-ed33e297197d07951deb.js.map