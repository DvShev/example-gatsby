import * as React from "react";
import { styled } from "@mui/material/styles";
import { EmailIframe } from "./../../services/EmailIframe";

import { ContainerMain, ContentRes } from "./../../services/styleContent";
import { Link } from "gatsby";

const LeftContent = styled("div")`
  width: 60%;
  @media (max-width: 980px) {
    width: 100%;
  }
  .post-title {
    font-size: 2.25em;
    font-weight: 700;
  }
  .post-date {
    font-size: 0.875em;
  }
  p {
    margin: 0 0 20px;
    font-size: 0.938em;
  }
  img {
    float: right;
    margin: 10px;
  }
  a {
    color: #f4af27;
    text-decoration: none;
    transition: all 0.3s ease;
    :hover {
      color: #f68527;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      width: 110px;
      font-size: 16px;
      margin: 0 30px 0 0;
      font-weight: 700;
    }
  }
`;
const Content = styled("div")`
  display: flex;
  justify-content: space-between;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
const RightContent = styled("div")`
  width: 35%;
  @media (max-width: 980px) {
    width: 100%;
  }
  .title {
    border-top: solid 1px #ccc;
    padding: 20px 0 0;
    margin: 0 0 30px;
    p {
      margin: 0;
      padding: 0;
      font-weight: 700;
      font-size: 1.25em;
      text-transform: uppercase;
    }
  }
`;
const ContentPost = styled("div")`
  display: flex;
  margin-bottom: 40px;
`;
const PostContent = styled("div")`
  display: flex;
`;
const LeftPostContent = styled("div")`
  .ImgPost {
    width: 200px;
    height: 140px;
    border-radius: 5px;
    object-fit: cover;
    @media (max-width: 1200px) {
      width: 140px;
      height: 140px;
    }
  }
`;
const RightPostContent = styled("div")`
  margin-left: 15px;
  /* width: 175px; */
  .post-date {
    font-size: 0.875em;
  }
  .post-title {
    font-size: 1.125em;
    color: #000;
    font-weight: 700;
    text-decoration: none;
  }
`;
const Line = styled("div")`
  width: 100%;
  border-top: 1px solid #ccc;
  margin-bottom: 40px;
`;
export const ContentMakes = () => {
  return (
    <ContainerMain bg="#fff">
      <ContentRes bottom="30" top="30">
        <Content>
          <LeftContent dangerouslySetInnerHTML={{ __html: mocLeftContent }} />
          <RightContent>
            <div className="title">
              <p>Most Recent Posts</p>
            </div>
            {[0, 1, 2, 3].map((__, idx) => {
              return (
                <ContentPost key={idx}>
                  <PostContent>
                    <LeftPostContent>
                      <Link to="#">
                        <img
                          className="ImgPost"
                          src="https://www.bigspeak.com/wp-content/uploads/2022/02/pexels-suzy-hazelwood-1995842-780x477.jpg"
                          alt="BigSpeak"
                        />
                      </Link>
                    </LeftPostContent>
                    <RightPostContent>
                      <p className="post-date">Feb 28, 2022</p>
                      <p>
                        <a
                          href="https://www.bigspeak.com/spotlight-on-storytelling-utilizing-narratives-for-business-success/"
                          className="post-title"
                        >
                          Spotlight on Storytelling: Utilizing Narratives for
                          Business Success
                        </a>
                      </p>
                    </RightPostContent>
                  </PostContent>
                </ContentPost>
              );
            })}
            <Line />
            <EmailIframe />
          </RightContent>
        </Content>
      </ContentRes>
    </ContainerMain>
  );
};
