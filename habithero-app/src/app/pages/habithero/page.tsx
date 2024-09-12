import { Metadata } from 'next'
import { HabitTrackerPage } from '@/app/components/templates'

export const metadata: Metadata = {
  title: 'HabitHero - Track and Build Better Habits',
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
  openGraph: {
    title: 'HabitHero - Your Personal Habit Tracking Companion',
    description:
      'Transform your life with HabitHero. Track habits, build streaks, and unlock your full potential.',
    images: [
      {
        url: '/images/habithero-og.png',
        width: 1200,
        height: 630,
        alt: 'HabitHero App',
      },
    ],
  },
}
export default function HabitHeroPage() {
  return <HabitTrackerPage />
}
