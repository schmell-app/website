import { Center, Image } from "@mantine/core";
import iPhonePlay from "../../assets/img/iPhonePlay.png";
import iPhonePlayTwo from "../../assets/img/iPhonePlay-1.png";
import React from "react";

const SlideFour = () => (
  <Center style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Image src={iPhonePlay} alt="Random unsplash image" width={600} />
    <Image src={iPhonePlayTwo} alt="Random unsplash image" width={600} />
  </Center>
);

export default SlideFour;
