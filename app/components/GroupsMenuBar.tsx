import { Button } from "./buttons/Button";

export const GroupsMenuBar = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-b-mainGold px-6">
      <h1 className="text-xl font-medium">Groups</h1>
      <Button>New group</Button>
    </div>
  );
};
