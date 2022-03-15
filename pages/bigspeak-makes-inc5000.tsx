import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { ContentMakes } from "./../components/bigspeakMakes/ContentMakes";
import titleJson from "../services/titleSetting.json";

export default function BigSpeakMakesPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.bigspeakMakesInc5000}</title>
      </Helmet>
      <ContentMakes />
    </Layout>
  );
}
