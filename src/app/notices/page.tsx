import Link from "next/link";
import { posts } from "@/content/posts";
import { Badge } from "@/components/ui/Badge";

export default function NoticesPage() {
  const sorted = [...posts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">공지/블로그</h1>
        <p className="mt-2 text-black/70">중요 안내와 소식을 모아두었습니다.</p>
      </header>

      <div className="grid gap-5">
        {sorted.map((p) => (
          <Link
            key={p.slug}
            href={`/notices/${p.slug}`}
            className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 hover:-translate-y-0.5 hover:shadow-soft transition"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-extrabold group-hover:underline">
                {p.title.ko}
              </h2>
              <Badge>{p.category}</Badge>
            </div>
            <p className="mt-2 text-sm text-black/60">{p.dateISO}</p>
            <p className="mt-3 text-black/70">{p.excerpt.ko}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
