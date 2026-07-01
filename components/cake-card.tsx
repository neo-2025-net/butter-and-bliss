'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface CakeCardProps {
  name: string
  description: string
  image: string
  price: string
}

export function CakeCard({ name, description, image, price }: CakeCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [hoverImage, setHoverImage] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (centerX - e.clientX) / 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)

    // Image reveal - show image following cursor
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setHoverImage(image)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
    setHoverImage(null)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 rounded-3xl bg-card border-2 border-border overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.05 : 1})`,
        transition: isHovered ? 'none' : 'transform 0.3s ease-out',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 z-10">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="font-[var(--font-playfair-display)] text-3xl font-bold text-foreground mb-2">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/30">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20from%20Butter%20%26%20Bliss"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:scale-110 active:scale-95 inline-block"
          >
            Order
          </a>
        </div>
      </div>

      {/* Image Reveal on Hover */}
      {hoverImage && isHovered && (
        <div
          className="absolute w-40 h-40 pointer-events-none z-50"
          style={{
            left: `${mousePos.x - 80}px`,
            top: `${mousePos.y - 80}px`,
            transition: 'none',
          }}
        >
          <Image
            src={hoverImage}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        </div>
      )}
    </div>
  )
}
