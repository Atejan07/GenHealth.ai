import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Online Newspaper</h1>
      <p>This is a demo of a news website I built using News API.</p>
      <Link href="/topic">View Topics</Link>
    </div>
  );
}
