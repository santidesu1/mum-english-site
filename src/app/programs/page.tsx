import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";

export default function ProgramsPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">프로그램</h1>
        <p className="mt-2 text-black/70">
          {branch.nameKo}는 레벨 진단 후 아이에게 맞는 학습 루틴으로 안내드립니다.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-3">
        <Card title="7–9세 파닉스 전문반" desc="기초부터 탄탄하게. (신입생 모집)" />
        <Card title="리딩/라이팅 확장" desc="리딩 흐름을 만들고 표현을 확장합니다." />
        <Card title="학습 루틴 관리" desc="꾸준함을 만드는 점검/피드백 루틴" />
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h2 className="text-xl font-extrabold">상담 안내</h2>
        <p className="mt-2 text-black/70">
          학습 목표, 현재 수준, 생활 루틴을 함께 확인하고 최적의 방향을 안내드립니다.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <a href="/booking">상담 예약</a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`tel:${branch.phone}`}>전화 문의</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
      <div className="inline-flex items-center gap-2 rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">
        루틴
      </div>
      <h3 className="mt-3 text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
    </div>
  );
}
