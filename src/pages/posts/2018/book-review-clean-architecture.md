---
title: "Book Review: Clean Architecture"
date: "2018/02/14"
layout: "review"
path: "/2018/02/14/book-review-clean-architecture/"
description: "Uncle Bob's book on architecture is informative, but limits its scope"
keywords: "SOLID architecture Uncle Bob Robert Martin interfaces"
category: "reviews"
topics: ['architecture', 'book-review']
key: "clean-architecture-book"
image: https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0134494164&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=benmccormicko-20&language=en_US
amazonlink: https://amzn.to/2RkxQTb
readNext: "react-confessions,large-improvements-small-team,ll-context"
---

[Clean Architecture](http://amzn.to/2mKoejo) by Robert "Uncle Bob" Martin was one of the better books on Software Development I've read in recent years.  It did exactly what I want from a software book in 2018: it tackled an important high level topic with a great amount of depth in a way that helped me as a reader to develop insight and perspective on the topic.  These days blog posts and other online sources cover most of my "how to" needs, as well as the simple "what is X and why should I care about it" questions that I used to go to books for.  But there is still no substitute for books when you want an in depth understanding of an important broad topic.
<a href="https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=as_li_ss_il?ie=UTF8&qid=1516226851&sr=8-1&keywords=clean+architecture&linkCode=li2&tag=benmccormicko-20&linkId=c599845decc4e5ed1457acae2a375ad6" target="_blank">
  <img border="0" class="inline-img" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0134494164&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=benmccormicko-20" ></a><img  src="https://ir-na.amazon-adsystem.com/e/ir?t=benmccormicko-20&l=li2&o=1&a=0134494164" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
For this book, that topic is software architecture.  The book tackles it by starting with some history, and then starting with a micro view before expanding out its gaze.  After giving a broad overview of the different software paradigms, Martin walks readers through 3 levels of architecture principles: class-level design principles, component-level component principles and system-level architecture principles.  At each level he shows the similarities between the lower level principles, as well as the unique concerns at each scale. Then he wraps it up with a case study example that shows the principles discussed throughout the book in action.


I found Clean Architecture to be a great reminder of concepts I learned in school[^1] that I didn't properly appreciate at the time due to a lack of practical experience.  It brought home to me that while there are some architectural things I do pretty well right now, like keeping code separated enough that it only has one reason to change, there are other things that I don't do well a lot of the time.  For me the biggest realization was how much grief I've caused myself the last few years from failing to keep high level policies from depending on low level details.  The book gave me a few new lenses to examine my decisions with, and definitely inspired me to spend more time taking a step back to see the big picture as I'm adding new features.

For me, that sense of perspective was the biggest win, but if you're looking for detailed "how tos", there's a decent amount of that as well.  Martin goes into details about how to arrange and refactor classes to create maintainable systems that are easy to change, as well as identifying patterns to look for that may be a sign of problems to come.  He goes pretty deep into the weeds with examples and class diagrams as he discusses creating proper system boundaries and pulls it all together with a nice case study example at the end.

While I did find Clean Architecture extremely helpful overall, I do have some nitpicks.  The biggest for me personally is that while the book mentions dynamic languages like Ruby and Python a few times, it mostly does so in passing to say that the principles mention still apply, but may look different.  Since this is usually not expanded upon, and all of the examples given seem to assume static languages that provide abstract interfaces to classes, it is sometimes hard to see how the books principles should be applied to the dynamic languages that I use daily.  I would love to have seen more detail there.  Also, the final chapter of the book "The Missing Chapter" was a bit of an oddity.  It was written by a different author[^2], framed issues that had already been covered differently, and came to some different conclusions than the rest of the book.  It was almost a counterpoint to the other parts of the book, which could have been interesting, but lacked an introduction or context to help explain its purpose.  Overall it left me a bit confused and ended the book on a discordant note rather than bringing the ideas together and focusing me on the important ideas.

I can recommend [Clean Architecture](http://amzn.to/2mKoejo) for anyone who wants to get better at thinking about the big picture when it comes to software systems, particularly if you haven't already been exposed to any of the theory behind designing maintainable systems.  If you're usually working in static languages on larger projects, I would double that recommendation, as you'll be right in the book's wheelhouse.  For those like me working with dynamic languages on web projects, it may be a bit more hit or miss, but it still is a great way to broaden your horizons and gain some new ways of thinking about the tradeoffs our work entails.



[^1]: I was a Computer Science major, but if you weren't exposed to theories of software architecture through a curriculum
[^2]: This was not obvious to me on first reading, I only went back and noticed the acknowledgement on the chapter page when I was confused by a 3rd person reference to the author.
