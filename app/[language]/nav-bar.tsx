import { getTranslation } from "@/app/action";
import { Language } from "@/config";
import en from "@/language/en";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import React from "react";

const paths: {
	path: string;
	label: keyof typeof en.tabs;
	regex: string;
}[] = [
	{
		path: "/",
		label: "home",
		regex: "^/$",
	},
	{
		path: "/projects",
		label: "projects",
		regex: "^/projects/?$",
	},
	{
		path: "/info",
		label: "info",
		regex: "^/info/?$",
	},
	{
		path: "/contact",
		label: "contact",
		regex: "^/contact/?$",
	},
];

export default async function NavBar({ language }: { language: Language }) {
	const translation = await getTranslation(language);

	return (
		<AnimatePresence>
			<nav className="bg-transparent z-50 backdrop-blur-sm border rounded-full py-4 px-8 flex justify-center items-center mx-auto mt-10 w-fit space-x-8 text-lg text-foreground/80">
				{paths.map(({ path, regex, label }) => (
					<Link key={path} href={`/${language}/${path}`}>
						{translation.tabs[label]}
					</Link>
				))}
			</nav>
		</AnimatePresence>
	);
}
