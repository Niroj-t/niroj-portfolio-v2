"use client"

import Header from "../../_components/header"
import Navigation from "../../_components/navigation"
import dynamic from "next/dynamic"

import ProjectsSkeleton from "../../_components/skeleton/projects"

const Projects = dynamic(() => import("../../_components/projects"), {
  loading: () => <ProjectsSkeleton />,
})
const Footer = dynamic(() => import("../../_components/footer"), {
  loading: () => <div className="h-16 bg-card animate-pulse" />,
})

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation />
      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

