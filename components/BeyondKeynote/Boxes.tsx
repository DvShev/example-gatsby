import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain } from "./../../services/styleContent";
import { Link } from "gatsby";
const ContainerBoxes = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const LinkBox = styled(Link)<{ img: string }>`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 300px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  position: relative;
  color: #fff;
  transition: all 0.3s ease;
  :nth-of-type(2n) {
    justify-content: start;
  }

  justify-content: end;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  @media (max-width: 440px) {
    height: auto;
    padding: 10px;
    background-size: 140% auto;
  }
  align-items: center;
  :hover {
    background-size: 120% auto;
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
const InfContainer = styled("div")`
  z-index: 20;
  width: 650px;
  @media (max-width: 1200px) {
    width: 100%;
  }
  text-align: left;

  padding-right: 60px;
  padding-left: 60px;
  @media (max-width: 440px) {
    padding-right: 10px;
    padding-left: 10px;
  }
  .title {
    text-transform: uppercase;
    font-size: 1.375em;
    position: relative;
    :after {
      content: " ";
      display: block;
      width: 110px;
      height: 1px;
      background: #f5af27;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }
  .description {
    font-size: 0.938em;
    line-height: 22px;
    @media (max-width: 1200px) {
      line-height: 15px;
    }
  }
`;
export const Boxes = () => {
  return (
    <ContainerMain bg="#000">
      <ContainerBoxes>
        <LinkBox
          img="https://www.bigspeak.com/wp-content/uploads/2014/09/Training_and_Workshops.jpg"
          to="workshops/"
        >
          <InfContainer>
            <span className="title">
              <strong>Training &amp; Workshops</strong>
            </span>
            <span className="description <InfContainer />">
              <p>
                Workshops are a great opportunity for your employees or team
                members to apply new ideas to their work by engaging in
                interactive activities and dialogue guided by an expert. In a
                classroom-type setting, participants may use workbooks or other
                learning aides as they share ideas and ask questions as they go
                deeper with material from the original keynote or new
                material.&nbsp;At the intersection of leadership and learning,
                going beyond the keynote is the best way to ensure
                transformational change within any organization.
              </p>
            </span>
          </InfContainer>
        </LinkBox>
        <LinkBox
          img="https://www.bigspeak.com/wp-content/uploads/2014/07/Consulting.jpg"
          to="consulting-solutions/"
        >
          <InfContainer>
            <span className="title">
              <strong>BigSpeak Beyond</strong>
            </span>
            <span className="description">
              <p>
                Based on cognitive science and advanced learning technology, the
                Future Ready Leader Series ensures the investment you made in
                your live event is protected and expanded through a carefully
                curated program led by world-renowned thought leaders.
              </p>
            </span>
          </InfContainer>
        </LinkBox>{" "}
        <LinkBox
          img="https://www.bigspeak.com/wp-content/uploads/2014/07/Consulting.jpg"
          to="bigspeak-beyond"
        >
          <InfContainer>
            <span className="title">
              <strong>Training &amp; Workshops</strong>
            </span>
            <span className="description">
              <p>
                Workshops are a great opportunity for your employees or team
                members to apply new ideas to their work by engaging in
                interactive activities and dialogue guided by an expert. In a
                classroom-type setting, participants may use workbooks or other
                learning aides as they share ideas and ask questions as they go
                deeper with material from the original keynote or new
                material.&nbsp;At the intersection of leadership and learning,
                going beyond the keynote is the best way to ensure
                transformational change within any organization.
              </p>
            </span>
          </InfContainer>
        </LinkBox>
        <LinkBox
          img="https://www.bigspeak.com/wp-content/uploads/2014/07/FIN-HOLDING-shutterstock_203237881.jpg"
          to="case-studies"
        >
          <InfContainer>
            <span className="title">
              <strong>Case Studies</strong>
            </span>
            <span className="description">
              <p>
                Let the research speak for itself. Although training alone
                increases productivity by 22.4%; additional ongoing coaching
                results in productivity gains of 88%. Take a look at how some of
                BigSpeak’s clients have made transformational change in their
                organization by going beyond the keynote with additional
                training.
              </p>
            </span>
          </InfContainer>
        </LinkBox>
      </ContainerBoxes>
    </ContainerMain>
  );
};
