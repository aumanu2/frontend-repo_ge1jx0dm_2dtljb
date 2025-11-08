import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = inputRef.current?.value?.trim();
    if (!val) return;
    alert(`TIARA heard: ${val}`);
    inputRef.current.value = '';
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              TIARA
              <span className="block text-lg sm:text-xl font-medium text-neutral-600 mt-3">Trusted Information Assistant for Regional Access</span>
            </h1>

            <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
              Your regional intelligence companion. Ask anything about places, policies, and services around you — TIARA answers with trusted, localized insights.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask TIARA anything..."
                className="flex-1 h-12 rounded-md border border-neutral-300 bg-white px-4 text-base outline-none ring-0 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200"
              />
              <button
                type="submit"
                className="h-12 px-5 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
              >
                Chat
              </button>
            </form>

            <div className="mt-4 text-sm text-neutral-500">Try: "What are today’s services available at the local center?"</div>
          </div>

          <div className="h-[420px] sm:h-[520px] lg:h-[640px] order-1 lg:order-2 relative">
            <div className="absolute inset-0 rounded-2xl shadow-xl bg-white/60 border border-neutral-200 overflow-hidden">
              <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
