import * as React from "react";
import { styled } from "@mui/material/styles";
import { ContainerMain, ContentRes } from "./../../services/styleContent";

const CodeError = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  @media (max-width: 980px) {
    width: 250px;
  }
  @media (max-width: 760px) {
    width: 60%;
    align-items: center;
  }
`;
const ContainerAbout = styled("div")`
  width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1240px) {
    width: calc(100% - 500px);
  }
  @media (max-width: 980px) {
    width: calc(100% - 350px);
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
const Error404 = styled("div")`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 10em;
  letter-spacing: 5px;
  white-space: nowrap;
  color: #f5af27;
  @media (max-width: 550px) {
    font-size: 5em;
  }
`;
const ImgContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    @media (max-width: 760px) {
      margin-top: 4px;
    }
  }
`;
const TopContent = styled("div")`
  color: #fff;
  .title {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 10.5em;
    letter-spacing: 12px;
    white-space: nowrap;
    margin: 0;

    @media (max-width: 1060px) {
      font-size: 7em;
    }
    @media (max-width: 550px) {
      font-size: 4em;
      text-align: center;
    }
    @media (max-width: 380px) {
      font-size: 2em;
      text-align: center;
    }
  }
  .sub-title {
    line-height: 60px;
    font-weight: 900;
    font-size: 5.5em;
    white-space: nowrap;
    margin: 0;
    margin-top: -20px;
    @media (max-width: 1060px) {
      font-size: 4em;
    }
    @media (max-width: 550px) {
      font-size: 3em;
      text-align: center;
    }
    @media (max-width: 380px) {
      font-size: 1.5em;
    }
  }
`;
const FlexContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 1240px) {
    justify-content: space-between;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Description = styled("div")`
  color: #fff;
  text-align: justify;
  p {
    font-size: 2.25em;
    margin: 40px 0;
    @media (max-width: 550px) {
      font-size: 1.5em;
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
  }
`;
const Buttons = styled("ul")`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .first {
    width: 100%;
  }
  .second {
    width: 48.5%;
    @media (max-width: 1060px) {
      width: 100%;
    }
  }
  li {
    list-style-type: none;
    margin: 8px 0;
    a {
      text-decoration: none;
      border-radius: 5px;
      text-transform: uppercase;
      font-weight: 700;
      display: flex;
      width: 100%;
      color: #000;
      font-size: 1.5em;
      background: #f9b329;
      transition: all 0.3s ease;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
      @media (max-width: 550px) {
        font-size: 1em;
      }
      :hover {
        background: #f68527;
        color: #000;
      }
    }
  }
`;

export const ErrorComponents = () => {
  return (
    <ContainerMain bg="#000">
      <ContentRes top="5" bottom="20">
        <FlexContainer>
          <CodeError>
            <Error404>404</Error404>
          </CodeError>
          <ContainerAbout>
            <TopContent>
              <p className="title">Error</p>
              <p className="sub-title">page not found</p>
            </TopContent>
          </ContainerAbout>
        </FlexContainer>
        <FlexContainer>
          <CodeError>
            <ImgContainer>
              <img
                src="https://www.bigspeak.com/wp-content/uploads/2018/10/Jia-Photo-404.jpg"
                alt="Big"
              />
            </ImgContainer>
          </CodeError>

          <ContainerAbout>
            <Description>
              <p>
                Ooooh, feeling rejected? Don’t worry. Rejection expert{" "}
                <a href="https://www.bigspeak.com/speakers/jia-jiang/">
                  Jia Jiang
                </a>{" "}
                knows how you feel and is here to help.
              </p>
            </Description>
            <Buttons>
              <li className="first">
                <a
                  href="https://www.bigspeak.com/"
                  rel="home"
                  className="button-orange-big"
                >
                  THERE’S NO PLACE LIKE HOME
                </a>
              </li>
              <li className="second">
                <a
                  href="https://www.bigspeak.com/best-keynote-speakers/"
                  className="button-orange-big"
                >
                  I’M FEELING LUCKY
                </a>
              </li>
              <li className="second">
                <a
                  href="https://www.bigspeak.com/18-truths-youll-find-stop-fearing-rejection/"
                  className="button-orange-big"
                >
                  COPING ADVICE
                </a>
              </li>
            </Buttons>
          </ContainerAbout>
        </FlexContainer>
      </ContentRes>
    </ContainerMain>
  );
};
