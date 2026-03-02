"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { BunnyBreed } from "@/data/bunnies";

type BreedCarouselProps = {
  breeds: BunnyBreed[];
};

export default function BreedCarousel({ breeds }: BreedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBreed = useMemo(() => breeds[activeIndex], [activeIndex, breeds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % breeds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [breeds.length]);

  const move = (direction: "next" | "prev") => {
    setActiveIndex((current) => {
      if (direction === "next") {
        return (current + 1) % breeds.length;
      }

      return (current - 1 + breeds.length) % breeds.length;
    });
  };

  return (
    <section id="breeds" className="rounded-3xl bg-white/95 p-4 shadow-soft md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-meadow-500">Breed Carousel</p>
          <h2 className="font-heading text-3xl text-meadow-900 md:text-4xl">Spotlight Bunny Breeds</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => move("prev")}
            className="rounded-full border border-meadow-200 px-4 py-2 text-sm font-semibold text-meadow-800 transition hover:-translate-y-0.5 hover:bg-meadow-50"
            aria-label="Previous breed"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => move("next")}
            className="rounded-full border border-meadow-200 px-4 py-2 text-sm font-semibold text-meadow-800 transition hover:-translate-y-0.5 hover:bg-meadow-50"
            aria-label="Next breed"
          >
            Next
          </button>
        </div>
      </div>

      <article
        key={activeBreed.name}
        className="mt-6 grid overflow-hidden rounded-2xl border border-meadow-100 bg-meadow-50/70 md:grid-cols-[1.2fr,1fr] motion-safe:animate-fade-in-up"
      >
        <div className="relative min-h-[250px] md:min-h-[420px]">
          <Image
            src={activeBreed.image}
            alt={activeBreed.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between gap-5 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amberleaf-700">Now Viewing</p>
            <h3 className="mt-1 font-heading text-3xl text-meadow-900">{activeBreed.name}</h3>
            <p className="mt-4 text-sm text-meadow-900/80">{activeBreed.spotlight}</p>
          </div>

          <dl className="grid gap-3 text-sm">
            <div>
              <dt className="font-semibold text-meadow-900">Origin</dt>
              <dd className="text-meadow-900/75">{activeBreed.origin}</dd>
            </div>
            <div>
              <dt className="font-semibold text-meadow-900">Temperament</dt>
              <dd className="text-meadow-900/75">{activeBreed.temperament}</dd>
            </div>
            <div>
              <dt className="font-semibold text-meadow-900">Diet Focus</dt>
              <dd className="text-meadow-900/75">{activeBreed.dietFocus}</dd>
            </div>
          </dl>
        </div>
      </article>

      <div className="mt-5 flex snap-x gap-3 overflow-x-auto pb-1">
        {breeds.map((breed, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              type="button"
              key={breed.name}
              onClick={() => setActiveIndex(index)}
              className={`min-w-[160px] snap-start rounded-xl border p-3 text-left transition ${
                isActive
                  ? "border-meadow-500 bg-meadow-100 text-meadow-900"
                  : "border-meadow-100 bg-white text-meadow-700 hover:bg-meadow-50"
              }`}
            >
              <p className="text-sm font-semibold">{breed.name}</p>
              <p className="mt-1 text-xs opacity-80">{breed.origin}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
