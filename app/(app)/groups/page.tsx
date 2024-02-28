import ContainerNew from "@/app/components/ContainerNew";
import { GroupsContainer } from "@/app/components/GroupsContainer";
import { GroupsMenuBar } from "@/app/components/GroupsMenuBar";
export default function GroupsPage() {
  return (
    <>
      <GroupsMenuBar />
      <div className="grow overflow-scroll">
        <GroupsContainer />
      </div>
    </>
  );
}
