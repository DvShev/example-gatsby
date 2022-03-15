import * as React from "react";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { StaticImage } from "gatsby-plugin-image";
import Img from "gatsby-image";
import { useContentBusiness } from "./../../hooks/businessSpeakers/contentQuery";

import { ContainerMain, ContentRes } from "./../../services/styleContent";

const TextContainer = styled("div")`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;
  position: relative;
  width: 50%;
  h1 {
    font-size: 3em;
    line-height: 50px;
    color: #fff;
  }
  p {
    font-size: 1em;
    color: #fff;
  }
  a {
    color: #f4af27;
    text-decoration: none;
    transition: all 0.3s ease;
    :hover {
      color: #f68527;
    }
  }
  @media (max-width: 1300px) {
    width: 80%;
    margin: 20px auto;
  }
`;
const ShadowBox = styled("span")`
  display: block;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BgImg = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  background: red;
  .bgImage {
    width: 100%;
    height: 100%;
    /* position: absolute; */
  }
`;
export const BusinessInf = () => {
  const { content } = useContentBusiness();
  return (
    <ContainerMain bg="#9b8585">
      <BgImg>
        <Img
          fluid={
            content.topicDetails.headerImage.localFile.childImageSharp.fluid
          }
          imgStyle={{
            objectFit: "cover",
          }}
          className="bgImage"
        />
      </BgImg>
      <ShadowBox />
      <ContentRes>
        <TextContainer>
          <h1>{content.name}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: "<p>" + content.description }}
          />
        </TextContainer>
      </ContentRes>
    </ContainerMain>
  );
};
