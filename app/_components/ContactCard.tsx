import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const contactItems = [
  {
    icon: <MdEmail className="size-7 text-muted-foreground" />,
    title: "Email",
    value: "tniroj35@gmail.com",
    link: "mailto:tniroj35@gmail.com",
  },
  {
    icon: <FaLinkedin className="size-7 text-muted-foreground" />,
    title: "LinkedIn",
    value: "@nirojthapa",
    link: "https://www.linkedin.com/in/nirojthapa/",
  },
  {
    icon: <FaGithub className="size-7 text-muted-foreground" />,
    title: "GitHub",
    value: "@Niroj-t",
    link: "https://github.com/Niroj-t",
  },
];

export default function ContactCard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} links`}
          >
            <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
              <CardContent className="flex items-center gap-3 p-2">
                <div className="h-16 w-16 rounded-md border border-border bg-background flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
