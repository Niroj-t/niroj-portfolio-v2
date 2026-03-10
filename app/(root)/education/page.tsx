"use client"

import Header from "../../_components/header"
import Navigation from "../../_components/navigation"
import dynamic from "next/dynamic"

import EducationSkeleton from "../../_components/skeleton/education"

const Education = dynamic(() => import("../../_components/education"), {
  loading: () => <EducationSkeleton />,
})
const Footer = dynamic(() => import("../../_components/footer"), {
  loading: () => <div className="h-16 bg-card animate-pulse" />,
})

export default function EducationPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation />
      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8">
        <Education />
      </main>
      <Footer />
    </div>
  )
}

