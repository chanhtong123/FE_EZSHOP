import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/FooterAdmin";


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
        <Footer/>
        {/* <Header/> */}
        </div>
      </>
  
    )
  
  };
  