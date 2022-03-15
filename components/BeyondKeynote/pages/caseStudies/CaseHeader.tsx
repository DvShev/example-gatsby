import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
const Title = styled("h1")`
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
  p {
    color: #a5a5a5;
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
export const CaseHeader = () => {
  return (
    <ContainerMain bg="#000">
      <ContentRes bottom="25">
        <Title>Case Studies Solutions</Title>
        <Description>
          <p>
            By bringing in BigSpeak Consulting as your corporate training,
            consulting, and education partner, comprehensive custom programs are
            designed with the goal to bring about long-term positive change.
            Programs for executive teams, management, directors, or the front
            line are created to align with core business strategies. Our
            business solutions focus on a comprehensive cascade from top to
            bottom.
          </p>
        </Description>
      </ContentRes>
    </ContainerMain>
  );
};
