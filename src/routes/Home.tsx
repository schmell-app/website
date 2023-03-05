import { Carousel } from "@mantine/carousel";
import { AppWrapper, Slides } from "../components";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

const Home = (): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <AppWrapper>
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <Carousel
          height={"calc(100vh - 250px)"}
          orientation="vertical"
          sx={{ maxWidth: "100%" }}
          loop
          withControls={!isMobile}
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
