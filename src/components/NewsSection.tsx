import Link from "next/link";
import type { BunnyNewsItem } from "@/lib/news";

type NewsSectionProps = {
  newsItems: BunnyNewsItem[];
};

const formatDate = (dateText: string) => {
  const date = new Date(dateText);

  if (Number.isNaN(date.getTime())) {
    return "Recently updated";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
};

export default function NewsSection({ newsItems }: NewsSectionProps) {
  return (
    <section id="news" className="rounded-3xl border border-meadow-100 bg-white p-6 shadow-soft md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-meadow-500">Live News Feed</p>
          <h2 className="font-heading text-3xl text-meadow-900 md:text-4xl">Latest Bunny News</h2>
        </div>
        <p className="rounded-full bg-meadow-50 px-3 py-1 text-xs font-semibold text-meadow-700">Refreshes every 30 mins</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {newsItems.map((item) => (
          <article
            key={`${item.link}-${item.title}`}
            className="group rounded-2xl border border-meadow-100 bg-meadow-50/40 p-5 transition hover:-translate-y-1 hover:bg-meadow-50 hover:shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-amberleaf-700">{item.source}</p>
            <h3 className="mt-2 min-h-[4.8rem] text-lg font-semibold text-meadow-900">{item.title}</h3>
            <div className="mt-4 flex items-center justify-between text-sm text-meadow-700/80">
              <span>{formatDate(item.publishedAt)}</span>
              <Link href={item.link} target="_blank" className="font-semibold text-meadow-700 group-hover:text-meadow-900">
                Read story
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
