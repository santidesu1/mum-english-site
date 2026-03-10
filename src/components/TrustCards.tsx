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
          ? "무리한 약속보다, 아이가 꾸준히 배우고 스스로 쌓아갈 수 있는 학습 루틴을 더 중요하게 생각합니다."
          : "Rather than unrealistic promises, we focus on a learning routine a child can build steadily and sustain with confidence."}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card
          title={
            lang === "ko" ? "주 5일 학습 루틴" : "Five-day learning routine"
          }
          desc={
            lang === "ko"
              ? "매일의 꾸준함이 영어 습관과 실력으로 이어지게 합니다"
              : "Daily consistency helps turn English into habit and real progress"
          }
        />

        <Card
          title={lang === "ko" ? "개별 맞춤 지도" : "Personalized guidance"}
          desc={
            lang === "ko"
              ? "아이의 속도와 성향에 맞춰 무리 없이 이어갑니다"
              : "Each child is guided at a pace and style that fits naturally"
          }
        />

        <Card
          title={
            lang === "ko"
              ? "꼼꼼한 점검과 피드백"
              : "Careful check-ins and feedback"
          }
          desc={
            lang === "ko"
              ? "배운 내용을 놓치지 않도록 세심하게 확인합니다"
              : "Close follow-up helps children keep learning on track"
          }
        />
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-paper p-5 ring-1 ring-black/5">
      <p className="text-sm font-extrabold">{title}</p>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
    </div>
  );
}
