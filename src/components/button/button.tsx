import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};
export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `flex gap-2 items-center justify-center px-4 bg-white/20 text-lg w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 bg-blur state-effects ${className}`
      )}
    >
      {children}
    </button>
  );
}
