export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>
      <div className="space-y-8">
        <div className="prose prose-neutral dark:prose-invert">
          <p className="!mb-1">Email me at:</p>
          <p className="font-mono text-sm px-3 py-2 !mt-0 rounded bg-muted">
            <strong>
              amazansk{" "}
              <span className="idk-if-separating-like-this-thwarts-email-scrapers-but-maybe-ill-get-less-spam-this-way">
                at
              </span>{" "}
              cs dot brown dot edu
            </strong>
          </p>
          <p>Looking forward to hearing from you!</p>
        </div>
      </div>
    </section>
  );
}
