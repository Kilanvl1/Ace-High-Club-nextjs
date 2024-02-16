import React from "react";
import Link from "next/link";
import { cn } from "@/utilities/styles/utils";

type HeaderLinkProps = {
  href: string;
  title: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClassNames?: string;
};

export const HeaderLink = ({
  href,
  title,
  Icon,
  iconClassNames,
}: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 text-lg font-medium leading-none text-gray-900 hover:underline"
    >
      <div className="flex items-center gap-x-2">
        {Icon && <Icon className={cn(iconClassNames)} />}
        {title}
      </div>
    </Link>
  );
};
