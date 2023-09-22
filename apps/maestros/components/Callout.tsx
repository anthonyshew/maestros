import { cva } from 'class-variance-authority';
import { AlertOctagon, AlertTriangle, Info } from 'lucide-icons-react';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CalloutProps {
  children: ReactNode;
  type: 'danger' | 'goodToKnow' | 'info' | 'note' | 'warning';
  bold?: boolean;
  className?: string;
}

const calloutStyles = cva('my-4 p-4 rounded text-sm leading-6', {
  variants: {
    type: {
      info: 'bg-neutral-400 text-neutral-800',
      note: 'bg-transparent text-black dark:text-white border-black dark:border-white border [&>li>p]:inline',
      goodToKnow:
        'bg-transparent text-black dark:text-white border-black dark:border-white border [&>li>p]:inline',
      danger: 'bg-red-400 text-red-800',
      warning: 'bg-yellow-400 !text-yellow-900',
    },
  },
});

const iconSet = (type: CalloutProps['type']) => {
  if (type === 'danger') {
    return <AlertOctagon className="w-5 h-5" />;
  }

  if (type === 'warning') {
    return <AlertTriangle className="w-5 h-5" />;
  }

  if (type === 'goodToKnow') {
    return null;
  }

  if (type === 'info') {
    return <Info className="w-5 h-5" />;
  }
};

export function Callout({ children, type = 'info', className }: CalloutProps) {
  return (
    <div
      className={twMerge(
        calloutStyles({ type }),
        type === 'warning' ? 'font-semibold' : '',
        'relative',
        className,
      )}
    >
      {type !== 'goodToKnow' && type !== 'note' ? (
        <div
          className={twMerge(
            calloutStyles({ type }),
            'absolute -top-8 -left-4 p-2 text-xs rounded-full',
          )}
        >
          {iconSet(type)}
        </div>
      ) : null}
      {type === 'goodToKnow' ? 'Good to know:' : null}
      {type === 'note' ? 'Note: ' : null}
      {children}
    </div>
  );
}
