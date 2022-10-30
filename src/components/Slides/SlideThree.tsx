import React from "react";
import { Center, Image } from "@mantine/core";
import iPhoneHelp from "../../assets/img/iPhoneHelp.png";
import iPhoneHelpTwo from "../../assets/img/iPhoneHelp-1.png";

const SlideThree = (): JSX.Element => (
  <Center style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Image src={iPhoneHelp} alt="Random unsplash image" width={600} />
    <Image src={iPhoneHelpTwo} alt="Random unsplash image" width={600} />
  </Center>
);

export default SlideThree;
