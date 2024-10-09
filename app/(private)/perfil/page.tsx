"use client";
import EditIcon from "@/components/icons/EditIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import PadlockIcon from "@/components/icons/PadLockIcon";
import SaveIcon from "@/components/icons/SaveIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LabelType = "nombres" | "apellidos" | "correo" | "dpi";

const datos: { label: LabelType; text: string; dpi: string }[] = [
  {
    label: "nombres",
    text: "Danilo",
    dpi: "123456789",
  },
  {
    label: "apellidos",
    text: "Gonzalez",
    dpi: "132456789",
  },
  {
    label: "correo",
    text: "danilo@correo.com",
    dpi: "987654321",
  },
  {
    label: "dpi",
    text: "123456789",
    dpi: "561234789",
  },
];

export default function PerfilPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      nombres: datos[0].text,
      apellidos: datos[1].text,
      correo: datos[2].text,
      dpi: datos[3].text,
    },
  });

  const [editProfile, setEditProfile] = useState(true);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-5 py-5 items-start">
      {editProfile ? (
        <Button
          variant="solid"
          color="default"
          startContent={<EditIcon />}
          className="self-end"
          onPress={() => setEditProfile(!editProfile)}
          form="form-profile"
          type="submit"
        >
          Editar Perfil
        </Button>
      ) : (
        <Button
          variant="solid"
          color="success"
          startContent={<SaveIcon />}
          className="self-end"
          onPress={() => setEditProfile(!editProfile)}
        >
          Guardar Cambios
        </Button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} id="form-profile" className="w-full flex flex-col gap-5">
        {datos.map((dato) => (
          <Input
            key={dato.dpi}
            label={dato.label.toLocaleUpperCase()}
            radius="sm"
            labelPlacement="outside"
            variant="bordered"
            isDisabled={editProfile}
            {...register(dato.label, {
              required: true,
            })}
          />
        ))}
      </form>
      <Button variant="solid" color="default" startContent={<PadlockIcon />}>
        Cambiar Contraseña
      </Button>
      <Button variant="solid" color="default" startContent={<LogoutIcon />}>
        Cerrar Sesión
      </Button>
    </div>
  );
}
