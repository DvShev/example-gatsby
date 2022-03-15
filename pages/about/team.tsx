import * as React from "react";
import { Layout } from "../../components/layout";
import { TitleTeam } from "./../../components/about/team/TitleTeam";
import { SlidersTeam } from "./../../components/about/team/SlidersTeam";
import { TeamContent } from "./../../components/about/team/TeamContent";
import { JoinUs } from "./../../components/about/team/JoinUs";
import { BigSpeakGiving } from "./../../components/about/team/BigSpeakGiving";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

export default function TeamPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.about.team}</title>
      </Helmet>
      <TitleTeam />
      <SlidersTeam />
      <TeamContent />
      <JoinUs />
      <BigSpeakGiving />
    </Layout>
  );
}
