import { allSlides } from "contentlayer/generated";

export const generateStaticParams = () => {
  // The split is for handling the file structure
  // e.g. /slides/abc drops the "/slides/" to become "abc"
  return allSlides.map((a) => ({ deck: a._raw.sourceFileDir.split("/")[1] }));
};

export default function Home() {
  return (
    <main className="flex items-center content-center justify-center min-w-full min-h-screen ">
      <div className="flex flex-col gap-4">
        <p>Welcome to my slides.</p>
        <p>
          You'll be able to navigate with your keyboard (left and right) soon.
        </p>
        <p>and there will be my speaking notes if you hit up.</p>
      </div>
    </main>
  );
}
