/** A link that should open in a new tab. Use to point at external resources. */
export const ExternalMdxLink = ({
  children,
  ...props
}: {
  children: string;
}) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
