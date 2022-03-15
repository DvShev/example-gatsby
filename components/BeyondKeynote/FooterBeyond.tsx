import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "./../../services/styleContent";

const Title = styled("h1")`
  font-family: "EB Garamond", serif;
  font-size: 2.75em;
  color: #a8a6a6;
  font-weight: normal;
  text-align: center;
  position: relative;
  @media (max-width: 600px) {
    font-size: 2em;
  }
  :before {
    content: "“";
    display: block;
    position: absolute;
    left: -180px;
    top: -140px;
    font: 10em "EB Garamond", serif;
    color: #000;
    opacity: 0.08;
    line-height: 100%;
  }
`;
const Text = styled("div")`
  text-align: center;
  line-height: 24px;
`;
export const FooterBeyond = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes bottom="30">
        <Title>
          “BigSpeak did an amazing job of assisting us with our program. The
          program was flawless…thanks for making it so easy.”
        </Title>
        <Text>
          <strong>Maryl Tull Balgenorth</strong>
          <br />
          Beaumont Hospitals
        </Text>
      </ContentRes>
    </ContainerMain>
  );
};
