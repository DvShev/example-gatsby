import * as React from "react";
import { Layout } from "../../components/layout";
import { HeaderSolutions } from "./../../components/BeyondKeynote/HeaderPages";
import { StepsBeyond } from "./../../components/BeyondKeynote/pages/bigSpeakBeyond/StepsBeyond";
import { TitleBoxes } from "./../../components/BeyondKeynote/pages/bigSpeakBeyond/TitleBoxes";
import { Programming } from "./../../components/BeyondKeynote/pages/bigSpeakBeyond/Programming";
import { Partnership } from "./../../components/BeyondKeynote/pages/bigSpeakBeyond/Partnership";
import { TestimonialsText } from "./../../components/BeyondKeynote/pages/bigSpeakBeyond/TestimonialsText";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

const description = `<div class="text"><h2 style="text-align: center;"><span style="font-size: 24pt;">The Future Ready Leader Series</span></h2><p>&nbsp;</p><p><span style="font-weight: 400;">BigSpeak Beyond is designed to extend the value of a keynote, driving key learning and insight throughout your organization.</span></p><p><span style="font-weight: 400;">Based on cognitive science and advanced learning technology, the Future Ready Leader Series ensures the investment you made in your live event is protected and expanded through a carefully curated program led by world-renowned thought leaders.</span></p><p><span style="font-weight: 400;">Valuable insights are delivered through a proven system including live masterclasses, weekly ‘micro-learnings’, team challenges, monthly webinars, and a 24/7 digital learning platform to ensure maximum impact and retention.</span></p></div>`;

export default function BigSpeakBeyond() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.beyondKeynote.bigspeakBeyond}</title>
      </Helmet>
      <HeaderSolutions
        title="BigSpeak Beyond"
        description={description}
        imgUrl="https://www.bigspeak.com/wp-content/themes/bigspeak/images/background-bigspeak-beyond.jpeg"
      />
      <StepsBeyond />
      <Programming />
      <TitleBoxes />
      <Partnership />
      <TestimonialsText />
    </Layout>
  );
}
