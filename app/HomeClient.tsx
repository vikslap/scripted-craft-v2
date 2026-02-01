// app/HomeClient.tsx
"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

// --- Preloader Component ---
const Preloader = () => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#2F3640]">
    <div className="flex gap-4">
      <div className="w-4 h-4 bg-[#00A8FF] animate-bounce rounded-sm"></div>
      <div className="w-4 h-4 bg-[#E1B12C] animate-bounce rounded-sm [animation-delay:200ms]"></div>
      <div className="w-4 h-4 bg-[#F5F6FA] animate-bounce rounded-sm [animation-delay:400ms]"></div>
    </div>
  </div>
);

// --- Static Project Data ---
const tabData = {
  "Rise 360 Courses": [
    { title: "Counterfeit Detection", desc: "Interactive training on global currency security features.", link: "#" },
    { title: "Corporate Compliance", desc: "Modern, mobile-responsive compliance modules for remote teams.", link: "#" },
    { title: "Employee Onboarding", desc: "Automated welcome journeys built for high-growth startups.", link: "#" },
    { title: "Safety Protocol", desc: "Interactive workplace safety guidelines and assessments.", link: "#" }
  ],
  "Storyline 360 Courses": [
    { title: "Software Simulation", desc: "High-fidelity CRM walkthroughs with guided practice modes.", link: "#" },
    { title: "Leadership Branching", desc: "Complex scenario-based training for mid-level managers.", link: "#" },
    { title: "Sales Gamification", desc: "Competitive assessment modules for retail environments.", link: "#" }
  ],
  "Explainer Videos": [
    { title: "Process Visualization", desc: "Simplifying intricate supply chain logistics through motion.", link: "#" },
    { title: "Product Showcase", desc: "2D animated feature highlights for technical software.", link: "#" },
    { title: "Data Storytelling", desc: "Converting annual financial reports into engaging narratives.", link: "#" }
  ]
};

export default function HomeClient({ initialNotes }: { initialNotes: any[] }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Rise 360 Courses");
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
    }
  }, [isLoading, activeTab]);

  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (isLoading) return <Preloader />;

  return (
    <main className="bg-[#F5F6FA] text-[#2F3640] min-h-screen selection:bg-[#E1B12C]/30 scroll-smooth">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="h-[90vh] flex flex-col justify-center px-6 bg-[#2F3640] relative overflow-hidden pt-20">
        <div className="max-w-6xl mx-auto w-full z-10">
          <h1 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 leading-tight text-[#F5F6FA] font-sans">
            Scripted<span className="font-serif text-[#E1B12C] italic">Craft</span><span className="text-[#00A8FF]">.</span>
          </h1>
          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-2xl font-light text-[#F5F6FA]/80 leading-relaxed font-sans">
              Elevating Instructional Design through 
              <span className="text-[#00A8FF] font-medium text-nowrap"> technical precision </span> 
              and <span className="text-[#E1B12C] font-medium text-nowrap"> creative excellence</span>.
            </p>
          </div>
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00A8FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* 2. PROFILE BIO (UPDATED) */}
      <section className="py-24 px-6 bg-white border-b border-[#2F3640]/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <h2 className="text-[#00A8FF] font-mono text-sm uppercase tracking-[0.3em] mb-12">The Designer</h2>

          {/* Circular Profile Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-10 rounded-full overflow-hidden border-[3px] border-[#E1B12C] shadow-2xl shadow-[#E1B12C]/20 group">
            <Image 
              src="/Vik_Profile.png" 
              alt="ScriptedCraft Lead E-Learning Developer"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* Bio Text as Quote - Scaled to match Hero Section */}
          <div className="max-w-3xl relative">
            <p className="text-lg md:text-2xl font-serif italic font-light text-[#2F3640] leading-relaxed">
              <span className="text-[#E1B12C] text-3xl mr-2">“</span>
              Hi, I'm Vik. I started ScriptedCraft to take the heavy lifting off busy training teams. I focus on understanding your specific goals and delivering custom solutions that slot seamlessly into your workflow.
              <span className="text-[#E1B12C] text-3xl ml-2">”</span>
            </p>
          </div>

        </div>
      </section>

      {/* 3. FEATURED WORK */}
      <section id="works" className="py-24 px-6 max-w-6xl mx-auto font-sans relative">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#2F3640]/40 mb-12">Featured Work</h2>
        
        <div className="flex border-b border-[#2F3640]/10 mb-12 gap-4 md:gap-8 overflow-x-auto scrollbar-hide justify-between md:justify-start pb-2">
          {Object.keys(tabData).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[13px] md:text-lg font-medium transition-all pb-4 relative whitespace-nowrap ${activeTab === tab ? "text-[#2F3640]" : "text-[#2F3640]/40 hover:text-[#2F3640]"}`}>
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E1B12C] rounded-full animate-in fade-in" />}
            </button>
          ))}
        </div>

        <div className="relative group/carousel">
          {showLeftArrow && (
            <button onClick={() => scrollManual('left')} className="absolute left-2 top-[35%] -translate-y-1/2 z-30 bg-[#2F3640] text-[#E1B12C] w-10 h-10 rounded-full flex items-center justify-center shadow-2xl border border-[#E1B12C]/40 hover:scale-110 transition-all animate-pulse">←</button>
          )}
          {showRightArrow && (
            <button onClick={() => scrollManual('right')} className="absolute right-2 top-[35%] -translate-y-1/2 z-30 bg-[#2F3640] text-[#E1B12C] w-10 h-10 rounded-full flex items-center justify-center shadow-2xl border border-[#E1B12C]/40 hover:scale-110 transition-all animate-pulse">→</button>
          )}
          <div ref={scrollRef} onScroll={checkScroll} className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 scroll-smooth">
            {tabData[activeTab as keyof typeof tabData].map((item, index) => (
              <div key={index} className="min-w-[85%] md:min-w-[calc(33.333%-22px)] snap-center md:snap-start group cursor-pointer">
                <div className="aspect-[4/3] bg-[#2F3640] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center shadow-lg">
                   <span className="text-[#F5F6FA]/10 font-serif italic text-[10px] tracking-[0.3em] uppercase">Preview</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2F3640] mb-2 font-serif italic">{item.title}</h3>
                <p className="text-[#2F3640]/60 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
                <a href={item.link} className="text-[#00A8FF] font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-[#E1B12C] transition-colors flex items-center gap-2">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOTES SECTION */}
      <section id="notes" className="py-24 px-6 bg-[#2F3640] text-[#F5F6FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-serif italic text-[#E1B12C]">Notes</h2>
              <p className="text-[#00A8FF] font-mono text-xs uppercase tracking-widest mt-2">Latest Insights</p>
            </div>
            <a href="/notes" className="text-sm font-sans border-b border-[#E1B12C]/30 pb-1 hover:text-[#E1B12C] transition-all flex items-center gap-2 group">
              Explore full repository <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          
          <div className="divide-y divide-white/10">
            {initialNotes.map((note) => (
              <article key={note.id} className="py-10 group cursor-pointer">
                <a href={`/notes/${note.id}`} className="flex justify-between items-center w-full">
                  <div>
                    <span className="text-[#00A8FF] font-mono text-[10px] uppercase tracking-widest">
                      {note.category} • {note.date}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-sans group-hover:text-[#E1B12C] transition-colors text-white mt-2">
                      {note.title}
                    </h3>
                  </div>
                  <div className="text-[#E1B12C] text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#F5F6FA] text-center text-[#2F3640]/30 font-mono text-[10px] uppercase tracking-[0.5em]">
        © 2026 ScriptedCraft • Built with Next.js
      </footer>
    </main>
  );
}