import { getNoteData, getSortedNotesData } from '@/lib/notes';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const notes = getSortedNotesData();
  return notes.map((note) => ({
    id: note.id,
  }));
}

// Update 1: Define the params as a Promise
export default async function NotePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  // Update 2: Await the params before using 'id'
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  if (!id) {
    return notFound();
  }

  try {
    const noteData = await getNoteData(id);

    return (
      <article className="min-h-screen bg-[#F5F6FA] text-[#2F3640] py-24 px-6 font-sans">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/notes" 
            className="text-xs font-mono uppercase tracking-[0.3em] text-[#00A8FF] hover:text-[#E1B12C] transition-colors mb-12 inline-block"
          >
            ← Back to Repository
          </Link>

          <header className="mb-12 border-b border-[#2F3640]/10 pb-12">
            <span className="text-[#00A8FF] font-mono text-xs uppercase tracking-widest">
              {noteData.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif italic mt-4 mb-4">
              {noteData.title}
            </h1>
            <p className="text-[#2F3640]/40 font-mono text-xs">{noteData.date}</p>
          </header>

          {/* Renders Markdown HTML with Tailwind Typography */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:italic prose-a:text-[#00A8FF] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} 
          />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading note:", error);
    return notFound();
  }
}