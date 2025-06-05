"use client";
import Hero from "./hero";
import Project1 from "./project-1";
import Project2 from "./project-2";
import Code from "./app-code";
import Other from "./other";
import Footer from "./footer";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="relative ">
      <Navigation />
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: '/static/banner-background.svg',
              speed: -10,
              opacity: [1, 1], // Reduced opacity
            },
            {
              image: '/static/banner-foreground-hero.svg',
              speed: -20,
              opacity: [0.1, 0.1], // Reduced opacity
              className: 'w-full object-cover',
            },
          ]}
          className="bg-[#222222]"
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
                    opacity: [0.05, 0.05], // Reduced opacity
                    className: 'w-full object-cover',
                },
            ]}
          className="white"
        >
            <Project1 />
            <Project2 />
            <Code />
        </ParallaxBanner>


        <ParallaxBanner
          layers={[
            {
              image: '/static/banner-background.svg',
              speed: -10,
              opacity: [1, 1], // Reduced opacity
            },
            {
              image: '/static/banner-foreground-hero.svg',
              speed: -20,
              opacity: [0.1, 0.1], // Reduced opacity
              className: 'w-full object-cover',
            },
          ]}
          className="bg-[#4A5A84]"
        >
          <Other />
        </ParallaxBanner>


        <ParallaxBanner
          layers={[
            {
              image: '/static/banner-background.svg',
              speed: -10,
              opacity: [1, 1],
              className: 'pointer-events-none'
            },
            {
              image: '/static/banner-foreground-hero.svg',
              speed: -20,
              opacity: [0.1, 0.1],
              className: 'w-full object-cover pointer-events-none'
            },
          ]}
          className="bg-[#222222]"
        >
          <div className="pointer-events-auto">
            <Footer />
          </div>
        </ParallaxBanner>

      </ParallaxProvider>
      <ScrollToTop />
    </div>

  );
}


{/* // "use client";
// import Hero from "./hero";
// import Project1 from "./project-1";
// import Project2 from "./project-2";
// import Code from "./app-code";
// import Other from "./other";
// import Footer from "./footer";
// import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
// import ScrollToTop from "./components/ScrollToTop";
// import Navigation from "./components/Navigation";

// export default function Home() {
//   return (
//     <div className="relative bg-white">
//       <Navigation />
//       <ParallaxProvider>
//         <ParallaxBanner
//             layers={[
//                 {
//                     image: '/static/banner-background.svg',
//                     speed: -10,
//                     opacity: [1, 1], // Reduced opacity
//                 },
//                 {
//                     image: '/static/banner-foreground-hero.svg',
//                     speed: -20,
//                     opacity: [0.1, 0.1], // Reduced opacity
//                     className: 'w-full object-cover',
//                 },
//             ]}
//           className="bg-[#222222] hero-section"
//         >
//             <Hero />
//         </ParallaxBanner>
//         <ParallaxBanner
//             layers={[
//                 {
//                     image: '/static/banner-background.svg',
//                     speed: -80,
//                     opacity: [0, 0], // Reduced opacity
//                 },
//                 {
//                     image: '/static/banner-foreground.svg',
//                     speed: -200,
//                     opacity: [0.05, 0.05], // Reduced opacity
//                     className: 'w-full object-cover',
//                 },
//             ]}
//           className="white"
//         >
//             <Project1 />
//             <Project2 />
//             <Code />
//             <ParallaxProvider>
//         <ParallaxBanner
//             layers={[
//               {
//                 image: '/static/banner-background.svg',
//                 speed: -10,
//                 opacity: [1, 1], // Reduced opacity
//               },
//               {
//                 image: '/static/banner-foreground-hero.svg',
//                 speed: -20,
//                 opacity: [0.1, 0.1], // Reduced opacity
//                 className: 'w-full object-cover',
//               },
//             ]}
//           className="bg-[#4A5A84] Other"
//         >
//             <Other />
//             </ParallaxBanner>
//             </ParallaxProvider>
//             <Footer />
//         </ParallaxBanner>
//         <ScrollToTop />
//       </ParallaxProvider>
//     </div>
//   );
// } */}