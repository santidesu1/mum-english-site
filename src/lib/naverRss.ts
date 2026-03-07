e0xport type NaverPost = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string;
};

const RSS_URL = "https://blog.rss.naver.com/mum_english_supuja.xml";

function decodeCdata(value: string) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function stripHtml(value: string) {
  return value
    .replace(/<img[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getTag(block: string, tag: string) {
  const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = block.match(regex);
  return match ? decodeCdata(match[1]) : "";
}

export async function getNaverPosts(): Promise<NaverPost[]> {
  const res = await fetch(RSS_URL, {
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch RSS: ${res.status}`);
  }

  const xml = await res.text();

  const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

  return itemMatches.map((match) => {
    const item = match[1];

    return {
      title: getTag(item, "title"),
      link: getTag(item, "link"),
      description: stripHtml(getTag(item, "description")),
      pubDate: getTag(item, "pubDate"),
      category: getTag(item, "category"),
    };
  });
}
