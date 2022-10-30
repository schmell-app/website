import { Carousel } from "@mantine/carousel";
import Slides from "../components/Slides";
import AppWrapper from "../components/wrappers/AppWrapper";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <AppWrapper>
      <div style={{ display: "flex", height: "100%" }}>
        <Carousel
          slideSize="100%"
          height={"calc(100vh - 130px)"}
          sx={{ flex: 1 }}
          orientation="vertical"
          slideGap="md"
          controlSize={20}
          loop
        >
          {Slides.map((slide, index) => (
            <Carousel.Slide key={index}>{slide}</Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </AppWrapper>
  );
};

export default Home;
