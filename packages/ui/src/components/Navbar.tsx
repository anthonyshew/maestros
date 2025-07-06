import type { ElementType } from "react";
import type { NextLinkType } from "../utils/types";

interface NavbarProps {
	links: {
		label: string;
		href: string;
	}[];
	linkComponent: NextLinkType;
	themeControllerComponent: ElementType;
}

export function Navbar({
	links,
	linkComponent,
	themeControllerComponent,
}: NavbarProps) {
	const Link = linkComponent;

	const ThemeController = themeControllerComponent;

	return (
		<nav className="flex flex-row justify-center w-full gap-4 py-8 md:mx-10 md:mr-20 md:mt-24 md:flex-col md:w-16 md:justify-start">
			{links.map((link) => {
				return (
					<Link
						className="tracking-wider group"
						href={link.href}
						key={link.label}
					>
						{link.label}
						<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-slate-800 dark:bg-white" />
					</Link>
				);
			})}
			<div className="hidden md:inline">
				<ThemeController />
			</div>
		</nav>
	);
}
