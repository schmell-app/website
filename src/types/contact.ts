export type ContactType = "F" | "C";

export interface ContactValues {
  email?: string;
  message: string;
  type: ContactType;
  accepted: boolean;
}
