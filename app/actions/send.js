"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL;
const toEmail = process.env.RESEND_TO_EMAIL;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function rsend(formData) {
  try {
    const result = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      console.error("Validation errors:", errors);
      return {
        success: false,
        error: "Validation failed",
        errors: errors,
      };
    }

    const { name, email, subject, message } = result.data;

    console.log("Form submission data:", { name, email, subject, message });

    // Actual email sending logic using Resend
    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `Contact Form: ${subject}`,
        reply_to: email,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
      });

      console.log("Resend response:", data);

      // Check if Resend returned an error
      if (data.error) {
        console.error("Resend API error:", data.error);
        return {
          success: false,
          error: "Failed to send email via Resend",
        };
      }

      return { success: true };
    } catch (sendError) {
      console.error("Error calling Resend API:", sendError);
      return {
        success: false,
        error: "Internal server error during email sending",
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send email",
    };
  }
}
