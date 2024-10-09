"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card } from "./Cards/CardWrapper";
import { CardTitle } from "./Cards/CardTitle";
import { CardDescription } from "./Cards/CardDescription";
import { CardFooter } from "./Cards/CardFooter";

export const CardMazos = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    footer: string;
    favorito?: boolean;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  pt-5", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="gap-y-2 flex-col flex">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <CardFooter favorito={item.favorito}>{item.footer}</CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
