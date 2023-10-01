import React from "react";
import Section1 from "./homeSections/Section1";
import Section2 from "./homeSections/Section2";
import Section3 from "./homeSections/Section3";
import Section4 from "./homeSections/Section4";

const Home = () => {
  return (
    <div style={{ height: "365vh" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
