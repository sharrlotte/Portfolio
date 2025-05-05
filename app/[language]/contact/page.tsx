import { getTranslation } from "@/app/action";
import { Language, links } from "@/config";
import NavBar from "@/app/[language]/nav-bar";
import Background from "@/app/[language]/background";
import { MailIcon, PhoneIcon } from "lucide-react";

export default async function Page({ params }: { params: Promise<{ language: Language }> }) {
	const { language } = await params;
	const translation = await getTranslation(language);

	return (
		<div className="relative min-h-screen overflow-x-hidden overflow-y-auto flex flex-col text-sm md:text-base">
			<NavBar language={language} />
			<Background />
			<div className="max-w-2xl m-auto p-6 rounded-xl shadow-lg mt-8 space-y-6 border backdrop-blur-sm text-white">
				<h2 className="text-2xl font-semibold border-b pb-2">{translation.tabs.contact}</h2>
				<ContactLink href={`mailto:${links.email}`}>
					<MailIcon /> Email: {links.email}
				</ContactLink>
				<ContactLink href={"tel:" + links.phone}>
					<PhoneIcon size={24} />
					Phone: {links.phone}
				</ContactLink>
				<ContactLink href={links.github}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" />
					</svg>
					Github: {links.github}
				</ContactLink>
				<ContactLink href={links.linkedin}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.003 3.604 4.609v5.587z" />
					</svg>
					LinkedIn: <span className="line-clamp-1 text-nowrap overflow-hidden">{links.linkedin}</span>
				</ContactLink>
			</div>
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
