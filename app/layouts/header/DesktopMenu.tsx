"use client";

import { Popover } from "@headlessui/react";
import { ListPageWithChildren } from "@/app/wagtail/nextjs";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { HeaderLink } from "./HeaderLink";

type DesktopMenuProps = {
  menuPages: ListPageWithChildren[];
};

export const DesktopMenu = ({ menuPages }: DesktopMenuProps) => {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12 font-medium">
      {menuPages.map((page) => {
        let icon = null;
        if (page.title === "Profile") icon = UserCircleIcon;
        return (
          <HeaderLink
            key={page.id}
            href={page.meta.html_url}
            title={page.title}
            Icon={icon}
            iconClassNames="h-6 w-6"
          />
        );
      })}
    </Popover.Group>
  );
};
