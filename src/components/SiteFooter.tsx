"use client";

import Link from "next/link";
import { branch } from "@/config/branch";
import { useLang } from "@/components/lang/LangProvider";

export function SiteFooter() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-sm font-extrabold">
            {lang === "ko"
              ? branch.nameKo
              : "MU:M English Suwon Station Prugio Xi"}
          </p>
          <p className="mt-2 text-sm text-black/70">
            {lang === "ko"
              ? branch.addressKo
              : "4F, Lime Square, 69 Paldal-ro, Paldal-gu, Suwon-si"}
          </p>
          <p className="mt-1 text-sm text-black/70">{branch.phone}</p>
          <p className="mt-1 text-xs text-black/50">
            {lang === "ko"
              ? `${branch.hoursKo} · ${branch.closedNoteKo}`
              : "Mon–Fri 13:00–19:00 · Closed on weekends and Korean national holidays"}
          </p>
        </div>

        <div className="text-sm">
          <p className="font-extrabold">
            {lang === "ko" ? "바로가기" : "Quick links"}
          </p>
          <div className="mt-2 grid gap-2 text-black/70">
            <Link href="/booking" className="hover:underline">
              {lang === "ko" ? "상담 예약" : "Book a visit"}
            </Link>
            <Link href="/notices" className="hover:underline">
              {lang === "ko" ? "공지 / 블로그" : "Updates"}
            </Link>
            <a
              href={branch.links.naverMap}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {lang === "ko" ? "오시는 길" : "Directions"}
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="font-extrabold">
            {lang === "ko" ? "정책" : "Policies"}
          </p>
          <div className="mt-2 grid gap-2 text-black/70">
            <Link href="/policies/privacy" className="hover:underline">
              {lang === "ko" ? "개인정보처리방침" : "Privacy policy"}
            </Link>
            <Link href="/policies/terms" className="hover:underline">
              {lang === "ko" ? "이용약관" : "Terms of use"}
            </Link>
          </div>

          <div className="mt-4 flex gap-3">
            <a
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
              href={branch.links.naverBlog}
            >
              {lang === "ko" ? "블로그" : "Blog"}
            </a>
            <a
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
              href={branch.links.instagram}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 py-4 text-center text-xs text-black/50">
        © {new Date().getFullYear()}{" "}
        {lang === "ko"
          ? branch.nameKo
          : "MU:M English Suwon Station Prugio Xi"}
        . All rights reserved.
      </div>
    </footer>
  );
}
