"use client";

import Link from "next/link";
import { branch } from "@/config/branch";
import { TrustCards } from "@/components/TrustCards";
import { LocationCard } from "@/components/LocationCard";
import { Button } from "@/components/ui/Button";
import { t } from "@/lib/i18n";
import { useLang } from "@/components/lang/LangProvider";

export default function HomePage() {
  const { lang } = useLang();

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-white shadow-soft ring-1 ring-black/5">
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full bg-sun px-4 py-2 text-sm font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-ink" />
              {lang === "ko"
                ? branch.closedNoteKo
                : "Mon–Fri 13:00–19:00 · Closed on weekends and Korean national holidays"}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {lang === "ko"
                ? branch.nameKo
                : "MU:M English Suwon Station Prugio Xi"}
            </h1>

            <p className="text-lg font-medium text-black/70">
              {lang === "ko"
                ? branch.taglineKo
                : "Five-day learning routine with close individual guidance"}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/booking">{t.cta.book[lang]}</Link>
              </Button>

              <Button variant="outline" asChild>
                <a href={`tel:${branch.phone}`}>
                  {t.cta.call[lang]} · {branch.phone}
                </a>
              </Button>

              <Button variant="ghost" asChild>
                <a
                  href={branch.links.naverMap}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.cta.map[lang]}
                </a>
              </Button>
            </div>

            <p className="text-sm text-black/60">
              {lang === "ko"
                ? branch.addressKo
                : "Address: 4F, Lime Square, 69 Paldal-ro, Paldal-gu, Suwon-si"}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-ink">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,0,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
            <div className="relative p-6 md:p-8">
              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-sm font-semibold text-sun">MU:M English</p>
                <p className="mt-2 text-white/90">
                  {lang === "ko"
                    ? "주 5일 학습 루틴과 꼼꼼한 피드백으로 아이의 영어 습관을 탄탄하게 잡아갑니다."
                    : "We help build strong English habits through a five-day learning routine and careful feedback."}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>
                    {lang === "ko"
                      ? "무료 주차 가능"
                      : "Free parking available"}
                  </li>
                  <li>
                    {lang === "ko"
                      ? "대기공간 · Wi-Fi · 남/녀 화장실 구분"
                      : "Waiting area · Wi-Fi · separate restrooms"}
                  </li>
                  <li>
                    {lang === "ko"
                      ? "주말/공휴일 휴무"
                      : "Closed on weekends and national holidays"}
                  </li>
                </ul>
              </div>

              <div className="mt-5 rounded-2xl bg-sun p-5 text-ink shadow-soft">
                <p className="text-sm font-bold">
                  {lang === "ko" ? "상담문의" : "Contact"}
                </p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight">
                  {branch.phone}
                </p>
                <p className="mt-2 text-sm font-medium">
                  {lang === "ko"
                    ? "카카오톡/가격 안내는 공지/블로그에서 업데이트합니다."
                    : "KakaoTalk and pricing updates are posted in Notices/Blog."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustCards />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
          <h2 className="text-xl font-extrabold">{t.nav.programs[lang]}</h2>
          <p className="mt-2 text-black/70">
            {lang === "ko"
              ? "집중한 아이에게 맞는 루틴을 안내드립니다."
              : "We guide each student into the routine that fits them best."}
          </p>

          <div className="mt-5 grid gap-3">
            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">
                {lang === "ko" ? "7–9세 파닉스 전문반" : "Ages 7–9 phonics track"}
              </p>
              <p className="mt-1 text-sm text-black/70">
                {lang === "ko"
                  ? "기초 루틴을 탄탄하게"
                  : "Build a strong foundation"}
              </p>
            </div>

            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">
                {lang === "ko"
                  ? "리딩/라이팅 확장"
                  : "Reading and writing growth"}
              </p>
              <p className="mt-1 text-sm text-black/70">
                {lang === "ko"
                  ? "학습 흐름을 자연스럽게"
                  : "Develop a natural learning flow"}
              </p>
            </div>

            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">
                {lang === "ko"
                  ? "학습 점검/피드백"
                  : "Feedback and check-ins"}
              </p>
              <p className="mt-1 text-sm text-black/70">
                {lang === "ko"
                  ? "꾸준함을 만드는 관리감"
                  : "Support that builds consistency"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/programs">
                {lang === "ko" ? "자세히 보기" : "View programs"}
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/notices">
                {lang === "ko" ? "공지 보기" : "View updates"}
              </Link>
            </Button>
          </div>
        </div>

        <LocationCard />
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-extrabold">
              {lang === "ko" ? "블로그 · SNS" : "Blog & Social"}
            </h2>
            <p className="mt-1 text-sm text-black/70">
              {lang === "ko"
                ? "최신 소식과 안내는 네이버 블로그와 인스타그램에서 확인하실 수 있습니다."
                : "You can find our latest updates and announcements on Naver Blog and Instagram."}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <a
              href={branch.links.naverBlog}
              target="_blank"
              rel="noreferrer"
            >
              {lang === "ko" ? "네이버 블로그" : "Naver Blog"}
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href={branch.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              {lang === "ko" ? "인스타그램" : "Instagram"}
            </a>
          </Button>
        </div>
      </section>

      <footer className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2 text-sm text-black/70">
            <p className="font-extrabold text-black">
              {lang === "ko"
                ? branch.nameKo
                : "MU:M English Suwon Station Prugio Xi"}
            </p>
            <p>
              {lang === "ko"
                ? branch.addressKo
                : "4F, Lime Square, 69 Paldal-ro, Paldal-gu, Suwon-si"}
            </p>
            <p>{branch.phone}</p>
            <p>
              {lang === "ko"
                ? "월–금 13:00–19:00 · 주말 및 대한민국 공휴일 휴무"
                : "Mon–Fri 13:00–19:00 · Closed on weekends and Korean national holidays"}
            </p>
          </div>

          <div className="space-y-2 text-sm text-black/70">
            <p className="font-extrabold text-black">
              {lang === "ko" ? "바로가기" : "Quick links"}
            </p>
            <p>
              <Link href="/booking" className="hover:underline">
                {lang === "ko" ? "상담 예약" : "Book a visit"}
              </Link>
            </p>
            <p>
              <Link href="/notices" className="hover:underline">
                {lang === "ko" ? "공지 / 블로그" : "Updates"}
              </Link>
            </p>
            <p>
              <a
                href={branch.links.naverMap}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {lang === "ko" ? "오시는 길" : "Directions"}
              </a>
            </p>
          </div>

          <div className="space-y-2 text-sm text-black/70">
            <p className="font-extrabold text-black">
              {lang === "ko" ? "정책" : "Policies"}
            </p>
            <p>{lang === "ko" ? "개인정보처리방침" : "Privacy policy"}</p>
            <p>{lang === "ko" ? "이용약관" : "Terms of use"}</p>
            <div className="flex gap-4 pt-2">
              <a
                href={branch.links.naverBlog}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {lang === "ko" ? "블로그" : "Blog"}
              </a>
              <a
                href={branch.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-black/5 pt-4 text-xs text-black/50">
          © 2026{" "}
          {lang === "ko"
            ? branch.nameKo
            : "MU:M English Suwon Station Prugio Xi"}
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
}
