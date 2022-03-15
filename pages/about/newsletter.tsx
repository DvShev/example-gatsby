import * as React from "react";
import { Layout } from "../../components/layout";

import { TopNewsLetter } from "./../../components/newsletter/TopNewsLetter";
import { SignUpNewsletter } from "./../../components/newsletter/SignUpNewsletter";
import { ResultsCalendar } from "./../../components/newsletter/ResultsCalendar";
import { PaginationResult } from "../../services/Pagination";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function Keynote({ pageContext, location }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.about.newsletter}</title>
      </Helmet>
      <TopNewsLetter />
      <SignUpNewsletter />
      <ResultsCalendar />
      {/* <PaginationResult
        bg="#fff"
        url="business-speakers"
        page={pageContext.offset}
        search={location.search}
      /> */}
    </Layout>
  );
}
