import NavLink from "@/app/[language]/nav-link";
import { getTranslation } from "@/app/action";
import { Language } from "@/config";
import en from "@/language/en";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import React from "react";

const paths: {
	path: string;
	label: keyof typeof en.tabs;
}[] = [
	{
		path: "#home",
		label: "home",
	},
	{
		path: "#info",
		label: "info",
	},
	{
		path: "#projects",
		label: "projects",
	},
];

export default async function NavBar({ language }: { language: Language }) {
	const translation = await getTranslation(language);

	return (
		<AnimatePresence>
			<nav className="bg-transparent z-50 backdrop-blur-sm border rounded-full py-4 px-8 flex justify-center items-center mx-auto w-fit space-x-8 text-lg text-foreground/70 fixed top-10 left-1/2 -translate-x-1/2">
				{paths.map(({ path, label }) => (
					<NavLink key={path} href={path}>
						{translation.tabs[label]}
					</NavLink>
				))}
			</nav>
		</AnimatePresence>
	);
}
