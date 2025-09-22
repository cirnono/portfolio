"use client";
import React, { useTransition, useState, useMemo } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Latest Education",
        id: "education1",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <b>Degree:</b> Master of Cybersecurity
                </li>
                <li>
                    <b>Specialisation:</b> Intelligent System
                </li>
                <li>
                    <b>Key Courses</b>
                    <br />
                    Reverse Engineering, <br />
                    Risk Management, <br />
                    Assembly Programming, <br />
                    Data Security, <br />
                    Security and Ethics, <br />
                    Penetration Testing
                </li>
                <li>
                    <b>WAM:</b> 61/100
                </li>
                <li>
                    <b>University:</b> University of New South Wales
                </li>
            </ul>
        ),
    },
    {
        title: "Previous Education",
        id: "education2",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <b>Degree:</b> Bachelor of Advanced Computing (Honor)
                    <br />
                    Bachelor of Science
                </li>
                <li>
                    <b>Specialisation:</b> Intelligent System
                </li>
                <li>
                    <b>Key Courses</b> <br />
                    Object Orientated Programming, <br />
                    Optimization, <br />
                    Machine Learning, <br />
                    Artificial In- telligence, <br />
                    Computer Vision, <br />
                    Data Mining, <br />
                    Statistics, <br />
                    Mathematics.
                </li>
                <li>
                    <b>GPA:</b> 5.8/7 (Distinction)
                </li>
                <li>
                    <b>University:</b> Australian National University
                </li>
            </ul>
        ),
    },

    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js </li>
                <li>Next.js </li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Python/Django</li>
                <li>REST APIs</li>
                <li>Postgresql</li>
                <li>MongoDB</li>
                <li>AWS (S3, EC2, Amplify, Cognito)</li>
                <li>Nginx</li>
                <li>Docker</li>
                <li>Git/GitHub</li>
                <li>Bash Automation</li>
            </ul>
        ),
    },

    {
        title: "Ability",
        id: "ability",
        content: (
            <ul className="list-disc pl-2">
                <li>Team player</li>
                <li>Communication</li>
                <li>Self-driven</li>
                <li>Critical Thinking</li>
                <li>Problem solving</li>
                <li>Bilingual in English and Chinese</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState(TAB_DATA[0].id);
    const [isPending, startTransition] = useTransition();

    const current = useMemo(
        () => TAB_DATA.find((t) => t.id == tab) ?? TAB_DATA[0],
        [tab]
    );

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    alt="About Me"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        As a seasoned Full-Stack Developer with over 3 years of
                        experience, I specialize in crafting comprehensive web
                        and mobile applications.
                    </p>
                    <div style={{ height: "20px" }}></div>

                    <p className="text-base lg:text-lg">
                        I excel in both front-end and back-end development,
                        using JavaScript frameworks like React and Vue.js for
                        dynamic interfaces, and Node.js, Python, and PHP for
                        robust server-side solutions.
                    </p>
                    <div style={{ height: "20px" }}></div>

                    <p className="text-base lg:text-lg">
                        My expertise also extends to database management with
                        MongoDB, MySQL, and PostgreSQL.
                    </p>
                    <div style={{ height: "20px" }}></div>

                    <p className="text-base lg:text-lg">
                        I prioritize user experience, integrating responsive
                        design principles for optimal performance across
                        devices. Skilled in project management and
                        problem-solving, I thrive in collaborative, fast-paced
                        environments. As a tech enthusiast, I am committed to
                        continuous learning, staying abreast of the latest
                        trends and technologies.
                    </p>
                    <div style={{ height: "20px" }}></div>

                    <p className="text-base lg:text-lg">
                        My goal is to leverage my extensive skill set to create
                        innovative, user-centric solutions that align with
                        business objectives and enhance user experiences, making
                        technology both accessible and intuitive.
                    </p>

                    <div
                        className="flex flex-wrap gap-3 mt-8"
                        role="tablist"
                        aria-label="About tabs"
                    >
                        {TAB_DATA.map((t) => (
                            <TabButton
                                key={t.id}
                                selectTab={() =>
                                    startTransition(() => {
                                        setTab(t.id);
                                    })
                                }
                                active={tab === t.id}
                            >
                                {t.title}
                            </TabButton>
                        ))}
                    </div>

                    {/* Panel */}
                    <div
                        className="mt-8"
                        role="tabpanel"
                        id={`panel-${current.id}`}
                        aria-labelledby={`tab-${current.id}`}
                    >
                        {current.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
