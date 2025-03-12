"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
})

export type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Prepare email content
    const emailContent = `
      Nouveau message de: ${validatedData.name}
      Email: ${validatedData.email}
      Sujet: ${validatedData.subject}
      
      Message:
      ${validatedData.message}
    `

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration, we'll simulate sending an email
    console.log("Sending email to: mouadhgammoudi13@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success
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

