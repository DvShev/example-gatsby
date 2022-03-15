import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { styled } from "@mui/material/styles";
import { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Future } from "./StepPage/Future";
import { Innovation } from "./StepPage/Innovation";
import { Work } from "./StepPage/Work";
import { Winning } from "./StepPage/Winning";
import step1 from "./../../../../images/step1.png";

export const Title = styled("h3")`
  margin: 0;
  padding: 0;
  font-weight: 400;
`;
export const MainTitle = styled("h2")`
  font-size: 2.25em;
  font-weight: 400;
`;
export const List = styled("ul")`
  font-size: 0.938em;
  list-style-type: none;
  padding-left: 14px;
  li {
    position: relative;
    margin: 0;
    padding: 0;
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
const IconTab = styled("div")<{ img: string }>`
  width: 70px;
  height: 60px;
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  transform: rotate(90deg);
  margin-right: 15px;
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

const Win = styled("p")`
  font-size: 80px;
  margin: 0;
  padding-right: 20px;
  text-align: center;
  color: #f8b224;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const StepsBeyond = () => {
  const arr: any[] = [
    {
      step: "Step 1",
      description: "The Future of Growth",
      img: step1,
    },
    {
      step: "Step 2",
      description: "The Future of Innovation",
      img: null,
    },
    {
      step: "Step 3",
      description: "The Future of Work",
      img: null,
    },
    {
      step: "Step 4",
      description: "The Future of Winning",
      img: null,
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
                  {tab.img && <IconTab img={tab.img} />}
                  {idx === 3 && <Win>$</Win>}
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
        <Future />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
        <Innovation />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={2}>
        <Work />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={3}>
        <Winning />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
};
