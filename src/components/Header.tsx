"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xs border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-primary mr-3"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 4l8 4v12l-8 4-8-4V10l8-4z" />
              <circle cx="16" cy="16" r="4" />
            </svg>
            <span className="font-headline text-xl font-bold text-secondary">
              Sapadigi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#produk"
              className="text-text-secondary hover:text-primary transition-standard"
            >
              Produk
            </a>
            <a
              href="#tools"
              className="text-text-secondary hover:text-primary transition-standard"
            >
              SapaTools
            </a>
            <a
              href="#tentang"
              className="text-text-secondary hover:text-primary transition-standard"
            >
              Tentang
            </a>
            <a
              href="#testimoni"
              className="text-text-secondary hover:text-primary transition-standard"
            >
              Testimoni
            </a>
            {status === "authenticated" ? (
              <span className="text-text-secondary">{session.user?.email}</span>
            ) : (
              <Link href="/api/auth/signin" className="btn-primary">
                Coba Gratis
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <a
            href="#produk"
            className="block py-2 text-text-secondary hover:text-primary"
          >
            Produk
          </a>
          <a
            href="#tools"
            className="block py-2 text-text-secondary hover:text-primary"
          >
            SapaTools
          </a>
          <a
            href="#tentang"
            className="block py-2 text-text-secondary hover:text-primary"
          >
            Tentang
          </a>
          <a
            href="#testimoni"
            className="block py-2 text-text-secondary hover:text-primary"
          >
            Testimoni
          </a>
          {status === "authenticated" ? (
            <span className="block w-full text-left py-2 text-text-secondary">
              {session.user?.email}
            </span>
          ) : (
            <Link
              href="/api/auth/signin"
              className="w-full btn-primary mt-2"
            >
              Coba Gratis
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
