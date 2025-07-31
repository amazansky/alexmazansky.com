import projectsData from "./data.json";

interface Link {
  name: string;
  url: string;
  type: "primary" | "secondary";
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  links: Link[];
  hackathon?: string;
  collaborators?: string;
  license?: string;
  fork?: string;
  date: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function parseMarkdownLinks(text: string): React.ReactNode[] {
  // Regex to match markdown links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add the link
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        {match[1]} ↗
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default function Projects() {
  const projects = projectsData as Project[];

  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <div className="space-y-6">
        {sortedProjects.map((project, index) => (
          // <div className="flex flex-col space-y-1 mb-4">
          <div
            key={index}
            className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"
          >
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(project.date)}
            </p>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                  {project.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 underline hover:text-neutral-900 dark:hover:text-neutral-100 text-sm"
                    >
                      {link.name} ↗
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-2">
                {parseMarkdownLinks(project.description)}
              </p>

              <div className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                {project.hackathon && (
                  <p>🚀 Submitted to {parseMarkdownLinks(project.hackathon)}</p>
                )}
                {project.collaborators && (
                  <p>
                    👥 Worked with {parseMarkdownLinks(project.collaborators)}
                  </p>
                )}
                {project.technologies.length > 0 && (
                  <p>
                    💻 Written in{" "}
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>
                        {tech}
                        {techIndex < project.technologies.length - 2
                          ? ", "
                          : project.technologies.length > 2 &&
                            techIndex === project.technologies.length - 2
                          ? ", and "
                          : project.technologies.length === 2 && techIndex === 0
                          ? " and "
                          : ""}
                      </span>
                    ))}
                  </p>
                )}
                {project.fork && (
                  <p>🔀 Forked from {parseMarkdownLinks(project.fork)}</p>
                )}
                {project.license && <p>⚖️ {project.license} license</p>}
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </section>
  );
}
