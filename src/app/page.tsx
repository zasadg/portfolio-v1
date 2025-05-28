"use client";
import Hero from "./hero";
import Project1 from "./project-1";
import Project2 from "./project-2";
import Code from "./code";
import Other from "./other";
import Footer from "./footer";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Navigation from "./components/navigation";
import ScrollToTop from "./components/scrollToTop";

export default function Home() {
  return (
    <div className="relative bg-white">
      <Navigation />
      <ParallaxProvider>
        <ParallaxBanner
            layers={[
                {
                    image: '/static/banner-background.svg',
                    speed: -10,
                    opacity: [0, 0], // Reduced opacity
                },
                {
                    image: '/static/banner-foreground-hero.svg',
                    speed: -20,
                    opacity: [0.1, 0.1], // Reduced opacity
                    className: 'w-full object-cover',
                },
            ]}
          className="bg-[#2D3748] hero-section"
        >
            <Hero />
        </ParallaxBanner>
        <ParallaxBanner
            layers={[
                {
                    image: '/static/banner-background.svg',
                    speed: -80,
                    opacity: [0, 0], // Reduced opacity
                },
                {
                    image: '/static/banner-foreground.svg',
                    speed: -200,
                    opacity: [0.1, 0.1], // Reduced opacity
                    className: 'w-full object-cover',
                },
            ]}
          className="white"
        >
            <Project1 />
            <Project2 />

            <Code />
            <Other />
            <Footer />
        </ParallaxBanner>
        <ScrollToTop />
      </ParallaxProvider>
    </div>
  );
}
