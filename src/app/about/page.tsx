import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { 
  Compass, 
  Layers, 
  ShieldCheck, 
  Award, 
  Building, 
  CheckCircle2, 
  HelpCircle, 
  FileCheck, 
  Wrench, 
  Zap, 
  Users, 
  TrendingUp, 
  ChevronDown,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Emrald Ace | ISO 45001 & UAE Licensed FM Contractor',
  description: 'Emrald Ace is an ISO 45001:2018 and UAE Trade License certified electromechanical and facility management contractor operating across Abu Dhabi and the UAE.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Emrald Ace | ISO 45001 & UAE Licensed FM Contractor',
    description: 'Emrald Ace is an ISO 45001:2018 and UAE Trade License certified electromechanical and facility management contractor operating across Abu Dhabi and the UAE.',
    url: '/about',
    siteName: 'Emrald Ace',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Emrald Ace Corporate Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Emrald Ace | ISO 45001 & UAE Licensed FM Contractor',
    description: 'Emrald Ace is an ISO 45001:2018 and UAE Trade License certified electromechanical and facility management contractor operating across Abu Dhabi and the UAE.',
    images: ['/og-about.jpg'],
  },
};

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': '/#organization',
        'name': 'Emrald Ace General Contracting & Electromechanical L.L.C.',
        'alternateName': 'Emrald Ace',
        'url': '/',
        'logo': {
          '@type': 'ImageObject',
          'url': '/logo.png',
          'caption': 'Emrald Ace Logo'
        },
        'foundingDate': '2014',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Abu Dhabi',
          'addressRegion': 'Abu Dhabi',
          'addressCountry': 'AE'
        },
        'hasCredential': [
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'ISO Certification',
            'name': 'ISO 45001:2018 Occupational Health and Safety Management Systems'
          },
          {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'Trade License',
            'name': 'UAE Commercial Trade License'
          }
        ],
        'description': 'ISO 45001:2018 certified and UAE Trade License accredited engineering and integrated facilities management contractor.',
        'knowsAbout': [
          'Integrated Facility Management',
          'Electromechanical Contracting',
          'Annual Maintenance Contracts',
          'MEP Engineering',
          'Interior Fit-Out',
          'Occupational Health & Safety'
        ],
        'sameAs': [
          'https://www.linkedin.com/company/emrald-ace',
          'https://www.facebook.com/emraldace'
        ]
      },
      {
        '@type': 'Service',
        '@id': '/about/#service',
        'name': 'Integrated Facilities Management and Electromechanical Contracting',
        'provider': {
          '@id': '/#organization'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'United Arab Emirates'
        },
        'serviceType': 'Facilities Management & MEP Services'
      },
      {
        '@type': 'WebPage',
        '@id': '/about/#webpage',
        'url': '/about',
        'name': 'About Emrald Ace | ISO 45001 & UAE Licensed FM Contractor',
        'description': 'Discover Emrald Ace, an ISO 45001:2018 certified facility management contractor in Abu Dhabi delivering MEP engineering, HVAC maintenance, and commercial contracting.',
        'inLanguage': 'en-US',
        'publisher': {
          '@id': '/#organization'
        },
        'breadcrumb': {
          '@id': '/about/#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': '/about/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': '/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'About Us',
            'item': '/about'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': '/about/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is Emrald Ace and what certifications does it hold in the UAE?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Emrald Ace is an Abu Dhabi-based electromechanical and facilities management contractor holding official ISO 45001:2018 Occupational Health & Safety certification and an active UAE Commercial Trade License.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How to choose between IFM, MEP, and AMC services for commercial properties?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Choose IFM for end-to-end building operations, MEP engineering for technical infrastructure installations/retrofits, and AMC for 24/7 emergency response and scheduled preventative maintenance.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why choose an ISO 45001 certified contractor in Abu Dhabi and the UAE?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'An ISO 45001:2018 certified contractor guarantees adherence to international safety standards, full OSHAD regulatory compliance, and reduced operational risk across commercial properties.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What response times does Emrald Ace guarantee under Annual Maintenance Contracts (AMC)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Emrald Ace offers defined Service Level Agreements (SLAs) with rapid 24/7 emergency response teams available across Abu Dhabi and all UAE emirates.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does Emrald Ace handle custom fit-out projects and structural MEP retrofits?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Emrald Ace manages full turnkey interior fit-outs, structural retrofits, and high-capacity HVAC/electrical engineering upgrades for commercial properties.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main 
      aria-label="About Emrald Ace"
      className="pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-slate-950 text-slate-100 selection:bg-[#0B63C5]/30 selection:text-[#0B63C5] overflow-x-hidden transition-colors duration-300"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          <article 
            itemScope 
            itemType="https://schema.org/Organization"
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-1 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#0B63C5]/10 border border-[#0B63C5]/25 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0B63C5] animate-pulse"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-extrabold text-[#38bdf8]">
                Engineering & Facilities Management
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              About <span className="text-[#38bdf8] inline-block">Emrald</span> <span className="text-[#FF6A00] inline-block">Ace</span>
            </h1>

            <p 
              itemProp="description"
              className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl"
            >
              ISO 45001:2018 certified and UAE Trade License approved engineering and integrated facilities management contractor delivering electromechanical, maintenance, and facility solutions across Abu Dhabi and the UAE.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 sm:grid-cols-2">
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">ISO 45001:2018 Certified</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl sm:bg-transparent sm:border-0 sm:p-0">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">UAE Trade Licensed</span>
              </div>
            </div>
          </article>

          <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-2 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[400px] aspect-square flex items-center justify-center p-6 bg-slate-900/70 border border-slate-800/80 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-[#0B63C5]/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B63C5]/10 via-transparent to-[#FF6A00]/10 rounded-3xl pointer-events-none" />
              <Image 
                src="/logo.png" 
                alt="Emrald Ace General Contracting & Electromechanical Logo"
                width={360}
                height={360}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 400px"
                className="w-auto h-auto max-h-[85%] object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] select-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* Executive Overview Section */}
        <section className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-[#38bdf8]" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Company Overview & Key Highlights</h2>
          </div>
          
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200 font-medium pt-2">
            <li className="flex items-start gap-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <Check className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
              <span><strong>Who We Are:</strong> Leading UAE contractor providing Integrated Facilities Management (IFM) & MEP Contracting since 2014.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <Check className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
              <span><strong>Accreditations:</strong> Fully ISO 45001:2018 certified for Occupational Health & Safety with an active UAE Commercial Trade License.</span>
            </li>
            <li className="flex items-start gap-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <Check className="w-4 h-4 text-[#FF6A00] flex-shrink-0 mt-0.5" />
              <span><strong>Core Audience:</strong> Commercial property managers, real estate developers, and UAE public sector infrastructure.</span>
            </li>
          </ul>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-2">
            Established in 2014, <strong>Emrald Ace General Contracting & Electromechanical L.L.C.</strong> delivers commercial and industrial facility management across all seven Emirates in the United Arab Emirates. The company serves property managers, commercial developers, and public sector clients by providing turn-key MEP engineering, preventative HVAC maintenance, annual maintenance contracts (AMCs), and interior fit-outs under strict ISO 45001 safety guidelines.
          </p>
        </section>

        {/* Corporate Metrics Block */}
        <section className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#38bdf8] mb-1">2014</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Established</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#38bdf8] mb-1">Abu Dhabi</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Headquarters</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#38bdf8] mb-1">150+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Skilled Staff Members</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-[#38bdf8] mb-1">150+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">Projects Delivered</div>
          </div>
          <div className="p-4 sm:p-6 text-center bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-sm hover:border-slate-700 transition-colors col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-black text-[#38bdf8] mb-1">100%</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-slate-300">UAE Business Coverage</div>
          </div>
        </section>

        {/* Chairman's Message */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-900/80 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-800/80 shadow-xl">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#0B63C5] shadow-xl ring-2 ring-[#0B63C5]/30">
              <Image 
                src="/nithin-gopinathan-nair.jpeg" 
                alt="Nithin Gopinathan Nair - Chairman of Emrald Ace"
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">Nithin Gopinathan Nair</h3>
              <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-0.5">Chairman Statement Lead</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Chairman's Message: Building Lasting Partnerships Through Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C., where engineering expertise meets operational excellence. Since our establishment, we have built our reputation by delivering reliable facility management, maintenance, and engineering solutions that create long-term value for our clients. Today, our organization has evolved into a trusted provider of Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out, supported by strong MEP Engineering and General Contracting capabilities across the UAE.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              We understand that modern facilities demand more than routine maintenance—they require intelligent planning, technical expertise, proactive management, and a commitment to continuous improvement. Our experienced team works closely with clients to provide customized solutions that improve operational efficiency, extend asset life, and create safe, productive environments.
            </p>
          </div>
        </section>

        {/* Capability Cards Section */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Integrated Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Core Engineering & Facility Services</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Emrald Ace operates three primary divisions to address complete building life cycle requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3 flex flex-col justify-between hover:border-[#0B63C5]/50 transition-colors">
              <div className="space-y-3">
                <div className="p-3 bg-slate-950 rounded-xl w-fit text-[#38bdf8]">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Integrated Facility Management (IFM)</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Total building operations, preventative maintenance, and structural upkeep engineered to lower operational expenditure and extend asset lifespan.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3 flex flex-col justify-between hover:border-[#0B63C5]/50 transition-colors">
              <div className="space-y-3">
                <div className="p-3 bg-slate-950 rounded-xl w-fit text-[#38bdf8]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Electromechanical & MEP Engineering</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Design, installation, and maintenance of HVAC, high-voltage electrical networks, plumbing systems, and civil work for UAE infrastructure.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3 flex flex-col justify-between hover:border-[#0B63C5]/50 transition-colors">
              <div className="space-y-3">
                <div className="p-3 bg-slate-950 rounded-xl w-fit text-[#38bdf8]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Annual Maintenance Contracts (AMC)</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Customized 24/7 commercial emergency response and scheduled maintenance contracts tailored for corporate and public facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Matrix Section */}
        <section className="bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Service Decision Guide</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Choosing the Right Service Model for Your Property</h2>
            <p className="text-sm text-slate-300">Compare our contracting options based on operational scope, best-for use cases, and key benefits.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-white bg-slate-950/60">
                  <th className="p-3 font-extrabold">Service Model</th>
                  <th className="p-3 font-extrabold">Best-For Use Case</th>
                  <th className="p-3 font-extrabold">Primary Audience</th>
                  <th className="p-3 font-extrabold">Key Operational Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-950/40">
                  <td className="p-3 font-bold text-white">Integrated FM (IFM)</td>
                  <td className="p-3">Multi-tenant commercial towers & large facilities</td>
                  <td className="p-3">Property Managers & Asset Owners</td>
                  <td className="p-3 text-[#38bdf8]">Single-point operational accountability</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="p-3 font-bold text-white">MEP Contracting</td>
                  <td className="p-3">New construction, fit-outs & structural retrofits</td>
                  <td className="p-3">General Contractors & Developers</td>
                  <td className="p-3 text-[#38bdf8]">Turn-key engineering compliance</td>
                </tr>
                <tr className="hover:bg-slate-950/40">
                  <td className="p-3 font-bold text-white">Annual Maintenance (AMC)</td>
                  <td className="p-3">Continuous HVAC, electrical & plumbing maintenance</td>
                  <td className="p-3">Retail, Corporate Offices & Warehouses</td>
                  <td className="p-3 text-[#38bdf8]">24/7 emergency SLA & reduced downtime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="bg-slate-900/50 border border-slate-800 p-6 sm:p-10 rounded-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#38bdf8]">Verified Proof & Standards</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">ISO 45001 Certification & UAE Regulatory Standards</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            ISO 45001:2018 sets international benchmarks for occupational health and safety. For clients operating in Abu Dhabi and across the UAE, working with an ISO certified contractor offers distinct regulatory and operational benefits:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
            <li className="flex items-start gap-2.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
              <span><strong>Proactive Risk Elimination:</strong> Systematically reduces workplace accidents and technical hazards during MEP installations.</span>
            </li>
            <li className="flex items-start gap-2.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <TrendingUp className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
              <span><strong>Regulatory Alignment:</strong> Fully compliant with Abu Dhabi OSHAD and UAE Ministry of Human Resources regulations.</span>
            </li>
          </ul>
        </section>

        {/* Vision and Mission Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="p-6 sm:p-8 bg-slate-900/60 border border-[#0B63C5]/20 rounded-3xl space-y-4 hover:border-[#0B63C5]/40 transition-colors">
            <div className="w-12 h-12 bg-[#0B63C5] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#0B63C5]/20">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              To become one of the UAE's most trusted providers of integrated facility management solutions by delivering excellence, innovation, sustainability, and customer satisfaction metrics.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-slate-900/60 border border-[#FF6A00]/20 rounded-3xl space-y-4 hover:border-[#FF6A00]/40 transition-colors">
            <div className="w-12 h-12 bg-[#FF6A00] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#FF6A00]/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              To provide reliable, cost-effective, and innovative facility management solutions that maximize asset performance while creating safe, productive, and sustainable environments through engineering excellence and continuous improvement.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF6A00]">Foundational Standards</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Our Core Corporate Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[#38bdf8] flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">Excellence</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Delivering unmatched quality without technical or operational compromises.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[#38bdf8] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">Safety First</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Proactively protecting personnel, physical properties, and the environment under ISO 45001:2018 guidelines.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800/80 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-[#38bdf8] flex-shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">Sustainability</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Creating enduring structural value through smart resource operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-900/70 border border-slate-800 p-6 sm:p-10 rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#FF6A00]" />
            <h2 className="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-sm sm:text-base">
                What is Emrald Ace and what certifications does it hold in the UAE?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Emrald Ace is an Abu Dhabi-headquartered facilities management and electromechanical contractor holding certified ISO 45001:2018 compliance and an active UAE Commercial Trade License.
              </p>
            </details>

            <details className="group bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-sm sm:text-base">
                How to choose between IFM, MEP, and AMC services for commercial properties?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Select Integrated Facility Management (IFM) for complete operational ownership of multi-tenant properties, MEP engineering for retrofits and new infrastructure installations, and Annual Maintenance Contracts (AMC) for guaranteed 24/7 emergency response and preventative maintenance routines.
              </p>
            </details>

            <details className="group bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-sm sm:text-base">
                Why choose an ISO 45001 certified contractor in Abu Dhabi and the UAE?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                An ISO 45001:2018 certified contractor guarantees compliance with international occupational safety protocols, reduces project liability, aligns with Abu Dhabi OSHAD directives, and safeguards commercial operations.
              </p>
            </details>

            <details className="group bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-sm sm:text-base">
                What response times does Emrald Ace guarantee under Annual Maintenance Contracts (AMC)?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Emrald Ace offers defined Service Level Agreements (SLAs) with rapid 24/7 emergency response teams available across Abu Dhabi and all UAE emirates to minimize equipment downtime.
              </p>
            </details>

            <details className="group bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-sm sm:text-base">
                Does Emrald Ace handle custom fit-out projects and structural MEP retrofits?
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yes, Emrald Ace manages full turnkey interior fit-outs, structural retrofits, and high-capacity HVAC/electrical engineering upgrades for commercial, retail, and corporate spaces.
              </p>
            </details>
          </div>
        </section>

      </div>
    </main>
  );
}