import { cn } from "@/lib/utils";

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};
