import nb from "../assets/content/privacy/nb";
import en from "../assets/content/privacy/en";
import { Privacy } from "../types/privacy";

const usePrivacy = (locale: "nb" | "en"): Privacy => (locale === "en" ? en : nb);

export default usePrivacy;
