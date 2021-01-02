---
title: Fetching data with Next.js
videoUrl: https://youtu.be/Ckb90Owqk8w
keywords: [Next.js, Fetching Data, Dynamic]
---

Fetching data in Next.js can be done in exactly the same way as a regular React project. Next gives us some control over whether we want to do that on the client, server or at build time, but maybe we are getting ahead of ourselves!

In this video we look at making a HTTP request to the Pokemon API, and discuss the performance implications of cascading requests, - where we need to make several requests based on data from another request.

We end up building a solution that is making 152 requests every time the user refreshes. This is going to make for some very unhappy users! 🙁 In the next video we look at how this can be improved!
