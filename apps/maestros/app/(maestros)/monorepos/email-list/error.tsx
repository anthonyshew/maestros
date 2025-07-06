"use client"; // Error components must be Client Components

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";

// biome-ignore lint/suspicious/noShadowRestrictedNames: Ignored when migrating
export default function Error() {
	const router = useRouter();

	return (
		<div>
			<h1 className="mb-8">Sorry but you're not allowed to see this bit.</h1>
			<Button onClick={() => router.push("/monorepos")}>Back to safety</Button>
		</div>
	);
}
