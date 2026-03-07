"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { useLang } from "@/components/lang/LangProvider";
import type { NaverPost } from "@/lib/naverRss";

export default function NoticesPage() {
  const { lang } = useLang();
  const [posts, setPosts] = useState<NaverPost[]>([]);

  useEffect(() => {
    fetch("/api/naver-posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load Naver posts:", err);
        setPosts([]);
      });
  }, []);

  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">
          {lang === "ko" ? "공지/블로그" : "Updates"}
        </h1>
        <p className="mt-2 text-black/70">
          {lang === "ko"
            ? "중요 안내와 소식을 모아두었습니다."
            : "Latest notices and events from our branch."}
        </p>
      </header>

      <div className="grid gap-5">
        {posts.map((p) => (
          <Link
            key={p.link}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 hover:-translate-y-0.5 hover:shadow-soft transition"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-extrabold group-hover:underline">
                {p.title}
              </h2>
              <Badge>{p.category || "post"}</Badge>
            </div>

            <p className="mt-2 text-sm text-black/60">{p.pubDate}</p>
            <p className="mt-3 text-black/70">{p.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
