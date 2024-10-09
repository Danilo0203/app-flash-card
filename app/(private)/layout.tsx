import { SidebarApp } from "@/components/ui/SidebarApp";
import { TitlePage } from "@/components/ui/TitlePage";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarApp>
      <TitlePage />
      {children}
    </SidebarApp>
  );
}
