import Image from "next/image";
import { buildMeta, metadataBaseURI } from "#/app/metadata";
import { SubscribeButton } from "#/components/SubscribeButton";

export const generateMetadata = () => {
	buildMeta({
		title: "Monorepo Maestros",
		description: "Are you ready to conduct the monorepo orchestra?",
		ogImage: encodeURI(
			`${metadataBaseURI}/monorepos/api/og?title=Monorepo Maestros`,
		),
	});
};

function Page() {
	return (
		<main className="relative flex flex-row justify-start overflow-x-hidden flex-auto h-[calc(100vh-3.5rem)] px-8 pt-8 md:px-12 overflow-auto mt-14 sm:py-8 lg:py-14">
			<div className="absolute top-0 left-0 right-0 z-0 aspect-square">
				<Image
					alt="Cover art for Monorepo Maestros"
					className="object-cover !m-0 opacity-40 object-top h-50 dark:opacity-30"
					fill
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					src="/images/maestros/cover.jpeg"
				/>
				<div className="absolute inset-0 z-0 bg-gradient-to-b to-95% from-transparent to-white dark:to-zinc-950" />
			</div>
			<div className="z-10 mx-auto">
				<h1 className="z-10 text-4xl mb-8 font-black text-foreground leading-[3.5rem] md:leading-[5rem] lg:leading-[5.5rem] text-center sm:text-5xl lg:text-6xl">
					Welcome to
					<br />
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-800">
						Monorepo Maestros
					</span>
				</h1>
				<SubscribeButton />

				<div className="container z-10 w-full h-full p-2 pt-8 prose lg:prose-lg sm:p-6 dark:prose-invert">
					<p>
						Some of the largest software engineering organizations in the world
						deliver using monorepos and you can, too. With the right knowledge
						and tooling, you can create excellent workflows that let you iterate
						faster than ever before.
					</p>
					<h2>For monorepo pupils</h2>
					<p>
						If you're here with no knowledge of how to put together a healthy
						monorepo, you're in the right place. You're about to learn valuable
						skills for managing code and applications in a meaningful way.
					</p>
					<h2>For monorepo apprentices</h2>
					<p>
						If you've been trying to put a monorepo together and you're finding
						that the necessary pieces aren't fitting together well, you're also
						in the right place. It's frustrating - and the documentation you
						need is often not helpful, too dense, or really hard to find. Good
						news: we've rolled up everything you need into one course.
					</p>
					<h2>For monorepo haters</h2>
					<p>
						You also may have what I like to lovingly call a{" "}
						<strong>"yolorepo”</strong>, a monorepo where things are hanging on
						by a thread and teams don't have structure about how to navigate
						their packages and applications. If you feel like you're constantly
						battling your tooling and your CI is way too slow, you're in a
						yolorepo.
					</p>
					<h2>For those who love to listen the music</h2>
					<p>
						You may also work in an excellent monorepo at work that someone else
						set up and you want to better understand what you work with every
						day! That's cool, too!
					</p>
					<h2>
						Hi, I'm Anthony and I'm here to help you conduct your symphony.
					</h2>

					<div className="flex flex-row items-center justify-center w-full">
						<div className="relative w-4/5 mb-4 overflow-hidden aspect-square rounded-xl">
							<Image
								alt="Cover art for Monorepo Maestros"
								className="object-cover rounded-xl"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								src="/images/me.jpg"
							/>
						</div>
					</div>
					<p>
						I've been fortunate enough to be in a position to help individuals,
						teams, and organizations (small and large) do the best work of their
						lives with monorepos. With Monorepo Maestros, I want to share that
						experience to benefit others.
					</p>
					<h2>Because when your monorepo runs smoothly...</h2>
					<p>
						<strong>...it's like a beautiful orchestra.</strong>
					</p>
					<p>
						When the woodwinds (ESLint) work together with the strings
						(Prettier), you find harmony.
					</p>
					<p>
						When the percussion (TypeScript) sounds great with the brass (GitHub
						Actions), your CI works like a lovely melody.
					</p>
					<p>
						<strong>
							And we're going to make it fast like speed metal. 🤘
						</strong>
					</p>
					<h2>Stay tuned</h2>
					<p>
						We're writing more music as we speak! We're excited for what we'll
						unlock together to write the best music (erm, applications)
						possible.{" "}
					</p>

					<p>
						To keep up with when new content is released,{" "}
						<a
							href="https://twitter.com/anthonysheww"
							rel="noopener noreferrer"
							target="_blank"
						>
							follow me on Twitter
						</a>{" "}
						and{" "}
						<a
							href="https://github.com/anthonyshew/maestros"
							rel="noopener noreferrer"
							target="_blank"
						>
							star this repo
						</a>
						.
					</p>
					<div className="flex flex-row items-center justify-center w-full">
						<div className="relative w-4/5 mb-4 overflow-hidden aspect-square rounded-xl">
							<Image
								alt="Cover art for Monorepo Maestros"
								className="object-cover mb-2 rounded-xl grayscale"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								src="/images/maestros/maestro.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Page;
