"use client";

import { useState, useCallback, useMemo } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	useNodesState,
	useEdgesState,
	Handle,
	Position,
	NodeProps,
	Node,
	Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Github, Star, ExternalLink, Info, X, Layers, Server } from "lucide-react";
import { Translation } from "@/language/en";

// --- TYPES ---
export type ServiceData = {
	name: string;
	description: string;
	isOwn: boolean; // true = my software, false = open source
	githubLink?: string;
	stars?: number;
	liveLink?: string;
	techStack?: string[];
	dockerImage?: string;
	translation: Translation;
};

export type RegionData = {
	label: string;
};

export type ClientData = {
	label: string;
};

// --- CUSTOM NODES ---

// 1. Client Node (Web / Mod)
const ClientNode = ({ data }: NodeProps<Node<ClientData>>) => {
	return (
		<div className="px-6 py-4 rounded-xl bg-blue-900/40 border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-bold text-center min-w-[120px] backdrop-blur-sm">
			<Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-400 border-none" />
			<div className="flex items-center justify-center gap-2">
				<Layers size={20} className="text-blue-400" />
				{data.label}
			</div>
		</div>
	);
};

// 2. Region Node (Container)
const RegionNode = ({ data }: NodeProps<Node<RegionData>>) => {
	return (
		<div className="w-full h-full rounded-2xl bg-zinc-900/50 border-2 border-dashed border-zinc-700 relative">
			<div className="absolute -top-3 left-6 bg-zinc-950 px-3 py-1 rounded-full text-zinc-400 text-xs font-semibold tracking-widest border border-zinc-800 flex items-center gap-2 shadow-md">
				<Server size={12} />
				{data.label}
			</div>
			{/* Handles for regions if we want to connect to the region itself */}
			<Handle type="target" position={Position.Top} className="opacity-0" />
			<Handle type="source" position={Position.Bottom} className="opacity-0" />
		</div>
	);
};

// 3. Service Node (Docker container)
const ServiceNode = ({ data }: NodeProps<Node<ServiceData>>) => {
	return (
		<div className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-600 shadow-lg text-white min-w-[160px] hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all cursor-pointer group">
			<Handle type="target" position={Position.Top} className="w-2 h-2 bg-emerald-400 border-none" />
			<div className="flex flex-col gap-1.5">
				<div className="flex justify-between items-start gap-3">
					<span className="font-semibold text-sm group-hover:text-emerald-400 transition-colors">{data.name}</span>
					{data.isOwn && <Star size={14} className="text-yellow-500 shrink-0 mt-0.5" />}
				</div>
				<div className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">
					{data.isOwn ? data.translation.projects.mindustryTool.ownSoftware : data.translation.projects.mindustryTool.openSource}
				</div>
			</div>
			<Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-emerald-400 border-none" />
		</div>
	);
};

