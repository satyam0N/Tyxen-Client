import React from "react";
import { cn } from "../lib/utils";
import { ChamferCard } from "./ChamferCard";
import { X } from "lucide-react";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export function Dialog({
  className,
  open,
  onClose,
  title,
  children,
  ...props
}: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ground/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog content */}
      <ChamferCard
        chamferSize="lg"
        className={cn("relative z-10 w-full max-w-lg min-h-[200px] flex flex-col p-6 shadow-2xl", className)}
        {...props}
      >
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-2xl font-bold text-text uppercase tracking-wide">{title}</h2>}
          <button
            onClick={onClose}
            className="text-muted hover:text-accent transition-colors duration-120 ml-auto"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </ChamferCard>
    </div>
  );
}
