import { GithubIcon, LinkedInIcon, MailIcon } from "../../../icons";
import { links } from "@/config";

export default function ContactSection() {
	return (
		<section id="contact" className="snap-end relative z-10 p-4 pb-8 mt-12">
			<footer className="flex justify-center gap-8">
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
	);
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a href={href} className="text-white/80 hover:text-white transition">
			{children}
		</a>
	);
}
