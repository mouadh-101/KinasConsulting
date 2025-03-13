import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kinas Consulting',
  icons:'/KinasConsultingLogo.png',
  description: "Kinas Consulting accompagne les institutions nationales et internationales dans la conception, la gestion et l'évaluation de projets à fort impact.",
  creator: 'Mouadh Gammoudi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
