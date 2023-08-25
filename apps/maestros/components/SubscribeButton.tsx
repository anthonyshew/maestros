'use client';

import { useSession, signIn } from 'next-auth/react';
import { Button } from '@repo/ui';

export function SubscribeButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="p-8" />;
  }

  if (session) {
    return (
      <div className="relative z-10 flex flex-row items-center justify-center p-[22px] animate-fade-in">
        <p className="text-sm">
          You're subscribed to receive updates on new content releases!
        </p>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-row items-center justify-center animate-fade-in">
      <Button className="py-8" onClick={() => void signIn()}>
        Get notified when <br />
        new content releases!
      </Button>
    </div>
  );
}
