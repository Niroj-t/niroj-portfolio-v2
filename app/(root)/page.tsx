"use client"

import Header from "../_components/header"
import Navigation from "../_components/navigation"
import dynamic from "next/dynamic"

import ProfileSkeleton from "../_components/skeleton/profile"

const Profile = dynamic(() => import("../_components/profile"), {
  loading: () => <ProfileSkeleton />,
})
const Footer = dynamic(() => import("../_components/footer"), {
  loading: () => <div className="h-16 bg-card animate-pulse" />,
})

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation />
      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8">
        <Profile />
      </main>
      <Footer />
    </div>
  )
}
