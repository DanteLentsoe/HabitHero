'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { smoothScroll } from '@/app/utils/smoothScroll'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        event.target instanceof Node &&
        !navRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const NavLinks = () => (
    <>
      {pathname === '/' && (
        <>
          <span
            onClick={() => smoothScroll('#features')}
            className="block py-2 text-purple-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            Features
          </span>

          <span
            onClick={() => smoothScroll('#about')}
            className="block py-2 text-purple-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            About
          </span>
          <span
            onClick={() => smoothScroll('#contact')}
            className="block py-2 text-purple-800 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            Contact
          </span>
        </>
      )}
    </>
  )

  return (
    <nav
      ref={navRef}
      className="shadow-md  bg-gradient-to-b from-purple-200  to-purple-100"
    >
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <Link href={'/'}>
              <span className="text-2xl font-bold text-purple-800">
                HabitHero
              </span>
            </Link>
          </div>

          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-purple-800 focus:outline-none transition-transform duration-200 ease-in-out transform hover:scale-110"
            >
              <>
                {pathname === '/' && (
                  <>{isOpen ? <X size={24} /> : <Menu size={24} />}</>
                )}
              </>
            </button>
          ) : (
            <div className="hidden md:flex space-x-4">
              <NavLinks />
            </div>
          )}
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 py-3 space-y-1">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}
