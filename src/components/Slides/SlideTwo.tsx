import { Image, Grid } from "@mantine/core";
import React from "react";
import iPhoneSettings from "../../assets/img/iPhoneSettings.png";
import { Link } from "react-router-dom";
import { AppStoreBlackButton } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";
import GoogleBadge from "../../assets/img/google-play-badge.png";

const SlideOne = (): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Grid align="center" py={24}>
      <Grid.Col lg={4} md={12}>
        {isMobile ? <h3>Få med hele gjengen 💯</h3> : <h2>Få med hele gjengen 💯</h2>}
      </Grid.Col>
      <Grid.Col
        lg={4}
        md={12}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
      >
        <Image src={iPhoneSettings} alt="Random unsplash image" width={isMobile ? 200 : 300} />
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
          <h3>Spillene og spørsmålene oppdateres ofte, ikke vær redd for at du/dere blir lei!</h3>
        ) : (
          <h2>Spillene og spørsmålene oppdateres ofte, ikke vær redd for at du/dere blir lei!</h2>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default SlideOne;
