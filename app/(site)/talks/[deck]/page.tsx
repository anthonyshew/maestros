import Link from "next/link";
import { talksData } from "../talksData";
import { StartButton } from "./StartButton";
import Balancer from "react-wrap-balancer";

export default function Home({ params }: { params: { deck: string } }) {
  return (
    <div className="w-full">
      <div className="prose dark:prose-invert">
        <h1 className="mt-8">
          <Balancer>{talksData[params.deck]?.title}</Balancer>
        </h1>
        <ul>
          <li>Press your left arrow to go back a slide.</li>
          <li>Press your right arrow to go forward a slide.</li>
          <li>Press your up arrow to see my speaking notes.</li>
        </ul>

        <div className="flex flex-col gap-4">
          <StartButton
            deck={params.deck}
            description="Just browse the slides and speaking notes."
            mode="Viewer"
          />
          <StartButton
            deck={params.deck}
            description=" A new tab will open and your slides will stay in sync across tabs."
            mode="Presenter"
          />
          <Link
            href="/talks"
            className="inline-block px-4 py-2 mx-auto no-underline rounded-lg bg-slate-300 text-slate-800"
          >
            Back to Talks
          </Link>
        </div>
      </div>
    </div>
  );
}
