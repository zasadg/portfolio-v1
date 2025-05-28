"use client";
import { FiExternalLink } from "react-icons/fi";
import { useState } from 'react';
import Image from 'next/image';

export default function Project1() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="relative w-full lg:px-32 px-16 py-16 flex flex-col justify-center items-left" id="projects">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-[0.4] w-full">
                        <p className="text-black text-lg font-medium">
                            <a href="https://endash.ai" className="flex items-center gap-2 text-black hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                endash.ai
                                <FiExternalLink className="w-4 h-4" />
                            </a>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#4B51BF]">Data analytics platform</h1>
                        <p className="text-md mb-4">
                            Endash.AI is a platform designed to simplify complex data workflows, enabling teams to focus on analyzing insights rather than managing fragmented data. The project aimed to assist small to mid-sized e-commerce businesses in transforming raw, unstructured data into real-time, actionable insights without requiring deep technical expertise.
                        </p>

                        {/* <div className="flex gap-3 mb-8">
                            <span className="px-2 py-1.5 rounded-md bg-blue-100 text-black text-sm font-medium border border-blue-200">Design</span>
                            <span className="px-2 py-1.5 rounded-md bg-purple-100 text-black text-sm font-medium border border-purple-200">Development</span>
                            <span className="px-2 py-1.5 rounded-md bg-green-100 text-black text-sm font-medium border border-green-200">Product</span>
                            <span className="px-2 py-1.5 rounded-md bg-orange-100 text-black text-sm font-medium border border-orange-200">Strategy</span>
                        </div> */}

                        <blockquote className="mb-8">
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn&apos;t really do it, they just saw something. 
                            <span>Steve Jobs</span>
                        </blockquote>

                        <button
                            onClick={() => {
                                setIsExpanded(!isExpanded);
                                if (!isExpanded) {
                                    setTimeout(() => {
                                        const element = document.getElementById('project-details');
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
                            className="button"
                        >
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                    <div className="flex-[0.6] w-full">
                        <Image
                            src="/projects_images/project-1_thumbnail.png"
                            alt="Project image"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {isExpanded && (
                <section className="details max-w-full lg:px-32 px-16 py-16 relative" id="project-details">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Transforming analytics experiences</h2>

                            <p className="project-description">
                            This project, Endash.AI, focused on transforming complex customer behavior data into actionable insights, tackling challenges like data fragmentation and analysis complexity for e-commerce, marketing, and sales teams. We developed a solution combining AI, automation, and an intuitive workflow with features like dashboard templates, automated data syncing, and AI-assisted data modeling. The impact was significant: 12 out of 15 enterprise customers adopted the new dashboard within four weeks, we achieved a peak DAU/WAU stickiness of 47% and a 32% activation rate in the first month, and the platform drove an 8x growth in Monthly Recurring Revenue (MRR) over the year. This demonstrates how effectively we turned unseen data into a powerful driver for business growth and user engagement.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX • Interface Design • Code</p>
                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <Image
                            src="/projects_images/details-1-1.png"
                            alt="Project detail 1"
                            width={1200}
                            height={800}
                            className="w-full h-auto py-8"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <Image
                                    src="/projects_images/details-1-1-2.png"
                                    alt="Project detail 1"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-4.png"
                                    alt="Project detail 1"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-1-8.png"
                                    alt="Project detail 2"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-5.png"
                                    alt="Project detail 2"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-12.png"
                                    alt="Project detail 2"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>




                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">UX Research and design</h2>
                            <p className="project-description">
                                Conducted extensive user research with e-commerce retailers, marketers, and sales teams to identify pain points. Designed intuitive workflows and dashboards that cater to both technical and non-technical users, reducing cognitive load and enhancing user engagement.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX research • User interveiw • Insight findings</p>


                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-3.png"
                                    alt="Project detail 3"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-4.png"
                                    alt="Project detail 4"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                {/* <p className="text-gray-600">Data pipeline to extract insights</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-5.png"
                                    alt="Project detail 5"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-6.png"
                                    alt="Project detail 6"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                        </div>

                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Extract data insights</h2>
                            <p className="project-description">
                            Our core innovation was how we enabled users to effortlessly extract data insight and understand their business better. This worked through a combination of AI-assisted data modeling and an intuitive metric builder. Essentially, raw, unseen data flowed into the system, where our AI would automatically begin to structure and make sense of it. Users could then leverage the metric builder – a user-friendly interface – to define and build custom metrics and dashboards without needing to write code or understand complex database queries. This process transformed raw data points into meaningful KPIs, trends, and patterns, directly showing how customer behavior influenced outcomes and making insights immediately actionable for decision-making.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">UX research • User interveiw • Insight findings</p>


                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <Image
                            src="/projects_images/details-1-2.png"
                            alt="Project detail 1"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <Image
                                    src="/projects_images/details-1-1-9.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-10.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-1-11.png"
                                    alt="Project detail 8"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                {/* <p className="text-gray-600">Data pipeline to extract insights</p> */}
                            </div>
                        </div>

                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Data workflow documentation</h2>
                            <p className="project-description">
                            A crucial part of our process was comprehensive documentation. We meticulously created detailed design specifications, user flows, and sitemaps to clearly communicate design intent. This thorough documentation streamlined the design handoff, ensuring smooth implementation and consistency by bridging the gap between design and development.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag">Documentation • Process Design • Technical Writing</p>
                        </div>
                        {/*Images grid */}
                
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-1-13.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-14.png"
                                    alt="Project detail 8"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-1-15.png"
                                    alt="Project detail 8"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-16.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div> */}
                            <div className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <Image
                                    src="/projects_images/details-1-1-15.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-17.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-18.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                <Image
                                    src="/projects_images/details-1-1-19.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Project Walkthrough</h2>
                            <p className="project-description">
                                A short summarize walkthrough of the project implementation.
                            </p>
                        </div>
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.loom.com/embed/485ed363194a47f3ab628780611122fb?sid=a590cd35-8510-4f0b-823a-a4456deb7d66"
                                allowFullScreen
                                className="w-full h-full rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                    </div>

                </section>
            )}
        </>
    );
}
