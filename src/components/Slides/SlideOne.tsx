import React from "react";
import { Grid, Image } from "@mantine/core";
import iPhoneHome from "../../assets/img/iPhoneHome.png";
import GoogleBadge from "../../assets/img/google-play-badge.png";
import { AppStoreBlackButton } from "../../assets";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const SlideOne = (): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid align="center" py={24}>
      <Grid.Col lg={4} md={12}>
        {isMobile ? (
          <h3>Få en uforglemmelig kveld med både kjente og ukjente 🍾</h3>
        ) : (
          <h2>Få en uforglemmelig kveld med både kjente og ukjente 🍾</h2>
        )}
      </Grid.Col>
      <Grid.Col
        lg={4}
        md={12}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
      >
        <Image src={iPhoneHome} alt="Random unsplash image" width={isMobile ? 200 : 300} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" target="_blank">
            <AppStoreBlackButton />
          </Link>
          <Link to="/" target="_blank">
            <Image src={GoogleBadge} alt="Google Play Badge" width={130} height={40} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </Grid.Col>
      <Grid.Col lg={4} md={12}>
        {isMobile ? (
          <h3>Test ut de forskjellige spillene, og bli hektet. Følg med for limited edition spill🤩</h3>
        ) : (
          <h2>Test ut de forskjellige spillene, og bli hektet. Følg med for limited edition spill🤩</h2>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default SlideOne;
