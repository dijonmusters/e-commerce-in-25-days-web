import { useEffect } from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import styled from "styled-components";
import Player from "react-player/lazy";
import marked from "marked";
import throttle from "lodash/throttle";
import { sm } from "../utils/mediaQueries";

const Container = styled.div`
  padding: 1rem 0;

  ${sm`
    padding: 1rem 0.25rem;
  `};
`;

const Lesson = styled.div`
  margin-bottom: 1rem;
  background: white;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const VideoPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  padding: 1rem 2rem;

  ${sm`
    padding: 1rem;
  `};
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;

  ${sm`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 2rem;
  `};
`;

const Day = styled.span`
  ${sm`
    font-weight: 500;
    margin-bottom: 0.5rem;
  `};
`;

const Colon = styled.span`
  ${sm`
    display: none;
  `};
`;

const Subtitle = styled.span`
  ${sm`
    font-weight: 700;
    /* margin-left: 0.5rem; */
  `};
`;

const KeywordContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;

  ${sm`
    margin-top: 1rem;
    margin-left: 0;
    justify-content: space-between;
  `};
`;

const Keyword = styled.span`
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  background: ${({ background }) => background};
  border-radius: 10px;
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;

  ${sm`
    text-align: center;
    flex: 1;
    justify-content: center;
  `};
`;

const Description = styled.div`
  padding: 0.5rem 1rem;

  ${sm`
    padding: 0.25rem;
  `};
`;

const keywordColours = [
  "linear-gradient(to right, #fc00ff, #b43ff6)",
  "linear-gradient(to right, #b43ff6, #489ce7)",
  "linear-gradient(to right, #489ce7, #00dbde)",
];

const renderLesson = ({ content, title, videoUrl, keywords }, i) => {
  const html = marked(content);
  return (
    <Lesson key={title} id={i + 1}>
      <VideoContainer>
        <VideoPlayer width="100%" height="100%" url={videoUrl} />
      </VideoContainer>
      <Content>
        <Title>
          <Day>🎄Day {i + 1}</Day>
          <Colon>: </Colon>
          <Subtitle>{title}</Subtitle>
        </Title>
        <KeywordContainer>
          {keywords.map((keyword, i) => (
            <Keyword key={keyword} background={keywordColours[i]}>
              {keyword}
            </Keyword>
          ))}
        </KeywordContainer>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Lesson>
  );
};

const handleScroll = throttle(() => {
  localStorage.setItem("scrollY", window.scrollY);
}, 1000);

const HomePage = ({ lessons }) => {
  useEffect(() => {
    const scrollY = localStorage.getItem("scrollY");
    if (scrollY) {
      console.log("running");
      window.scroll(0, parseInt(scrollY));
    }
    window.addEventListener("scroll", handleScroll);
  }, []);
  return <Container>{lessons.map(renderLesson)}</Container>;
};

export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const lessons = filenames.map((filename) => {
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    const { data, content } = matter(fileContent);
    return {
      ...data,
      content,
    };
  });

  return {
    props: {
      lessons,
    },
  };
};

export default HomePage;
