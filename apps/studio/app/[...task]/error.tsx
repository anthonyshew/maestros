"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { Button } from "../../components/Button";

export default function Error({
	error,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<div className="w-full h-full p-4 text-white">
			<div className="flex flex-col items-center justify-center w-full h-full p-6 rounded-3xl bg-red-800/40">
				<div className="flex flex-col max-w-2xl gap-8">
					<div>
						<h1 className="text-2xl">
							Error thrown from <code>turbo</code>:
						</h1>
						<pre className="p-6 mt-2 whitespace-normal bg-red-900 rounded-xl">
							{error.message.split("\n")[0]}
						</pre>
					</div>
					<div>
						<p className="mb-2 font-medium">Debugging tips:</p>
						<ul className="list-disc list-inside">
							<li>Do the tasks you've requested exist in your project?</li>
							<li>
								If you've added <code>--dry</code> to your command, you can
								remove it. Studio uses that under the hood.
							</li>
							<li>
								Any other invalid syntax/flags/typos that may be in your{" "}
								<code>turbo</code> command?
							</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<Button onClick={() => router.push("/")} variant="outline">
							Back to safety
						</Button>
					</div>
					<p className="text-sm">
						If you believe this error is actually an issue with Studio, please{" "}
						<a
							className="underline"
							href="https://github.com/anthonyshew/maestros/issues/new"
							rel="noopener noreferrer"
						>
							file an issue on the repository.
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
