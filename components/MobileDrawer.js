"use client";

import { Button } from "@heroui/react";
import { navLinks } from "@/data/site";
import { scrollToId } from "@/lib/utils";

export function MobileDrawer({ drawerId }) {
  const close = () => {
    const input = document.getElementById(drawerId);
    if (input) input.checked = false;
  };

  const go = (id) => (e) => {
    e.preventDefault();
    close();
    scrollToId(id);
  };

  return (
    <div className="drawer-side z-50">
      <label htmlFor={drawerId} className="drawer-overlay" aria-hidden />
      <aside className="min-h-full w-72 max-w-[85vw] border-r border-border/60 bg-base-100 p-6 text-base-content">
        <div className="mb-6 text-xs font-medium uppercase tracking-wide text-base-content/60">
          Navigate
        </div>
        <ul className="menu rounded-box bg-base-100 p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={go(link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button
            variant="secondary"
            fullWidth
            onPress={() => {
              close();
              scrollToId("contact");
            }}
          >
            Let&apos;s talk
          </Button>
        </div>
      </aside>
    </div>
  );
}
