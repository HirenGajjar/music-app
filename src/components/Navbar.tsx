"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href="/">Home</Link>
          <Link href="/courses">
            <MenuItem active={active} setActive={setActive} item="Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/all">All Courses</HoveredLink>
                <HoveredLink href="/music-theory">Music Theory</HoveredLink>
                <HoveredLink href="/composition">Composition</HoveredLink>
                <HoveredLink href="/song-writing">Song Writing</HoveredLink>
                <HoveredLink href="/music-production">
                  Music Production
                </HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href="/contact">Reach us</Link>
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
