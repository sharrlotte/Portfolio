"use client";

import { GithubIcon } from "@/app/[language]/components/icons";
import TechBadge from "@/app/[language]/components/tech-badge";
import { Project } from "@/config";

export function ProjectShell({ project, eyebrow, children }: { project: Project; eyebrow: string; children: React.ReactNode }) {
	return (
		<article className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-2xl shadow-black/20">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
					<div className="space-y-3">
						<p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">{eyebrow}</p>
						<div className="space-y-2">
							<h2 className="text-2xl font-semibold text-white md:text-3xl">{project.name}</h2>
							<p className="max-w-2xl text-sm text-slate-300 md:text-base">{project.summary}</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-3">
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/20"
						>
							Live Demo
						</a>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
						>
							<GithubIcon className="size-4" />
							Source
						</a>
					</div>
				</div>
				<div className="flex flex-wrap gap-3">
					{project.tech.map((tech) => (
						<TechBadge key={tech} tech={tech} />
					))}
				</div>
				{children}
			</div>
		</article>
	);
}

export function ProjectLoadingSpinner({ name }: { name: string }) {
	return (
		<div className="flex min-h-80 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
			<div className="flex flex-col items-center gap-4 text-center">
				<div className="size-12 animate-spin rounded-full border-4 border-white/10 border-t-emerald-300" />
				<p className="text-sm text-slate-400">Loading {name}...</p>
			</div>
		</div>
	);
}
