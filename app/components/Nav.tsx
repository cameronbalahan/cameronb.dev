import Link from "next/link";
import { ROUTES } from "../../utils/config";



export const Nav = () => {
  const routes = Object.entries(ROUTES);
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row align-bottom items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row align-bottom space-x-0 pr-10">
            {routes.map(([name, route], i) => {
              return (
                <>
                  <Link
                    key={route}
                    href={route}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                    >
                    {name}
                  </Link>
                  {i < routes.length - 1 && <span className="flex align-middle relative py-1 px-2" >/</span>}
                </>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}