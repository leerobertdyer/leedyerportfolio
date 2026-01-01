"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type PropsDefinition = {
  links: {name: string, path: string, isExternal?: boolean}[];
};

export default function Nav({ links }: PropsDefinition) {
  const linkClass = "hover:text-myPink-light hover:transform hover:scale-110";
  const activeLinkClass = "text-myPink-dark";
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="border-b-2 py-4 flex justify-evenly">
      {links.map((link) => (
        link.path === path ? null : link.isExternal 
        ? (
          <a
            className={linkClass}
            target="_blank"
            href={link.path} key={link.path}>
            {link.name}
          </a>
        )
        : (
          <Link
            className={`${path === link.path
                ? activeLinkClass
                : linkClass
              }`}
            
            href={link.path} key={link.path}>
            {link.name}
          </Link>
        )
      ))}
      {path === "coding" && <>
        <a href="https://www.github.com/leerobertdyer" target="_blank"
          className={linkClass}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/leerobertdyer/" target="_blank"
          className={linkClass}>
          LinkedIn
        </a>
      </>
      }
    </div>
  );
}
