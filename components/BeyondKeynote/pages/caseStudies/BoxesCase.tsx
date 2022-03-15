import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";
import pdf from "./../../../../images/pdf.png";

const Case = styled("div")`
  margin: 10px;
  :hover {
    .slider {
      top: 0;
    }
  }
  p {
    height: 220px;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;

    .topLink {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
  width: 400px;
  @media (max-width: 520px) {
    width: 100%;
  }
  .bottomLink {
    font-size: 1.375em;
    color: #000;
    text-decoration: none;
  }
  .pdf {
    width: 40px;
    height: 40px;
    display: block;
    background: url(${pdf}) no-repeat center center;
    background-size: 22px 30px;
    font-size: 0.438em;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #f4af27;
    padding: 0;
    margin: 0;
  }
  h4 {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const CustomImg = styled("img")`
  width: 100%;
  border-radius: 5px;
  object-fit: scale-down;
`;
const Overlay = styled("span")`
    position: absolute;
    pointer-events: none;
    left: 0;
    height: 100%;
    width: 100%;
    top: -280px; 
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.375em;
    padding: 0 20px;
}
`;
const Box = () => {
  return (
    <Case>
      <p>
        <Link className="topLink" to="#">
          <CustomImg src="https://www.bigspeak.com/wp-content/uploads/2014/07/AUTOMOTIVE-shutterstock_194255531-400x220.jpg" />
        </Link>
        <Overlay className="slider">
          One of America's Leading Automotive Companies (201k Employees / 90
          Plants Worldwide)
        </Overlay>
      </p>
      <h4>
        <Link className="bottomLink" to="#">
          <strong>Leading Automotive Company</strong>
        </Link>
        <Link
          className="pdf"
          to="https://www.bigspeak.com/wp-content/uploads/2014/07/Leading-Automotive-Company-BSC.pdf"
          target="_blank"
        >
          PDF
        </Link>
      </h4>
    </Case>
  );
};
const Boxes = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const BoxesCase = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes top="25" bottom="25">
        <Boxes>
          <Box />
        </Boxes>
      </ContentRes>
    </ContainerMain>
  );
};
