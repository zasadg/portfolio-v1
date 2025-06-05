"use client";

import Image from 'next/image';

export default function SpeakingWriting() {
    return (
        <section className="relative w-full lg:px-32 px-16 py-16 flex flex-col justify-center items-left" id="others">
            <h2 className="text-3xl md:text-4xl font-bold  mb-10 text-white">Other projects & reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 pb-8">

                {/* Card 1 */}
                <div className="flex flex-col h-full">
                <div className="flex-[0.6] w-full">
                <a href="https://knm-gamma.vercel.app/Others/About-me" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/projects_images/Other_2.png"
                            alt="Project image"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                        </a>
                    <div className="pt-4">
                        <div className="font-semibold text-base text-white mb-1">How i works as a designer</div>
                        <div className="text-white text-sm">About me and my work process</div>
                    </div>
                    </div>
                </div>
                
                
                {/* Card 3 */}
                <div className="flex flex-col h-full">
                <div className="flex-[0.6] w-full">
                <a href="https://knm-gamma.vercel.app" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/projects_images/Other_1.png"
                            alt="Project image"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                        </a>
                    <div className="pt-4">
                        <div className="font-semibold text-base text-white mb-1">Projects & journals</div>
                        <div className="text-white text-sm">Projects details and notes in Obsidian</div>
                    </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="flex flex-col h-full">
                <div className="flex-[0.6] w-full">
                <a href="https://knm-gamma.vercel.app/Projects/Shifting-gears-in-vehicle-system" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/projects_images/Other_4.png"
                            alt="Project image"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                        </a>
                    <div className="pt-4">
                        <div className="font-semibold text-base text-white mb-1">Vehicle trading system</div>
                        <div className="text-white text-sm">Building experiences for vehicle market in Singapore</div>
                    </div>
                    </div>
                </div>
            </div>

            {/* published
            <div className="mt-8">
                <div className="text-[#4B51BF] font-semibold text-lg">Published</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
                    <div>
                        Let&apos;s talk about design portfolios<br />
                        <span className="font-bold">uxdesign.cc</span>
                    </div>
                    <div>
                        The Designers Guide to Git<br />
                        <span className="font-bold">MarvelApp Blog</span>
                    </div>
                    <div>
                        A reading list for new designers<br />
                        <span className="font-bold">UX Planet</span>
                    </div>
                </div>
            </div> */}
        </section>
    );
}