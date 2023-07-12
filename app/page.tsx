import IntroNav from "./components/intro_nav";
import Logo from "./components/logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="bg-noisy-gradient absolute w-screen h-screen opacity-60 mix-blend-overlay pointer-events-none" />
      <main className="flex px-16">
        <div className="dotted-vertical-line" />
        <div className="flex max-w-4xl flex-col px-4">
          <IntroNav />
          <div className="dotted-horizontal-line" />
          <div className="py-8 space-y-8">
            <Logo className="animate-svg mx-auto h-10 w-max fill-white sm:h-14 md:h-20" />
            <p className="text-l text-center text-neutral-400 sm:text-xl">
              Hi! I&apos;m software developer interested in software engineering
              and mobile applications development.
            </p>
          </div>
          <div className="dotted-horizontal-line after:animation-delay-200" />
          {/* Takes screen space in order to center main section */}
          <IntroNav className="invisible" />
        </div>
        <div className="dotted-vertical-line after:animation-delay-200" />
      </main>
    </div>
  );
}
