"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LineCards from "../icons/Logo";
import HomeIcon from "../icons/HomeIcon";
import HeartIcon from "../icons/HeartIcon";
import CompassIcon from "../icons/CompassIcon";
import UserIcon from "../icons/UserIcon";
import { TitleWelcome } from "./TitleWelcome";

export const SidebarApp = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      label: "Inicio",
      href: "/",
      icon: <HomeIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
    {
      label: "Favoritos",
      href: "/favoritos",
      icon: <HeartIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
    {
      label: "Explorar",
      href: "/explorar",
      icon: <CompassIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
    {
      label: "Perfil",
      href: "/perfil",
      icon: <UserIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-[1] overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={`${idx}-${link.label}`} link={link} />
              ))}
            </div>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 flex flex-col gap-2 flex-1 w-full h-full dark:bg-contenedor-dark">
          <TitleWelcome />
          {children}
        </div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <LineCards className="size-8 dark:text-white text-dark" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Flash Cards
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <LineCards className="size-8 dark:text-white text-dark" />
    </Link>
  );
};
