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
				<div className="relative container mx-auto px-6 py-4">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 px-20 mb-0 border border-white/20">
							<img
								src="/images/header.png"
								alt="ValleyKit Header"
								className="w-full max-w-md mx-auto h-24 object-contain drop-shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Student Learning Hub Section */}
			<section className="container mx-auto px-6 py-4">
				<div className="text-center mb-12 px-6 py-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl border border-blue-100 shadow-lg max-w-8xl mx-auto">
					<h2 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight drop-shadow-sm">
						Student Learning Hub
					</h2>
					<p className="text-xl md:text-2xl text-gray-700 max-w-7xl mx-auto mb-6 leading-relaxed">
						Welcome to your digital toolkit for success! Access powerful learning resources, productivity tools, and career development applications designed specifically for Bay Valley Tech students.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<a
							href="https://www.bayvalleytech.com/apply"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-400 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
						>
							Join Our Program
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
					{learningTools.map((tool, toolIndex) => (
						<div
							key={tool.title}
							className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
							style={{ animationDelay: `${toolIndex * 200}ms` }}
						>
							{/* Category Badge */}
							<div className="absolute top-4 right-4 z-10">
								<span className="px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-md">
									{tool.category}
								</span>
							</div>

							{/* Gradient Header */}
							<div className={`h-3 bg-gradient-to-r ${tool.color}`}></div>

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

							{/* Preview Image */}
							{tool.previewImage && (
								<PreviewImage src={tool.previewImage} />
							)}
							{/* Content */}
							<div className="p-8">
								<div className="flex flex-wrap gap-2 mb-4">
									{tool.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-3xl font-extrabold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-200">
									{tool.title}
								</h3>
								{tool.subtitle && (
									<p className="text-2xl text-blue-700 mb-3 font-semibold">{tool.subtitle}</p>
								)}

								<p className="text-xl text-gray-600 leading-relaxed mb-6">
									{tool.description}
								</p>

								<a
									href={tool.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`inline-flex items-center justify-center w-full py-5 px-10 bg-gradient-to-r ${tool.color} text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl`}
								>
									<span>{tool.button}</span>
									<svg
										className="ml-2 w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
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
			<footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 mt-16">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						{/* Bay Valley Tech Info */}
						<div className="text-center md:text-left">
							<div className="flex justify-center md:justify-start items-center mb-4">
								<img
									src="/images/BVT Logo.png"
									alt="Bay Valley Tech Logo"
									className="w-12 h-12"
								/>
								<span className="text-2xl font-bold">Bay Valley Tech</span>
							</div>
							<p className="text-gray-300 mb-4">
								Empowering careers, enriching communities through free tech education and digital skills training.
							</p>
						</div>

						{/* Quick Links */}
						<div className="text-center">
							<h4 className="text-lg font-semibold mb-4 text-blue-200">Student Resources</h4>
							<ul className="space-y-2 text-gray-300">
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
							<h4 className="text-lg font-semibold mb-4 text-blue-200">Connect With Us</h4>
							<p className="text-gray-300 mb-2">
								<a href="mailto:info@bayvalleytech.com" className="hover:text-white transition">
									info@bayvalleytech.com
								</a>
							</p>
							<p className="text-gray-300 mb-4">Join our Discord for quick help!</p>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-6 text-center">
						<p className="text-gray-400 mb-4">
							"If you can dream it, you can achieve it." - Bay Valley Tech Community
						</p>
						<p className="text-gray-400">
							&copy; 2025 Bay Valley Tech. All rights reserved. | Building the future, one student at a time.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
