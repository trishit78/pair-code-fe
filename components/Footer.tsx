import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = {
  github: "https://github.com/trishit78",
  linkedin: "https://www.linkedin.com/in/trishit-bhowmik/",
  email: "mailto:trishit456@gmail.com",
};

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-6 px-6 z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Built with ❤️ for collaborative coding
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.linkedin && (
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          )}
          {socialLinks.github && (
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          )}
          {socialLinks.email && (
            <Link
              href={socialLinks.email}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
