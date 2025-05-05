import NavLink from "@/app/[language]/nav-link";
import { getTranslation } from "@/app/action";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Language } from "@/config";
import en from "@/language/en";
import { MenuIcon } from "lucide-react";
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
		regex: "^/(en|vi)$",
	},
	{
		path: "/projects",
		label: "projects",
		regex: "^/(en|vi)/projects/?$",
	},
	{
		path: "/info",
		label: "info",
		regex: "^/(en|vi)/info/?$",
	},
	{
		path: "/contact",
		label: "contact",
		regex: "^/(en|vi)/contact/?$",
	},
];

export default async function NavBar({ language }: { language: Language }) {
	const translation = await getTranslation(language);

	return (
		<>
			<nav className="bg-transparent hidden md:flex z-50 backdrop-blur-sm border rounded-full py-4 px-8 justify-center items-center mx-auto mt-10 w-fit space-x-8 text-lg text-foreground/70">
				{paths.map(({ path, regex, label }) => (
					<NavLink key={path} regex={regex}>
						<Link href={`/${language}/${path}`}>{translation.tabs[label]}</Link>
					</NavLink>
				))}
			</nav>
			<nav className="flex md:hidden justify-end">
				<Sheet>
					<SheetTrigger asChild>
						<MenuIcon className="cursor-pointer" />
					</SheetTrigger>
					<SheetContent className="gap-0">
						<SheetHeader>
							<SheetTitle className="font-semibold text-lg">Nguyễn Nhơn Hậu</SheetTitle>
							<SheetDescription></SheetDescription>
						</SheetHeader>
						<div className="flex flex-col gap-2 px-4">
							{paths.map(({ path, regex, label }) => (
								<NavLink key={path} regex={regex}>
									<Link href={`/${language}/${path}`}>{translation.tabs[label]}</Link>
								</NavLink>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</>
	);
}
