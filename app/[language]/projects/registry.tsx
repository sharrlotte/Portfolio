"use client";

import { LoaderIcon } from "@/icons";
import dynamic from "next/dynamic";
import { Translation } from "@/language/en";

type ProjectComponent = React.ComponentType<{ translation: Translation }>;

export const projectRegistry: Record<string, ProjectComponent> = {
	"mindustry-tool": dynamic(() => import("./mindustry-tool"), {
		ssr: false,
		loading: () => <LoaderIcon />,
	}),
};
