import React from "react";
import Banner from "../partials/banner";
import WhyUbupay from "../partials/why-ubupay";
import Solution from "../partials/solution";
import HowItWorks from "../partials/how-it-works";
import DownloadApp from "../partials/download-app";
import Footer from "../layout/footer";

const Home = () => {
  return (
    <div>
        <Banner />
        <WhyUbupay/>
        <Solution/>
        <HowItWorks/>
        <DownloadApp/>
        <Footer/>
    </div>
  );
};

export default Home;
