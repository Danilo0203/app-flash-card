"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LineCards from "../icons/Logo";
import HomeIcon from "../icons/HomeIcon";
import CompassIcon from "../icons/CompassIcon";
import UserIcon from "../icons/UserIcon";
import { TitleWelcome } from "./TitleWelcome";
import HeartIconFill from "../icons/HeartIconFill";
import { ButtonLog } from "./button/ButtonLog";
import { useSession } from "next-auth/react";

export const SidebarApp = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession(); // Obtener la sesión

  const publicLink = [
    {
      label: "Explorar",
      href: "/explorar",
      icon: <CompassIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
  ];

  const protectedLinks = [
    {
      label: "Inicio",
      href: "/dashboard",
      icon: <HomeIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
    {
      label: "Favoritos",
      href: "/favoritos",
      icon: <HeartIconFill className="fill-neutral-700 dark:fill-neutral-200 size-8 flex-shrink-0" />,
    },
    {
      label: "Perfil",
      href: "/perfil",
      icon: <UserIcon className="text-neutral-700 dark:text-neutral-200 size-8 flex-shrink-0" />,
    },
  ];
  const links = session ? [...publicLink, ...protectedLinks] : publicLink;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row flex-1 min-h-dvh">
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
        <div className="p-2 md:pl-28 md:p-10 flex flex-col gap-2 flex-1 w-full  min-h-dvh dark:bg-contenedor-dark">
          <div className="flex justify-between items-center">
            <TitleWelcome />
            <ButtonLog />
          </div>
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
