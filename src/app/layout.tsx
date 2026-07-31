import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons'; // [!code ++]
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: 'Emrald Ace | Integrated Facility Management & Electromechanical Services UAE',
  description: 'Since 2014, Emrald Ace delivers premier Integrated Facility Management, MEP Engineering, Interior Fit-Out, and General Contracting services across Abu Dhabi and the UAE. ISO & ICV Certified Contractor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} flex flex-col min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden relative`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Universal Floating Communications Engine Injection */}
        <FloatingActionButtons /> {/* [!code ++] */}
      </body>
    </html>
  );
}