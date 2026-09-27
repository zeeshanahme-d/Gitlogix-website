"use server";

import { contactPage } from "@/content/site";

export type ContactField = "name" | "email" | "company" | "projectType" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validates an enquiry and reports success.
 * ponytail: enquiries are NOT delivered anywhere yet (temporary). Before launch,
 * send `values` by email or to a webhook where marked below.
 */
export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (read(formData, "website")) return { status: "success" };

  const values = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    company: read(formData, "company"),
    projectType: read(formData, "projectType"),
    message: read(formData, "message"),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Enter your name.";
  else if (values.name.length > 100) errors.name = "Use 100 characters or fewer.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Enter an email address like name@company.com.";
  if (values.company.length > 100) errors.company = "Use 100 characters or fewer.";
  if (values.projectType && !contactPage.projectTypes.includes(values.projectType)) {
    errors.projectType = "Choose one of the listed options.";
  }
  if (values.message.length < 20) errors.message = "Tell us a little more, at least 20 characters.";
  else if (values.message.length > 5000) errors.message = "Keep the message under 5,000 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Check the highlighted fields and try again.", errors, values };
  }

  // Delivery goes here (email or webhook). Until then the message is dropped.

  return { status: "success", values: { name: values.name, email: values.email } };
}
