"use client";
import { GroupPresentation } from "@/app/components/GroupPresentation";
import { Group } from "@/types/schema";

export const GroupsContainer = ({ groups }: { groups: Group[] }) => {
  return (
    <div className="py-6 px-20 overflow-auto max-h-[calc(100vh-10rem)]">
      {groups.map((group) => (
        <GroupPresentation
          key={group.id}
          groupId={group.id}
          groupName={group.name}
          groupPhoto={group.group_photo}
        />
      ))}
    </div>
  );
};
