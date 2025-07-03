// Import React and hooks for state and effects
import React, { useState, useEffect } from "react";
// Import animation libraries
import { motion, useAnimation, useInView } from "framer-motion";
import { useInView as useInViewHook } from "react-intersection-observer";
// Import icons from react-icons
import { 
	FiExternalLink, 
	FiClock, 
	FiFileText, 
	FiCheckSquare,
	FiTrendingUp,
	FiGithub,
	FiMail,
	FiArrowRight,
	FiStar,
	FiZap,
	FiAward
} from "react-icons/fi";
import { BsMortarboard, BsRocket, BsLightbulb } from "react-icons/bs";
// Import animation on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

// List of learning tools to display in the app
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
		icon: FiFileText,
		features: ["Modern Templates", "Live Preview", "PDF Export", "QR Codes"],
		bgPattern: "pattern-dots",
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
		icon: FiClock,
		features: ["Real-time Analytics", "Session Tracking", "Productivity Reports", "Goal Setting"],
		bgPattern: "pattern-grid",
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
		icon: FiCheckSquare,
		features: ["Priority Management", "Due Dates", "Calendar View", "Dark Mode"],
		bgPattern: "pattern-triangles",
	},
];

// Animation settings for the container (the grid of cards)
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

// Animation settings for each card
const cardVariants = {
	hidden: { 
		opacity: 0, 
		y: 50,
		scale: 0.9,
	},
	visible: { 
		opacity: 1, 
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			damping: 25,
			stiffness: 300,
		},
	},
	hover: {
		y: -8,
		scale: 1.02,
		transition: {
			type: "spring",
			damping: 20,
			stiffness: 300,
		},
	},
};

// This component shows a badge for each feature of a tool
function FeatureBadge({ feature, index }) {
	return (
		<motion.span
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: index * 0.1, type: "spring" }}
			className="inline-flex items-center px-2 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm text-gray-700 rounded-full shadow-sm border border-gray-200 hover:bg-white/90 transition-all"
		>
			<FiStar className="w-3 h-3 mr-1 text-yellow-500" />
			{feature}
		</motion.span>
	);
}

