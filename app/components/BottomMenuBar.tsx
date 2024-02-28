import { HomeIcon, ListBulletIcon, UserIcon } from "@heroicons/react/24/solid";
import { HeaderLink } from "../layouts/header/HeaderLink";

export const BottomMenuBar = () => {
  return (
    <nav className="flex justify-between items-center py-2 sticky bottom-0 left-0">
      <HeaderLink
        href="/"
        title="home"
        Icon={HomeIcon}
        iconClassNames="h-6 w-6"
      />
      <HeaderLink
        href="/groups"
        title="ListBulletIcon"
        Icon={ListBulletIcon}
        iconClassNames="h-6 w-6"
      />
      <HeaderLink
        href="/profile"
        title="profile"
        Icon={UserIcon}
        iconClassNames="h-6 w-6"
      />
    </nav>
  );
};
