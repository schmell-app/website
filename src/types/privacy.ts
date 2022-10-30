export interface Privacy {
  title: string;
  preamble: string[];
  definitions: {
    title: string;
    definitions: Array<{ title: string; paragraph: string }>;
  };
  informationCollectionAndUse: PrivacyObjects;
  dataSecurity: PrivacyObjects;
  linksToOtherSites: PrivacyObjects;
  changesToThisPrivacyPolicy: PrivacyObjects;
  contactUs: {
    title: string;
    email: string;
    website: string;
  };
}

interface PrivacyObjects {
  title: string;
  paragraphs: string[];
}
