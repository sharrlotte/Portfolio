import NavBar from "@/app/[language]/nav-bar";
import { getTranslation } from "@/app/action";
import { Language } from "@/config";
import Background from "@/app/[language]/background";
import HomeSection from "./home-section";
import InfoSection from "./info-section";
import ProjectsSection from "./projects-section";
import ContactSection from "./contact-section";

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
			<HomeSection translation={translation} />
			<InfoSection translation={translation} />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
