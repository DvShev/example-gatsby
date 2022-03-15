import * as React from "react";
import { Layout } from "../../components/layout";
import { HeaderCareers } from "./../../components/about/careers/HeaderCareers";
import { ContentCareers } from "./../../components/about/careers/ContentCareers";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function TeamPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.about.careers}</title>
      </Helmet>
      <HeaderCareers />
      <ContentCareers />
    </Layout>
  );
}
