import * as React from "react";

import {
  ContainerMain,
  ContentRes,
} from "../../../../../services/styleContent";
import { Content, List, Text } from "../Steps";

export const Evaluate = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes bottom="25">
        <Content>
          <Text>
            <List>
              <li>Identify Current Challenges within Organization</li>
              <li>Pinpoint Desired Solutions/End Goals</li>
              <li>Assess Stakeholders</li>
              <li>Diagnose Organizational Culture and Competencies</li>
              <li>
                Evaluate Core Business Strategies with which to align program
              </li>
              <li>Cover Past Learnings – what worked/what didn’t</li>
              <li>Create Benchmarks as Drivers</li>
              <li>Outline Scope of Work</li>
            </List>
          </Text>
          <Text>
            <p>
              Using a collaborative approach, we work closely with you to
              understand and identify the issues driving the need for change in
              your people and in your organization. This could stem from a
              company-wide strategy or align with a divisional tactic. In order
              to establish a shared vision and achieve success through our
              custom design, we must diagnose critical issues and create
              benchmarks from which to assign value to stages of the program.
            </p>
            <p>
              Together, we identify who will be impacted by and benefit from the
              professional development program (even beyond the direct
              participants). Interviews with potential participants and senior
              executives may be required as part of the evaluation process to
              understand critical issues and spot new opportunities. We can
              target future promising leaders, with an eye for them in the
              design and overall efficacy of the professional development
              program.
            </p>
          </Text>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
