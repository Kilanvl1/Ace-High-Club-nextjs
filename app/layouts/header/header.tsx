import React from "react";
import ContainerNew from "@/app/components/ContainerNew";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { MobileMenuDialog } from "./MobileMenuDialog";
import { DesktopMenu } from "./DesktopMenu";
import { ListPageWithChildren } from "@/app/wagtail/nextjs";
import { Button } from "@/app/components/buttons/Button";
import { HeaderLink } from "./HeaderLink";
import { cn } from "@/utilities/styles/utils";

type HeaderProps = {
  menuPages: ListPageWithChildren[];
};

const Header = ({ menuPages }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-[10px] z-10">
      <ContainerNew
        as="nav"
        className={cn(
          "py-4 flex items-center justify-between h-[var(--navigation-height)]"
        )}
      >
        <div>
          <Link href="/" className="lg:hover:text-mainGold">
            <Logo />
          </Link>
        </div>

        {/* Why does flex here change the height of the div */}
        <div className="flex lg:hidden">
          <MobileMenuDialog menuPages={menuPages} />
        </div>
        <DesktopMenu menuPages={menuPages} />
        <div className=" gap-x-4 hidden lg:flex">
          {/* <HeaderLink href="login" title="Login" /> */}
          <Button variant="secondary">Login</Button>
          <Button>Sign up</Button>
        </div>
      </ContainerNew>
    </header>
  );
};

export default Header;
