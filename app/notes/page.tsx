import { getSortedNotesData } from '@/lib/notes';
import Link from 'next/link';
import NotesList from './NotesList'; // Import the client component

export default function NotesRepository() {
  // Fetch data on the server where 'fs' is available
  const allNotes = getSortedNotesData();

  return (
    <main className="min-h-screen bg-[#F5F6FA] text-[#2F3640] py-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-xs font-mono uppercase tracking-widest text-[#00A8FF] hover:text-[#E1B12C] transition-colors mb-12 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-serif italic mb-16 border-b border-[#2F3640]/10 pb-8">
          The Repository<span className="text-[#00A8FF]">.</span>
        </h1>

        {/* Use the client component to handle search interactivity */}
        <NotesList allNotes={allNotes} />
      </div>
    </main>
  );
}