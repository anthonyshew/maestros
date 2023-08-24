"use client"; // Error components must be Client Components

export default function Error() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Radio silence...</h1>
      <h2>404</h2>
      <p>It doesn't look like there is anything here.</p>
      <p>
        If you've made it here through navigating around the site, this music is
        probably still being written.
      </p>
      <p>
        If you think there's an issue, please{" "}
        <a
          href="https://github.com/anthonyshew/maestros"
          rel="noopener noreferrer"
          target="_blank"
        >
          let us know in a GitHub issue!
        </a>
      </p>
    </div>
  );
}
