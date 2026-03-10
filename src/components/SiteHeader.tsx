""use client";

import Link from "next/link";
import { useState } from "react";
import { branch } from "@/config/branch";
import { useLang } from "@/components/lang/LangProvider";

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: lang === "ko" ? "홈" : "Home" },
    { href: "/booking", label: lang === "ko" ? "상담 예약" : "Book a Visit" },
    { href: "/trial", label: lang === "ko" ? "무료 체험" : "Free Trial" },
    { href: "/notices", label: lang === "ko" ? "공지사항" : "Updates" },
    { href: "/contact", label: lang === "ko" ? "문의" : "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/icons/logo.png"
            alt="MU:M English"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold">
              {lang === "ko" ? branch.nameKo : "MU:M English Suwon Station Prugio Xi"}
            </p>
            <p className="truncate text-xs text-black/60">
              {lang === "ko" ? branch.taglineKo : branch.taglineEn}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-extrabold hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center rounded-full border border-black/10 bg-paper p-1">
            <button
              type="button"
              onClick={() => setLang("ko")}
              className={`rounded-full px-3 py-1 text-sm font-bold ${
                lang === "ko" ? "bg-sun text-black shadow-soft" : "text-black/60"
              }`}
            >
              KO
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-sm font-bold ${
                lang === "en" ? "bg-sun text-black shadow-soft" : "text-black/60"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center rounded-full border border-black/10 bg-paper p-1">
            <button
              type="button"
              onClick={() => setLang("ko")}
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                lang === "ko" ? "bg-sun text-black shadow-soft" : "text-black/60"
              }`}
            >
              KO
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                lang === "en" ? "bg-sun text-black shadow-soft" : "text-black/60"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-xl font-bold text-ink"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-bold text-ink hover:bg-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
