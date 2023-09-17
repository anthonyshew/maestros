'use client';

export function ClientErrorProxy({ error }: { error: string }) {
  throw new Error(error);
  return null;
}
