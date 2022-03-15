import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";
import iconGo from "./../../../../images/boxNext.png";

const ContainerBox = styled("div")`
  width: 166px;
  margin: 0 2.5px;
  height: 250px;
  .linkNext {
    display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-bottom: 35px;
  text-decoration: none;
  transition: all 0.3s ease;
  :before {
    content: " ";
    display: block;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: solid 2px #f9b329;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
  :hover {
    width: 196px;
    margin: -20px 0 0 -15px;
    z-index: 150;
    :before {
      opacity: 1;
      box-shadow: 0 17px 49px 16px rgb(0 0 0);
    }
    .name{
            background: #f3ae29;
            color: #000;
            padding-bottom: 50px!important;
            z-index: 150;
            :after{
                opacity: 1;
            }
        }
    }
  }
  .name {
    display: block;
    text-align: center;
    background: #212121;
    color: #fff;
    bottom: 0;
    width: 100%;
    text-transform: uppercase;
    font-size: 0.75em;
    z-index: 40;
    font-weight: 700;
    padding: 12px 10px;
    position: absolute;
    transition: all 0.3s ease;
    :after {
      content: " ";
      display: block;
      opacity: 0;
      width: 25px;
      height: 20px;
      background: url(${iconGo}) no-repeat 0 0;
      background-size: 25px 20px;
      position: absolute;
      left: 50%;
      bottom: 15px;
      margin: 0 0 0 -12.5px;
      transition: all 0.3s ease;
    }
  }
  }
`;
const Image = styled("img")`
  width: 100%;
`;
const ConteinerBoxes = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled("h1")`
  font-size: 2.25em;
  text-transform: uppercase;
  color: #000;
  font-weight: inherit;
  text-align: center;
  @media (max-width: 520px) {
    font-size: 1.875em;
  }
`;
const BoxItem = () => {
  return (
    <ContainerBox>
      <Link className="linkNext" to="#">
        <Image src="https://www.bigspeak.com/wp-content/uploads/2015/01/Josh_Linkner_Headshot-3-e1618428961579-196x196.jpg" />
        <span className="name">Josh Linkner</span>
      </Link>
    </ContainerBox>
  );
};
export const Partnership = () => {
  return (
    <ContainerMain bg="#f4f4f4">
      <ContentRes bottom="40">
        <Title>In Partnership with impacteleven</Title>
        <ConteinerBoxes>
          <BoxItem />
          <BoxItem />
          <BoxItem />
          <BoxItem />
          <BoxItem />
        </ConteinerBoxes>
      </ContentRes>
    </ContainerMain>
  );
};
