import { cn } from "@/lib/utils";

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-cardElementLight  dark:bg-cardElementDark border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 flex flex-col justify-between h-full gap-y-3">{children}</div>
      </div>
    </div>
  );
};
