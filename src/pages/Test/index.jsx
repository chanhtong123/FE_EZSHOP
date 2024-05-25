import React from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Button,
  Input,
  Text,
  Heading,
  RatingBar,
  Slider,
} from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header1";
import HomePageArrowbullet from "../../components/HomePageArrowbullet";
import HomePageFive from "../../components/HomePageFive";
import HomePageFour from "../../components/HomePageFour";
import HomePageOne from "../../components/HomePageOne";
import HomePageSix from "../../components/HomePageSix";
import HomePageThree from "../../components/HomePageThree";

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
      <Header className="shadow-lg" />
      </div>
    </>

  )

};
