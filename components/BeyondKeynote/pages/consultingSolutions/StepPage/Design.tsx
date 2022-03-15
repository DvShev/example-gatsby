import * as React from "react";
import { styled } from "@mui/material/styles";

import {
  ContainerMain,
  ContentRes,
} from "../../../../../services/styleContent";
import { Content, List, Text } from "../Steps";

export const Design = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes bottom="25">
        <Content>
          <Text>
            <List>
              <li>Define Effective Strategy</li>
              <li>Build Consensus</li>
              <li>Pinpoint Expert(s) for Delivery</li>
              <li>Define Timeframe for Delivery</li>
              <li>Define Structure and Delivery Methodologies</li>
            </List>
            <p>
              Every program at BigSpeak Consulting is designed to fit the unique
              circumstances surrounding your professional development needs.
              Drawing from an array of approaches, together, we identify,
              create, and design the program that will work synergistically
              within your organization, establishing a work flow process to
              maximize results. While partnering together in close
              collaboration, we create an effective strategy from which to build
              the program, taking into consideration such things as:
            </p>
          </Text>
          <Text>
            <List>
              <li>Timeframe</li>
              <li>
                Traditional approach vs. the use of leading edge technology or
                both
              </li>
              <li>Group learning vs. mentoring/coaching or a mix</li>
              <li>Budgetary and other parameters</li>
            </List>
            <p>
              We are the experts on the experts. We work with a network of more
              than five hundred educators, considered gurus in their field,
              along with their senior consulting partners. We help you pinpoint
              the expert(s) who will deliver a customized program to jumpstart
              winning results. With a flexible model of corporate education, our
              programs are created taking into consideration your set of
              criteria, unique circumstances, budgetary and time parameters.
            </p>
          </Text>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
