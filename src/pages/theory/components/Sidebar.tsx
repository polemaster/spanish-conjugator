import React, { useEffect, useState } from "react";
import { TENSES } from "pages/theory/data/tenses";

export const Sidebar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(TENSES[0].id);

  // Scroll-spy logic using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // triggers when element is in middle
        threshold: 0,
      },
    );

    TENSES.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className={`
        fixed top-16 w-80 h-full px-6 pt-8 border-r border-neutral-400
        overflow-y-auto hidden lg:block
      `}
    >
      <h1 className="text-xl font-bold mt-0 mb-4">On this page</h1>
      <ul className="space-y-2">
        {TENSES.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`
                  block px-3 py-2 rounded transition-colors hover:text-indigo-400
                  ${id === activeId ? "text-indigo-400  " : ""}
                `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
