import * as React from "react";
import { useEffect, useState } from "react";
import { ContentTop } from "../components/main/ContentTop";
import { Layout } from "../components/layout";
import { SliderTop } from "../components/main/Slider";
import { ContentVideo } from "../components/main/ContentVideo";
import { SliderSpeakers } from "../components/main/SliderSpeakers";
import { SpeakersBureau } from "../components/main/SpeakersBureau";
import { SliderTrending } from "../components/main/SliderTrending";
import { LatestNews } from "../components/main/LatestNews";
import { Events } from "../components/main/Events";
import { Serves } from "../components/main/Serves";
import { useMenuQuery } from "./../hooks/menuQuery";
import { Helmet } from "react-helmet";
import { useTitle } from "../services/Title";
import titleJson from "../services/titleSetting.json";

export default function Home() {
  const { menuAll } = useMenuQuery();
  const { titleHeader } = useTitle(
    menuAll,
    titleJson.mainTitle.main.url,
    titleJson.mainTitle.main.title
  );
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleHeader}</title>
      </Helmet>
      <SliderTop />
      <ContentTop />
      <ContentVideo />
      <SliderSpeakers />
      <SpeakersBureau />
      <SliderTrending />
      <LatestNews />
      <Events />
      <Serves />
    </Layout>
  );
}
