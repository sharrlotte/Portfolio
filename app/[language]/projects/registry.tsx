"use client";

import { LoaderIcon } from "@/icons";
import dynamic from "next/dynamic";

type ProjectComponent = React.ComponentType<{}>;

export const projectRegistry: Record<string, ProjectComponent> = {
	"mindustry-tool": dynamic(() => import("./mindustry-tool"), {
		ssr: false,
		loading: () => <LoaderIcon />,
	}),
};
