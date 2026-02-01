import { getSortedNotesData } from '@/lib/notes';
import Link from 'next/link';
import NotesList from './NotesList'; 

export default function NotesRepository() {
  // Fetch data on the server
  const allNotes = getSortedNotesData();

  return (
    <main className="min-h-screen bg-[#2F3640] text-[#F5F6FA] py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back home */}
        <Link 
          href="/" 
          className="text-xs font-mono uppercase tracking-widest text-[#00A8FF] hover:text-[#E1B12C] transition-colors mb-12 inline-block"
        >
          ← Back to Home
        </Link>
        
        {/* Updated Heading Style:
            - Uses Playfair Display (font-serif)
            - Gold brand color (#E1B12C)
            - Italic styling
            - Removed "SC." branding prefix
        */}
        <h1 className="text-6xl md:text-8xl font-serif italic text-[#E1B12C] mb-16 border-b border-white/10 pb-8">
          Notes
        </h1>

        {/* The searchable list of repository items */}
        <NotesList allNotes={allNotes} />
      </div>
    </main>
  );
}