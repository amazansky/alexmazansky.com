import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts, getDateParts } from "app/posts/utils";
import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => {
    const { year, month, day } = getDateParts(post.metadata.publishedAt);

    return {
      year,
      month,
      day,
      slug: post.slug,
    };
  });
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => {
    const { year, month, day } = getDateParts(post.metadata.publishedAt);

    return (
      post.slug === params.slug &&
      year === params.year &&
      month === params.month &&
      day === params.day
    );
  });

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  const { year, month, day } = getDateParts(post.metadata.publishedAt);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/posts/${year}/${month}/${day}/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => {
    const { year, month, day } = getDateParts(post.metadata.publishedAt);

    return (
      post.slug === params.slug &&
      year === params.year &&
      month === params.month &&
      day === params.day
    );
  });

  if (!post) {
    notFound();
  }

  const { year, month, day } = getDateParts(post.metadata.publishedAt);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/posts/${year}/${month}/${day}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Alex Mazansky",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
