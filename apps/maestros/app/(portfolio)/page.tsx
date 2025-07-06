import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Discord,
	ThreadsApp,
	Xitter,
	// Button,
} from "@repo/ui";
import { Github, Youtube } from "lucide-react";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { buildMeta } from "#/app/metadata";
import { tagline } from "#/app/constants";
import { firaCode } from "#/app/fonts";

export const revalidate = 3600; // hourly

export const generateMetadata = (): Metadata => {
	return buildMeta({
		title: "Anthony Shew",
		description: tagline,
	});
};

export default function Home() {
	return (
		<div>
			<div className="flex flex-row gap-4 sm:gap-8">
				<Avatar className="w-12 h-12 sm:w-20 sm:h-20">
					<AvatarImage src="/images/me.jpg" />
					<AvatarFallback />
				</Avatar>
				<div className="my-auto">
					<h1 className="m-0 text-xl font-bold text-black dark:text-white sm:text-4xl">
						Anthony Shew
					</h1>
					<p
						className={`m-0 mt-1 ${firaCode.className} text-xs sm:text-lg dark:text-slate-400`}
					>
						<Balancer>{tagline}</Balancer>
					</p>
				</div>
			</div>
			<div className="max-w-2xl mx-auto mt-8 prose dark:prose-invert">
				<p>
					Hey, I&apos;m Anthony. I played professional baseball for six years
					and now I write software. I'm currently at Vercel as Turbo DX, where I
					get to lead the{" "}
					<a
						href="https://turbo.build"
						rel="noopener noreferrer"
						target="_blank"
					>
						Turbo
					</a>{" "}
					community. If you'd like to learn more about me personally, I wrote a
					little about how I got here in{" "}
					<Link href="/blog/my-developer-story">this blog post</Link>.
				</p>

				<p>
					I'm also creating <Link href="/monorepos">Monorepo Maestros</Link>, a
					reference for all things monorepo. As monorepo tooling continues to
					improve, I'm excited to help developers learn more about how to create
					well-architected, beautiful, <strong>fast</strong> monorepos to
					deliver the best work of their lives.
				</p>

				{/* <div className="flex flex-row items-center justify-center">
          <Button asChild size="lg" variant="default">
            <Link
              className="flex flex-col py-10 text-xl font-bold text-center no-underline md:w-full md:py-8 md:flex-row"
              href="/monorepos"
            >
              <span className="md:m-1.5">Welcome to</span>
              <span>Monorepo Maestros</span>
            </Link>
          </Button>
        </div> */}

				<hr className="mt-8 mb-4" />
				<div className="flex flex-col items-center justify-center sm:flex-row sm:gap-8">
					<a
						className="flex flex-row gap-2 my-4 hover:underline"
						href="https://twitter.com/anthonysheww"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Xitter className="relative top-0.5 w-6 h-6" /> Xitter
					</a>
					<a
						className="flex flex-row gap-2 my-4 hover:underline"
						href="https://www.youtube.com/channel/UCwfYq8O-1QtU1TlWsJVGRBg"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Youtube className="relative top-0.5" /> YouTube
					</a>
					<a
						className="flex flex-row gap-2 my-4 hover:underline"
						href="https://www.threads.net/@anthonyshew"
						rel="noopener noreferrer"
						target="_blank"
					>
						<ThreadsApp className="relative top-0.5 w-6 h-6" /> Threads
					</a>
					<a
						className="flex flex-row gap-2 my-4 hover:underline"
						href="https://discord.gg/JMHERJGRkH"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Discord className="relative top-0.5 w-6 h-6" /> Discord
					</a>
					<a
						className="flex flex-row gap-2 my-4 hover:underline"
						href="https://github.com/anthonyshew"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github className="relative top-0.5" /> Bugs
					</a>
				</div>
				<hr className="mt-4 mb-8" />
			</div>
		</div>
	);
}
