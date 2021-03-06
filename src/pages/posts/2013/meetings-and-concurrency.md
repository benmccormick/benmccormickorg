---
title: "Meetings And Concurrency"
date: "2013-12-30T11:00:00+00:00"
layout: "post"
path: "/2013/12/30/meetings-and-concurrency"
description: "The trouble with in-person meetings"
category: "soft-skills"
topics: ['Teams']
pageViews: "114"
last30pageViews: "0"
---

Working with a large number of people on any significant project eventually involves meetings.  You can delay it for a while, and you can try to replace them with all sorts of things, including email, IM, wikis, and guessing people's intentions.  Doing so is, of course, completely worthwhile.  Eventually though, meetings are inevitable.

There are several different flavors of meetings.  There are decision-making meetings, where a crowd of people gather together, either to argue, watch other people argue, or to carefully watch the hands of the clock make their way around its circumference. There are Powerpoint meetings, wherein an individual gathers his victims (sorry was that coworkers?) together and proceeds to read bullet points from a set of slides to them.  There is also the conference call meeting, which has led many people to a deeper appreciation for the mute button on their phone.  Rarest of all is the actual productive meeting, where information is exchanged, decisions are made, and life continues without irreparable harm.

So is there any hope for productive meetings?  It's important to realize that a meeting should be the last resort for most things.  Meetings are blocking synchronous activities.  Everyone gives up a set piece of time and that time is the same for everyone. The meeting length is limited by the attendee most willing to keep talking. Generally that time cannot be used for anything else by the people involved in the meeting.

Programmers have several options for handling long running blocking operations while coding.  The first is the naive approach.  The following coffeescript is an example:

```coffeescript
meetingDone = false

# are we done yet?
until meetingDone
    if person1Ready() and person2Ready() and person3Ready()
        longRunningMeeting()

#Do whatever's next, plus anything that depends on the meeting
followUpOnMeeting()
backToWork()
```

This is how things often work when it comes to meetings, but that code wouldn't last long in a professional software environment.  Everything grinds to a halt until the meeting is done, which keeps the program from doing anything else or responding to user input.

A second option while coding is the multi-threaded approach.  In coffeescript that looks something like this:

```coffeescript

# Do meeting tasks in a worker thread
meeting = new Worker "meeting.js"

# When the meeting is done, act on a follow up message
meeting.addEventListener "message", (e) ->
    followUpOnMeeting(e.data)

meeting.postMessage "Start"

# get back to work right away
backToWork()
```

This is equivalent in the real world to limiting the people in a meeting.  Rather than allowing a meeting to block all our resources, we put only some of our resources into the meeting and then pass the results of the meeting on to the rest of the team once the meeting is complete.

This is an important principle for meetings. Meetings should contain the minimum amount of people needed to accomplish their purpose.  When meetings grow beyond that size (due to laziness, politics, process or confusion) they begin to become exponentially less productive.

Of course multi-threaded approaches can still suffer the same issues as single threaded programs if you try to do too much.  If the worker thread in the example above looks like the code below, we will not have gained much.

```coffeescript
# meeting.coffee
self.addEventListener "message", (e) ->
    somebodyHasMadeADecision = false

    # are we done yet?
    until somebodyHasMadeADecision
        if  person1Indecisive() and person2Scared() and person3Clueless()
            longRunningMeeting()

    self.postMessage "meeting is finally done"
```

No matter who is involved it's important for meetings to have a clear purpose.  Just like you wouldn't put all of your program's logic inside a single worker thread, the best meetings are simple, single purposed, and lightweight, based on clear, answerable questions.

There's a third approach that programmers can take to long running processes.  They can use asynchronous operations, as shown below using promise notation.

```coffeescript

# define an email response function
readResponses = (message) ->
    respond = readEmail()
    if respond then respondToEmail()

sendEmail("importantTopic")
    # responses and respond if necessary
    .then(readResponses)
    # read more responses and respond if necessary
    .then(readResponses)
    # follow up when the responses are done
    .done followUpOnMeeting

# After email we can go back to work right away
backToWork();
```

This async approach doesn't delegate different resources for different problems, instead we change how we're thinking about long running operations.  Rather than tying up resources to deal with them, we make them a separate operation that can be consumed and responded to when our program has available time. You can't do that with meetings.

By contrast, email, documentation, and other "information artifacts" can be consumed asynchronously, at different paces and different times by different people. They don't block off any particular time that might need to be devoted to other things.  So Powerpoint meetings can become an email that contains a Powerpoint or wiki page, followed if necessary by clarifying questions which people can work through at their own pace. Decision meetings can become a back and forth discussion on a mailing list, that the interested parties can participate in as they have time and motivation.  It removes blocking issues completely by removing the requirement of all participants being on the same time schedule.

So the takeaways from this coffee flavored reflection on meetings:  Async operations are your friends.  Don't have meetings.  If you do, keep them short, small, and focused. Friends don't let friends read their powerpoint slides line by line.
