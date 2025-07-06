declare module "next-contentlayer" {
	export function withContentlayer(config: any): any;
}

declare module "next-contentlayer/hooks" {
	export function useMDXComponent(code: string): React.ComponentType<any>;
}
