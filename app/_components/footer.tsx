import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                Developed by{" "}
                <span className="text-green-400">Niroj Thapa </span>· Source
                code available on <a href="https://github.com/Niroj-t/niroj-portfolio-v2" target="_blank"><span className="text-green-400">GitHub</span></a>
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Niroj-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Niroj-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:tniroj35@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send Email to Niroj"
                >
                  <MdEmail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
