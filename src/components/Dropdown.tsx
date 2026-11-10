import React, { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { ChevronDown } from "lucide-react";

interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function Dropdown({
  className,
  value,
  options,
  onChange,
  ...props
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn("relative inline-block w-48 font-mono text-sm", className)} {...props}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-panels border-2 border-borders px-4 py-2 text-text transition-colors hover:border-accent focus:outline-none focus:border-accent clip-path-sm"
        style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}
      >
        <span>{value}</span>
        <ChevronDown size={16} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-20 mt-1 w-full border-2 border-borders bg-panels shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-muted hover:bg-borders hover:text-text transition-colors duration-120"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
