import A from "../components/A";

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About</h1>
      <div className="space-y-8">
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Ever since discovering programming by accident in elementary school,
            I've been{" "}
            <strong>
              using technology to solve problems and address big questions.
            </strong>{" "}
            The last 10 years have been a journey of learning and exploring this
            interest: Along the way, I've automated over 150 hours of work by
            writing chatbots, generated three key leads for an investigation by
            visualizing social media data, and taught 10 underserved middle
            schoolers to code.
          </p>
          <p>
            I came to university to study the technologies that power our
            everyday machines, such as low-level computer systems and artificial
            intelligence. While at Brown, I also discovered entrepreneurship as
            an outlet for my problem-solving skills, and I've been learning more
            through coursework and participation in student groups.
          </p>
          <p>
            Beyond the screen, you might find me writing music, learning new
            languages, singing, or exploring and photographing the cities around
            me. These diverse interests lend additional insights to my
            problem-solving skills, which have been at the root of some of my
            best ideas.
          </p>
          <p>
            I invite you to explore this website to learn more about me and my
            work. If any of what you find seems interesting,{" "}
            <A href="/contact">let's connect!</A>
          </p>
        </div>

        <h2 className="text-xl font-semibold tracking-tighter">
          Here's what I've been up to lately...
        </h2>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Doing:</h3>
            <ul className="list-disc pl-4 text-sm space-y-2 text-muted-foreground">
              <li>
                Organizing{" "}
                <A href="https://emergentaiconference.com/">Emergent</A>, the
                first-ever AI startup conference at Brown
              </li>
              <li>
                Planning events for Brown's{" "}
                <A href="https://www.brownentrepreneurship.com">
                  Entrepreneurship Program
                </A>
              </li>
              <li>
                Managing the CS department's{" "}
                <A href="https://cs.brown.edu/degrees/undergrad/jobs/consult/">
                  Sunlab Consultants
                </A>
              </li>
              <li>
                Singing with the{" "}
                <A href="https://music.brown.edu/music-making/ensembles/chorus">
                  Brown University Chorus
                </A>
              </li>
              <li>Taking photographs of the world around me</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Learning:</h3>
            <ul className="list-disc pl-4 text-sm space-y-2 text-muted-foreground">
              <li>
                Machine Learning (
                <A href="https://stephenbach.github.io/cs142-s25-www/">
                  CSCI 1420
                </A>
                )
              </li>
              <li>
                Making Decisions (
                <A href="https://selfservice.brown.edu/ss/bwckctlg.p_disp_course_detail?cat_term_in=202420&subj_code_in=CLPS&crse_numb_in=0220">
                  CLPS 220
                </A>
                )
              </li>
              <li>
                The Entrepreneurial Process (
                <A href="https://entrepreneurship.brown.edu/project/engn-1010-entrepreneurial-process-innovation-practice/">
                  ENGN 1010
                </A>
                )
              </li>
              <li>
                Identites in Modern Israel (
                <A href="https://selfservice.brown.edu/ss/bwckctlg.p_disp_course_detail?cat_term_in=202420&subj_code_in=JUDS&crse_numb_in=1756">
                  JUDS 1756
                </A>
                )
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">What else?</h3>
            <p className="text-sm text-muted-foreground">
              Since you've made it this far, perhaps you want to{" "}
              <A href="/contact">get in touch!</A>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
