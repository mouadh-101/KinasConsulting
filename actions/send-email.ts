// actions/send-email.ts
"use server"
import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
})

export type FormData = z.infer<typeof formSchema>

/**
 * Sends an email using Nodemailer.
 * This function is restricted to server-side execution.
 */
export async function sendEmail(formData: FormData) {
  try {
    // Validate form data using Zod schema
    const validatedData = formSchema.parse(formData)

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Outlook", // Replace with your email service provider
      auth: {
        user: process.env.OUTLOOK_EMAIL, // Sender email address
        pass: process.env.OUTLOOK_PASSWORD, // App password or regular password
      },
    })

    // Email content
    const emailContent = `
      Nouveau message de: ${validatedData.name}
      Email: ${validatedData.email}
      Sujet: ${validatedData.subject}

      Message:
      ${validatedData.message}
    `

    // Email options
    const mailOptions = {
      from: process.env.OUTLOOK_EMAIL || "your-email@outlook.com",
      to: "mouadhgammoudi13@gmail.com", // Receiver email
      subject: `Nouveau message de ${validatedData.name} - ${validatedData.subject}`,
      text: emailContent,
    }

    // Send email using Nodemailer
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Votre message a été envoyé avec succès!" }
  } catch (error) {
    console.error("Error sending email:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ field: e.path[0], message: e.message })),
      }
    }
    return { success: false, message: "Une erreur s'est produite lors de l'envoi du message." }
  }
}