"use client";
import Navigation from "../components/Navigation";
import Image from "next/image";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <ParallaxProvider>
    <ParallaxBanner
        layers={[
            {
                image: '/static/banner-background.svg',
                speed: -10,
                opacity: [1, 1],
                className: 'pointer-events-none',
            },
            {
                image: '/static/banner-foreground-hero.svg',
                speed: -20,
                opacity: [0.05, 0.05],
                className: 'w-full object-cover pointer-events-none',
            },
        ]}
      className="bg-[#222222]"
    >
    <div className="min-h-screen text-[#E6E6E6] relative z-10">
      <Navigation />
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start sm:flex-row sm:items-center gap-6 mb-10"
        >
          <Image
            src="/avatar.png"
            alt="Profile photo"
            width={88}
            height={88}
            className="rounded-full grayscale object-cover border border-[#333]"
            priority
          />
          <div>
            <h1 className="text-2xl font-semibold text-white">Khang NM</h1>
            <div className="text-[#b0b0b0] mt-1 text-base">Product designer living in Saigon</div>
            <a
              href="https://portfolio-v1-nzcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-[#232526] text-[#b0b0b0] hover:bg-[#333] transition"
            >
              knm journeys
            </a>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-base font-medium text-white mb-2">About</h2>
          <div className="text-[#b0b0b0] text-base">
            Product designer at Endash, crafting meaningful experiences for future products
          </div>
        </motion.div>

        {/* Work Experiences Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-base font-medium text-white mb-6">Work experiences</h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="w-24 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">2024 - Now</div>
              <div>
                <a href="https://endash.ai" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  Product designer at Endash <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  Data analytics platform transforming raw data into actionable insights with AI and automation supporting across user journey.
                </div>
              </div>
            </motion.div>
            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="w-24 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">2022 - 2023</div>
              <div>
                <a href="https://mothership.sg/2021/03/ucars-huawei-singapore/" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  Product designer at Ucars <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  Vehicle marketplace that helps car owners and dealers streamline their find, buys and sell process in marketplaces.
                </div>
              </div>
            </motion.div>
            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="w-24 flex-shrink-0 text-[#7c7c7c] text-sm font-medium">2021 - 2023</div>
              <div>
                <a href="https://rentnobee.com" className="text-white font-medium hover:underline inline-flex items-center gap-1">
                  User experiences designer at Nobee <span aria-hidden>↗</span>
                </a>
                <div className="text-[#b0b0b0] text-sm mt-1">
                  Property rental platform that connects landlords and tenants to find the right home for their needs.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <h2 className="text-base font-medium text-white mb-6">Contact</h2>
          <div className="flex gap-4 mt-8 text-2xl relative z-20">
            <a href="https://www.linkedin.com/in/khang-nmt/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/zasadg" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto:khangnmt1502@gmail.com" target="_blank">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </ParallaxBanner>
    </ParallaxProvider>
  );
} 