import { cn } from "@/lib/utils";
import DeleteIcon from "@/components/icons/DeleteIcon";
import { Button } from "@nextui-org/button";
import EditIcon from "@/components/icons/EditIcon";
import { usePathname } from "next/navigation";
import HeartIcon from "@/components/icons/HeartIcon";
import HeartIconFill from "@/components/icons/HeartIconFill";

export const CardFooter = ({
  className,
  children,
  favorito,
}: {
  className?: string;
  children: React.ReactNode;
  favorito?: boolean;
}) => {
  const pathname = usePathname();
  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      className={cn(
        "flex items-center justify-between border-t-1 pt-1 border-white/50 text-textElementDark/85",
        className
      )}
    >
      {children}
      <div>
        {pathname.includes("favoritos") || pathname.includes("explorar") ? (
          <Button isIconOnly variant="light" onClick={(e) => handleButton(e)}>
            {favorito ? (
              <HeartIconFill className="w-4 h-4 fill-red-600" />
            ) : (
              <HeartIcon className="w-4 h-4 fill-white" />
            )}
          </Button>
        ) : (
          <>
            <Button isIconOnly variant="light" color="danger" onClick={(e) => handleButton(e)}>
              <DeleteIcon className="w-4 h-4 text-textElementDark/85" />
            </Button>
            <Button isIconOnly variant="light" color="warning" onClick={(e) => handleButton(e)}>
              <EditIcon className="w-4 h-4 text-textElementDark/85" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
