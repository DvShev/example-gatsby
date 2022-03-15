import * as React from "react";
import { Layout } from "../components/layout";
import { HeaderTerms } from "./../components/terms/HeaderTerms";
import { ContentTerms } from "./../components/terms/ContentTerms";
import { Helmet } from "react-helmet";
import titleJson from "../services/titleSetting.json";

export default function TermsPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.terms}</title>
      </Helmet>
      <HeaderTerms />
      <ContentTerms />
    </Layout>
  );
}
