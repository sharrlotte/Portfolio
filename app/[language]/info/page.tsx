import { FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaUser, FaUniversity, FaBullseye } from "react-icons/fa";
import { getTranslation } from "@/app/action";
import { Language, links } from "@/config";
import NavBar from "@/app/[language]/nav-bar";
import Background from "@/app/[language]/background";

export default async function Page({ params }: { params: Promise<{ language: Language }> }) {
	const { language } = await params;
	const translation = await getTranslation(language);

	return (
		<>
			<NavBar language={language} />
			<Background />
			<div className="max-w-2xl m-auto p-6 rounded-xl shadow-lg mt-8 space-y-10 border backdrop-blur-sm">
				<section className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b pb-2">
						<FaUser className="text-gray-400" /> {translation.tabs.info}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="flex items-center gap-2 text-gray-100">
							<FaBirthdayCake className="text-gray-400" />
							<span>
								<span className="font-semibold text-gray-300">{translation.info.birthday}:</span> 25/05/2003
							</span>
						</div>
						<div className="flex items-center gap-2 text-gray-100">
							<FaUser className="text-gray-400" />
							<span>
								<span className="font-semibold text-gray-300">{translation.info.sex}:</span> Nam
							</span>
						</div>
						<div className="flex items-center gap-2 text-gray-100">
							<FaPhone className="text-gray-400" />
							<span>
								<span className="font-semibold text-gray-300">{translation.info.phone}:</span> {links.phone}
							</span>
						</div>
						<div className="flex items-center gap-2 text-gray-100">
							<FaMapMarkerAlt className="text-gray-400" />
							<span>
								<span className="font-semibold text-gray-300">{translation.info.address}:</span> Phước Long A, Thủ Đức, Hồ Chí Minh
							</span>
						</div>
					</div>
				</section>
				<section className="space-y-2">
					<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
						<FaBullseye className="text-gray-400" /> {translation.info.careerObjective}
					</h2>
					<p className="text-gray-300 text-base bg-[#23262F]/20 rounded-lg p-4">{translation.info.careerObjectiveDescription}</p>
				</section>
				<section className="space-y-2">
					<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
						<FaUniversity className="text-gray-400" /> {translation.info.education}
					</h2>
					<div className="bg-[#23262F]/20 rounded-lg p-4">
						<div className="font-semibold text-gray-100">{translation.info.university.period}</div>
						<div className="text-gray-100">{translation.info.university.name}</div>
						<div className="text-gray-400">{translation.info.university.major}</div>
						<div className="text-gray-100">
							{translation.info.university.gpa}: <span className="font-bold text-green-400">3.54</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
