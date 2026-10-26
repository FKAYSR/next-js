"use client";

export default function Error({ reset }) {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>We could not fetch the content from WordPress.</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
