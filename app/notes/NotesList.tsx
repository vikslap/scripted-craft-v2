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
      {/* --- Search Bar --- */}
      <div className="mb-16 relative">
        <input
          type="text"
          placeholder="Search by title, category, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-[#2F3640]/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/20 transition-all font-sans text-lg text-[#2F3640]"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#2F3640]/20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
        </div>
      </div>

      {/* --- Notes List --- */}
      <div className="space-y-12">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id} className="grid md:grid-cols-[150px_1fr] gap-4 items-start group animate-in fade-in duration-500">
              <span className="text-xs font-mono text-[#2F3640]/40 mt-1">{note.date}</span>
              <div>
                <Link href={`/notes/${note.id}`} className="text-2xl font-bold hover:text-[#00A8FF] transition-colors block mb-2 font-sans">
                  {note.title}
                </Link>
                <p className="text-[#2F3640]/60 text-sm leading-relaxed line-clamp-2">{note.excerpt}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#2F3640]/40 italic font-serif py-10 text-center">
            No notes found matching "{searchQuery}"
          </p>
        )}
      </div>
    </>
  );
}