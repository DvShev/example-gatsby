import * as React from "react";
import { Layout } from "../../components/layout";
import { HeaderWorkShops } from "./../../components/BeyondKeynote/pages/workShops/HeaderWorkShops";
import { WorkshopTopics } from "./../../components/BeyondKeynote/pages/workShops/WorkshopTopics";
import { ExampleCourses } from "./../../components/BeyondKeynote/pages/workShops/ExampleCourses";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function BeyondKeynote() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.beyondKeynote.workshops}</title>
      </Helmet>
      <HeaderWorkShops />
      <WorkshopTopics />
      <ExampleCourses />
    </Layout>
  );
}
