import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    if (!email || !name) {
      return NextResponse.json({ error: "Email and name are mandatory." }, { status: 400 })
    }

    // Send notification email to you
    await resend.emails.send({
      from: "AI Solved Business Problems <onboarding@resend.dev>",
      to: "mulalic71@gmail.com",
      subject: "New notification sign-up for a book.",
      html: `
        <h2>New notification sign-up.</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Datum:</strong> ${new Date().toLocaleString("hr-HR")}</p>
      `,
    })

    return NextResponse.json({ message: "Email successfully sent." }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email." }, { status: 500 })
  }
}
