"use client";

import { projects } from "@/config";
import { useEffect, useRef, useState } from "react";
import { ProjectLoadingSpinner } from "./projects/project-shell";
import { projectRegistry } from "./projects/registry";

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
		<section ref={sectionRef} id="projects" className="snap-start min-h-[100dvh] relative z-10 p-4 pt-24 flex flex-col justify-center">
			<div className="mx-auto max-w-5xl w-full">
				<div className="mb-8 space-y-3 text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">Selected Work</p>
					<h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
						Each project lives in its own module and only loads after this section enters the viewport.
					</p>
				</div>
				<div className="flex flex-col gap-6 items-center">
					{projects.map((project) => {
						if (!hasEnteredViewport) {
							return <ProjectLoadingSpinner key={project.slug} name={project.name} />;
						}

						const ProjectComponent = projectRegistry[project.slug];

						return <ProjectComponent key={project.slug} project={project} />;
					})}
				</div>
			</div>
		</section>
	);
}
