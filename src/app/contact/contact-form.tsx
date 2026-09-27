"use client";

import { CaretDown, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { useActionState, useEffect, useRef, type ReactNode } from "react";

import { sendContactMessage, type ContactField, type ContactState } from "@/app/contact/actions";
import { buttonStyles } from "@/components/ui/button";
import { contactPage } from "@/content/site";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-control border border-line-strong bg-bg px-3.5 text-base text-fg transition-colors placeholder:text-muted hover:border-fg/40 focus-visible:border-fg-2 focus-visible:ring-3 focus-visible:ring-surface-3 focus-visible:outline-hidden aria-invalid:border-danger";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Move focus to the first invalid field, or to the success message.
  useEffect(() => {
    if (state.status === "error" && state.errors) {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
    } else if (state.status === "success") {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="flex flex-col items-start gap-4 outline-none">
        <CheckCircle size={40} weight="fill" aria-hidden className="text-success" />
        <h2 className="type-h3">Message sent</h2>
        <p className="measure text-lg text-fg-2">
          Thanks{state.values?.name ? `, ${state.values.name}` : ""}. We will reply to{" "}
          {state.values?.email ? <strong className="font-bold text-fg">{state.values.email}</strong> : "you"} by
          email.
        </p>
      </div>
    );
  }

  const error = (field: ContactField) => state.errors?.[field];
  const value = (field: ContactField) => state.values?.[field] ?? "";

  return (
    <form ref={formRef} action={formAction} noValidate className="grid gap-6">
      {state.status === "error" && state.message ? (
        <p role="alert" className="flex gap-3 rounded-control border border-danger/30 bg-danger/5 p-4 text-danger">
          <WarningCircle size={22} aria-hidden className="shrink-0" />
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={error("name")}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={value("name")}
            aria-invalid={!!error("name")}
            aria-describedby={error("name") ? "name-error" : undefined}
            className={`${fieldClass} h-11`}
          />
        </Field>
        <Field id="email" label="Work email" error={error("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={value("email")}
            aria-invalid={!!error("email")}
            aria-describedby={error("email") ? "email-error" : undefined}
            className={`${fieldClass} h-11`}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="company" label="Company" optional error={error("company")}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            defaultValue={value("company")}
            aria-invalid={!!error("company")}
            aria-describedby={error("company") ? "company-error" : undefined}
            className={`${fieldClass} h-11`}
          />
        </Field>
        <Field id="projectType" label="What do you need?" optional error={error("projectType")}>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              defaultValue={value("projectType")}
              aria-invalid={!!error("projectType")}
              aria-describedby={error("projectType") ? "projectType-error" : undefined}
              className={`${fieldClass} h-11 appearance-none pr-10`}
            >
              <option value="">Select a type</option>
              {contactPage.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <CaretDown
              size={18}
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-fg-2"
            />
          </div>
        </Field>
      </div>

      <Field
        id="message"
        label="Project details"
        hint="What are you building, who is it for, and when do you need it?"
        error={error("message")}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={value("message")}
          aria-invalid={!!error("message")}
          aria-describedby={error("message") ? "message-hint message-error" : "message-hint"}
          className={`${fieldClass} min-h-40 resize-y py-3`}
        />
      </Field>

      {/* Honeypot for bots, hidden from people and assistive technology. */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" disabled={pending} className={buttonStyles()}>
          {pending ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-muted">We only use your details to reply to this message.</p>
      </div>
    </form>
  );
}

type FieldProps = {
  id: ContactField;
  label: string;
  hint?: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, hint, optional, error, children }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="font-bold text-fg">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-muted">(optional)</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="-mt-1 text-sm text-fg-2">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="flex items-center gap-2 text-sm font-medium text-danger">
          <WarningCircle size={16} weight="bold" aria-hidden className="shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
