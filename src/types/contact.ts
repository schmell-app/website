export enum ContactType {
  Feedback = "Feedback",
  Contact = "Contact",
}

export interface CreateContactForm {
  email?: string;
  message: string;
  type: ContactType;
  acceptedTerms: boolean;
}
