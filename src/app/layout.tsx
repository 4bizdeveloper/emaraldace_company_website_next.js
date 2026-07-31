import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: 'Emrald Ace | Integrated Facility Management & Electromechanical Services UAE',
  description: 'Since 2014, Emrald Ace delivers high-performance Integrated Facility Management, MEP Engineering, Interior Fit-Out, and General Contracting services across Abu Dhabi and the UAE.',
  keywords: ['Facility Management Abu Dhabi', 'MEP Engineering UAE', 'General Contracting', 'Interior Fit-Out', 'Annual Maintenance Contracts UAE', 'Emrald Ace'],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}