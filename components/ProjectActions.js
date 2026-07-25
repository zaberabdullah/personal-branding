"use client";

import { Button } from "@heroui/react";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectActions({ liveUrl, repoUrl, serverRepoUrl }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button 
        variant="primary" 
        onPress={() => window.open(liveUrl, "_blank", "noopener,noreferrer")}
      >
        Live demo
        <ArrowUpRight className="h-4 w-4" />
      </Button>

      {repoUrl && (
        <Button
          variant="secondary"
          onPress={() => window.open(repoUrl, "_blank", "noopener,noreferrer")}
        >
          <Github className="h-4 w-4" />
          {serverRepoUrl ? "Client Repo" : "Repository"}
        </Button>
      )}

      {serverRepoUrl && (
        <Button
          variant="secondary"
          onPress={() => window.open(serverRepoUrl, "_blank", "noopener,noreferrer")}
        >
          <Github className="h-4 w-4" />
          Server Repo
        </Button>
      )}
    </div>
  );
}