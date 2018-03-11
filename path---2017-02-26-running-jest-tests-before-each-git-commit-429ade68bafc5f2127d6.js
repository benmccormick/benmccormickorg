webpackJsonp([0xdfa74382c7b8],{709:function(t,s){t.exports={data:{markdownRemark:{html:'<p>My main work project makes heavy use of <a href="https://facebook.github.io/jest/">Jest</a> to test our JavaScript code.  For a while now I’ve wanted to set up a way to run tests every time I run a commit.  I knew that git provides <a href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks">hooks</a> that allow scripting actions to occur before or after any commit or push, and in fact we were already using a <code>pre-commit</code> hook script to lint our code with <a href="http://eslint.org/">ESLint</a>.  But it was non-obvious how to make that work well with Jest testing.  I eventually figured out a setup that worked, and the found a better way to do both the Jest and ESLint testing.  Since it took me a while to work through, I thought I’d share it here and save the rest of you some time.</p>\n<h3>What didn’t work</h3>\n<p>A naive approach to this problem would be to set up a pre-commit hook that simply ran <code>jest</code> to run all tests. The problem is that running our full test suite currently takes between 10 and 20 seconds to run all tests and that time is increasing as we grow our test suite.  Adding that overhead to every commit would cost my team a lot of time, and would be especially inefficient since the repo contains plenty non-JavaScript code that doesn’t require tests to be run when updated.</p>\n<p>For our ESLint hook, we queried git to get a list of staged files, and then ran eslint against each one of them individually, displaying a pass/fail message.  That looked something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>STAGED_FILES<span class="token operator">=</span><span class="token punctuation">$(</span>git <span class="token function">diff</span> --cached --name-only --diff-filter<span class="token operator">=</span>ACM <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"js$"</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$STAGED_FILES</span>"</span> <span class="token operator">=</span> <span class="token string">""</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">exit</span> 0\n<span class="token keyword">fi</span>\n\nPASS<span class="token operator">=</span>true\n\n<span class="token keyword">for</span> FILE <span class="token keyword">in</span> <span class="token variable">$STAGED_FILES</span>\n<span class="token keyword">do</span>\n    eslint --quiet <span class="token string">"<span class="token variable">$FILE</span>"</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$?</span>"</span> <span class="token operator">==</span> 0 <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token keyword">echo</span> <span class="token string">"\\t\\033[32mESLint Passed: <span class="token variable">$FILE</span>\\033[0m"</span>\n    <span class="token keyword">else</span>\n        <span class="token keyword">echo</span> <span class="token string">"\\t\\033[41mESLint Failed: <span class="token variable">$FILE</span>\\033[0m"</span>\n        PASS<span class="token operator">=</span>false\n    <span class="token keyword">fi</span>\n<span class="token keyword">done</span>\n</code></pre>\n      </div>\n<p>This works great for ESLint, but doesn’t work out of the box for Jest, because I don’t want Jest to run the files that changed, I want them to run any tests that changed AND any tests that might have been broken because of that.</p>\n<p>Jest has a wonderful command line flag <code>jest --onlyChanged</code>/<code>jest -o</code> that runs only the tests related to files that have been changed according to git.  It is extremely helpful since it is smart enough to read the dependency structure for the project and run all tests that might be changed from updating a source file. It also has a <code>--lastCommit</code> option that does the same thing for files that were in the previous commit.  Unfortunately, these options aren’t helpful at the point of committing, since <code>onlyChanged</code> does not look at files that have been staged for commit, and we haven’t actually made a commit yet for <code>lastCommit</code> to read.</p>\n<h3>What Did Work</h3>\n<p>Fortunately Jest has a lower level command that uses the same logic as <code>onlyChanged</code> and <code>lastCommit</code>.  <code>--findRelatedTests</code> is a flag that tells Jest to run any tests related to the files passed to it instead of trying to run those files as tests as it would normally do.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/jest-related-tests-9350cbcea06e8f1f423335d94d84ac98-1b819.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 81.97573656845753%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACYElEQVQ4y41UyW7TUBT1t7GoxA4EWzZsQCz4KYSEQKBSAWppJVQQlDYNbVzHyYsd2+95SNI4djwl6Xi4fulAUJtmcXSvh3feHc69yiA0YbochrAJDizPAfcdmOQP6dto2MbZyCUInI+n9ozs+S1Q1jafY3XzJeK+gcOgBbtdg8s1eEJHL2hIQhx5V2Tnc8gk4auP9/Dm0xLymBGhjrr2C6y5jRbbgWXu0gV/MOg1MUnt6wjnECvvvjzAh7VHSMIGhF3DduUbNG0LqvqTCKtwiNB1asgiczHC96sPsfz1MYphi0gNdLwD+EKFY+1RxHWkAwPHuQNMvMVSDtzv6He35MGjzKGaWeS3kFNESUg2NnFa8KvIpphDaJs1cEuVdSrocFmzFqtg2G9JwuiQzXb4gvA2KAbbhsf3ZTePqPAdT5PRYXJ9610kM4SjhONk5GOScYzLlFNH+ieFkKmeFlS/sVgYymFPhcGbsKWgOdyOQNAV4AFHMrAQRhyDJECUeGR9pJmHLJv6ESFOPcRkh+n0vbKy8QTL608R9hh8t4G6XiEdVsHYHoSjwnXriGMHRe5JjHMXk8JFnnlX7wryRxfflNcrS3j7+T51VkdAcqmQDpuN31LgnKTTJ+lEXR2TpC3remfKa5vPsP7jBcZ0IKIohbOPwD2gRtWkDnu+hrBLI5hYCzVICbsayaNJMmEkm5K0KQnKySiRX0zIrGzEzMT86yussQOD7dJyYFI6baMqcUlYTg/ox3JS/sdNC0MRNtWpo1PKFk2KTRtGl0TluB3nXC6F8rkU+uUF5VSVE3TTwvgL5+Ghb81Fxi8AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="an example of findRelatedTests running against the redux repo" title="" src="/static/jest-related-tests-9350cbcea06e8f1f423335d94d84ac98-d766e.png" srcset="/static/jest-related-tests-9350cbcea06e8f1f423335d94d84ac98-a6b6e.png 143w,\n/static/jest-related-tests-9350cbcea06e8f1f423335d94d84ac98-8e488.png 285w,\n/static/jest-related-tests-9350cbcea06e8f1f423335d94d84ac98-d766e.png 570w,\n/static/jest-related-tests-9350cbcea06e8f1f423335d94d84ac98-1b819.png 577w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>This is a perfect fit for a pre-commit hook.  I was able to integrate it into my existing script like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>jest --bail --findRelatedTests <span class="token variable">$STAGED_FILES</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$?</span>"</span> <span class="token operator">==</span> 0 <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token string">"\\t\\033[32mJest Tests Passed\\033[0m"</span>\n<span class="token keyword">else</span>\n    <span class="token keyword">echo</span> <span class="token string">"\\t\\033[41mJest Tests Failed\\033[0m"</span>\n    PASS<span class="token operator">=</span>false\n<span class="token keyword">fi</span>\n</code></pre>\n      </div>\n<p><code>$STAGED_FILES</code> is re-used from the eslint portion of the script, and is just a space delimited list of files that are being committed.  The <code>--bail</code> option simply stops running tests as soon as one has failed.  Including that is optional, you won’t see all the tests that have failed, but the failure will happen faster and you’ll be able to decide how to proceed, including possibly running the full test script on your own.   </p>\n<p>Those lines (along with some sanity checks for the existence of Jest and error handling when PASS is set to false) are enough to get a workable commit hook going, but they’re not ideal.  pre-commit hooks aren’t persisted by git, so each user has to install the hook script individually, and any updates aren’t shared automatically.  Plus I’m inefficiently passing all staged files to eslint and Jest regardless of whether they’re JavaScript that those tools are actually meant to work on.  My ESLint code was also written before ESLint developed robust <code>--fix</code> capabilities, and doesn’t try to fix the errors it is capable of fixing.  Finally, while this is just poor coding and not an inherent limitation of my other method, I’m using globally installed versions of Jest and ESLint instead of scoping them to my project.</p>\n<h3>Making it better</h3>\n<p>Fortunately I’d discovered a better solution the other day while working on something else.  There is an npm package for making this process easier, <a href="https://github.com/okonet/lint-staged">lint-staged</a>.  Lint staged abstracts away the boilerplate of getting the staged files, and makes it easy to run local node executables against specific sets of files.  I was able to replace my whole pre-commit script and address all of the problems mentioned above with only a few lines in my package.json:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"*.js"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"eslint --fix"</span><span class="token punctuation">,</span>\n      <span class="token string">"git add"</span><span class="token punctuation">,</span>\n      <span class="token string">"jest --bail --findRelatedTests"</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"3.16.1"</span><span class="token punctuation">,</span>\n    <span class="token property">"jest"</span><span class="token operator">:</span> <span class="token string">"19.0.1"</span><span class="token punctuation">,</span>\n    <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token string">"3.3.1"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code>lint-staged</code> now handles making sure that I’m only running checks against JavaScript files, lets eslint autofix and stage any files that it can fix, and uses the local versions of jest and eslint.  It also adds a nice pretty interface for the results:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-41b68.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 570px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 35.321100917431195%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABCElEQVQoz3WR63KCMBCF8/6P15ZWEUXBCnJLMFwD9nQ3gU7r2B/fbNhkz5zDClkEuFxD6DrEqEO0co+mCtCpPerCt+eGetzv6wOm5oSvPsa9i2x9RHRyB5Vt7OBwc6KmOdrBgQRG2zvCMNSf2+iP4KOwGFWAJH6DzLfk6mBFWYwfYjj/InYsg3z/DGHKLRoSslEJFla5b88szvSLU6597XrP4jqHMsBMyoZccdy5de44GvemBY7LsccFvue3juhnTlTkRl83qOMX8Dn99JAlH8hTgmpy9nArd9AEL0lRAv5uFScKoJel6dLtQBjpY8w8TPk7TOWjK2hB6Sv60rdO1tiry/X//hf5G+jMEWFL2TQIAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="pretty lint-staged output" title="" src="/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-d766e.png" srcset="/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-a6b6e.png 143w,\n/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-8e488.png 285w,\n/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-d766e.png 570w,\n/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-13239.png 855w,\n/static/lint-staged-errors-07049d14abcd3c0065c9779b76d22045-41b68.png 872w" sizes="(max-width: 570px) 100vw, 570px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p><code>lint-staged</code> docs recommend using an npm based hooks manager like <a href="https://github.com/observing/pre-commit">pre-commit</a> for running the scripts, but due to some quirks in my setup (node_modules is symlinked, and I sometimes want to run these commands inside a docker container), I found it easier to maintain a custom pre-commit script and just replace the previous logic with <code>npm run lint-staged</code>.  Either way, all of the actual logic is now checked into the repository and shared between all users.  The only manual step is adding the call to a pre-commit hook or (if you’re using a helper lib) running npm install.</p>\n<h3>More Resources</h3>\n<ul>\n<li>This maybe merits a future post on its own, but if you’re interested in automating away your code style maintenance look at combining <a href="https://github.com/prettier/prettier">prettier</a> (and possibly  <a href="https://github.com/not-an-aardvark/eslint-plugin-prettier">eslint-plugin-prettier</a>) with the pre-commit hooks from above.  Prettier will guarantee that your code follows a consistent style, and because it handles maximum line lengths, is much more robust than ESLint on its own.  Using its ESLint plugin within my editor and on pre-commit hooks has pretty much eliminated me manually fixing code style problems.</li>\n</ul>',frontmatter:{title:"Running Jest Tests Before Each Git Commit",keywords:"Jest testing git pre-commit JavaScript",category:"tools",date:"2017-02-26T23:00:00+00:00",path:"/2017/02/26/running-jest-tests-before-each-git-commit/",layout:"post",hideFooter:null},fields:{slug:"/2017/02/26/running-jest-tests-before-each-git-commit/"}}},pathContext:{slug:"/2017/02/26/running-jest-tests-before-each-git-commit/",relatedPosts:[{path:"/2016/09/19/testing-with-jest-snapshots-first-impressions/",data:{title:"Testing with Jest Snapshots: First Impressions",path:"/2016/09/19/testing-with-jest-snapshots-first-impressions/",description:"First impression of testing UI components using Jest snapshots",date:"2016-09-19T12:41:00+00:00"}},{path:"/2016/12/10/saving-time-with-jest",data:{title:"Saving Time With Jest: Meetup Summary",path:"/2016/12/10/saving-time-with-jest",description:"A summary of my meetup talk on saving time with Jest",date:"2016-12-10T05:15:00+00:00"}},{path:"/2017/01/09/mobx-first-impressions/",data:{title:"MobX: First Impressions",path:"/2017/01/09/mobx-first-impressions/",description:"First impression of managing data with MobX",date:"2017-01-09T13:30:00+00:00"}}]}}}});
//# sourceMappingURL=path---2017-02-26-running-jest-tests-before-each-git-commit-429ade68bafc5f2127d6.js.map