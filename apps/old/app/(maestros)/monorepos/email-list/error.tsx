"use client"; // Error components must be Client Components

import { Button } from "#/components/Button";
import { useRouter } from "next/navigation";

export default function Error({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div>
      <h1 className="mb-8">Sorry but you're not allowed to see this bit.</h1>
      <Button onClick={() => router.push("/monorepos")}>Back to safety</Button>
    </div>
  );
}
