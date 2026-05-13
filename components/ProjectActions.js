"use client";

import { Button } from "@heroui/react";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectActions({ liveUrl, repoUrl }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Button variant="primary" onPress={() => window.open(liveUrl, "_blank", "noopener,noreferrer")}>
        Live demo
        <ArrowUpRight className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        onPress={() => window.open(repoUrl, "_blank", "noopener,noreferrer")}
      >
        <Github className="h-4 w-4" />
        Repository
      </Button>
    </div>
  );
}
