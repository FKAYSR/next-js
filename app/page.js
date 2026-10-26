import Image from "next/image";
import PostList from "@/components/PostList";
import styles from "./page.module.css";
import { getLatestPosts } from "@/lib/wordpress";

export default async function Home() {
const posts = await getLatestPosts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Stories from Aarhus</h1>
        <PostList posts={posts} />
      </main>
    </div>
  );
}
