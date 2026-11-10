import React from "react";
import { cn } from "../lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "solid";
  color?: "accent" | "muted" | "text";
}

export function Chip({
  className,
  variant = "outline",
  color = "accent",
  children,
  ...props
}: ChipProps) {
  const baseClasses = "inline-flex items-center px-2 py-0.5 text-xs font-bold uppercase tracking-wider font-mono";

  const colors = {
    outline: {
      accent: "text-accent border border-accent",
      muted: "text-muted border border-borders",
      text: "text-text border border-borders",
    },
    solid: {
      accent: "bg-accent text-ground",
      muted: "bg-borders text-text",
      text: "bg-text text-ground",
    }
  };

  return (
    <span
      className={cn(baseClasses, colors[variant][color], className)}
      {...props}
    >
      {children}
    </span>
  );
}
