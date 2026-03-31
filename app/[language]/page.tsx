import NavBar from "@/app/[language]/nav-bar";
import { getTranslation } from "@/app/action";
import { Language, links, projects } from "@/config";
import Carousel from "./carousel";
import Background from "@/app/[language]/background";
import {
	LocationIcon,
	DownloadIcon,
	GithubIcon,
	LinkedInIcon,
	MailIcon,
	PhoneIcon,
	BirthdayCakeIcon,
	PhoneAltIcon,
	MapMarkerAltIcon,
	UserIcon,
	UniversityIcon,
	BullseyeIcon,
} from "./icons";

export default async function Home({ params }: { params: Promise<{ language: string }> }) {
	const { language } = await params;
	const lang = language as Language;
	const translation = await getTranslation(lang);

	return (
		<div
			id="scroll-container"
			className="relative h-[100dvh] overflow-x-hidden overflow-y-auto snap-y snap-mandatory text-sm md:text-base scroll-smooth"
		>
			<Background />
			<NavBar language={lang} />

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

			<section id="info" className="snap-start min-h-[100dvh] relative z-10 p-4 pt-24 flex flex-col justify-center">
				<div className="max-w-2xl w-full mx-auto p-6 rounded-xl shadow-lg space-y-10 border backdrop-blur-sm">
					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b pb-2">
							<UserIcon className="text-gray-400" /> {translation.tabs.info}
						</h2>
						<span className="text-xl">Nguyễn Nhơn Hậu</span>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex items-center gap-2 text-gray-100">
								<BirthdayCakeIcon className="text-gray-400" />
								<span>
									<span className="font-semibold text-gray-300">{translation.info.birthday}:</span> 25/05/2003
								</span>
							</div>
							<div className="flex items-center gap-2 text-gray-100">
								<UserIcon className="text-gray-400" />
								<span>
									<span className="font-semibold text-gray-300">{translation.info.sex}:</span> Nam
								</span>
							</div>
							<div className="flex items-center gap-2 text-gray-100">
								<PhoneAltIcon className="text-gray-400" />
								<span>
									<span className="font-semibold text-gray-300">{translation.info.phone}:</span> {links.phone}
								</span>
							</div>
							<div className="flex items-center gap-2 text-gray-100">
								<MapMarkerAltIcon className="text-gray-400" />
								<span>
									<span className="font-semibold text-gray-300">{translation.info.address}:</span> Phước Long A, Thủ Đức, Hồ Chí
									Minh
								</span>
							</div>
						</div>
					</section>
					<section className="space-y-2">
						<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
							<BullseyeIcon className="text-gray-400" /> {translation.info.careerObjective}
						</h2>
						<p className="text-gray-300 text-base bg-[#23262F]/20 rounded-lg p-4">{translation.info.careerObjectiveDescription}</p>
					</section>
				</div>
			</section>
            
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

			<section id="contact" className="snap-start min-h-[100dvh] flex flex-col relative z-10 p-4 pt-24">
				<div className="max-w-2xl w-full m-auto p-6 rounded-xl shadow-lg space-y-6 border backdrop-blur-sm text-white">
					<h2 className="text-2xl font-semibold border-b pb-2">{translation.tabs.contact}</h2>
					<ContactLink href={`mailto:${links.email}`}>
						<MailIcon className="w-6 h-6 text-gray-400" /> Email: {links.email}
					</ContactLink>
					<ContactLink href={"tel:" + links.phone}>
						<PhoneIcon className="w-6 h-6 text-gray-400" />
						Phone: {links.phone}
					</ContactLink>
					<ContactLink href={links.github}>
						<GithubIcon className="w-6 h-6 text-gray-400" />
						Github: {links.github}
					</ContactLink>
					<ContactLink href={links.linkedin}>
						<LinkedInIcon className="w-6 h-6 text-gray-400" />
						LinkedIn: <span className="line-clamp-1 text-nowrap overflow-hidden">{links.linkedin}</span>
					</ContactLink>
				</div>

				<footer className="mt-auto pb-8 flex justify-center gap-8">
					<FooterLink href={`mailto:${links.email}`}>
						<MailIcon className="w-6 h-6 text-gray-400" />
					</FooterLink>
					<FooterLink href={links.github}>
						<GithubIcon className="w-6 h-6 text-gray-400" />
					</FooterLink>
					<FooterLink href={links.linkedin}>
						<LinkedInIcon className="w-6 h-6 text-gray-400" />
					</FooterLink>
				</footer>
			</section>
		</div>
	);
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a href={href} className="flex gap-1 items-center">
			{children}
		</a>
	);
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a href={href} className="text-white/80 hover:text-white transition">
			{children}
		</a>
	);
}
