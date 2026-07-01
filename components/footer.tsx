'use client'

import Image from 'next/image'

export function Footer() {
  const whatsappLink = 'https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20from%20Butter%20%26%20Bliss'

  return (
    <footer className="w-full bg-muted/30 border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Butter & Bliss"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-[var(--font-playfair-display)] text-xl font-bold text-foreground">
                  Butter & Bliss
                </h3>
                <p className="text-xs text-muted-foreground">Artisanal Tea Time Cakes</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Handcrafted with love. Every cake is baked fresh daily using premium ingredients.
            </p>
          </div>

          {/* Mobile Center - Logo and Text (Centered) */}
          <div className="md:hidden col-span-1 text-center space-y-4">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Butter & Bliss"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-[var(--font-playfair-display)] text-xl font-bold text-foreground">
                  Butter & Bliss
                </h3>
                <p className="text-xs text-muted-foreground">Artisanal Tea Time Cakes</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Handcrafted with love. Every cake is baked fresh daily using premium ingredients.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:text-left text-center md:text-left">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@butterandbliss.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  support@butterandbliss.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
            </ul>
          </div>

          {/* Follow & Order */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://instagram.com/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all hover:border-pink-500"
                title="Instagram"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all hover:border-green-500"
                title="WhatsApp"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.657.725 5.25 2.093 7.545L3.6 21.5l8.041-2.11c2.212 1.204 4.7 1.84 7.256 1.84 5.376 0 9.797-4.32 9.798-9.797 0-2.618-.674-5.074-1.955-7.263-.005-.004-.003-.01-.008-.013-1.28-2.187-3.12-4.065-5.36-5.252a9.87 9.87 0 00-7.867-1.204z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:border-blue-600"
                title="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-border text-center">
          <p className="text-muted-foreground mb-3">Ready to order?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.657.725 5.25 2.093 7.545L3.6 21.5l8.041-2.1c2.212 1.204 4.7 1.84 7.256 1.84 5.376 0 9.797-4.32 9.798-9.797 0-2.618-.674-5.074-1.955-7.263a9.87 9.87 0 00-7.867-1.204z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center md:items-center gap-4 text-sm text-muted-foreground md:text-left text-center">
          <p className="md:text-left text-center w-full md:w-auto">
            Copyright 2026 Butter & Bliss. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
