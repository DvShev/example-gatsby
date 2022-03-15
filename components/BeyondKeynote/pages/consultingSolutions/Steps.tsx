import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { styled } from "@mui/material/styles";
import { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import stepsIcon from "../../../../images/stepsIcon.png";
import { Evaluate } from "./StepPage/Evaluate";
import { Design } from "./StepPage/Design";
import { Deliver } from "./StepPage/Deliver";
import { Appraise } from "./StepPage/Appraise";

export const List = styled("ul")`
  font-size: 0.938em;
  list-style-type: none;
  padding-left: 14px;
  li {
    position: relative;
    margin: 10px 0;
    :before {
      content: " ";
      display: block;
      width: 6px;
      height: 6px;
      background: #f4ae27;
      position: absolute;
      left: -14px;
      top: 6px;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border-radius: 100%;
    }
  }
`;
export const Text = styled("div")`
  margin: 0 0 20px;
  padding: 20px;
  font-size: 0.938em;
  line-height: 140%;
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;
export const Content = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const ContainerTabs = styled(TabsListUnstyled)`
  width: 1300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Tab = styled(TabUnstyled)`
  cursor: pointer;
  padding: 20px 0;
  background: #292929;
  color: #a5a5a5;
  outline: none;
  border: none;
  position: relative;
  &.${tabUnstyledClasses.selected} {
    background-color: #323232;
    color: #fff;
    .flag {
      width: 0;
      height: 0;
      z-index: 5;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 12px solid #323232;
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translate(0, -50%);
      margin: 0 0 0 -12px;
    }
  }
`;
const ResBlock = styled("div")`
  background: #292929;
  display: flex;
  justify-content: center;
`;
const TabContent = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconTab = styled("div")<{ position: string }>`
  width: 70px;
  height: 60px;
  background: url(${stepsIcon});
  background-size: 280px 60px;
  margin-right: 15px;

  background-position: ${({ position }) => {
    return position;
  }};

  @media (max-width: 760px) {
    display: none;
  }
`;
const NameContainer = styled("div")`
  text-align: left;
  font-size: 1em;
  .title {
    text-transform: uppercase;
  }
`;

export const Steps = () => {
  const arr = [
    {
      step: "Step 1",
      description: "Evaluate",
      position: "0 0",
    },
    {
      step: "Step 2",
      description: "Design",
      position: "-70px 0",
    },
    {
      step: "Step 3",
      description: "Deliver",
      position: "-140px 0",
    },
    {
      step: "Step 4",
      description: "Appraise",
      position: "-210px 0",
    },
  ];
  return (
    <TabsUnstyled defaultValue={0}>
      <ResBlock>
        <ContainerTabs>
          {arr.map((tab, idx) => {
            return (
              <Tab key={idx}>
                <TabContent>
                  <IconTab position={tab.position} />
                  <NameContainer>
                    <p className="step">{tab.step}</p>
                    <p className="title">
                      <strong>{tab.description}</strong>
                    </p>
                  </NameContainer>
                </TabContent>
                <div className="flag" />
              </Tab>
            );
          })}
        </ContainerTabs>
      </ResBlock>
      <TabPanelUnstyled value={0}>
        <Evaluate />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
        <Design />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={2}>
        <Deliver />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={3}>
        <Appraise />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
};
