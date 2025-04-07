import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500",
        className
      )}>
      {children}
    </Link>
  );
}

export default NavLink;
