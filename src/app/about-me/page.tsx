"use client";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative bg-[#222222] min-h-screen text-[#E6E6E6]">
      <Navigation />
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        {/* Profile Header */}
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6 mb-10">
          <Image
            src="/profile.jpg" // Replace with your profile image path
            alt="Profile photo"
            width={88}
            height={88}
            className="rounded-full grayscale object-cover border border-[#333]"
            priority
          />
          <div>
            <h1 className="text-2xl font-semibold text-white">Your Name</h1>
            <div className="text-[#b0b0b0] mt-1 text-base">Software Designer @ Your Company in Your City, Country, He/him</div>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-[#232526] text-[#b0b0b0] hover:bg-[#333] transition"
            >
              yourwebsite.com
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-10">
          <h2 className="text-base font-medium text-white mb-2">About</h2>
          <div className="text-[#b0b0b0] text-base">
            Software Designer, Your Company — Crafting interfaces, products, and systems
          </div>
        </div>

        {/* Side Projects Section */}
        <div>
          <h2 className="text-base font-medium text-white mb-6">Side Projects</h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-20 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">Ongoing</div>
              <div>
                <a href="#" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  Styles to Variables <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  A Figma plugin that converts your local styles to variables with modes and bound back to styles, automatically
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-20 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">2024</div>
              <div>
                <a href="#" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  Raycast extension for Fathom Analytics <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  A Raycast extension to browse your website analytics coming from Fathom.
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-20 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">2022</div>
              <div>
                <a href="#" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  Raycast extension for Gather <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  Toggle your availability status, your camera, your microphone directly from Raycast.
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-20 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">2022</div>
              <div>
                <a href="#" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  Supercat <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  Turn your Product Hunt comments into beautiful images. Toggle between light and dark themes, choose your background, share on your social medias.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 