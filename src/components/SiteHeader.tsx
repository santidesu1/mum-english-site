"use client";

import Link from "next/link";
import { branch } from "@/config/branch";
import { OwlLogo } from "./OwlLogo";
import { LangProvider, useLang } from "./lang/LangProvider";
import { LangToggle } from "./lang/LangToggle";
import { t } from "@/lib/i18n";

function HeaderInner() {
  const { lang } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <OwlLogo className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-sm font-extrabold">{branch.nameKo}</div>
            <div className="text-xs font-semibold text-black/60">{lang === "ko" ? branch.taglineKo : branch.taglineEn}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          <Link className="text-sm font-extrabold hover:underline" href="/">{t.nav.home[lang]}</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/programs">{t.nav.programs[lang]}</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/booking">{t.nav.booking[lang]}</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/notices">{t.nav.notices[lang]}</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/contact">{t.nav.contact[lang]}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href={`tel:${branch.phone}`}
            className="hidden rounded-xl bg-ink px-4 py-2 text-sm font-extrabold text-white hover:opacity-90 md:inline-flex"
          >
            {lang === "ko" ? "전화" : "Call"}
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteHeader() {
  return (
    <LangProvider>
      <HeaderInner />
    </LangProvider>
  );
}
