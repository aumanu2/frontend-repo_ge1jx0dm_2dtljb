import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-neutral-900" />
          <span className="font-semibold tracking-tight">TIARA</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-3 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">Get Started</a>
      </div>
    </header>
  );
}
