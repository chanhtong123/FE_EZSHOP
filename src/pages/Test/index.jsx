import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header1";


export default function TestPage() {
  return (
    <>
    <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Testing page"
        />
      </Helmet>
      <div>
      {/* <Header className="shadow-lg" /> */}
      <Header/>
      </div>
    </>

  )

};
