---
title: Create a global cart
videoUrl: https://youtu.be/Adn-VyDGgyo
keywords: [React, Context, Global]
---

Our cart is awesome! But what if we want multiple components in our application to know what is in the cart?!? We could declare the cart in our root most component, and pass it down as props to any component that needs to know about it, but this can get very messy. Especially if we have a component a few levels deep that needs to know about the cart. We would need to pass the cart through every component in that tree, even though those components don't care about the cart. This is bad!

Thankfully, React gives us Context, which is a way to create some global state, that any of our components can subscribe to!

In this video we use React Context to make our shopping cart globally accessible. This means that any component - no matter how deep in the hierarchy - can know what's in the cart, and will be automatically re-rendered when the cart is updated!
