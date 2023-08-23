import { cn } from '#utils/cn';

export const IconBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800',
        className,
      )}
    >
      {children}
    </div>
  );
};
