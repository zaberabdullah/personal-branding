"use client";

import { Navbar } from "@/components/Navbar";
import { MobileDrawer } from "@/components/MobileDrawer";

const DRAWER_ID = "portfolio-drawer";

export function AppShell({ children }) {
  return (
    <div className="drawer">
      <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-dvh flex-col">
        <Navbar drawerId={DRAWER_ID} />
        {children}
      </div>
      <MobileDrawer drawerId={DRAWER_ID} />
    </div>
  );
}
