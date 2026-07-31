import React from 'react';
import { 
  Building, 
  Wrench, 
  Paintbrush, 
  Cpu, 
  HardHat, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function Services() {
  const serviceBlocks = [
    {
      id: "ifm",
      title: "Integrated Facility Management",
      tagline: "Smarter Facilities. Better Performance.",
      icon: <Building className="w-6 h-6 text-white" />,
      bg: "from-[#0B63C5] to-[#084B96]",
      accentColor: "text-[#0B63C5]",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      desc: "Our integrated model brings every essential service together under one accountable team, giving clients a single point of contact, faster response times, and measurable long-term value.",
      subCategories: [
        { 
          name: "Hard Facility Management", 
          items: [
            "Mechanical Systems (HVAC, chillers, pumps, AHUs, FCUs)", 
            "Electrical Systems (LV/MV, switchgear, UPS, generators)", 
            "Plumbing & Water Systems", 
            "HVAC Preventive Maintenance & Energy Efficiency", 
            "Civil & Building Fabric Maintenance (masonry, painting, waterproofing)", 
            "Fire & Life Safety Systems (alarms, suppression, testing)", 
            "Building Management Systems / BMS Monitoring & Automation"
          ] 
        },
        { 
          name: "Soft Facility Management", 
          items: [
            "Housekeeping & Commercial Deep Cleaning", 
            "High-Rise Glass & Façade Cleaning", 
            "Landscaping & Grounds Maintenance", 
            "Sustainable Waste Management & Recycling", 
            "Pest Management & Control", 
            "Concierge, Reception & Porter Services",
            "Indoor Plant Care & Decorative Landscaping"
          ] 
        },
        { 
          name: "Specialized Facility Management", 
          items: [
            "Energy Audits & Optimization Management", 
            "Asset Lifecycle & Condition Management", 
            "Smart FM (CAFM, IoT Integration, Automation)", 
            "24/7 Central Helpdesk & Emergency Response",
            "EHS (Environment, Health & Safety) Audits",
            "Disaster Recovery & Risk Mitigation Planning",
            "Vendor & Subcontractor Quality Assurance"
          ] 
        }
      ]
    },
    {
      id: "amc",
      title: "Annual Maintenance Contracts (AMC)",
      tagline: "Protecting Your Assets Every Day.",
      icon: <Wrench className="w-6 h-6 text-white" />,
      bg: "from-[#FF6A00] to-[#E05D00]",
      accentColor: "text-[#FF6A00]",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      desc: "We tailor every AMC to the specific needs of residential, commercial, or industrial facilities, combining planned servicing with rapid-response support.",
      subCategories: [
        { 
          name: "What's Included", 
          items: [
            "Scheduled Preventive Maintenance Plans", 
            "Corrective & Rapid Emergency Repairs", 
            "Routine Equipment Audits & Inspections", 
            "24/7 Dedicated Rapid Emergency Support", 
            "Spare Parts Sourcing & Logistics", 
            "Detailed Monthly Performance Reporting", 
            "Dedicated On-Site Engineering Team", 
            "Full Compliance & Regulatory Safety Audits"
          ] 
        },
        { 
          name: "Key Client Benefits", 
          items: [
            "Significantly Reduced Operational Downtime", 
            "Lower Long-Term Asset Maintenance Costs", 
            "Extended Life Expectancy of Capital Assets", 
            "Predictable Annual Operational Budgeting", 
            "Guaranteed Response Times with Strict SLAs", 
            "Single Point of Operational Accountability",
            "Improved Energy & Utility Cost Efficiency",
            "Complete Risk Assessment & Hazard Prevention"
          ] 
        },
        { 
          name: "Customization & Scope", 
          items: [
            "Comprehensive All-Inclusive Coverage Plans", 
            "Non-Comprehensive Labor-Only Contracts", 
            "Custom SLAs Tailored for Critical Assets", 
            "Multi-Site Portfolio Aggregation Discounts", 
            "Real-time Digital Maintenance Tracking Portal",
            "Seasonal Systems Preparedness Inspections",
            "Dedicated Account Manager & Technical Support",
            "Tailored Payment & Lifecycle Schedules"
          ] 
        }
      ]
    },
    {
      id: "interior",
      title: "Interior Fit-Out Solutions",
      tagline: "Creating Inspiring & Functional Workspaces.",
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      bg: "from-slate-900 to-slate-800",
      accentColor: "text-slate-900",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      desc: "We design and deliver modern, aesthetically pleasing interior environments tailored to business and residential specifications across the UAE.",
      subCategories: [
        { 
          name: "Commercial & Retail Fit-Out", 
          items: [
            "Corporate Office Space Planning & Fit-Out", 
            "Retail Outlets & Showroom Interior Fit-Outs", 
            "Commercial Building Interior Renovations", 
            "High-End Residential Interiors & Upgrades", 
            "Turnkey Project Design & Delivery Services",
            "Space Optimization & Ergonomic Layouts"
          ] 
        },
        { 
          name: "Architectural & Joinery Works", 
          items: [
            "Custom Partitions & False Ceiling Systems", 
            "Flooring Solutions (Epoxy, Vinyl, Carpet, Tile)", 
            "Professional Wall Painting & Decorative Finishes", 
            "Bespoke Wood Joinery & Carpentry Works", 
            "Decorative Architectural Metal & Glass Features",
            "Custom Acoustic Wall Panelling & Treatments"
          ] 
        },
        { 
          name: "Glazing & Aluminum Systems", 
          items: [
            "Glass Partitions & Acoustic Frameless Walls", 
            "Aluminum Door & Window Fabrication", 
            "Custom Glass Fixtures & Shopfronts", 
            "Acoustic Ceiling Panels & Thermal Insulation",
            "Automated Sliding & Sensor Glass Entrances",
            "Fire-Rated Glass & Barrier Systems"
          ] 
        }
      ]
    },
    {
      id: "mep",
      title: "MEP Engineering Services",
      tagline: "Integrated Mechanical, Electrical & Plumbing Excellence.",
      icon: <Cpu className="w-6 h-6 text-white" />,
      bg: "from-[#0B63C5] to-[#084B96]",
      accentColor: "text-[#0B63C5]",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      desc: "Comprehensive engineering execution providing sustainable, high-efficiency MEP design, installation, and lifecycle support.",
      subCategories: [
        { 
          name: "Mechanical & HVAC Systems", 
          items: [
            "Complete HVAC System Architecture Design", 
            "Heavy Chiller, AHU & FCU Installations", 
            "Industrial Ducting & Air Distribution Networks", 
            "Ventilation & Exhaust Extraction Systems",
            "Indoor Air Quality (IAQ) Testing & Filtration",
            "Precision Cooling for Server Rooms & Data Hubs"
          ] 
        },
        { 
          name: "Electrical & LV Systems", 
          items: [
            "High & Low Voltage Electrical Installations", 
            "Switchgear & Power Distribution Networks", 
            "ELV Systems & Building Automation Integration", 
            "Energy-Efficient Commercial Lighting Systems",
            "Emergency Generator & UPS Backup Installation",
            "Lightning Protection & Grounding Networks"
          ] 
        },
        { 
          name: "Plumbing, Fire & Commissioning", 
          items: [
            "Plumbing, Drainage & Water Supply Networks", 
            "Fire Fighting & Automatic Sprinkler Systems", 
            "Fire Alarm Systems & Emergency Life Safety", 
            "Full Lifecycle Testing, Balancing & Commissioning",
            "Water Treatment, Filtration & Purification Systems",
            "Central Heating & Hot Water Plant Services"
          ] 
        }
      ]
    },
    {
      id: "civil",
      title: "General Contracting & Specialized Civil",
      tagline: "Comprehensive Civil Construction & Smart Automation Solutions.",
      icon: <HardHat className="w-6 h-6 text-white" />,
      bg: "from-[#FF6A00] to-[#E05D00]",
      accentColor: "text-[#FF6A00]",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
      desc: "Robust construction, structural restoration, and outdoor automation services designed for modern commercial and residential infrastructure.",
      subCategories: [
        { 
          name: "Civil & Extension Focus", 
          items: [
            "Civil Construction & Structural Repairs", 
            "Facility Extensions & Major Structural Modifications", 
            "General Building Development & Refurbishment", 
            "Architectural Planning & Design Delivery Support",
            "Foundation Reinforcement & Concrete Restoration"
          ] 
        },
        { 
          name: "Smart Access & Automation", 
          items: [
            "Automated Parking Access Control Systems", 
            "Remote Control Gates & Barrier Solutions", 
            "High-Definition CCTV & Integrated Security Systems", 
            "Smart Building IoT & Access Management",
            "Biometric Access & Visitor Management Systems"
          ] 
        },
        { 
          name: "Specialized Outdoor & Surface Works", 
          items: [
            "Waterproofing & Structural Leak Remediation", 
            "Industrial Epoxy & Protective Floor Coatings", 
            "Artificial Turf Installation & Commercial Landscaping", 
            "Hardscaping & Exterior Site Upgrades", 
            "Interlocking Paving & Boundary Wall Finishes"
          ] 
        }
      ]
    }
  ];

  const industries = [
    "Commercial Offices", "Residential Communities", "Healthcare", 
    "Hotels & Hospitality", "Retail Centers", "Industrial Facilities", 
    "Government Entities", "Warehouses", "Education Institutions"
  ];

  // SEO Schema Integration
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": serviceBlocks.map((block, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": block.title,
        "description": block.desc
      }
    }))
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden font-sans" id="services">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs uppercase tracking-widest font-black text-[#0B63C5] bg-blue-50/80 rounded-full border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" /> Our Service Matrix
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Integrated Engineering & Facility Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Reliable maintenance, skilled engineering, and dependable service – unified under one accountable provider.
          </p>
        </header>

        {/* Services List */}
        <div className="space-y-12">
          {serviceBlocks.map((block) => (
            <article 
              key={block.id} 
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className={`p-8 lg:p-10 bg-gradient-to-r ${block.bg} text-white lg:col-span-7 flex flex-col justify-center space-y-4 relative overflow-hidden`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner shrink-0">
                      {block.icon}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-wider text-white/80">{block.tagline}</span>
                      <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">{block.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-slate-100 opacity-95 font-normal leading-relaxed">
                    {block.desc}
                  </p>
                </div>

                {/* Service Header Image */}
                <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden bg-slate-200">
                  <img 
                    src={block.image} 
                    alt={block.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:hidden" />
                </div>
              </div>

              {/* Grid of Subcategories - Fixed Equal Column Heights */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {block.subCategories.map((sub, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex flex-col justify-between h-full space-y-4 bg-slate-50/70 p-5 sm:p-6 rounded-2xl border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                            {sub.name}
                          </h3>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0B63C5]" />
                        </div>
                        <ul className="space-y-2.5">
                          {sub.items.map((item, iIdx) => (
                            <li key={iIdx} className="text-xs font-medium text-slate-600 flex items-start gap-2.5 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#0B63C5] shrink-0 mt-0.5" />
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Small Bottom Accent Badge */}
                      <div className="pt-3 border-t border-slate-200/40 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        <span>Professional SLA</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0B63C5]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Target Industries */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-8 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6A00]">Sector Coverage</span>
            <h2 className="text-2xl sm:text-4xl font-black">Industries We Serve Across UAE</h2>
            <p className="text-xs sm:text-sm text-slate-400">Tailored maintenance and contracting capabilities adapted for diverse operational requirements.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((ind, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-xs sm:text-sm font-semibold rounded-xl text-slate-200 transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Call To Action Banner */}
        <div className="bg-gradient-to-r from-[#0B63C5] to-[#084B96] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Need a Customized Service or AMC Proposal?</h3>
            <p className="text-xs sm:text-sm text-blue-100">Schedule a consultation with our Abu Dhabi engineering team today.</p>
          </div>
          <a 
            href="tel:+971528976025" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B63C5] font-extrabold rounded-2xl hover:bg-blue-50 transition-colors shrink-0 text-sm shadow-md"
          >
            <PhoneCall className="w-4 h-4" /> Connect With Us
          </a>
        </div>

      </div>
    </section>
  );
}