// This component displays a preview image for each tool
function PreviewImage({ src, alt, tool }) {
	// useInViewHook checks if the image is visible on the screen
	const [imageRef, imageInView] = useInViewHook({
		threshold: 0.3,
		triggerOnce: true,
	});

	if (!src) return null;

	return (
		<motion.div 
			ref={imageRef}
			className="relative flex justify-center items-center p-4 group"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={imageInView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<motion.div
				className="relative"
				whileHover={{ scale: 1.05 }}
				transition={{ type: "spring", damping: 20 }}
			>
				<img
					src={src}
					alt={alt}
					className="w-full max-w-xs h-auto object-contain rounded-xl shadow-xl border border-gray-200"
				/>
				{/* Overlay effect on hover */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					initial={false}
				/>
			</motion.div>
		</motion.div>
	);
}

// Main ValleyKit component
export default function ValleyKit() {
	// Run animation on scroll setup when the component mounts
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: 'ease-out-cubic',
		});
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
			{/* Subtle background wallpaper pattern for style */}
			<div className="absolute inset-0 opacity-[0.15] pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_25px_25px,theme(colors.blue.600)_2px,transparent_2px)] bg-[size:50px_50px]"></div>
				<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,theme(colors.indigo.500/0.3)_35%,theme(colors.indigo.500/0.3)_65%,transparent_65%)] bg-[size:20px_20px]"></div>
				<div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,theme(colors.blue.400/0.2)_60deg,transparent_120deg,theme(colors.purple.400/0.2)_180deg,transparent_240deg,theme(colors.cyan.400/0.2)_300deg,transparent_360deg)] bg-[size:100px_100px]"></div>
			</div>

			{/* Main section for the Student Learning Hub */}
			<section className="container mx-auto px-4 sm:px-6 py-8 sm:py-6 relative z-10">
				{/* Header card with title and description */}
				<motion.div 
					className="text-center mb-4 sm:mb-6 px-2 sm:px-3 py-3 sm:py-4 bg-gradient-to-br from-white/80 via-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-100 shadow-lg max-w-4xl mx-auto relative overflow-hidden"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{/* Decorative background pattern */}
					<div className="absolute inset-0 opacity-5">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.blue.500)_1px,transparent_0)] bg-[size:20px_20px]"></div>
					</div>

					<div className="relative z-10 flex flex-col items-center">
						{/* ValleyKit header image above the title */}
						<img
							src="/images/header.png"
							alt="ValleyKit Header"
							className="w-full max-w-xs sm:max-w-sm mx-auto h-8 sm:h-10 object-contain drop-shadow-lg mb-3"
						/>

						{/* Title with icons */}
						<motion.div
							className="flex items-center justify-center gap-2 mb-2"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5, type: "spring" }}
						>
							<BsMortarboard className="text-blue-600 text-2xl" />
							<h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-800 tracking-tight drop-shadow-sm">
								Student Learning Hub
							</h2>
							<BsRocket className="text-purple-600 text-2xl" />
						</motion.div>

						{/* Welcome message */}
						<motion.p 
							className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-2 sm:mb-3 leading-relaxed px-1"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
						>
							Welcome to your digital toolkit for success! Access powerful learning resources, productivity tools, and career development applications designed specifically for Bay Valley Tech students.
						</motion.p>

						{/* Button to join the program */}
						<motion.div 
							className="flex flex-col gap-1 sm:gap-2 justify-center items-center"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.9, type: "spring" }}
						>
							<motion.a
								href="https://www.bayvalleytech.com/apply"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-800 to-blue-400 text-white text-sm sm:text-base font-bold rounded-md sm:rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-xs"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.98 }}
							>
								<BsLightbulb className="mr-2 group-hover:animate-pulse" />
								Join Our Program
								<FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
							</motion.a>
						</motion.div>
					</div>
				</motion.div>

				{/* Grid of learning tool cards */}
				<motion.div 
					className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-5xl mx-auto"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{learningTools.map((tool, toolIndex) => {
						const IconComponent = tool.icon;
						return (
							<motion.div
								key={tool.title}
								className="group relative"
								variants={cardVariants}
								whileHover="hover"
								data-aos="fade-up"
								data-aos-delay={toolIndex * 100}
							>
								<div className="relative bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-gray-200/50 hover:border-gray-300/50 transition-all duration-500">
									{/* Animated gradient bar at the top of the card */}
									<motion.div 
										className={`h-1.5 bg-gradient-to-r ${tool.color} relative overflow-hidden`}
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ delay: 0.2 + toolIndex * 0.1, duration: 0.8 }}
									>
										<motion.div
											className="absolute inset-0 bg-white/30"
											animate={{
												x: ["-100%", "100%"],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: "linear",
												delay: toolIndex * 0.5,
											}}
										/>
									</motion.div>

									{/* Tool header image and icon */}
									{tool.headerImage && (
										<motion.div 
											className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm p-3 border-b border-gray-100/50 relative"
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.4 + toolIndex * 0.1 }}
										>
											<div className="flex items-center justify-center gap-3">
												{/* Tool icon in a colored circle */}
												<motion.div
													className={`p-2 rounded-lg bg-gradient-to-r ${tool.color} text-white shadow-lg`}
													whileHover={{ rotate: [0, -10, 10, 0] }}
													transition={{ duration: 0.5 }}
												>
													<IconComponent className="w-5 h-5" />
												</motion.div>
												{/* Tool header image - bigger size */}
												<img
													src={tool.headerImage}
													alt={tool.title + " Header"}
													className="h-8 sm:h-16 object-contain filter drop-shadow-md flex-1" // Increased height
												/>
											</div>
										</motion.div>
									)}

									{/* Preview image for the tool */}
									{tool.previewImage && (
										<PreviewImage 
											src={tool.previewImage} 
											alt={`${tool.title} Preview`}
											tool={tool}
										/>
									)}
									
									{/* Card content: features, title, description, and button */}
									<div className="p-4 space-y-3">
										{/* List of features as badges */}
										<motion.div 
											className="flex flex-wrap gap-1"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.6 + toolIndex * 0.1 }}
										>
											{tool.features.map((feature, index) => (
												<FeatureBadge key={feature} feature={feature} index={index} />
											))}
										</motion.div>

										{/* Tool title with animated icon */}
										<motion.h3 
											className="text-lg sm:text-xl font-extrabold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.7 + toolIndex * 0.1 }}
										>
											{tool.title}
											<motion.div
												animate={{ rotate: [0, 5, -5, 0] }}
												transition={{ duration: 2, repeat: Infinity, delay: toolIndex }}
											>
												<FiZap className="text-yellow-500" />
											</motion.div>
										</motion.h3>
										
										{/* Tool subtitle if it exists */}
										{tool.subtitle && (
											<motion.p 
												className="text-sm sm:text-base text-blue-700 font-semibold"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.8 + toolIndex * 0.1 }}
											>
												{tool.subtitle}
											</motion.p>
										)}

										{/* Tool description */}
										<motion.p 
											className="text-xs sm:text-sm text-gray-600 leading-relaxed"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.9 + toolIndex * 0.1 }}
										>
											{tool.description}
										</motion.p>

										{/* Button to open the tool's link */}
										<motion.a
											href={tool.link}
											target="_blank"
											rel="noopener noreferrer"
											className={`group/btn inline-flex items-center justify-center w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-gradient-to-r ${tool.color} text-white text-sm sm:text-base font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 1 + toolIndex * 0.1 }}
										>
											{/* Animated shine effect on button */}
											<motion.div
												className="absolute inset-0 bg-white/20"
												initial={{ x: "-100%" }}
												whileHover={{ x: "100%" }}
												transition={{ duration: 0.5 }}
											/>
											<span className="relative z-10 flex items-center gap-2">
												{tool.button}
												<motion.div
													className="group-hover/btn:translate-x-1 transition-transform duration-200"
													animate={{ x: [0, 3, 0] }}
													transition={{ duration: 2, repeat: Infinity, delay: toolIndex * 0.5 }}
												>
													{/* Show GitHub icon for TaskPilot, otherwise external link icon */}
													{tool.id === 'taskpilot' ? <FiGithub /> : <FiExternalLink />}
												</motion.div>
											</span>
										</motion.a>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</section>

			{/* Footer section with info and links */}
			<motion.footer 
				className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-6 sm:py-8 mt-6 sm:mt-8 overflow-hidden"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				{/* Animated glowing background circles */}
				<div className="absolute inset-0 overflow-hidden">
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl"
							style={{
								left: `${i * 40}%`,
								top: `${i * 30}%`,
							}}
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.1, 0.2, 0.1],
							}}
							transition={{
								duration: 4 + i,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					))}
				</div>

				<div className="relative container mx-auto px-4 sm:px-6">
					<motion.div 
						className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{/* Bay Valley Tech info section */}
						<motion.div 
							className="text-center md:text-left"
							variants={cardVariants}
						>
							<motion.div 
								className="flex justify-center md:justify-start items-center mb-1.5 sm:mb-2"
								whileHover={{ scale: 1.05 }}
							>
								<img
									src="/images/BVT Logo.png"
									alt="Bay Valley Tech Logo"
									className="w-6 sm:w-8 h-6 sm:h-8"
								/>
								<span className="text-base sm:text-lg font-bold ml-1.5">Bay Valley Tech</span>
							</motion.div>
							<p className="text-gray-300 mb-1.5 sm:mb-2 text-xs">
								Empowering careers, enriching communities through free tech education and digital skills training.
							</p>
						</motion.div>

						{/* Quick links section */}
						<motion.div 
							className="text-center"
							variants={cardVariants}
						>
							<h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-blue-200 flex items-center justify-center gap-1">
								<FiTrendingUp className="text-sm" />
								Student Resources
							</h4>
							<ul className="space-y-0.5 text-gray-300 text-xs">
								{[
									{ label: "Apply Today", href: "https://www.bayvalleytech.com/apply" },
									{ label: "Contact", href: "https://www.bayvalleytech.com/contact-us" },
									{ label: "About Us", href: "https://www.bayvalleytech.com/about" }
								].map((link, index) => (
									<motion.li
										key={link.label}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.3 + index * 0.1 }}
									>
										<motion.a 
											href={link.href} 
											target="_blank" 
											rel="noopener noreferrer" 
											className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
											whileHover={{ x: 5 }}
										>
											<FiArrowRight className="text-xs" />
											{link.label}
										</motion.a>
									</motion.li>
								))}
							</ul>
						</motion.div>

						{/* Contact info section */}
						<motion.div 
							className="text-center md:text-right"
							variants={cardVariants}
						>
							<h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-blue-200 flex items-center justify-center md:justify-end gap-1">
								<FiMail className="text-sm" />
								Connect With Us
							</h4>
							<motion.p 
								className="text-gray-300 mb-0.5 text-xs"
								whileHover={{ scale: 1.05 }}
							>
								<a href="mailto:info@bayvalleytech.com" className="hover:text-white transition break-all">
									info@bayvalleytech.com
								</a>
							</motion.p>
							<p className="text-gray-300 mb-1.5 sm:mb-2 text-xs">Join our Discord for quick help!</p>
						</motion.div>
					</motion.div>

					{/* Footer quote and copyright */}
					<motion.div 
						className="border-t border-gray-700 pt-2 sm:pt-3 text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						<motion.p 
							className="text-gray-400 mb-1.5 sm:mb-2 text-xs px-1 italic"
							animate={{ opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
							"If you can dream it, you can achieve it." - Bay Valley Tech Community
						</motion.p>
						<p className="text-gray-400 text-xs px-1">
							&copy; 2025 Bay Valley Tech. All rights reserved.
						</p>
					</motion.div>
				</div>
			</motion.footer>
		</div>
	);
}
