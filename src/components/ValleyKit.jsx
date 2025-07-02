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
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      <header className="bg-white shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold text-orange-500">ValleyKit</h1>
        <p className="text-sm text-gray-600">A toolkit by Bay Valley Tech</p>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <div key={tool.title} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{tool.description}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; 2025 ValleyKit. Built by Bay Valley Tech.
      </footer>
    </div>
  );
}