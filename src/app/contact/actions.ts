"use server";

import { company, contactPage } from "@/content/site";

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
 * Delivers enquiries to CONTACT_WEBHOOK_URL as JSON (Slack, Zapier, Make or
 * any HTTP endpoint). Without it, development logs the message and
 * production reports a failure instead of silently dropping the lead.
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

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const text = [
    `New enquiry from ${values.name} <${values.email}>`,
    values.company && `Company: ${values.company}`,
    values.projectType && `Project: ${values.projectType}`,
    "",
    values.message,
  ]
    .filter((line) => line !== "")
    .join("\n");

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, ...values }),
      });
      if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    } catch (error) {
      console.error("[contact] delivery failed", error);
      return deliveryFailed(values);
    }
  } else if (process.env.NODE_ENV === "production") {
    console.error("[contact] CONTACT_WEBHOOK_URL is not set; enquiry not delivered.");
    return deliveryFailed(values);
  } else {
    console.info(`[contact] CONTACT_WEBHOOK_URL is not set. Development only, message not sent:\n${text}`);
  }

  return { status: "success", values: { name: values.name, email: values.email } };
}

function deliveryFailed(values: ContactState["values"]): ContactState {
  return {
    status: "error",
    message: `Your message could not be sent. Email us at ${company.email} and we will reply from there.`,
    values,
  };
}
