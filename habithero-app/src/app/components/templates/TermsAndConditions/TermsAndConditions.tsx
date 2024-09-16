'use client'
import { FC } from 'react'
import { Footer } from '../../organisims'
import Link from 'next/link'

export const TermsAndConditions: FC = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-6">Last updated: 2024/09/16</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using HabitHero, you agree to be bound by these
            Terms and Conditions. If you disagree with any part of the terms,
            you may not use our service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Description of Service
          </h2>
          <p>
            HabitHero is a habit tracking application that allows users to
            create, monitor, and analyze their personal habits. The service is
            provided &quot;as is&quot; and is designed for personal use.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
          <p>
            HabitHero currently does not require user accounts or
            authentication. All data is stored locally on your device. You are
            responsible for maintaining the confidentiality of your data and for
            all activities that occur on your device.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. User Responsibilities
          </h2>
          <p>
            You are responsible for your use of HabitHero and for any data you
            enter into the application. You agree not to use the service for any
            unlawful purpose or in any way that could damage, disable,
            overburden, or impair our service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Intellectual Property
          </h2>
          <p>
            The HabitHero application, including its original content, features,
            and functionality, is owned by HabitHero and is protected by
            international copyright, trademark, patent, trade secret, and other
            intellectual property or proprietary rights laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall HabitHero, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Disclaimers</h2>
          <p>
            HabitHero is provided on an &quot;AS IS&quot; and &quot;AS
            AVAILABLE&quot; basis. We do not warrant that the service will be
            uninterrupted, timely, secure, or error-free. We make no warranties
            regarding the accuracy, reliability, or completeness of any
            information provided through the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of Republic of South Africa, without regard to its conflict of
            law provisions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will provide notice of any significant
            changes by posting the new Terms on this page. Your continued use of
            the Service after any such changes constitutes your acceptance of
            the new Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            <Link
              href={
                'mailto:dante.danware@gmail.com?subject=HabitHero Terms of Service Inquiry'
              }
            >
              <span> dante.danware@gmail.com</span>
            </Link>
            .
          </p>
        </section>
      </div>
      <Footer className="shadow-md  bg-gradient-to-b from-purple-200  to-purple-100" />
    </div>
  )
}
