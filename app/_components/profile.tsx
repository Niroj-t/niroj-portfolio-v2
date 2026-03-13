import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Download, MapPin } from "lucide-react";
import { skills } from "@/data";
import Link from "next/link";
import Hero from "./Hero";

export default function Profile() {
  return (
    <>
      <Hero />

      <div className="space-y-8">
        {/* Bio Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I build digital experiences that look great and work even better.
              I’m a Frontend Developer with a knack for turning complex problems
              into elegant web applications using Next.js, React, and Tailwind
              CSS. For me, coding is about more than just syntax; it’s about
              creating impactful solutions with a focus on clean architecture
              and seamless user experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With a deep command of JavaScript, I focus on building efficient,
              scalable web applications. My deep understanding of core concepts
              such as the event loop, DOM manipulation, and asynchronous
              workflows enables me to leverage modern frameworks like React and
              Next.js to their full potential.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When my terminal is closed, I’m usually deep in a binge worthy
              series, catching a movie, or exploring new music. I’m a big
              believer that a good story, whether in a film or a codebase is all
              about the details.
            </p>

            <div>
              <Link
                href="/Niroj_Thapa_Resume.pdf"
                target="_blank"
                className="inline-flex items-center text-sm text-primary hover:underline"
                aria-label="Download Resume"
                download="Niroj_Thapa_Resume.pdf"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Skills & Technologies</CardTitle>
            <CardDescription>
              Tools and technologies I use regularly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-xl border bg-card px-3 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  {skill.icon && (
                    <skill.icon
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
