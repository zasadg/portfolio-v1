"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Project2() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="relative w-full lg:px-32 px-16 py-12 flex flex-col justify-center items-left">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-[0.4] w-full">
                        <p className="text-black text-lg font-medium">
                            <a href="https://rentnobee.com" className="flex items-center gap-2 text-black hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image src="/Nobee_icon.png" alt="logo" width={18} height={18} />
                                rentnobee.com

                            </a>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-2 text-[#42A87A]">Properties marketplace</h1>
                        <p className="text-md mb-4">
                            This project introduces a multi-agent workflow system designed to improve task execution by orchestrating multiple specialized agents such as web search, planning, document retrieval, and web crawling. The interface clearly separates the workflow steps and their outputs, making complex processes transparent and manageable.
                        </p>


                        <button
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                                if (!isExpanded) {
                                    setTimeout(() => {
                                        const element = document.getElementById('project-details-2');
                                        if (element) {
                                            const offset = element.getBoundingClientRect().top + window.pageYOffset;
                                            window.scrollTo({
                                                top: offset,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }, 100);
                                }
                            }}
                            className="button text-[#2d8c61]"
                        >
                            {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                        </button>
                    </div>
                    <div className="flex-[0.6] w-full">
                        <Image
                            src="/projects_images/project-2_thumbnail.png"
                            alt="Project image"
                            width={4800}
                            height={3200}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {isExpanded && (
                <section className="details max-w-full lg:px-32 px-16 py-16 relative bg-[#259d671b]" id="project-details-2">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#2d8c61]">Solving agent workflow problems</h2>

                            <p className="project-description">
                                My role involved creating a mobile app for agents that centralized their communication and streamlined how they managed showings. We built a smart scheduling system, complete with integrated maps, which dramatically cut down their prep time <span className="inline-block font-bold"> to ~20% </span>. These changes led to an <span className="inline-block font-bold"> 18% jump </span> in agent productivity and even contributed to a <span className="inline-block font-bold"> 32% increase </span> in overall revenue for the business.
                            </p>

                            <h6 className="project-role">Role</h6>
                            <p className="project-tag text-[#2d8c61]">Agents mobile app • Usability testing • Interaction Design  </p>
                        </div>
                        <Image
                            src="/projects_images/details-2-1-1.png"
                            alt="Project detail 1"
                            width={4800}
                            height={3200}
                            className="w-full h-auto pt-4"
                            loading="lazy"
                        />
                        <Image
                            src="/projects_images/details-2-1-7.png"
                            alt="Project detail 1"
                            width={4800}
                            height={3200}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        
                         <Image
                                    src="/projects_images/details-2-1-14.png"
                                    alt="Project detail 2"
                                    width={4800}
                                    height={3200}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-2-1-3.png"
                                    alt="Project detail 1"
                                    width={4800}
                                    height={3200}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-2-1-2.png"
                                    alt="Project detail 1"
                                    width={4800}
                                    height={3200}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>

                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-2-1-4.png"
                                    alt="Project detail 2"
                                    width={4800}
                                    height={3200}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-2-1-5.png"
                                    alt="Project detail 2"
                                    width={4800}
                                    height={3200}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>




                    </div>


                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#2d8c61]">Experience of property manager relationship</h2>
                            <p className="project-description">
                                I helped design a centralized platform that brought all those different tools under one roof, making it much easier to manage listings and engage with clients. We refined communication flows that really sped things up between teams and clients. The result? We managed to streamline the showing process by about 40% and saw a threefold increase in platform traffic. It truly made a difference in how relationships were built and maintained.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag text-[#226c4b]">Scheduling system • Workflow design • Stakeholder management</p>
                        </div>
                        <Image
                            src="/projects_images/details-2-2-1.png"
                            alt="Project detail 7"
                            width={4800}
                            height={3200}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        <Image
                            src="/projects_images/details-2-2-2.png"
                            alt="Project detail 7"
                            width={4800}
                            height={3200}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        <Image
                            src="/projects_images/details-2-2-3.png"
                            alt="Project detail 7"
                            width={4800}
                            height={3200}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#2d8c61]">Documentation & design system</h2>
                            <p className="project-description">
                                Across the products, contributing to our design system was key – it ensured everything looked and felt consistent across all our products, making our work much more scalable and efficient. So we keep the system clear, detailed design specifications and user flows, like client journeys and showing maps, so everyone knew exactly what to build.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag text-[#2d8c61]">Documentation • Technical writing • Knowledge transfer</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <Image
                                    src="/projects_images/details-2-1-9.png"
                                    alt="Documentation overview"
                                    width={4800}
                                    height={3200}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                            <Image
                                src="/projects_images/details-2-2-6.png"
                                alt="Technical specifications"
                                width={4800}
                                height={3200}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                            <Image
                                src="/projects_images/details-2-2-7.png"
                                alt="API documentation"
                                width={4800}
                                height={3200}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}