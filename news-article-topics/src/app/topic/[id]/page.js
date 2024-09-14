export default async function Topic({ params }) {
  const { id } = params;

  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  const data = await res.json();
  const article = data.articles[id]; // Access specific article by index

  if (!article) {
    return <h1>Article NOT found</h1>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <a href={article.url}>Read the Full Article</a>
    </div>
  );
}
