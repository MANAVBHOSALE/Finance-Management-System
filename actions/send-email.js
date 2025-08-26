import { Resend } from "resend"

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "")

  try {
    const { data, error } = await resend.emails.send({
      from: "Finance Management System <onboarding@resend.dev>",
      to,
      subject,
      react,
    })
    return { sucess: true, data }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { sucess: false, error }
  }
}
