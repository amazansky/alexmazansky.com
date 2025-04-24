import Navbar from "@/components/navbar";
import Link from "next/link";

export default function About() {
  return (
    <div className="px-2 py-2">
      <Navbar />
      <h1 className="text-5xl font-serif font-bold mb-4 px-4">About</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1/2 px-4 pb-4 md:pb-0">
          <p className="pb-3">
            Ever since discovering programming by accident in elementary school,
            I&rsquo;ve been using technology to solve problems and address big
            questions. The last 10 years have been a journey of learning and
            exploring this interest: Along the way, I&rsquo;ve automated over
            150 hours of work by writing chatbots, generated three key leads for
            an investigation by visualizing social media data, and taught 10
            underserved middle schoolers to code.
          </p>
          <p className="pb-3">
            I came to university to study the technologies that power our
            everyday machines, such as low-level computer systems and artificial
            intelligence. While at Brown, I also discovered entrepreneurship as
            an outlet for my problem-solving skills, and I&rsquo;ve been
            learning more through coursework and participation in student
            groups.
          </p>
          <p className="pb-3">
            Beyond the screen, you might find me writing music, learning new
            languages, singing, or exploring and photographing the cities around
            me. These diverse interests lend additional insights to my
            problem-solving skills, which have been at the root of some of my
            best ideas.
          </p>
          <p className="pb-3">
            I invite you to explore this website to learn more about me and my
            work. If any of what you find seems interesting,{" "}
            <Link href="/contact">let&rsquo;s connect!</Link>
          </p>
        </div>

        <div className="flex-1/2 px-4">
          <h2 className="text-2xl font-serif font-bold">
            What I&rsquo;m learning:
          </h2>
          <ul className="pb-4">
            <li>
              Natural Language Processing (
              <a href="https://csci-1460-computational-linguistics.github.io/">
                CSCI 1460
              </a>
              )
            </li>
            <li>
              Theory of Computation (
              <a href="https://cs.brown.edu/courses/csci1010/index.html">
                CSCI 1010
              </a>
              )
            </li>
            <li>
              Management of Organizations (
              <a href="https://entrepreneurship.brown.edu/project/engn-0090-management-industrial-nonprofit-organizations/">
                ENGN 90
              </a>
              )
            </li>
            <li>
              Persuasive Communication (
              <a href="https://bulletin.brown.edu/search/?P=TAPS%200220">
                TAPS 220
              </a>
              )
            </li>
          </ul>

          <h2 className="text-2xl font-serif font-bold">
            What I&rsquo;m doing:
          </h2>
          <ul className="pb-4">
            <li>
              Planning events for Brown&rsquo;s{" "}
              <a href="https://www.brownentrepreneurship.com/">
                Entrepreneurship Program
              </a>
            </li>
            <li>
              Managing the CS department&rsquo;s{" "}
              <a href="https://cs.brown.edu/degrees/undergrad/jobs/consult/">
                Sunlab Consultants
              </a>
            </li>
            <li>
              Singing with the{" "}
              <a href="https://music.brown.edu/music-making/ensembles/chorus">
                Brown University Chorus
              </a>
            </li>
            <li>Taking photographs of the world around me</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold">
            What I&rsquo;m working on:
          </h2>
          <ul className="pb-4">
            <li>
              <Link href="/projects">Technical projects</Link>
            </li>
            <li>
              <Link href="/posts">Blog</Link>
            </li>
          </ul>

          <h2 className="text-2xl font-serif font-bold">What else?</h2>
          <p>
            Since you&rsquo;ve made it this far, perhaps you want to{" "}
            <Link href="/contact">get in touch!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
