import Link from "next/link";

export default function Home({ params }: { params: { deck: string } }) {
  return (
    <main className="flex flex-col items-center content-center justify-center min-w-full min-h-screen ">
      <div className="flex flex-col gap-4">
        <p>Welcome to my slides.</p>
        <p>
          You'll be able to navigate with your keyboard with the left and right
          arrows.
        </p>
        <p>and there will be my speaking notes if you hit up.</p>
      </div>
      <Link href={`/talks/${params.deck}/1`}>Start</Link>
      <Link href="/talks">Back to slide deck library</Link>
    </main>
  );
}
