"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Project1() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <section className="relative w-full lg:px-32 px-16 py-28 flex flex-col justify-center items-left" id="projects">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-[0.4] w-full">
                        <p className="text-black text-lg font-medium">
                            <a href="https://endash.ai/" className="flex items-center gap-2 text-black hover:opacity-80" target="_blank" rel="noopener noreferrer">
                                <Image src="/Endash_icon.svg" alt="logo" className="rounded-sm" width={18} height={18} />
                                endash.ai
                            </a>
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-2 text-[#4B51BF]">Data analytics platform</h1>
                        <p className="text-md mb-4">
                            Endash.AI is a platform designed to simplify complex data workflows, enabling teams to focus on analyzing insights rather than managing fragmented data. Endash aims to assist small to mid-sized e-commerce businesses in transforming raw, unstructured data into real-time, actionable insights without requiring deep technical expertise.

                        </p>


                        <blockquote className="mb-8 mt-8 text-sm">
                            I was in charge of the designing for the platform, right from ideation concept, running product discovery with manager, conduct and tailoring insights to user journey, design and discuss logical flow with development team.

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
                            className="button text-[#4B51BF]"
                        >
                            {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
                        </button>
                    </div>
                    <div className="flex-[0.6] w-full">
                        <Image
                            src="/projects_images/project-1_thumbnail.png"
                            alt="Project image"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {isExpanded && (
                <section className="details max-w-full lg:px-32 px-16 py-16 relative bg-[#1f45961d]" id="project-details">
                    <div className="">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Transforming analytics experiences</h2>

                            <p className="project-description">
                                Endash helps e-commerce, marketing, and sales teams make sense of messy customer data. I designed a workflow that combines AI, automation, and intuitive dashboards—making it easy to model data, sync sources, and start fast with smart templates. Within 4 weeks, 12 of 15 enterprise clients adopted the new system. We hit <span className="inline-block font-bold"> 47% stickiness </span> and <span className="inline-block font-bold"> 32% activation </span> in the first month, <span className="inline-block font-bold"> 8× MRR growth </span> in 10 months.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag text-[#4B51BF]">UX design • Product thinking • Workflow design • Data visualization • Product documentation</p>
                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <Image
                            src="/projects_images/details-1-1.png"
                            alt="Project detail 1"
                            width={1200}
                            height={800}
                            className="w-full h-auto py-8"
                            loading="lazy"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <Image
                                    src="/projects_images/details-1-1-2.png"
                                    alt="Project detail 1"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-1-1-4.png"
                                    alt="Project detail 1"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>

                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-1-8.png"
                                    alt="Project detail 2"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-1-1-5.png"
                                    alt="Project detail 2"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-1-1-12.png"
                                    alt="Project detail 2"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>




                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">UX Research and design</h2>
                            <p className="project-description">
                                Conducted user research with e-commerce retailers, marketers, and sales teams to identify pain points. Collaborate with data and product teams to define intuitive workflows and dashboards that tailored to both technical and non-technical users, reducing cognitive load and enhancing user engagement.
                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag text-[#4B51BF]">User interveiw • User journey mapping • Usability testing</p>


                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-3.png"
                                    alt="Project detail 3"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <div className="text-gray-600 text-sm text-center">Target user interview</div>
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-4.png"
                                    alt="Project detail 4"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <div className="text-gray-600 text-sm text-center">Persona types</div>
                                {/* <p className="text-gray-600">Data pipeline to extract insights</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-5.png"
                                    alt="Project detail 5"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <div className="text-gray-600 text-sm text-center">Mapping user journey</div>
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                            <div className="space-y-4">
                                <Image
                                    src="/projects_images/details-1-6.png"
                                    alt="Project detail 6"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <div className="text-gray-600 text-sm text-center">User insights findings</div>
                                {/* <p className="text-gray-600">Dashboard with templates to kick start</p> */}
                            </div>
                        </div>

                    </div>

                    <div className="pt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-[#4B51BF]">Extract data insights</h2>
                            <p className="project-description">
                                Our core innovation was how we enabled users to effortlessly extract data insight and understand their business better. Essentially, raw, unseen data flowed into the system, where our AI would automatically begin to structure and make map it to data modeling. Users could then leverage the metric builder to define and build custom metrics and dashboards without needing to write code or understand complex database queries.

                            </p>
                            <h6 className="project-role">Role</h6>
                            <p className="project-tag text-[#4B51BF]">Data transformation • Data modeling • Metrics builder</p>


                        </div>
                        {/*Images grid */}
                        {/* <h1 className="text-gray-600 text-lg font-medium">Dashboard with templates to kick start</h1> */}
                        <Image
                            src="/projects_images/details-1-2.png"
                            alt="Project detail 1"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4 lg:col-span-2">
                                <Image
                                    src="/projects_images/details-1-1-9.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-1-1-10.png"
                                    alt="Project detail 7"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
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
                                    loading="lazy"
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
                            <p className="project-tag text-[#4B51BF]">Documentation • Process Design • Technical Writing • PRD • Research findings</p>
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
                                    loading="lazy"
                                />
                                <Image
                                    src="/projects_images/details-1-1-14.png"
                                    alt="Project detail 8"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    loading="lazy"
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
                                        loading="lazy"
                                    />
                                    <Image
                                        src="/projects_images/details-1-1-17.png"
                                        alt="Project detail 7"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                    <Image
                                        src="/projects_images/details-1-1-18.png"
                                        alt="Project detail 7"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                    <Image
                                        src="/projects_images/details-1-1-19.png"
                                        alt="Project detail 7"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="pt-24">
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-2 text-[#4B51BF]">Project Walkthrough</h2>
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

                        <div className="pt-24">
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-2 text-[#4B51BF]">Published reports</h2>
                                <p className="project-description">
                                    Live reports published on Endash.ai.
                                </p>
                            </div>
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://app.endash.ai/en/d/site/Endash%20Guidance-4e6445aa-e5b8-4338-9f73-5fbaf4cb4915"
                                    title="description"
                                    className="w-full h-full rounded-md shadow-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
