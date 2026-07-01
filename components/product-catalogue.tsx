'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Cheese Pound Cake',
    image: '/cheese-pound-cake.png',
    description: 'Creamy and moist cheese pound cake with a buttery crust',
  },
  {
    id: 2,
    name: 'Rava Cake',
    image: '/rava-cake.png',
    description: 'Traditional semolina cake with coconut and cashews',
  },
  {
    id: 3,
    name: 'Fudge Brownies',
    image: '/fudge-brownies.png',
    description: 'Rich, fudgy chocolate brownies with a gooey center',
  },
  {
    id: 4,
    name: 'Carrot Cake',
    image: '/hero-cake.png',
    description: 'Moist carrot cake with cream cheese frosting',
  },
  {
    id: 5,
    name: 'Chocolate Truffle',
    image: '/fudge-brownies.png',
    description: 'Decadent chocolate truffle cake for chocolate lovers',
  },
]

export function ProductCatalogue() {
  const [selectedProductId, setSelectedProductId] = useState<number>(1)
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null)

  const selectedProduct = products.find((p) => p.id === selectedProductId)
  
  const toggleMobileExpand = (productId: number) => {
    setExpandedProductId(expandedProductId === productId ? null : productId)
    if (expandedProductId !== productId) {
      setSelectedProductId(productId)
    }
  }

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 scroll-reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest animate-slide-up">
            Our Collection
          </p>
          <h2 className="font-[var(--font-playfair-display)] text-5xl md:text-6xl font-bold text-foreground text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Cake Selection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Browse our delicious selection of artisanal cakes, each crafted with premium ingredients and love.
          </p>
        </div>

        {/* Product Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {/* Left - Product List (Desktop) or Expandable List (Mobile) */}
          <div className="md:col-span-1">
            {/* Desktop List */}
            <div className="hidden md:flex flex-col gap-3">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`text-left p-4 rounded-lg transition-all duration-300 animate-scale-in ${
                    selectedProductId === product.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card border-2 border-border text-foreground hover:border-primary hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm opacity-75">{product.description}</p>
                </button>
              ))}
            </div>

            {/* Mobile Expandable List */}
            <div className="md:hidden flex flex-col gap-2">
              {products.map((product, index) => (
                <div key={product.id} className="flex flex-col">
                  <button
                    onClick={() => toggleMobileExpand(product.id)}
                    className={`text-left p-4 rounded-t-lg transition-all duration-300 font-semibold text-lg flex items-center justify-between ${
                      expandedProductId === product.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border-2 border-border text-foreground'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span>{product.name}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedProductId === product.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  
                  {/* Expandable content */}
                  {expandedProductId === product.id && (
                    <div className="bg-card border-2 border-t-0 border-primary rounded-b-lg overflow-hidden animate-scale-in">
                      <div className="p-4 space-y-4">
                        {/* Product Image */}
                        <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm">{product.description}</p>
                          
                          {/* Features */}
                          <div className="grid grid-cols-2 gap-2 py-2">
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground font-semibold">Fresh Baked</p>
                              <p className="text-foreground text-sm">Made daily</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-muted-foreground font-semibold">Premium</p>
                              <p className="text-foreground text-sm">High quality</p>
                            </div>
                          </div>

                          {/* Order Button */}
                          <a
                            href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20from%20Butter%20%26%20Bliss"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 w-full justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 mt-2"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.657.725 5.25 2.093 7.545L3.6 21.5l8.041-2.11c2.212 1.204 4.7 1.84 7.256 1.84 5.376 0 9.797-4.32 9.798-9.797 0-2.618-.674-5.074-1.955-7.263-.005-.004-.003-.01-.008-.013-1.28-2.187-3.12-4.065-5.36-5.252a9.87 9.87 0 00-7.867-1.204z" />
                            </svg>
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Center/Right - Product Image and Details */}
          <div className="md:col-span-2">
            {selectedProduct && (
              <div className="space-y-6 animate-scale-in">
                {/* Product Image */}
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-[var(--font-playfair-display)] text-4xl md:text-5xl font-bold text-foreground">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-muted-foreground text-lg mt-2">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-semibold">Fresh Baked</p>
                      <p className="text-foreground">Made daily</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-semibold">Premium</p>
                      <p className="text-foreground">High quality</p>
                    </div>
                  </div>

                  {/* Order Button */}
                  <a
                    href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20from%20Butter%20%26%20Bliss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full md:w-auto justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.657.725 5.25 2.093 7.545L3.6 21.5l8.041-2.11c2.212 1.204 4.7 1.84 7.256 1.84 5.376 0 9.797-4.32 9.798-9.797 0-2.618-.674-5.074-1.955-7.263-.005-.004-.003-.01-.008-.013-1.28-2.187-3.12-4.065-5.36-5.252a9.87 9.87 0 00-7.867-1.204z" />
                    </svg>
                    Order Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
