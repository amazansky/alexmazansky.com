export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>
      <div className="space-y-8">
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Thanks for your interest in reaching out! The best way to get in
            touch with me is by email to:
          </p>
          <p className="font-mono text-sm px-3 py-2 rounded bg-muted">
            <strong>
              amazansk{" "}
              <span className="idk-if-separating-like-this-thwarts-email-scrapers-but-maybe-ill-get-less-spam-this-way">
                at
              </span>{" "}
              cs dot brown dot edu
            </strong>
          </p>
          <p>
            I try my best to respond to all correspondence promptly. Looking
            forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
}
