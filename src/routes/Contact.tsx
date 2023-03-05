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
import { AppWrapper } from "../components";
import { ContactType, CreateContactForm } from "../types";
import { useContactFormSubmit } from "../hooks";

const Contact = (): JSX.Element => {
  const form = useForm({
    initialValues: {
      email: "",
      message: "",
      type: ContactType.Feedback,
      acceptedTerms: false,
    },
    validate: {
      email: (value, values) => !/^\S+@\S+$/.test(value) && values.type === ContactType.Contact && "Ugyldig epost",
      message: (value) => !(value.length > 0) && "Meldingen kan ikke være tom",
      acceptedTerms: (value: boolean) => !value && "Du må godta vilkårene",
    },
  });
  const { isLoading, isError, isSuccess, submit } = useContactFormSubmit(
    process.env.REACT_APP_API_CONTACT_ENDPOINT ?? ""
  );

  const handleFormSubmit = async (values: CreateContactForm) => {
    console.log("triggered");
    await submit(values);
  };

  const isContact = form.values.type === ContactType.Contact;

  return (
    <AppWrapper>
      <Container p="md">
        <h1>Kontakt oss 🤩</h1>
        <small>Bruk dette skjemaet om du har forslag til forbedring eller bare ønsker å komme i kontakt med oss.</small>
      </Container>
      <Container size="md" p="md">
        <Box
          component="form"
          onSubmit={form.onSubmit(async (values: CreateContactForm) => await handleFormSubmit(values))}
        >
          <Stack>
            <div>
              <Text size="sm" sx={{ marginBottom: 2 }}>
                Hva gjelder det?
              </Text>
              <SegmentedControl
                data={[
                  { label: "Feedback", value: ContactType.Feedback },
                  { label: "Kontakt", value: ContactType.Contact },
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
              {...form.getInputProps("acceptedTerms")}
              label={
                isContact
                  ? "Jeg aksepterer at informasjonen blir lagret for å kontakte meg"
                  : "Jeg aksepterer at informasjonen blir lagret for å forbedre applikasjonen"
              }
            />
            {isError ?? (
              <Alert color={"red"} title="Oisann😨">
                Noe gikk galt. Prøv igjen senere.
              </Alert>
            )}
            {isSuccess ?? (
              <Alert color={"green"} title="Takk!🙏">
                Vi har mottatt meldingen din. Vi vil svare så fort vi kan.
              </Alert>
            )}
            <Button type="submit" loading={isLoading} loaderPosition="right">
              Send
            </Button>
          </Stack>
        </Box>
      </Container>
    </AppWrapper>
  );
};

export default Contact;
