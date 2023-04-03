import { AppWrapper, Slides } from "../components";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <AppWrapper>
      <div style={{ height: "100%", width: "100%" }}>{Slides}</div>
    </AppWrapper>
  );
};

export default Home;
