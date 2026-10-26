import { notFound } from "next/navigation";

export default async function AboutPage() {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages?slug=about`,
  );
  const pages = await response.json();
  const page = pages[0];

  if (!page) {
    notFound();
  }

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}
