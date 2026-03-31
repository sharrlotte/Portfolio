import { projects } from "@/config";

export default function ProjectsSection() {
	return (
		<section id="projects" className="snap-start min-h-[100dvh] relative z-10 p-4 pt-24 flex flex-col justify-center">
			<div className="mx-auto max-w-lg w-full">
				<div className="flex flex-col gap-4 items-center">
					{projects.map((project, index) => (
						<div key={index} className="border w-full p-4 rounded-lg backdrop-blur-sm">
							<h2 className="text-xl">{project.name}</h2>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
