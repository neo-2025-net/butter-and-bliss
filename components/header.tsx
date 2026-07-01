'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check if dark mode is already set
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  const whatsappLink = 'https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20from%20Butter%20%26%20Bliss'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-background shadow-md border-b border-border'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between md:justify-center relative">
        {/* Logo - Left on desktop, hidden on mobile */}
        <a href="#" className="hidden md:flex items-center gap-3 group absolute left-4 lg:left-8">
          <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative">
            <Image
              src="/logo.svg"
              alt="Butter & Bliss"
              width={100}
              height={100}
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Center - Name and Tagline */}
        <div className="flex flex-col items-center justify-center flex-1 md:flex-none md:flex-1">
          <a href="#" className="md:hidden mb-2">
            <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 hover:scale-110 relative">
              <Image
                src="/logo.svg"
                alt="Butter & Bliss"
                width={100}
                height={100}
                priority
                className="object-contain"
              />
            </div>
          </a>
          <h1 className="font-[var(--font-playfair-display)] text-2xl md:text-3xl font-bold text-foreground text-center">
            Butter & Bliss
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            Artisanal Tea Time Cakes
          </p>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 md:gap-4 absolute right-4 lg:right-8 md:absolute md:right-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-muted transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Order Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1 md:gap-2 bg-primary text-primary-foreground px-3 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg active:scale-95 animate-pulse-subtle whitespace-nowrap"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.657.725 5.25 2.093 7.545L3.6 21.5l8.041-2.11c2.212 1.204 4.7 1.84 7.256 1.84 5.376 0 9.797-4.32 9.798-9.797 0-2.618-.674-5.074-1.955-7.263-.005-.004-.003-.01-.008-.013-1.28-2.187-3.12-4.065-5.36-5.252a9.87 9.87 0 00-7.867-1.204z" />
            </svg>
            <span className="hidden sm:inline">Order</span>
          </a>
        </div>
      </div>
    </header>
  )
}
