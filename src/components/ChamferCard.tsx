import React from "react";
import { cn } from "../lib/utils";

interface ChamferCardProps extends React.HTMLAttributes<HTMLDivElement> {
  chamferSize?: "sm" | "md" | "lg" | "hero";
  interactive?: boolean;
}

export function ChamferCard({
  className,
  chamferSize = "md",
  interactive = false,
  children,
  ...props
}: ChamferCardProps) {
  const baseClasses = "relative bg-panels border-2 border-borders overflow-hidden transition-all duration-120 ease-linear";
  const interactiveClasses = interactive ? "hover:border-accent cursor-pointer focus-within:ring-2 focus-within:ring-accent" : "";

  // 8-28px cuts
  const clipPaths = {
    sm: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
    md: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
    lg: "polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)",
    // Hero card style from mockup - angled top right, angled bottom left
    hero: "polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%, 0 28px)",
  };

  return (
    <div
      className={cn(baseClasses, interactiveClasses, className)}
      style={{ clipPath: clipPaths[chamferSize] }}
      {...props}
    >
      {children}
    </div>
  );
}
