import { GroupsContainer } from "./GroupsContainer";
import { GroupsMenuBar } from "./GroupsMenuBar";
import { getGroups } from "@/app/_services/groups";

export default async function DashboardPage() {
  const groups = await getGroups();
  return (
    <>
      <GroupsMenuBar />
      <div className="grow ">
        <GroupsContainer groups={groups} />
      </div>
    </>
  );
}
