import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { ContainerMain, ContentRes } from "./../../services/styleContent";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useContentBusiness } from "../../hooks/businessSpeakers/relatedNewsQuery";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const TextContainer = styled("span")`
  padding: 10px 20px 5px 20px;
  .post-date {
    font-size: 0.875em;
    line-height: 100%;
    margin: 0 0 10px;
  }
  .post-title {
    display: block;
    font-size: 1.5em;
    color: #000;
    font-weight: 700;
    line-height: 105%;
    margin: 0 0 10px;
    text-decoration: none;
  }
  .post-excerpt {
    line-height: 115%;
    font-size: 0.875em;
    margin: 0 0 10px;
  }
  .post-more {
    text-decoration: none;
    display: inline-block;
    font-size: 0.75em;
    text-transform: uppercase;
    position: relative;
    line-height: 18px;
    padding: 0 36px 0 0;
    color: #f5af27;
    font-weight: 700;
    transition: all 0.3s ease;
    :hover {
      color: #000;
      padding: 0 40px 0 0;
    }
    ::before {
      content: " ";
      display: block;
      width: 23px;
      height: 18px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAABQCAYAAAC0wU3eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8wOC8xNAC4BFkAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAECElEQVR4nO2aS2heRRTHf9EUMTJIC6KQogU3wYW4CmQgWjGoFaUMtVCouChIU3XVTawbKQZMBDeCtWIFBcVH1FFMLWoXWmEibnwVcaGYQosvEOsoaKv+Xcx8ySU0n3nc5j7wwMB3zzf3cH/MvTPn/GeQxBq3+yX9IWlr2bEvYO1tGLgIeAIYKTVyBSMzIOlrJTsjaUdZsauAQVK/pE80b7ubDIOkDZKOFYDGmgyDpD5J0wWgiSbDIKlX0vMFoKebDNNpBwpAr0ha12QYJD1cAHpHkmkyDJL2FoCCpMubDIOkXZL+yUBfSNrUZBgkbVNKeyRpVtI1TYZB0oikXzLQj5KGmgyDpEFJ32Wg3yRtaTIMSvnctxnoLy2Sz1X9kMtpGyV9pnkbbTIMktZL+qAAtK/JMJ02VQCa7Ph7JAFcCfSWWiidPzsL9ADPAZuz73FgrEfSR8Bg7tAU+xs4A1xc8M1WUTafN2vVa1b1h1zqBFD1Qy23tWZqbs2i2Zp0pjWJZmtKgNYUZ60pm1sjaIwXQBotNbVCBGyNPNsn6XABpLHCeWu2NFqz2dSqbcCXM8hJpXSltNhVlM0fAn8C9wFHywy85qVy9Hbut3Gh1NiVngOI3pZ6DqAKmIeAb4B+4O3o7Y6yAq85jHHhK+AG4FNgHfBi9HZ3GbEr0c2MC6eAm0iTAcDB6O3YauNWJgIaF34GbgUOZ9dE9HZiNTE7ImBlFr3tBZ4FdmbXIePCPSuJVTlMx6K3B4A9+XIK2GlcOLucGLXRmo0L9wLj+XI7MB29NcuJUZuR6Vj0di/wWL6cAZxx4Yel3Fs7GIDo7S7gEEkgPw7cYVyY/a/7agkDEL3dBrxAyhZOALcZF77sdk9tvpmFZlx4DbgdOA1cBbwfvR3qdk9tYQCMC0eBm4HvgcuA96K3WxbrX2sYAOPCx8CNwCxwCfDWYvlc7WFgLp8bBj4HLiTlc6ML+zUCBsC4cJK07Xcsu56M3u4r9qntbNbNordTwJ358lHjwhhkmOhtKzZoe359fej/cwB1tHa9Zm2aAJoyGgBEb9cDbwDXZ9eDxoVHOv83BiZ6u5FUYl+bXXuMCweLfRoBE70dAI4Am0gz2V3GhZcW9qs9TPR2EHgTuAL4HdhuXDhyrr61hsmK56vApcBPwFbjwsxi/Wu7zuTibJoEcgLY3A0EagqTy+YpUpV5nATStcqEGsJkQeMZ0sI4A4wspf6HmsFEb8eZV2beBW5ZqjIDNZoAyhABK4cpU56t9DWL3vaR1pAOyORKQaDCkYnebiDlWcPZ9YBxYXI1MSuBid72k9aQ67Jr1Ljw1GrjVrFBO0ACuZpUm9x9rjxrJVbFN7OfBHKKJLmWAgLVwMydA8iKZWn2L6O0sInPpTdAAAAAAElFTkSuQmCC)
        no-repeat 0 -18px/23px 36px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
const Title = styled("h2")``;
const ImgContainer = styled("div")`
  position: relative;
  width: 98%;
  height: 190px;
  border-radius: 5px;
  overflow: hidden;
`;
const NewsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 22%;
  @media (max-width: 990px) {
    width: 30%;
  }
  @media (max-width: 760px) {
    width: 48%;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;
const MediaContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const LinkBigSpeak = styled(Link)`
  z-index: 700;
  position: absolute;
  position: absolute;
  left: 0;
  top: 20px;
  background: #fff;
  text-decoration: none;
  line-height: 30px;
  padding: 0 12px;
  color: #000;
  font-size: 0.75em;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease;
  :hover {
    background: #000;
    color: #fff;
  }
`;
const ImgBox = styled("div")`
  display: block;
  height: 190px;
  position: relative;
  border-radius: 5px;
`;
const LinkImg = styled(Link)<{ img: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 40s ease;
  :hover {
    transform: scale(2);
  }
`;

export const RelatedNews = () => {
  const { content } = useContentBusiness();
  return (
    <ContainerMain bg="#fff">
      <ContentRes>
        <Title>Related News</Title>
        <MediaContainer>
          {content.edges.map(
            ({
              node: {
                excerpt,
                date,
                title,
                slug,
                featuredImage: {
                  node: {
                    localFile: {
                      childImageSharp: {
                        fluid: { src },
                      },
                    },
                  },
                },
              },
            }) => {
              return (
                <NewsContainer key={slug}>
                  <ImgContainer>
                    <ImgBox>
                      <LinkImg to={`/${slug}`} img={src} />
                    </ImgBox>
                    <LinkBigSpeak to="/blog/">BigSpeak Blog</LinkBigSpeak>
                  </ImgContainer>
                  <TextContainer>
                    <p className="post-date">
                      {moment(date).format("MMM D, YYYY")}
                    </p>
                    <Link to={`/${slug}`} className="post-title">
                      {title}
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                  </TextContainer>
                </NewsContainer>
              );
            }
          )}
        </MediaContainer>
      </ContentRes>
    </ContainerMain>
  );
};
