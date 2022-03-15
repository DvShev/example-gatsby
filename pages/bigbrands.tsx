import * as React from "react";
import { Helmet } from "react-helmet";

import { Layout } from "../components/layout";
import { BigBrands } from "./../components/bigBrands/BigBrands";
import { ContentBigBrands } from "./../components/bigBrands/ContentBigBrands";
import titleJson from "../services/titleSetting.json";

export default function BigBrandsPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.bigbrands}</title>
      </Helmet>
      <BigBrands />
      <ContentBigBrands />
    </Layout>
  );
}
