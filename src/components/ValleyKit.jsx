import React from "react";
import "../index.css";

const tools = [
	{
		title: "BayForm - Resume Builder",
		description:
			"Build beautiful, professional resumes with modern templates, live preview, PDF export, and QR code features. Built with Next.js and Tailwind CSS.",
		image: "https://bayclock.netlify.app/preview-bayform.png",
		link: "https://bayclock.netlify.app/",
	},
	{
		title: "BayClock - Time Tracker",
		description:
			"Track time, manage projects, and analyze productivity with real-time sync, multi-workspace support, and visual dashboards. Built with React and Supabase.",
		image: "https://bayclock.netlify.app/preview-bayclock.png",
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
						<img
							src={tool.image}
							alt={tool.title}
							className="w-full h-56 object-cover group-hover:opacity-90 transition"
						/>
						<div className="p-6 flex flex-col flex-1">
							<h2 className="text-2xl font-bold mb-2 text-orange-600 group-hover:text-orange-700 transition">
								{tool.title}
							</h2>
							<p className="text-gray-700 text-base mb-6 flex-1">
								{tool.description}
							</p>
							<a
								href={tool.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-auto inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
							>
								Visit Site
							</a>
						</div>
					</div>
				))}
			</main>

			<footer className="text-center py-8 text-base text-gray-500 bg-white bg-opacity-70 mt-12 shadow-inner">
				<div className="flex flex-col items-center gap-2">
					<img
						src="/images/logo.png"
						alt="Bay Valley Tech Logo"
						className="w-8 h-8 mb-1"
					/>
					<span>&copy; 2025 ValleyKit. Built by Bay Valley Tech.</span>
				</div>
			</footer>
		</div>
	);
}
