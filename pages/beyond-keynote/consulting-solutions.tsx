import * as React from "react";
import { Layout } from "../../components/layout";
import { HeaderSolutions } from "./../../components/BeyondKeynote/HeaderPages";
import { Steps } from "./../../components/BeyondKeynote/pages/consultingSolutions/Steps";
import { ContentConsulting } from "./../../components/BeyondKeynote/pages/consultingSolutions/ContentConsulting";
import { BoxesConsulting } from "./../../components/BeyondKeynote/pages/consultingSolutions/BoxesConsulting";
import { ProfessionalConsulting } from "./../../components/BeyondKeynote/pages/consultingSolutions/ProfessionalConsulting";
import titleJson from "../../services/titleSetting.json";
import { Helmet } from "react-helmet";

const description = `<p>ELEVATE your team to the next level with advanced training, consulting and leadership development programs led by today’s preeminent business thought leaders.<br> BigSpeak Consulting works closely with you and your team to customize specific programs that increase learning and development. Together, we create and implement your company’s customized four-step plan that results in measurable transformation.</p><p>Learn More About Our Unique Process</p>
`;

export default function BeyondKeynote() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.beyondKeynote.consultingSolutions}</title>
      </Helmet>
      <HeaderSolutions
        title={"Consulting Solutions"}
        description={description}
      />
      <Steps />
      <ContentConsulting />
      <BoxesConsulting />
      <ProfessionalConsulting />
    </Layout>
  );
}
