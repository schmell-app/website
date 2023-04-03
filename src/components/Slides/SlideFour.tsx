import { Grid, Image } from "@mantine/core";
import iPhonePlay from "../../assets/img/iPhonePlay.png";
import iPhonePlayTwo from "../../assets/img/iPhonePlay-1.png";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { AppStoreBlackButton } from "../../assets";
import GoogleBadge from "../../assets/img/google-play-badge.png";

const SlideFour = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid align="center" py={24}>
      <Grid.Col>
        {isMobile ? <h3>Gjør de forskjellige utfordringene</h3> : <h2>Gjør de forskjellige utfordringene</h2>}
      </Grid.Col>
      <Grid.Col sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div>
          <Image src={iPhonePlay} alt="Random unsplash image" width={isMobile ? 300 : 600} />
          <Image src={iPhonePlayTwo} alt="Random unsplash image" width={isMobile ? 300 : 600} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" target="_blank">
            <AppStoreBlackButton />
          </Link>
          <Link to="/" target="_blank">
            <Image src={GoogleBadge} alt="Google Play Badge" width={130} height={40} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </Grid.Col>
      <Grid.Col>
        {isMobile ? <h3>og opplev hva som gjør Schmell best💣</h3> : <h2>og opplev hva som gjør Schmell best💣</h2>}
      </Grid.Col>
    </Grid>
  );
};

export default SlideFour;
