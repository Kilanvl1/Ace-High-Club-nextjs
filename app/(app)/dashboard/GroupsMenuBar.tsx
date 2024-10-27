"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import { GroupForm } from "@/app/components/form/GroupForm";

export const GroupsMenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-4 border-b border-b-mainGold px-6">
        <h1 className="text-xl font-medium">Groups</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Create new group</Button>
          </DialogTrigger>
          <DialogContent className="bg-black">
            <DialogHeader>
              <DialogTitle>Create a new group</DialogTitle>
              <DialogDescription>
                Add a group photo and name to create your new group.
              </DialogDescription>
            </DialogHeader>
            <GroupForm setIsOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
