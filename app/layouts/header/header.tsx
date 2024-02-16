import React from "react";
import { ColorChanginHeader } from "./ColorChanginHeader";
import ContainerNew from "@/app/components/ContainerNew";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { MobileMenuDialog } from "./MobileMenuDialog";
import { DesktopMenu } from "./DesktopMenu";
import { ListPageWithChildren } from "@/app/wagtail/nextjs";

type HeaderProps = {
  menuPages: ListPageWithChildren[];
};

const Header = ({ menuPages }: HeaderProps) => {
  return (
    <ColorChanginHeader>
      <ContainerNew as="nav" className="py-4 flex items-center justify-between">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Why does flex here change the height of the div */}
        <div className="flex lg:hidden">
          <MobileMenuDialog menuPages={menuPages} />
        </div>
        <DesktopMenu menuPages={menuPages} />
      </ContainerNew>
    </ColorChanginHeader>
  );
};

export default Header;
