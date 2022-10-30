import { ActionIcon, Anchor, Container, List } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ENFlag from "../assets/vectors/flags/ENFlag";
import NBFlag from "../assets/vectors/flags/NBFlag";
import AppWrapper from "../components/wrappers/AppWrapper";
import usePrivacy from "../hooks/privacy";
import { IconMail, IconWorldWww } from "@tabler/icons";

const Privacy = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState<"nb" | "en">("nb");
  const privacy = usePrivacy(selectedLanguage);

  return (
    <AppWrapper>
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
        <ActionIcon
          variant="transparent"
          onClick={() => setSelectedLanguage("nb")}
          sx={{ opacity: selectedLanguage === "nb" ? 1 : 0.5, width: 40, height: 40, marginLeft: 4, marginRight: 4 }}
        >
          <NBFlag />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          onClick={() => setSelectedLanguage("en")}
          sx={{ opacity: selectedLanguage === "en" ? 1 : 0.5, width: 40, height: 40, marginLeft: 4, marginRight: 4 }}
        >
          <ENFlag />
        </ActionIcon>
      </div>
      <Container p="md">
        <h1>{privacy.title}</h1>
        {privacy.preamble.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Container>
      <Container p="md">
        <h2>{privacy.definitions.title}</h2>
        {privacy.definitions.definitions.map((d, i) => (
          <div key={i}>
            <h3>{d.title}</h3>
            <p>{d.paragraph}</p>
          </div>
        ))}
      </Container>
      <Container p="md">
        <h2>{privacy.informationCollectionAndUse.title}</h2>
        {privacy.informationCollectionAndUse.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Container>
      <Container p="md">
        <h2>{privacy.dataSecurity.title}</h2>
        {privacy.dataSecurity.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Container>
      <Container p="md">
        <h2>{privacy.linksToOtherSites.title}</h2>
        {privacy.linksToOtherSites.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Container>
      <Container p="md">
        <h2>{privacy.changesToThisPrivacyPolicy.title}</h2>
        {privacy.changesToThisPrivacyPolicy.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Container>
      <Container p="md">
        <h2>{privacy.contactUs.title}</h2>
        <List spacing="xs" center>
          <List.Item icon={<IconMail size={16} />} sx={{ alignItems: "center", justifyContent: "center" }}>
            {privacy.contactUs.email}
            <Anchor href={"mailto:hei@schmell.no"} target="_blank" sx={{ marginLeft: 4 }}>
              hei@schmell.no
            </Anchor>
          </List.Item>
          <List.Item icon={<IconWorldWww size={16} />}>
            {privacy.contactUs.website}
            <Anchor component={Link} to="/contact" sx={{ marginLeft: 4 }}>
              https://schmell.no/contact
            </Anchor>
          </List.Item>
        </List>
      </Container>
    </AppWrapper>
  );
};

export default Privacy;
