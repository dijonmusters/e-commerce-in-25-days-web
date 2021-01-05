import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";
import Head from "../components/Head";

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
      <Head />
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
