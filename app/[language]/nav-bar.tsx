import { getTranslation } from "@/app/action";
import { Language } from "@/config";
import en from "@/language/en";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import React from "react";

export default async function NavBar({ language }: { language: Language }) {
	const translation = await getTranslation(language);

	return (
		<div className="bg-white/10 backdrop-blur-sm rounded-full py-4 px-8 flex justify-center items-center mx-auto mt-10 w-fit">
			<AnimatePresence>
				<nav className="space-x-8 text-lg text-foreground/80">
					{(Object.keys(en.tabs) as unknown as (keyof typeof en.tabs)[]).map((tab) => (
						<Link key={tab} href={`/${language}/${tab}`}>
							{translation.tabs[tab]}
						</Link>
					))}
				</nav>
			</AnimatePresence>
		</div>
	);
}
