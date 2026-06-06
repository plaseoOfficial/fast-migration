"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

/** Filter tab in the category bar. `key` "all" shows every project. */
export interface ReferenzCategory {
  key: string;
  label: string;
}

/** One project tile in the reference aggregator (ItemList entry). */
export interface ReferenzProject {
  image: string;
  imageAlt: string;
  /** Uppercase category label shown above the title (e.g. "Küchen nach Maß"). */
  category: string;
  /** Maps the tile to a category tab (matches a ReferenzCategory.key). */
  categoryKey: string;
  title: string;
  /** Short detail line shown under the title (also used for the ImageObject schema). */
  description: string;
  /** Optional extra detail line (location / scope / material). */
  meta?: string;
  /** Cluster / detail page this project links to. */
  href: string;
  linkLabel?: string;
}

interface ReferenzenGridProps {
  eyebrow?: string;
  heading: string;
  /** Editorial lead copy; each string is its own paragraph. */
  leadParagraphs: string[];
  /** Filter tabs (the first entry, usually "Übersicht"/all, is active initially). */
  categories: ReferenzCategory[];
  projects: ReferenzProject[];
}

/**
 * Reference hub aggregator: an editorial lead, a centred category filter bar and
 * a photo grid. Each tile shows the project photo (subtle zoom on hover) with the
 * project details written underneath — category, title, a short description and a
 * discreet link to the matching cluster (or, later, a project detail page).
 * Used as the centre block of `/referenzen/`; copy lives in
 * `src/lib/content/referenzen.ts`.
 */
export function ReferenzenGrid({
  eyebrow = "REFERENZEN AUS WERKSTATT UND OBJEKT",
  heading,
  leadParagraphs,
  categories,
  projects,
}: ReferenzenGridProps) {
  const [activeKey, setActiveKey] = useState(categories[0]?.key ?? "all");

  const visible =
    activeKey === "all"
      ? projects
      : projects.filter((project) => project.categoryKey === activeKey);

  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[820px]">
          <p
            className="uppercase"
            style={{
              fontSize: "14px",
              lineHeight: "23.8px",
              fontWeight: 500,
              letterSpacing: "2px",
              color: "rgb(61,61,61)",
            }}
          >
            {eyebrow}
          </p>
          <h2
            className="mt-4 text-[28px] leading-[1.15] sm:text-[37px] sm:leading-[1.1] lg:text-[45px] lg:leading-[1.05] tracking-[-1px] max-lg:break-words max-lg:hyphens-auto"
            style={{ fontWeight: 500, color: "rgb(61,61,61)" }}
            lang="de"
          >
            {heading}
          </h2>

          {leadParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-5"
              style={{
                fontSize: "18px",
                lineHeight: "31.5px",
                fontWeight: 500,
                color: "rgb(102,102,102)",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Category filter bar */}
        <nav
          aria-label="Referenzen filtern"
          className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 lg:mt-12 lg:gap-x-10"
        >
          {categories.map((category) => {
            const isActive = category.key === activeKey;
            return (
              <button
                key={category.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveKey(category.key)}
                className="relative pb-2 transition-colors"
                style={{
                  fontSize: "18px",
                  lineHeight: "26px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "rgb(61,61,61)" : "rgba(61,61,61,0.7)",
                }}
              >
                <span className="hover:text-[rgb(237,168,33)]">{category.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-[rgb(61,61,61)] transition-opacity"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
              </button>
            );
          })}
        </nav>

        {/* Project grid (ItemList) */}
        <ul className="mt-10 grid list-none grid-cols-1 gap-x-6 gap-y-12 p-0 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-8">
          {visible.map((project) => (
            <li key={project.title} className="flex">
              <Link href={project.href} className="group flex w-full flex-col">
                {/* Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 392px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details underneath */}
                <p
                  className="mt-5 uppercase"
                  style={{
                    fontSize: "13px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    color: "rgb(237,168,33)",
                  }}
                >
                  {project.category}
                </p>

                <h3
                  className="mt-2 max-lg:break-words max-lg:hyphens-auto"
                  lang="de"
                  style={{
                    fontSize: "22px",
                    lineHeight: "28px",
                    fontWeight: 500,
                    color: "rgb(61,61,61)",
                  }}
                >
                  {project.title}
                </h3>

                {project.meta && (
                  <p
                    className="mt-2"
                    style={{
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: 500,
                      color: "rgb(102,102,102)",
                    }}
                  >
                    {project.meta}
                  </p>
                )}

                <p
                  className="mt-3"
                  style={{
                    fontSize: "16px",
                    lineHeight: "27px",
                    fontWeight: 500,
                    color: "rgb(102,102,102)",
                  }}
                >
                  {project.description}
                </p>

                <span
                  className="mt-4 inline-flex items-center text-[rgb(61,61,61)] transition-colors group-hover:text-[rgb(237,168,33)]"
                  style={{
                    fontSize: "14px",
                    lineHeight: "23.8px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginTop: "auto",
                    paddingTop: "16px",
                  }}
                >
                  <span>{project.linkLabel ?? "Projekt ansehen"}</span>
                  <ArrowRightIcon className="ml-2 inline-block h-[1em] w-auto align-middle transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
