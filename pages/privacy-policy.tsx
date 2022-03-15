import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { PrivacyPolicy } from "./../../src/components/privacyPolicy/PrivacyPolicy";
import titleJson from "../services/titleSetting.json";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleJson.privacyPolicy}</title>
      </Helmet>
      <PrivacyPolicy />
    </Layout>
  );
}
