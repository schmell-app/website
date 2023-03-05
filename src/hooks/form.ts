import { useState } from "react";
import { CreateContactForm } from "../types";
import axios from "axios";

const useContactFormSubmit = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submit = async (data: CreateContactForm) => {
    console.log("submitting form", data);

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    await axios
      .post(url, data)
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsError(true);
        console.log("error", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    isError,
    isSuccess,
    submit,
  };
};

export default useContactFormSubmit;
