import Image from "next/image";
import PostList from "@/components/PostList";
import styles from "./page.module.css";

export default async function Home() {
const response = await fetch(
  `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts` +
    "?per_page=3"
);
const posts = await response.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Stories from Aarhus</h1>
        <PostList posts={posts} />
      </main>
    </div>
  );
}
