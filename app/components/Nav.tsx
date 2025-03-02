import Link from "next/link";
import { ROUTES } from "../../utils/config";
import { Fragment } from "react";


export const Nav = () => {
  const routes = Object.entries(ROUTES);
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row align-bottom items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row align-bottom space-x-0 pr-10">
            {routes.map(([routeName, route], i) => (
                <Fragment key={route}>
                  <Link
                    href={route}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                    >
                    {routeName}
                  </Link>
                  {i < routes.length - 1 && <span className="flex align-middle relative py-1 px-2" >/</span>}
                </Fragment>
              ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}