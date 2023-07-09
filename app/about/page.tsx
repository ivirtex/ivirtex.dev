import Link from "next/link";

import Footer from "../components/footer";
import Nav from "../components/nav";
import Title from "../components/title";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-grow">
        <div className="mx-auto flex max-w-5xl flex-col items-start px-8">
          <Title>About me</Title>
          <div className="space-y-4 text-lg">
            <p>
              Hi! My name is <b>Hubert</b>.
            </p>
            <p>
              I am a software developer from Poland. I mostly work on mobile
              apps using Flutter, but I am also interested in reverse
              engineering, 3D graphics and UI, UX design. I enjoy experimenting
              with new frameworks and libraries to see how they work and to
              determine their pros and cons (e.g. this website is built using
              Next.js).
            </p>
            <p>
              I love open-source software and I always look to contribute to
              software I use. In fact, I&apos;ve contributed several times to
              the Flutter framework, where I helped with fidelity issues in one
              of the core packages (see{" "}
              <Link href="/projects" className="link">
                projects
              </Link>{" "}
              for more info).
            </p>
            <p>
              Feel free to reach out to me on{" "}
              <Link href="/contact" className="link">
                contact
              </Link>{" "}
              page and check out my{" "}
              <a href="https://github.com/ivirtex" className="link">
                GitHub
              </a>{" "}
              profile to see what I am working on!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
