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
export const HeaderWorkShops = () => {
  return (
    <ContainerMain bg="#000">
      <ContentRes bottom="25">
        <Title>Training & Workshops</Title>
        <Description>
          <p>
            Workshops are a great opportunity for your employees or team members
            to apply new ideas to their work by engaging in interactive
            activities and dialogue guided by an expert. In a classroom-type
            setting, participants may use workbooks or other learning aides as
            they share ideas and ask questions as they go deeper with material
            from the original keynote or new material. At the intersection of
            leadership and learning, going beyond the keynote is the best way to
            ensure transformational change within any organization.
          </p>
        </Description>
      </ContentRes>
    </ContainerMain>
  );
};
