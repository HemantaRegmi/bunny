import Link from "next/link";

const navLinks = [
  { href: "#spotlight", label: "Spotlight" },
  { href: "#breeds", label: "Breeds" },
  { href: "#news", label: "Latest News" },
  { href: "#diet", label: "Diet & Care" }
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-meadow-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-heading text-2xl text-meadow-900">
            BunnyHaven
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-meadow-800 transition hover:text-amberleaf-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#news"
            className="rounded-full bg-meadow-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-meadow-900"
          >
            View Updates
          </Link>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-meadow-200 bg-white px-3 py-1 text-xs font-semibold text-meadow-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
