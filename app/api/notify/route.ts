import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    if (!email || !name) {
      return NextResponse.json({ error: "Email i ime su obavezni" }, { status: 400 })
    }

    // Send notification email to you
    await resend.emails.send({
      from: "AI Solved Business Problems <onboarding@resend.dev>",
      to: "mulalic71@gmail.com",
      subject: "Nova prijava za obavijest o knjizi",
      html: `
        <h2>Nova prijava za obavijest</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Datum:</strong> ${new Date().toLocaleString("hr-HR")}</p>
      `,
    })

    // Optionally send confirmation email to the user
    await resend.emails.send({
      from: "AI Solved Business Problems <onboarding@resend.dev>",
      to: email,
      subject: "Potvrda prijave - AI Solved Business Problems",
      html: `
        <h2>Hvala na prijavi, ${name}!</h2>
        <p>Bit ćete obavješteni kada knjiga "AI Solved Business Problems" postane dostupna za kupnju.</p>
        <p><strong>Datum izlaska:</strong> 16. ožujak 2026.</p>
        <p><strong>Cijena:</strong> €30</p>
        <p>Srdačan pozdrav,<br/>Davor Mulalić</p>
      `,
    })

    return NextResponse.json({ message: "Email uspješno poslan" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ error: "Greška prilikom slanja emaila" }, { status: 500 })
  }
}
