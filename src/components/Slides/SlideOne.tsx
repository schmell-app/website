import React from "react";
import { Grid, Image } from "@mantine/core";
import iPhoneHome from "../../assets/img/iPhoneHome.png";

const SlideOne = (): JSX.Element => {
  return (
    <Grid align="center" sx={{ height: "100%" }}>
      <Grid.Col lg={4} md={12}>
        <h1>Få en uforglemmelig kveld med både kjente og ukjente 🍾</h1>
      </Grid.Col>
      <Grid.Col lg={4} md={12}>
        <Image src={iPhoneHome} alt="Random unsplash image" width={350} />
      </Grid.Col>
      <Grid.Col lg={4} md={12}>
        <h1>Ikveld Schmeller det 🥳</h1>
      </Grid.Col>
    </Grid>
  );
};

export default SlideOne;
