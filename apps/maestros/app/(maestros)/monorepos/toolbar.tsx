'use client';

import { VercelToolbar } from '@vercel/toolbar/next';
import { useEffect, useState } from 'react';

const konamiKeyCodes = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

type State =
  | {
      complete: false;
      sequence: string[];
    }
  | {
      complete: true;
    };

const LOCAL_STORAGE_KEY = 'konami-state';

export function Toolbar() {
  const [state, setState] = useState<State>({ complete: false, sequence: [] });

  useEffect(() => {
    if (state.complete) {
      console.log('Konami code complete!');
      localStorage.setItem(LOCAL_STORAGE_KEY, 'yes');
      return;
    }

    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedState === 'yes') {
      setState({ complete: true });
    }

    function onKeyDown(e: KeyboardEvent) {
      setState((prevState) => {
        // This check is to please the typescript compiler
        if (prevState.complete) return prevState;

        const newSequence = [...prevState.sequence, e.key];
        if (arrayStartsWith(konamiKeyCodes, newSequence)) {
          if (newSequence.length === konamiKeyCodes.length) {
            return { complete: true };
          }
          return { complete: false, sequence: newSequence };
        }

        return { complete: false, sequence: [] };
      });
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [state.complete]);

  return state.complete ? <VercelToolbar /> : null;
}

function arrayStartsWith<T>(arr: T[], prefix: T[]) {
  if (arr.length < prefix.length) return false;

  for (let i = 0; i < prefix.length; i++) {
    if (arr[i] !== prefix[i]) return false;
  }

  return true;
}
