export default function Background() {
	return (
		<div
			className="w-full h-full absolute inset-0 pointer-events-none"
			style={{
				backgroundSize: "20px 20px",
				backgroundImage:
					"linear-gradient(to right, rgba(128,128,128,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.15) 1px, transparent 1px)",
				zIndex: 0,
				WebkitMaskImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
				maskImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)",
			}}
		/>
	);
}
