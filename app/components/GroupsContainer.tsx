"use client";
import { GroupPresentation } from "./GroupPresentation";

export const GroupsContainer = ({
  groups,
}: {
  groups: { id: string; name: string }[];
}) => {
  return (
    <div className="py-6 px-20 overflow-auto">
      {groups.map((group) => (
        <GroupPresentation key={group.id} groupName={group.name} />
      ))}
    </div>
  );
};
