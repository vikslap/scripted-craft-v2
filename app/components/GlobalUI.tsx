"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalUI() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const pathname = usePathname();

  const allNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Featured Works', href: '/#works' },
    { name: 'Notes', href: '/#notes' },
  ];

  const navLinks = pathname === '/' 
    ? allNavLinks 
    : allNavLinks.filter(link => link.name === 'Home');

  /**
   * UPDATED SCROLL HANDLER:
   * Now handles both Hash links (#works) AND the Home link (/)
   */
  const handleScroll = (e: React.MouseEvent, href: string) => {
    // Case 1: Hash Links (e.g. /#works)
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } 
    // Case 2: Home Link (Scroll to Top)
    // If we are clicking 'Home' and we are ALREADY on the home page, just scroll up.
    else if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
    // Case 3: Normal Navigation (e.g. navigating from /notes back to /)
    else {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-4xl">
        <div className="bg-[#2F3640]/80 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo - Force scroll to top */}
          <Link 
             href="/" 
             className="text-xl font-bold tracking-tighter text-[#F5F6FA] font-sans"
             onClick={(e) => handleScroll(e, '/')}
          >
            S<span className="text-[#E1B12C] font-serif italic">C</span><span className="text-[#00A8FF]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs uppercase tracking-widest text-[#F5F6FA]/70 hover:text-[#E1B12C] transition-colors font-mono cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#F5F6FA]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#2F3640] rounded-[2rem] p-8 md:hidden shadow-2xl border border-white/5 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)} 
                  className="text-2xl font-serif italic text-[#E1B12C] border-b border-white/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Contact Button & Modal (Unchanged) --- */}
      <button onClick={() => setIsFormOpen(true)} className="fixed bottom-8 right-8 bg-[#E1B12C] text-[#2F3640] px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 transition-all z-50 font-bold font-sans group">
        <span>Let's Collaborate</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#2F3640]/90 backdrop-blur-sm">
          <div className="bg-[#F5F6FA] w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 relative animate-in zoom-in duration-300 shadow-2xl text-[#2F3640]">
            <button onClick={() => setIsFormOpen(false)} className="absolute top-8 right-8 text-[#2F3640]/40 hover:text-[#2F3640]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="text-4xl font-serif italic mb-2">Inquiry</h2>
            <form action="https://formspree.io/f/mgoyqjjn" method="POST" className="space-y-4 mt-8">
              <input name="name" required type="text" className="w-full bg-white border border-[#2F3640]/5 rounded-xl px-4 py-3 font-sans" placeholder="Full Name" />
              <input name="email" required type="email" className="w-full bg-white border border-[#2F3640]/5 rounded-xl px-4 py-3 font-sans" placeholder="Work Email" />
              <textarea name="message" required rows={4} className="w-full bg-white border border-[#2F3640]/5 rounded-xl px-4 py-3 resize-none font-sans" placeholder="Project Scope"></textarea>
              <button type="submit" className="w-full bg-[#2F3640] text-[#F5F6FA] py-4 rounded-xl font-bold font-sans shadow-lg hover:bg-[#00A8FF] transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}