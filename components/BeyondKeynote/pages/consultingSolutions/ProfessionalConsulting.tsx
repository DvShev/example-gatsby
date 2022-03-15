import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";
import useMediaQuery from "@mui/material/useMediaQuery";
import shutterstock from "./../../../../images/shutterstock-300x200.jpg";

const Content = styled("div")`
  border-top: solid 1px #ddd;
  padding: 50px 0 0 0;
  width: 100%;
  height: 100%;
  text-align: center;
  h4 {
    color: #000;
    font-weight: inherit;
  }
`;

const Boxes = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  .box {
    width: 216px;
    height: 144px;
    color: #fff;
    position: relative;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1340px) {
      :hover {
        .boxLink {
          width: 266px;
          height: 177px;
          line-height: 177px;
          margin: -15px 0 0 -25px;
          z-index: 30;
          padding: 0 45px;
          border: solid 2px #f5af27;
          :before {
            background: 0 0;
          }
        }
      }
    }
    @media (max-width: 1340px) {
      width: 34%;
    }
    @media (max-width: 520px) {
      width: 50%;
    }

    .name {
      display: inline-block;
      vertical-align: middle;
      line-height: 110%;
      text-transform: uppercase;
      font-size: 1.5em;
      position: relative;
      z-index: 20;
      text-shadow: 1px 1px 5px #000;
      @media (max-width: 700px) {
        font-size: 1em;
      }
    }
  }
`;
const LinkCustom = styled(Link)<{ img?: string }>`
  display: flex;
  background-image: url(${({ img }) => (img ? img : "none")});
  width: 216px;
  height: 144px;
  padding: 0 20px;
  color: #fff;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 200%;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  @media (max-width: 1340px) {
    width: 100%;
  }

  :before {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
`;
export const ProfessionalConsulting = () => {
  return (
    <ContainerMain bg="#f4f4f4">
      <ContentRes>
        <Content>
          <div className="heading">
            <h4 className="center">Professional Development Experts</h4>
          </div>
        </Content>
        <Boxes>
          <div className="box">
            <LinkCustom
              className="boxLink"
              img={shutterstock}
              to="https://www.bigspeak.com/executive-coaching-keynote-speakers/"
            >
              <span className="name">Executive Coaching Keynote Speakers</span>{" "}
            </LinkCustom>
          </div>
          <div className="box">
            <LinkCustom
              className="boxLink"
              to="https://www.bigspeak.com/high-tech-humor-keynote-speakers/"
            >
              <span className="name">High-Tech Humor Keynote Speakers</span>{" "}
            </LinkCustom>
          </div>
        </Boxes>
      </ContentRes>
    </ContainerMain>
  );
};
