"use client"; // Error components must be Client Components

export default function Error() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Radio silence...</h1>
      <h2>404</h2>
      <p>It doesn't look like there is anything here.</p>
      <p>
        If there should be, please{" "}
        <a
          href="https://github.com/anthonyshew/maestros"
          target="_blank"
          rel="noopener noreferrer"
        >
          let us know in a GitHub issue!
        </a>
      </p>
    </div>
  );
}
