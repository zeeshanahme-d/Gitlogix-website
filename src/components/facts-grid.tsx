import { facts } from "@/content/site";

export function FactsGrid({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line ${className}`}>
      {facts.map((fact) => (
        <div key={fact.label} className="flex flex-col-reverse gap-1 bg-bg p-6">
          <dt className="text-sm text-fg-2">{fact.label}</dt>
          <dd className="font-display text-5xl font-semibold">
            {fact.value}
            {fact.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
