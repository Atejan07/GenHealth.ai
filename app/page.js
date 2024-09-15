import Link from "next/link";

export const metadata = {
  title: "Online Newspaper - Latest News",
  description: "Stay updated with the latest news within the USA.",
  keywords: "news, newspaper, online news, latest news",
};

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Online Newspaper</h1>
      <p>This is a demo of a news website I built using News API.</p>
      <Link href="/topic">View Topics</Link>
    </div>
  );
}
