export default function BlogPostPage({
  params,
}: {
  params: { slug?: string };
  paramsSearch: {};
}) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
