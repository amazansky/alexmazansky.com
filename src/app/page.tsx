import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen p-4 bg-primary text-white">
      <Navbar />
      <div className="flex h-full">
        <div className="content-center">
          <h1 className="text-5xl font-serif font-extrabold">
            Hi, I&rsquo;m Alex Mazansky
          </h1>
          <h2 className="text-4xl mb-3">
            a junior at Brown University studying Computer Science.
          </h2>
          <p className="text-xl mb-3">
            I&rsquo;m an ambitious problem-solver, blending technical expertise
            with creative insights to address meaningful challenges.
          </p>
          <Link href="/about">
            <Button variant="secondary">Learn more about me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
