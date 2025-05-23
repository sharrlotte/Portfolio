import NavBar from "@/app/[language]/nav-bar";
import { getTranslation } from "@/app/action";
import { Language, links } from "@/config";
import Carousel from "./carousel";
import Background from "@/app/[language]/background";
import { MailIcon } from "lucide-react";

export default async function Home({ params }: { params: Promise<{ language: Language }> }) {
	const { language } = await params;
	const translation = await getTranslation(language);

	return (
		<div className="relative min-h-screen overflow-x-hidden overflow-y-auto flex flex-col text-sm md:text-base p-4">
			<Background />
			<NavBar language={language} />
			<main className="flex flex-1 flex-col items-center justify-center mt-12 md:mt-24 text-center relative z-10">
				<p className="text-gray-300 tracking-widest font-semibold mb-2 text-sm md:text-base">
					<span className="inline-flex items-center gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						{translation.home.hero.location}
					</span>
				</p>
				<h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-white to-emerald-300 text-transparent bg-clip-text mb-4">
					{translation.home.hero.title}
				</h1>
				<p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base md:text-lg px-4">{translation.home.hero.description}</p>
				<div className="flex gap-4 justify-center flex-col md:flex-row pt-20">
					<a
						href="/projects"
						className="hover:bg-white text-white font-semibold py-3 px-7 rounded-full flex items-center justify-center gap-2 transition shadow-md [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border"
					>
						{translation.home.button.seeProjects}
						<span className="ml-1">➔</span>
					</a>
					<a
						href={links.cv}
						download
						className="border border-gray-400 hover:border-white text-white font-semibold py-3 px-7 rounded-full flex items-center gap-2 transition"
					>
						{translation.home.button.downloadCv}
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
							/>
						</svg>
					</a>
				</div>
			</main>
			<Carousel />
			<footer className="relative z-10 flex justify-center gap-8 pb-8 mt-auto">
				<FooterLink href={`mailto:${links.email}`}>
					<MailIcon size={24} />
				</FooterLink>
				<FooterLink href={links.github}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" />
					</svg>
				</FooterLink>
				<FooterLink href={links.linkedin}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.003 3.604 4.609v5.587z" />
					</svg>
				</FooterLink>
			</footer>
		</div>
	);
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a href={href} className="text-white/80 hover:text-white transition">
			{children}
		</a>
	);
}
