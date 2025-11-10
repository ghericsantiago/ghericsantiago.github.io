// app/page.js
type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  // Fetch data (this runs on the server at build time for static export)
  const posts: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
    { cache: 'force-cache' }
  ).then(res => res.json());

  return (
    <main style={{ padding: 20 }}>
      <h1>My Static Blog</h1>
      <ul>
        {posts.map((p: Post) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}
