import Image from "next/image";
import { deviconBase } from "@/data/site";

export function TechIcon({ path, name }) {
  const src = `${deviconBase}/${path}`;

  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-surface/60">
      <Image
        src={src}
        alt=""
        width={22}
        height={22}
        className="h-[22px] w-[22px] object-contain"
        aria-hidden
      />
      <span className="sr-only">{name}</span>
    </span>
  );
}
