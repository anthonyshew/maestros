import type { SVGProps } from "react";

export function PlayIcon({
	className,
	...props
}: SVGProps<SVGSVGElement> & { className: string }) {
	return (
		<svg
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			{...props}
		>
			<polygon points="5 3 19 12 5 21 5 3" />
		</svg>
	);
}
