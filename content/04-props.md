---
title: What are Props?
videoUrl: https://youtu.be/ofRNhSRGHkQ
keywords: [React, Basics, Props]
---

Props are how we can pass values from parent components, to their children. In React this is done by declaring attributes on JSX elements. These are automatically passed into the React component as Props.

In this video we look at managing the total number of clicks across multiple buttons, which requires us to pass variables down to child components, as well as an updater function.

This is what is referred to as "One Way Data Flow", which is fundamental to the design of React. Data cannot be passed from a child component back up to its parent, so we need to pass a function down to the child that it can use to notify the parent that something has changed.
