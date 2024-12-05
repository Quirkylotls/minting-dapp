import { Inter } from "next/font/google"
import "./globals.css"
import { Rubik_Bubbles } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })
const bubbleFont = Rubik_Bubbles({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bubble'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bubbleFont.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
