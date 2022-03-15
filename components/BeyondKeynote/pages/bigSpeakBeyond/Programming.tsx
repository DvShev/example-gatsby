import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";

const Content = styled("div")`
  border-top: solid 2px #ddd;
  padding: 50px;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    padding: 50px 30px;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 2.25em;
  }
  h4 {
    font-size: 1.25em;
    font-weight: 700;
  }
  p {
    font-size: 0.938em;
    span {
      font-weight: 400;
    }
  }
`;
export const Programming = () => {
  return (
    <ContainerMain bg="#f4f4f4">
      <ContentRes>
        <Content>
          <h2>
            <strong>Proven Insights, Custom Programming</strong>
          </h2>
          <h4>
            <strong>Hand-crafted for you.</strong>
          </h4>
          <p>
            <span>
              While our proven learning framework is universal, no two client
              needs are identical. As such, the core modules can be tailored to
              the needs of your organization.
            </span>
          </p>
          <p>
            <span>
              The Future Ready Leadership Series can be modified for the
              specific nuisances of a sales organization, product development
              team, up-and-coming high-potential team members, or senior
              executive leadership.
            </span>
          </p>
          <p>
            <span>
              The content and messaging will also be shaped based on your
              industry, organizational size, geography, and growth trajectory so
              that your team enjoys a highly relevant, customized and{" "}
            </span>
            <span>impactful learning solution.</span>
          </p>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
