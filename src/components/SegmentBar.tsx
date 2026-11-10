import React from "react";
import { cn } from "../lib/utils";

interface SegmentBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to max
  max?: number;
  segments?: 8 | 10;
  color?: "accent" | "muted" | "text";
}

export function SegmentBar({
  className,
  value,
  max = 100,
  segments = 10,
  color = "accent",
  ...props
}: SegmentBarProps) {
  // Calculate how many segments should be filled
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  const filledSegments = Math.round((percent / 100) * segments);

  const colors = {
    accent: "bg-accent",
    muted: "bg-muted",
    text: "bg-text",
  };

  const emptyColor = "bg-borders";

  return (
    <div className={cn("flex w-full gap-[3px]", className)} {...props}>
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex-1 h-3 transition-colors duration-120 ease-linear",
            i < filledSegments ? colors[color] : emptyColor
          )}
        />
      ))}
    </div>
  );
}
