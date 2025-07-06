/** This type is taken from the Next.js Link type so we can use it in our UI lib. */
export type NextLinkType = React.ForwardRefExoticComponent<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/sort-type-constituents
	// biome-ignore lint/suspicious/noExplicitAny: Ignored when migrating
		Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, any> &
		React.RefAttributes<HTMLAnchorElement> & {
			children?: React.ReactNode;
		} & {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// biome-ignore lint/suspicious/noExplicitAny: Ignored when migrating
						href: any;
			className?: string;
			prefetch?: boolean | null;
		}
>;

export type NextImageType = React.ForwardRefExoticComponent<
	Omit<
		React.DetailedHTMLProps<
			React.ImgHTMLAttributes<HTMLImageElement>,
			HTMLImageElement
		>,
		"alt" | "height" | "loading" | "ref" | "src" | "srcSet" | "width"
	> &
		React.RefAttributes<HTMLImageElement | null> & {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// biome-ignore lint/suspicious/noExplicitAny: Ignored when migrating
						src: any;
			alt: string;
			width?: number | `${number}` | undefined;
			height?: number | `${number}` | undefined;
			fill?: boolean | undefined;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// biome-ignore lint/suspicious/noExplicitAny: Ignored when migrating
						loader?: any;
			quality?: number | `${number}` | undefined;
			priority?: boolean | undefined;
			loading?: "eager" | "lazy" | undefined;
			placeholder?: "blur" | "empty" | `data:image/${string}` | undefined;
			blurDataURL?: string | undefined;
			unoptimized?: boolean | undefined;
			onLoadingComplete?: ((img: HTMLImageElement) => void) | undefined;
			layout?: string | undefined;
			objectFit?: string | undefined;
			objectPosition?: string | undefined;
			lazyBoundary?: string | undefined;
			lazyRoot?: string | undefined;
		}
>;
