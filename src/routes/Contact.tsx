/* eslint-disable @typescript-eslint/promise-function-async */
import React from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  SegmentedControl,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import AppWrapper from "../components/wrappers/AppWrapper";
import { ContactType, ContactValues } from "../types/contact";
import { useForm as useFormspreeForm } from "@formspree/react";

const Contact = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      email: "",
      message: "",
      type: "F" as ContactType,
      accepted: false,
    },
    validate: {
      email: (value, values) => !/^\S+@\S+$/.test(value) && values.type === "C" && "Ugyldig epost",
      message: (value) => !(value.length > 0) && "Meldingen kan ikke være tom",
      accepted: (value: boolean) => !value && "Du må godta vilkårene",
    },
  });
  const [state, handleSubmit] = useFormspreeForm("mlevplvg");

  const handleFormSubmit = async (values: ContactValues) => {
    console.log(values);
    const data = await handleSubmit(values);
    console.log(data);
  };

  const isContact = form.values.type === "C";

  return (
    <AppWrapper>
      <Container p="md">
        <h1>Kontakt oss 🤩</h1>
        <small>Bruk dette skjemaet om du har forslag til forbedring eller bare ønsker å komme i kontakt med oss.</small>
      </Container>
      <Container size="md" p="md">
        <Box component="form" onSubmit={form.onSubmit((values: ContactValues) => handleFormSubmit(values))}>
          <Stack>
            <div>
              <Text size="sm" sx={{ marginBottom: 2 }}>
                Hva gjelder det?
              </Text>
              <SegmentedControl
                data={[
                  { label: "Feedback", value: "F" },
                  { label: "Kontakt", value: "C" },
                ]}
                {...form.getInputProps("type")}
              />
            </div>
            <Textarea
              {...form.getInputProps("message")}
              placeholder="Skriv en melding til oss her"
              label={isContact ? "Hva kan vi hjelpe deg med?" : "Hva skal vi forbedre?"}
            />
            {isContact && (
              <TextInput
                {...form.getInputProps("email")}
                placeholder="hei@schmell.no"
                label="Hvordan kommer vi i kontakt med deg?"
              />
            )}
            <Checkbox
              {...form.getInputProps("accepted")}
              label={
                isContact
                  ? "Jeg aksepterer at informasjonen blir lagret for å kontakte meg"
                  : "Jeg aksepterer at informasjonen blir lagret for å forbedre applikasjonen"
              }
            />
            {state.errors ?? (
              <Alert color={"red"} title="Oisann😨">
                Noe gikk galt. Prøv igjen senere.
              </Alert>
            )}
            {state.succeeded && (
              <Alert color={"green"} title="Takk!🙏">
                Vi har mottatt meldingen din. Vi vil svare så fort vi kan.
              </Alert>
            )}
            <Button type="submit" loading={state.submitting} loaderPosition="right">
              Send
            </Button>
          </Stack>
        </Box>
      </Container>
    </AppWrapper>
  );
};

export default Contact;
