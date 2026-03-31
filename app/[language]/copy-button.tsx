"use client";

import { CopyIcon } from "lucide-react";

export default function CopyButton({ content }: { content: string }) {
	return (
		<button
			className="border size-8 flex items-center justify-center p-1 rounded-md cursor-pointer"
			type="button"
			onClick={() => {
				navigator.clipboard.writeText(content);
			}}
		>
			<CopyIcon className="size-6" />
		</button>
	);
}
