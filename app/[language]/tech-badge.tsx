import { Tech, technologies } from "@/config";
import Image from "next/image";

export default function TechBadge({ tech }: { tech: Tech }) {
	return (
		<div className="flex gap-1 items-center justify-center border rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
			<Image className="size-5" src={technologies[tech]} width={20} height={20} alt={tech} />
			{tech}
		</div>
	);
}
