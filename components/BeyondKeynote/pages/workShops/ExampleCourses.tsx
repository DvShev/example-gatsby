import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";

let foo = [...Array(12).keys()];

const Title = styled("h3")`
  font-size: 1.375em;
  margin: 50px 0;
  color: #000;
  text-align: center;
  font-weight: inherit;
  @media (max-width: 520px) {
    font-size: 1.875em;
  }
`;
const CoursesLink = styled(Link)<{ img: string }>`
  padding: 0 40px;
  background-image: url(${({ img }) => img});
  display: flex;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  position: relative;
  color: #fff;
  justify-content: start;
  align-items: flex-end;
  text-decoration: none;
  text-transform: uppercase;
  text-align: left;
  transition: all 0.3s ease;
  @media (max-width: 880px) {
    height: 200px;
  }
  :hover {
    background-size: 120% auto;
    transition: all 0.3s ease;
  }
  :before {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;
const TitleCourses = styled("span")`
  display: block;
  margin-bottom: 20px;
  position: relative;
  font-size: 1.375em;
  z-index: 20;
  color: #fff;
`;
const ContainerTopics = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const Name = styled("span")`
  font-size: 1.063em;
  color: #fff;
  position: relative;
  :before {
    content: " ";
    display: block;
    width: 110px;
    height: 1px;
    background: #f5af27;
    position: absolute;
    left: 0;
    top: -10px;
  }
`;
const ContainerText = styled("div")`
  margin-bottom: 30px;
`;
const Courses = () => {
  return (
    <CoursesLink
      to="https://www.bigspeak.com/workshops/change/"
      img="https://www.bigspeak.com/wp-content/uploads/2014/07/Canadian-Financial-Institution-shutterstock_161247014-e1422386085239-780x521.jpg"
    >
      <ContainerText>
        <TitleCourses>
          <strong>In Extremis Leadership</strong>
        </TitleCourses>
        <Name>
          <strong>Thomas A. Kolditz</strong>{" "}
        </Name>
      </ContainerText>
    </CoursesLink>
  );
};

export const ExampleCourses = () => {
  return (
    <ContainerMain bg="#fff">
      <Title>
        <strong>Workshop Topics</strong>
      </Title>
      <ContainerTopics>
        {foo.map((_, idx) => {
          return <Courses key={idx} />;
        })}
      </ContainerTopics>
    </ContainerMain>
  );
};
