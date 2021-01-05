import { default as NextHead } from "next/head";

const Head = () => {
  const isDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <NextHead>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href={isDarkMode ? "favicon-dark.ico" : "favicon.ico"} />
      <meta property="og:title" content="E-commerce in 25 days" />
      <meta
        property="og:description"
        content="Build an e-commerce platform in 25 days using Next.js, Netlify and Stripe"
      />
      <meta
        property="og:image"
        content="https://e-commerce-in-25-days.netlify.app/medium.png"
      />
      <meta
        property="og:url"
        content="https://e-commerce-in-25-days.netlify.app/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="E-commerce in 25 days" />
      <meta
        name="twitter:image:alt"
        content="Santa Claus drinking whisky and smoking cigar"
      />
      <title>
        🚀 Build an E-commerce platform in 25 days using Next.js, Netlify and
        Stripe!
      </title>
      <meta
        name="description"
        content="This is a free 25 video course on building an e-commerce platform or online store with Next.js, Netlify and Stripe! Over the course of 25 days (or 1 if you want to binge it!) we will incrementally create a statically generated Jamstack site to sell your goods, that is 100% free to host!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  );
};

export default Head;
