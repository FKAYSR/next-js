import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getPostBySlug } from "@/lib/wordpress";
import { formatDate } from "@/lib/format";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
    if (!post) {
      notFound();
    }
    
  const date = formatDate(post.date);
  const image = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];

  return (
    <main>
      <article className={styles.post}>
        <Link href="/posts">← All posts</Link>
        <time className={styles.date} dateTime={post.date}>
          {date}
        </time>
        {image && (
          <img
            className="featured-image"
            src={image.source_url}
            alt={image.alt_text}
          />
        )}
        <ul className={styles.date}>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}