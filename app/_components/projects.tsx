"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/data";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium mb-2">Featured Projects</h2>
          <p className="text-muted-foreground text-sm">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:bg-muted/60 transition-all duration-300 min-h-min flex flex-col sm:flex-row group p-4"
              aria-label={`Project: ${project.title}, Description: ${project.description}, Technologies: ${project.tech.join(", ")}`}
            >
              <div className="sm:h-full  min-h-40 min-w-full sm:min-w-40 bg-muted rounded-sm max-w-min ">
                <img
                  src={theme === 'dark' ? (project.image_dark || project.image) : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
                  aria-label={`Project image for ${project.title}`}
                />
              </div>
              <div className="flex flex-col  ">
                <CardHeader className="space-y-0 px-2 sm:px-4 py-2">
                  <CardTitle className="flex text-base font-medium sm:text-lg items-center justify-between">
                    {project.title}
                    <div className="flex group-hover:opacity-100 sm:opacity-0 transition duration-300">
                      <Button
                        variant="ghost"
                        className="rounded-full"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View project: ${project.title} on GitHub`}
                        >
                          <FaGithub className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-full"
                        size="icon"
                        asChild
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit project: ${project.title} live`}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="line-clamp-4">
                    {project.description}
                  </CardDescription>
                  {project.slug && (
                    <div className="mt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
                        aria-label={`Read more about ${project.title}`}
                      >
                        Learn More...
                      </Link>
                    </div>
                  )}
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
