import React from "react";
import { ColorChanginHeader } from "./ColorChanginHeader";
import ContainerNew from "@/app/components/ContainerNew";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";

const Header = () => {
  return (
    <ColorChanginHeader>
      <ContainerNew as="nav" className="py-4">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </ContainerNew>
    </ColorChanginHeader>
  );
};

export default Header;
