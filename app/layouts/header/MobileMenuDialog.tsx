"use client";
import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { ListPageWithChildren } from "@/app/wagtail/nextjs";
import { HeaderLink } from "./HeaderLink";

type MobileMenuDialogProps = {
  menuPages: ListPageWithChildren[];
};

export const MobileMenuDialog = ({ menuPages }: MobileMenuDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <Bars3Icon className="h-6 w-6" />
      </button>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-gold-400 px-6 py-4 sm:max-w-sm border-l-white border-l">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo width={32} height={32} />
            </Link>
            <button type="button" onClick={() => setOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col py-6 gap-y-4 font-semibold">
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
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
