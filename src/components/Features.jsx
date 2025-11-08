import React from 'react';
import { Shield, MapPin, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Answers',
    desc: 'Grounded in verified sources and local data so you can rely on every response.'
  },
  {
    icon: MapPin,
    title: 'Regional Focus',
    desc: 'Understands locality, services, and policies unique to your region.'
  },
  {
    icon: Clock,
    title: 'Up-to-date',
    desc: 'Continuously refreshed knowledge to keep pace with changes on the ground.'
  },
  {
    icon: Sparkles,
    title: 'Natural & Helpful',
    desc: 'Conversations that feel human, with clear steps and helpful links.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-center">Why choose TIARA?</h2>
        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto text-center">
          Built for trustworthy, local-first information access.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
