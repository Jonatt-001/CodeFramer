"use client"
import React from "react";
import { cn } from "@/lib/utils";
import HeroVideoDialog from "./hero-video-dialog";
import { OrbitingCircles } from "./orbiting-circles";
import { IconSql } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "motion/react";
import { Layers2 } from "lucide-react";
import { IconLocationCode, IconDeviceLaptop } from "@tabler/icons-react";
import cf from "@/../public/codeframer.webp";
import cfLight from "@/../public/codeframer-light.webp";

export function FeaturesSection() {
    const features = [
        {
            id: 4,
            title: "Experience Kaali Coder in Action",
            description:
                "Watch a quick demo of seamless coding and AI-powered assistance.",
            skeleton: <SkeletonOne />,
            className: "col-span-1 lg:col-span-4 lg:border-r lg:border-b",
        },
        {
            id: 1,
            title: "Multiple Language Support",
            description:
                "Write and run code in various programming languages within a single environment.",
            skeleton: <SkeletonTwo />,
            className:
                "col-span-1 lg:col-span-2 lg:border-b",
        },
        {
            id: 3,
            title: "AI-Powered Code Assistance",
            description: "Kaali Coder’s built-in AI assistant, offering real-time debugging, optimization, and insights.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-2 lg:border-r",
        },
        {
            id: 2,
            skeleton: <SkeletonFour />,
            className:
                "col-span-1 lg:col-span-4",
        },

    ];
    return (
        <div className="relative z-20 max-w-7xl mx-auto bg-white dark:bg-black">
            <div className="px-8">
                <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Packed with lots of features
                </h2>

                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    From code execution to real-time debugging, Kaali Coder has tools for everything. It can even help you write, improve, and debug your code seamlessly within the editor.
                </p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 gap-4 xl:border border-neutral-300 rounded-md dark:border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className=" h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

const SkeletonThree = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-linear-to-r from-pink-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-linear-to-r from-pink-500 to-violet-500 shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-linear-to-r from-pink-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};

const SkeletonFour = () => {
    return (
        <div
            className="flex flex-1 w-full h-full min-h-[6rem] flex-col sm:flex-row space-x-2 space-y-8 sm:space-y-0"
        >
            <div
                className="sm:-rotate-6 hover:rotate-0 transition-all duration-200 h-full sm:w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Layers2 className="size-20" />
                <p className="text-center font-semibold dark:text-neutral-300 text-neutral-700 mt-4">
                    Seamless Multi-Project Management
                </p>
                <p className="text-center text-xs rounded-full px-2 py-0.5 mt-4">
                    Effortlessly create, manage, and switch between multiple projects within a streamlined, user-friendly workspace.
                </p>
            </div>
            <div className="h-full relative z-20 sm:w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <IconLocationCode className="size-20" />
                <p className="text-center font-semibold dark:text-neutral-300 text-neutral-700 mt-4">
                    Effortless Code Sharing
                </p>
                <p className="text-center text-xs rounded-full px-2 py-0.5 mt-4">
                    Share your code snippets or full projects publicly with ease, enabling seamless collaboration and showcasing.
                </p>
            </div>
            <div
                className="sm:rotate-6 hover:rotate-0 transition-all duration-200 h-full sm:w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <IconDeviceLaptop className="size-20" />
                <p className="text-center font-semibold dark:text-neutral-300 text-neutral-700 mt-4">
                    Real-Time Web Preview
                </p>
                <p className="text-center text-xs rounded-full px-2 py-0.5 mt-4">
                    Instantly visualize your web projects with live previews, ensuring faster development and immediate feedback.
                </p>
            </div>
        </div>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://video.gumlet.io/67874608a0795ccd0d9ce474/67874673a0795ccd0d9ce60e/download.mp4"
                staticThumnailImage={cfLight}
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://video.gumlet.io/67874608a0795ccd0d9ce474/67874673a0795ccd0d9ce60e/download.mp4"
                staticThumnailImage={cf}
                thumbnailAlt="Hero Video"
            />
        </div>
    );
};

export const SkeletonTwo = () => {
    return (
        <div className="h-[25rem]">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <OrbitingCircles iconSize={45}>
                    <Icons.python />
                    <Icons.node />
                    <Icons.cpp />
                    <Icons.js />
                    <Icons.sql size={40} />
                </OrbitingCircles>
                <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
                    <Icons.bash />
                    <Icons.c />
                    <Icons.html />
                    <Icons.css />
                </OrbitingCircles>
                <Image src="/logo.webp" alt="kaali coder logo" width={80} height={80} />
            </div>
        </div>
    );
}

const Icons = {
    python: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" /></svg>
    ),
    cpp: () => (
        <svg ... />
    ),
    c: () => (
        <svg ... />
    ),
    node: () => (
        <svg ... />
    ),
    js: () => (
        <svg ... />
    ),
    sql: IconSql,
    bash: () => (<svg ... />),
    html: () => (<svg ... />),
    css: () => (<svg ... />)
}