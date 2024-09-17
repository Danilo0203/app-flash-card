"use client";
import { SidebarApp } from "@/components/ui/SidebarApp";
import { TitlePage } from "@/components/ui/TitlePage";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <SidebarApp>
        <TitlePage />
      </SidebarApp>
    </main>
  );
}
