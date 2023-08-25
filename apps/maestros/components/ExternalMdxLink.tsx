/** A link that should open in a new tab. Use to point at external resources. */
export function ExternalMdxLink({ children, ...props }: { children: string }) {
  return (
    <a {...props} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}
