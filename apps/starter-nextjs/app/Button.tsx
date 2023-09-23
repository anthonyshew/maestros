'use client';

import { Button as UiButton } from '@repo/ui';

export function Button() {
  return (
    <UiButton
      onClick={() => alert('Alert! Monorepos are great.')}
      variant="secondary"
    >
      Click me to be alerted!
    </UiButton>
  );
}
