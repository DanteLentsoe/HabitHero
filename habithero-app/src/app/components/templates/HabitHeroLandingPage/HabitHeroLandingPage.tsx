import React, { FC } from 'react'
import Image from 'next/image'
import { FeatureCard } from '../../molecules'

export const HabitHeroLandingPage: FC = () => {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-green-100">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          <span className="text-2xl font-bold text-purple-800">HabitHero</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#features"
                className="text-purple-800 hover:text-purple-600"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-purple-800 hover:text-purple-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-purple-800 hover:text-purple-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-purple-800 mb-4">
              Find harmony with HabitHero
            </h1>
            <p className="text-xl text-purple-600 mb-8">
              Track your habits, build consistency, and achieve your goals.
            </p>
            <button className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 w-full">
              <Image
                src="/images/habit-tracker-illustration.png"
                alt="Person tracking habits on a device"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-20 bg-white rounded-lg shadow-xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Keep your inner balance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Daily Tracking"
              description="Log your habits easily and build consistency"
              icon="📊"
            />
            <FeatureCard
              title="Progress Insights"
              description="Visualize your growth with detailed analytics"
              icon="📈"
            />
            <FeatureCard
              title="Customizable Goals"
              description="Set and achieve personalized milestones"
              icon="🎯"
            />
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">
            Start taking care of your habits
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Consistency',
              'Motivation',
              'Progress',
              'Mindfulness',
              'Goals',
              'Tracking',
              'Growth',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white text-slate-900 py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>&copy; {year} HabitHero. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
