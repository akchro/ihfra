import './globals.css'
import { Inter, Noto_Sans } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-noto-sans",
  weight: "400"
})

export const metadata = {
  title: 'IHFRA',
  description: 'International Humanitarian Foundation Resource Association',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={noto_sans.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
