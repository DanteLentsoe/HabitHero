import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navigation } from './components/molecules'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'HabitHero',
  description:
    'HabitHero helps you build and maintain positive habits, track your progress, and achieve your personal goals. Start your journey to becoming a Habit Hero today!',
  keywords: [
    'habit tracker',
    'personal development',
    'goal setting',
    'productivity',
    'self-improvement',
    'habit hero',
    'tracking habits',
    'setting goals',
    'goals application',
    'consistency report application',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
