import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} TIARA — Trusted Information Assistant for Regional Access</p>
        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
          <a href="mailto:hello@tiara.ai" className="hover:text-neutral-900">hello@tiara.ai</a>
        </div>
      </div>
    </footer>
  );
}
