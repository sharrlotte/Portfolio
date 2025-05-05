import Background from "@/app/[language]/background";
import NavBar from "@/app/[language]/nav-bar";
import { getTranslation } from "@/app/action";
import { Language, projects } from "@/config";

export default async function Page({ params }: { params: Promise<{ language: Language }> }) {
	const { language } = await params;
	const translation = await getTranslation(language);

	return (
		<div className="relative min-h-screen overflow-x-hidden overflow-y-auto flex flex-col text-sm md:text-base">
			<NavBar language={language} />
			<Background />
			<div className="mx-auto max-w-lg">
				{/* <h1 className="text-2xl font-semibold">{translation.tabs.projects}</h1> */}
				<div className="flex flex-col gap-4 items-center mt-10">
					{projects.map((project, index) => (
						<div key={index} className="border w-full p-4 rounded-lg backdrop-blur-sm">
							<h2 className="text-xl">{project.name}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
