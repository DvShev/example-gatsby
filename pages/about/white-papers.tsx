import * as React from "react";
import { Layout } from "../../components/layout";
import { WhitePapers } from "./../../components/whitePapers/WhitePapers";
import { ResultWhitePapers } from "./../../components/whitePapers/ResultWhitePapers";
import { PaginationResult } from "../../services/Pagination";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function Keynote() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.about.whitePapers}</title>
      </Helmet>
      <WhitePapers />
      <ResultWhitePapers />
      {/* <PaginationResult
        bg="#fff"
        url="business-speakers"
        page={10}
        pageColor="#000"
        search="{location.search}"
      /> */}
    </Layout>
  );
}
