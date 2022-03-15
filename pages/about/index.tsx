import * as React from "react";
import titleJson from "../../services/titleSetting.json";
import { Layout } from "../../components/layout";
import { About } from "../../components/about/index";
import { Work } from "../../components/about/Work";
import { TabComponent } from "../../components/about/TabComponent";
import { AssociationMemberships } from "../../components/about/AssociationMemberships";
import { graphql } from "gatsby";

import { Helmet } from "react-helmet";

interface imgType {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      src: string;
      srcSet: string;
      sizes: string;
      base64: string;
    };
  };
}
export type affiliationsLogosType = {
  title: string;
  image: { localFile: imgType };
};
export interface aboutPageDetailsType {
  clientList: string;
  top: {
    cards: {
      localFile: imgType;
      title: string;
    }[];
    quoteText: string;
    quoteTitle: string;
    text1: string;
    text2: string;
    rows: {
      content: string;
      image: { localFile: imgType; title: string };
    }[];
  };
  whyWorkWithUs: {
    text: string;
    title: string;
  }[];
}
interface dataGraphQL {
  bsPage: {
    id: string;
    affiliationsLogos: {
      affiliationsLogos: affiliationsLogosType[];
    };
    aboutPageDetails: aboutPageDetailsType;
  };
}
const Home: React.FC<{ data: dataGraphQL }> = ({ data }) => {
  const {
    bsPage: {
      aboutPageDetails,
      affiliationsLogos: { affiliationsLogos },
    },
  } = data;
  const {
    bsPage: {
      aboutPageDetails: { whyWorkWithUs, clientList },
    },
  } = data;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.about.index}</title>
      </Helmet>
      <About aboutPageDetails={aboutPageDetails} />
      <Work whyWorkWithUs={whyWorkWithUs} />
      <TabComponent clientList={clientList} />
      <AssociationMemberships affiliationsLogos={affiliationsLogos} />
    </Layout>
  );
};
export default Home;
export const pageQuery = graphql`
  query myQueryAboutUs {
    bsPage(title: { eq: "About" }) {
      id
      aboutPageDetails {
        top {
          quoteTitle
          quoteText
          text1
          text2
          cards {
            title
            localFile {
              childImageSharp {
                fluid(maxWidth: 846) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          rows {
            content
            image {
              title
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
        whyWorkWithUs {
          title
          text
        }
        clientList
      }
      affiliationsLogos {
        affiliationsLogos {
          title
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 90) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`;
