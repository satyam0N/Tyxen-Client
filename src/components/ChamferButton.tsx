import React from "react";
import { cn } from "../lib/utils";

interface ChamferButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "play";
  size?: "sm" | "md" | "lg" | "play";
}

export function ChamferButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ChamferButtonProps) {
  // Using clip-path for chamfered corners, no rounded corners.

  // The variants handle background, border, text colors, and the 120ms linear transition.
  const baseClasses = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-120 ease-linear focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:ring-inset";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm clip-path-sm", // e.g. 4px chamfer
    md: "px-5 py-2.5 text-base clip-path-md", // e.g. 8px chamfer
    lg: "px-8 py-3.5 text-lg clip-path-lg", // e.g. 12px chamfer
    play: "px-12 py-5 text-xl tracking-widest clip-path-play", // Custom notched shape
  };

  const variantClasses = {
    primary: "bg-accent text-ground hover:bg-ground hover:text-accent border-2 border-accent",
    secondary: "bg-panels text-text border-2 border-borders hover:bg-accent hover:text-ground hover:border-accent",
    ghost: "bg-transparent text-text border-2 border-transparent hover:bg-borders hover:text-white",
    play: "bg-accent text-ground hover:bg-ground hover:text-accent border-2 border-accent uppercase",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  // Custom inline styles for clip paths since Tailwind doesn't have these specific polygons built in
  const clipPaths = {
    sm: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
    md: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
    lg: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
    play: "polygon(0 0, calc(100% - 20px) 0, calc(100% - 20px) calc(100% - 16px), 100% calc(100% - 16px), 100% 100%, 0 100%)", // Stepped notch on bottom right
  };

  return (
    <button
      className={combinedClasses}
      style={{ clipPath: clipPaths[size] }}
      {...props}
    >
      {children}
    </button>
  );
}
