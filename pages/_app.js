import Head from "next/head";
import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background: linear-gradient(to right, #fc00ff, #00dbde);
  font-family: "Open Sans", sans-serif;
  color: #444;
  min-height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Normalize />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    </>
  );
};

export default MyApp;
