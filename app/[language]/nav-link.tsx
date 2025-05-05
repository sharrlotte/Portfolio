"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavLink({ children, regex }: { children: React.ReactNode; regex: string }) {
	const path = usePathname();
	const match = RegExp(regex).test(path);

	return (
		<span
			className={cn("hover:underline focus:underline", {
				underline: match,
			})}
		>
			{children}
		</span>
	);
}
