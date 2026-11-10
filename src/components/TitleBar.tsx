import React from "react";
import { cn } from "../lib/utils";
import { Minus, Square, X } from "lucide-react";
// Since this is standard React, we would normally use Tauri APIs here, but for layout we just mock the buttons
// import { Window } from "@tauri-apps/api/window";

interface TitleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function TitleBar({
  className,
  title = "TYXEN",
  ...props
}: TitleBarProps) {

  // Real implementation would call appWindow.minimize() etc.
  const handleMinimize = () => console.log("Minimize");
  const handleMaximize = () => console.log("Maximize");
  const handleClose = () => console.log("Close");

  return (
    <div
      data-tauri-drag-region
      className={cn("h-[30px] bg-ground flex items-center justify-between select-none px-4", className)}
      {...props}
    >
      <div className="flex items-center gap-2 pointer-events-none">
        {/* Placeholder logo/icon could go here */}
        <span className="text-xs font-bold tracking-widest text-muted">{title}</span>
      </div>

      <div className="flex items-center h-full">
        <button
          onClick={handleMinimize}
          className="inline-flex justify-center items-center h-full px-3 text-muted hover:bg-panels hover:text-text transition-colors duration-120"
        >
          <Minus size={14} />
        </button>
        <button
          onClick={handleMaximize}
          className="inline-flex justify-center items-center h-full px-3 text-muted hover:bg-panels hover:text-text transition-colors duration-120"
        >
          <Square size={12} strokeWidth={3} />
        </button>
        <button
          onClick={handleClose}
          className="inline-flex justify-center items-center h-full px-3 text-muted hover:bg-red-500 hover:text-white transition-colors duration-120"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
