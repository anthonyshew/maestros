"use client";

import { Button } from "@repo/ui";

export function SubscribeButton() {
	return (
		<div className="relative z-10 flex flex-row items-center justify-center animate-fade-in">
			<Button
				className="py-8"
				onClick={() =>
					window.open("https://github.com/anthonyshew/maestros", "_blank")
				}
			>
				Star on GitHub <br />
				for updates!
			</Button>
		</div>
	);
}
