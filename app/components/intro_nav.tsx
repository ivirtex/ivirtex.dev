import Link from "next/link";

export default function IntroNav({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-evenly sm:flex-row space-y-1 sm:space-y-0 py-4 ${className}`}
    >
      <Link
        href="/projects"
        className="text-xl text-neutral-400 transition duration-150 hover:text-neutral-200 p-1"
      >
        projects
      </Link>
      <Link
        href="/about"
        className="text-xl text-neutral-400 transition duration-150 hover:text-neutral-200 p-1"
      >
        about
      </Link>

      <Link
        href="/contact"
        className="text-xl text-neutral-400 transition duration-150 hover:text-neutral-200 p-1"
      >
        contact
      </Link>
    </div>
  );
}
