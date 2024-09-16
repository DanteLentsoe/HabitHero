'use client'
import { FC } from 'react'
import { Footer } from '../../organisims'
import Link from 'next/link'

export const PrivacyPolicy: FC = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last updated: 2024/09/16</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to HabitHero. We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, and store your information when you use our
            habit tracking application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>
            HabitHero is designed with privacy in mind. We collect and store the
            following information:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Habit data: The habits you create, track, and complete</li>
            <li>
              Usage data: Information about how you interact with the app, such
              as which features you use most frequently
            </li>
          </ul>
          <p className="mt-2">
            All of this information is stored locally on your device using
            browser local storage. We do not collect or store any of this
            information on our servers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>
            The information stored locally on your device is used solely for the
            purpose of providing you with the HabitHero service. This includes:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Displaying your habits and tracking progress</li>
            <li>
              Generating insights and statistics about your habit performance
            </li>
            <li>
              Improving the app&apos;s functionality based on usage patterns
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Data Storage and Security
          </h2>
          <p>
            Your data is stored locally on your device using browser local
            storage. This means:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>We do not have access to your data</li>
            <li>Your data is not transmitted over the internet</li>
            <li>
              Your data remains on your device unless you choose to clear your
              browser data
            </li>
          </ul>
          <p className="mt-2">
            While we implement security best practices, please be aware that no
            method of electronic storage is 100% secure. We cannot guarantee the
            absolute security of your locally stored data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Your Data Rights</h2>
          <p>
            Since your data is stored locally on your device, you have full
            control over it. You can:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Access your data at any time through the app interface</li>
            <li>Modify or delete your data within the app</li>
            <li>
              Clear all your data by clearing your browser&apos;s local storage
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            6. Children&apos;s Privacy
          </h2>
          <p>
            Our service is not directed to children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If you are a parent or guardian and you are aware that your child
            has provided us with personal information, please contact us so that
            we can take necessary actions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date at the top of this
            Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <Link
              href={
                'mailto:dante.danware@gmail.com?subject=HabitHero Policy Inquiry'
              }
            >
              <span>dante.danware@gmail.com</span>
            </Link>
            .
          </p>
        </section>
      </div>
      <Footer className="shadow-md  bg-gradient-to-b from-purple-200  to-purple-100" />
    </div>
  )
}
