// app/page.tsx
// Server Component - handles the data fetching
import { getSortedNotesData } from '@/lib/notes';
import HomeClient from './HomeClient';

export default async function Page() {
  // Fetch data on the server where 'fs' is available
  const allNotes = getSortedNotesData();
  
  // Slice to show only the latest 3 notes on the Home Page
  const latestNotes = allNotes.slice(0, 3);

  return <HomeClient initialNotes={latestNotes} />;
}