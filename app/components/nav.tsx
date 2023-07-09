"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import Logo from "./logo";

type Navigation = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: Navigation[] = [
  { name: "projects", href: "/projects", current: false },
  { name: "about", href: "/about", current: false },
  { name: "contact", href: "/contact", current: false },
];

const className = "hover:text-neutral-300 duration-150 transition";

export default function Nav() {
  let [isOpen, setIsOpen] = useState(false);
  let path = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 mb-16 flex z-50 h-16 w-full items-center justify-around border-b border-neutral-700 bg-neutral-950/80 backdrop-blur-md backdrop-saturate-150">
        <nav className="flex w-full max-w-5xl justify-between px-4 text-xl transition-all duration-500 items-center">
          <Link
            href="/"
            className={`${className} font-semibold`}
            aria-label="Home"
          >
            <Logo className="animate-svg h-7 w-auto fill-white" />
          </Link>
          <div className="space-x-4 hidden sm:block ml-auto">
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                key={nav.name}
                className={`${className} ${
                  path == nav.href ? "text-neutral-300" : "text-neutral-500"
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div>
            <div className="flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center rounded-md p-2 ">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <MdClose onClick={() => setIsOpen(false)} size={24} />
                ) : (
                  <MdMenu onClick={() => setIsOpen(true)} size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      {isOpen && (
        <div className="min-w-full min-h-screen top-16 z-50 left-0 right-0 bottom-0 bg-neutral-950/90 backdrop-blur-md absolute backdrop-saturate-150">
          <div className="flex flex-col p-8 text-2xl">
            <div className="flex flex-col space-y-4">
              {navigation.map((nav) => (
                <Link
                  href={nav.href}
                  key={nav.name}
                  className={`${className} ${
                    path == nav.href ? "text-neutral-300" : "text-neutral-500"
                  }`}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
