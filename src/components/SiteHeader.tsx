"use client";

import Link from "next/link";
import { branch } from "@/config/branch";
import { OwlLogo } from "./OwlLogo";
import { useLang } from "@/components/lang/LangProvider";
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
          <Link className="text-sm font-extrabold hover:underline" href="/booking">Book a Visit</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/trial">Free Trial</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/notices">{t.nav.notices[lang]}</Link>
          <Link className="text-sm font-extrabold hover:underline" href="/contact">{lang === "ko" ? t.nav.contact[lang] : "Contact Us"}</Link>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <LangToggle />
        </div>
      </div>
    </header>
  );
}

export function SiteHeader() {
  return <HeaderInner />;
}
