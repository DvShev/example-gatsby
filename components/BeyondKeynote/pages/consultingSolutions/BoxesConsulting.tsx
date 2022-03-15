import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";

const Content = styled("div")`
  border-top: solid 1px #ddd;
  padding: 50px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  .box {
    display: inline-block;
    vertical-align: top;
    width: 240px;
    color: #292929;
    margin: 0 8px;
  }
  .title {
    background: #fff;
    font-size: 1.25em;
    text-transform: uppercase;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    margin: 0;
  }
  .text {
    margin: 0;
    padding: 0 10px;
    .entry-content {
      font-size: 0.938em;
      text-align: center;
    }
    a {
      color: #f4af27;
      text-decoration: none;
      transition: all 0.3s ease;
      :hover {
        color: #f68527;
      }
    }
    .button-black-border {
      vertical-align: middle;
      border: solid 1px #292929;
      color: #292929;
      padding: 14px 20px;
      text-align: center;
      box-sizing: border-box;
      border-radius: 5px;
      :hover {
        border-color: #f4af27;
        color: #f4af27;
      }
    }
  }
`;
export const BoxesConsulting = () => {
  return (
    <ContainerMain bg="#f4f4f4">
      <ContentRes>
        <Content>
          <div className="box">
            <p className="title">
              <strong>Method</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  Our learning architecture incorporates a four stage process.
                  Let us help you create the most impactful program.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <p className="title">
              <strong>EXPERTISE</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  For close to twenty years, we have worked side by side with an
                  international network of over five hundred experts along with
                  their senior consulting partners. If there is someone on your
                  short list who does not appear in our{" "}
                  <Link
                    title="Speakers"
                    to="https://www.bigspeak.com/keynote-speakers/"
                  >
                    network
                  </Link>
                  , we can arrange access to them through our strategic
                  partnerships. Having established personal relationships with
                  experts worldwide and garnering intimate knowledge of their
                  methodologies, we help you customize the most effective
                  learning program while brokering the best deal.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <p className="title">
              <strong>FLEXIBLE</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  Budgets for our corporate education programs typically range
                  from $50,000 to $500,000 U.S., depending on variables
                  including number of participants, length of program, and which
                  experts are involved in the professional development program.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <p className="title">
              <strong>RESULTS</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  Programs may be delivered in a 1 to 2 day period (revisited
                  and expanded upon as in monthly, quarterly, or annually), 3 to
                  4 days, a full week or more, or even a retreat. We design with
                  your parameters in mind and actively feed ideas into the mix,
                  having developed programs of all kinds. Results are
                  highlighted in these case studies.
                </p>
                <p>
                  <Link
                    className="button-black-border"
                    title="Case Studies"
                    to="https://www.bigspeak.com/case-studies/"
                  >
                    <strong>VIEW CASE STUDIES</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <p className="title">
              <strong>SUCCESS</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  We specialize in turning corporate education objectives into
                  major successes measured by the way improvement sticks.
                </p>
              </div>
            </div>
          </div>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
