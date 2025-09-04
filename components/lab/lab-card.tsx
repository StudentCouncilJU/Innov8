"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BorderBeam } from "../magicui/border-beam";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href?: string;
  className?: string;
};

export function LabCard({
  title,
  description,
  imageUrl,
  imageAlt,
  href = "#",
  className,
}: Props) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-2xl overflow-hidden",
        className
      )}
      aria-labelledby={`${title}-title`}
    >
      {/* Glow layer */}

      {/* Card Body */}
      <div className="relative z-20 flex flex-col p-5">

        <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-black relative z-10">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            width={1280}
            height={720}
            className="h-60 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
           {/* <BorderBeam
                        duration={6}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-orange-300 to-transparent"
                      /> */}
                      <BorderBeam
                        duration={6}
                        delay={3}
                        size={400}
                        borderWidth={2}
                        className="from-transparent via-blue-300 to-transparent"
                      />
        </div>
      </div>

      <header>
        <h3
          id={`${title}-title`}
          className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white text-balance"
        >
          {title}
        </h3>
      </header>

      <p className="text-sm md:text-base leading-relaxed text-neutral-300">
        {description}
      </p>

      <div>
        <Link
          href={href}
          className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Read more about ${title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
