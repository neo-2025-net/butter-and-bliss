'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Add animated blobs using CSS
    const blobStyle = document.createElement('style')
    blobStyle.innerHTML = `
      @keyframes blob1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(30px, -40px) scale(1.1); }
        50% { transform: translate(-20px, 30px) scale(0.95); }
        75% { transform: translate(40px, 20px) scale(1.05); }
      }
      
      @keyframes blob2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(-30px, 40px) scale(0.95); }
        50% { transform: translate(20px, -30px) scale(1.1); }
        75% { transform: translate(-40px, -20px) scale(1.05); }
      }
      
      @keyframes float-up {
        0% {
          transform: translateY(100vh) translateX(var(--tx)) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        90% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-100vh) translateX(calc(var(--tx) * 2)) rotate(360deg);
          opacity: 0;
        }
      }

      .blob {
        position: absolute;
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        filter: blur(40px);
        opacity: 0.1;
        pointer-events: none;
      }

      .blob-1 {
        width: 300px;
        height: 300px;
        background: #C47447;
        top: -100px;
        left: 10%;
        animation: blob1 8s ease-in-out infinite;
      }

      .blob-2 {
        width: 400px;
        height: 400px;
        background: #8A9A5B;
        top: 50%;
        right: 10%;
        animation: blob2 10s ease-in-out infinite;
      }
    `
    document.head.appendChild(blobStyle)

    // Create animated blobs
    const blob1 = document.createElement('div')
    blob1.className = 'blob blob-1'
    container.appendChild(blob1)

    const blob2 = document.createElement('div')
    blob2.className = 'blob blob-2'
    container.appendChild(blob2)

    // Create floating elements with staggered animations
    const elements = [
      { char: '🧈', duration: 8, delay: 0, xOffset: 10 },
      { char: '✨', duration: 10, delay: 1.5, xOffset: -10 },
      { char: '🍰', duration: 12, delay: 2.5, xOffset: 15 },
      { char: '☕', duration: 9, delay: 1, xOffset: -12 },
      { char: '✨', duration: 11, delay: 3, xOffset: 8 },
      { char: '🧈', duration: 13, delay: 0.5, xOffset: -15 },
      { char: '🍰', duration: 10, delay: 2, xOffset: 12 },
      { char: '☕', duration: 14, delay: 3.5, xOffset: -8 },
    ]

    const floatingElements: HTMLElement[] = []

    elements.forEach((el, index) => {
      const div = document.createElement('div')
      div.innerHTML = el.char
      div.style.position = 'absolute'
      div.style.fontSize = '2.5rem'
      div.style.opacity = '0.15'
      div.style.pointerEvents = 'none'
      div.style.fontWeight = 'bold'
      div.style.setProperty('--tx', `${el.xOffset}px`)
      div.style.animation = `float-up ${el.duration}s ease-in-out ${el.delay}s infinite`

      const randomLeft = Math.random() * 100
      div.style.left = randomLeft + '%'
      div.style.bottom = '-50px'

      container.appendChild(div)
      floatingElements.push(div)
    })

    return () => {
      floatingElements.forEach((el) => {
        if (container.contains(el)) {
          container.removeChild(el)
        }
      })
      if (container.contains(blob1)) {
        container.removeChild(blob1)
      }
      if (container.contains(blob2)) {
        container.removeChild(blob2)
      }
      if (document.head.contains(blobStyle)) {
        document.head.removeChild(blobStyle)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(196, 116, 71, 0.04) 0%, transparent 50%)',
      }}
    />
  )
}
