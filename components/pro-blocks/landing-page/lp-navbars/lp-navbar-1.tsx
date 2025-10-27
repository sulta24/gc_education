"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "Менторы", href: "/mentors" },
  { label: "О нас", href: "/about" },
  { label: "Как это работает", href: "/how-it-works" },
  { label: "Сообщество", href: "https://t.me/+h69rkw-RXAM1ZDE6" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => {
  const pathname = usePathname();
  
  return (
    <div className={`flex flex-col gap-1 md:flex-row md:gap-8 ${className ?? ""}`}>
      {MENU_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        
        return (
          <Link key={label} href={href} className="relative">
            <Button 
              variant="ghost" 
              className={`w-full md:w-auto text-white hover:bg-white hover:text-black transition-all duration-200 ${
                isActive ? 'text-white' : 'text-gray-300'
              }`}
            >
              {label}
            </Button>
            {/* Active indicator - underline animation */}
            {isActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full animate-in slide-in-from-bottom-1 duration-300" />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-black sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between md:justify-start">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden text-white hover:bg-gray-800"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </Button>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden w-full flex-row justify-center md:flex">
          <NavMenuItems />
        </div>

        {/* Mobile Navigation Menu - Slide from right, no overlay */}
        <div className={`
          fixed top-0 right-0 h-full w-64 bg-black z-50 shadow-2xl border-l border-gray-700
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <Link href="/" className="shrink-0" onClick={() => setIsMenuOpen(false)}>
                <Logo />
              </Link>
              <Button
                variant="ghost"
                className="flex size-8 items-center justify-center text-white hover:bg-gray-800"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="text-white w-5 h-5" />
              </Button>
            </div>
            
            {/* Menu items */}
            <div className="flex flex-col gap-1 p-4 flex-1">
              {MENU_ITEMS.map(({ label, href }) => {
                const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                
                return (
                  <Link key={label} href={href} onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="ghost" 
                      className={`w-full text-left justify-start hover:bg-white hover:text-black py-3 px-3 rounded-lg transition-all duration-200 ${
                        isActive ? 'text-white bg-gray-800' : 'text-gray-300'
                      }`}
                    >
                      {label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
