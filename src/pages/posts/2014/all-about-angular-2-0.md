---
title: "Thoughts on Angular 2.0"
date: "2014-11-08T19:24:09+00:00"
layout: "post"
path: "/2014/11/08/all-about-angular-2-0"
category: "frameworks"
description: "An early look at the next version of Angular"
topics: ['Angular']
pageViews: "765"
last30pageViews: "2"
---

Rob Eisenberg has a pretty incredible rundown of the current Angular 2.0 proposal and the thought process behind it [on his blog][aaa2].  

> Given Angular's design origins in combination with the changing web and general computing landscape, it's pretty clear that some changes are needed. In fact, without starting to address these issues now, Angular runs the risk of being obsolete within a year's time. A framework that cannot work with Web Components, bogs down on mobile or continues to push its own module and class API against the standards, is not going to last long. The Angular team's answer to these problems is a new version: Angular 2.0. It is essentially a re-imagining of AngularJS for the modern web, taking into account everything that has been learned over the last five years.

He describes in detail the various challenges that the Angular team has faced in keeping the current version modern, the justification for a drastic breaking change, and provides a fascinating look at the inner debates and thought process that produced the current controversial proposal. It's long, but well worth reading for any Angular developer or anybody interested in the near future changes coming to the web platform.  The trends he identifies here are going to effect every library and framework out there, and it will be interesting to see how they respond.

As for Angular's specific response, it's a bit hard not to see their approach as throwing their hands up in the air, giving up and building something new, but keeping the name.  Rob (a recently added member of the core team) even calls them out on this to a certain extent.

> Even though I haven't got to the details yet, you can probably tell that AngularJS 2.0 is quite different from 1.x. One might ask if it's even the same framework. I think that's a good question. As I've mentioned earlier, I think the Angular team needs to shoulder the burden of providing a concrete timeline for 1.x support, a migration path to 2.0 and some guidance for companies making decisions today or who would like to plan in advance for 2.0. These are not particularly exciting tasks for the technically-minded Angular team, but I think they are necessary, helpful and respectful to the community.

If you haven't yet seen the changes coming in Angular 2.0, the tl;dr version is that everything has changed.  Syntax is different across the board, not just at a micro level but also at the structural level.  Several of the key concepts that Angular developers have had to learn including controllers, scope, and 2 way binding are either definitely gone, still being debated, or changed beyond recognition.  And the core concepts of modules, dependency injection and directives have all had major compatibility breaking syntax changes.  Keeping the Angular name seems to be more a matter of the new project sharing a general philosophy and set of maintainers with the old project rather than a suggestion that this is simply a large iteration on an existing framework.

A few more assorted thoughts:

- I really appreciated the listing of the challenges Angular is facing at the beginning. From my outsider perspective (I'm a web developer but have not spent a lot of time with Angular recently), it seems like they've nailed the first step of asking the right questions.  Any framework that isn't optimized for mobile browsers or doesn't integrate with ES6 classes and modules is likely to look silly in a few years.  And while web components are still not a sure thing, they're rapidly [becoming a standard for reusable code on the web][wc].

- Creating a custom JS preprocessor to support the framework you're building is starting to look like a trend.  And that is not a good thing.  I was not a fan of React bundling JSX, and Angular 2.0's use of AtScript seems to be equally unfortunate.  In both cases the language is not required to use the framework, but instead is treated as a "First Class" language used as an escape hatch to smooth over rough patches in their API.  At least JSX is a spec, even if it's a very React centric one.  AtScript appears to be a Google only thing at the moment, inspired by but incompatible with Typescript.

- The next time I hear a developer claim that marketing is worthless, I'm going to bring up the last few weeks in the JavaScript framework world.  Angular announced their 2.0 plans for the world in a presentation that many people saw only as a [set of slides filled with tombstones][angular2slides].  By focusing (at least on the slides) on the things being lost and the drastic changes to syntax, the online conversation focused on the compatibility problems with the release, rather than the problems it would solve.  Now we finally have a detailed explanation of why these breaking changes are happening, but it's in the form of an opinionated blog post that emphasizes the current uncertainty around the project.  Angular seems to have found an awkward middle ground between involving the community from the beginning and releasing a polished product, where they've introduced a "not quite ready" concept to the world.

    Contrast that to the [EmberJS][ember] team, which has pretty transparently taken advantage of the marketing confusion around Angular in order to double down on a message of "stability without stagnation.  Their [Ember 2.0 RFC][emberrfc] is clearly informed by the reception to Angular's plans, especially the 2nd paragraph.

    > This is not a big-bang rewrite; we will continue development on the master branch, and roll out changes incrementally on the 1.x release train. The 2.0.0 release will simply remove features that have been deprecated between now and then. Our goal is that you can move your Ember app to 2.0 incrementally, one sprint at a time.

    Ember and Angular are facing roughly the same challenges in terms of deprecating old syntax and adapting to changes in the web platform.  Regardless of what you think of their different approaches, by clearly articulating their plans in a united way before they begin actually writing the code to accomplish them, Ember is winning the marketing battle here by a mile.  

- Related to all of the above, it's hard to recommend starting a new Angular project to anyone right now.  While the 1.x branch will continue to receive support going forward if for no other reason than the number of people currently using it, the issues that 2.0 is trying to solve are real and will make it harder for 1.0 to keep up with the rest of the web as it goes forward.  This is not a Python 2/3 situation where Python 2 still remains a viable language to start a project with 6 years later.  Because the web platform will continue shifting under the code, a language that doesn't support modern idioms will quickly begin to fall behind alternatives.  It's very possible that Angular 2.0 will regain Angular 1.x's current spot as the most popular MVC framework on the web, but until it's released or the core team can show a clear migration path from 1.x to 2.0, Angular development is going to look like a dead end road.









[emberrfc]: https://github.com/emberjs/rfcs/pull/15
[ember]: http://emberjs.com/
[wc]: http://benmccormick.org/2014/08/07/component-based-development/
[aaa2]: http://eisenbergeffect.bluespire.com/all-about-angular-2-0/
[angular2slides]: https://docs.google.com/presentation/d/1XQP0_NTzCUcFweauLlkZpbbhNVYbYy156oD--KLmXsk/preview?utm_content=bufferf1174&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer&slide=id.p
