import { cn } from "@/utilities/styles/utils";
import { TrashIcon } from "@heroicons/react/24/solid";

type GroupPresentationProps = {
  className?: string;
  groupName: string;
};

export const GroupPresentation = ({
  className,
  groupName,
}: GroupPresentationProps) => {
  return (
    <div
      className={cn("bg-brownColor rounded-3xl py-4 px-6 flex items-center")}
    >
      <div className="grow border border-mainGold p-3 rounded-3xl mr-6 text-center transition-colors duration-700 hover:bg-mainGold ease-in-out">
        {groupName}
      </div>
      <TrashIcon className="h-6 w-6" />
    </div>
  );
};
