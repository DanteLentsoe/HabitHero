import React, { FC } from 'react'

export const About: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-purple-800 mb-8">
        About HabitHero
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          At HabitHero, we believe that small, consistent actions lead to big
          changes. Our mission is to empower individuals to build positive
          habits and achieve their goals, one day at a time.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Simple and intuitive habit tracking</li>
          <li>Customizable goals to fit your lifestyle</li>
          <li>Insightful progress analytics</li>
          <li>Daily motivation to keep you on track</li>
          <li>Privacy-focused approach with local data storage</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          Our Story
        </h2>
        <p className="text-lg text-gray-700">
          HabitHero was born out of a personal need to create a simple yet
          effective habit tracking tool. What started as a side project quickly
          grew into a passion for helping others achieve their goals. Today, we
          are proud to offer a platform that has helped thousands of users
          transform their lives through better habits.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          The Team
        </h2>
        <p className="text-lg text-gray-700">
          HabitHero is maintained by a small team of dedicated developers,
          designers, and habit enthusiasts. We are committed to continually
          improving our platform based on user feedback and the latest research
          in habit formation and behavior change.
        </p>
      </section>
    </div>
  )
}
