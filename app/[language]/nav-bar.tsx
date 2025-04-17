import NavIndicator from "@/app/[language]/nav-indicator";
import { getTranslation } from "@/app/action";
import { Language } from "@/config";
import en from "@/language/en";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function NavBar({ language }: { language: Language }) {
    const translation = await getTranslation(language)

    return <div className="bg-gray-300/10 w-full py-6 px-12 flex justify-between">
        <AnimatePresence>
            <nav className="space-x-8 text-lg text-foreground/80">
                {(Object.keys(en.tabs) as unknown as (keyof typeof en.tabs)[]).map((tab) => <Link key={tab} href={`/${language}/${tab}`}>{translation.tabs[tab]}
                    <NavIndicator regex={/.*\//}/>
                </Link>)}
            </nav>
        </AnimatePresence>
        <div>
            <Link href={'https://github.com/sharrlotte'}>
                <Image alt="github" width={24} height={24} src={'/icons/github-mark-white.svg'} />
            </Link>
        </div>
    </div>
}
