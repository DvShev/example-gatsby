import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";

let foo = [...Array(15).keys()];

const Title = styled("h3")`
  font-size: 1.375em;
  margin-bottom: 50px;
  color: #fff;
  text-align: center;
  font-weight: inherit;
  @media (max-width: 520px) {
    font-size: 1.875em;
  }
`;
const TopicLink = styled(Link)<{ img: string }>`
  border: solid 1px #000;
  padding: 0 40px;
  background-image: url(${({ img }) => img});
  display: flex;
  height: 174px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  :before {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
  }
  :hover {
    :before {
      opacity: 0.3;
    }
  }
`;
const TitleTopic = styled("span")`
  display: block;
  position: relative;
  font-size: 1.125em;
  z-index: 20;
  color: #fff;
`;
const ContainerTopics = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1340px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
const Topic = () => {
  return (
    <TopicLink
      to="https://www.bigspeak.com/workshops/change/"
      img="https://www.bigspeak.com/wp-content/uploads/2014/10/BigSpeak-Life-Work-Balance-780x514.jpg"
    >
      <TitleTopic>
        <strong>Execution & Accountability</strong>
      </TitleTopic>
    </TopicLink>
  );
};

export const WorkshopTopics = () => {
  return (
    <ContainerMain bg="#000">
      <Title>
        <strong>Workshop Topics</strong>
      </Title>
      <ContainerTopics>
        {foo.map((_, idx) => {
          return <Topic key={idx} />;
        })}
      </ContainerTopics>
    </ContainerMain>
  );
};
