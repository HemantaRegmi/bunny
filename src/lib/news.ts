export type BunnyNewsItem = {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
};

const NEWS_FEED_URL =
  "https://news.google.com/rss/search?q=rabbit%20OR%20bunny%20care%20breeds&hl=en-US&gl=US&ceid=US:en";

const FALLBACK_NEWS: BunnyNewsItem[] = [
  {
    title: "Rabbit rescue groups report rising adoption inquiries in spring season",
    link: "https://rabbit.org/",
    source: "House Rabbit Society",
    publishedAt: "2026-03-01"
  },
  {
    title: "Veterinary teams emphasize hay-first feeding to reduce digestive emergencies",
    link: "https://wabbitwiki.com/wiki/Diet",
    source: "WabbitWiki",
    publishedAt: "2026-02-25"
  },
  {
    title: "Urban pet owners redesign indoor habitats with larger rabbit play zones",
    link: "https://rabbitwelfare.co.uk/",
    source: "Rabbit Welfare Association",
    publishedAt: "2026-02-21"
  }
];

const decodeXml = (value: string): string =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");

const captureTag = (item: string, tag: string): string => {
  const direct = item.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));

  if (direct?.[1]) {
    return decodeXml(direct[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim());
  }

  return "";
};

const parseItems = (xml: string): BunnyNewsItem[] => {
  const matches = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return matches
    .slice(0, 8)
    .map((item) => {
      const title = captureTag(item, "title");
      const link = captureTag(item, "link");
      const pubDate = captureTag(item, "pubDate");
      const source =
        title.split(" - ").length > 1
          ? title.split(" - ").slice(-1)[0].trim()
          : captureTag(item, "source") || "Bunny News";

      return {
        title: title.replace(/\s-\s[^-]+$/, ""),
        link,
        source,
        publishedAt: pubDate
      };
    })
    .filter((entry) => entry.title && entry.link);
};

export const getBunnyNews = async (): Promise<BunnyNewsItem[]> => {
  try {
    const response = await fetch(NEWS_FEED_URL, {
      next: { revalidate: 1800 },
      headers: {
        "User-Agent": "BunnyHaven/1.0"
      }
    });

    if (!response.ok) {
      throw new Error(`Unable to fetch bunny news: ${response.status}`);
    }

    const xml = await response.text();
    const parsed = parseItems(xml);

    if (parsed.length === 0) {
      return FALLBACK_NEWS;
    }

    return parsed;
  } catch {
    return FALLBACK_NEWS;
  }
};
