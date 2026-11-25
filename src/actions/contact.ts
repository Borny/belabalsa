"use server";

import type { ContactField, ContactFormState } from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH: Record<ContactField, number> = { name: 100, email: 200, message: 5000 };

function readField(formData: FormData, field: ContactField): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function validate(values: Record<ContactField, string>): ContactFormState["fieldErrors"] {
  const errors: ContactFormState["fieldErrors"] = {};
  if (!values.name) errors.name = "Merci d'indiquer votre nom.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Merci d'indiquer un email valide.";
  if (!values.message) errors.message = "Merci d'écrire un message.";
  for (const field of Object.keys(MAX_LENGTH) as ContactField[]) {
    if (values[field].length > MAX_LENGTH[field]) errors[field] = "Ce champ est trop long.";
  }
  return errors;
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const values = {
      name: readField(formData, "name"),
      email: readField(formData, "email"),
      message: readField(formData, "message"),
    };
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      return { success: false, data: null, error: null, fieldErrors };
    }
    return {
      success: false,
      data: null,
      error: "L'envoi de messages n'est pas encore disponible. Écrivez-moi directement par email.",
      fieldErrors: {},
    };
  } catch {
    return {
      success: false,
      data: null,
      error: "Une erreur est survenue. Merci de réessayer.",
      fieldErrors: {},
    };
  }
}
