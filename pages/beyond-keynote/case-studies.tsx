import * as React from "react";
import { Layout } from "../../components/layout";
import { CaseHeader } from "./../../components/BeyondKeynote/pages/caseStudies/CaseHeader";
import { BoxesCase } from "./../../components/BeyondKeynote/pages/caseStudies/BoxesCase";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function CaseStudies() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.beyondKeynote.caseStudies}</title>
      </Helmet>
      <CaseHeader />
      <BoxesCase />
    </Layout>
  );
}
