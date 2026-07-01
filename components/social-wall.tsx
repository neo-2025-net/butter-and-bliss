'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const instagramPosts = [
  {
    id: 1,
    image: '/cheese-pound-cake.png',
    caption: 'Golden perfection! Our signature cheese pound cake fresh from the oven. ✨',
    likes: 234,
  },
  {
    id: 2,
    image: '/rava-cake.png',
    caption: 'Semolina magic! Rava cake that brings back memories of home. 🏡',
    likes: 189,
  },
  {
    id: 3,
    image: '/fudge-brownies.png',
    caption: 'Chocolate heaven in every bite. Our fudgy brownies are pure indulgence. 🍫',
    likes: 312,
  },
  {
    id: 4,
    image: '/hero-cake.png',
    caption: 'Tea time essentials: Cheese pound cake + Earl Grey. Pure bliss! ☕',
    likes: 456,
  },
  {
    id: 5,
    image: '/cheese-pound-cake.png',
    caption: 'Handcrafted with love. Every bite tells a story of warmth and care. 💕',
    likes: 267,
  },
  {
    id: 6,
    image: '/rava-cake.png',
    caption: 'Sweet tradition meets modern flavors. Taste the difference! 👌',
    likes: 198,
  },
  {
    id: 7,
    image: '/fudge-brownies.png',
    caption: 'Friday calls for chocolate! Treat yourself to our fudge brownies today.',
    likes: 334,
  },
  {
    id: 8,
    image: '/hero-cake.png',
    caption: 'Fresh from the oven, straight to your heart. Order your favorites now! 🎂',
    likes: 401,
  },
  {
    id: 9,
    image: '/cheese-pound-cake.png',
    caption: 'Taste the craftsmanship. Quality ingredients, timeless recipes. 🌟',
    likes: 278,
  },
]

interface PostHoverState {
  [key: number]: boolean
}

export function SocialWall() {
  const [hoveredPost, setHoveredPost] = useState<PostHoverState>({})
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-16 space-y-4">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest animate-slide-up">
            📸 Fresh from the Oven
          </p>
          <h2 className="font-[var(--font-playfair-display)] text-5xl md:text-6xl font-bold text-foreground text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Our Instagram Wall
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Follow @butterandbliss for daily updates, behind-the-scenes, and special offers!
          </p>
        </div>

        {/* 3x3 Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-card border-2 border-border cursor-pointer transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              onMouseEnter={() => setHoveredPost((prev) => ({ ...prev, [post.id]: true }))}
              onMouseLeave={() => setHoveredPost((prev) => ({ ...prev, [post.id]: false }))}
            >
              {/* Image */}
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300"
                style={{
                  opacity: hoveredPost[post.id] ? 1 : 0,
                }}
              />

              {/* Caption and Likes - visible on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-300"
                style={{
                  opacity: hoveredPost[post.id] ? 1 : 0,
                  transform: hoveredPost[post.id]
                    ? 'translateY(0)'
                    : 'translateY(20px)',
                }}
              >
                <div />
                <div className="space-y-3">
                  <p className="text-white text-sm leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-2 text-pink-300">
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
