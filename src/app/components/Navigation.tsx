'use client';

import { useState } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#historia', label: 'História' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#estatisticas', label: 'Estatísticas' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav className="bg-white text-unifacisa-primary shadow-lg fixed w-full top-0 z-50 border-b border-unifacisa-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="medium" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-unifacisa-primary hover:text-unifacisa-secondary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-unifacisa-primary hover:bg-unifacisa-secondary text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
              Inscreva-se
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-unifacisa-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-unifacisa-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-unifacisa-primary hover:text-unifacisa-secondary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-unifacisa-primary hover:bg-unifacisa-secondary text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 w-full">
                Inscreva-se
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
