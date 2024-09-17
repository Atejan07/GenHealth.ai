export async function generateMetadata({ params }) {
  const { id } = params;
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  const data = await res.json();
  const article = data.articles[id];

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for does not exist.",
    };
  }

  return {
    title: `${article.title} - Online Newspaper`,
    description:
      article.description ||
      `Read more about the latest news on ${article.title}`,
    keywords: `${article.title}, news, latest news, online newspaper`,
  };
}

export default async function Topic({ params }) {
  const { id } = params;

  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  const data = await res.json();
  const article = data.articles[id]; 

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
