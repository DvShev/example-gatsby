import * as React from "react";
import { Layout } from "../components/layout";
import { Topics } from "./../components/topics/List";
import { useMenuQuery } from "./../hooks/menuQuery";
import { Helmet } from "react-helmet";
import { useTitle } from "../services/Title";
import titleJson from "../services/titleSetting.json";

export default function keynoteSpeakerTopics() {
  const { menuAll } = useMenuQuery();
  const { titleHeader } = useTitle(
    menuAll,
    titleJson.mainTitle.keynoteSpeakers.url,
    titleJson.mainTitle.keynoteSpeakers.title
  );
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleHeader}</title>
      </Helmet>
      <Topics />
    </Layout>
  );
}
