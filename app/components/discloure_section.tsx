"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";

export default function DisclosureSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex text-sm sm:text-base items-center mt-2 w-full justify-between rounded-lg bg-purple-200 transition px-2 py-1 sm:py-1.5 font-medium text-purple-900 hover:bg-purple-200">
            <span>{title}</span>
            <FiChevronUp
              className={`${open
                ? "rotate-180 transform transition"
                : "rotate-0 transform transition"
                } text-purple-500`}
              size={24}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 py-4 bg-neutral-800 rounded-lg prose-sm sm:prose-base prose-invert prose min-w-full break-words">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
