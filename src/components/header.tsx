'use client';

import type { MouseEvent } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'Team',
    subLinks: [
      { href: '/team', label: 'Overview' },
      { href: '/team/management', label: 'Management' },
      { href: '/team/software', label: 'Software' },
      { href: '/team/mechanical', label: 'Mechanical' },
      { href: '/team/electrical', label: 'Electrical' },
    ],
  },
  { href: '/competition', label: 'Competition' },
  {
    label: 'AUVs',
    subLinks: [
      { href: '/auvs', label: 'Overview' },
      { href: '/auvs/hydrus', label: 'Hydrus' },
      { href: '/auvs/proteus', label: 'Proteus' },
      { href: '/auvs/coming-soon', label: 'Coming Soon' },
    ],
  },
  {
    label: 'Documentation',
    subLinks: [
      { href: '/documentation/software', label: 'Software' },
      { href: '/documentation/electrical', label: 'Electrical' },
      { href: '/documentation/mechanical', label: 'Mechanical' },
      { href: '/documentation/management', label: 'Management' },
      { href: '/software/docs', label: 'Sphinx Docs' },
    ],
  },
  { href: '/activities', label: 'Activities' },
  { href: '/socials', label: 'Socials' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para abrir el cliente de correo - FIXED
  const handleContactClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault(); // Prevenir comportamiento por defecto
    
    const subject = encodeURIComponent('RUMarino Inquiry');
    const body = encodeURIComponent(
      'Hello RUMarino Team,\n\nI would like to get more information about:\n\n[Your message here]\n\nBest regards,\n[Your Name]'
    );
    
    // Abrir en nueva pestaña
    window.open(`mailto:rumarino.uprm@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-black/95 backdrop-blur-xl border-b border-[#00A68C]/20 shadow-2xl" 
        : "bg-black"
    )}>
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        {/* Logo Section - Solo logo sin texto */}
        <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
          <Logo className="relative h-12 w-24 md:h-14 md:w-28 text-white" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) =>
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "group relative flex items-center gap-1 px-3 py-2 text-sm font-roboto font-medium transition-all duration-300",
                      pathname.startsWith('/' + link.label.toLowerCase()) 
                        ? "text-[#51DFC9]" // Verde para activo
                        : "text-gray-300 hover:text-white" // Gris claro por defecto
                    )}
                  >
                    {/* Hover Underline Effect */}
                    <span className="relative">
                      {link.label}
                      <span className={cn(
                        "absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00A68C] to-[#51DFC9] transition-all duration-300 group-hover:w-full",
                        pathname.startsWith('/' + link.label.toLowerCase()) && "w-full"
                      )}></span>
                    </span>
                    <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="center" 
                  className="bg-black/95 backdrop-blur-xl text-white border-[#00A68C]/30 min-w-[180px] p-2"
                >
                  {link.subLinks.map((subLink) => (
                    <DropdownMenuItem key={subLink.href} asChild className="focus:bg-white/5 focus:text-white">
                      <Link
                        href={subLink.href}
                        className={cn(
                          'group/sub relative flex items-center gap-2 px-3 py-2 text-sm font-roboto font-medium transition-all duration-200 rounded-md',
                          pathname === subLink.href 
                            ? 'text-white bg-gradient-to-r from-[#00A68C]/20 to-[#51DFC9]/20' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        )}
                      >
                        {/* Dot indicator for active */}
                        <div className={cn(
                          "h-1.5 w-1.5 rounded-full transition-all duration-300",
                          pathname === subLink.href 
                            ? "bg-gradient-to-r from-[#00A68C] to-[#51DFC9]" 
                            : "bg-gray-500 group-hover/sub:bg-[#51DFC9]"
                        )}></div>
                        {subLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3 py-2 text-sm font-roboto font-medium transition-all duration-300",
                  pathname === link.href 
                    ? "text-[#51DFC9]" // Verde para activo
                    : "text-gray-300 hover:text-white" // Gris claro por defecto
                )}
              >
                {/* Hover Underline Effect */}
                <span className="relative">
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00A68C] to-[#51DFC9] transition-all duration-300 group-hover:w-full",
                    pathname === link.href && "w-full"
                  )}></span>
                </span>
              </Link>
            )
          )}
        </nav>

        {/* CTA Button - Desktop - FIXED email function */}
        <div className="hidden lg:flex">
          <a 
            href="mailto:rumarino.uprm@gmail.com"
            className="group relative overflow-hidden inline-block"
          >
            <div className="font-roboto font-medium text-sm bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="relative z-10">Contact Us</span>
            </div>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "group relative text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300",
                  isOpen && "text-[#51DFC9]"
                )}
              >
                <div className="relative w-6 h-6">
                  {isOpen ? (
                    <X className="h-6 w-6 transition-all duration-300" />
                  ) : (
                    <Menu className="h-6 w-6 transition-all duration-300" />
                  )}
                </div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[85vw] sm:w-[350px] bg-black/95 backdrop-blur-xl text-white border-l border-[#00A68C]/20"
            >
              {/* Header with Logo - Fixed text style */}
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-3">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <Logo className="h-12 w-24 text-white" />
                    <div className="flex flex-col">
                      <SheetTitle className="sr-only">RUMarino Navigation</SheetTitle>
                      <span className="font-anton text-xl tracking-wide bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                        RUMARINO
                      </span>
                    </div>
                  </Link>
                </div>
              </SheetHeader>

              {/* Navigation Links - Fixed colors */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.subLinks ? (
                    <Collapsible key={link.label} className="group/collapse">
                      <CollapsibleTrigger className="w-full">
                        <div className={cn(
                          "flex items-center justify-between px-3 py-3 text-base font-roboto font-medium rounded-lg transition-all duration-300",
                          pathname.startsWith('/' + link.label.toLowerCase())
                            ? "bg-gradient-to-r from-[#00A68C]/20 to-[#51DFC9]/20 text-[#51DFC9]"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}>
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "h-1.5 w-1.5 rounded-full transition-all duration-300",
                              pathname.startsWith('/' + link.label.toLowerCase())
                                ? "bg-gradient-to-r from-[#00A68C] to-[#51DFC9]"
                                : "bg-gray-500 group-hover/collapse:bg-[#51DFC9]"
                            )}></div>
                            {link.label}
                          </div>
                          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]/collapse:rotate-180" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-6 mt-1 flex flex-col gap-1 overflow-hidden">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'flex items-center gap-2 px-3 py-2 text-sm font-roboto font-medium rounded-lg transition-all duration-300',
                              pathname === subLink.href
                                ? 'text-white bg-gradient-to-r from-[#00A68C]/20 to-[#51DFC9]/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            )}
                          >
                            <div className={cn(
                              "h-1.5 w-1.5 rounded-full transition-all duration-300",
                              pathname === subLink.href
                                ? "bg-gradient-to-r from-[#00A68C] to-[#51DFC9]"
                                : "bg-gray-500 group-hover:bg-[#51DFC9]"
                            )}></div>
                            {subLink.label}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center gap-2 px-3 py-3 text-base font-roboto font-medium rounded-lg transition-all duration-300',
                        pathname === link.href
                          ? 'text-[#51DFC9] bg-gradient-to-r from-[#00A68C]/20 to-[#51DFC9]/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <div className={cn(
                        "h-1.5 w-1.5 rounded-full transition-all duration-300",
                        pathname === link.href
                          ? "bg-gradient-to-r from-[#00A68C] to-[#51DFC9]"
                          : "bg-gray-500 group-hover:bg-[#51DFC9]"
                      )}></div>
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile CTA Button - FIXED email function */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <Button 
                  onClick={(e) => {
                    handleContactClick(e);
                    setIsOpen(false);
                  }}
                  className="w-full group"
                >
                  <div className="font-roboto font-medium bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Contact Us</span>
                  </div>
                </Button>
                
                {/* Email display */}
                <div className="mt-3 text-center">
                  <a 
                    href="mailto:rumarino.uprm@gmail.com" 
                    className="text-[#51DFC9] text-sm font-roboto font-medium hover:text-[#00A68C] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleContactClick(e);
                      setIsOpen(false);
                    }}
                  >
                    rumarino.uprm@gmail.com
                  </a>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400 font-roboto">
                  University of Puerto Rico, Mayagüez
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
