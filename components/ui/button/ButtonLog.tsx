"use client";
import { Button } from "@nextui-org/button";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

export const ButtonLog = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return (
      <Button className="self-end" isLoading>
        Cargando...
      </Button>
    );
  }

  if (status === "authenticated") {
    return (
      <Button className="self-end" color="secondary" onPress={() => signOut()}>
        Cerrar Sesión
      </Button>
    );
  }

  return (
    <Button className="self-end" color="secondary" onClick={() => signIn()}>
      Iniciar Sesión
    </Button>
  );
};
