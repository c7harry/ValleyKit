import React, { useState, useEffect } from "react";
import "../index.css";

const tools = [
	{
		title: "BayForm - Resume Builder",
		description:
			"Build beautiful, professional resumes with modern templates, live preview, PDF export, and QR code features. Built with Next.js and Tailwind CSS.",
		image: "https://bayclock.netlify.app/preview-bayform.png",
		headerImage: "/images/BayForm/header.png",
		link: "https://bayclock.netlify.app/",
		slideshow: [],
		tags: ["Resume", "PDF", "Templates", "Next.js"],
		color: "from-blue-500 to-purple-600",
	},
	{
		title: "BayClock - Time Tracker",
		description:
			"Track time, manage projects, and analyze productivity with real-time sync, multi-workspace support, and visual dashboards. Built with React and Supabase.",
		image: "https://bayclock.netlify.app/preview-bayclock.png",
		headerImage: "/images/BayClock/Header.png",
		link: "https://bayclock.netlify.app/",
		slideshow: [
			"/images/BayClock/BayClock1.png",
			"/images/BayClock/BayClock2.png",
			"/images/BayClock/BayClock3.png",
			"/images/BayClock/BayClock4.png",
		],
		tags: ["Time Tracking", "Analytics", "React", "Supabase"],
		color: "from-green-500 to-teal-600",
	},
];

function Slideshow({ images }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (images && images.length > 1) {
			const interval = setInterval(() => {
				setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
			}, 3000);
			return () => clearInterval(interval);
		}
	}, [images]);

	if (!images || images.length === 0) return null;

	const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
	const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

	return (
		<div className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
			<div className="flex justify-center items-center py-6">
				<img
					src={images[index]}
					alt={`Slideshow ${index + 1}`}
					className="w-64 h-48 object-contain rounded-xl shadow-lg bg-white p-2 transition-all duration-500 transform hover:scale-105"
				/>
			</div>
			{images.length > 1 && (
				<div className="absolute inset-0 flex items-center justify-between px-4">
					<button
						onClick={prev}
						className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-blue-600"
						aria-label="Previous"
					>
						←
					</button>
					<button
						onClick={next}
						className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 flex items-center justify-center text-gray-700 hover:text-blue-600"
						aria-label="Next"
					>
						→
					</button>
				</div>
			)}
			<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`w-2 h-2 rounded-full transition-all duration-200 ${
							i === index ? "bg-blue-600 w-6" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
}

export default function ValleyKit() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
				<div className="relative container mx-auto px-6 py-16">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
							<img
								src="/images/header.png"
								alt="ValleyKit Header"
								className="w-full max-w-md mx-auto h-24 object-contain drop-shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Tools Section */}
			<section className="container mx-auto px-6 py-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Our Tools
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Discover our collection of powerful, user-friendly applications
						designed to enhance your productivity.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
					{tools.map((tool, toolIndex) => (
						<div
							key={tool.title}
							className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
							style={{ animationDelay: `${toolIndex * 200}ms` }}
						>
							{/* Gradient Header */}
							<div className={`h-2 bg-gradient-to-r ${tool.color}`}></div>

							{/* Tool Header Image */}
							{tool.headerImage && (
								<div className="bg-gradient-to-br from-gray-50 to-white p-6 border-b border-gray-100">
									<img
										src={tool.headerImage}
										alt={tool.title + " Header"}
										className="w-full h-16 object-contain mx-auto filter drop-shadow-md"
									/>
								</div>
							)}

							{/* Slideshow */}
							{tool.slideshow && tool.slideshow.length > 0 && (
								<Slideshow images={tool.slideshow} />
							)}
							{/* Content */}
							<div className="p-8">
								<div className="flex flex-wrap gap-2 mb-4">
									{tool.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
									{tool.title}
								</h3>

								<p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
									{tool.description}
								</p>

								<a
									href={tool.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`inline-flex items-center justify-center w-full py-4 px-8 bg-gradient-to-r ${tool.color} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl`}
								>
									<span>Launch Application</span>
									<svg
										className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
				<div className="container mx-auto px-6 text-center">
					<div className="flex justify-center items-center mb-6">
						<img
							src="/images/logo.png"
							alt="Bay Valley Tech Logo"
							className="w-12 h-12 mr-3"
						/>
						<span className="text-2xl font-bold">Bay Valley Tech</span>
					</div>
					<p className="text-gray-300 mb-6 text-lg">
						Building the future, one application at a time.
					</p>
					<p className="text-gray-400">
						&copy; 2025 ValleyKit. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
