// Import React and hooks for state and effects
import React, { useState, useEffect } from "react";
// Import animation libraries
import { motion, AnimatePresence } from "framer-motion";
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
	FiAward,
	FiEye,
	FiX
} from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";
// Import animation on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import JoinButton from "./joinbutton.tsx";
// Import EmailJS for feedback form
import emailjs from 'emailjs-com';
import SendFeedbackButton from "./SendFeedbackButton.tsx";

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
		y: 30,
		scale: 0.95,
	},
	visible: { 
		opacity: 1, 
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			damping: 30,
			stiffness: 400,
			duration: 0.6,
		},
	},
	hover: {
		y: -12,
		scale: 1.02,
		transition: {
			type: "spring",
			damping: 25,
			stiffness: 400,
		},
	},
};

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

	// State for feedback form
	const [showFeedbackForm, setShowFeedbackForm] = useState(false);
	const [feedbackForm, setFeedbackForm] = useState({
		email: '',
		subject: '',
		feedback: ''
	});
	// State for custom feedback message modal
	const [feedbackMessage, setFeedbackMessage] = useState("");
	
	// State for preview image modal
	const [previewImage, setPreviewImage] = useState(null);
	const [showPreview, setShowPreview] = useState(false);

	// Handle form input changes
	const handleFormChange = (e) => {
		setFeedbackForm({
			...feedbackForm,
			[e.target.name]: e.target.value
		});
	};

	// Handle preview image display
	const handlePreviewImage = (tool) => {
		setPreviewImage(tool);
		setShowPreview(true);
	};

	const closePreview = () => {
		setShowPreview(false);
		setTimeout(() => setPreviewImage(null), 300);
	};

	// Replace the handleFormSubmit function to use EmailJS
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
		const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
		const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

		emailjs.send(
			SERVICE_ID,
			TEMPLATE_ID,
			{
				from_email: feedbackForm.email,
				subject: feedbackForm.subject,
				message: feedbackForm.feedback
			},
			USER_ID
		)
		.then((result) => {
			setFeedbackMessage('Thank you for your feedback! We appreciate your input and will review your message soon.');
			setShowFeedbackForm(false);
			setFeedbackForm({ email: '', subject: '', feedback: '' });
		}, (error) => {
			setFeedbackMessage('Failed to send feedback. Please try again.');
		});
	};
	
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
			{/* Subtle background wallpaper pattern for style */}
			<div className="absolute inset-0 opacity-[0.15] pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_25px_25px,theme(colors.blue.600)_2px,transparent_2px)] bg-[size:50px_50px]"></div>
				<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,theme(colors.indigo.500/0.3)_35%,theme(colors.indigo.500/0.3)_65%,transparent_65%)] bg-[size:20px_20px]"></div>
				<div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,theme(colors.blue.400/0.2)_60deg,transparent_120deg,theme(colors.purple.400/0.2)_180deg,transparent_240deg,theme(colors.cyan.400/0.2)_300deg,transparent_360deg)] bg-[size:100px_100px]"></div>
			</div>

			{/* Main section for the Student Learning Hub */}
			<section className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
				{/* Header card with title and description */}
				<motion.div 
					className="text-center mb-6 sm:mb-8 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-br from-white/90 via-blue-50/90 to-indigo-50/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-blue-100/60 shadow-lg max-w-4xl mx-auto relative overflow-hidden"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{/* Decorative background pattern */}
					<div className="absolute inset-0 opacity-[0.03]">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.blue.500)_1px,transparent_0)] bg-[size:24px_24px]"></div>
					</div>

					<div className="relative z-10 flex flex-col items-center">
						{/* ValleyKit header image above the title */}
						<img
							src="/images/header.png"
							alt="ValleyKit Header"
							className="w-full max-w-md sm:max-w-lg mx-auto h-8 sm:h-14 object-contain drop-shadow-md mb-4"
						/>
						{/* Welcome message */}
						<motion.p 
							className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-4 sm:mb-5 leading-relaxed font-medium"
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
							<JoinButton href="https://www.bayvalleytech.com/apply" />
						</motion.div>
					</div>
				</motion.div>

				{/* Grid of learning tool cards - Minimalistic Design */}
				<motion.div 
					className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 max-w-6xl mx-auto"
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
								{/* Modern minimalistic card */}
								<motion.div 
									className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-gray-100/80 hover:shadow-xl hover:border-gray-200/80 transition-all duration-700 ease-out overflow-hidden"
									whileHover={{ y: -8 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
								>
									{/* Subtle gradient accent */}
									<motion.div 
										className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} opacity-60`}
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ delay: 0.3 + toolIndex * 0.1, duration: 0.8, ease: "easeOut" }}
									/>
									
									{/* Icon and Title Header */}
									<div className="flex items-start gap-4 mb-4">
										<motion.div
											className={`p-3 rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg`}
											whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
											transition={{ duration: 0.6 }}
										>
											<IconComponent className="w-6 h-6" />
										</motion.div>
										<div className="flex-1 min-w-0 flex items-center justify-between">
											<div className="flex flex-col min-w-0">
												<motion.h3 
													className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300"
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.4 + toolIndex * 0.1 }}
												>
													{tool.title}
												</motion.h3>
												<motion.p 
													className="text-sm font-medium text-gray-500 tracking-wide"
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.5 + toolIndex * 0.1 }}
												>
													{tool.subtitle}
												</motion.p>
											</div>
											{/* Preview Button moved to far right */}
											{tool.previewImage && (
												<motion.button
													onClick={() => handlePreviewImage(tool)}
													className="group/preview inline-flex items-center gap-2 px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 rounded-xl transition-all duration-200 text-xs font-medium border border-gray-200 hover:border-gray-300 ml-4 whitespace-nowrap"
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.75 + toolIndex * 0.1 }}
												>
													<FiEye className="w-4 h-4" />
													<span>Preview App</span>
													<motion.div
														className="opacity-0 group-hover/preview:opacity-100 transition-opacity"
														animate={{ x: [0, 2, 0] }}
														transition={{ duration: 1.5, repeat: Infinity }}
													>
														→
													</motion.div>
												</motion.button>
											)}
										</div>
									</div>

									{/* Clean feature tags */}
									<motion.div 
										className="flex flex-wrap gap-2 mb-6"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.6 + toolIndex * 0.1 }}
									>
										{tool.features.slice(0, 3).map((feature, index) => (
											<span
												key={feature}
												className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
											>
												{feature}
											</span>
										))}
									</motion.div>

									{/* Description */}
									<motion.p 
										className="text-gray-600 leading-relaxed mb-8 line-clamp-3"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.7 + toolIndex * 0.1 }}
									>
										{tool.description}
									</motion.p>

									{/* CTA Button */}
									<motion.a
										href={tool.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group/btn inline-flex items-center justify-center w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.8 + toolIndex * 0.1 }}
									>
										<motion.div
											className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
										/>
										<span className="relative z-10 flex items-center gap-3">
											{tool.button}
											<motion.div
												animate={{ x: [0, 4, 0] }}
												transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
											>
												{tool.id === 'taskpilot' ? 
													<FiGithub className="w-5 h-5" /> : 
													<FiExternalLink className="w-5 h-5" />
												}
											</motion.div>
										</span>
									</motion.a>

									{/* Subtle hover effects */}
									<motion.div
										className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
										style={{
											background: `linear-gradient(135deg, ${tool.color.includes('cyan') ? 'rgba(34, 211, 238, 0.03)' : 
												tool.color.includes('green') ? 'rgba(34, 197, 94, 0.03)' : 
												'rgba(168, 85, 247, 0.03)'} 0%, transparent 100%)`
										}}
									/>
								</motion.div>
							</motion.div>
						);
					})}
				</motion.div>
			</section>

			{/* Feedback Section - Unique Design */}
			<section className="w-full max-w-2xl mx-auto px-2 sm:px-4 pt-0 pb-0 -mb-4 -mt-4 relative z-10">
				<motion.div 
					className="w-full"
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					{/* Feedback Card with dock design, now a single row and reduced height */}
					<div className="relative w-full bg-gradient-to-br from-[#eaf3fb] via-blue-50 to-blue-100 rounded-2xl p-2 sm:p-3 border border-blue-200/50 shadow-lg overflow-visible flex flex-row items-center min-h-[120px] max-h-[160px]">
						{/* Animated background elements */}
						<div className="absolute inset-0 overflow-hidden pointer-events-none">
							<motion.div
								className="absolute w-16 h-16 bg-orange-300/20 rounded-full blur-2xl -top-8 -left-8"
								animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
								transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
							/>
							<motion.div
								className="absolute w-14 h-14 bg-red-300/20 rounded-full blur-2xl -bottom-6 -right-6"
								animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
								transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
							/>
						</div>

						<div className="relative z-10 flex flex-row items-center justify-between w-full">
							{/* Action Cards Dock Row */}
							<motion.div 
								className="flex flex-row justify-center gap-3 sm:gap-3"
								variants={{
									hidden: { opacity: 0 },
									visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
								}}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								{[
									{
										icon: BsLightbulb,
										title: "Request Tool",
										description: "Suggest new tools",
										color: "from-yellow-400 to-orange-500"
									},
									{
										icon: FiAward,
										title: "Report Bug", 
										description: "Help fix issues",
										color: "from-red-400 to-pink-500"
									},
									{
										icon: FiStar,
										title: "Share Ideas",
										description: "Suggest improvements",
										color: "from-purple-400 to-indigo-500"
									}
								].map((item, index) => {
									const IconComponent = item.icon;
									return (
										<motion.div
											key={item.title}
											className="flex flex-col items-center bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 min-w-[110px] max-w-[140px] h-[90px] justify-center"
											variants={{
												hidden: { opacity: 0, y: 10 },
												visible: { opacity: 1, y: 0 }
											}}
											whileHover={{ scale: 1.06, y: -2 }}
										>
											<div className={`w-8 h-8 mb-1 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
												<IconComponent className="w-5 h-5" />
											</div>
											<h4 className="font-bold text-gray-800 mb-0.5 text-xs text-center leading-tight">{item.title}</h4>
											<p className="text-[10px] text-gray-600 text-center leading-tight">{item.description}</p>
										</motion.div>
									);
								})}
							</motion.div>

							{/* CTA Button */}
							<div className="flex-1 flex justify-center">
								<SendFeedbackButton onClick={() => setShowFeedbackForm(true)} />
							</div>
						</div>

						{/* Feedback Form Modal - moved outside feedback section */}
						{showFeedbackForm && (
							<motion.div
								className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setShowFeedbackForm(false)}
							>
								<motion.div
									className="bg-gradient-to-br from-[#1e558e] to-blue-400 rounded-2xl p-0 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-300 relative"
									initial={{ scale: 0.8, y: 50 }}
									animate={{ scale: 1, y: 0 }}
									exit={{ scale: 0.8, y: 50 }}
									transition={{ type: 'spring', damping: 25, stiffness: 300 }}
									onClick={(e) => e.stopPropagation()}
								>
									{/* Modal Header */}
									<div className="rounded-t-2xl px-6 pt-6 pb-4 bg-gradient-to-r from-[#1e558e] to-blue-400 text-white text-center">
										<motion.div
											className="flex justify-center items-center gap-2 mb-2"
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.2, type: 'spring' }}
										>
											<div className="p-2 bg-white/20 rounded-full text-white shadow-lg">
												<FiMail className="w-5 h-5" />
											</div>
											<h3 className="text-2xl font-bold">Send Feedback</h3>
										</motion.div>
									</div>

									{/* Feedback Form */}
									<form onSubmit={handleFormSubmit} className="space-y-4 bg-white rounded-b-2xl px-6 py-6 border-t border-blue-200">
										<motion.div
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.3 }}
										>
											<label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
												Your Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={feedbackForm.email}
												onChange={handleFormChange}
												required
												className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50 text-blue-900 placeholder-black"
												placeholder="your.email@example.com"
											/>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.4 }}
										>
											<label htmlFor="subject" className="block text-sm font-semibold text-blue-900 mb-2">
												Subject
											</label>
											<select
												id="subject"
												name="subject"
												value={feedbackForm.subject}
												onChange={handleFormChange}
												required
												className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50 text-blue-900 placeholder-black text-black"
											>
												<option value="" className="text-black">Select a topic</option>
												<option value="Request a new tool" className="text-black">Request a new tool</option>
												<option value="Report a bug" className="text-black">Report a bug</option>
												<option value="Suggest an improvement" className="text-black">Suggest an improvement</option>
												<option value="General feedback" className="text-black">General feedback</option>
												<option value="Other" className="text-black">Other</option>
											</select>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.5 }}
										>
											<label htmlFor="feedback" className="block text-sm font-semibold text-blue-900 mb-2">
												Your Feedback
											</label>
											<textarea
												id="feedback"
												name="feedback"
												value={feedbackForm.feedback}
												onChange={handleFormChange}
												required
												rows={5}
												className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-blue-50/50 text-blue-900 placeholder-black resize-none"
												placeholder="Share your thoughts, suggestions, or report issues..."
											/>
										</motion.div>

										{/* Form Actions */}
										<motion.div
											className="flex gap-3 pt-4"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 }}
										>
											<button
												type="button"
												onClick={() => setShowFeedbackForm(false)}
												className="flex-1 px-4 py-3 border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
											>
												Cancel
											</button>
											<motion.button
												type="submit"
												className="flex-1 px-4 py-3 bg-gradient-to-r from-[#1e558e] to-blue-400 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-bold relative overflow-hidden"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<motion.div
													className="absolute inset-0 bg-white/20"
													initial={{ x: '-100%' }}
													whileHover={{ x: '100%' }}
													transition={{ duration: 0.5 }}
												/>
												<span className="relative z-10 flex items-center justify-center gap-2">
													<FiMail className="w-4 h-4" />
													Send Feedback
												</span>
											</motion.button>
										</motion.div>
									</form>
								</motion.div>
							</motion.div>
						)}

						{/* Custom Feedback Message Modal - moved outside feedback section */}
						{feedbackMessage && (
							<motion.div
								className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setFeedbackMessage("")}
							>
								<motion.div
									className="bg-gradient-to-br from-[#1e558e] to-blue-400 rounded-2xl max-w-md w-full shadow-2xl border border-blue-300 relative p-0"
									initial={{ scale: 0.8, y: 50 }}
									animate={{ scale: 1, y: 0 }}
									exit={{ scale: 0.8, y: 50 }}
									transition={{ type: 'spring', damping: 25, stiffness: 300 }}
									onClick={e => e.stopPropagation()}
								>
									<div className="rounded-t-2xl px-6 pt-6 pb-4 bg-gradient-to-r from-[#1e558e] to-blue-400 text-white text-center">
										<motion.div
											className="flex justify-center items-center gap-2 mb-2"
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.2, type: 'spring' }}
										>
											<div className="p-2 bg-white/20 rounded-full text-white shadow-lg">
												<FiMail className="w-5 h-5" />
											</div>
											<h3 className="text-xl font-bold">Feedback Sent</h3>
										</motion.div>
									</div>
									<div className="bg-white rounded-b-2xl px-6 py-6 border-t border-blue-200 text-center">
										<p className="text-blue-900 text-base font-semibold mb-4">{feedbackMessage}</p>
										<button
											onClick={() => setFeedbackMessage("")}
											className="px-6 py-2 bg-gradient-to-r from-[#1e558e] to-blue-400 text-white font-bold rounded-lg shadow hover:shadow-lg transition-all duration-200"
										>
											Close
										</button>
									</div>
								</motion.div>
							</motion.div>
						)}
					</div>
				</motion.div>
			</section>

			{/* Footer section with info and links */}
			<motion.footer 
				className="relative bg-[#1e558e] text-white py-0 sm:py-0 mt-6 sm:mt-8 overflow-hidden"
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
								className="flex justify-center md:justify-start items-center mb-1.5 sm:mb-2 pt-3 sm:pt-4"
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
							<h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-blue-200 flex items-center justify-center gap-1 pt-3 sm:pt-4">
								<FiTrendingUp className="text-sm" />
								Student Resources
							</h4>
							<ul className="space-y-0.5 text-gray-300 text-xs mb-0 p-1">
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
							className="text-center md:text-right pt-3 sm:pt-4"
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
						className="text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						<motion.p 
							className="text-gray-400 mb-0.5 sm:mb-1 text-xs px-1 italic"
							animate={{ opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
						</motion.p>
						<p className="text-gray-400 text-xs px-1 mt-0.5 mb-0.5">
							&copy; 2025 Bay Valley Tech. All rights reserved.
						</p>
					</motion.div>
				</div>
			</motion.footer>

			{/* Preview Image Modal - Mobile Optimized */}
			<AnimatePresence>
				{showPreview && previewImage && (
					<motion.div
						className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={closePreview}
					>
						<motion.div
							className="relative w-full h-full sm:max-w-4xl sm:max-h-[90vh] sm:w-auto sm:h-auto bg-white sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: "100%", opacity: 0 }}
							transition={{ type: "spring", damping: 30, stiffness: 400 }}
							onClick={(e) => e.stopPropagation()}
						>
							{/* Mobile Header with Pull Handle */}
							<div className="sm:hidden flex justify-center pt-2 pb-1 bg-gray-100">
								<div className="w-12 h-1 bg-gray-300 rounded-full"></div>
							</div>

							{/* Modal Header */}
							<div className={`px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${previewImage.color} text-white relative overflow-hidden flex-shrink-0`}>
								<motion.div
									className="absolute inset-0 bg-black/10"
									initial={{ x: "-100%" }}
									animate={{ x: "100%" }}
									transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
								/>
								<div className="relative z-10 flex items-center justify-between">
									<div className="flex items-center gap-3 min-w-0 flex-1">
										<div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
											{React.createElement(previewImage.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
										</div>
										<div className="min-w-0 flex-1">
											<h3 className="text-lg sm:text-xl font-bold truncate">{previewImage.title}</h3>
											<p className="text-white/80 text-xs sm:text-sm truncate">{previewImage.subtitle}</p>
										</div>
									</div>
									<motion.button
										onClick={closePreview}
										className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex-shrink-0 ml-2"
										whileTap={{ scale: 0.9 }}
									>
										<FiX className="w-5 h-5" />
									</motion.button>
								</div>
							</div>

							{/* Content Area - Scrollable */}
							<div className="flex-1 overflow-y-auto">
								{/* Image Container */}
								<div className="p-3 sm:p-6 bg-gray-50">
									<motion.div
										className="relative bg-white rounded-xl shadow-lg overflow-hidden"
										initial={{ scale: 0.95 }}
										animate={{ scale: 1 }}
										transition={{ delay: 0.2, duration: 0.4 }}
									>
										<img
											src={previewImage.previewImage}
											alt={`${previewImage.title} Preview`}
											className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[50vh]"
											loading="lazy"
										/>
									</motion.div>

									{/* Feature Tags - Always Visible on Mobile */}
									<motion.div
										className="mt-4 sm:mt-6"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										<h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features</h4>
										<div className="flex flex-wrap gap-2 mb-4">
											{previewImage.features.map((feature, index) => (
												<motion.span
													key={feature}
													className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
													initial={{ scale: 0 }}
													animate={{ scale: 1 }}
													transition={{ delay: 0.4 + index * 0.1 }}
												>
													{feature}
												</motion.span>
											))}
										</div>
										
										{/* Description */}
										<div className="bg-white rounded-lg p-4 border border-gray-200">
											<p className="text-sm text-gray-600 leading-relaxed">{previewImage.description}</p>
										</div>
									</motion.div>
								</div>
							</div>

							{/* Fixed Bottom Action Bar */}
							<div className="flex-shrink-0 p-4 sm:p-6 bg-white border-t border-gray-200 safe-area-bottom">
								<motion.div
									className="flex flex-col sm:flex-row gap-3"
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.4 }}
								>
									<motion.a
										href={previewImage.link}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r ${previewImage.color} text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 text-center`}
										whileTap={{ scale: 0.98 }}
									>
										<span className="text-sm sm:text-base">{previewImage.button}</span>
										{previewImage.id === 'taskpilot' ? 
											<FiGithub className="w-5 h-5" /> : 
											<FiExternalLink className="w-5 h-5" />
										}
									</motion.a>
									<motion.button
										onClick={closePreview}
										className="sm:hidden py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-2xl transition-colors text-sm"
										whileTap={{ scale: 0.98 }}
									>
										Close
									</motion.button>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}