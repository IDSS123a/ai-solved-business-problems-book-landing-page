import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Solved Business Problems - Pre-order the Book by Davor Mulalić",
  description:
    "50 real-world business challenges across 10 industries. A practical workbook for managers requiring no coding. Available March 16, 2026 for €30.",
  generator: "v0.app",
  icons: {
    icon: "https://i.postimg.cc/mrZ4hsYX/davor.png",
    apple: "https://i.postimg.cc/mrZ4hsYX/davor.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
