"use client";

import { projectRegistry } from "@/app/[language]/projects/registry";
import { projects } from "@/config";
import { LoaderIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ProjectsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

	useEffect(() => {
		if (hasEnteredViewport || !sectionRef.current) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHasEnteredViewport(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, [hasEnteredViewport]);

	return (
		<>
			{projects.map((project, index) => {
				const ProjectComponent = projectRegistry[project.slug];

				return (
					<section
						key={project.slug}
						ref={index === 0 ? sectionRef : undefined}
						id={index === 0 ? "projects" : project.slug}
						className="snap-start min-h-screen relative z-10 flex flex-col justify-center"
					>
						{hasEnteredViewport ? (
							<ProjectComponent />
						) : (
							<div className="flex items-center justify-center w-full h-full">
								<LoaderIcon className="size-8 animate-spin" />
							</div>
						)}
					</section>
				);
			})}
		</>
	);
}
