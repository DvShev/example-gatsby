import * as React from "react";
import { Layout } from "../../components/layout";
import { HeaderFaq } from "./../../components/about/faq/HeaderFaq";
import { ContentFaq } from "./../../components/about/faq/ContentFaq";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";
export default function FaqPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.about.faq}</title>
      </Helmet>
      <HeaderFaq />
      <ContentFaq />
    </Layout>
  );
}
