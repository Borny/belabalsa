export type ContactField = "name" | "email" | "message";

export interface ContactFormState {
  success: boolean;
  data: null;
  error: string | null;
  fieldErrors: Partial<Record<ContactField, string>>;
}
