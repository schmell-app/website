import React from "react";
import { Grid, Image } from "@mantine/core";
import iPhoneHelp from "../../assets/img/iPhoneHelp.png";
import iPhoneHelpTwo from "../../assets/img/iPhoneHelp-1.png";
import { Link } from "react-router-dom";
import { AppStoreBlackButton } from "../../assets";
import { useMediaQuery } from "@mantine/hooks";
import GoogleBadge from "../../assets/img/google-play-badge.png";

const SlideThree = (): JSX.Element => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Grid align="center" py={24}>
      <Grid.Col>
        {isMobile ? <h3>Kanskje du sitter litt fast? 💡</h3> : <h2>Kanskje du sitter litt fast? 💡</h2>}
      </Grid.Col>
      <Grid.Col sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div>
          <Image src={iPhoneHelp} alt="Random unsplash image" width={isMobile ? 300 : 600} />
          <Image src={iPhoneHelpTwo} alt="Random unsplash image" width={isMobile ? 300 : 600} />
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
        {isMobile ? (
          <h3>Ikke fortvil, få hjelp med en gang ved å trykke på lyspæren</h3>
        ) : (
          <h2>Ikke fortvil, få hjelp med en gang ved å trykke på lyspæren</h2>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default SlideThree;
