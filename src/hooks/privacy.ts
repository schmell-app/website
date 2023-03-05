import { nb, en } from "../assets";
import { Privacy } from "../types";

const usePrivacy = (locale: "nb" | "en"): Privacy => (locale === "en" ? en : nb);

export default usePrivacy;
