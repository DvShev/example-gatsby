import * as React from "react";

import {
  ContainerMain,
  ContentRes,
} from "../../../../../services/styleContent";

import { Content, List, Text } from "../Steps";

export const Deliver = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes bottom="25">
        <Content>
          <Text>
            <List>
              <li>Prepare the Educator(s)</li>
              <li>Facilitate Customization</li>
              <li>Delve Deeper into Corporate Challenges for Customization</li>
              <li>Gather Materials</li>
              <li>
                Oversee Conference Calls and Communications in Preparation
              </li>
              <li>On-site Delivery</li>
            </List>
          </Text>
          <Text>
            <p>
              Your BigSpeak Consulting expert works closely with you to deliver
              the program custom designed to meet your needs. Our experts come
              to you, delivering at the venue of your choice. Because we are not
              in the business of filling our own classes and do not own any
              delivery facilities, our focus is to help you reach maximum
              results in the roll out of your program. We work collaboratively
              to facilitate your success.
            </p>
            <p>
              Our aim is to jumpstart and accelerate the professional
              development of an elite group of highly motivated and practiced
              professionals in your organization, to launch solution focused
              results through action learning and leadership training whether
              the topic be innovation, sales, leadership, teams, transformation
              or wherever your particular challenge lies. We can help you
              formulate action plans from which to advance the learning to
              jumpstart growth and improvement from the project.
            </p>
          </Text>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
