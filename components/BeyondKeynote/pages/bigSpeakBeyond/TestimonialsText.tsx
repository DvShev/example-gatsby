import * as React from "react";
import { styled } from "@mui/material/styles";

import { ContainerMain, ContentRes } from "../../../../services/styleContent";

const Quotes = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .quote {
    width: 33%;
    @media (max-width: 1200px) {
      width: 100%;
    }
    color: #000;
    padding: 0 30px;
    margin: 0 0 50px;
    box-sizing: border-box;
    text-align: center;
    .beyond-testimonials-text {
      font-family: "EB Garamond", serif;
      font-size: 1.5em;
      opacity: 0.7;
      margin: 0 0 20px;
      font-weight: 400;
    }
    .name {
      text-transform: uppercase;
      font-size: 1.125em;
    }
    .role {
      font-size: 0.875em;
      margin: 5px 0 0;
    }
  }
`;
export const TestimonialsText = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes>
        <Quotes>
          <div className="quote">
            <div className="beyond-testimonials-text">
              <p>
                <span>
                  Seth Mattison’s work with the agency has had a big impact.
                  Leaders continue to reference their time with him and how much
                  of an impact the ideas and sessions have had on their own
                  thinking as it relates to leading digital transformation at
                  the agency. I too am finding myself thinking about networks
                  and hierarchies, helping others feel safe and free and a host
                  of other concepts he introduced us to.
                </span>
              </p>
            </div>
            <div className="meta">
              <p className="name">
                <strong>Jane Datta</strong>
              </p>
              <p className="role">
                Chief Human Capital Officer <br /> NASA
              </p>
            </div>
          </div>
          <div className="quote">
            <div className="beyond-testimonials-text">
              <p>
                <span>
                  Ryan Estis is not simply an incredible, passionate, engaging,
                  on-point keynote speaker. He is committed to partnering and
                  learning your business so that he can utilize his passion for
                  speaking and his knowledge to better your business. We all
                  know the complexity of what 2020 brought for our teammates:
                  Working from home, home schooling our children, sheltering I
                  place…all of it. It was time as leaders to show our employees
                  that we care about them as a whole person. That’s what his
                  series delivers. Ryan Estis’ work has paid dividends in BIG
                  ways (productivity, retention).
                </span>
              </p>
            </div>
            <div className="meta">
              <p className="name">
                <strong>Jeanne Junker</strong>
              </p>
              <p className="role">
                Sr. Vice President <br /> Renewal by Andersen
              </p>
            </div>
          </div>
          <div className="quote">
            <div className="beyond-testimonials-text">
              <p>
                <span>
                  In today’s fiercely competitive global marketplace the most
                  important resource any business has is the creative thinking
                  of its people.&nbsp; Josh Linkner lays out a road map that
                  will guide individuals, teams, and companies to higher levels
                  of creativity. It is a journey that will lead to better ideas
                  and breakthrough thinking.
                </span>
              </p>
            </div>
            <div className="meta">
              <p className="name">
                <strong>Bill Ford, Jr.</strong>
              </p>
              <p className="role">
                Executive Chairman <br /> Ford Motor Company
              </p>
            </div>
          </div>
          <div className="quote">
            <div className="beyond-testimonials-text">
              <p>
                <span>
                  Building a culture of innovation in large companies is
                  critically important, and there’s no better way to learn than
                  with a trusted roadmap of tools and real-life examples. Josh
                  Linkner illustrates how innovative thinking is possible for
                  every employee and business leader, so we can all unlock our
                  full creative potential.
                </span>
              </p>
            </div>
            <div className="meta">
              <p className="name">
                <strong>Mike Kaufmann</strong>
              </p>
              <p className="role">
                CEO <br /> Cardinal Health
              </p>
            </div>
          </div>
          <div className="quote">
            <div className="beyond-testimonials-text">
              <p>
                <span>
                  The feedback from our team – amazing, energizing messages,
                  entertaining and humorous, actionable learnings, things people
                  can do right away.
                </span>
              </p>
            </div>
            <div className="meta">
              <p className="name">
                <strong>Sajeena Warrier</strong>
              </p>
              <p className="role">
                Managing Director <br /> Intel Security
              </p>
            </div>
          </div>
        </Quotes>
      </ContentRes>
    </ContainerMain>
  );
};
