import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Wrench, Building2, HardHat, CheckCircle2, 
  ChevronRight, Phone, Mail, Award, ThumbsUp, Sparkles, HelpCircle 
} from 'lucide-react';

export default function Home() {
  const coreServices = [
    { title: "Integrated Facility Management", icon: <Building2 className="w-5 h-5 text-white" />, desc: "Combining engineering maintenance, workplace workflows, and technical operation networks into one single asset lifecycle team strategy." },
    { title: "Annual Maintenance Contracts (AMC)", icon: <Wrench className="w-5 h-5 text-white" />, desc: "Customized preventative upkeep programs mapping out regular diagnostic checks with responsive emergency technical dispatch frameworks." },
    { title: "Interior Fit-Out Solutions", icon: <Sparkles className="w-5 h-5 text-white" />, desc: "Designing functional, modern commercial offices, high-spec glass partition modules, joinery structural units, and false ceilings." },
    { title: "MEP Engineering Services", icon: <Award className="w-5 h-5 text-white" />, desc: "Mechanical HVAC architectures, heavy industrial electrical layouts, plumbing networks, and advanced automated building telemetry systems." },
    { title: "General Contracting & Civil", icon: <HardHat className="w-5 h-5 text-white" />, desc: "Turnkey structural renovations, commercial spatial additions, structural concrete preservation, and institutional execution." },
    { title: "Specialized Infrastructure", icon: <ShieldCheck className="w-5 h-5 text-white" />, desc: "Smart parking gate logic controls, unified CCTV security matrices, clean epoxy chemical flooring protection, and advanced commercial waterproofing." }
  ];

  const clientLogos = [
    { name: "Mubadala", url: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&w=240&q=80" },
    { name: "GEMS Education", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=240&q=80" },
    { name: "Baker Hughes", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=240&q=80" },
    { name: "Hilton", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=240&q=80" }
  ];

  const faqs = [
    { q: "What sectors do your Integrated Facility Management solutions support inside the UAE?", a: "Emrald Ace services commercial enterprise office suites, extensive residential gated communities, healthcare hospital complexes, hospitality environments, high-capacity retail hubs, industrial manufacturing zones, corporate warehouses, and government department facilities across all Emirates." },
    { q: "How are urgent engineering service requests handled under an Annual Maintenance Contract?", a: "We operate a comprehensive 24/7 technical emergency dispatch helpdesk. In the event of critical asset failures (such as main HVAC down or electrical system distribution trips), rapid-response units are deployed instantly to achieve baseline stabilization and prevent expensive operational downtime." },
    { q: "What exact compliance certifications does Emrald Ace operate under within the UAE market?", a: "We maintain official certification under rigorous international ISO quality guidelines, operate with full ICV value-addition optimization validation matrices for strategic procurement pipelines, and carry active official UAE Corporate Contracting Licenses." },
    { q: "Can you manage complex MEP installation frameworks along with custom interior fit-out deployments?", a: "Yes, our inter-disciplinary teams provide smooth, unified project delivery. We handle everything from standard mechanical installations and technical automation matrices to precision structural joinery works, partition frameworks, and false ceiling installations under one accountable point of contact." }
  ];

  return (
    <div className="w-full">
      {/* 1. ULTRA MODERN HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <Image 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=90"
            alt="Emrald Ace Advanced Engineering Site Construction Abu Dhabi"
            fill
            priority
            className="object-cover object-center scale-105 motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2.5 bg-[#0b63c5]/20 border border-[#0b63c5]/40 backdrop-blur-md rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping"></span>
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">ISO Certified | ICV Certified | UAE Licensed Contractor</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-white">
              Engineering Value. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#0b63c5] to-indigo-300">
                Optimizing Assets.
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C. We deliver reliable facility management, maintenance, and robust engineering setups across the UAE footprint since 2014.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services" className="px-8 py-4 bg-[#0b63c5] hover:bg-blue-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 group">
                <span>Explore Enterprise Solutions</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-xl backdrop-blur-xs transition-all text-center">
                Request Engineering Callback
              </Link>
            </div>
          </div>

          {/* Quick Metrics Metric Panel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#0b63c5] rounded-3xl opacity-10 blur-3xl transform rotate-6 scale-95 pointer-events-none"></div>
            <div className="w-full max-w-md mx-auto p-8 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-lg space-y-6 relative border-t-2 border-t-[#0b63c5]">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="font-extrabold text-blue-400 text-xs tracking-widest uppercase block">Operational Statistics</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">Active Coverage</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "2014", label: "Established Market Footprint" },
                  { metric: "22+", label: "Completed Major Infrastructures" },
                  { metric: "2023", label: "FM Division Expansion Year" },
                  { metric: "100%", label: "UAE Regional Fulfillment" }
                ].map((stat, sIdx) => (
                  <div key={sIdx} className="p-4 bg-slate-950/50 rounded-xl border border-slate-850 transform hover:scale-[1.02] transition-transform">
                    <span className="block text-3xl font-black text-white tracking-tight">{stat.metric}</span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight mt-1 block leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE CORE COMPLIANCE BADGES SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-blue-50 text-[#0b63c5] rounded-xl flex items-center justify-center shrink-0 border border-blue-100"><ShieldCheck className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">ISO Quality Management</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">Certified systems driving strict control parameters across technical engineering operations.</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 border border-amber-100"><Award className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">ICV Value certified</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">Validating localized supply network execution loops for strategic corporate integration.</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0"><HardHat className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">UAE Licensed Contractor</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">Fully credentialed and authorized to deploy large-scale civil and electromechanical contracts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE INTRODUCTORY / BRIEF CORPORATE STATEMENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                  alt="Emrald Ace Executive Operations Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0b63c5] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[220px]">
                <ThumbsUp className="w-8 h-8 text-white mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest leading-tight">Operational Reliability Guaranteed</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-widest block">Corporate DNA</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Delivering Integrated Engineering Ecosystems Across The UAE</h2>
              <div className="w-12 h-1 bg-[#0b63c5] rounded-full"></div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Emrald Ace has evolved into a trusted provider of Integrated Facility Management, Annual Maintenance Contracts, and Interior Fit-Out solutions, backed by absolute engineering proficiency. Modern physical plant infrastructures require proactive monitoring methodologies, specialized insight arrays, and direct professional governance metrics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {["Intelligent Operational Planning", "Rigorous Asset Lifetime Preservation", "Transparent SLA Reporting Structures", "Direct Accountability Frameworks"].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0b63c5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center text-sm font-bold text-[#0b63c5] hover:text-blue-700 transition-colors group">
                  <span>Read full corporate overview portfolio</span>
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGH-CONVERTING CORE SOLUTIONS CAPSULE SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-extrabold text-[#0b63c5] uppercase tracking-widest block">Service Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Technical Capability Modules</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Reliable maintenance, specialized engineering, and operational governance execution under one direct roof structure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#0b63c5] group-hover:bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-md transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0b63c5] transition-colors tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#0b63c5]">
                  <span>Analyze Scope Matrix</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center justify-center bg-slate-950 text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0b63c5] transition-all text-sm tracking-wide shadow-md">
              View Extended Capabilities Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SECTOR DIVERSIFICATION FOOTPRINT GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-widest block">Sector Ecosystems</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Diversified Industry Frameworks We Systematically Serve</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                Our active engineering field deployment units are structurally configured to implement continuous preventative, reactive, and asset enhancement operations directly within specialized commercial business verticals throughout the UAE jurisdiction boundaries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Commercial Offices", "Residential Units", "Healthcare Centers", "Luxury Hotels", "Retail Spaces", "Industrial Sites"].map((vertical, vIdx) => (
                  <div key={vIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-150 flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0b63c5]"></span>
                    <span>{vertical}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[240px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80" alt="Commercial Interiors" fill className="object-cover" />
                </div>
                <div className="relative h-[160px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=400&q=80" alt="MEP Plants" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-[160px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="Corporate Facilities" fill className="object-cover" />
                </div>
                <div className="relative h-[240px] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80" alt="Civil Development" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUSTED BLUE-CHIP ENTERPRISE CLIENT MODULE */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest block">Trusted By Industry Leaders</span>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight">Strategic Partners Across the Last 5 Years</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 filter brightness-200 grayscale">
            {clientLogos.map((logo, lIdx) => (
              <div key={lIdx} className="relative w-36 h-14 transition-opacity hover:opacity-100">
                <Image src={logo.url} alt={`${logo.name} Corporate Partnership Footprint`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEO/AEO-OPTIMIZED FAQ GRID COMPONENT WITH JSON-LD STRUCTURED SCHEMA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-extrabold text-[#0b63c5] uppercase tracking-widest block">Knowledge Base</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-[#0b63c5] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0b63c5] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <div className="pl-8 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Injection of AEO Schema Data Structures */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
      </section>
    </div>
  );
}