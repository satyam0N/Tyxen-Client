import React, { useEffect } from "react";
import { cn } from "../lib/utils";
import { ChamferCard } from "./ChamferCard";
import { X, Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export type ToastVariant = "info" | "success" | "warning" | "error";

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  onClose: (id: string) => void;
  duration?: number;
}

export function Toast({
  className,
  id,
  title,
  description,
  variant = "info",
  onClose,
  duration = 5000,
  ...props
}: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => onClose(id), duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const icons = {
    info: <Info className="text-accent" size={20} />,
    success: <CheckCircle className="text-accent" size={20} />,
    warning: <AlertTriangle className="text-yellow-500" size={20} />,
    error: <XCircle className="text-red-500" size={20} />,
  };

  return (
    <ChamferCard
      chamferSize="sm"
      className={cn("pointer-events-auto flex w-full max-w-sm overflow-hidden bg-panels border-l-4 p-4 shadow-lg",
        variant === 'error' ? 'border-l-red-500' : 'border-l-accent',
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3 w-full">
        <div className="shrink-0 mt-0.5">
          {icons[variant]}
        </div>
        <div className="flex-1 pt-0.5 min-w-0">
          <p className="text-sm font-bold text-text truncate">{title}</p>
          {description && (
            <p className="mt-1 text-sm text-muted line-clamp-2">{description}</p>
          )}
        </div>
        <button
          onClick={() => onClose(id)}
          className="shrink-0 ml-4 text-muted hover:text-text transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </ChamferCard>
  );
}
