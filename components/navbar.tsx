"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { LanguageToggle } from './language-toggle';
import { useLanguage } from '@/lib/i18n';
import { translations } from '@/lib/translations'; // Import translations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>(''); // Track active link
  const { direction, language } = useLanguage(); // Get current language and direction

  const navItems = translations[language]?.nav;

  return (
    <nav className="border-b" dir={direction}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8" />
              <span className="font-bold text-xl">SAVVY Labs</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {Object.keys(navItems).map((key) => (
                <Link
                  key={key}
                  href={`/${key.toLowerCase()}`}
                  className={`hover:text-primary transition-colors px-3 py-2 rounded-md ${active === key ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                  onClick={() => setActive(key)} // Set active on click
                >
                  {navItems[key as keyof typeof navItems]}
                </Link>
              ))}
              <ModeToggle />
              <LanguageToggle />
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Object.keys(navItems).map((key) => (
              <Link
                key={key}
                href={`/${key.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-gray-700 hover:text-primary transition-colors ${active === key ? 'bg-blue-600 text-white' : ''}`}
                onClick={() => {
                  setActive(key);
                  setIsOpen(false);
                }}
              >
                {navItems[key as keyof typeof navItems]}
              </Link>
            ))}
            <div className="px-3 py-2 flex space-x-2">
              <ModeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
