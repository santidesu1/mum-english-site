"use client";

import { useLang } from "@/components/lang/LangProvider";

export function TrustCards() {
  const { lang } = useLang();

  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
      <h2 className="text-xl font-extrabold">
        {lang === "ko" ? "왜 뮤엠영어인가요?" : "Why MU:M English?"}
      </h2>

      <p className="mt-2 text-black/70">
        {lang === "ko"
          ? "무리한 약속 대신, 매일 쌓이는 루틴을 가장 중요하게 생각합니다."
          : "Instead of unrealistic promises, we focus on the routine built day by day."}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card
          title={lang === "ko" ? "주 5일 학습 루틴" : "Five-day learning routine"}
          desc={
            lang === "ko"
              ? "월–금 꾸준히, 습관이 실력으로 이어지게"
              : "Consistent weekday learning that turns routine into real progress"
          }
        />
        <Card
          title={lang === "ko" ? "개별 지도 중심" : "Individualized guidance"}
          desc={
            lang === "ko"
              ? "아이의 리듬과 성향에 맞춘 안내"
              : "Careful guidance tailored to each child’s pace and learning style"
          }
        />
        <Card
          title={lang === "ko" ? "피드백/점검" : "Feedback and check-ins"}
          desc={
            lang === "ko"
              ? "학습 흐름을 놓치지 않게 꼼꼼하게"
              : "Close follow-up so learning stays on track"
          }
        />
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl bg-paper p-5 ring-1 ring-black/5">
      <p className="text-sm font-extrabold">{title}</p>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
    </div>
  );
}
