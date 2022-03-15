import * as React from "react";
import { Layout } from "../components/layout";
import { HeaderSiteMap } from "./../components/siteMap/HeaderSiteMap";
import { ContentSiteMap } from "./../components/siteMap/ContentSiteMap";
import titleJson from "../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function sitemapPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.siteMap}</title>
      </Helmet>
      <HeaderSiteMap />
      <ContentSiteMap />
    </Layout>
  );
}
