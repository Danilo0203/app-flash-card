import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export const TitleWelcome = () => {
  const { data: session } = useSession();
  const pathNmae = usePathname();

  if (pathNmae.includes("perfil")) return null;

  if (pathNmae.includes("explorar")) {
    return <h2>Buscador</h2>;
  }

  return <h2 className="text-5xl font-extrabold">¡Te damos la bienvenida {session?.user?.name}!</h2>;
};
