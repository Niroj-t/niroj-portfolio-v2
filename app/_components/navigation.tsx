"use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { User, Briefcase, Folder, Mail, GraduationCap } from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: <User size={16} />, href: "/" },
  {
    id: "projects",
    label: "Projects",
    icon: <Folder size={16} />,
    href: "/projects",
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase size={16} />,
    href: "/experience",
  },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap size={16} />,
    href: "/education",
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Mail size={16} />,
    href: "/contact",
  },
] as const;

export default function Navigation() {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "bg-card border-b border-border",
        isMobile
          ? "fixed bottom-0  left-0 right-0 w-full border-t border-border shadow-lg"
          : "relative",
      )}
    >
      <div className="container mx-auto px-4 lg:px-20 xl:px-32">
        <div
          className={cn(
            "sm:flex space-x-2 sm:space-x-8 overflow-x-auto",
            isMobile && "flex justify-between",
          )}
        >
          {tabs.map((tab) => (
            <Fragment key={tab.id}>
              {isMobile ? (
                <Link
                  href={tab.href}
                  className={cn(
                    "py-4 px-2 text-[10px] font-medium border-b-2 transition-colors flex flex-col gap-1 items-center justify-between w-full m-0 cursor-pointer",
                    isActive(tab.href)
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                  aria-label={`Navigate to ${tab.label} section`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </Link>
              ) : (
                <Link
                  href={tab.href}
                  className={cn(
                    "py-4 px-2 text-sm font-medium border-b-2 transition-colors cursor-pointer flex items-center gap-2",
                    isActive(tab.href)
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                  aria-label={`Navigate to ${tab.label} section`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
