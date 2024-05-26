export function IconLink({ children, href }) {
  return (
    <a
      className="flex items-end hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}
