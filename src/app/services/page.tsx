import React from 'react';
import { Wrench, ShieldCheck, Building, Paintbrush, Cpu, HardHat, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const serviceBlocks = [
    {
      title: "Integrated Facility Management",
      icon: <Building className="w-6 h-6 text-white" />,
      bg: "bg-[#0B63C5]",
      desc: "Smarter Facilities. Better Performance. Our integrated model brings every essential service together under one accountable team, giving clients a single point of contact, faster response times, and measurable long-term value.",
      subCategories: [
        { name: "Hard Facility Management", items: ["Mechanical Systems (HVAC equipment, chillers, pumps, AHUs, FCUs)", "Electrical Systems (LV/MV systems, switchgear, UPS, generators, lighting)", "Plumbing & Water Systems", "HVAC Services (preventive maintenance, air quality, energy efficiency)", "Civil & Building Fabric Maintenance (masonry, painting, waterproofing, façade)", "Fire & Life Safety Systems (alarms, suppression, compliance testing)", "Building Management Systems/BMS (monitoring, automation, energy optimization)"] },
        { name: "Soft Facility Management", items: ["Housekeeping & Commercial Cleaning", "Glass & Façade Cleaning", "Landscaping & Grounds Maintenance", "Waste Management", "Pest Management", "Concierge, Reception & Porter Services"] },
        { name: "Specialized Facility Management", items: ["Energy Management", "Asset Management", "Smart FM (CAFM, IoT, Building Automation)", "24/7 Helpdesk & Emergency Response"] }
      ]
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      icon: <Wrench className="w-6 h-6 text-white" />,
      bg: "bg-[#FF6A00]",
      desc: "Protecting Your Assets Every Day. We tailor every AMC to the specific needs of the facility, whether residential, commercial, or industrial, combining planned servicing with rapid-response support.",
      subCategories: [
        { name: "What's Included", items: ["Scheduled Preventive Maintenance", "Corrective & Emergency Maintenance", "Routine Equipment Inspections", "24/7 Emergency Support", "Spare Parts Coordination", "Monthly Performance Reporting", "Dedicated Service Team", "Compliance & Safety Checks"] },
        { name: "Key Benefits", items: ["Reduced Downtime", "Lower Long-Term Maintenance Costs", "Extended Equipment Life", "Predictable Annual Budgeting", "Faster Response Times", "Single Point of Accountability"] }
      ]
    },
    {
      title: "Interior Fit-Out Solutions",
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      bg: "bg-slate-900",
      desc: "Creating Inspiring Interior Spaces. We design and deliver functional, modern, and aesthetically pleasing interior environments tailored to business and residential requirements.",
      subCategories: [
        { name: "Our Core Fit-Out Capabilities", items: ["Office Fit-Out & Retail Fit-out", "Commercial & Residential Interiors", "Partitions & False Ceilings", "Flooring, Painting & Joinery", "Carpentry, Glass & Aluminium Works"] }
      ]
    },
    {
      title: "MEP Engineering Services",
      icon: <Cpu className="w-6 h-6 text-white" />,
      bg: "bg-[#0B63C5]",
      desc: "Integrated Mechanical, Electrical & Plumbing Solutions.",
      subCategories: [
        { name: "Engineering Capabilities", items: ["Electrical Installation & Mechanical Works", "HVAC System Architecture", "Plumbing & Drainage Networks", "Fire Fighting & Fire Alarm Systems", "ELV Systems & Building Automation", "Testing & Commissioning Lifecycle"] }
      ]
    },
    {
      title: "General Contracting & Specialized Civil",
      icon: <HardHat className="w-6 h-6 text-white" />,
      bg: "bg-[#FF6A00]",
      desc: "Comprehensive Civil Construction, Renovation & Building Solutions.",
      subCategories: [
        { name: "Civil & Extension Focus", items: ["Civil Construction & Structural Repairs", "Extensions & Renovations", "General Building Development", "Planning & Design Delivery Support"] },
        { name: "Smart Access & Automation", items: ["Parking Access Control & Automatic Gates", "Remote Control Gates & CCTV Systems", "Artificial Turf Installation & Landscaping", "Waterproofing, Epoxy Flooring & Smart Building Solutions"] }
      ]
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h1 className="text-xs uppercase tracking-widest font-extrabold text-[#0B63C5]">Service Matrix</h1>
          <p className="text-4xl font-black text-slate-900 tracking-tight">Core Business Offerings</p>
          <p className="text-sm text-slate-500 font-medium">Reliable maintenance, skilled engineering, and dependable service – under one roof.</p>
        </div>

        <div className="space-y-16">
          {serviceBlocks.map((block, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`p-6 sm:p-8 ${block.bg} text-white space-y-2`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-white/10 rounded-xl">{block.icon}</div>
                  <h2 className="text-2xl font-black tracking-tight">{block.title}</h2>
                </div>
                <p className="text-sm text-slate-100 max-w-4xl opacity-90 font-medium pt-2">{block.desc}</p>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {block.subCategories.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                      {sub.name}
                    </h3>
                    <ul className="space-y-2.5">
                      {sub.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs font-semibold text-slate-600 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#0B63C5] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}