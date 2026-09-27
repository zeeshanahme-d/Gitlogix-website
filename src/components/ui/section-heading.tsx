import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
};

export function SectionHeading({ id, title, lead, className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 id={id} className="type-h2">
        {title}
      </h2>
      {lead ? <p className="type-lead measure mt-4 text-fg-2">{lead}</p> : null}
    </div>
  );
}
