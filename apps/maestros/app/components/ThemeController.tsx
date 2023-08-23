'use client';

import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Laptop } from 'lucide-react';

const icons: Record<string, ReactElement> = {
  dark: <Moon />,
  light: <Sun />,
  system: <Laptop />,
};

export function ThemeController({ position }: { position?: 'absolute' }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const switcher = () => {
    if (theme === 'system') {
      setTheme('light');
    }

    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('system');
    }
  };

  if (mounted) {
    return (
      <button
        className={
          position === 'absolute' ? 'absolute top-2 right-2' : undefined
        }
        onClick={() => switcher()}
        type="button"
      >
        {icons[theme as 'dark' | 'light' | 'system']}
      </button>
    );
  }

  return null;
}
