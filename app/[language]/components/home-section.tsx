import { LocationIcon, DownloadIcon } from "../../../icons";
import { links } from "@/config";
import Carousel from "./carousel";
import { Translation } from "@/language/en";

export default function HomeSection({ translation }: { translation: Translation }) {
	return (
		<section id="home" className="snap-start h-[100dvh] flex flex-col relative z-10 p-4 pt-24">
			<main className="flex flex-1 flex-col items-center justify-center text-center">
				<p className="text-gray-300 tracking-widest font-semibold mb-2 text-sm md:text-base">
					<span className="inline-flex items-center gap-1">
						<LocationIcon className="h-4 w-4 text-gray-400" />
						{translation.home.hero.location}
					</span>
				</p>
				<h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-white to-emerald-300 text-transparent bg-clip-text mb-4">
					{translation.home.hero.title}
				</h1>
				<p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base md:text-lg px-4">{translation.home.hero.description}</p>
				<div className="flex gap-4 justify-center flex-col md:flex-row pt-20">
					<a
						href="#projects"
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
						<DownloadIcon className="h-5 w-5 text-gray-400" />
					</a>
				</div>
			</main>
			<Carousel />
		</section>
	);
}
