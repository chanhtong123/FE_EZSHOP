import React from "react";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header1 from "components/Header1";
import Footer1 from "components/Footer1";
function App() {
  return (
    <Router>
      <Header1  className="flex flex-col items-center self-stretch bg-white-A700 pt-[11px]"/>
      <Routes />
      <Footer1 className="mt-[100px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
    </Router>
  );
}
export default App;
