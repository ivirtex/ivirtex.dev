import {
  BiLogoFlutter,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { SiCplusplus, SiDart, SiNextdotjs } from "react-icons/si";

const getIconFromTag = (name: string) => {
  const size = 20;

  switch (name) {
    case "Flutter":
      return <BiLogoFlutter size={size} />;
    case "Dart":
      return <SiDart size={size} />;
    case "React":
      return <DiReact size={size} />;
    case "Next.js":
      return <SiNextdotjs size={size} />;
    case "TypeScript":
      return <BiLogoTypescript size={size} />;
    case "JavaScript":
      return <BiLogoJavascript size={size} />;
    case "C":
      return <SiCplusplus size={size} />;
  }
};

export default function Tag({ tag }: { tag: string }) {
  const iconNode = getIconFromTag(tag);

  return (
    <div className="flex">
      {iconNode && (
        <div className="flex items-center rounded-l-lg bg-neutral-600 px-1.5 py-1">
          {iconNode}
        </div>
      )}
      <div
        className={`flex items-center rounded-lg border border-neutral-600 py-1 ${
          iconNode && "rounded-l-none"
        }`}
      >
        <div className="px-2">{tag}</div>
      </div>
    </div>
  );
}
