"use client";

import { Project, ProjectSlug } from "@/config";
import dynamic from "next/dynamic";
import { ProjectLoadingSpinner } from "./project-shell";

type ProjectComponent = React.ComponentType<{ project: Project }>;

export const projectRegistry: Record<ProjectSlug, ProjectComponent> = {
	"mindustry-tool": dynamic(() => import("./mindustry-tool"), {
		ssr: false,
		loading: () => <ProjectLoadingSpinner name="MindustryTool" />,
	}),
};
