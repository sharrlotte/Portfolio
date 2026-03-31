import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon, BirthdayCakeIcon, MapMarkerAltIcon, UserIcon, BullseyeIcon } from "../../../icons";
import { links } from "@/config";
import { Translation } from "@/language/en";

export default function InfoSection({ translation }: { translation: Translation }) {
	return (
		<section
			id="info"
			className="snap-start min-h-[100dvh] relative z-10 p-4 pt-24 flex flex-col justify-center"
		>
			<div className="max-w-3xl w-full mx-auto p-6 shadow-lg space-y-10 backdrop-blur-sm border border-white/10 rounded-xl">
				<section className="flex flex-col gap-4">
					<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b pb-2">
						<span className="text-2xl font-bold">Nguyễn Nhơn Hậu</span>
					</h2>
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
							<MapMarkerAltIcon className="text-gray-400" />
							<span>
								<span className="font-semibold text-gray-300">{translation.info.address}:</span> Phước Long A, Thủ Đức, Hồ Chí Minh
							</span>
						</div>
					</div>
				</section>
				<section className="space-y-2">
					<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
						<BullseyeIcon className="text-gray-400" /> {translation.info.careerObjective}
					</h2>
					<p className="text-gray-300 text-base">{translation.info.careerObjectiveDescription}</p>
				</section>
				<section className="space-y-4 text-gray-100">
					<h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-[#23262F] pb-2">
						<MailIcon className="text-gray-400" /> {translation.tabs.contact}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<ContactLink href={`mailto:${links.email}`}>
							<MailIcon className="w-5 h-5 shrink-0 text-gray-400" />
							<span className="font-semibold shrink-0 text-gray-300">Email:</span>
							<span className="truncate">{links.email}</span>
						</ContactLink>
						<ContactLink href={"tel:" + links.phone}>
							<PhoneIcon className="w-5 h-5 shrink-0 text-gray-400" />
							<span className="font-semibold shrink-0 text-gray-300">Phone:</span>
							<span className="truncate">{links.phone}</span>
						</ContactLink>
						<ContactLink href={links.github}>
							<GithubIcon className="w-5 h-5 shrink-0 text-gray-400" />
							<span className="font-semibold shrink-0 text-gray-300">Github:</span>
							<span className="truncate">{links.github}</span>
						</ContactLink>
						<ContactLink href={links.linkedin}>
							<LinkedInIcon className="w-5 h-5 shrink-0 text-gray-400" />
							<span className="font-semibold shrink-0 text-gray-300">LinkedIn:</span>
							<span className="truncate">{links.linkedin}</span>
						</ContactLink>
					</div>
				</section>
			</div>
		</section>
	);
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a href={href} className="flex gap-2 items-center overflow-hidden">
			{children}
		</a>
	);
}