// --- INITIAL DATA ---
const getInitialNodes = (t: Translation): Node[] => [
	// Clients
	{
		id: "client-web",
		type: "client",
		position: { x: 250, y: 50 },
		data: { label: "Web Client" },
	},
	{
		id: "client-mod",
		type: "client",
		position: { x: 700, y: 50 },
		data: { label: "Game Mod" },
	},

	// Regions
	{
		id: "region-vercel-sg",
		type: "region",
		position: { x: 50, y: 250 },
		style: { width: 320, height: 350 },
		data: { label: "VERCEL (SINGAPORE)" },
	},
	{
		id: "region-vps-sg",
		type: "region",
		position: { x: 400, y: 250 },
		style: { width: 320, height: 350 },
		data: { label: "VPS (SINGAPORE)" },
	},
	{
		id: "region-vps-de",
		type: "region",
		position: { x: 750, y: 250 },
		style: { width: 320, height: 350 },
		data: { label: "VPS (GERMANY)" },
	},

	// Services in Vercel SG
	{
		id: "svc-frontend-vercel",
		type: "service",
		parentId: "region-vercel-sg",
		extent: "parent",
		position: { x: 40, y: 60 },
		data: {
			name: "Next.js Frontend",
			description: "Serves the web interface for the Mindustry tool.",
			isOwn: true,
			techStack: ["Next.js", "React", "Tailwind"],
			translation: t,
		},
	},
	{
		id: "svc-api-vercel",
		type: "service",
		parentId: "region-vercel-sg",
		extent: "parent",
		position: { x: 40, y: 200 },
		data: {
			name: "Serverless API",
			description: "API routes handling web requests and interacting with databases.",
			isOwn: true,
			techStack: ["Next.js API", "Vercel"],
			translation: t,
		},
	},

	// Services in VPS SG
	{
		id: "svc-game-sg",
		type: "service",
		parentId: "region-vps-sg",
		extent: "parent",
		position: { x: 40, y: 60 },
		data: {
			name: "Game Server Manager (Asia)",
			description: "Manages active Mindustry game instances in Asia for low latency.",
			isOwn: true,
			techStack: ["Node.js", "Docker API"],
			translation: t,
		},
	},
	{
		id: "svc-redis-sg",
		type: "service",
		parentId: "region-vps-sg",
		extent: "parent",
		position: { x: 40, y: 200 },
		data: {
			name: "Redis Cache",
			description: "Fast in-memory store for real-time game state and session data.",
			isOwn: false,
			techStack: ["Redis", "Docker"],
			translation: t,
		},
	},

	// Services in VPS DE
	{
		id: "svc-game-de",
		type: "service",
		parentId: "region-vps-de",
		extent: "parent",
		position: { x: 40, y: 60 },
		data: {
			name: "Game Server Manager (EU)",
			description: "Manages active Mindustry game instances in Europe.",
			isOwn: true,
			techStack: ["Node.js", "Docker API"],
			translation: t,
		},
	},
	{
		id: "svc-db-de",
		type: "service",
		parentId: "region-vps-de",
		extent: "parent",
		position: { x: 40, y: 200 },
		data: {
			name: "PostgreSQL Database",
			description: "Primary database storing user profiles, maps, and long-term statistics.",
			isOwn: false,
			techStack: ["PostgreSQL", "Docker"],
			translation: t,
		},
	},
];

