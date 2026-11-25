"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/actions/contact";
import type { ContactField, ContactFormState } from "@/types/contact";

const INITIAL_STATE: ContactFormState = {
  success: false,
  data: null,
  error: null,
  fieldErrors: {},
};

const FIELD_CLASSES =
  "mt-2 w-full border-b border-cream/30 bg-transparent py-2 text-cream outline-none transition-colors placeholder:text-mist/50 focus:border-gold";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, INITIAL_STATE);

  return (
    <form action={formAction} noValidate className="space-y-8">
      <Field name="name" label="Nom" error={state.fieldErrors.name}>
        <input id="name" name="name" type="text" autoComplete="name" required className={FIELD_CLASSES} />
      </Field>
      <Field name="email" label="Email" error={state.fieldErrors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required className={FIELD_CLASSES} />
      </Field>
      <Field name="message" label="Message" error={state.fieldErrors.message}>
        <textarea id="message" name="message" rows={5} required className={`${FIELD_CLASSES} resize-none`} />
      </Field>
      {state.error && (
        <p role="alert" className="text-sm text-gold">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="border border-gold px-8 py-3 text-xs tracking-[0.25em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink disabled:opacity-50"
      >
        {pending ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}

interface FieldProps {
  name: ContactField;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ name, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-xs tracking-[0.2em] text-mist uppercase">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-gold">{error}</p>}
    </div>
  );
}
