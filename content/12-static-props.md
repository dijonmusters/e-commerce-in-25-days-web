---
title: Static generation with getStaticProps
videoUrl: https://youtu.be/iwx0Epj3EjM
keywords: [Next.js, SSG, getStaticProps]
---

Next.js allows us to tell it which pages in our application we would like to generate at build time. This can massively improve the performance of our application, making our users much happier! 🙂

In this video we look at using Next's getStaticProps function to tell it how to fetch data from the Pokemon API. It will then run this function at build time and inject the required data into our page component as props.

This hugely reduces the number of requests made each time the user refreshes, in fact it goes from 152 down to 0!
