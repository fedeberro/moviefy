interface Props {
  children: React.ReactNode;
  className?: string;
}

interface ParagraphProps extends Props {
  secondary?: boolean;
}
export function Title({ children, className }: Props) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function Subtitle({ children, className }: Props) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ children, secondary, className }: ParagraphProps) {
  return (
    <p
      className={`leading-7 ${
        secondary ? "text-sm text-muted-foreground" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function Blockquote({ className, children }: Props) {
  return (
    <blockquote
      className={`border-l-2 border-primary pl-6 italic ${className}`}
    >
      {children}
    </blockquote>
  );
}
