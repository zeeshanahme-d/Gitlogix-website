import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div"> & { size?: "page" | "narrow" };

/** Page-width wrapper with the standard 16 / 24 / 32px gutters. */
export function Container({ size = "page", className = "", ...props }: ContainerProps) {
  const width = size === "page" ? "max-w-page" : "max-w-narrow";
  return <div className={`mx-auto w-full ${width} px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}
