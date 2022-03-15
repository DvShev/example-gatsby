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
  ul {
    margin: 0 0 20px;
    width: 100%;
    li {
      width: 100%;
      border: 0;
      list-style-type: none;
      font-weight: inherit;
      font-style: inherit;
      position: relative;
      :before {
        content: " ";
        display: block;
        width: 6px;
        height: 6px;
        background: #f4ae27;
        position: absolute;
        left: -10px;
        top: 6px;
        border-radius: 100%;
      }
    }
  }
  .box-wide-width {
    width: calc(100% - 600px);
    min-width: 440px;
    max-width: 700px;
    @media (max-width: 500px) {
      width: 100%;
      min-width: auto;
      max-width: auto;
    }
  }
  .box {
    display: inline-block;
    vertical-align: top;
    width: 240px;
    color: #292929;
    margin: 0 8px;
    @media (max-width: 500px) {
      width: 100%;
    }
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
export const TitleBoxes = () => {
  return (
    <ContainerMain bg="#f4f4f4">
      <ContentRes>
        <Content>
          <div className="box ">
            <p className="title">
              <strong>DESIGN</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  <span className="font-weight: 400;">
                    We’ll first connect with you and your key stakeholders to
                    understand learning objectives, uncover any challenges, and
                    align on desired business outcomes and measurement metrics.
                    This allows our team to custom-tailor content and
                    programming to your specific needs.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="box  box-wide-width">
            <p className="title">
              <strong>IMPLEMENTATION</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  <span>
                    Actionable insights are delivered in a multi-modal fashion
                    to maximize impact while saving time. A regular cadence of
                    live instruction mixed with interactive, micro-learning
                    segments will reinforce key themes and deliver tangible
                    results:
                  </span>
                </p>
                <ul>
                  <li>
                    <strong>Monthly live masterclasses.</strong> These
                    90-minute, interactive workshops are led by top experts to
                    create both inspiration and hands-on learning. Sessions will
                    also be recorded and will remain accessible to all
                    participants through a private-branded, password-protected
                    Digital Learning Portal.
                  </li>
                  <li>
                    <strong>Weekly curated content.</strong> Each week,
                    participants will receive a fresh dose of content that can
                    be consumed on the go. This content bundle includes a short
                    expert video, supporting reading material, and a weekly
                    challenge to ensure the learning is both consistent and
                    efficient.
                  </li>
                  <li>
                    <strong>Digital Learning Portal.</strong> Participants enjoy
                    24/7 access to this private and secure portal, providing
                    on-demand learning. Rich with hand-selected videos,
                    articles, white-papers, research, challenges,
                    thought-starters and tools, the Portal serves as a
                    leadership toolbox to support key business priorities. The
                    system is also “gamified” whereby users earn points for each
                    interaction and compete to see who ranks highest on the
                    Digital Leaderboard.
                  </li>
                  <li>
                    <strong>Group Challenges.</strong> Each learning module
                    contains a project assignment, providing learners the
                    opportunity to apply newly-gained skills and perspectives to
                    a real-world challenge. This collaborative, hands-on
                    learning drives high retention and leads to subject matter
                    mastery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box ">
            <p className="title">
              <strong>MEASUREMENT</strong>
            </p>
            <div className="text">
              <div className="entry-content">
                <p>
                  <span className="font-weight: 400;">
                    At the conclusion of the program, we’ll conduct a debrief
                    call to highlight key observations, answer questions, and
                    discuss next steps. We’ll also review measurement data to
                    ensure the program has successfully delivered on key
                    metrics.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
