"use client";

import React, { useState } from 'react';

export default function Home() {
  // State to handle the Contact Popup
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className={`${isFormOpen ? 'overflow-hidden' : ''} bg-[#F5F6FA] text-[#2F3640] min-h-screen selection:bg-[#E1B12C]/30 scroll-smooth`}>
      
      {/* 1. HERO SECTION - Obsidian Background */}
      <section className="h-[90vh] flex flex-col justify-center px-6 bg-[#2F3640] relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full z-10">
          
          <h1 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 leading-tight whitespace-nowrap">
            <span className="font-sans text-[#F5F6FA]">Scripted</span>
            <span className="font-serif text-[#E1B12C] italic">Craft</span>
            <span className="text-[#00A8FF]">.</span>
          </h1>

          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-2xl font-light text-[#F5F6FA]/80 leading-relaxed font-sans">
              Elevating Instructional Design through 
              <span className="text-[#00A8FF] font-medium text-nowrap"> technical precision </span> 
              and <span className="text-[#E1B12C] font-medium text-nowrap"> creative excellence</span>.
            </p>
            
            <div className="flex gap-6 pt-4">
              <div className="h-[1px] w-12 bg-[#E1B12C] self-center"></div>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#F5F6FA]/50 font-sans">
                Instructional Design • E-Learning Development • 2026
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Accents */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00A8FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#E1B12C]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* 2. PROFILE BIO */}
      <section className="py-24 px-6 bg-white border-b border-[#2F3640]/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-[#00A8FF] font-mono text-sm uppercase tracking-[0.3em]">The Designer</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-sans text-[#2F3640]/90">
              I am a remote Instructional Designer specializing in technical training. 
              By combining adult learning principles with modern development, I build 
              educational tools that are as functional as they are beautiful.
            </p>
          </div>
          <div className="aspect-square md:aspect-video bg-[#F5F6FA] rounded-3xl border border-[#2F3640]/5 flex items-center justify-center p-12 text-center group hover:border-[#00A8FF]/30 transition-all duration-500 shadow-sm">
             <span className="text-[#2F3640]/40 italic font-serif text-xl group-hover:text-[#2F3640] transition-colors">
               Architecting Learning Workflows
             </span>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#2F3640]/40 mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#2F3640] text-white p-10 rounded-[2.5rem] h-[400px] flex flex-col justify-end group cursor-pointer overflow-hidden relative shadow-lg">
            <div className="z-10">
              <h3 className="text-[#E1B12C] font-serif italic text-3xl mb-2">Rise 360 Ecosystems</h3>
              <p className="opacity-70 font-sans max-w-sm">Custom-coded interactive components for high-stakes corporate training.</p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </div>
          <div className="bg-[#00A8FF] text-white p-10 rounded-[2.5rem] h-[400px] flex flex-col justify-end hover:shadow-xl transition-shadow">
            <h3 className="font-sans font-bold text-3xl mb-2">Visual Storytelling</h3>
            <p className="opacity-90 font-sans">Explainer animations that simplify complex technical documentation.</p>
          </div>
        </div>
      </section>

      {/* 4. NOTES SECTION */}
      <section className="py-24 px-6 bg-[#2F3640] text-[#F5F6FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-serif italic text-[#E1B12C]">Notes</h2>
              <p className="text-[#00A8FF] font-mono text-xs uppercase tracking-widest mt-2">Instructional Design & Tech</p>
            </div>
          </div>
          <div className="divide-y divide-white/10">
            <article className="py-10 group cursor-pointer">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <span className="text-[#00A8FF] font-mono text-xs uppercase">Research</span>
                  <h3 className="text-2xl md:text-3xl font-sans group-hover:text-[#E1B12C] transition-colors">Interarch Building Products: A 2-Year Deep Dive</h3>
                </div>
                <div className="text-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0 text-[#E1B12C]">→</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. FLOATING CONTACT BUTTON */}
      <button 
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 bg-[#E1B12C] text-[#2F3640] px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 transition-all z-50 font-bold font-sans group"
      >
        <span className="relative">Let's Collaborate</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>

      {/* POPUP FORM MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#2F3640]/90 backdrop-blur-sm">
          <div className="bg-[#F5F6FA] w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-8 right-8 text-[#2F3640]/40 hover:text-[#2F3640] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h2 className="text-4xl font-serif italic text-[#2F3640] mb-2">Inquiry</h2>
            <p className="text-[#2F3640]/60 mb-8 font-sans">Describe your e-learning goals below.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2F3640]/40 mb-1 ml-1 font-mono">Full Name</label>
                <input type="text" className="w-full bg-white border border-[#2F3640]/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A8FF]/50 transition-colors font-sans" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2F3640]/40 mb-1 ml-1 font-mono">Work Email</label>
                <input type="email" className="w-full bg-white border border-[#2F3640]/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A8FF]/50 transition-colors font-sans" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2F3640]/40 mb-1 ml-1 font-mono">Project Scope</label>
                <textarea rows={4} className="w-full bg-white border border-[#2F3640]/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00A8FF]/50 transition-colors resize-none font-sans" placeholder="Tell me about your learning project..."></textarea>
              </div>
              <button className="w-full bg-[#2F3640] text-[#F5F6FA] py-4 rounded-xl font-bold hover:bg-[#2F3640]/90 transition-all mt-4 font-sans">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-[#F5F6FA] text-center text-[#2F3640]/30 font-mono text-[10px] uppercase tracking-[0.5em]">
        © 2026 ScriptedCraft • Built with Next.js
      </footer>

    </main>
  );
}