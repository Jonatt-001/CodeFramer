"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer/Footer";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import Link from "next/link";
import ProjectCard, { ProjectCardProps, ProjectCardSkeleton } from "@/components/ui/ProjectCard";
import SearchBar from "@/components/Search/SearchBar";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [data, setData] = useState({ searchResults: { projects: [], totalPages: 1 }, loading: false, error: "" });
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")!) || 1;

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="px-5 mt-36 my-10 flex flex-col items-center justify-center">
        <h1 className="relative z-10 mx-auto lg:max-w-5xl text-center text-4xl font-bold text-neutral-700 md:text-5xl lg:text-7xl dark:text-neutral-300">
          Build, Create, and Deploy with Kaali Coder
        </h1>
        <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Kaali Coder empowers you to develop, compile, and launch your ideas without friction.
          Focus on innovation — the platform handles the complexity.
        </p>
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/compiler/python"><Button size="lg" className="px-6 w-60">
            Try Compilers
          </Button></Link>
          <Link href="/web-editor"><Button variant="outline" className="px-6 w-60" size="lg" >
            Try Web Editor
          </Button></Link>
        </div>
      </div>

      <section className="w-full py-10 h-fit relative overflow-hidden">
        <FeaturesSection />
      </section>

      <section
        id="snippets"
        className="px-5 py-10 flex gap-10 flex-col text-center items-center w-full">
        <div>
          <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Explore Snippets & Web Projects from the Kaali Community
          </h2>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Discover public snippets and shared web projects. Showcase your work, explore creative solutions, and collaborate across the Kaali ecosystem.
          </p>
        </div>

        <SearchBar 
          placeholder="Search Kaali Coder Snippets and Projects" 
          setSearchResults={setData} 
          url={`/api/projects/public?page=${page}&limit=8&search=`} 
        />

        <div className="w-full md:w-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center">
          {!data?.loading ? data?.searchResults.projects?.length !== 0 ? data.searchResults.projects?.map((project: ProjectCardProps["data"]) => {
            return <ProjectCard key={project.id} data={project} controls={false} />
          }) : <p className="sm:col-span-2 lg:col-span-3 2xl:col-span-4 text-center">No snippets found.</p> : Array.from({ length: 8 }, (_, i) => <ProjectCardSkeleton key={i} />)}
        </div>

        <div className="space-x-4">
          {page > 1 && <Link href={`/?page=${page - 1}#snippets`} className="py-2 px-4 bg-primary text-primary-foreground rounded-md disabled:opacity-65 disabled:cursor-not-allowed">Previous</Link>}
          {page < data.searchResults.totalPages && <Link href={`/?page=${page + 1}#snippets`} className="py-2 px-4 text-primary bg-secondary rounded-md disabled:opacity-30 disabled:cursor-not-allowed">Next</Link>}
        </div>
      </section>

      <Footer />

      <div className="absolute -top-10 -left-10 w-3/5 sm:w-[20rem] bg-linear-to-r dark:from-blue-700 dark:to-purple-800 blur-[120px] -z-10 -rotate-12" />
    </main>
  );
}