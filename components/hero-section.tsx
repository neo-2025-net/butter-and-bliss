'use client'

import Image from 'next/image'
import { DraggableSticker } from './draggable-sticker'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove as any)
    return () => window.removeEventListener('mousemove', handleMouseMove as any)
  }, [])

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-4 bg-background overflow-hidden flex items-center justify-center">
      {/* Animated background elements - Enhanced animations */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
        style={{
          animation: 'float-parallax 12s ease-in-out infinite, pulse-glow 4s ease-in-out infinite 0.5s',
        }}
      />
      <div
        className="absolute bottom-20 left-5 w-80 h-80 bg-secondary/8 rounded-full blur-3xl"
        style={{
          animation: 'float-parallax 15s ease-in-out infinite reverse, pulse-glow 5s ease-in-out infinite 1s',
        }}
      />
      
      {/* Additional animated background shapes for visual interest */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{
          animation: 'float-parallax 20s ease-in-out infinite 1s',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/6 rounded-full blur-3xl"
        style={{
          animation: 'float-parallax 18s ease-in-out infinite reverse 2s',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-slide-in-left">
          <div className="space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest animate-slide-up" style={{ animationDelay: '0.1s' }}>
              ✨ Freshly Baked Daily
            </p>
            
            {/* Animated heading with enhanced text animation */}
            <h2 className="font-[var(--font-playfair-display)] text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Elevate Your Tea Time
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Handcrafted artisanal cakes that bring warmth and joy to every afternoon. Indulge in premium flavors made with love.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20from%20Butter%20%26%20Bliss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl active:scale-95 hover:scale-105 group animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <span>Start Ordering</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Hero Image with Draggable Stickers */}
        <div className="relative h-80 md:h-96 lg:h-[500px] animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-full h-full animate-hero-float">
            <Image
              src="https://images.pexels.com/photos/10148398/pexels-photo-10148398.jpeg"
              alt="Butter & Bliss - Tea time cakes"
              fill
              className="object-cover rounded-3xl shadow-2xl"
              // priority
              // unoptimized
              // style={{ position: 'relative' }}

            />
          </div>

          {/* Draggable Stickers */}
          <div className="absolute inset-0 pointer-events-none">
            <DraggableSticker initialX={20} initialY={30}>
              <div className="pointer-events-auto bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <svg
                  className="w-10 h-10 text-amber-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            </DraggableSticker>

            <DraggableSticker initialX={120} initialY={-20}>
              <div className="pointer-events-auto bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <svg
                  className="w-10 h-10 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </DraggableSticker>

            <DraggableSticker initialX={60} initialY={200}>
              <div className="pointer-events-auto bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow font-semibold text-sm">
                Freshly Baked!
              </div>
            </DraggableSticker>
          </div>
        </div>
      </div>
    </section>
  )
}
