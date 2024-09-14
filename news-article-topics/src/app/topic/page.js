import Link from "next/link";
import "../topics.css";

export const metadata = {
    title: "News Topics - Online Newspaper",
    description: "Browse through the latest topics and articles from the online newspaper."
}
export default async function TopicList() {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await res.json();
    const articles = data.articles || [];
  
    return (
      <div>
        <h1>Topic List</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <Link href={`/topic/${index}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }