"use client";

export function ClientErrorProxy({ error }: { error: string }) {
	throw new Error(error);
	// biome-ignore lint/correctness/noUnreachable: Ignored when migrating
	return null;
}
