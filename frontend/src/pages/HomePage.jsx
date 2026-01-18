import React from "react";
import Navbar from "../components/Navbar";
import BackgroundBlob from "../components/BackgroundBlob";
import Hero_content from "../components/Hero_content";

import FeatureSection from "../components/FeatureSection";

const HomePage = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <Hero_content />
      <FeatureSection/>
      <BackgroundBlob />
    </div>
  );
};

export default HomePage;
