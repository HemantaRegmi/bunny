import Image from "next/image";
import BreedCarousel from "@/components/BreedCarousel";
import NewsSection from "@/components/NewsSection";
import TopNav from "@/components/TopNav";
import { bunnyBreeds, dietGuides } from "@/data/bunnies";

export const revalidate = 1800;

const spotlightCards = [
  {
    title: "Breed Explorer",
    text: "Discover personality, origin, and care highlights for every featured bunny breed.",
    action: "Browse breeds",
    href: "#breeds"
  },
  {
    title: "Live Bunny Desk",
    text: "Track current rabbit stories from around the web with curated headline cards.",
    action: "Read latest",
    href: "#news"
  },
  {
    title: "Diet Studio",
    text: "Use practical feeding guidance built around hay, greens, hydration, and treats.",
    action: "View diet guide",
    href: "#diet"
  }
];

const insightBlocks = [
  {
    heading: "Morning Routine",
    text: "Refill hay racks, refresh water stations, and offer fresh greens before peak activity hours."
  },
  {
    heading: "Midday Enrichment",
    text: "Rotate tunnels, cardboard foraging toys, and safe chew branches to avoid boredom."
  },
  {
    heading: "Evening Health Check",
    text: "Review appetite, litter output, and posture daily to spot early signs of stress or illness."
  }
];

export default function Home() {
  const featured = bunnyBreeds[0];

  return (
    <>
      <TopNav />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 md:px-6 md:py-8">
        <section className="relative overflow-hidden rounded-3xl bg-bunny-hero bg-cover bg-center p-6 text-white shadow-soft md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 left-20 h-56 w-56 rounded-full bg-amberleaf-100/40 blur-3xl" />

          <div className="relative z-10 max-w-3xl space-y-5 motion-safe:animate-fade-in-up">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Bunny-Only Digital Habitat
            </p>
            <h1 className="font-heading text-4xl leading-tight md:text-6xl">
              The Zoo-Style Bunny Website Built Around Breeds, Care, and Live News.
            </h1>
            <p className="max-w-2xl text-base text-white/90 md:text-lg">
              BunnyHaven brings the structure of a modern zoo website into a focused rabbit experience: rotating breed
              spotlights, curated bunny updates, and practical feeding guidance.
            </p>
            <a
              href="#spotlight"
              className="inline-flex rounded-full bg-amberleaf-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amberleaf-700"
            >
              Enter Bunny Spotlight
            </a>
          </div>
        </section>

        <section id="spotlight" className="grid gap-4 md:grid-cols-3">
          {spotlightCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-2xl border border-meadow-100 bg-white p-5 shadow-soft motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h2 className="font-heading text-2xl text-meadow-900">{card.title}</h2>
              <p className="mt-2 text-sm text-meadow-800/80">{card.text}</p>
              <a
                href={card.href}
                className="mt-4 inline-flex text-sm font-semibold text-amberleaf-700 transition hover:text-amberleaf-500"
              >
                {card.action} →
              </a>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-meadow-100 bg-white p-6 shadow-soft md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-meadow-500">Bunny Of The Moment</p>
            <h2 className="mt-2 font-heading text-3xl text-meadow-900 md:text-4xl">{featured.name} Spotlight</h2>
            <p className="mt-3 max-w-2xl text-meadow-800/80">{featured.spotlight}</p>

            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              <div className="rounded-xl bg-meadow-50 p-3">
                <dt className="font-semibold text-meadow-900">Origin</dt>
                <dd className="text-meadow-700">{featured.origin}</dd>
              </div>
              <div className="rounded-xl bg-meadow-50 p-3">
                <dt className="font-semibold text-meadow-900">Temperament</dt>
                <dd className="text-meadow-700">{featured.temperament}</dd>
              </div>
              <div className="rounded-xl bg-meadow-50 p-3">
                <dt className="font-semibold text-meadow-900">Diet Focus</dt>
                <dd className="text-meadow-700">{featured.dietFocus}</dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-meadow-100 shadow-soft">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/85 px-4 py-2 text-sm font-semibold text-meadow-900 backdrop-blur animate-float">
              Featured breed image
            </div>
          </div>
        </section>

        <BreedCarousel breeds={bunnyBreeds} />
        <NewsSection />

        <section id="diet" className="rounded-3xl border border-meadow-100 bg-white p-6 shadow-soft md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-meadow-500">Diet & Wellness</p>
              <h2 className="font-heading text-3xl text-meadow-900 md:text-4xl">Bunny Diet Insights</h2>
            </div>
            <p className="max-w-lg text-sm text-meadow-800/80">
              Structured similarly to zoo exhibit explainers, this section keeps feeding strategy clear and consistent
              for every breed profile on the site.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dietGuides.map((guide, index) => (
              <article
                key={guide.title}
                className="rounded-2xl border border-meadow-100 bg-meadow-50/60 p-4 transition hover:-translate-y-1 hover:shadow-soft motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <h3 className="font-semibold text-meadow-900">{guide.title}</h3>
                <p className="mt-2 text-sm text-meadow-800/80">{guide.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 rounded-2xl bg-meadow-900 p-5 text-white md:grid-cols-3 md:p-6">
            {insightBlocks.map((item) => (
              <article key={item.heading}>
                <h3 className="font-heading text-2xl text-amberleaf-100">{item.heading}</h3>
                <p className="mt-2 text-sm text-white/90">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-meadow-100 bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-meadow-800/80 md:px-6 md:grid-cols-2">
          <p>
            BunnyHaven is a bunny-focused web experience inspired by structured zoo-style navigation and educational
            storytelling.
          </p>
          <p className="md:text-right">Built with Next.js, TypeScript, Tailwind CSS, and ready for Vercel deployment.</p>
        </div>
      </footer>
    </>
  );
}
