import { cn } from "@/lib/utils";

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h4 className={cn("text-textElementLight text-2xl dark:text-textElementDark font-bold tracking-wide ", className)}>
      {children}
    </h4>
  );
};