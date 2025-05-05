import Background from "@/app/[language]/background";
import NavBar from "@/app/[language]/nav-bar";
import { getTranslation } from "@/app/action";
import { Language } from "@/config";

export default async function Page({ params }: { params: Promise<{ language: Language }> }) {
	const { language } = await params;
	const translation = await getTranslation(language);

	return (
		<>
			<NavBar language={language} />
			<Background />
		</>
	);
}
