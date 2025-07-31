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
            </strong>
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
            <a href="/contact" className="underline">
              let's connect!
            </a>
          </p>
        </div>

        <h2 className="text-xl font-semibold tracking-tighter">
          Here are some things I've been up to lately...
        </h2>
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">Doing:</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Organizing{" "}
                <a
                  href="https://emergentaiconference.com/"
                  className="underline"
                >
                  Emergent
                </a>
                , the first-ever AI startup conference at Brown
              </li>
              <li>
                Planning events for Brown's{" "}
                <a
                  href="https://www.brownentrepreneurship.com"
                  className="underline"
                >
                  Entrepreneurship Program
                </a>
              </li>
              <li>
                Managing the CS department's{" "}
                <a
                  href="https://cs.brown.edu/degrees/undergrad/jobs/consult/"
                  className="underline"
                >
                  Sunlab Consultants
                </a>
              </li>
              <li>
                Singing with the{" "}
                <a
                  href="https://music.brown.edu/music-making/ensembles/chorus"
                  className="underline"
                >
                  Brown University Chorus
                </a>
              </li>
              <li>Taking photographs of the world around me</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Learning:</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Machine Learning (
                <a
                  href="https://stephenbach.github.io/cs142-s25-www/"
                  className="underline"
                >
                  CSCI 1420
                </a>
                )
              </li>
              <li>
                Making Decisions (
                <a
                  href="https://selfservice.brown.edu/ss/bwckctlg.p_disp_course_detail?cat_term_in=202420&subj_code_in=CLPS&crse_numb_in=0220"
                  className="underline"
                >
                  CLPS 220
                </a>
                )
              </li>
              <li>
                The Entrepreneurial Process (
                <a
                  href="https://entrepreneurship.brown.edu/project/engn-1010-entrepreneurial-process-innovation-practice/"
                  className="underline"
                >
                  ENGN 1010
                </a>
                )
              </li>
              <li>
                Identites in Modern Israel (
                <a
                  href="https://selfservice.brown.edu/ss/bwckctlg.p_disp_course_detail?cat_term_in=202420&subj_code_in=JUDS&crse_numb_in=1756"
                  className="underline"
                >
                  JUDS 1756
                </a>
                )
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Working on:</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                <a href="/projects" className="underline">
                  Technical projects
                </a>
              </li>
              <li>
                <a href="/posts" className="underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">What else?</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Since you've made it this far, perhaps you want to{" "}
              <a href="/contact" className="underline">
                get in touch!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
