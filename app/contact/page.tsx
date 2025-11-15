import A from "app/components/A";
import { EMAIL } from "app/copywriting";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>
      <div className="space-y-8">
        <div className="prose prose-neutral dark:prose-invert">
          <p className="!mb-1">
            If anything on this site is of interest, feel free to email me at{" "}
            <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
          </p>
          <p>I look forward to hearing from you!</p>
        </div>
      </div>
    </section>
  );
}
