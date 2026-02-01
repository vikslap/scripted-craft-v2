import { getSortedNotesData } from '@/lib/notes';
import Link from 'next/link';

export default function NotesRepository() {
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

        <div className="space-y-12">
          {allNotes.map((note) => (
            <div key={note.id} className="grid md:grid-cols-[150px_1fr] gap-4 items-start group">
              <span className="text-xs font-mono text-[#2F3640]/40 mt-1">{note.date}</span>
              <div>
                <Link href={`/notes/${note.id}`} className="text-2xl font-bold hover:text-[#00A8FF] transition-colors block mb-2 font-sans">
                  {note.title}
                </Link>
                <p className="text-[#2F3640]/60 text-sm leading-relaxed line-clamp-2">{note.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}