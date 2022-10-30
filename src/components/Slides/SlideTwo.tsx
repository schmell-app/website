import { Image, Center } from "@mantine/core";
import React from "react";
import iPhoneSettings from "../../assets/img/iPhoneSettings.png";

const SlideOne = (): JSX.Element => {
  return (
    <Center style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Image src={iPhoneSettings} alt="Random unsplash image" width={300} />
    </Center>
  );
};

export default SlideOne;
