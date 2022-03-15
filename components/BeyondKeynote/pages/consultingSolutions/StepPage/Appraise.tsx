import * as React from "react";

import {
  ContainerMain,
  ContentRes,
} from "../../../../../services/styleContent";
import { Content, List, Text } from "../Steps";

export const Appraise = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes bottom="25">
        <Content>
          <Text>
            <List>
              <li>Gather Feedback</li>
              <li>Review</li>
              <li>Reflect</li>
              <li>Redesign</li>
              <li>Vertical Buy-In/Horizontal Alignment</li>
              <li>Reinforce the Learning</li>
            </List>
            <p>
              Once the blueprint has been created, we’ll work with you to
              sustain and maximize winning initiatives from these professional
              develop practices within your organization.
            </p>
          </Text>

          <Text>
            <p>
              Our programs can be revisited again, refined and redefined as
              needed, based on post-event feedback and results. The success of
              your professional development program can be repeated with
              different teams within your organization for an all-inclusive
              cross-alignment. Programs may also be repeated successively over a
              period of time to reinforce the learning and to accelerate
              positive growth. We can design scalable processes in the hierarchy
              of change to introduce others in your organization to the winning
              initiatives, new ideas, and processes via orientation, training,
              and conferences, to keep buy-in at the executive level or cohesion
              amongst the ranks. The program can also be tweaked where needed to
              realign with new corporate strategies and for maximum impact.
            </p>
            <p>
              Sustain the development of your organizational culture and
              competency. Be proactive about reinforcing the growth, change, and
              learning by incorporating follow up webinars or additional
              coaching. Additional coaching has proven to vastly increase the
              benefits of professional development programs as outlined in this
              Olivero, Bane, Kopelman action research study: Training increased
              productivity by 22.4%, whereas additional ongoing coaching
              produced a productivity gain of 88%.
            </p>
          </Text>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
