import Header from "../../../_components/header";
import Navigation from "../../../_components/navigation";
import Footer from "../../../_components/footer";
import { projects } from "@/data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation />

      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8 space-y-8">
        <div>
          <Link
            href="/projects"
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            ← Back to projects
          </Link>
        </div>

        <section className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
            {project.longDescription ?? project.description}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {(project.features ?? []).map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {(project.challenges ?? []).map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learnings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {(project.learnings ?? []).map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              {project.feedbackEmail ? (
                <p>
                  For feedback or suggestions, contact me at{" "}
                    <a
                      href={`mailto:${project.feedbackEmail}`}
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      {project.feedbackEmail}
                    </a>
                  .
                </p>
              ) : (
                <p>
                  You can connect with me through the contact section of this
                  portfolio.
                </p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.live && (
              <Button asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FaGithub className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