const initialEdges: Edge[] = [
	// Web Client -> Vercel
	{
		id: "e-web-frontend",
		source: "client-web",
		target: "svc-frontend-vercel",
		animated: true,
		style: { stroke: "#3b82f6", strokeWidth: 2 },
	},
	{ id: "e-frontend-api", source: "svc-frontend-vercel", target: "svc-api-vercel", style: { stroke: "#10b981", strokeWidth: 2 } },

	// Mod -> Game Servers
	{ id: "e-mod-game-sg", source: "client-mod", target: "svc-game-sg", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
	{ id: "e-mod-game-de", source: "client-mod", target: "svc-game-de", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },

	// API -> Redis & DB
	{ id: "e-api-redis", source: "svc-api-vercel", target: "svc-redis-sg", style: { stroke: "#10b981", strokeWidth: 2 } },
	{ id: "e-api-db", source: "svc-api-vercel", target: "svc-db-de", style: { stroke: "#10b981", strokeWidth: 2 } },

	// Game Servers -> DB
	{ id: "e-game-sg-db", source: "svc-game-sg", target: "svc-db-de", style: { stroke: "#10b981", strokeWidth: 2, opacity: 0.5 } },
	{ id: "e-game-de-db", source: "svc-game-de", target: "svc-db-de", style: { stroke: "#10b981", strokeWidth: 2 } },
];

// --- MAIN COMPONENT ---
export default function MindustryToolProject({ translation }: { translation: Translation }) {
	const nodeTypes = useMemo(
		() => ({
			client: ClientNode,
			region: RegionNode,
			service: ServiceNode,
		}),
		[],
	);

	const [nodes, setNodes, onNodesChange] = useNodesState(getInitialNodes(translation));
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

	const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
		// Only open dialog for services
		if (node.type === "service") {
			setSelectedService(node.data as ServiceData);
		} else {
			setSelectedService(null);
		}
	}, []);

	const closeDialog = () => setSelectedService(null);

	return (
		<div className="w-full h-screen bg-zinc-950 relative font-sans overflow-hidden">
			{/* HEADER */}
			<div className="absolute top-6 left-6 z-10 pointer-events-none">
				<h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 drop-shadow-sm">
					{translation.projects.mindustryTool.architecture}
				</h1>
				<p className="text-zinc-400 mt-1 max-w-md text-sm">{translation.projects.mindustryTool.architectureDescription}</p>
			</div>

			{/* REACT FLOW GRAPH */}
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onNodeClick={onNodeClick}
				onPaneClick={closeDialog} // Close dialog when clicking empty space
				nodeTypes={nodeTypes}
				colorMode="dark"
				fitView
				className="bg-zinc-950"
				minZoom={0.2}
			>
				<Background color="#3f3f46" gap={20} size={1.5} />
				<Controls className="bg-zinc-800 border-zinc-700 fill-white !mb-6 !mr-6" />
				<MiniMap
					nodeColor={(n) => {
						if (n.type === "client") return "#3b82f6";
						if (n.type === "region") return "#27272a";
						if (n.type === "service") return "#10b981";
						return "#fff";
					}}
					className="bg-zinc-900 border-zinc-800 !mb-6 !mr-20 rounded-xl overflow-hidden shadow-lg"
					maskColor="rgba(0, 0, 0, 0.7)"
				/>
			</ReactFlow>

			{/* DETAIL DIALOG */}
			<div
				className={`absolute top-0 right-0 h-full w-full sm:w-[450px] bg-zinc-900/95 backdrop-blur-xl border-l border-zinc-800 shadow-2xl p-8 transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
					selectedService ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					onClick={closeDialog}
					className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors bg-zinc-800/50 hover:bg-zinc-700 p-2 rounded-full"
				>
					<X size={20} />
				</button>

				{selectedService && (
					<div className="mt-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
						<div className="mb-6">
							<h2 className="text-3xl font-bold text-white mb-4 leading-tight">{selectedService.name}</h2>
							<div className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold border bg-zinc-950/50 border-zinc-800 text-zinc-300">
								{selectedService.isOwn ? (
									<span className="flex items-center gap-2 text-emerald-400">
										<Star size={14} className="fill-emerald-400/20" /> {translation.projects.mindustryTool.ownSoftware}
									</span>
								) : (
									<span className="flex items-center gap-2 text-blue-400">
										<Info size={14} /> {translation.projects.mindustryTool.openSource}
									</span>
								)}
							</div>
						</div>

						<div className="mb-8 bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50">
							<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
								{translation.projects.mindustryTool.description}
							</h3>
							<p className="text-zinc-300 leading-relaxed text-sm">{selectedService.description}</p>
						</div>

						{selectedService.techStack && selectedService.techStack.length > 0 && (
							<div className="mb-8">
								<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
									{translation.projects.mindustryTool.techStack}
								</h3>
								<div className="flex flex-wrap gap-2">
									{selectedService.techStack.map((tech, i) => (
										<span
											key={i}
											className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs font-medium text-blue-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						)}

						{(selectedService.githubLink || selectedService.liveLink || selectedService.stars !== undefined) && (
							<div className="mb-8">
								<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
									{translation.projects.mindustryTool.linksAndStats}
								</h3>
								<div className="flex flex-col gap-3">
									{selectedService.githubLink && (
										<a
											href={selectedService.githubLink}
											target="_blank"
											rel="noreferrer"
											className="group flex items-center gap-3 text-sm text-zinc-300 hover:text-white bg-zinc-800/30 hover:bg-zinc-800 p-3.5 rounded-xl border border-zinc-700/50 hover:border-zinc-500 transition-all"
										>
											<Github size={18} className="group-hover:scale-110 transition-transform" />
											<span className="flex-1 truncate">{selectedService.githubLink.replace("https://github.com/", "")}</span>
											<ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
										</a>
									)}

									{selectedService.liveLink && (
										<a
											href={selectedService.liveLink}
											target="_blank"
											rel="noreferrer"
											className="group flex items-center gap-3 text-sm text-zinc-300 hover:text-white bg-zinc-800/30 hover:bg-zinc-800 p-3.5 rounded-xl border border-zinc-700/50 hover:border-zinc-500 transition-all"
										>
											<ExternalLink size={18} className="group-hover:scale-110 transition-transform text-emerald-400" />
											<span className="flex-1 truncate">{selectedService.liveLink.replace("https://", "")}</span>
											<ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
										</a>
									)}

									{selectedService.stars !== undefined && (
										<div className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-800/30 p-3.5 rounded-xl border border-zinc-700/50">
											<Star size={18} className="text-yellow-500 fill-yellow-500/20" />
											<span className="font-medium">
												{selectedService.stars}{" "}
												<span className="text-zinc-500 font-normal">{translation.projects.mindustryTool.githubStars}</span>
											</span>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				)}
			</div>

			{/* GLOBAL STYLES FOR SCROLLBAR (Optional enhancement for the dialog) */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #52525b; }
      `,
				}}
			/>
		</div>
	);
}
