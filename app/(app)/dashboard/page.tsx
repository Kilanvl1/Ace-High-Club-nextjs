import { GroupsContainer } from "@/app/components/GroupsContainer";
import { GroupsMenuBar } from "@/app/components/GroupsMenuBar";
import { getGroups } from "@/app/_services/groups";

export default async function DashboardPage() {
  const groups = (await getGroups()) as { id: string; name: string }[];
  return (
    <>
      <GroupsMenuBar />
      <div className="grow ">
        <GroupsContainer groups={groups} />
      </div>
    </>
  );
}
