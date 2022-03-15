import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "./../../services/styleContent";

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
    padding: 0 120px;
    line-height: 28px;
    @media (max-width: 990px) {
      padding: 0 50px;
    }
    @media (max-width: 760px) {
      padding: 0;
    }
  }
`;
export const HeaderBeyond = () => {
  return (
    <ContainerMain bg="#000">
      <ContentRes bottom="25">
        <Title>Learning and Development</Title>
        <Description>
          <p>
            Keynotes can introduce exciting new ideas and begin change within
            your company, but going beyond the keynote with workshops, coaching,
            and consulting can ensure that the seed planted by the keynote
            speaker&nbsp;takes root and grows into meaningful change for your
            business.
          </p>
          <p>
            Many of BigSpeak’s experts are available to work with your team in a
            more in-depth and interactive format to lock in the learning beyond
            the keynote. Whether your organization would benefit from
            interactive group workshops, intimate coaching sessions for smaller
            teams, or long-term consulting, BigSpeak’s network of experts offers
            customized solutions and tangible results.
          </p>
        </Description>
      </ContentRes>
    </ContainerMain>
  );
};
