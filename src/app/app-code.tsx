"use client";
import Image from 'next/image';

export default function Code() {
    return (
        <>
            <section className="relative min-h-screen relative w-full lg:px-32 px-16 py-16 flex flex-col justify-center items-left mb-20" id="code">
                <div className="">
                    <div className="">
                        <h1 className="ext-3xl md:text-4xl font-bold mb-6 text-[#222222]">Coding</h1>
                        <p className="text-lg text-gray-700 pb-16">
                           To keep in touch with my coding journey, those are some projects t   hat I have worked on.
                        </p>
                        {/* Card Section 2*/}
                        <div className="relative">
                            <div className="bg-[#4B51BF] rounded-lg flex flex-col md:flex-row items-stretch p-8 md:pr-[36rem] relative overflow-visible min-h-[260px]">
                                {/* Text Section */}
                                <div className="flex-1 flex flex-col justify-center text-white z-10 max-w-lg">
                                    <h1 className="text-xl md:text-2xl font-bold pb-4">Interactive whiteboard</h1>
                                    <div className="text-md pb-16">
                                        A personal experience with interact.js and next.js
                                    </div>
                                    <a href="https://my-portfolio-2l3f.vercel.app" target="_blank" rel="noopener noreferrer" className="underline text-white font-semibold text-lg hover:text-purple-200 transition-colors">View project →</a>
                                </div>
                                {/* Image Section */}
                                <div className="hidden md:block">
                                    <Image
                                        src="/projects_images/Other_3.png"
                                        alt="code screenshot"
                                        width={520}
                                        height={292}
                                        className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/8 w-[520px] max-w-none drop-shadow-2xl rounded-xl z-20"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden mt-8">
                                    <Image
                                        src="/projects_images/Other_3.png"
                                        alt="code screenshot"
                                        width={520}
                                        height={292}
                                        className="w-full rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card Section 1*/}
                        <div className="relative pt-16">
                            <div className="bg-[#4A5A84] rounded-lg flex flex-col md:flex-row items-stretch p-8 md:pr-[36rem] relative overflow-visible min-h-[260px]">
                                {/* Text Section */}
                                <div className="flex-1 flex flex-col justify-center text-white z-10 max-w-lg">
                                    <h1 className="text-xl md:text-2xl font-bold pb-4">Alien invasion</h1>
                                    <div className="text-md pb-16">
                                        A space shooting games for scoring points and compete with coworkers
                                    </div>
                                    <a href="https://knm-gamma.vercel.app/Others/Side-quest" className="underline text-white font-semibold text-lg  hover:text-purple-200 transition-colors">View project →</a>
                                </div>
                                {/* Image Section */}
                                <div className="hidden md:block">
                                    <Image
                                        src="/projects_images/Other_thumbnail_1.png"
                                        alt="code screenshot"
                                        width={520}
                                        height={292}
                                        className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/8 w-[520px] max-w-none drop-shadow-2xl rounded-lg z-20"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden mt-8">
                                    <Image
                                        src="/projects_images/Other_thumbnail_1.png"
                                        alt="code screenshot"
                                        width={520}
                                        height={292}
                                        className="w-full rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    );
}