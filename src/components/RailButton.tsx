import React from "react";
import { cn } from "../lib/utils";
import { LucideIcon } from "lucide-react";

interface RailButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  active?: boolean;
}

export function RailButton({
  className,
  icon: Icon,
  active = false,
  ...props
}: RailButtonProps) {
  const baseClasses = "flex h-16 w-full items-center justify-center transition-all duration-120 ease-linear border-l-2";
  const activeClasses = active
    ? "bg-panels border-accent text-accent"
    : "bg-transparent border-transparent text-muted hover:bg-panels hover:text-text hover:border-borders";

  return (
    <button
      className={cn(baseClasses, activeClasses, className)}
      {...props}
    >
      <Icon className="h-6 w-6" strokeWidth={1.5} />
    </button>
  );
}
