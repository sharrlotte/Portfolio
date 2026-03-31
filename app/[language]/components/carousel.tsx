"use client";
import TechBadge from "@/app/[language]/components/tech-badge";
import { Tech, technologies } from "@/config";
import { motion, useAnimationFrame, useMotionValue, wrap } from "motion/react";
import { useRef, useState, useEffect } from "react";

const techList = Object.keys(technologies) as Tech[];

export default function Carousel() {
	const badges = [...techList, ...techList, ...techList, ...techList];

	const baseX = useMotionValue(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	useEffect(() => {
		const updateWidth = () => {
			if (containerRef.current) {
				const children = containerRef.current.children;
				const originalLength = techList.length;

				if (children.length > originalLength) {
					const firstItem = children[0] as HTMLElement;
					const nextCycleItem = children[originalLength] as HTMLElement;

					if (firstItem && nextCycleItem) {
						setWidth(nextCycleItem.offsetLeft - firstItem.offsetLeft);
					}
				}
			}
		};

		updateWidth();

		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	useAnimationFrame((t, delta) => {
		let moveBy = isDragging ? 0 : -0.05 * delta;

		let currentX = baseX.get() + moveBy;

		if (width > 0) {
			currentX = wrap(-width, 0, currentX);
		}

		baseX.set(currentX);
	});

	return (
		<div className="w-full flex flex-col overflow-hidden py-10 gap-2 cursor-grab active:cursor-grabbing">
			<motion.div
				className="flex gap-3 w-[max-content]"
				ref={containerRef}
				style={{ x: baseX }}
				drag="x"
				onDragStart={() => setIsDragging(true)}
				onDragEnd={() => setIsDragging(false)}
			>
				{badges.map((tech, i) => (
					<TechBadge key={tech + i} tech={tech} />
				))}
			</motion.div>
		</div>
	);
}
