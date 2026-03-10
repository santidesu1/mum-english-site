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
                ? "주 5일 1:1 맞춤 지도"
                : "Five-day 1:1 personalized guidance"}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {lang === "ko"
                ? branch.nameKo
                : "MU:M English Suwon Station Prugio Xi"}
            </h1>

            <p className="text-lg font-medium text-black/70">
              {lang === "ko" ? branch.taglineKo : branch.taglineEn}
            </p>

            <p className="max-w-xl text-base leading-7 text-black/75">
              {lang === "ko"
                ? "한 번에 많은 아이들을 가르치는 수업이 아니라, 아이 한 명의 속도와 성향에 맞춰 지도합니다."
                : "Not a large group class—each child is guided at the pace and style that fits them best."}
            </p>

            <p className="max-w-xl text-sm leading-6 text-black/60">
              {lang === "ko"
                ? "매일 1시간, 주 5일의 규칙적인 루틴이 영어 습관과 자신감을 함께 키웁니다."
                : "One hour a day, five days a week builds steady English habits and confidence."}
            </p>

            <div className="pt-1">
              <Button asChild>
                <Link href="/booking">
                  {lang === "ko" ? "상담 예약하기" : "Book a visit"}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-ink">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,0,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
            <div className="relative space-y-5 p-6 md:p-8">
              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-sm font-semibold text-sun">MU:M English</p>
                <p className="mt-2 text-white/90">
                  {lang === "ko"
                    ? "매일의 꾸준한 학습, 꼼꼼한 지도, 개별 맞춤 학습으로 영어 습관을 탄탄하게 만듭니다."
                    : "Steady daily practice, close guidance, and individualized learning help children build strong English habits."}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>{lang === "ko" ? "무료 주차 가능" : "Free parking"}</li>
                  <li>
                    {lang === "ko" ? "대기공간 · Wi-Fi" : "Waiting area · Wi-Fi"}
                  </li>
                  <li>
                    {lang === "ko" ? "남/녀 화장실 구분" : "Separate restrooms"}
                  </li>
                  <li>
                    {lang === "ko" ? "주말/공휴일 휴무" : "Closed weekends & holidays"}
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-sun p-5 text-ink shadow-soft">
                <p className="text-sm font-bold">
                  {lang === "ko" ? "상담문의" : "Contact Us"}
                </p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight">
                  {branch.phone}
                </p>
                <p className="mt-2 text-sm font-medium">
                  {lang === "ko"
                    ? "공지와 상담 안내는 블로그에서도 확인하실 수 있습니다."
                    : "Notices and consultation updates are shared on our blog."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustCards />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
          <h2 className="text-xl font-extrabold">
            {lang === "ko" ? "프로그램" : "Programs"}
          </h2>
          <p className="mt-2 text-black/70">
            {lang === "ko"
              ? "매일의 학습, 개별 확장 학습, 꾸준한 점검을 바탕으로 한 체계적인 영어 프로그램입니다."
              : "A structured English program built around daily learning, personalized extension, and steady review."}
          </p>

          <div className="mt-5 grid gap-3">
            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">
                {lang === "ko" ? "매일의 핵심 프로그램" : "Daily core program"}
              </p>
              <p className="mt-1 text-sm text-black/70">
                {lang === "ko"
                  ? "규칙적인 학습 루틴으로 영어 습관, 자신감, 그리고 탄탄한 기초를 만들어갑니다."
                  : "A structured daily routine that helps children build habit, confidence, and a strong learning base."}
              </p>
            </div>

            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">
                {lang === "ko" ? "확장 학습" : "Extension learning"}
              </p>
              <p className="mt-1 text-sm text-black/70">
                {lang === "ko"
                  ? "아이의 수준과 속도, 성장 흐름에 맞춰 확장 학습을 이어갑니다."
                  : "Additional learning is guided according to each child’s level, pace, and growth needs."}
              </p>
            </div>

            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">
                {lang === "ko" ? "복습과 온라인 학습 지원" : "Review and online support"}
              </p>
              <p className="mt-1 text-sm text-black/70">
                {lang === "ko"
                  ? "정기적인 점검과 온라인 학습 지원으로 복습과 예습을 꾸준히 이어갑니다."
                  : "Regular check-ins and online practice help children review, prepare, and stay on track."}
              </p>
            </div>
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
          <a
            href={branch.links.naverBlog}
            target="_blank"
            rel="noreferrer"
            aria-label="Naver Blog"
            title="Naver Blog"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-4 hover:bg-black/5"
          >
            <img
              src="/icons/naver-blog.png"
              alt="Naver Blog"
              className="h-5 w-auto object-contain"
            />
          </a>

          <a
            href={branch.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-4 hover:bg-black/5"
          >
            <img
              src="/icons/instagram.png"
              alt="Instagram"
              className="h-5 w-auto object-contain"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
