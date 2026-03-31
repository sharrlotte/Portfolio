"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const targetId = href.replace("#", "");
			const element = document.getElementById(targetId);
			if (element) {
				const rect = element.getBoundingClientRect();
				// If the top of the element is near the top of the viewport
				if (rect.top <= 100 && rect.bottom >= 100) {
					setIsActive(true);
				} else {
					setIsActive(false);
				}
			}
		};

		// Initial check
		handleScroll();

		// Add scroll listener to the container
		const container = document.getElementById("scroll-container");
		if (container) {
			container.addEventListener("scroll", handleScroll);
			return () => container.removeEventListener("scroll", handleScroll);
		}
	}, [href]);

	return (
		<a
			href={href}
			onClick={(e) => {
				e.preventDefault();
				const targetId = href.replace("#", "");
				const element = document.getElementById(targetId);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
					// Update URL hash without jumping
					window.history.pushState(null, "", href);
				}
			}}
			className={cn("hover:underline focus:underline hover:text-white transition-colors", {
				"underline text-white": isActive,
			})}
		>
			{children}
		</a>
	);
}
