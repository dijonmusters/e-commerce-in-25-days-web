---
title: Create static product list
videoUrl: https://youtu.be/mQuQEk6YWgQ
keywords: [Next.js, SSG, getStaticProps]
---

Time to start actually building our application! Let look at building a landing page that renders each of our products!

In this video we look at using the getStaticProps function to read each markdown file in our content directory, and render a list of products.

Remember this happens once at build time and the values get injected into our Index component. This makes our application much more performant, and reduces the amount of time our user is waiting for an API request to resolve!
