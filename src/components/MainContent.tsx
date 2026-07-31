import React from 'react';
import { ShieldCheck, Layers, Cpu, Award, Users, HardHat, CheckCircle, Wrench, Building } from 'lucide-react';

export default function MainContent() {
  const coreServices = [
    { title: "Integrated Facility Management", desc: "Combining engineering maintenance, workplace services, and technical operations under one seamless solution." },
    { title: "Annual Maintenance Contracts (AMC)", desc: "Scheduled inspections, preventative programs, and 24/7 reactive service emergency support structures." },
    { title: "Interior Fit-Out Solutions", desc: "Modern, dynamic office designs, false ceilings, partitions, and custom structural woodwork joinery configurations." },
    { title: "MEP Engineering Services", desc: "Mechanical systems (HVAC), complex electrical asset installations, water grids, and life safety frameworks." },
    { title: "General Contracting", desc: "Comprehensive structural civil construction configurations, foundational concrete adaptations, and dynamic updates." },
    { title: "Specialized Solutions", desc: "Smart automation access integrations, dynamic parking networks, epoxy architectural flooring, and waterproofing." }
  ];

  const valueProps = [
    "Integrated Hard & Soft FM Solutions", "Experienced Engineering Professionals", 
    "Preventive Maintenance Programs", "Fast Emergency Response Network", 
    "Advanced Facility Management Technologies", "Safety-Driven Standard Operations",
    "Sustainable Practices Implementation", "Single Point of Complete Accountability"
  ];

  const featuredProjects = [
    { name: "Renovation, Extension & Fit-Out", loc: "Shakhbout City, Abu Dhabi", client: "Al Maharat Private School / GEMS Education" },
    { name: "Outlet Renovation - MEP, Fit-Out & HVAC", loc: "Marina Mall, Abu Dhabi", client: "National Investment Corporation" },
    { name: "Civil, MEP & Fit-Out Infrastructure", loc: "Khalifa City, Abu Dhabi", client: "Abu Dhabi Cricket & Sports Club" },
    { name: "Restaurant & Pool Deck Renovation", loc: "Mubadala Tower, Abu Dhabi", client: "Solution Plus Mubadala" },
    { name: "MEP, HVAC & Civil Works - Private Villa", loc: "Al Manhal, Abu Dhabi", client: "Al Nasser Properties" },
    { name: "Boiler Installation, HVAC Systems & Civil", loc: "Dubai Investment Park", client: "Fedorowicz Laundry" }
  ];

  return (
    <main className="flex-grow">
      {/* Dynamic Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-blue-700 text-xs font-bold tracking-wide uppercase">
              <Award className="w-3.5 h-3.5 text-orange-600" />
              <span>Engineered Excellence Since 2014</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Building Lasting Partnerships Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-950">Excellence</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
              Welcome to Emrald Ace General Contracting & Electromechanical L.L.C. We deliver technical operational excellence, smart proactive facility solutions, and high-performance asset management lifecycle execution across the UAE market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="#services" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-blue-700/20 text-center text-sm tracking-wide">
                Explore Core Businesses
              </a>
              <a href="#contact" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 text-center text-sm tracking-wide">
                Contact Technical Experts
              </a>
            </div>
          </div>
          
          {/* Conceptual Corporate Graphic Display Section Block */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl opacity-10 blur-3xl transform -rotate-6 scale-95 pointer-events-none"></div>
            <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-2xl shadow-xl space-y-6 relative z-10 will-change-transform">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="font-extrabold text-blue-900 text-sm tracking-wider uppercase">Overview At A Glance</span>
                <span className="text-xs bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded">Abu Dhabi, UAE</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-black text-blue-700">2014</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Established Year</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-black text-blue-700">22+</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Projects Delivered</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-black text-blue-700">2023</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">FM Division Expansion</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-2xl font-black text-blue-700">100%</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">UAE Coverage Matrix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy Section Block */}
      <section id="about" className="py-20 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-orange-600">Organizational Core</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Vision, Mission & Strategic Execution</p>
            <div className="w-12 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Shared Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  To emerge as one of the UAE's most trusted providers of integrated facility management solutions by systematically delivering structural engineering excellence, ongoing technological innovation, rigorous environmental sustainability compliance, and total customer validation metrics.
                </p>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Dedicated Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  To provide highly reliable, optimized cost-effective, and fully innovative facility management frameworks that maximize overall asset operational longevity while engineering safe, highly productive, and scalable corporate micro-environments through ongoing professional technical updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* core Businesses Distribution Layout Grid */}
      <section id="services" className="py-20 bg-slate-50/50 border-y border-slate-100 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-700">Operational Focus</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Core Business Capabilities</p>
            <p className="text-sm text-slate-500 font-medium">Reliable maintenance, skilled engineering, and dependable service – under one roof.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <div key={index} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-700 rounded-xl flex items-center justify-center text-blue-700 group-hover:text-white transition-colors duration-300">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">{service.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions and Capability Pillars */}
      <section id="why-choose-us" className="py-20 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-widest font-extrabold text-orange-600">Market Advantage</h2>
                <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Delivering Value Beyond Routine Maintenance</p>
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                At Emrald Ace, we believe facility management transcends simple asset checks. It requires strategic orchestration to engineer operational systems where businesses operate efficiently, people feel comfortable, and assets deliver maximum investment lifecycle viability.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {valueProps.map((prop, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs font-semibold text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-8 rounded-2xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold tracking-tight border-b border-blue-800 pb-4">Standard Operational Values</h3>
              <div className="space-y-4">
                {[
                  { title: "Excellence Focus", text: "Delivering institutional operational quality without technical compromise across all sectors." },
                  { title: "Technical Innovation", text: "Applying smart monitoring applications, modern asset trackers, and responsive solutions." },
                  { title: "Absolute Safety-Driven", text: "Protecting site resources, corporate structural components, and ecosystem variables continuously." }
                ].map((val, vIdx) => (
                  <div key={vIdx} className="space-y-1">
                    <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">{val.title}</h4>
                    <p className="text-xs text-blue-200 leading-relaxed">{val.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Data Layout: Featured Projects Matrix Section */}
      <section id="projects" className="py-20 bg-slate-50 border-t border-slate-100 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-700">Track Record</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Featured Enterprise Projects</p>
            <div className="w-12 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-semibold tracking-wider text-[11px] uppercase border-b border-slate-800">
                  <th className="p-4">Project Infrastructure Scope</th>
                  <th className="p-4">Geographic Location</th>
                  <th className="p-4">Enterprise Client Matrix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {featuredProjects.map((project, pIdx) => (
                  <tr key={pIdx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{project.name}</td>
                    <td className="p-4 text-slate-500">{project.loc}</td>
                    <td className="p-4 text-blue-800 font-semibold">{project.client}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conversion Engagement Capture Node Section (Contact Info) */}
      <section id="contact" className="py-20 bg-white scroll-mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Let's Build Better Environments Together</h2>
            <p className="text-sm text-slate-500 font-medium max-w-xl mx-auto">
              Connect with our corporate technical advisors to construct an optimized, customized preventative asset lifecycle maintenance protocol mapped exactly to your facility demands.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <div className="w-full sm:w-auto p-4 border border-slate-100 bg-slate-50 rounded-xl flex items-center space-x-3 text-left">
              <div className="w-10 h-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-lg"><Phone className="w-5 h-5" /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Call Regional Office</span>
                <a href="tel:+971528976025" className="text-sm font-extrabold text-slate-900 hover:text-blue-700">+971 52 897 6025</a>
              </div>
            </div>
            <div className="w-full sm:w-auto p-4 border border-slate-100 bg-slate-50 rounded-xl flex items-center space-x-3 text-left">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg"><Mail className="w-5 h-5" /></div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Email Global Sales</span>
                <a href="mailto:sales1@emraldace.com" className="text-sm font-extrabold text-slate-900 hover:text-blue-700">sales1@emraldace.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}