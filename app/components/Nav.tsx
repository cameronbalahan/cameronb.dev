"use client";

import Link from "next/link";
import { ROUTES } from "../../utils/config";
import { Fragment, useEffect, useRef, useState } from "react";
import { cx } from "../../utils/formatters";

export const Nav = () => {
  const routes = Object.entries(ROUTES);
  const navRef = useRef<HTMLElement>(null);
  const [overlapping, setOverlapping] = useState(false);

  // Turn the nav blue once page content has scrolled underneath it.
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || !navRef.current) return;
    const nav = navRef.current;

    const update = () => {
      const content = main.firstElementChild?.getBoundingClientRect();
      const navBottom = nav.getBoundingClientRect().bottom;
      setOverlapping(!!content && content.top < navBottom);
    };

    update();
    main.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      main.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="pointer-events-none absolute top-0 z-10 -ml-[8px] pt-14 tracking-tight">
      <nav
        className={cx([
          "pointer-events-auto inline-flex flex-row transition-colors duration-75",
          overlapping && "text-[#020fc7]",
        ])}
        ref={navRef}
      >
        {routes.map(([routeName, route], i) => (
          <Fragment key={route}>
            <Link
              href={route}
              className={cx([
                "transition-[background-color,opacity] duration-75 flex align-middle relative py-1 px-2",
                overlapping ? "hover:bg-white" : "hover:bg-[#020fc7]",
              ])}
            >
              {routeName}
            </Link>
            {i < routes.length - 1 && (
              <span className="flex align-middle relative py-1 px-2">/</span>
            )}
          </Fragment>
        ))}
      </nav>
    </header>
  );
};
