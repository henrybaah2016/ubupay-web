"use client"
import React from "react";
import Banner from "../partials/banner";
import WhyUbupay from "../partials/why-ubupay";
import Solution from "../partials/solution";
import HowItWorks from "../partials/how-it-works";
import DownloadApp from "../partials/download-app";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Countries from "../partials/countries";


const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#000000] to-[#192e56] h-auto xl:h-[950px] lg:h-[950px] md:h-auto w-full">
        <Header />
        <Banner />
      </div>

      <WhyUbupay />
      <Solution />
      <HowItWorks />
      <Countries />
      <Footer />

    </div>
  );
};

export default Home;
