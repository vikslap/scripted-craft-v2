"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function NotesList({ allNotes }: { allNotes: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = allNotes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* --- Search Bar: Styled for Dark Background --- */}
      <div className="mb-16 relative">
        <input
          type="text"
          placeholder="Search by title, category, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/40 transition-all font-sans text-lg text-[#F5F6FA] placeholder:text-white/20"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#00A8FF]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
        </div>
      </div>

      {/* --- Notes List: Matching Home Section Style --- */}
      <div className="divide-y divide-white/10">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <article key={note.id} className="py-10 group cursor-pointer animate-in fade-in duration-500">
              <Link href={`/notes/${note.id}`} className="flex justify-between items-center w-full">
                <div className="max-w-3xl">
                  <span className="text-[#00A8FF] font-mono text-[10px] uppercase tracking-widest">
                    {note.category} • {note.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-sans group-hover:text-[#E1B12C] transition-colors text-white mt-2">
                    {note.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mt-4">
                    {note.excerpt}
                  </p>
                </div>
                {/* Visual indicator matching the home page dynamic list */}
                <div className="text-[#E1B12C] text-2xl group-hover:translate-x-2 transition-transform hidden md:block">
                  →
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="text-center py-20">
            {/* Branded Empty State */}
            <p className="text-4xl font-sans font-bold tracking-tighter text-white/5 mb-4">
              S<span className="text-[#E1B12C]/10 font-serif italic">C</span><span className="text-[#00A8FF]/10">.</span>
            </p>
            <p className="text-white/20 italic font-serif">
              No notes found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </>
  );
}