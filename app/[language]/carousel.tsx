"use client";
import TechBadge from "@/app/[language]/tech-badge";
import { Tech, technologies } from "@/config";
import Image from "next/image";

const techList = Object.keys(technologies) as Tech[];
export default function Carousel() {
	const badges = [...techList, ...techList];

	return (
		<div className="w-full flex flex-col overflow-hidden py-10 gap-2">
			<style>{`
			@keyframes scroll {
				0% { transform: translateX(-20%); }
				100% { transform: translateX(-30%); }
			}
		`}</style>
			<div
				className="flex gap-3 w-[max-content]"
				style={{
					animation: "scroll 20s linear infinite",
				}}
			>
				{badges.map((tech, i) => (
					<TechBadge key={tech + i} tech={tech} />
				))}
			</div>
		</div>
	);
}
