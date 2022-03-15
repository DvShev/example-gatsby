import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";
import { Link } from "gatsby";

const ContentLeft = styled("div")`
  padding-right: 30px;
  h2 {
    font-size: 2.25em;
  }
  h4 {
    font-size: 1.25em;
  }
  p {
    font-size: 0.938em;
    line-height: 20px;
  }
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
    padding-right: 0;
  }
`;
const ContentRight = styled("div")`
  padding-left: 30px;
  h2 {
    font-size: 2.25em;
  }
  h4 {
    font-size: 1.25em;
  }
  p {
    font-size: 0.938em;
    line-height: 20px;
  }
  a {
    color: #f4af27;
    text-decoration: none;
    transition: all 0.3s ease;
    a:hover {
      color: #f68527;
    }
  }
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
    padding-left: 0;
  }
  .roi {
    display: flex;
    width: 100%;
    padding: 25px;
    background: #fff;
    border-left: solid 3px #f5af27;
    color: #292929;
    margin: 50px 0 0;
    box-sizing: border-box;
    background: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    justify-content: space-between;
    :hover {
      border-color: #292929;
      .cover {
        background: #f5af27;
        strong {
          border-bottom: solid 1px #000;
        }
      }
    }
    .content {
      width: 65%;
    }
    .cover {
      width: 130px;
      height: 140px;
      background: #292929;
      margin: -60px 0 0;
      color: #fff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      strong {
        line-height: 40px;
        font-size: 1.875em;
        border-bottom: solid 1px #f5af27;
      }
      small {
        font-size: 1.125em;
      }
    }
  }
`;
const Content = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
export const ContentConsulting = () => {
  return (
    <ContainerMain bg="#f4f4f4">
      <ContentRes bottom="25">
        <Content>
          <ContentLeft>
            <div>
              <h2>
                <strong>
                  We’re your partner in the design of positive organizational
                  change.
                </strong>
              </h2>
              <h4>
                <strong>Change that sticks</strong>
              </h4>
              <p>
                Keynote programs provide the sizzle and have their place.
                However, a comprehensive learning program needs to embed new
                behaviors and thought processes into your corporate culture and
                hold people accountable to make certain that positive change
                sticks.
              </p>
              <h4>
                <strong>Impact</strong>
              </h4>
              <p>
                At BigSpeak Consulting, our experts partner <em>with you</em> to
                customize a learning program specifically designed to fit your
                needs. Together, we construct the path to success given the
                specific challenges you face, ensuring that the program will
                result in the required solutions, while aligning it with your
                core business strategies and budget. There is no mold into which
                any one organization fits. Partnering with BigSpeak Consulting
                gives you the edge, ensuring successful implementation of your
                corporate education which, in turn, will create positive,
                lasting change.
              </p>
              <h4>
                <strong>Help</strong>
              </h4>
              <p>
                It can be mind boggling to sift through the labyrinth of
                learning possibilities and subject matter experts to those who
                don’t work with them daily. <strong>We do.</strong>
              </p>
            </div>
          </ContentLeft>
          <ContentRight>
            <div>
              <h2>
                <strong>
                  BigSpeak Consulting – The Experts on the Experts
                </strong>
              </h2>
              <h4>
                <strong>Value</strong>
              </h4>
              <p>
                The advantage of working with BigSpeak Consulting is that we are
                able to save you time and money. We take into consideration your
                learning objectives, business strategies, participants, past
                initiatives, and new goals to design a custom program. We are
                the experts on the experts. Whether you come to us with a
                preferred methodology or a particular{" "}
                <Link
                  title="Speakers"
                  to="https://www.bigspeak.com/keynote-speakers/"
                >
                  subject matter expert
                </Link>{" "}
                in mind or not, we are poised to identify the right fit given{" "}
                <Link title="Topics" to="https://www.bigspeak.com/topics/">
                  topic
                </Link>
                , time, budget, and modality for delivery of the program.
              </p>
              <div>
                <p>
                  <Link className="roi" to="#">
                    <span className="content">
                      <strong>ROI</strong>
                      <br /> Research shows that although training alone
                      increases productivity by 22.4%; additional ongoing
                      coaching results in productivity gains of 88%.
                    </span>
                    <span className="cover">
                      <strong>ROI</strong>
                      <small>Research Study</small>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </ContentRight>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
