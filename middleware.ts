export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/dashboard/:path*", "/perfil/:path*", "/mazo/:path*", "/favoritos/:path*"],
};
