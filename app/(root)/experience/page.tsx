"use client"

import Header from "../../_components/header"
import Navigation from "../../_components/navigation"
import dynamic from "next/dynamic"

import ExperienceSkeleton from "../../_components/skeleton/experience"

const Experience = dynamic(() => import("../../_components/experience"), {
  loading: () => <ExperienceSkeleton />,
})
const Footer = dynamic(() => import("../../_components/footer"), {
  loading: () => <div className="h-16 bg-card animate-pulse" />,
})

export default function ExperiencePage() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation />
      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8">
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

