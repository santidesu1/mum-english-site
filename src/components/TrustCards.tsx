import { t } from "@/lib/i18n";

export function TrustCards() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
      <h2 className="text-xl font-extrabold">{t.sections.trust.ko}</h2>
      <p className="mt-2 text-black/70">
        무리한 약속 대신, 매일 쌓이는 루틴을 가장 중요하게 생각합니다.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card title="주 5일 학습 루틴" desc="월–금 꾸준히, 습관이 실력으로 이어지게" />
        <Card title="개별 지도 중심" desc="아이의 리듬과 성향에 맞춘 안내" />
        <Card title="피드백/점검" desc="학습 흐름을 놓치지 않게 꼼꼼하게" />
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
