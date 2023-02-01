import { useEffect, useCallback } from "react";

export function useKeyPress(callback: () => void, keys: string[]): void {
  const handler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (keys.includes(key)) {
        callback();
      }
    },
    [callback, keys]
  );

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
}
