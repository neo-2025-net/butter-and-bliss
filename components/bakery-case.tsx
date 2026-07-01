'use client'

import { CakeCard } from './cake-card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const cakes = [
  {
    name: 'Cheese Pound Cake',
    description: 'Creamy, moist, and buttery. Our signature cake with a delicate crumb and rich cheese flavor that melts on your tongue.',
    image: '/cheese-pound-cake.png',
    price: '₹350',
  },
  {
    name: 'Rava Cake',
    description: 'Semolina-based Indian delight with coconut and cashews. Light, sweet, and perfectly textured for your afternoon tea.',
    image: '/rava-cake.png',
    price: '₹300',
  },
  {
    name: 'Fudge Brownies',
    description: 'Rich, decadent chocolate indulgence. Dense, fudgy, and absolutely irresistible for chocolate lovers.',
    image: '/fudge-brownies.png',
    price: '₹200',
  },
]

export function BakeryCase() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-16 space-y-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest animate-slide-up">
            🍰 Our Bestsellers
          </p>
          <h2 className="font-[var(--font-playfair-display)] text-5xl md:text-6xl font-bold text-foreground text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            The Bakery Case
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Handpicked treats crafted with the finest ingredients and made fresh daily for your tea time moments.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="scroll-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cakes.map((cake, index) => (
            <div
              key={cake.name}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CakeCard
                name={cake.name}
                description={cake.description}
                image={cake.image}
                price={cake.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
