"use client";
import { usePathname } from "next/navigation";

export const TitlePage = () => {
  const pathname = usePathname();

  return (
    <div className="w-full pt-8 border-b-2 pb-2">
      <span className="pb-2 border-b-4">
        {pathname === "/" ? "Mis Mazos" : pathname.slice(1).replace(/-/g, " ").toLocaleUpperCase()}
      </span>
    </div>
  );
};
