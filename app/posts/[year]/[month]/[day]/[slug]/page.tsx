import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";
import { NAME } from "../../../../../copywriting";
import { baseUrl } from "../../../../../sitemap";
import {
  formatDate,
  getBlogPosts,
  getPostMetadata,
  Metadata,
} from "../../../../utils";

interface PostPageProps {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    year: post.year,
    month: post.month,
    day: post.day,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { year, month, day, slug } = await params;

  const filename = `${slug}.mdx`;
  const filePath = path.join(process.cwd(), "content", "posts", filename);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Post Not Found",
    };
  }

  const metadata = getPostMetadata(filePath);

  if (!metadata) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: metadata.title,
    description: metadata.subtitle,
    openGraph: {
      title: metadata.title,
      description: metadata.subtitle,
      type: "article",
      publishedTime: metadata.publishedAt,
      url: `${baseUrl}/posts/${year}/${month}/${day}/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, day, slug } = await params;

  // Use slug directly as filename (with .mdx extension)
  const filename = `${slug}.mdx`;
  const filePath = path.join(process.cwd(), "content", "posts", filename);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  let mdxFile: React.ComponentType | null = null;
  let metadata: Metadata | null = null;

  try {
    // Dynamic import of the MDX file
    const module = await import(`../../../../../../content/posts/${filename}`);
    mdxFile = module.default;

    // Extract metadata from file
    metadata = getPostMetadata(filePath);
  } catch (error) {
    console.warn(`Error importing ${filename}:`, error);
    notFound();
  }

  if (!mdxFile) {
    notFound();
  }

  const PostComponent = mdxFile;

  return (
    <section>
      {metadata && (
        <>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: metadata.title,
                datePublished: metadata.publishedAt,
                dateModified: metadata.publishedAt,
                description: metadata.subtitle,
                image: metadata.image
                  ? `${baseUrl}${metadata.image}`
                  : `/og?title=${encodeURIComponent(metadata.title)}`,
                url: `${baseUrl}/posts/${year}/${month}/${day}/${slug}`,
                author: {
                  "@type": "Person",
                  name: NAME,
                },
              }),
            }}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter">
            {metadata.title}
          </h1>
          {metadata.subtitle && (
            <p className="text-sm text-muted-foreground">
              <em>{metadata.subtitle}</em>
            </p>
          )}
          <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm">{formatDate(metadata.publishedAt)}</p>
          </div>
          <article className="prose">
            <PostComponent />
          </article>
        </>
      )}
    </section>
  );
}

export const dynamicParams = false;
