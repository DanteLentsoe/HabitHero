import Link from 'next/link'
import React, { FC } from 'react'
import classNames from 'classnames'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
export type FooterProps = {
  className?: string
}
export const Footer: FC<FooterProps> = ({ className }) => {
  const year = new Date().getFullYear()
  return (
    <footer className={classNames('bg-white text-slate-900 py-8', className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="mb-4 md:mb-0">
            &copy; {year} HabitHero. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            <Link href="/pages/privacypolicy">
              <span className="hover:text-purple-300 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/pages/termsandconditions">
              <span className="hover:text-purple-300 cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.dantelentsoe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 hover:text-purple-300"
          >
            <FaGlobe size={24} />
            <span className="sr-only">Website</span>
          </Link>
          <Link
            href="https://github.com/dantelentsoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 hover:text-purple-300"
          >
            <FaGithub size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="mailto:dante.danware@gmail.com."
            className="text-slate-900 hover:text-purple-300"
          >
            <MdEmail size={24} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
