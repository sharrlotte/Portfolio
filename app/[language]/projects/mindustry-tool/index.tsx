"use client";

import { Project } from "@/config";
import { ProjectShell } from "../project-shell";

const capabilities = [
	"Resource calculators for planning factory output before committing to a build.",
	"Workflow-oriented helpers that reduce repetitive in-game lookup and estimation work.",
	"Fast, focused interactions designed to keep the tool useful while you are actively playing.",
];

const highlights = [
	"Organizes multiple utility flows into one cohesive interface instead of separate one-off tools.",
	"Uses a modern React and Next.js stack to keep interactions smooth even as features grow.",
	"Ships as a public web app so players can access it instantly without installation friction.",
];

export default function MindustryToolProject({ project }: { project: Project }) {
	return (
		<ProjectShell project={project} eyebrow="Featured Project">
			<div className="grid gap-4 md:grid-cols-2">
				<div className="rounded-2xl border border-white/10 bg-black/10 p-5">
					<h3 className="text-lg font-semibold text-white">What it delivers</h3>
					<ul className="mt-4 space-y-3 text-sm text-slate-300 md:text-base">
						{capabilities.map((capability) => (
							<li key={capability} className="flex gap-3">
								<span className="mt-2 size-2 shrink-0 rounded-full bg-emerald-300" />
								<span>{capability}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="rounded-2xl border border-white/10 bg-black/10 p-5">
					<h3 className="text-lg font-semibold text-white">Why it is separated</h3>
					<ul className="mt-4 space-y-3 text-sm text-slate-300 md:text-base">
						{highlights.map((highlight) => (
							<li key={highlight} className="flex gap-3">
								<span className="mt-2 size-2 shrink-0 rounded-full bg-sky-300" />
								<span>{highlight}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</ProjectShell>
	);
}
