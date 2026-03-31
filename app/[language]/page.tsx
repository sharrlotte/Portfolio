import NavBar from "@/app/[language]/components/nav-bar";
import { getTranslation } from "@/app/action";
import { Language } from "@/config";
import Background from "@/app/[language]/components/background";
import HomeSection from "./components/home-section";
import InfoSection from "./components/info-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";

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
