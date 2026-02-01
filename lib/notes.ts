import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const notesDirectory = path.join(process.cwd(), 'content/notes');

// Updated Interface to include SEO fields
export interface NoteData {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  description?: string; // New SEO field
  keywords?: string;    // New SEO field
  contentHtml?: string;
}

export function getSortedNotesData() {
  const fileNames = fs.readdirSync(notesDirectory);
  const allNotesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      // Updated type cast to include description and keywords
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        category: string; 
        excerpt: string;
        description?: string;
        keywords?: string;
      }),
    };
  });

  // Sort notes by date
  return allNotesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNoteData(id: string) {
  const fullPath = path.join(notesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    // Included metadata fields for single-note SEO generation
    ...(matterResult.data as { 
      date: string; 
      title: string; 
      category: string;
      excerpt: string;
      description?: string;
      keywords?: string;
    }),
  };
}