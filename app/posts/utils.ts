import fs from "fs";
import path from "path";

export type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  image?: string;
};

type BlogPost = {
  metadata: Metadata;
  slug: string;
  year: string;
  month: string;
  day: string;
  filename: string;
};

export function parsePublishedDate(dateString: string): Date {
  if (!dateString.includes("T")) {
    dateString = `${dateString}T00:00:00`;
  }
  return new Date(dateString);
}

export function getDateParts(publishedAt: string) {
  const date = parsePublishedDate(publishedAt);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return { year, month, day, date };
}

export function getPostMetadata(filePath: string): Metadata | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return extractMetadataFromMDX(content);
  } catch (error) {
    console.warn(`Error reading file ${filePath}:`, error);
    return null;
  }
}

export function extractMetadataFromMDX(content: string): Metadata | null {
  try {
    // Look for export const metadata = { ... } pattern
    const metadataMatch = content.match(
      /export\s+const\s+metadata\s*=\s*{([\s\S]*?)}/
    );

    if (!metadataMatch) {
      return null;
    }

    const metadataContent = metadataMatch[1];

    // Parse the metadata object manually (simple approach)
    const metadata: Partial<Metadata> = {};

    // Extract title
    const titleMatch = metadataContent.match(
      /title:\s*"((?:[^"\\]|\\.)*)"|title:\s*'((?:[^'\\]|\\.)*)'/
    );
    if (titleMatch) metadata.title = titleMatch[1] || titleMatch[2];

    // Extract subtitle
    const subtitleMatch = metadataContent.match(
      /subtitle:\s*"((?:[^"\\]|\\.)*)"|subtitle:\s*'((?:[^'\\]|\\.)*)'/
    );
    if (subtitleMatch) metadata.subtitle = subtitleMatch[1] || subtitleMatch[2];

    // Extract publishedAt
    const publishedAtMatch = metadataContent.match(
      /publishedAt:\s*"((?:[^"\\]|\\.)*)"|publishedAt:\s*'((?:[^'\\]|\\.)*)'/
    );
    if (publishedAtMatch)
      metadata.publishedAt = publishedAtMatch[1] || publishedAtMatch[2];

    // Extract image
    const imageMatch = metadataContent.match(
      /image:\s*"((?:[^"\\]|\\.)*)"|image:\s*'((?:[^'\\]|\\.)*)'/
    );
    if (imageMatch) metadata.image = imageMatch[1] || imageMatch[2];

    return metadata as Metadata;
  } catch (error) {
    console.warn(`Error extracting metadata:`, error);
    return null;
  }
}

export function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content", "posts");
  const posts: BlogPost[] = [];

  if (!fs.existsSync(contentDir)) {
    return posts;
  }

  try {
    const files = fs.readdirSync(contentDir);

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;

      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const metadata = extractMetadataFromMDX(content);

      if (metadata?.publishedAt) {
        const { year, month, day } = getDateParts(metadata.publishedAt);

        // Use filename (without extension) as slug
        const slug = file.replace(/\.mdx$/, "");

        posts.push({
          metadata,
          slug,
          year,
          month,
          day,
          filename: file,
        });
      }
    }
  } catch (error) {
    console.warn("Error scanning posts directory:", error);
  }

  return posts.sort((a, b) => {
    return (
      parsePublishedDate(b.metadata.publishedAt).getTime() -
      parsePublishedDate(a.metadata.publishedAt).getTime()
    );
  });
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  let targetDate = parsePublishedDate(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
