import * as React from "react";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { ContainerMain, ContentRes } from "../../services/styleContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import line from "../../images/line.png";
import line1200 from "../../images/line-1200.png";

const Title = styled("h1")`
  position: relative;
  font-size: 2.25em;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  font-weight: inherit;
  @media (max-width: 520px) {
    font-size: 1.875em;
  }
`;
const Description = styled("div")`
  position: relative;
  color: #fff;
  p {
    color: #fff;
    font-size: 1.125em;
    text-align: center;
    padding: 0 150px;
    line-height: 28px;
    @media (max-width: 1200px) {
      padding: 0 120px;
    }
    @media (max-width: 990px) {
      padding: 0 50px;
    }
    @media (max-width: 760px) {
      padding: 0;
    }
  }
`;
const Line = styled("img")`
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ContainerImg = styled("div")<{ img: string }>`
  background: url(${({ img }) => img}) no-repeat center center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  :before {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 0;
  }
`;
export const HeaderSolutions: FC<{
  title: string;
  description: string;
  imgUrl?: string;
}> = ({ title, description, imgUrl }) => {
  const isTablet = useMediaQuery<boolean>("(max-width:1020px)");
  return (
    <ContainerMain bg="#000">
      <ContainerImg img={imgUrl}>
        <Title>{title}</Title>
        <Description>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </Description>
        <Line src={isTablet ? line1200 : line} />
      </ContainerImg>
    </ContainerMain>
  );
};
