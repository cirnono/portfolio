"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import {
    easeOut,
    motion,
    useAnimation,
    useScroll,
    Variants,
} from "framer-motion";
import { prefix } from "@/utils/basePath";

const skills = [
    //front-end
    { name: "CSS", level: 0.6, angle: 960 },
    { name: "HTML", level: 1.7, angle: 920 },
    { name: "JavaScript", level: 1.2, angle: 970 },
    { name: "NextJS", level: 1.2, angle: 920 },
    { name: "Bootstrap", level: 2.4, angle: 930 },
    { name: "Vue", level: 2.2, angle: 915 },
    { name: "React", level: 1.7, angle: 965 },
    // database
    { name: "MySQL", level: 2.2, angle: -200 },
    { name: "MongoDB", level: 1.7, angle: -220 },
    { name: "PostgreSQL", level: 1.1, angle: -220 },
    // back-end
    { name: "Python", level: 1.1, angle: 1000 },
    { name: "Java", level: 0.5, angle: 1040 },
    { name: "C", level: 1.7, angle: 1000 },
    { name: "C Sharp", level: 1.1, angle: 1020 },
    { name: "C++", level: 1.1, angle: 1040 },
    { name: "PHP", level: 1.5, angle: 1060 },
    { name: "NodeJS", level: 1.7, angle: 1030 },
    { name: "Spring", level: 2, angle: 1060 },
    // tools
    { name: "Git Bash", level: 0.4, angle: 50 },
    { name: "Git", level: 2, angle: 30 },
    { name: "Photoshop", level: 0.9, angle: 20 },
    { name: "Github", level: 0.9, angle: 80 },
    { name: "Intellij", level: 1.4, angle: 10 },
    { name: "Jenkins", level: 1.9, angle: 10 },
    { name: "Latex", level: 1.5, angle: 40 },
    { name: "Postman", level: 0.9, angle: 50 },
    { name: "Unity", level: 1.5, angle: 60 },
    { name: "Visual Studio", level: 1.5, angle: 75 },
    { name: "Visual Studio Code", level: 2, angle: 85 },
];

function calculatePosition(
    level: number,
    angle: number,
    radiusX: number,
    radiusY: number
) {
    const x = radiusX * level * Math.cos((angle * Math.PI) / 180);
    const y = radiusY * level * Math.sin((angle * Math.PI) / 180);
    return { x, y };
}

const SkillsSection = () => {
    const radiusX = 125;
    const radiusY = 75;

    const controls = useAnimation();
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        // 监听滚动事件
        scrollYProgress.onChange((y) => {
            // 检查滚动位置，比如滚动超过25%
            if (y > 0.25) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        });
    }, [controls, scrollYProgress]);

    // 图标的动画变体
    const itemVariants: Variants = {
        hidden: {
            x: 0,
            y: 0,
            opacity: 0,
        },

        visible: (custom: { x: number; y: number }) => ({
            x: custom.x,
            y: custom.y,
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: easeOut },
        }),
    };

    return (
        <section id="skills">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Skills
            </h2>

            <div className="radar-chart relative mx-auto w-full max-w-[1200px] aspect-[1] overflow-visible">
                {/* 创建雷达图的背景圈 */}
                {[...Array(5)].map((e, i) => (
                    <div
                        key={i}
                        style={{
                            border: "3px solid #fff",
                            borderRadius: "35%",
                            position: "absolute",
                            width: `${(i + 1) * 250}px`, // 宽度递增
                            height: `${(i + 1) * 150}px`, // 高度递增，但小于宽度，形成椭圆
                            left: `calc(50% - ${(i + 1) * 125}px)`, // 根据宽度进行调整以使其居中
                            top: `calc(50% - ${(i + 1) * 75}px)`, // 根据高度进行调整以使其居中
                        }}
                    />
                ))}
                {/* 水平线 */}
                <div
                    style={{
                        position: "absolute",
                        height: "3px",
                        width: "100%",
                        backgroundColor: "#fff",
                        top: "50%",
                        left: 0,
                        transform: "translateY(-50%)", // 确保线条居中
                    }}
                />
                {/* 垂直线 */}
                <div
                    style={{
                        position: "absolute",
                        width: "3px",
                        height: "89%",
                        backgroundColor: "#fff",
                        left: "50%",
                        top: 50,
                        transform: "translateX(-50%)", // 确保线条居中
                    }}
                />

                {/* 放置技能图标 */}
                {skills.map((skill) => {
                    const { x, y } = calculatePosition(
                        skill.level,
                        skill.angle,
                        radiusX,
                        radiusY
                    );
                    return (
                        <motion.div
                            key={skill.name}
                            custom={{ x, y }}
                            variants={itemVariants}
                            initial="hidden"
                            animate={controls}
                            style={{
                                position: "absolute",
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                width: "60px", // 根据图标大小调整
                                height: "60px", // 根据图标大小调整
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                // 添加更多样式以正确显示图标，比如背景、边框等
                            }}
                            // 这里添加你的动画属性
                        >
                            {/* 这里应该是你的技能图标，可以使用img标签或者其他图标组件 */}
                            <Image
                                src={`${prefix}/images/skills/${skill.name.toLowerCase()}.svg`}
                                alt={skill.name}
                                width={40}
                                height={40}
                            />
                            {/* 文字说明 */}
                            <span
                                style={{
                                    marginBottom: "5px",
                                    color: "white",
                                    fontSize: "16px",
                                    textAlign: "center",
                                }}
                            >
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}

                {/* 区域描述文字 */}
                <div
                    style={{
                        position: "absolute",
                        left: "3%",
                        top: "3%",
                        color: "white",
                        fontSize: "30px",
                        // 根据需要添加更多样式
                    }}
                >
                    Front-end
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: "3%",
                        top: "3%",
                        color: "white",
                        fontSize: "30px",
                        // 根据需要添加更多样式
                    }}
                >
                    Back-end
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "3%",
                        bottom: "3%",
                        color: "white",
                        fontSize: "30px",
                        // 根据需要添加更多样式
                    }}
                >
                    Databases
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: "3%",
                        bottom: "3%",
                        color: "white",
                        fontSize: "30px",
                        // 根据需要添加更多样式
                    }}
                >
                    Tools
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
