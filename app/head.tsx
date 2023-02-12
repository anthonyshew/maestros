import Script from "next/script";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>My Page</title>
      <Script src="./dark-mode.js" />
    </>
  );
}
