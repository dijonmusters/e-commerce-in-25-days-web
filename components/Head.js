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
    </NextHead>
  );
};

export default Head;
