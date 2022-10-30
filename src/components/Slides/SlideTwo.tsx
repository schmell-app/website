import { Image, Grid } from "@mantine/core";
import React from "react";
import iPhoneSettings from "../../assets/img/iPhoneSettings.png";
import { Link } from "react-router-dom";
import AppStoreBlackButton from "../../assets/vectors/common/AppStoreBlackButton";
import { useMediaQuery } from "@mantine/hooks";

const SlideOne = (): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Grid align="center" sx={{ height: "100%" }}>
      <Grid.Col lg={4} md={12}>
        {isMobile ? <h3>Få med hele gjengen 💯</h3> : <h2>Få med hele gjengen 💯</h2>}
      </Grid.Col>
      <Grid.Col
        lg={4}
        md={12}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}
      >
        <Image src={iPhoneSettings} alt="Random unsplash image" width={isMobile ? 110 : 300} />
        <Link to="/" target="_blank">
          <AppStoreBlackButton />
        </Link>
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
