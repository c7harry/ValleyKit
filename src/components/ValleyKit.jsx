import React, { useState, useEffect } from "react";
import "../index.css";

const learningTools = [
	{
		id: "bayform",
		title: "BayForm",
		subtitle: "Professional Resume Builder",
		description:
			"Create industry-standard resumes that get noticed by employers. Features modern templates, live preview, PDF export, and QR codes for digital portfolios. Perfect for landing your first tech job or internship.",
		headerImage: "/images/BayForm/header.png",
		link: "https://bayform.netlify.app/",
		previewImage: "/images/BayForm/BayForm.png",
		tags: ["Career Prep", "Resume", "Job Search", "Professional"],
		color: "from-cyan-500 to-blue-400",
		category: "Career Development",
		button: "Build a Resume",
	},
	{
		id: "bayclock",
		title: "BayClock",
		subtitle: "Study & Project Time Tracker",
		description:
			"Master time management skills essential for tech careers. Track study sessions, coding projects, and assignments with real-time analytics. Build productivity habits that will serve you throughout your career.",
		headerImage: "/images/BayClock/Header.png",
		link: "https://bayclock.netlify.app/",
		previewImage: "/images/BayClock/BayClock.png",
		tags: ["Time Management", "Productivity", "Study Skills", "Analytics"],
		color: "from-green-500 to-teal-600",
		category: "Productivity",
		button: "Track Your Time",
	},
	{
		id: "taskpilot",
		title: "TaskPilot",
		subtitle: "Chrome Extension To-Do Manager",
		description:
			"Stay organized and productive with this modern Chrome extension. Features task management with priorities, due dates, calendar view, work/personal profiles, and dark mode. Perfect for managing coding projects, assignments, and daily tasks.",
		headerImage: "/images/TaskPilot/header.png",
		link: "https://github.com/c7harry/TaskPilot",
		previewImage: "/images/TaskPilot/TaskPilot.png",
		tags: ["Task Management", "Chrome Extension", "Productivity", "Organization"],
		color: "from-purple-500 to-pink-600",
		category: "Productivity",
		button: "Open GitHub To Install",
	},
];

function PreviewImage({ src }) {
	if (!src) return null;
	return (
		<div className="flex justify-center items-center">
			<img
				src={src}
				alt="Tool Preview"
				className="w-100 h-100 object-contain rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105"
			/>
		</div>
	);
}

