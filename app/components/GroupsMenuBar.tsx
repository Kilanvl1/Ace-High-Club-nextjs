import { Button } from "./buttons/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
export const GroupsMenuBar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 border-b border-b-mainGold px-6">
        <h1 className="text-xl font-medium">Groups</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>New group</Button>
          </DialogTrigger>
          <DialogContent className="bg-blc">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription className="text-sm text-red-600">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
