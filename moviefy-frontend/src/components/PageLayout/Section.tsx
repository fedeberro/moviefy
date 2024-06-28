import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export default function Section({ className, children }: Props) {
  return (
    <section
      className={`w-full rounded-lg overflow-hidden border backdrop-saturate-[200%] bg-card/20 ${className}`}
    >
      {children}
    </section>
  );
}
