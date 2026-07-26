import Image from "next/image";
import A from "./components/A";
import { EMAIL, HEADER_1 } from "./copywriting";
import work from "./work.json";

export default function Page() {
  const formatWorkDate = (start: string, end: string) => {
    const startYear = start.slice(0, 4);

    if (end == "present") {
      return `${startYear}-present`;
    }

    const endYear = end.slice(0, 4);

    if (startYear === endYear) {
      return startYear;
    }
    return `${startYear}-${endYear.slice(-2)}`;
  };

  return (
    <>
      <h1 className="mb-1 text-3xl font-semibold tracking-tighter">
        {HEADER_1}
      </h1>
      <section className="prose mb-6">
        <p>
          I'm currently a Deployed Engineer at LangChain, where I help companies
          make their AI agents more reliable and scalable.
        </p>
        <p>
          I graduated from Brown University in computer science. During school,
          I interned at two startups and organized Brown's first-ever{" "}
          <A href="https://emergentaiconference.com">AI venture conference</A>.
        </p>
        <p>
          Offline, you might find me biking, playing music, meeting new people,
          or exploring the cities around me.
        </p>
      </section>
      <h2 className="text-xl mb-4">Work</h2>
      <div className="space-y-1.5 mb-8">
        {work.map((workItem, index) => (
          <div
            key={index}
            className="flex items-center justify-between pb-1.5 border-b border-muted-border border-dashed"
          >
            <div className="flex items-center space-x-2">
              {workItem.imageUrl && (
                <Image
                  src={`/work/${workItem.imageUrl}`}
                  alt={`${workItem.name} logo`}
                  width={200}
                  height={200}
                  className="w-6 h-6 rounded-md"
                />
              )}
              <a href={workItem.link} target="_blank" rel="noopener noreferrer">
                <span>{workItem.name}</span>
                <span className="text-xs ml-2 text-muted-foreground">
                  {workItem.title}
                </span>
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              {formatWorkDate(workItem.start, workItem.end)}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-xl mb-4">Contact</h2>
      <p>
        If anything on this site is of interest, feel free to email me at{" "}
        <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
      </p>
    </>
  );
}
