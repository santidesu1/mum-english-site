"use client";

import { branch } from "@/config/branch";
import Link from "next/link";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

export function StickyMobileBar() {
  const { lang } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/5 bg-white/90 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-3 py-2">
        <a href={`tel:${branch.phone}`} className="rounded-xl bg-ink px-3 py-3 text-center text-sm font-extrabold text-white">
          {t.cta.call[lang]}
        </a>
        <Link href="/booking" className="rounded-xl bg-sun px-3 py-3 text-center text-sm font-extrabold text-ink">
          {t.cta.book[lang]}
        </Link>
        <a href={branch.links.naverMap} target="_blank" rel="noreferrer" className="rounded-xl bg-paper px-3 py-3 text-center text-sm font-extrabold text-ink ring-1 ring-black/10">
          {t.cta.map[lang]}
        </a>
      </div>
    </div>
  );
}
