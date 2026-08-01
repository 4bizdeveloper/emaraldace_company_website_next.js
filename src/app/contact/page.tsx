import React from 'react';
import Contact from '@/components/Contact'; // Update this path based on your real directory structural hierarchy

// Server level Metadata optimization for search engine & AI scrapers optimization
export const metadata = {
  title: 'Contact Our Technical Experts | Communications Gateway',
  description: 'Connect via our secure technical dispatch engine loops. Reach our regional offices, global sales desks or base coordinates in Abu Dhabi.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Additional UI Hero or breadcrumb blocks go here if needed */}
      <Contact />
    </main>
  );
}