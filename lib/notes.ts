import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const notesDirectory = path.join(process.cwd(), 'content/notes');

export function getSortedNotesData() {
  const fileNames = fs.readdirSync(notesDirectory);
  const allNotesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string; category: string; excerpt: string }),
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
    ...(matterResult.data as { date: string; title: string; category: string }),
  };
}