export default function ValleyKit() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			{/* Header Section - Made more compact */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
				<div className="relative container mx-auto px-3 sm:px-4 py-1 sm:py-2">
					<div className="text-center max-w-2xl mx-auto">
						<div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md p-2 sm:p-3 px-4 sm:px-6 mb-0 border border-white/20">
							<img
								src="/images/header.png"
								alt="ValleyKit Header"
								className="w-full max-w-xs sm:max-w-sm mx-auto h-8 sm:h-10 object-contain drop-shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Student Learning Hub Section */}
			<section className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
				<div className="text-center mb-4 sm:mb-6 px-2 sm:px-3 py-3 sm:py-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-lg sm:rounded-xl border border-blue-100 shadow-sm max-w-4xl mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-800 mb-1 sm:mb-2 tracking-tight drop-shadow-sm">
						Student Learning Hub
					</h2>
					<p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-2 sm:mb-3 leading-relaxed px-1">
						Welcome to your digital toolkit for success! Access powerful learning resources, productivity tools, and career development applications designed specifically for Bay Valley Tech students.
					</p>
					<div className="flex flex-col gap-1 sm:gap-2 justify-center items-center">
						<a
							href="https://www.bayvalleytech.com/apply"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-blue-800 to-blue-400 text-white text-sm sm:text-base font-bold rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs"
						>
							Join Our Program
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
					{learningTools.map((tool, toolIndex) => (
						<div
							key={tool.title}
							className="group relative bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-0.5 border border-gray-100"
							style={{ animationDelay: `${toolIndex * 200}ms` }}
						>
							{/* Category Badge */}
							<div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 z-10">
								<span className="px-1.5 py-0.5 text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-sm">
									{tool.category}
								</span>
							</div>

							{/* Gradient Header */}
							<div className={`h-1 sm:h-1.5 bg-gradient-to-r ${tool.color}`}></div>

							{/* Tool Header Image */}
							{tool.headerImage && (
								<div className="bg-gradient-to-br from-gray-50 to-white p-2 sm:p-3 border-b border-gray-100">
									<img
										src={tool.headerImage}
										alt={tool.title + " Header"}
										className="w-full h-8 sm:h-10 object-contain mx-auto filter drop-shadow-md"
									/>
								</div>
							)}

							{/* Preview Image */}
							{tool.previewImage && (
								<div className="flex justify-center items-center p-2 sm:p-3">
									<img
										src={tool.previewImage}
										alt="Tool Preview"
										className="w-full max-w-xs sm:max-w-xs h-auto object-contain rounded-md shadow-sm transition-all duration-500 transform hover:scale-105"
									/>
								</div>
							)}
							
							{/* Content */}
							<div className="p-3 sm:p-4">
								<div className="flex flex-wrap gap-0.5 sm:gap-1 mb-1.5 sm:mb-2">
									{tool.tags.map((tag) => (
										<span
											key={tag}
											className="px-1.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-0.5 group-hover:text-blue-600 transition-colors duration-200">
									{tool.title}
								</h3>
								{tool.subtitle && (
									<p className="text-sm sm:text-base text-blue-700 mb-1.5 font-semibold">{tool.subtitle}</p>
								)}

								<p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
									{tool.description}
								</p>

								<a
									href={tool.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`inline-flex items-center justify-center w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r ${tool.color} text-white text-sm sm:text-base font-bold rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}
								>
									<span className="text-center">{tool.button}</span>
									<svg
										className="ml-1.5 w-3 sm:w-4 h-3 sm:h-4 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 7l5 5m0 0l-5 5m5-5H6"
										/>
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-6 sm:py-8 mt-6 sm:mt-8">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
						{/* Bay Valley Tech Info */}
						<div className="text-center md:text-left">
							<div className="flex justify-center md:justify-start items-center mb-1.5 sm:mb-2">
								<img
									src="/images/BVT Logo.png"
									alt="Bay Valley Tech Logo"
									className="w-6 sm:w-8 h-6 sm:h-8"
								/>
								<span className="text-base sm:text-lg font-bold ml-1.5">Bay Valley Tech</span>
							</div>
							<p className="text-gray-300 mb-1.5 sm:mb-2 text-xs">
								Empowering careers, enriching communities through free tech education and digital skills training.
							</p>
						</div>

						{/* Quick Links */}
						<div className="text-center">
							<h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-blue-200">Student Resources</h4>
							<ul className="space-y-0.5 text-gray-300 text-xs">
								<li>
									<a href="https://www.bayvalleytech.com/apply" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
										Apply Today
									</a>
								</li>
								<li>
									<a href="https://www.bayvalleytech.com/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
										Contact
									</a>
								</li>
								<li>
									<a href="https://www.bayvalleytech.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
										About Us
									</a>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div className="text-center md:text-right">
							<h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-blue-200">Connect With Us</h4>
							<p className="text-gray-300 mb-0.5 text-xs">
								<a href="mailto:info@bayvalleytech.com" className="hover:text-white transition break-all">
									info@bayvalleytech.com
								</a>
							</p>
							<p className="text-gray-300 mb-1.5 sm:mb-2 text-xs">Join our Discord for quick help!</p>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-2 sm:pt-3 text-center">
						<p className="text-gray-400 mb-1.5 sm:mb-2 text-xs px-1">
							"If you can dream it, you can achieve it." - Bay Valley Tech Community
						</p>
						<p className="text-gray-400 text-xs px-1">
							&copy; 2025 Bay Valley Tech. All rights reserved. | Building the future, one student at a time.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
