import Link from "next/link";

import Logo from "./components/logo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-noisy-gradient absolute w-full h-full opacity-60 mix-blend-overlay pointer-events-none" />
      <main className="flex px-16">
        <div className="dotted-vertical-line" />
        <div className="flex max-w-4xl flex-col space-y-8 px-4">
          <div className="flex flex-col items-center justify-evenly sm:flex-row">
            <Link
              href="/projects"
              className="text-xl text-neutral-400 transition duration-150 hover:text-neutral-200"
            >
              projects
            </Link>
            <Link
              href="/about"
              className="text-xl text-neutral-400 transition duration-150 hover:text-neutral-200"
            >
              about
            </Link>

            <Link
              href="/contact"
              className="text-xl text-neutral-400 transition duration-150 hover:text-neutral-200"
            >
              contact
            </Link>
          </div>

          <div className="dotted-horizontal-line" />
          <Logo className="animate-svg mx-auto h-10 w-max fill-white sm:h-14 md:h-20" />
          <p className="text-l text-center text-neutral-400 sm:text-xl">
            Hi! I&apos;m software developer interested in software engineering
            and mobile applications development.
          </p>
          <div className="dotted-horizontal-line after:animation-delay-200" />
        </div>
        <div className="dotted-vertical-line after:animation-delay-200" />
      </main>
    </div>
  );
}
