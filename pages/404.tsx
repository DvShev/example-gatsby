import * as React from "react";
import { Layout } from "../components/layout";
import { ErrorComponents } from "./../components/error/ErrorComponents";

// styles

const NotFoundPage = () => {
  return (
    <Layout>
      <ErrorComponents />
    </Layout>
  );
};

export default NotFoundPage;
