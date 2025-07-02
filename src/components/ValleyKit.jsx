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
		link: "https://bayclock.netlify.app/",
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
			{/* Header Section */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
				<div className="relative container mx-auto px-4 sm:px-6 py-3 sm:py-4">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 px-8 sm:px-20 mb-0 border border-white/20">
							<img
								src="/images/header.png"
								alt="ValleyKit Header"
								className="w-full max-w-xs sm:max-w-md mx-auto h-16 sm:h-24 object-contain drop-shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Student Learning Hub Section */}
			<section className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
				<div className="text-center mb-8 sm:mb-12 px-4 sm:px-6 py-6 sm:py-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl sm:rounded-3xl border border-blue-100 shadow-lg max-w-8xl mx-auto">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 mb-3 sm:mb-4 tracking-tight drop-shadow-sm">
						Student Learning Hub
					</h2>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-7xl mx-auto mb-4 sm:mb-6 leading-relaxed px-2">
						Welcome to your digital toolkit for success! Access powerful learning resources, productivity tools, and career development applications designed specifically for Bay Valley Tech students.
					</p>
					<div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
						<a
							href="https://www.bayvalleytech.com/apply"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-800 to-blue-400 text-white text-lg sm:text-xl font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs"
						>
							Join Our Program
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 max-w-7xl mx-auto">
					{learningTools.map((tool, toolIndex) => (
						<div
							key={tool.title}
							className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
							style={{ animationDelay: `${toolIndex * 200}ms` }}
						>
							{/* Category Badge */}
							<div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
								<span className="px-2 sm:px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-md">
									{tool.category}
								</span>
							</div>

							{/* Gradient Header */}
							<div className={`h-2 sm:h-3 bg-gradient-to-r ${tool.color}`}></div>

							{/* Tool Header Image */}
							{tool.headerImage && (
								<div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 border-b border-gray-100">
									<img
										src={tool.headerImage}
										alt={tool.title + " Header"}
										className="w-full h-12 sm:h-16 object-contain mx-auto filter drop-shadow-md"
									/>
								</div>
							)}

							{/* Preview Image */}
							{tool.previewImage && (
								<div className="flex justify-center items-center p-4 sm:p-0">
									<img
										src={tool.previewImage}
										alt="Tool Preview"
										className="w-full max-w-sm sm:w-100 h-auto sm:h-100 object-contain rounded-lg sm:rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105"
									/>
								</div>
							)}
							
							{/* Content */}
							<div className="p-6 sm:p-8">
								<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
									{tool.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-200">
									{tool.title}
								</h3>
								{tool.subtitle && (
									<p className="text-lg sm:text-2xl text-blue-700 mb-3 font-semibold">{tool.subtitle}</p>
								)}

								<p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6">
									{tool.description}
								</p>

								<a
									href={tool.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`inline-flex items-center justify-center w-full py-4 sm:py-5 px-8 sm:px-10 bg-gradient-to-r ${tool.color} text-white text-lg sm:text-xl font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl`}
								>
									<span className="text-center">{tool.button}</span>
									<svg
										className="ml-2 w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
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
			<footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 sm:py-16 mt-12 sm:mt-16">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
						{/* Bay Valley Tech Info */}
						<div className="text-center md:text-left">
							<div className="flex justify-center md:justify-start items-center mb-3 sm:mb-4">
								<img
									src="/images/BVT Logo.png"
									alt="Bay Valley Tech Logo"
									className="w-10 sm:w-12 h-10 sm:h-12"
								/>
								<span className="text-xl sm:text-2xl font-bold ml-2">Bay Valley Tech</span>
							</div>
							<p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
								Empowering careers, enriching communities through free tech education and digital skills training.
							</p>
						</div>

						{/* Quick Links */}
						<div className="text-center">
							<h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-200">Student Resources</h4>
							<ul className="space-y-2 text-gray-300 text-sm sm:text-base">
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
							<h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-200">Connect With Us</h4>
							<p className="text-gray-300 mb-2 text-sm sm:text-base">
								<a href="mailto:info@bayvalleytech.com" className="hover:text-white transition break-all">
									info@bayvalleytech.com
								</a>
							</p>
							<p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Join our Discord for quick help!</p>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-4 sm:pt-6 text-center">
						<p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base px-4">
							"If you can dream it, you can achieve it." - Bay Valley Tech Community
						</p>
						<p className="text-gray-400 text-xs sm:text-base px-4">
							&copy; 2025 Bay Valley Tech. All rights reserved. | Building the future, one student at a time.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
