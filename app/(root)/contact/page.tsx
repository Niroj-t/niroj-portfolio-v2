"use client"

import Header from "../../_components/header"
import Navigation from "../../_components/navigation"
import dynamic from "next/dynamic"

import ContactSkeleton from "../../_components/skeleton/Contact"

const Contact = dynamic(() => import("../../_components/contact"), {
  loading: () => <ContactSkeleton />,
})
const Footer = dynamic(() => import("../../_components/footer"), {
  loading: () => <div className="h-16 bg-card animate-pulse" />,
})

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation />
      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

