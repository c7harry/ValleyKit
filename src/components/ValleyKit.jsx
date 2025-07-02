import React from "react";
import "../index.css";

const tools = [
	{
		title: "BayForm - Resume Builder",
		description:
			"Build beautiful, professional resumes with modern templates, live preview, PDF export, and QR code features. Built with Next.js and Tailwind CSS.",
		image: "https://bayclock.netlify.app/preview-bayform.png",
		headerImage: "/images/BayForm/header.png",
		link: "https://bayclock.netlify.app/",
	},
	{
		title: "BayClock - Time Tracker",
		description:
			"Track time, manage projects, and analyze productivity with real-time sync, multi-workspace support, and visual dashboards. Built with React and Supabase.",
		image: "https://bayclock.netlify.app/preview-bayclock.png",
		headerImage: "/images/BayClock/Header.png",
		link: "https://bayclock.netlify.app/",
	},
];

export default function ValleyKit() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-100 text-gray-800 font-sans flex flex-col">
			<header className="flex flex-col items-center py-8 bg-transparent">
				<div className="bg-white rounded-2xl shadow-lg p-4 mb-4 flex flex-col items-center w-full max-w-xl mx-auto">
					<img
						src="/images/header.png"
						alt="ValleyKit Header"
						className="w-full h-20 object-contain mb-2 drop-shadow-md"
					/>
				</div>
			</header>

			<main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
				{tools.map((tool) => (
					<div
						key={tool.title}
						className="group bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
					>
						{tool.headerImage && (
							<img
								src={tool.headerImage}
								alt={tool.title + " Header"}
								className="w-full h-20 object-contain bg-white border-b border-gray-100"
							/>
						)}
						<img
							src={tool.image}
							alt={tool.title}
							className="w-full h-56 object-cover group-hover:opacity-90 transition"
						/>
						<div className="p-6 flex flex-col flex-1">
							<h2
								className="text-2xl font-bold mb-2"
								style={{ color: "#1e558e" }}
							>
								{tool.title}
							</h2>
							<p className="text-gray-700 text-base flex-1">
								{tool.description}
							</p>
							<a
								href={tool.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-6 py-2 rounded-lg shadow transition self-center"
								style={{
									backgroundColor: "#1e558e",
									color: "#fff",
									marginTop: 8,
								}}
							>
								Visit Site
							</a>
						</div>
					</div>
				))}
			</main>
		</div>
	);
}
