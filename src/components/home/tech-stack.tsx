"use client";

import { useId, useState, type KeyboardEvent } from "react";

import { BrandIcon } from "@/components/ui/platform-icon";
import { techStack } from "@/content/site";

/**
 * Tabbed technology grid. Tabs follow the WAI-ARIA tabs pattern
 * (arrow keys, Home and End move between tabs).
 */
export function TechStack() {
  const [active, setActive] = useState(techStack[0].id);
  const baseId = useId();
  const category = techStack.find((c) => c.id === active) ?? techStack[0];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = techStack.length - 1;
    const target =
      event.key === "ArrowRight"
        ? (index + 1) % techStack.length
        : event.key === "ArrowLeft"
          ? (index - 1 + techStack.length) % techStack.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (target === null) return;
    event.preventDefault();
    const next = techStack[target];
    setActive(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Technology categories"
        className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-control bg-surface-2 p-1 scrollbar-none"
      >
        {techStack.map((item, index) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`h-10 shrink-0 rounded-md px-4 text-sm font-bold transition-colors duration-150 ${
                selected ? "bg-bg text-fg shadow-sm ring-1 ring-line" : "text-fg-2 hover:text-fg"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="mt-8">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {category.items.map((tech) => (
            <li key={`${active}-${tech.name}`} className="group/tech flex items-center gap-3 bg-bg px-4 py-5 sm:px-5">
              <BrandIcon
                id={tech.id}
                className="size-6 shrink-0 text-fg transition-colors duration-150 group-hover/tech:text-(--brand)"
              />
              <span className="font-medium">{tech.name}</span>
            </li>
          ))}
          {fillers(category.items.length).map((className, i) => (
            <li key={i} aria-hidden className={`bg-bg ${className}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Blank cells that complete the last row at 2, 3 and 5 columns, so the
 * hairline grid never shows a grey gap. Each cell is shown only at the
 * breakpoints where it is needed.
 */
function fillers(count: number) {
  const missing = (columns: number) => (columns - (count % columns)) % columns;
  const [base, sm, lg] = [missing(2), missing(3), missing(5)];
  return Array.from({ length: Math.max(base, sm, lg) }, (_, i) =>
    [i < base ? "block" : "hidden", i < sm ? "sm:block" : "sm:hidden", i < lg ? "lg:block" : "lg:hidden"].join(" "),
  );
}
