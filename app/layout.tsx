import "./mvp.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Back to the Future: What's New and Old About Server Components",
  description:
    "A talk about React Server components by Callum Silcock, Principal Engineer at ANZ for MelbJS Aug / 2023",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
