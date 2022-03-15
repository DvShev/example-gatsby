import * as React from "react";
import { Layout } from "../../components/layout";
import { HeaderBeyond } from "../../components/BeyondKeynote/HeaderBeyond";
import { Boxes } from "../../components/BeyondKeynote/Boxes";
import { FooterBeyond } from "../../components/BeyondKeynote/FooterBeyond";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function BeyondKeynote() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.beyondKeynote.index}</title>
      </Helmet>
      <HeaderBeyond />
      <Boxes />
      <FooterBeyond />
    </Layout>
  );
}
