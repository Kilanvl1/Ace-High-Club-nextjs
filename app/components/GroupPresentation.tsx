import { cn } from "@/utilities/styles/utils";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteGroup } from "@/app/_services/groups";
import Image from "next/image";
import placeholder from "@/public/image_placeholder.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";

type GroupPresentationProps = {
  className?: string;
  groupId: number;
  groupName: string;
  groupPhoto: string | undefined;
};

export const GroupPresentation = ({
  className,
  groupId,
  groupName,
  groupPhoto,
}: GroupPresentationProps) => {
  const router = useRouter();
  const handleGroupDelete = async () => {
    await deleteGroup(groupId);
    router.refresh();
  };

  return (
    <Link href={`/group/${groupId}`}>
      <div
        className={cn(
          "bg-brownColor rounded-lg py-4 px-6 flex items-center mb-4 justify-between cursor-pointer"
        )}
      >
        <div className="flex gap-4">
          <div className="rounded-md overflow-hidden w-16 h-16 relative">
            <Image
              src={groupPhoto ? groupPhoto : placeholder}
              alt={groupName}
              fill
            />
          </div>

          <p className="font-bold">{groupName}</p>
        </div>

        <TrashIcon
          className="h-6 w-6 cursor-pointer hover:text-red-600 transition-colors duration-400 ease-in-out"
          onClick={handleGroupDelete}
        />
      </div>
    </Link>
  );
};
