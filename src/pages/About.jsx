import React from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUsPageComp2 from "../components/AboutUsPageComp2";
import AboutUsPageComp1 from "../components/AboutUsPageComp1";
import AboutUsPageComp3 from "../components/AboutUsPageComp3";
import AboutUsPageComp4 from "../components/AboutUsPageComp4";
import BrochureCard from "../components/BrochureCard";
import AboutUsPageComp4Mobile from "../components/AboutUsPageComp4Mobile";
import AboutUsPageComp2Tablet from "../components/AboutUsPageComp2Tablet";

const About = () => {
  return (
    <>
      <AboutUsPageComp1 />
      <div className="hidden lg:block">
      <AboutUsPageComp2 />
      </div>
      <div className="lg:hidden">
      <AboutUsPageComp2Tablet/>
      </div>
      <AboutUsPageComp3 />
      <div className="lg:block hidden">
        <AboutUsPageComp4 />
      </div>
      <div className="lg:hidden">
        <AboutUsPageComp4Mobile />
      </div>
      <WhyChooseUs />
      <BrochureCard />
    </>
  );
};

export default About;
