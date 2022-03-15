import * as React from "react";
import { useQueryParam, StringParam } from "use-query-params";

import { CallInformation } from "../components/contact/CallInformation";
import { FormContact } from "../components/contact/FormContact";
import { TitleContact } from "../components/contact/TitleContact";
import { Contacts } from "./../components/contact/Contacts";
import { MapContent } from "./../components/contact/MapContent";
import { ContactsBtn } from "./../components/contact/ContactsBtn";
import { Layout } from "../components/layout";

export default function ContactPage({ pageContext, location }) {
  const [valueFromQuery] = useQueryParam("check", StringParam);
  return (
    <Layout>
      {valueFromQuery ? (
        <>
          <TitleContact title={valueFromQuery} bg="#000" color="#fff" />
        </>
      ) : (
        <>
          <Contacts />
          <MapContent />
          <ContactsBtn />
          <TitleContact title={valueFromQuery} bg="#fff" color="#000" />
        </>
      )}
      <CallInformation />
      <FormContact urlText={valueFromQuery} />
    </Layout>
  );
}
