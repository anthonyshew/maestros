declare module "next-contentlayer" {
	// biome-ignore lint/suspicious/noExplicitAny: Ignored when migrating
	export function withContentlayer(config: any): any;
}

declare module "next-contentlayer/hooks" {
	// biome-ignore lint/suspicious/noExplicitAny: Ignored when migrating
	export function useMDXComponent(code: string): React.ComponentType<any>;
}
