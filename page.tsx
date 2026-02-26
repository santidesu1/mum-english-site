import Link from "next/link";
import { branch } from "@/config/branch";
import { TrustCards } from "@/components/TrustCards";
import { LocationCard } from "@/components/LocationCard";
import { Button } from "@/components/ui/Button";
import { t } from "@/lib/i18n";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-white shadow-soft ring-1 ring-black/5">
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full bg-sun px-4 py-2 text-sm font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-ink" />
              {branch.hoursKo} · {branch.closedNoteKo}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {branch.nameKo}
            </h1>
            <p className="text-lg font-medium text-black/70">
              {branch.taglineKo}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/booking">{t.cta.book.ko}</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={`tel:${branch.phone}`}>{t.cta.call.ko} · {branch.phone}</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={branch.links.naverMap} target="_blank" rel="noreferrer">
                  {t.cta.map.ko}
                </a>
              </Button>
            </div>

            <p className="text-sm text-black/60">
              주소: {branch.addressKo}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-ink">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,0,0.35),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,212,0,0.25),transparent_50%)]" />
            <div className="relative p-6 md:p-8">
              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-sm font-semibold text-sun">MU:M English</p>
                <p className="mt-2 text-white/90">
                  주 5일 학습 루틴과 꼼꼼한 피드백으로 아이의 영어 습관을 탄탄하게 잡아갑니다.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>• 무료 주차 가능</li>
                  <li>• 대기공간 · Wi‑Fi · 남/녀 화장실 구분</li>
                  <li>• 주말/공휴일 휴무</li>
                </ul>
              </div>

              <div className="mt-5 rounded-2xl bg-sun p-5 text-ink shadow-soft">
                <p className="text-sm font-bold">상담문의</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight">{branch.phone}</p>
                <p className="mt-2 text-sm font-medium">
                  카카오톡/가격 안내는 공지/블로그에서 업데이트합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustCards />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
          <h2 className="text-xl font-extrabold">{t.nav.programs.ko}</h2>
          <p className="mt-2 text-black/70">
            레벨 진단 후 아이에게 맞는 루틴으로 안내드립니다.
          </p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">7–9세 파닉스 전문반</p>
              <p className="mt-1 text-sm text-black/70">기초 루틴을 탄탄하게</p>
            </div>
            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">리딩/라이팅 확장</p>
              <p className="mt-1 text-sm text-black/70">학습 흐름을 자연스럽게</p>
            </div>
            <div className="rounded-xl bg-paper p-4 ring-1 ring-black/5">
              <p className="font-bold">학습 점검/피드백</p>
              <p className="mt-1 text-sm text-black/70">꾸준함을 만드는 관리</p>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/programs">자세히 보기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/notices">공지 보기</Link>
            </Button>
          </div>
        </div>

        <LocationCard />
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-extrabold">SNS</h2>
            <p className="mt-1 text-sm text-black/70">최신 소식은 블로그/인스타그램에서 확인하세요.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <a href={branch.links.naverBlog} target="_blank" rel="noreferrer">네이버 블로그</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={branch.links.instagram} target="_blank" rel="noreferrer">인스타그램</a>
            </Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href={branch.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="aspect-square rounded-xl bg-paper ring-1 ring-black/5 hover:shadow-soft"
              aria-label="Instagram"
              title="Instagram"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
