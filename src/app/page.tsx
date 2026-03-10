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
                  <li>
                    {lang === "ko" ? "무료 주차 가능" : "Free parking"}
                  </li>
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
                  {lang === "ko" ? "상담문의" : "Contact"}
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
