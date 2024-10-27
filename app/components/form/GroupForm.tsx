"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Camera, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createGroup } from "@/app/_services/groups";
import { useRouter } from "next/navigation";

export type GroupFormProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const GroupForm = ({ setIsOpen }: GroupFormProps) => {
  const router = useRouter();
  const [groupName, setGroupName] = useState<string>("");
  // Contains a data URL representing the file's data
  const [groupPhotoDisplay, setGroupPhotoDisplay] = useState<string | null>(
    null
  );
  // Contains the actual File object
  const [groupPhotoFile, setGroupPhotoFile] = useState<File | null>(null);

  const handlePhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setGroupPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setGroupPhotoDisplay(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createGroup({ name: groupName, group_photo: groupPhotoFile });
      setIsOpen(false);
      setGroupName("");
      setGroupPhotoDisplay(null);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemovePhoto = () => {
    setGroupPhotoDisplay(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Label htmlFor="group-photo" className="cursor-pointer">
              <Avatar className="h-24 w-24">
                {groupPhotoDisplay ? (
                  <AvatarImage src={groupPhotoDisplay} alt="Group photo" />
                ) : (
                  <AvatarFallback>
                    <Camera className="h-12 w-12 text-muted-foreground" />
                  </AvatarFallback>
                )}
              </Avatar>
            </Label>
            {groupPhotoDisplay && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                onClick={handleRemovePhoto}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove photo</span>
              </Button>
            )}
          </div>
          <Input
            id="group-photo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
          <Label
            htmlFor="group-photo"
            className="cursor-pointer text-sm text-muted-foreground"
          >
            Click to {groupPhotoDisplay ? "change" : "add"} group photo
          </Label>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="group-name" className="text-right">
            Group Name
          </Label>
          <Input
            id="group-name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="col-span-3"
            placeholder="Enter group name"
          />
        </div>
      </div>

      <Button type="submit" disabled={!groupName.trim()}>
        Create Group
      </Button>
    </form>
  );
};
